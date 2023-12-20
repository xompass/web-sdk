import { Filter } from './core/ApiFetch';
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from './core/LocalStorage';
import { User, UserCrendentials, UserType } from './core/User';
import {
  Admin_findById,
  Admin_login,
  Admin_logout,
} from './endpoints/AdminService';
import {
  Manager_findById,
  Manager_login,
  Manager_logout,
} from './endpoints/ManagerService';
import { Admin } from './models/Admin';
import { CommonAccessToken } from './models/CommonAccessToken';
import { Manager } from './models/Manager';

export class ApiClient {
  private cachedUser: User | undefined;
  constructor(
    private readonly baseUrl: string,
    private accessToken?: string,
    private userId?: string,
    private principalType?: UserType,
  ) {
    const previousBaseUrl = getLocalStorageValue('vsaas$baseUrl');
    if (previousBaseUrl && previousBaseUrl !== baseUrl) {
      this.logout();
    }

    setLocalStorageValue('vsaas$baseUrl', this.baseUrl);
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public getAccessToken(): string | undefined {
    return this.accessToken;
  }

  public setAccessToken(accessToken: string | undefined): void {
    this.accessToken = accessToken;
  }

  public getUserId(): string | undefined {
    return this.userId;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getPrincipalType(): UserType | undefined {
    return this.principalType;
  }

  public setPrincipalType(principalType: UserType): void {
    this.principalType = principalType;
  }

  public getCachedUser(): User | undefined {
    return this.cachedUser;
  }

  public async logout(): Promise<void> {
    const storedAccessToken = getLocalStorageValue('vsaas$accessToken');
    if (storedAccessToken && this.principalType) {
      try {
        switch (this.principalType) {
          case 'Admin':
            await Admin_logout();
            break;
          case 'Manager':
            await Manager_logout();
            break;
          default:
            throw new Error('Invalid user type');
        }
      } catch (e) {
        // Ignore errors
      }
    }

    this.accessToken = undefined;
    this.userId = undefined;
    this.principalType = undefined;

    setLocalStorageValue('vsaas$accessToken', undefined);
    setLocalStorageValue('vsaas$userId', undefined);
    setLocalStorageValue('vsaas$principalType', undefined);
  }

  public async login(): Promise<User>;
  public async login(
    credentials: UserCrendentials,
    principalType: UserType,
  ): Promise<User>;
  public async login(
    credentials?: UserCrendentials,
    principalType?: UserType,
  ): Promise<User> {
    const defaultTTL = 48 * 60 * 60;

    if (credentials && principalType) {
      // Check if the principal type is valid
      if (['Admin', 'Manager'].indexOf(principalType) === -1) {
        throw new Error('Invalid user type');
      }

      // Check if the credentials are valid
      if (
        !credentials.password ||
        (!credentials.username && !credentials.email)
      ) {
        throw new Error('Invalid credentials');
      }

      let loginFunc: (
        credentials: {
          username?: string;
          email?: string;
          password: string;
        },
        include: any,
      ) => Promise<CommonAccessToken>;

      // Choose the correct login function based on the principal type
      switch (principalType) {
        case 'Admin':
          loginFunc = Admin_login;
          break;
        case 'Manager':
          loginFunc = Manager_login;
          break;
        default:
          throw new Error('Invalid user type');
      }

      const token = await loginFunc(credentials, {
        include: {
          relation: 'user',
          scope: { include: ['container'] },
        },
      });

      this.accessToken = token.id;
      this.userId = token.userId;
      this.principalType = token.principalType as UserType;

      const ttl = token.ttl || defaultTTL;

      setLocalStorageValue('vsaas$accessToken', this.accessToken, ttl);
      setLocalStorageValue('vsaas$userId', this.userId, ttl);
      setLocalStorageValue('vsaas$principalType', this.principalType, ttl);

      const user = token.user as User;
      user.type = this.principalType;

      this.cachedUser = user;

      return user;
    }

    if (!this.accessToken || !this.userId || !this.principalType) {
      throw new Error('access token, user id, and principal type required');
    }

    if (['Admin', 'Manager'].indexOf(this.principalType) === -1) {
      throw new Error('Invalid user type');
    }

    try {
      setLocalStorageValue('vsaas$accessToken', this.accessToken, defaultTTL);
      setLocalStorageValue('vsaas$userId', this.userId, defaultTTL);
      setLocalStorageValue(
        'vsaas$principalType',
        this.principalType,
        defaultTTL,
      );

      let GetPrincipal: (
        id: string,
        filter: Filter<Manager | Admin>,
      ) => Promise<Manager | Admin>;

      switch (this.principalType) {
        case 'Admin':
          GetPrincipal = Admin_findById;
          break;
        case 'Manager':
          GetPrincipal = Manager_findById;
          break;
        default:
          throw new Error('Invalid user type');
      }

      const user = (await GetPrincipal(this.userId, {
        include: ['container'],
      })) as User;
      user.type = this.principalType as UserType;

      this.cachedUser = user;
      return user;
    } catch (error) {
      this.logout();
      throw error;
    }
  }
}

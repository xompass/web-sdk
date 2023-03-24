import { Admin } from '../models/Admin';
import { Manager } from '../models/Manager';

export type UserCrendentials = {
  email?: string;
  username?: string;
  password: string;
};

export type UserType = 'Admin' | 'Manager';

export type User = (Admin | Manager) & { type: UserType };

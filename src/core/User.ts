import { Admin, AdminStorageContainer } from '../models/Admin';
import {
  Manager,
  ManagerStorageContainer,
  Permission,
} from '../models/Manager';

export type UserCrendentials = ({ email: string } | { username: string }) & {
  password: string;
};

export type UserType = 'Admin' | 'Manager';

type AdminLoginResponse = {
  type: 'Admin';
  container?: AdminStorageContainer;
} & Admin;

type ManagerLoginResponse = {
  type: 'Manager';
  container?: ManagerStorageContainer;
  permission?: Permission;
} & Manager;

export type User = AdminLoginResponse | ManagerLoginResponse;

import { Admin, AdminStorageContainer } from '../models/Admin';
import { SuperAdmin } from '../models/SuperAdmin';
import {
  Manager,
  ManagerStorageContainer,
  Permission,
} from '../models/Manager';

export type UserCrendentials = ({ email: string } | { username: string }) & {
  password: string;
};

export type UserType = 'Admin' | 'Manager' | 'SuperAdmin';

type AdminLoginResponse = {
  type: 'Admin';
  container?: AdminStorageContainer;
} & Admin;

type ManagerLoginResponse = {
  type: 'Manager';
  container?: ManagerStorageContainer;
  permission?: Permission;
} & Manager;

type SuperAdminLoginResponse = {
  type: 'SuperAdmin';
} & SuperAdmin;

export type User =
  | AdminLoginResponse
  | ManagerLoginResponse
  | SuperAdminLoginResponse;

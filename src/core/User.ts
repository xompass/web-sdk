import { Admin, AdminStorageContainer } from "../models/Admin";
import {
  Manager,
  ManagerStorageContainer,
  Permission,
} from "../models/Manager";
import { SuperAdmin } from "../models/SuperAdmin";
import { SupportAdmin } from "../models/SupportAdmin";

export type UserCrendentials = ({ email: string } | { username: string }) & {
  password: string;
};

export type UserType = "Admin" | "Manager" | "SuperAdmin" | "SupportAdmin";

type AdminLoginResponse = {
  type: "Admin";
  container?: AdminStorageContainer;
} & Admin;

type ManagerLoginResponse = {
  type: "Manager";
  container?: ManagerStorageContainer;
  permission?: Permission;
} & Manager;

type SuperAdminLoginResponse = {
  type: "SuperAdmin";
} & SuperAdmin;

type SupportAdminLoginResponse = {
  type: "SupportAdmin";
} & SupportAdmin;

export type User =
  | AdminLoginResponse
  | ManagerLoginResponse
  | SuperAdminLoginResponse
  | SupportAdminLoginResponse;

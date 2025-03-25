export type SuperAdmin = {
  name: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  otpEnabled?: boolean;
  username?: string;
  email: string;
  emailVerified?: boolean;
  id?: string;
};

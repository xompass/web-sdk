import { Log } from "./Log";
import { SupportAdmin } from "./SupportAdmin";
import { Var } from "./Var";

export type SupportAdminVar = {
  varId: string;
  supportAdminId: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  supportAdmin?: SupportAdmin;
  trackingLogs?: Log[];
  var?: Var;
};

import { Admin } from "./Admin";
import { Country } from "./Country";
import { Customer } from "./Customer";
import { FileMetadata } from "./FileMetadata";
import { Log } from "./Log";
import { SupportAdmin } from "./SupportAdmin";
import { Toolkit } from "./Toolkit";
import { ToolkitTemplate } from "./ToolkitTemplate";

export type Var = {
  name: string;
  businessName?: string;
  description?: string;
  address?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  countryId?: string;
  toolkitTemplateIds?: string[];
  admins?: Admin[];
  container?: VarStorageContainer;
  country?: Country;
  customers?: Customer[];
  supportAdmins?: SupportAdmin[];
  toolkitTemplates?: ToolkitTemplate[];
  toolkits?: Toolkit[];
  trackingLogs?: Log[];
};

export type VarStorageContainer = {
  id?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  varId?: string;
  _logo?: FileMetadata;
  logo?: FileMetadata[];
  trackingLogs?: Log[];
  var?: Var;
};

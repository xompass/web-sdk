import { Admin } from './Admin';
import { Country } from './Country';
import { Customer } from './Customer';
import { File } from './File';
import { Log } from './Log';
import { Toolkit } from './Toolkit';
import { ToolkitTemplate } from './ToolkitTemplate';

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
  trackingLogs?: Log[];
  admins?: Admin[];
  customers?: Customer[];
  country?: Country;
  toolkitTemplates?: ToolkitTemplate[];
  toolkits?: Toolkit[];
  container?: VarStorageContainer;
};

export type VarStorageContainer = {
  id?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  varId?: string;
  _logo?: File;
};

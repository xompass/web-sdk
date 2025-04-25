import { Log } from './Log';
import { Project } from './Project';
import { Tool } from './Tool';
import { ToolkitTemplate } from './ToolkitTemplate';
import { Var } from './Var';

export type Toolkit = {
  name?: string;
  description?: string;
  logo?: string;
  sector?: string;
  defaultEnabledToolIds?: string[];
  defaultEnabledAdminToolIds?: string[];
  keywords?: string[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  adminToolIds?: string[];
  toolIds?: string[];
  templateId?: string;
  varId?: string;
  trackingLogs?: Log[];
  adminTools?: Tool[];
  tools?: Tool[];
  projects?: Project[];
  template?: ToolkitTemplate;
  var?: Var;
};

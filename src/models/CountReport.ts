import { Customer } from './Customer';
import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type CountReport = {
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  projectId?: string;
  sections?: CountReportSection[];
  customer?: Customer;
  trackingLogs?: Log[];
  managers?: Manager[];
  project?: Project;
};

export type CountReportSection = {
  name: string;
  dateRange?: string;
  elements?: any[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  countReportId?: string;
};

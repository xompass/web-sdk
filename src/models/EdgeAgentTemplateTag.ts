import { EdgeAgentTemplate } from "./EdgeAgentTemplate";
import { Log } from "./Log";

export type EdgeAgentTemplateTag = {
  name: string;
  description?: string;
  enabled?: boolean;
  image?: string;
  sharedPath?: string;
  broker?: any;
  modules?: any;
  routes?: any;
  moduleParameters?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  templateId?: string;
  template?: EdgeAgentTemplate;
  trackingLogs?: Log[];
};

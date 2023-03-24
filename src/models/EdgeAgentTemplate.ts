import { EdgeAgentTemplateTag } from "./EdgeAgentTemplateTag";
import { Log } from "./Log";

export type EdgeAgentTemplate = {
  name?: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  tags?: EdgeAgentTemplateTag[];
  trackingLogs?: Log[];
};

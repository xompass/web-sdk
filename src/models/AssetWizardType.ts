import { EdgeAgentTemplate } from "./EdgeAgentTemplate";
import { Log } from "./Log";

export type AssetWizardType = {
  type: string;
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  defaultEdgeAgentTemplateId?: string;
  edgeAgentTemplateIds?: string[];
  xEdgeModuleIds?: string[];
  defaultEdgeAgentTemplate?: EdgeAgentTemplate;
  edgeAgentTemplates?: EdgeAgentTemplate[];
  trackingLogs?: Log[];
};

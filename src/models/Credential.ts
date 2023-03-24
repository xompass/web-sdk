import { Admin } from "./Admin";
import { Asset } from "./Asset";
import { Customer } from "./Customer";
import { Log } from "./Log";
import { Manager } from "./Manager";
import { Project } from "./Project";
import { AccessTokenContent } from "./credentialTypes/AccessToken";
import { BasicAuthContent } from "./credentialTypes/BasicAuth";
import { DockerRegistryAuthContent } from "./credentialTypes/DockerRegistryAuth";

export type Credential = {
  identifier?: string;
  name: string;
  description?: string;
  type: string;
  namespace: string;
  content: AccessTokenContent | BasicAuthContent | DockerRegistryAuthContent;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assets?: Asset[];
  admins?: Admin[];
  customers?: Customer[];
  trackingLogs?: Log[];
  managers?: Manager[];
  projects?: Project[];
};

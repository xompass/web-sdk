import { Customer } from "./Customer";
import { Log } from "./Log";
import { Storyline } from "./Storyline";

export type StorylineCategory = {
  id?: string;
  name: string;
  description?: string;
  colors?: any;
  presetColor?:
    | "red"
    | "yellow"
    | "lime"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "orange"
    | "volcano"
    | "gold"
    | "cyan"
    | "geekblue";
  created?: Date;
  modified?: Date;
  deleted?: Date;
  customerId?: string;
  customer?: Customer;
  storyline?: Storyline[];
  trackingLogs?: Log[];
};

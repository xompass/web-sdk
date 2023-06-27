import { Customer } from './Customer';
import { Log } from './Log';
import { Storyline } from './Storyline';

export type StorylineCategory = {
  id?: string;
  name: string;
  description?: string;
  colors?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  customerId?: string;
  trackingLogs?: Log[];
  storyline?: Storyline[];
  customer?: Customer;
};

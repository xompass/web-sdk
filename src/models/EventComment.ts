import { DefaultEventComment } from "./DefaultEventComment";
import { Log } from "./Log";

export type EventComment = {
  id?: string;
  content: string;
  edited?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  userId?: string;
  principalType?: string;
  defaultEventCommentId?: string;
  defaultEventComment?: DefaultEventComment;
  trackingLogs?: Log[];
  user?: any;
};

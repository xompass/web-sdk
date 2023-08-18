export type EventStateChange = {
  id?: string;
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  userId?: string;
  principalType?: string;
};

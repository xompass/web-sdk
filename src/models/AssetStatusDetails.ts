export type AssetStatusDetails = {
  nextCheck?: Date;
  lastCheck?: Date;
  lastValue?: Date;
  valueValidUntil?: Date;
  currentStatus: 'UNKNOWN' | 'ONLINE' | 'OFFLINE' | 'OUTDATED';
  checkCount?: number;
  sensorType?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
};

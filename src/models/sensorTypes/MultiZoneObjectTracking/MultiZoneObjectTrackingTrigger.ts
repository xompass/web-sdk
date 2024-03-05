export type MultiZoneObjectTrackingTrigger = {
  'classes'?: ('bicycle' | 'bus' | 'car' | 'motorbike' | 'person' | 'license_plate' | 'deliverybag' | 'dog' | 'train' | 'guard' | 'inspector' | 'helmet' | 'truck')[];
  'intervalTime'?: number;
  'minZones'?: number;
  }[][]
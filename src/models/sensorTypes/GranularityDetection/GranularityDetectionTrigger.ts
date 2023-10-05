export type GranularityDetectionTrigger = {
  'classes'?: ('bicycle' | 'bus' | 'car' | 'motorbike' | 'person' | 'license_plate' | 'shoebox' | 'socks' | 'deliverybag' | 'pistol' | 'box' | 'label' | 'bag' | 'backpack' | 'dog' | 'train' | 'guard' | 'inspector' | 'helmet' | 'truck' | 'machinery' | 'red_light' | 'green_light' | 'yellow_light' | 'cart' | 'fire' | 'smoke' | 'material' | 'hopper' | 'truck_small' | 'aljibe' | 'mercaderia' | 'rock' | 'desmonte')[];
  'value'?: number;
        'operator'?: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'null';
  'intervalTime'?: number;
  'advanced'?: {
  'matchRatio'?: number;
  'radialTolerancePx'?: number;
  };
  }[][]
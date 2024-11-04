export type ObjectRecognitionTrigger = {
  classes?: (
    | 'bicycle'
    | 'bus'
    | 'car'
    | 'motorbike'
    | 'person'
    | 'license_plate'
    | 'shoebox'
    | 'socks'
    | 'deliverybag'
    | 'pistol'
    | 'box'
    | 'label'
    | 'bag'
    | 'backpack'
    | 'dog'
    | 'cat'
    | 'train'
    | 'guard'
    | 'inspector'
    | 'helmet'
    | 'truck'
    | 'machinery'
    | 'red_light'
    | 'green_light'
    | 'yellow_light'
    | 'cart'
    | 'fire'
    | 'smoke'
    | 'material'
    | 'hopper'
    | 'truck_small'
    | 'aljibe'
    | 'mercaderia'
    | 'rock'
    | 'desmonte'
    | 'pallet'
    | 'pallet-jack'
    | 'pallet-stacker'
    | 'worker'
    | 'forklift'
    | 'cat1'
    | 'cat2'
    | 'cat3'
    | 'cat4'
    | 'cylinder'
    | 'extinguisher'
    | 'crane'
    | 'montacilindro'
    | 'no_helmet'
    | 'gate'
    | 'face'
    | 'laptop'
    | 'covenant'
    | 'crst'
    | 'fedex'
    | 'premier'
    | 'umxu'
    | 'usexpress'
    | 'bolsa-fajos'
    | 'bolsa-monedas'
    | 'carro'
    | 'celular'
    | 'cuadratura'
    | 'logo_pp'
  )[];
  value?: number;
  operator?: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'null';
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
    radialTolerancePx?: number;
  };
}[][];

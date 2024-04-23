const _YoloClassLabels = {
  AEROPLANE: 'aeroplane',
  ALJIBE: 'aljibe',
  APPAREL: 'apparel',
  APPLE: 'apple',
  BACKPACK: 'backpack',
  BAG: 'bag',
  BANANA: 'banana',
  BARRIER: 'barrier',
  BASEBALL_BAT: 'baseball bat',
  BASEBALL_GLOVE: 'baseball glove',
  BEAR: 'bear',
  BED: 'bed',
  BENCH: 'bench',
  BICYCLE: 'bicycle',
  BIRD: 'bird',
  BOAT: 'boat',
  BOOK: 'book',
  BOTTLE: 'bottle',
  BOWL: 'bowl',
  BOX: 'box',
  BROCCOLI: 'broccoli',
  BULLDOZER: 'bulldozer',
  BUS: 'bus',
  CAKE: 'cake',
  CAR: 'car',
  CARROT: 'carrot',
  CART: 'cart',
  CAT: 'cat',
  CAT1: 'cat1',
  CAT2: 'cat2',
  CAT3: 'cat3',
  CAT4: 'cat4',
  CELL_PHONE: 'cell phone',
  CELLPHONE: 'cellphone',
  CHAIR: 'chair',
  CLOCK: 'clock',
  CONE: 'cone',
  COW: 'cow',
  CRANE: 'crane',
  CUP: 'cup',
  CYLINDER: 'cylinder',
  DELIVERYBAG: 'deliverybag',
  DESMONTE: 'desmonte',
  DININGTABLE: 'diningtable',
  DOCUMENT: 'document',
  DOG: 'dog',
  DONUT: 'donut',
  ELEPHANT: 'elephant',
  EQUIPMENT: 'equipment',
  EXCAVATOR: 'excavator',
  EXTINGUISHER: 'extinguisher',
  FIRE: 'fire',
  FIRE_HYDRANT: 'fire hydrant',
  FIREHYDRANT: 'firehydrant',
  FLATBED_TRAILER: 'flatbed-trailer',
  FORK: 'fork',
  FORKLIFT: 'forklift',
  FRISBEE: 'frisbee',
  GATE: 'gate',
  GIRAFFE: 'giraffe',
  GREEN_LIGHT: 'green_light',
  GUARD: 'guard',
  HAIR_DRIER: 'hair drier',
  HANDBAG: 'handbag',
  HEAD: 'head',
  HELMET: 'helmet',
  HOPPER: 'hopper',
  HORSE: 'horse',
  HOT_DOG: 'hot dog',
  INSPECTOR: 'inspector',
  KEYBOARD: 'keyboard',
  KITE: 'kite',
  KNIFE: 'knife',
  LABEL: 'label',
  LAPTOP: 'laptop',
  LICENSE_PLATE: 'license_plate',
  MACHINERY: 'machinery',
  MANIKI: 'maniki',
  MATERIAL: 'material',
  MERCADERIA: 'mercaderia',
  MICROWAVE: 'microwave',
  MONTACILINDRO: 'montacilindro',
  MOTORBIKE: 'motorbike',
  MOUSE: 'mouse',
  NO_HELMET: 'no_helmet',
  ORANGE: 'orange',
  OVEN: 'oven',
  PALLET: 'pallet',
  PALLET_JACK: 'pallet-jack',
  PALLET_STACKER: 'pallet-stacker',
  PARKING_METER: 'parking meter',
  PERSON: 'person',
  PET: 'pet',
  PISTOL: 'pistol',
  PIZZA: 'pizza',
  POTTEDPLANT: 'pottedplant',
  RED_LIGHT: 'red_light',
  REFRIGERATOR: 'refrigerator',
  REMOTE: 'remote',
  ROCK: 'rock',
  SANDWICH: 'sandwich',
  SCISSORS: 'scissors',
  SCOOTER: 'scooter',
  SHEEP: 'sheep',
  SHOEBOX: 'shoebox',
  SINK: 'sink',
  SKATEBOARD: 'skateboard',
  SKIS: 'skis',
  SMOKE: 'smoke',
  SNEAKERS: 'sneakers',
  SNOWBOARD: 'snowboard',
  SOCKS: 'socks',
  SOFA: 'sofa',
  SPOON: 'spoon',
  SPORTS_BALL: 'sports ball',
  STOP_SIGN: 'stop sign',
  SUITCASE: 'suitcase',
  SURFBOARD: 'surfboard',
  TEDDY_BEAR: 'teddy bear',
  TENNIS_RACKET: 'tennis racket',
  TIE: 'tie',
  TOASTER: 'toaster',
  TOILET: 'toilet',
  TOOTHBRUSH: 'toothbrush',
  TRAFFIC_LIGHT: 'traffic light',
  TRAIN: 'train',
  TRASHBIN: 'trashbin',
  TRUCK: 'truck',
  TRUCK_SMALL: 'truck_small',
  TVMONITOR: 'tvmonitor',
  UMBRELLA: 'umbrella',
  VASE: 'vase',
  WINE_GLASS: 'wine glass',
  WORKER: 'worker',
  YELLOW_LIGHT: 'yellow_light',
  ZEBRA: 'zebra',
} as const;

export type YoloClassLabels = typeof _YoloClassLabels;
type YoloClassKey = keyof typeof _YoloClassLabels;
export type YoloClassLabel = (typeof _YoloClassLabels)[YoloClassKey];

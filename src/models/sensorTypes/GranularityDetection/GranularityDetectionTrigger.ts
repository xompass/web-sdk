export type GranularityDetectionTrigger = {
  classes?: (
    | "bicycle"
    | "bus"
    | "ambulance"
    | "car"
    | "motorbike"
    | "scooter"
    | "person"
    | "license_plate"
    | "shoebox"
    | "socks"
    | "deliverybag"
    | "pistol"
    | "rifle"
    | "box"
    | "label"
    | "bag"
    | "backpack"
    | "dog"
    | "train"
    | "guard"
    | "inspector"
    | "helmet"
    | "truck"
    | "van"
    | "machinery"
    | "red_light"
    | "green_light"
    | "yellow_light"
    | "cart"
    | "fire"
    | "smoke"
    | "material"
    | "hopper"
    | "truck_small"
    | "aljibe"
    | "mercaderia"
    | "rock"
    | "desmonte"
    | "waste_container"
  )[];
  value?: number;
  operator?: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "null";
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
    radialTolerancePx?: number;
  };
}[][];

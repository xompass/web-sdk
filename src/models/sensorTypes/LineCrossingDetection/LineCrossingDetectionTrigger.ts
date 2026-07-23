export type LineCrossingDetectionTrigger = {
  classes?: (
    | "bicycle"
    | "bus"
    | "car"
    | "motorbike"
    | "person"
    | "guard"
    | "inspector"
    | "truck"
    | "machinery"
    | "truck_small"
  )[];
  direction: "incoming" | "outgoing";
}[][];

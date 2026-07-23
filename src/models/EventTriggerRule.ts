import { Log } from "./Log";
import { Sensor } from "./Sensor";
import { FaceDetectionBasedOnRulesTRCParameters } from "./sensorTypes/FaceDetection/FaceDetectionTRCParameters";
import { FaceMaskDetectionBasedOnRulesTRCParameters } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionTRCParameters";
import { FaceRecognitionBasedOnRulesTRCParameters } from "./sensorTypes/FaceRecognition/FaceRecognitionTRCParameters";
import { FuelingDetectionBasedOnRulesTRCParameters } from "./sensorTypes/FuelingDetection/FuelingDetectionTRCParameters";
import { GranularityDetectionBasedOnRulesTRCParameters } from "./sensorTypes/GranularityDetection/GranularityDetectionTRCParameters";
import {
  LicensePlateBasedOnRulesTRCParameters,
  LicensePlateBlacklistSearchTRCParameters,
} from "./sensorTypes/LicensePlate/LicensePlateTRCParameters";
import { LineCrossingDetectionBasedOnRulesTRCParameters } from "./sensorTypes/LineCrossingDetection/LineCrossingDetectionTRCParameters";
import { MissingHelmetDetectionBasedOnRulesTRCParameters } from "./sensorTypes/MissingHelmetDetection/MissingHelmetDetectionTRCParameters";
import { MultiLineCrossingDetectionBasedOnRulesTRCParameters } from "./sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionTRCParameters";
import { MultiZoneObjectTrackingBasedOnRulesTRCParameters } from "./sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingTRCParameters";
import { NaiveSocialDistancingBasedOnRulesTRCParameters } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingTRCParameters";
import { NoPlateDetectionBasedOnRulesTRCParameters } from "./sensorTypes/NoPlateDetection/NoPlateDetectionTRCParameters";
import {
  ObjectRecognitionBasedOnRulesTRCParameters,
  ObjectRecognitionBlacklistSearchTRCParameters,
} from "./sensorTypes/ObjectRecognition/ObjectRecognitionTRCParameters";
import {
  ObjectRecognitionNumericBasedOnRulesTRCParameters,
  ObjectRecognitionNumericBlacklistSearchTRCParameters,
} from "./sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericTRCParameters";
import { OpticalCharacterRecognitionBasedOnRulesTRCParameters } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionTRCParameters";
import { OverlapDetectionBasedOnRulesTRCParameters } from "./sensorTypes/OverlapDetection/OverlapDetectionTRCParameters";
import { PoseDetectionBasedOnRulesTRCParameters } from "./sensorTypes/PoseDetection/PoseDetectionTRCParameters";
import { SpeedChangeBasedOnRulesTRCParameters } from "./sensorTypes/SpeedChange/SpeedChangeTRCParameters";
import { StoppedObjectsDetectorBasedOnRulesTRCParameters } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorTRCParameters";

export type EventTriggerRule = {
  clauses?: EventTriggerRuleClause[];
  intervalTime?: number;
  minOptional?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  userId?: string;
  principalType?: string;
  trackingLogs?: Log[];
  user?: any;
};

export type EventTriggerRuleClause = {
  parameters?:
    | FaceDetectionBasedOnRulesTRCParameters
    | FaceMaskDetectionBasedOnRulesTRCParameters
    | FaceRecognitionBasedOnRulesTRCParameters
    | FuelingDetectionBasedOnRulesTRCParameters
    | GranularityDetectionBasedOnRulesTRCParameters
    | LicensePlateBasedOnRulesTRCParameters
    | LicensePlateBlacklistSearchTRCParameters
    | LineCrossingDetectionBasedOnRulesTRCParameters
    | MissingHelmetDetectionBasedOnRulesTRCParameters
    | MultiLineCrossingDetectionBasedOnRulesTRCParameters
    | MultiZoneObjectTrackingBasedOnRulesTRCParameters
    | NaiveSocialDistancingBasedOnRulesTRCParameters
    | NoPlateDetectionBasedOnRulesTRCParameters
    | ObjectRecognitionBasedOnRulesTRCParameters
    | ObjectRecognitionBlacklistSearchTRCParameters
    | ObjectRecognitionNumericBasedOnRulesTRCParameters
    | ObjectRecognitionNumericBlacklistSearchTRCParameters
    | OpticalCharacterRecognitionBasedOnRulesTRCParameters
    | OverlapDetectionBasedOnRulesTRCParameters
    | PoseDetectionBasedOnRulesTRCParameters
    | SpeedChangeBasedOnRulesTRCParameters
    | StoppedObjectsDetectorBasedOnRulesTRCParameters;
  optional?: boolean;
  type?: string;
  id?: string;
  sensorId?: string;
  sensor?: Sensor;
};

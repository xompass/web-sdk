import { FaceDetectionBasedOnRulesTRCParameters } from './sensorTypes/FaceDetection/FaceDetectionTRCParameters';
import { FaceMaskDetectionBasedOnRulesTRCParameters } from './sensorTypes/FaceMaskDetection/FaceMaskDetectionTRCParameters';
import { FuelingDetectionBasedOnRulesTRCParameters } from './sensorTypes/FuelingDetection/FuelingDetectionTRCParameters';
import { GranularityDetectionBasedOnRulesTRCParameters } from './sensorTypes/GranularityDetection/GranularityDetectionTRCParameters';
import {
  LicensePlateBasedOnRulesTRCParameters,
  LicensePlateBlacklistSearchTRCParameters,
} from './sensorTypes/LicensePlate/LicensePlateTRCParameters';
import { LineCrossingDetectionBasedOnRulesTRCParameters } from './sensorTypes/LineCrossingDetection/LineCrossingDetectionTRCParameters';
import { NoPlateDetectionBasedOnRulesTRCParameters } from './sensorTypes/NoPlateDetection/NoPlateDetectionTRCParameters';
import {
  ObjectRecognitionBasedOnRulesTRCParameters,
  ObjectRecognitionBlacklistSearchTRCParameters,
} from './sensorTypes/ObjectRecognition/ObjectRecognitionTRCParameters';
import { StoppedObjectsDetectorBasedOnRulesTRCParameters } from './sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorTRCParameters';
import { NaiveSocialDistancingBasedOnRulesTRCParameters } from './sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingTRCParameters';
import { SpeedChangeBasedOnRulesTRCParameters } from './sensorTypes/SpeedChange/SpeedChangeTRCParameters';
import {
  ObjectRecognitionNumericBasedOnRulesTRCParameters,
  ObjectRecognitionNumericBlacklistSearchTRCParameters,
} from './sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericTRCParameters';
import { OpticalCharacterRecognitionBasedOnRulesTRCParameters } from './sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionTRCParameters';
import { PoseDetectionBasedOnRulesTRCParameters } from './sensorTypes/PoseDetection/PoseDetectionTRCParameters';
import { MissingHelmetDetectionBasedOnRulesTRCParameters } from './sensorTypes/MissingHelmetDetection/MissingHelmetDetectionTRCParameters';

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
};

export type EventTriggerRuleClause = {
  parameters?:
    | FaceDetectionBasedOnRulesTRCParameters
    | FaceMaskDetectionBasedOnRulesTRCParameters
    | FuelingDetectionBasedOnRulesTRCParameters
    | LicensePlateBasedOnRulesTRCParameters
    | LicensePlateBlacklistSearchTRCParameters
    | LineCrossingDetectionBasedOnRulesTRCParameters
    | NoPlateDetectionBasedOnRulesTRCParameters
    | ObjectRecognitionBasedOnRulesTRCParameters
    | ObjectRecognitionBlacklistSearchTRCParameters
    | StoppedObjectsDetectorBasedOnRulesTRCParameters
    | NaiveSocialDistancingBasedOnRulesTRCParameters
    | SpeedChangeBasedOnRulesTRCParameters
    | OpticalCharacterRecognitionBasedOnRulesTRCParameters
    | PoseDetectionBasedOnRulesTRCParameters
    | GranularityDetectionBasedOnRulesTRCParameters
    | ObjectRecognitionNumericBasedOnRulesTRCParameters
    | ObjectRecognitionNumericBlacklistSearchTRCParameters
    | MissingHelmetDetectionBasedOnRulesTRCParameters;
  optional?: boolean;
  type?: string;
  id?: string;
  sensorId?: string;
};

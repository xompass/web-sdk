import { FaceDetectionBasedOnRulesTRCParameters } from './sensorTypes/FaceDetection/FaceDetectionTRCParameters';
import { FaceMaskDetectionBasedOnRulesTRCParameters } from './sensorTypes/FaceMaskDetection/FaceMaskDetectionTRCParameters';
import { FuelingDetectionBasedOnRulesTRCParameters } from './sensorTypes/FuelingDetection/FuelingDetectionTRCParameters';
import {
  LicensePlateBasedOnRulesTRCParameters,
  LicensePlateBlacklistSearchTRCParameters,
} from './sensorTypes/LicensePlate/LicensePlateTRCParameters';
import { NoPlateDetectionBasedOnRulesTRCParameters } from './sensorTypes/NoPlateDetection/NoPlateDetectionTRCParameters';
import {
  ObjectRecognitionBasedOnRulesTRCParameters,
  ObjectRecognitionBlacklistSearchTRCParameters,
} from './sensorTypes/ObjectRecognition/ObjectRecognitionTRCParameters';
import { StoppedObjectsDetectorBasedOnRulesTRCParameters } from './sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorTRCParameters';
import { NaiveSocialDistancingBasedOnRulesTRCParameters } from './sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingTRCParameters';
import { SpeedChangeBasedOnRulesTRCParameters } from './sensorTypes/SpeedChange/SpeedChangeTRCParameters';
import { OpticalCharacterRecognitionBasedOnRulesTRCParameters } from './sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionTRCParameters';
import { PoseDetectionBasedOnRulesTRCParameters } from './sensorTypes/PoseDetection/PoseDetectionTRCParameters';

export type EventTriggerRuleTemplate = {
  clauses?: EventTriggerRuleClauseTemplate[];
  intervalTime?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  userId?: string;
  principalType?: string;
};

export type EventTriggerRuleClauseTemplate = {
  parameters?:
    | FaceDetectionBasedOnRulesTRCParameters
    | FaceMaskDetectionBasedOnRulesTRCParameters
    | FuelingDetectionBasedOnRulesTRCParameters
    | LicensePlateBasedOnRulesTRCParameters
    | LicensePlateBlacklistSearchTRCParameters
    | NoPlateDetectionBasedOnRulesTRCParameters
    | ObjectRecognitionBasedOnRulesTRCParameters
    | ObjectRecognitionBlacklistSearchTRCParameters
    | StoppedObjectsDetectorBasedOnRulesTRCParameters
    | NaiveSocialDistancingBasedOnRulesTRCParameters
    | SpeedChangeBasedOnRulesTRCParameters
    | OpticalCharacterRecognitionBasedOnRulesTRCParameters
    | PoseDetectionBasedOnRulesTRCParameters;
  id?: string;
  sensorTemplateId?: string;
};

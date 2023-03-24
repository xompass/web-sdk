import { AssetStateTemplate } from "./AssetStateTemplate";
import { Log } from "./Log";
import { SensorTemplate } from "./SensorTemplate";
import { Threshold } from "./Threshold";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";
import { ColorPresenceTrigger } from "./sensorTypes/ColorPresence/ColorPresenceTrigger";
import { OpeningDetectionTrigger } from "./sensorTypes/OpeningDetection/OpeningDetectionTrigger";
import { CrossLineMultiRecognitionTrigger } from "./sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionTrigger";
import { FaceDetectionTrigger } from "./sensorTypes/FaceDetection/FaceDetectionTrigger";
import { FaceMaskDetectionTrigger } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionTrigger";
import { LicensePlateTrigger } from "./sensorTypes/LicensePlate/LicensePlateTrigger";
import { ObjectCountingTrigger } from "./sensorTypes/ObjectCounting/ObjectCountingTrigger";
import { NoPlateDetectionTrigger } from "./sensorTypes/NoPlateDetection/NoPlateDetectionTrigger";
import { ObjectRecognitionTrigger } from "./sensorTypes/ObjectRecognition/ObjectRecognitionTrigger";
import { StoppedObjectsDetectorTrigger } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorTrigger";
import { NaiveSocialDistancingTrigger } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingTrigger";
import { SpeedChangeTrigger } from "./sensorTypes/SpeedChange/SpeedChangeTrigger";
import { OpticalCharacterRecognitionTrigger } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionTrigger";
import { PoseDetectionTrigger } from "./sensorTypes/PoseDetection/PoseDetectionTrigger";
import { SceneChangeTrigger } from "./sensorTypes/SceneChange/SceneChangeTrigger";
import { StoppedLicensePlateTrigger } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateTrigger";

export type SensorAssetStateTemplate = {
  type?: SensorTypeLabel;
  name?: string;
  enabled?: boolean;
  parameters?: any;
  triggers?:
    | ColorPresenceTrigger
    | OpeningDetectionTrigger
    | CrossLineMultiRecognitionTrigger
    | FaceDetectionTrigger
    | FaceMaskDetectionTrigger
    | LicensePlateTrigger
    | ObjectCountingTrigger
    | NoPlateDetectionTrigger
    | ObjectRecognitionTrigger
    | StoppedObjectsDetectorTrigger
    | NaiveSocialDistancingTrigger
    | SpeedChangeTrigger
    | OpticalCharacterRecognitionTrigger
    | PoseDetectionTrigger
    | SceneChangeTrigger
    | StoppedLicensePlateTrigger;
  thresholdType?: string;
  thresholds?: Threshold[];
  notification?: Notification;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetStateTemplateId?: string;
  sensorTemplateId?: string;
  trackingLogs?: Log[];
  assetStateTemplate?: AssetStateTemplate;
  sensorTemplate?: SensorTemplate;
};

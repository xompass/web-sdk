import { Alert } from './Alert';
import { AlertHistory } from './AlertHistory';
import { AssetState } from './AssetState';
import { Log } from './Log';
import { Sensor } from './Sensor';
import { SensorAssetStateTemplate } from './SensorAssetStateTemplate';
import { Threshold } from './Threshold';
import { SensorTypeLabel } from './sensorTypes/SensorTypeLabel';
import { ColorPresenceTrigger } from './sensorTypes/ColorPresence/ColorPresenceTrigger';
import { OpeningDetectionTrigger } from './sensorTypes/OpeningDetection/OpeningDetectionTrigger';
import { CrossLineMultiRecognitionTrigger } from './sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionTrigger';
import { FaceDetectionTrigger } from './sensorTypes/FaceDetection/FaceDetectionTrigger';
import { FaceMaskDetectionTrigger } from './sensorTypes/FaceMaskDetection/FaceMaskDetectionTrigger';
import { LicensePlateTrigger } from './sensorTypes/LicensePlate/LicensePlateTrigger';
import { LineCrossingDetectionTrigger } from './sensorTypes/LineCrossingDetection/LineCrossingDetectionTrigger';
import { ObjectCountingTrigger } from './sensorTypes/ObjectCounting/ObjectCountingTrigger';
import { NoPlateDetectionTrigger } from './sensorTypes/NoPlateDetection/NoPlateDetectionTrigger';
import { ObjectRecognitionTrigger } from './sensorTypes/ObjectRecognition/ObjectRecognitionTrigger';
import { StoppedObjectsDetectorTrigger } from './sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorTrigger';
import { NaiveSocialDistancingTrigger } from './sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingTrigger';
import { SpeedChangeTrigger } from './sensorTypes/SpeedChange/SpeedChangeTrigger';
import { OpticalCharacterRecognitionTrigger } from './sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionTrigger';
import { PoseDetectionTrigger } from './sensorTypes/PoseDetection/PoseDetectionTrigger';
import { SceneChangeTrigger } from './sensorTypes/SceneChange/SceneChangeTrigger';
import { StoppedLicensePlateTrigger } from './sensorTypes/StoppedLicensePlate/StoppedLicensePlateTrigger';
import { MultiZoneObjectTrackingTrigger } from './sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingTrigger';
import { GranularityDetectionTrigger } from './sensorTypes/GranularityDetection/GranularityDetectionTrigger';
import { ObjectRecognitionNumericTrigger } from './sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericTrigger';
import { MissingHelmetDetectionTrigger } from './sensorTypes/MissingHelmetDetection/MissingHelmetDetectionTrigger';

export type SensorAssetState = {
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
    | LineCrossingDetectionTrigger
    | ObjectCountingTrigger
    | NoPlateDetectionTrigger
    | ObjectRecognitionTrigger
    | StoppedObjectsDetectorTrigger
    | NaiveSocialDistancingTrigger
    | SpeedChangeTrigger
    | OpticalCharacterRecognitionTrigger
    | PoseDetectionTrigger
    | SceneChangeTrigger
    | StoppedLicensePlateTrigger
    | MultiZoneObjectTrackingTrigger
    | GranularityDetectionTrigger
    | ObjectRecognitionNumericTrigger
    | MissingHelmetDetectionTrigger;
  thresholdType?: string;
  thresholds?: Threshold[];
  notification?: Notification;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetStateId?: string;
  sensorId?: string;
  templateId?: string;
  trackingLogs?: Log[];
  assetState?: AssetState;
  sensor?: Sensor;
  alerts?: Alert[];
  alertHistory?: AlertHistory[];
  template?: SensorAssetStateTemplate;
};

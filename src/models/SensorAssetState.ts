import { Alert } from "./Alert";
import { AlertHistory } from "./AlertHistory";
import { AssetState } from "./AssetState";
import { Log } from "./Log";
import { Sensor } from "./Sensor";
import { SensorAssetStateTemplate } from "./SensorAssetStateTemplate";
import { Threshold } from "./Threshold";
import { ColorPresenceTrigger } from "./sensorTypes/ColorPresence/ColorPresenceTrigger";
import { ConcentrationAlertTrigger } from "./sensorTypes/ConcentrationAlert/ConcentrationAlertTrigger";
import { CrossLineMultiRecognitionTrigger } from "./sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionTrigger";
import { FaceDetectionTrigger } from "./sensorTypes/FaceDetection/FaceDetectionTrigger";
import { FaceMaskDetectionTrigger } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionTrigger";
import { FaceRecognitionTrigger } from "./sensorTypes/FaceRecognition/FaceRecognitionTrigger";
import { GranularityDetectionTrigger } from "./sensorTypes/GranularityDetection/GranularityDetectionTrigger";
import { HeatmapTrigger } from "./sensorTypes/Heatmap/HeatmapTrigger";
import { LicensePlateTrigger } from "./sensorTypes/LicensePlate/LicensePlateTrigger";
import { LineCrossingDetectionTrigger } from "./sensorTypes/LineCrossingDetection/LineCrossingDetectionTrigger";
import { MissingHelmetDetectionTrigger } from "./sensorTypes/MissingHelmetDetection/MissingHelmetDetectionTrigger";
import { MultiLineCrossingDetectionTrigger } from "./sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionTrigger";
import { MultiZoneObjectTrackingTrigger } from "./sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingTrigger";
import { NaiveSocialDistancingTrigger } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingTrigger";
import { NoPlateDetectionTrigger } from "./sensorTypes/NoPlateDetection/NoPlateDetectionTrigger";
import { ObjectCountingTrigger } from "./sensorTypes/ObjectCounting/ObjectCountingTrigger";
import { ObjectRecognitionTrigger } from "./sensorTypes/ObjectRecognition/ObjectRecognitionTrigger";
import { ObjectRecognitionNumericTrigger } from "./sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericTrigger";
import { OpeningDetectionTrigger } from "./sensorTypes/OpeningDetection/OpeningDetectionTrigger";
import { OpticalCharacterRecognitionTrigger } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionTrigger";
import { OverlapDetectionTrigger } from "./sensorTypes/OverlapDetection/OverlapDetectionTrigger";
import { PanicButtonTrigger } from "./sensorTypes/PanicButton/PanicButtonTrigger";
import { PeriodicObjectCountingTrigger } from "./sensorTypes/PeriodicObjectCounting/PeriodicObjectCountingTrigger";
import { PoseDetectionTrigger } from "./sensorTypes/PoseDetection/PoseDetectionTrigger";
import { SceneChangeTrigger } from "./sensorTypes/SceneChange/SceneChangeTrigger";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";
import { SpeedChangeTrigger } from "./sensorTypes/SpeedChange/SpeedChangeTrigger";
import { StoppedLicensePlateTrigger } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateTrigger";
import { StoppedObjectsDetectorTrigger } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorTrigger";

export type SensorAssetState = {
  type?: SensorTypeLabel;
  name?: string;
  enabled?: boolean;
  parameters?: any;
  triggers?:
    | ColorPresenceTrigger
    | ConcentrationAlertTrigger
    | CrossLineMultiRecognitionTrigger
    | FaceDetectionTrigger
    | FaceMaskDetectionTrigger
    | FaceRecognitionTrigger
    | GranularityDetectionTrigger
    | HeatmapTrigger
    | LicensePlateTrigger
    | LineCrossingDetectionTrigger
    | MissingHelmetDetectionTrigger
    | MultiLineCrossingDetectionTrigger
    | MultiZoneObjectTrackingTrigger
    | NaiveSocialDistancingTrigger
    | NoPlateDetectionTrigger
    | ObjectCountingTrigger
    | ObjectRecognitionTrigger
    | ObjectRecognitionNumericTrigger
    | OpeningDetectionTrigger
    | OpticalCharacterRecognitionTrigger
    | OverlapDetectionTrigger
    | PanicButtonTrigger
    | PeriodicObjectCountingTrigger
    | PoseDetectionTrigger
    | SceneChangeTrigger
    | SpeedChangeTrigger
    | StoppedLicensePlateTrigger
    | StoppedObjectsDetectorTrigger;
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
  alertHistory?: AlertHistory[];
  alerts?: Alert[];
  assetState?: AssetState;
  sensor?: Sensor;
  template?: SensorAssetStateTemplate;
  trackingLogs?: Log[];
};

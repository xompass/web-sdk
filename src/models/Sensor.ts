import { Alert } from "./Alert";
import { AlertHistory } from "./AlertHistory";
import { Asset } from "./Asset";
import { AssetState } from "./AssetState";
import { Data } from "./Data";
import { Dataset } from "./Dataset";
import { Log } from "./Log";
import { RateLimit } from "./RateLimit";
import { SensorAssetState } from "./SensorAssetState";
import { SensorTemplate } from "./SensorTemplate";
import { SensorUptime } from "./SensorUptime";
import { SensorUptimeCollector } from "./SensorUptimeCollector";
import { Summary } from "./Summary";
import { CargoContainerISOReaderParameters } from "./sensorTypes/CargoContainerISOReader/CargoContainerISOReaderParameters";
import { ColorPresenceParameters } from "./sensorTypes/ColorPresence/ColorPresenceParameters";
import { ColorPresenceTrigger } from "./sensorTypes/ColorPresence/ColorPresenceTrigger";
import { ConcentrationAlertParameters } from "./sensorTypes/ConcentrationAlert/ConcentrationAlertParameters";
import { ConcentrationAlertTrigger } from "./sensorTypes/ConcentrationAlert/ConcentrationAlertTrigger";
import { CrossLineMultiRecognitionParameters } from "./sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionParameters";
import { CrossLineMultiRecognitionTrigger } from "./sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionTrigger";
import { CrossLineRecognitionParameters } from "./sensorTypes/CrossLineRecognition/CrossLineRecognitionParameters";
import { CrossedBarriersDetectionParameters } from "./sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionParameters";
import { FaceDetectionParameters } from "./sensorTypes/FaceDetection/FaceDetectionParameters";
import { FaceDetectionTrigger } from "./sensorTypes/FaceDetection/FaceDetectionTrigger";
import { FaceMaskDetectionParameters } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionParameters";
import { FaceMaskDetectionTrigger } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionTrigger";
import { FaceRecognitionParameters } from "./sensorTypes/FaceRecognition/FaceRecognitionParameters";
import { FaceRecognitionTrigger } from "./sensorTypes/FaceRecognition/FaceRecognitionTrigger";
import { FuelingDetectionParameters } from "./sensorTypes/FuelingDetection/FuelingDetectionParameters";
import { GranularityDetectionParameters } from "./sensorTypes/GranularityDetection/GranularityDetectionParameters";
import { GranularityDetectionTrigger } from "./sensorTypes/GranularityDetection/GranularityDetectionTrigger";
import { HeatmapParameters } from "./sensorTypes/Heatmap/HeatmapParameters";
import { HeatmapTrigger } from "./sensorTypes/Heatmap/HeatmapTrigger";
import { LicensePlateParameters } from "./sensorTypes/LicensePlate/LicensePlateParameters";
import { LicensePlateTrigger } from "./sensorTypes/LicensePlate/LicensePlateTrigger";
import { LineCrossingDetectionParameters } from "./sensorTypes/LineCrossingDetection/LineCrossingDetectionParameters";
import { LineCrossingDetectionTrigger } from "./sensorTypes/LineCrossingDetection/LineCrossingDetectionTrigger";
import { MissingHelmetDetectionParameters } from "./sensorTypes/MissingHelmetDetection/MissingHelmetDetectionParameters";
import { MissingHelmetDetectionTrigger } from "./sensorTypes/MissingHelmetDetection/MissingHelmetDetectionTrigger";
import { MotionDetectionParameters } from "./sensorTypes/MotionDetection/MotionDetectionParameters";
import { MultiLineCrossingDetectionParameters } from "./sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionParameters";
import { MultiLineCrossingDetectionTrigger } from "./sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionTrigger";
import { MultiZoneObjectTrackingParameters } from "./sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingParameters";
import { MultiZoneObjectTrackingTrigger } from "./sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingTrigger";
import { NaiveSocialDistancingParameters } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingParameters";
import { NaiveSocialDistancingTrigger } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingTrigger";
import { NoPlateDetectionParameters } from "./sensorTypes/NoPlateDetection/NoPlateDetectionParameters";
import { NoPlateDetectionTrigger } from "./sensorTypes/NoPlateDetection/NoPlateDetectionTrigger";
import { NumberParameters } from "./sensorTypes/Number/NumberParameters";
import { ObjectCountingParameters } from "./sensorTypes/ObjectCounting/ObjectCountingParameters";
import { ObjectCountingTrigger } from "./sensorTypes/ObjectCounting/ObjectCountingTrigger";
import { ObjectRecognitionParameters } from "./sensorTypes/ObjectRecognition/ObjectRecognitionParameters";
import { ObjectRecognitionTrigger } from "./sensorTypes/ObjectRecognition/ObjectRecognitionTrigger";
import { ObjectRecognitionNumericParameters } from "./sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericParameters";
import { ObjectRecognitionNumericTrigger } from "./sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericTrigger";
import { OpeningDetectionParameters } from "./sensorTypes/OpeningDetection/OpeningDetectionParameters";
import { OpeningDetectionTrigger } from "./sensorTypes/OpeningDetection/OpeningDetectionTrigger";
import { OpticalCharacterRecognitionParameters } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionParameters";
import { OpticalCharacterRecognitionTrigger } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionTrigger";
import { OverlapDetectionParameters } from "./sensorTypes/OverlapDetection/OverlapDetectionParameters";
import { OverlapDetectionTrigger } from "./sensorTypes/OverlapDetection/OverlapDetectionTrigger";
import { PanicButtonParameters } from "./sensorTypes/PanicButton/PanicButtonParameters";
import { PanicButtonTrigger } from "./sensorTypes/PanicButton/PanicButtonTrigger";
import { PeriodicObjectCountingParameters } from "./sensorTypes/PeriodicObjectCounting/PeriodicObjectCountingParameters";
import { PeriodicObjectCountingTrigger } from "./sensorTypes/PeriodicObjectCounting/PeriodicObjectCountingTrigger";
import { PoseDetectionParameters } from "./sensorTypes/PoseDetection/PoseDetectionParameters";
import { PoseDetectionTrigger } from "./sensorTypes/PoseDetection/PoseDetectionTrigger";
import { QueueSizeParameters } from "./sensorTypes/QueueSize/QueueSizeParameters";
import { SceneChangeParameters } from "./sensorTypes/SceneChange/SceneChangeParameters";
import { SceneChangeTrigger } from "./sensorTypes/SceneChange/SceneChangeTrigger";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";
import { SpeedChangeParameters } from "./sensorTypes/SpeedChange/SpeedChangeParameters";
import { SpeedChangeTrigger } from "./sensorTypes/SpeedChange/SpeedChangeTrigger";
import { StoppedLicensePlateParameters } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateParameters";
import { StoppedLicensePlateTrigger } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateTrigger";
import { StoppedObjectsDetectorParameters } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorParameters";
import { StoppedObjectsDetectorTrigger } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorTrigger";

export type Sensor = {
  type: SensorTypeLabel;
  name?: string;
  description?: string;
  customerId?: string;
  projectId?: string;
  relativeId: string;
  enabled?: boolean;
  unit?: string;
  parameters?:
    | CargoContainerISOReaderParameters
    | ColorPresenceParameters
    | ConcentrationAlertParameters
    | CrossedBarriersDetectionParameters
    | CrossLineMultiRecognitionParameters
    | CrossLineRecognitionParameters
    | FaceDetectionParameters
    | FaceMaskDetectionParameters
    | FaceRecognitionParameters
    | FuelingDetectionParameters
    | GranularityDetectionParameters
    | HeatmapParameters
    | LicensePlateParameters
    | LineCrossingDetectionParameters
    | MissingHelmetDetectionParameters
    | MotionDetectionParameters
    | MultiLineCrossingDetectionParameters
    | MultiZoneObjectTrackingParameters
    | NaiveSocialDistancingParameters
    | NoPlateDetectionParameters
    | NumberParameters
    | ObjectCountingParameters
    | ObjectRecognitionParameters
    | ObjectRecognitionNumericParameters
    | OpeningDetectionParameters
    | OpticalCharacterRecognitionParameters
    | OverlapDetectionParameters
    | PanicButtonParameters
    | PeriodicObjectCountingParameters
    | PoseDetectionParameters
    | QueueSizeParameters
    | SceneChangeParameters
    | SpeedChangeParameters
    | StoppedLicensePlateParameters
    | StoppedObjectsDetectorParameters;
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
  extendedProperties?: any;
  healthcheck?: SensorHealthcheck;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  _lastData?: Data;
  _rateLimit?: RateLimit;
  templateId?: string;
  alertHistory?: AlertHistory[];
  alerts?: Alert[];
  asset?: Asset;
  assetStates?: AssetState[];
  datasets?: Dataset[];
  lastData?: Data[];
  rateLimit?: RateLimit[];
  states?: SensorAssetState[];
  summaries?: Summary[];
  template?: SensorTemplate;
  trackingLogs?: Log[];
  uptime?: SensorUptime[];
  uptimeCollectors?: SensorUptimeCollector[];
};

export type SensorWithCurrentState = Sensor & {
  currentState: SensorAssetState;
};

export type SensorHealthcheck = {
  enabled?: boolean;
  lifespan?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};

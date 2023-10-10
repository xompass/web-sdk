import { Alert } from './Alert';
import { AlertHistory } from './AlertHistory';
import { Asset } from './Asset';
import { AssetState } from './AssetState';
import { Data } from './Data';
import { Dataset } from './Dataset';
import { Log } from './Log';
import { SensorAssetState } from './SensorAssetState';
import { SensorTemplate } from './SensorTemplate';
import { SensorUptime } from './SensorUptime';
import { SensorUptimeCollector } from './SensorUptimeCollector';
import { Summary } from './Summary';
import { SensorTypeLabel } from './sensorTypes/SensorTypeLabel';
import { ColorPresenceParameters } from './sensorTypes/ColorPresence/ColorPresenceParameters';
import { OpeningDetectionParameters } from './sensorTypes/OpeningDetection/OpeningDetectionParameters';
import { CrossedBarriersDetectionParameters } from './sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionParameters';
import { CrossLineMultiRecognitionParameters } from './sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionParameters';
import { CrossLineRecognitionParameters } from './sensorTypes/CrossLineRecognition/CrossLineRecognitionParameters';
import { FaceDetectionParameters } from './sensorTypes/FaceDetection/FaceDetectionParameters';
import { FaceMaskDetectionParameters } from './sensorTypes/FaceMaskDetection/FaceMaskDetectionParameters';
import { FuelingDetectionParameters } from './sensorTypes/FuelingDetection/FuelingDetectionParameters';
import { MotionDetectionParameters } from './sensorTypes/MotionDetection/MotionDetectionParameters';
import { NumberParameters } from './sensorTypes/Number/NumberParameters';
import { LicensePlateParameters } from './sensorTypes/LicensePlate/LicensePlateParameters';
import { LineCrossingDetectionParameters } from './sensorTypes/LineCrossingDetection/LineCrossingDetectionParameters';
import { ObjectCountingParameters } from './sensorTypes/ObjectCounting/ObjectCountingParameters';
import { QueueSizeParameters } from './sensorTypes/QueueSize/QueueSizeParameters';
import { NoPlateDetectionParameters } from './sensorTypes/NoPlateDetection/NoPlateDetectionParameters';
import { ObjectRecognitionParameters } from './sensorTypes/ObjectRecognition/ObjectRecognitionParameters';
import { StoppedObjectsDetectorParameters } from './sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorParameters';
import { NaiveSocialDistancingParameters } from './sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingParameters';
import { SpeedChangeParameters } from './sensorTypes/SpeedChange/SpeedChangeParameters';
import { OpticalCharacterRecognitionParameters } from './sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionParameters';
import { PoseDetectionParameters } from './sensorTypes/PoseDetection/PoseDetectionParameters';
import { SceneChangeParameters } from './sensorTypes/SceneChange/SceneChangeParameters';
import { StoppedLicensePlateParameters } from './sensorTypes/StoppedLicensePlate/StoppedLicensePlateParameters';

export type Sensor = {
  type: SensorTypeLabel;
  name?: string;
  description?: string;
  relativeId: string;
  enabled?: boolean;
  unit?: string;
  parameters?:
    | ColorPresenceParameters
    | OpeningDetectionParameters
    | CrossedBarriersDetectionParameters
    | CrossLineMultiRecognitionParameters
    | CrossLineRecognitionParameters
    | FaceDetectionParameters
    | FaceMaskDetectionParameters
    | FuelingDetectionParameters
    | MotionDetectionParameters
    | NumberParameters
    | LicensePlateParameters
    | LineCrossingDetectionParameters
    | ObjectCountingParameters
    | QueueSizeParameters
    | NoPlateDetectionParameters
    | ObjectRecognitionParameters
    | StoppedObjectsDetectorParameters
    | NaiveSocialDistancingParameters
    | SpeedChangeParameters
    | OpticalCharacterRecognitionParameters
    | PoseDetectionParameters
    | SceneChangeParameters
    | StoppedLicensePlateParameters;
  triggers?: any;
  extendedProperties?: any;
  healthcheck?: SensorHealthcheck;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  _lastData?: Data;
  templateId?: string;
  trackingLogs?: Log[];
  asset?: Asset;
  datasets?: Dataset[];
  alerts?: Alert[];
  alertHistory?: AlertHistory[];
  assetStates?: AssetState[];
  states?: SensorAssetState[];
  template?: SensorTemplate;
  uptime?: SensorUptime[];
  uptimeCollectors?: SensorUptimeCollector[];
  summaries?: Summary[];
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
};

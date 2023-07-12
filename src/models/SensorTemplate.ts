import { AssetStateTemplate } from './AssetStateTemplate';
import { AssetTemplate } from './AssetTemplate';
import { Log } from './Log';
import { SensorAssetStateTemplate } from './SensorAssetStateTemplate';
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

export type SensorTemplate = {
  type: SensorTypeLabel;
  name?: string;
  description?: string;
  relativeId?: string;
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
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetTemplateId?: string;
  trackingLogs?: Log[];
  assetTemplate?: AssetTemplate;
  assetStateTemplates?: AssetStateTemplate[];
  stateTemplates?: SensorAssetStateTemplate[];
};

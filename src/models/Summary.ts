import { Asset } from './Asset';
import { Dataset } from './Dataset';
import { Log } from './Log';
import { Sensor } from './Sensor';
import { SummaryForAsset } from './SummaryForAsset';
import { SensorTypeLabel } from './sensorTypes/SensorTypeLabel';
import { BeaconTrackingSummary } from './sensorTypes/BeaconTracking/BeaconTrackingSummary';
import { BooleanSummary } from './sensorTypes/Boolean/BooleanSummary';
import { CheckoutSummary } from './sensorTypes/Checkout/CheckoutSummary';
import { ColorPresenceSummary } from './sensorTypes/ColorPresence/ColorPresenceSummary';
import { OpeningDetectionSummary } from './sensorTypes/OpeningDetection/OpeningDetectionSummary';
import { CrossedBarriersDetectionSummary } from './sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionSummary';
import { CrossLineMultiRecognitionSummary } from './sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionSummary';
import { CrossLineRecognitionSummary } from './sensorTypes/CrossLineRecognition/CrossLineRecognitionSummary';
import { DebugSummary } from './sensorTypes/Debug/DebugSummary';
import { FaceDetectionSummary } from './sensorTypes/FaceDetection/FaceDetectionSummary';
import { FaceMaskDetectionSummary } from './sensorTypes/FaceMaskDetection/FaceMaskDetectionSummary';
import { FuelingDetectionSummary } from './sensorTypes/FuelingDetection/FuelingDetectionSummary';
import { GPSSummary } from './sensorTypes/GPS/GPSSummary';
import { MotionDetectionSummary } from './sensorTypes/MotionDetection/MotionDetectionSummary';
import { NumberSummary } from './sensorTypes/Number/NumberSummary';
import { LicensePlateSummary } from './sensorTypes/LicensePlate/LicensePlateSummary';
import { ObjectCountingSummary } from './sensorTypes/ObjectCounting/ObjectCountingSummary';
import { QueueSizeSummary } from './sensorTypes/QueueSize/QueueSizeSummary';
import { NoPlateDetectionSummary } from './sensorTypes/NoPlateDetection/NoPlateDetectionSummary';
import { ObjectRecognitionSummary } from './sensorTypes/ObjectRecognition/ObjectRecognitionSummary';
import { StoppedObjectsDetectorSummary } from './sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorSummary';
import { NaiveSocialDistancingSummary } from './sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingSummary';
import { SpeedChangeSummary } from './sensorTypes/SpeedChange/SpeedChangeSummary';
import { OpticalCharacterRecognitionSummary } from './sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionSummary';
import { PoseDetectionSummary } from './sensorTypes/PoseDetection/PoseDetectionSummary';
import { ReferrerSummary } from './sensorTypes/Referrer/ReferrerSummary';
import { SceneChangeSummary } from './sensorTypes/SceneChange/SceneChangeSummary';
import { ShoppingHoursSummary } from './sensorTypes/ShoppingHours/ShoppingHoursSummary';
import { StoppedLicensePlateSummary } from './sensorTypes/StoppedLicensePlate/StoppedLicensePlateSummary';
import { StringSummary } from './sensorTypes/String/StringSummary';
import { LicensePlateTextSummary } from './sensorTypes/LicensePlateText/LicensePlateTextSummary';
import { VideoSummary } from './sensorTypes/Video/VideoSummary';

export type Summary = {
  id?: string;
  type: SensorTypeLabel;
  from: Date;
  to: Date;
  length: number;
  detail:
    | BeaconTrackingSummary
    | BooleanSummary
    | CheckoutSummary
    | ColorPresenceSummary
    | OpeningDetectionSummary
    | CrossedBarriersDetectionSummary
    | CrossLineMultiRecognitionSummary
    | CrossLineRecognitionSummary
    | DebugSummary
    | FaceDetectionSummary
    | FaceMaskDetectionSummary
    | FuelingDetectionSummary
    | GPSSummary
    | MotionDetectionSummary
    | NumberSummary
    | LicensePlateSummary
    | ObjectCountingSummary
    | QueueSizeSummary
    | NoPlateDetectionSummary
    | ObjectRecognitionSummary
    | StoppedObjectsDetectorSummary
    | NaiveSocialDistancingSummary
    | SpeedChangeSummary
    | OpticalCharacterRecognitionSummary
    | PoseDetectionSummary
    | ReferrerSummary
    | SceneChangeSummary
    | ShoppingHoursSummary
    | StoppedLicensePlateSummary
    | StringSummary
    | LicensePlateTextSummary
    | VideoSummary;
  updated: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  assetId?: string;
  sensorId?: string;
  summaryForAssetId?: string;
  trackingLogs?: Log[];
  asset?: Asset;
  sensor?: Sensor;
  datasets?: Dataset[];
  summaryForAsset?: SummaryForAsset;
};

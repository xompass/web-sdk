import { Log } from "./Log";
import { Project } from "./Project";
import { SummaryForAsset } from "./SummaryForAsset";
import { BeaconTrackingSummary } from "./sensorTypes/BeaconTracking/BeaconTrackingSummary";
import { BooleanSummary } from "./sensorTypes/Boolean/BooleanSummary";
import { CargoContainerISOReaderSummary } from "./sensorTypes/CargoContainerISOReader/CargoContainerISOReaderSummary";
import { CheckoutSummary } from "./sensorTypes/Checkout/CheckoutSummary";
import { ColorPresenceSummary } from "./sensorTypes/ColorPresence/ColorPresenceSummary";
import { ConcentrationAlertSummary } from "./sensorTypes/ConcentrationAlert/ConcentrationAlertSummary";
import { CrossLineMultiRecognitionSummary } from "./sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionSummary";
import { CrossLineRecognitionSummary } from "./sensorTypes/CrossLineRecognition/CrossLineRecognitionSummary";
import { CrossedBarriersDetectionSummary } from "./sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionSummary";
import { DebugSummary } from "./sensorTypes/Debug/DebugSummary";
import { FaceDetectionSummary } from "./sensorTypes/FaceDetection/FaceDetectionSummary";
import { FaceMaskDetectionSummary } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionSummary";
import { FaceRecognitionSummary } from "./sensorTypes/FaceRecognition/FaceRecognitionSummary";
import { FuelingDetectionSummary } from "./sensorTypes/FuelingDetection/FuelingDetectionSummary";
import { GPSSummary } from "./sensorTypes/GPS/GPSSummary";
import { GranularityDetectionSummary } from "./sensorTypes/GranularityDetection/GranularityDetectionSummary";
import { HeatmapSummary } from "./sensorTypes/Heatmap/HeatmapSummary";
import { LicensePlateSummary } from "./sensorTypes/LicensePlate/LicensePlateSummary";
import { LicensePlateTextSummary } from "./sensorTypes/LicensePlateText/LicensePlateTextSummary";
import { LineCrossingDetectionSummary } from "./sensorTypes/LineCrossingDetection/LineCrossingDetectionSummary";
import { MissingHelmetDetectionSummary } from "./sensorTypes/MissingHelmetDetection/MissingHelmetDetectionSummary";
import { MotionDetectionSummary } from "./sensorTypes/MotionDetection/MotionDetectionSummary";
import { MultiLineCrossingDetectionSummary } from "./sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionSummary";
import { MultiZoneObjectTrackingSummary } from "./sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingSummary";
import { NaiveSocialDistancingSummary } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingSummary";
import { NoPlateDetectionSummary } from "./sensorTypes/NoPlateDetection/NoPlateDetectionSummary";
import { NumberSummary } from "./sensorTypes/Number/NumberSummary";
import { ObjectCountingSummary } from "./sensorTypes/ObjectCounting/ObjectCountingSummary";
import { ObjectRecognitionSummary } from "./sensorTypes/ObjectRecognition/ObjectRecognitionSummary";
import { ObjectRecognitionNumericSummary } from "./sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericSummary";
import { OpeningDetectionSummary } from "./sensorTypes/OpeningDetection/OpeningDetectionSummary";
import { OpticalCharacterRecognitionSummary } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionSummary";
import { OverlapDetectionSummary } from "./sensorTypes/OverlapDetection/OverlapDetectionSummary";
import { PanicButtonSummary } from "./sensorTypes/PanicButton/PanicButtonSummary";
import { PeriodicObjectCountingSummary } from "./sensorTypes/PeriodicObjectCounting/PeriodicObjectCountingSummary";
import { PoseDetectionSummary } from "./sensorTypes/PoseDetection/PoseDetectionSummary";
import { QueueSizeSummary } from "./sensorTypes/QueueSize/QueueSizeSummary";
import { ReferrerSummary } from "./sensorTypes/Referrer/ReferrerSummary";
import { SceneChangeSummary } from "./sensorTypes/SceneChange/SceneChangeSummary";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";
import { ShoppingHoursSummary } from "./sensorTypes/ShoppingHours/ShoppingHoursSummary";
import { SpeedChangeSummary } from "./sensorTypes/SpeedChange/SpeedChangeSummary";
import { StoppedLicensePlateSummary } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateSummary";
import { StoppedObjectsDetectorSummary } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorSummary";
import { StringSummary } from "./sensorTypes/String/StringSummary";
import { VideoSummary } from "./sensorTypes/Video/VideoSummary";

export type SummaryForProject = {
  id?: string;
  type: SensorTypeLabel;
  from: Date;
  to: Date;
  length: number;
  detail:
    | BeaconTrackingSummary
    | BooleanSummary
    | CargoContainerISOReaderSummary
    | CheckoutSummary
    | ColorPresenceSummary
    | ConcentrationAlertSummary
    | CrossedBarriersDetectionSummary
    | CrossLineMultiRecognitionSummary
    | CrossLineRecognitionSummary
    | DebugSummary
    | FaceDetectionSummary
    | FaceMaskDetectionSummary
    | FaceRecognitionSummary
    | FuelingDetectionSummary
    | GPSSummary
    | GranularityDetectionSummary
    | HeatmapSummary
    | LicensePlateSummary
    | LicensePlateTextSummary
    | LineCrossingDetectionSummary
    | MissingHelmetDetectionSummary
    | MotionDetectionSummary
    | MultiLineCrossingDetectionSummary
    | MultiZoneObjectTrackingSummary
    | NaiveSocialDistancingSummary
    | NoPlateDetectionSummary
    | NumberSummary
    | ObjectCountingSummary
    | ObjectRecognitionSummary
    | ObjectRecognitionNumericSummary
    | OpeningDetectionSummary
    | OpticalCharacterRecognitionSummary
    | OverlapDetectionSummary
    | PanicButtonSummary
    | PeriodicObjectCountingSummary
    | PoseDetectionSummary
    | QueueSizeSummary
    | ReferrerSummary
    | SceneChangeSummary
    | ShoppingHoursSummary
    | SpeedChangeSummary
    | StoppedLicensePlateSummary
    | StoppedObjectsDetectorSummary
    | StringSummary
    | VideoSummary;
  updated: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  projectId?: string;
  project?: Project;
  summaryForAssets?: SummaryForAsset[];
  trackingLogs?: Log[];
};

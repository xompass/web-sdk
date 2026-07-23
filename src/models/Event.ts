import { Asset } from "./Asset";
import { Customer } from "./Customer";
import { EventComment } from "./EventComment";
import { EventStateChange } from "./EventStateChange";
import { EventSummary } from "./EventSummary";
import { EventTrigger } from "./EventTrigger";
import { Point } from "./GeoJSON";
import { Log } from "./Log";
import { Project } from "./Project";
import { BeaconTrackingEventContent } from "./sensorTypes/BeaconTracking/BeaconTrackingEventContent";
import { BooleanEventContent } from "./sensorTypes/Boolean/BooleanEventContent";
import { CargoContainerISOReaderEventContent } from "./sensorTypes/CargoContainerISOReader/CargoContainerISOReaderEventContent";
import { CheckoutEventContent } from "./sensorTypes/Checkout/CheckoutEventContent";
import { ColorPresenceEventContent } from "./sensorTypes/ColorPresence/ColorPresenceEventContent";
import { ColorPresenceFeedback } from "./sensorTypes/ColorPresence/ColorPresenceFeedback";
import { ConcentrationAlertEventContent } from "./sensorTypes/ConcentrationAlert/ConcentrationAlertEventContent";
import { ConcentrationAlertFeedback } from "./sensorTypes/ConcentrationAlert/ConcentrationAlertFeedback";
import { CrossLineMultiRecognitionEventContent } from "./sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionEventContent";
import { CrossLineRecognitionEventContent } from "./sensorTypes/CrossLineRecognition/CrossLineRecognitionEventContent";
import { CrossedBarriersDetectionEventContent } from "./sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionEventContent";
import { DebugEventContent } from "./sensorTypes/Debug/DebugEventContent";
import { FaceDetectionEventContent } from "./sensorTypes/FaceDetection/FaceDetectionEventContent";
import { FaceDetectionFeedback } from "./sensorTypes/FaceDetection/FaceDetectionFeedback";
import { FaceMaskDetectionEventContent } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionEventContent";
import { FaceMaskDetectionFeedback } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionFeedback";
import { FaceRecognitionEventContent } from "./sensorTypes/FaceRecognition/FaceRecognitionEventContent";
import { FaceRecognitionFeedback } from "./sensorTypes/FaceRecognition/FaceRecognitionFeedback";
import { FuelingDetectionEventContent } from "./sensorTypes/FuelingDetection/FuelingDetectionEventContent";
import { FuelingDetectionFeedback } from "./sensorTypes/FuelingDetection/FuelingDetectionFeedback";
import { GPSEventContent } from "./sensorTypes/GPS/GPSEventContent";
import { GranularityDetectionEventContent } from "./sensorTypes/GranularityDetection/GranularityDetectionEventContent";
import { GranularityDetectionFeedback } from "./sensorTypes/GranularityDetection/GranularityDetectionFeedback";
import { HeatmapEventContent } from "./sensorTypes/Heatmap/HeatmapEventContent";
import { LicensePlateEventContent } from "./sensorTypes/LicensePlate/LicensePlateEventContent";
import { LicensePlateFeedback } from "./sensorTypes/LicensePlate/LicensePlateFeedback";
import { LicensePlateTextEventContent } from "./sensorTypes/LicensePlateText/LicensePlateTextEventContent";
import { LineCrossingDetectionEventContent } from "./sensorTypes/LineCrossingDetection/LineCrossingDetectionEventContent";
import { LineCrossingDetectionFeedback } from "./sensorTypes/LineCrossingDetection/LineCrossingDetectionFeedback";
import { MissingHelmetDetectionEventContent } from "./sensorTypes/MissingHelmetDetection/MissingHelmetDetectionEventContent";
import { MissingHelmetDetectionFeedback } from "./sensorTypes/MissingHelmetDetection/MissingHelmetDetectionFeedback";
import { MotionDetectionEventContent } from "./sensorTypes/MotionDetection/MotionDetectionEventContent";
import { MotionDetectionFeedback } from "./sensorTypes/MotionDetection/MotionDetectionFeedback";
import { MultiLineCrossingDetectionEventContent } from "./sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionEventContent";
import { MultiLineCrossingDetectionFeedback } from "./sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionFeedback";
import { MultiZoneObjectTrackingEventContent } from "./sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingEventContent";
import { MultiZoneObjectTrackingFeedback } from "./sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingFeedback";
import { NaiveSocialDistancingEventContent } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingEventContent";
import { NaiveSocialDistancingFeedback } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingFeedback";
import { NoPlateDetectionEventContent } from "./sensorTypes/NoPlateDetection/NoPlateDetectionEventContent";
import { NoPlateDetectionFeedback } from "./sensorTypes/NoPlateDetection/NoPlateDetectionFeedback";
import { NumberEventContent } from "./sensorTypes/Number/NumberEventContent";
import { ObjectCountingEventContent } from "./sensorTypes/ObjectCounting/ObjectCountingEventContent";
import { ObjectRecognitionEventContent } from "./sensorTypes/ObjectRecognition/ObjectRecognitionEventContent";
import { ObjectRecognitionFeedback } from "./sensorTypes/ObjectRecognition/ObjectRecognitionFeedback";
import { ObjectRecognitionNumericEventContent } from "./sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericEventContent";
import { ObjectRecognitionNumericFeedback } from "./sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericFeedback";
import { OpeningDetectionEventContent } from "./sensorTypes/OpeningDetection/OpeningDetectionEventContent";
import { OpeningDetectionFeedback } from "./sensorTypes/OpeningDetection/OpeningDetectionFeedback";
import { OpticalCharacterRecognitionEventContent } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionEventContent";
import { OpticalCharacterRecognitionFeedback } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionFeedback";
import { OverlapDetectionEventContent } from "./sensorTypes/OverlapDetection/OverlapDetectionEventContent";
import { OverlapDetectionFeedback } from "./sensorTypes/OverlapDetection/OverlapDetectionFeedback";
import { PanicButtonEventContent } from "./sensorTypes/PanicButton/PanicButtonEventContent";
import { PanicButtonFeedback } from "./sensorTypes/PanicButton/PanicButtonFeedback";
import { PeriodicObjectCountingEventContent } from "./sensorTypes/PeriodicObjectCounting/PeriodicObjectCountingEventContent";
import { PoseDetectionEventContent } from "./sensorTypes/PoseDetection/PoseDetectionEventContent";
import { PoseDetectionFeedback } from "./sensorTypes/PoseDetection/PoseDetectionFeedback";
import { QueueSizeEventContent } from "./sensorTypes/QueueSize/QueueSizeEventContent";
import { ReferrerEventContent } from "./sensorTypes/Referrer/ReferrerEventContent";
import { ReferrerFeedback } from "./sensorTypes/Referrer/ReferrerFeedback";
import { SceneChangeEventContent } from "./sensorTypes/SceneChange/SceneChangeEventContent";
import { SceneChangeFeedback } from "./sensorTypes/SceneChange/SceneChangeFeedback";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";
import { ShoppingHoursEventContent } from "./sensorTypes/ShoppingHours/ShoppingHoursEventContent";
import { SpeedChangeEventContent } from "./sensorTypes/SpeedChange/SpeedChangeEventContent";
import { SpeedChangeFeedback } from "./sensorTypes/SpeedChange/SpeedChangeFeedback";
import { StoppedLicensePlateEventContent } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateEventContent";
import { StoppedLicensePlateFeedback } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateFeedback";
import { StoppedObjectsDetectorEventContent } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorEventContent";
import { StoppedObjectsDetectorFeedback } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorFeedback";
import { StringEventContent } from "./sensorTypes/String/StringEventContent";
import { VideoEventContent } from "./sensorTypes/Video/VideoEventContent";
import { VideoFeedback } from "./sensorTypes/Video/VideoFeedback";

export type Event = {
  id?: string;
  type: string;
  currentState: string;
  muted: boolean;
  seen: boolean;
  hidden: boolean;
  starred: boolean;
  filtered?: boolean;
  archived?: boolean;
  expiresAt?: Date;
  forwardedTo?: any[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  assetId?: string;
  customerId?: string;
  _comments?: EventComment[];
  _data?: EventData[];
  _lastData?: EventData;
  _stateChanges?: EventStateChange[];
  summaryId?: string;
  eventTriggerId?: string;
  projectId?: string;
  asset?: Asset;
  comments?: EventComment[];
  customer?: Customer;
  data?: EventData[];
  eventTrigger?: EventTrigger;
  lastData?: EventData[];
  project?: Project;
  stateChanges?: EventStateChange[];
  summary?: EventSummary;
  trackingLogs?: Log[];
};

export type EventData = {
  id?: string;
  type: SensorTypeLabel;
  from: Date;
  to: Date;
  filtered?: boolean;
  content:
    | BeaconTrackingEventContent
    | BooleanEventContent
    | CargoContainerISOReaderEventContent
    | CheckoutEventContent
    | ColorPresenceEventContent
    | ConcentrationAlertEventContent
    | CrossedBarriersDetectionEventContent
    | CrossLineMultiRecognitionEventContent
    | CrossLineRecognitionEventContent
    | DebugEventContent
    | FaceDetectionEventContent
    | FaceMaskDetectionEventContent
    | FaceRecognitionEventContent
    | FuelingDetectionEventContent
    | GPSEventContent
    | GranularityDetectionEventContent
    | HeatmapEventContent
    | LicensePlateEventContent
    | LicensePlateTextEventContent
    | LineCrossingDetectionEventContent
    | MissingHelmetDetectionEventContent
    | MotionDetectionEventContent
    | MultiLineCrossingDetectionEventContent
    | MultiZoneObjectTrackingEventContent
    | NaiveSocialDistancingEventContent
    | NoPlateDetectionEventContent
    | NumberEventContent
    | ObjectCountingEventContent
    | ObjectRecognitionEventContent
    | ObjectRecognitionNumericEventContent
    | OpeningDetectionEventContent
    | OpticalCharacterRecognitionEventContent
    | OverlapDetectionEventContent
    | PanicButtonEventContent
    | PeriodicObjectCountingEventContent
    | PoseDetectionEventContent
    | QueueSizeEventContent
    | ReferrerEventContent
    | SceneChangeEventContent
    | ShoppingHoursEventContent
    | SpeedChangeEventContent
    | StoppedLicensePlateEventContent
    | StoppedObjectsDetectorEventContent
    | StringEventContent
    | VideoEventContent;
  location?: Point;
  feedback?:
    | ColorPresenceFeedback
    | ConcentrationAlertFeedback
    | FaceDetectionFeedback
    | FaceMaskDetectionFeedback
    | FaceRecognitionFeedback
    | FuelingDetectionFeedback
    | GranularityDetectionFeedback
    | LicensePlateFeedback
    | LineCrossingDetectionFeedback
    | MissingHelmetDetectionFeedback
    | MotionDetectionFeedback
    | MultiLineCrossingDetectionFeedback
    | MultiZoneObjectTrackingFeedback
    | NaiveSocialDistancingFeedback
    | NoPlateDetectionFeedback
    | ObjectRecognitionFeedback
    | ObjectRecognitionNumericFeedback
    | OpeningDetectionFeedback
    | OpticalCharacterRecognitionFeedback
    | OverlapDetectionFeedback
    | PanicButtonFeedback
    | PoseDetectionFeedback
    | ReferrerFeedback
    | SceneChangeFeedback
    | SpeedChangeFeedback
    | StoppedLicensePlateFeedback
    | StoppedObjectsDetectorFeedback
    | VideoFeedback;
  fake?: boolean;
  tags?: string[];
  referenceId?: string;
  sensorId: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  trackingLogs?: Log[];
};

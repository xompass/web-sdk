// Core models
import { Asset } from './Asset';
import { EventComment } from './EventComment';
import { EventStateChange } from './EventStateChange';
import { EventSummary } from './EventSummary';
import { EventTrigger } from './EventTrigger';
import { Point } from './GeoJSON';
import { Log } from './Log';
import { SensorTypeLabel } from './sensorTypes/SensorTypeLabel';

// EventContent types (alphabetical)
import { BeaconTrackingEventContent } from './sensorTypes/BeaconTracking/BeaconTrackingEventContent';
import { BooleanEventContent } from './sensorTypes/Boolean/BooleanEventContent';
import { CargoContainerISOReaderEventContent } from './sensorTypes/CargoContainerISOReader/CargoContainerISOReaderEventContent';
import { CheckoutEventContent } from './sensorTypes/Checkout/CheckoutEventContent';
import { ColorPresenceEventContent } from './sensorTypes/ColorPresence/ColorPresenceEventContent';
import { CrossedBarriersDetectionEventContent } from './sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionEventContent';
import { CrossLineMultiRecognitionEventContent } from './sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionEventContent';
import { CrossLineRecognitionEventContent } from './sensorTypes/CrossLineRecognition/CrossLineRecognitionEventContent';
import { DebugEventContent } from './sensorTypes/Debug/DebugEventContent';
import { FaceDetectionEventContent } from './sensorTypes/FaceDetection/FaceDetectionEventContent';
import { FaceMaskDetectionEventContent } from './sensorTypes/FaceMaskDetection/FaceMaskDetectionEventContent';
import { FuelingDetectionEventContent } from './sensorTypes/FuelingDetection/FuelingDetectionEventContent';
import { GPSEventContent } from './sensorTypes/GPS/GPSEventContent';
import { GranularityDetectionEventContent } from './sensorTypes/GranularityDetection/GranularityDetectionEventContent';
import { HeatmapEventContent } from './sensorTypes/Heatmap/HeatmapEventContent';
import { LicensePlateEventContent } from './sensorTypes/LicensePlate/LicensePlateEventContent';
import { LicensePlateTextEventContent } from './sensorTypes/LicensePlateText/LicensePlateTextEventContent';
import { LineCrossingDetectionEventContent } from './sensorTypes/LineCrossingDetection/LineCrossingDetectionEventContent';
import { MissingHelmetDetectionEventContent } from './sensorTypes/MissingHelmetDetection/MissingHelmetDetectionEventContent';
import { MotionDetectionEventContent } from './sensorTypes/MotionDetection/MotionDetectionEventContent';
import { MultiLineCrossingDetectionEventContent } from './sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionEventContent';
import { MultiZoneObjectTrackingEventContent } from './sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingEventContent';
import { NaiveSocialDistancingEventContent } from './sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingEventContent';
import { NoPlateDetectionEventContent } from './sensorTypes/NoPlateDetection/NoPlateDetectionEventContent';
import { NumberEventContent } from './sensorTypes/Number/NumberEventContent';
import { ObjectCountingEventContent } from './sensorTypes/ObjectCounting/ObjectCountingEventContent';
import { ObjectRecognitionEventContent } from './sensorTypes/ObjectRecognition/ObjectRecognitionEventContent';
import { ObjectRecognitionNumericEventContent } from './sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericEventContent';
import { OpeningDetectionEventContent } from './sensorTypes/OpeningDetection/OpeningDetectionEventContent';
import { OpticalCharacterRecognitionEventContent } from './sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionEventContent';
import { OverlapDetectionEventContent } from './sensorTypes/OverlapDetection/OverlapDetectionEventContent';
import { PeriodicObjectCountingEventContent } from './sensorTypes/PeriodicObjectCounting/PeriodicObjectCountingEventContent';
import { PoseDetectionEventContent } from './sensorTypes/PoseDetection/PoseDetectionEventContent';
import { QueueSizeEventContent } from './sensorTypes/QueueSize/QueueSizeEventContent';
import { ReferrerEventContent } from './sensorTypes/Referrer/ReferrerEventContent';
import { SceneChangeEventContent } from './sensorTypes/SceneChange/SceneChangeEventContent';
import { ShoppingHoursEventContent } from './sensorTypes/ShoppingHours/ShoppingHoursEventContent';
import { SpeedChangeEventContent } from './sensorTypes/SpeedChange/SpeedChangeEventContent';
import { StoppedLicensePlateEventContent } from './sensorTypes/StoppedLicensePlate/StoppedLicensePlateEventContent';
import { StoppedObjectsDetectorEventContent } from './sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorEventContent';
import { StringEventContent } from './sensorTypes/String/StringEventContent';
import { VideoEventContent } from './sensorTypes/Video/VideoEventContent';

// Feedback types (alphabetical)
import { ColorPresenceFeedback } from './sensorTypes/ColorPresence/ColorPresenceFeedback';
import { FaceDetectionFeedback } from './sensorTypes/FaceDetection/FaceDetectionFeedback';
import { FaceMaskDetectionFeedback } from './sensorTypes/FaceMaskDetection/FaceMaskDetectionFeedback';
import { FuelingDetectionFeedback } from './sensorTypes/FuelingDetection/FuelingDetectionFeedback';
import { LicensePlateFeedback } from './sensorTypes/LicensePlate/LicensePlateFeedback';
import { LineCrossingDetectionFeedback } from './sensorTypes/LineCrossingDetection/LineCrossingDetectionFeedback';
import { MotionDetectionFeedback } from './sensorTypes/MotionDetection/MotionDetectionFeedback';
import { NaiveSocialDistancingFeedback } from './sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingFeedback';
import { NoPlateDetectionFeedback } from './sensorTypes/NoPlateDetection/NoPlateDetectionFeedback';
import { ObjectRecognitionFeedback } from './sensorTypes/ObjectRecognition/ObjectRecognitionFeedback';
import { OpeningDetectionFeedback } from './sensorTypes/OpeningDetection/OpeningDetectionFeedback';
import { OpticalCharacterRecognitionFeedback } from './sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionFeedback';
import { PoseDetectionFeedback } from './sensorTypes/PoseDetection/PoseDetectionFeedback';
import { ReferrerFeedback } from './sensorTypes/Referrer/ReferrerFeedback';
import { SceneChangeFeedback } from './sensorTypes/SceneChange/SceneChangeFeedback';
import { SpeedChangeFeedback } from './sensorTypes/SpeedChange/SpeedChangeFeedback';
import { StoppedLicensePlateFeedback } from './sensorTypes/StoppedLicensePlate/StoppedLicensePlateFeedback';
import { StoppedObjectsDetectorFeedback } from './sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorFeedback';
import { VideoFeedback } from './sensorTypes/Video/VideoFeedback';

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
  _comments?: EventComment[];
  _data?: EventData[];
  _lastData?: EventData;
  _stateChanges?: EventStateChange[];
  summaryId?: string;
  eventTriggerId?: string;
  asset?: Asset;
  summary?: EventSummary;
  eventTrigger?: EventTrigger;
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
    | CheckoutEventContent
    | ColorPresenceEventContent
    | OpeningDetectionEventContent
    | CrossedBarriersDetectionEventContent
    | CrossLineMultiRecognitionEventContent
    | CrossLineRecognitionEventContent
    | DebugEventContent
    | FaceDetectionEventContent
    | FaceMaskDetectionEventContent
    | FuelingDetectionEventContent
    | GPSEventContent
    | MotionDetectionEventContent
    | NumberEventContent
    | LicensePlateEventContent
    | LineCrossingDetectionEventContent
    | ObjectCountingEventContent
    | QueueSizeEventContent
    | NoPlateDetectionEventContent
    | ObjectRecognitionEventContent
    | StoppedObjectsDetectorEventContent
    | NaiveSocialDistancingEventContent
    | SpeedChangeEventContent
    | OpticalCharacterRecognitionEventContent
    | PoseDetectionEventContent
    | ReferrerEventContent
    | SceneChangeEventContent
    | ShoppingHoursEventContent
    | StoppedLicensePlateEventContent
    | StringEventContent
    | LicensePlateTextEventContent
    | MultiZoneObjectTrackingEventContent
    | PeriodicObjectCountingEventContent
    | ObjectRecognitionNumericEventContent
    | GranularityDetectionEventContent
    | CargoContainerISOReaderEventContent
    | MissingHelmetDetectionEventContent
    | HeatmapEventContent
    | OverlapDetectionEventContent
    | MultiLineCrossingDetectionEventContent
    | VideoEventContent;
  location?: Point;
  feedback?:
    | ColorPresenceFeedback
    | OpeningDetectionFeedback
    | FaceDetectionFeedback
    | FaceMaskDetectionFeedback
    | FuelingDetectionFeedback
    | MotionDetectionFeedback
    | LicensePlateFeedback
    | LineCrossingDetectionFeedback
    | NoPlateDetectionFeedback
    | ObjectRecognitionFeedback
    | StoppedObjectsDetectorFeedback
    | NaiveSocialDistancingFeedback
    | SpeedChangeFeedback
    | OpticalCharacterRecognitionFeedback
    | PoseDetectionFeedback
    | ReferrerFeedback
    | SceneChangeFeedback
    | StoppedLicensePlateFeedback
    | VideoFeedback;
  fake?: boolean;
  tags?: string[];
  referenceId?: string;
  sensorId: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
};

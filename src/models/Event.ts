import { Asset } from "./Asset";
import { EventSummary } from "./EventSummary";
import { EventTrigger } from "./EventTrigger";
import { Log } from "./Log";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";
import { Point } from "./GeoJSON";
import { BeaconTrackingEventContent } from "./sensorTypes/BeaconTracking/BeaconTrackingEventContent";
import { BooleanEventContent } from "./sensorTypes/Boolean/BooleanEventContent";
import { CheckoutEventContent } from "./sensorTypes/Checkout/CheckoutEventContent";
import { ColorPresenceEventContent } from "./sensorTypes/ColorPresence/ColorPresenceEventContent";
import { OpeningDetectionEventContent } from "./sensorTypes/OpeningDetection/OpeningDetectionEventContent";
import { CrossedBarriersDetectionEventContent } from "./sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionEventContent";
import { CrossLineMultiRecognitionEventContent } from "./sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionEventContent";
import { CrossLineRecognitionEventContent } from "./sensorTypes/CrossLineRecognition/CrossLineRecognitionEventContent";
import { DebugEventContent } from "./sensorTypes/Debug/DebugEventContent";
import { FaceDetectionEventContent } from "./sensorTypes/FaceDetection/FaceDetectionEventContent";
import { FaceMaskDetectionEventContent } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionEventContent";
import { FuelingDetectionEventContent } from "./sensorTypes/FuelingDetection/FuelingDetectionEventContent";
import { GPSEventContent } from "./sensorTypes/GPS/GPSEventContent";
import { MotionDetectionEventContent } from "./sensorTypes/MotionDetection/MotionDetectionEventContent";
import { NumberEventContent } from "./sensorTypes/Number/NumberEventContent";
import { LicensePlateEventContent } from "./sensorTypes/LicensePlate/LicensePlateEventContent";
import { ObjectCountingEventContent } from "./sensorTypes/ObjectCounting/ObjectCountingEventContent";
import { QueueSizeEventContent } from "./sensorTypes/QueueSize/QueueSizeEventContent";
import { NoPlateDetectionEventContent } from "./sensorTypes/NoPlateDetection/NoPlateDetectionEventContent";
import { ObjectRecognitionEventContent } from "./sensorTypes/ObjectRecognition/ObjectRecognitionEventContent";
import { StoppedObjectsDetectorEventContent } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorEventContent";
import { NaiveSocialDistancingEventContent } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingEventContent";
import { SpeedChangeEventContent } from "./sensorTypes/SpeedChange/SpeedChangeEventContent";
import { OpticalCharacterRecognitionEventContent } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionEventContent";
import { PoseDetectionEventContent } from "./sensorTypes/PoseDetection/PoseDetectionEventContent";
import { ReferrerEventContent } from "./sensorTypes/Referrer/ReferrerEventContent";
import { SceneChangeEventContent } from "./sensorTypes/SceneChange/SceneChangeEventContent";
import { ShoppingHoursEventContent } from "./sensorTypes/ShoppingHours/ShoppingHoursEventContent";
import { StoppedLicensePlateEventContent } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateEventContent";
import { StringEventContent } from "./sensorTypes/String/StringEventContent";
import { LicensePlateTextEventContent } from "./sensorTypes/LicensePlateText/LicensePlateTextEventContent";
import { VideoEventContent } from "./sensorTypes/Video/VideoEventContent";
import { ColorPresenceFeedback } from "./sensorTypes/ColorPresence/ColorPresenceFeedback";
import { OpeningDetectionFeedback } from "./sensorTypes/OpeningDetection/OpeningDetectionFeedback";
import { FaceDetectionFeedback } from "./sensorTypes/FaceDetection/FaceDetectionFeedback";
import { FaceMaskDetectionFeedback } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionFeedback";
import { FuelingDetectionFeedback } from "./sensorTypes/FuelingDetection/FuelingDetectionFeedback";
import { MotionDetectionFeedback } from "./sensorTypes/MotionDetection/MotionDetectionFeedback";
import { LicensePlateFeedback } from "./sensorTypes/LicensePlate/LicensePlateFeedback";
import { NoPlateDetectionFeedback } from "./sensorTypes/NoPlateDetection/NoPlateDetectionFeedback";
import { ObjectRecognitionFeedback } from "./sensorTypes/ObjectRecognition/ObjectRecognitionFeedback";
import { StoppedObjectsDetectorFeedback } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorFeedback";
import { NaiveSocialDistancingFeedback } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingFeedback";
import { SpeedChangeFeedback } from "./sensorTypes/SpeedChange/SpeedChangeFeedback";
import { OpticalCharacterRecognitionFeedback } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionFeedback";
import { PoseDetectionFeedback } from "./sensorTypes/PoseDetection/PoseDetectionFeedback";
import { ReferrerFeedback } from "./sensorTypes/Referrer/ReferrerFeedback";
import { SceneChangeFeedback } from "./sensorTypes/SceneChange/SceneChangeFeedback";
import { StoppedLicensePlateFeedback } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateFeedback";
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

export type EventComment = {
  id?: string;
  content: string;
  edited?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  userId?: string;
  principalType?: string;
  defaultEventCommentId?: string;
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

export type EventStateChange = {
  id?: string;
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  userId?: string;
  principalType?: string;
};

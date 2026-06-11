// Core models
import { Asset } from './Asset';
import { EventComment } from './EventComment';
import { EventStateChange } from './EventStateChange';
import { EventSummary } from './EventSummary';
import { EventTrigger } from './EventTrigger';
import { Point } from './GeoJSON';
import { Log } from './Log';
import {
  SensorTypeLabel,
  SensorTypeLabels,
} from './sensorTypes/SensorTypeLabel';

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
import { PanicButtonEventContent } from './sensorTypes/PanicButton/PanicButtonEventContent';
import { PanicButtonFeedback } from './sensorTypes/PanicButton/PanicButtonFeedback';
import { GranularityDetectionFeedback } from './sensorTypes/GranularityDetection/GranularityDetectionFeedback';
import { ObjectRecognitionNumericFeedback } from './sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericFeedback';

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
    | {
        type: SensorTypeLabels['BeaconTracking'];
        content: BeaconTrackingEventContent;
      }
    | { type: SensorTypeLabels['Boolean']; content: BooleanEventContent }
    | { type: SensorTypeLabels['Checkout']; content: CheckoutEventContent }
    | {
        type: SensorTypeLabels['ColorPresence'];
        content: ColorPresenceEventContent;
      }
    | {
        type: SensorTypeLabels['OpeningDetection'];
        content: OpeningDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['CrossedBarriersDetection'];
        content: CrossedBarriersDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['CrossLineMultiRecognition'];
        content: CrossLineMultiRecognitionEventContent;
      }
    | {
        type: SensorTypeLabels['CrossLineRecognition'];
        content: CrossLineRecognitionEventContent;
      }
    | { type: SensorTypeLabels['Debug']; content: DebugEventContent }
    | {
        type: SensorTypeLabels['FaceDetection'];
        content: FaceDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['FaceMaskDetection'];
        content: FaceMaskDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['FuelingDetection'];
        content: FuelingDetectionEventContent;
      }
    | { type: SensorTypeLabels['GPS']; content: GPSEventContent }
    | {
        type: SensorTypeLabels['MotionDetection'];
        content: MotionDetectionEventContent;
      }
    | { type: SensorTypeLabels['Number']; content: NumberEventContent }
    | {
        type: SensorTypeLabels['LicensePlate'];
        content: LicensePlateEventContent;
      }
    | {
        type: SensorTypeLabels['LineCrossingDetection'];
        content: LineCrossingDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['ObjectCounting'];
        content: ObjectCountingEventContent;
      }
    | { type: SensorTypeLabels['QueueSize']; content: QueueSizeEventContent }
    | {
        type: SensorTypeLabels['NoPlateDetection'];
        content: NoPlateDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['ObjectRecognition'];
        content: ObjectRecognitionEventContent;
      }
    | {
        type: SensorTypeLabels['StoppedObjectsDetector'];
        content: StoppedObjectsDetectorEventContent;
      }
    | {
        type: SensorTypeLabels['NaiveSocialDistancing'];
        content: NaiveSocialDistancingEventContent;
      }
    | {
        type: SensorTypeLabels['SpeedChange'];
        content: SpeedChangeEventContent;
      }
    | {
        type: SensorTypeLabels['OpticalCharacterRecognition'];
        content: OpticalCharacterRecognitionEventContent;
      }
    | {
        type: SensorTypeLabels['PanicButton'];
        content: PanicButtonEventContent;
      }
    | {
        type: SensorTypeLabels['PoseDetection'];
        content: PoseDetectionEventContent;
      }
    | { type: SensorTypeLabels['Referrer']; content: ReferrerEventContent }
    | {
        type: SensorTypeLabels['SceneChange'];
        content: SceneChangeEventContent;
      }
    | {
        type: SensorTypeLabels['ShoppingHours'];
        content: ShoppingHoursEventContent;
      }
    | {
        type: SensorTypeLabels['StoppedLicensePlate'];
        content: StoppedLicensePlateEventContent;
      }
    | { type: SensorTypeLabels['String']; content: StringEventContent }
    | {
        type: SensorTypeLabels['LicensePlateText'];
        content: LicensePlateTextEventContent;
      }
    | { type: SensorTypeLabels['Video']; content: VideoEventContent }
    | {
        type: SensorTypeLabels['GranularityDetection'];
        content: GranularityDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['ObjectRecognitionNumeric'];
        content: ObjectRecognitionNumericEventContent;
      }
    | {
        type: SensorTypeLabels['MissingHelmetDetection'];
        content: MissingHelmetDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['PeriodicObjectCounting'];
        content: PeriodicObjectCountingEventContent;
      }
    | {
        type: SensorTypeLabels['MultiZoneObjectTracking'];
        content: MultiZoneObjectTrackingEventContent;
      }
    | {
        type: SensorTypeLabels['CargoContainerISOReader'];
        content: CargoContainerISOReaderEventContent;
      }
    | {
        type: SensorTypeLabels['OverlapDetection'];
        content: OverlapDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['MultiLineCrossingDetection'];
        content: MultiLineCrossingDetectionEventContent;
      }
    | { type: SensorTypeLabels['Heatmap']; content: HeatmapEventContent };
  location?: Point;
  feedback?:
    | {
        type: SensorTypeLabels['ColorPresence'];
        content: ColorPresenceFeedback;
      }
    | {
        type: SensorTypeLabels['OpeningDetection'];
        content: OpeningDetectionFeedback;
      }
    | {
        type: SensorTypeLabels['FaceDetection'];
        content: FaceDetectionFeedback;
      }
    | {
        type: SensorTypeLabels['FaceMaskDetection'];
        content: FaceMaskDetectionFeedback;
      }
    | {
        type: SensorTypeLabels['FuelingDetection'];
        content: FuelingDetectionFeedback;
      }
    | {
        type: SensorTypeLabels['MotionDetection'];
        content: MotionDetectionFeedback;
      }
    | {
        type: SensorTypeLabels['LicensePlate'];
        content: LicensePlateFeedback;
      }
    | {
        type: SensorTypeLabels['LineCrossingDetection'];
        content: LineCrossingDetectionFeedback;
      }
    | {
        type: SensorTypeLabels['NoPlateDetection'];
        content: NoPlateDetectionFeedback;
      }
    | {
        type: SensorTypeLabels['ObjectRecognition'];
        content: ObjectRecognitionFeedback;
      }
    | {
        type: SensorTypeLabels['StoppedObjectsDetector'];
        content: StoppedObjectsDetectorFeedback;
      }
    | {
        type: SensorTypeLabels['NaiveSocialDistancing'];
        content: NaiveSocialDistancingFeedback;
      }
    | {
        type: SensorTypeLabels['SpeedChange'];
        content: SpeedChangeFeedback;
      }
    | {
        type: SensorTypeLabels['OpticalCharacterRecognition'];
        content: OpticalCharacterRecognitionFeedback;
      }
    | {
        type: SensorTypeLabels['PanicButton'];
        content: PanicButtonFeedback;
      }
    | {
        type: SensorTypeLabels['PoseDetection'];
        content: PoseDetectionFeedback;
      }
    | { type: SensorTypeLabels['Referrer']; content: ReferrerFeedback }
    | {
        type: SensorTypeLabels['SceneChange'];
        content: SceneChangeFeedback;
      }
    | {
        type: SensorTypeLabels['StoppedLicensePlate'];
        content: StoppedLicensePlateFeedback;
      }
    | { type: SensorTypeLabels['Video']; content: VideoFeedback }
    | {
        type: SensorTypeLabels['GranularityDetection'];
        content: GranularityDetectionFeedback;
      }
    | {
        type: SensorTypeLabels['ObjectRecognitionNumeric'];
        content: ObjectRecognitionNumericFeedback;
      }
    | {
        type: SensorTypeLabels['MissingHelmetDetection'];
        content: MissingHelmetDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['PeriodicObjectCounting'];
        content: PeriodicObjectCountingEventContent;
      }
    | {
        type: SensorTypeLabels['MultiZoneObjectTracking'];
        content: MultiZoneObjectTrackingEventContent;
      }
    | {
        type: SensorTypeLabels['CargoContainerISOReader'];
        content: CargoContainerISOReaderEventContent;
      }
    | {
        type: SensorTypeLabels['OverlapDetection'];
        content: OverlapDetectionEventContent;
      }
    | {
        type: SensorTypeLabels['MultiLineCrossingDetection'];
        content: MultiLineCrossingDetectionEventContent;
      }
    | { type: SensorTypeLabels['Heatmap']; content: HeatmapEventContent };
  fake?: boolean;
  tags?: string[];
  referenceId?: string;
  sensorId: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
};

import { SensorTypeLabels } from './sensorTypes/SensorTypeLabel';
import { Point } from './GeoJSON';
import { BeaconTrackingContent } from './sensorTypes/BeaconTracking/BeaconTrackingContent';
import { BooleanContent } from './sensorTypes/Boolean/BooleanContent';
import { CargoContainerISOReaderContent } from './sensorTypes/CargoContainerISOReader/CargoContainerISOReaderContent';
import { CheckoutContent } from './sensorTypes/Checkout/CheckoutContent';
import { ColorPresenceContent } from './sensorTypes/ColorPresence/ColorPresenceContent';
import { CrossedBarriersDetectionContent } from './sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionContent';
import { CrossLineMultiRecognitionContent } from './sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionContent';
import { CrossLineRecognitionContent } from './sensorTypes/CrossLineRecognition/CrossLineRecognitionContent';
import { DebugContent } from './sensorTypes/Debug/DebugContent';
import { FaceDetectionContent } from './sensorTypes/FaceDetection/FaceDetectionContent';
import { FaceMaskDetectionContent } from './sensorTypes/FaceMaskDetection/FaceMaskDetectionContent';
import { FuelingDetectionContent } from './sensorTypes/FuelingDetection/FuelingDetectionContent';
import { GPSContent } from './sensorTypes/GPS/GPSContent';
import { GranularityDetectionContent } from './sensorTypes/GranularityDetection/GranularityDetectionContent';
import { HeatmapContent } from './sensorTypes/Heatmap/HeatmapContent';
import { LicensePlateContent } from './sensorTypes/LicensePlate/LicensePlateContent';
import { LicensePlateTextContent } from './sensorTypes/LicensePlateText/LicensePlateTextContent';
import { LineCrossingDetectionContent } from './sensorTypes/LineCrossingDetection/LineCrossingDetectionContent';
import { MissingHelmetDetectionContent } from './sensorTypes/MissingHelmetDetection/MissingHelmetDetectionContent';
import { MotionDetectionContent } from './sensorTypes/MotionDetection/MotionDetectionContent';
import { MultiLineCrossingDetectionContent } from './sensorTypes/MultiLineCrossingDetection/MultiLineCrossingDetectionContent';
import { MultiZoneObjectTrackingContent } from './sensorTypes/MultiZoneObjectTracking/MultiZoneObjectTrackingContent';
import { NaiveSocialDistancingContent } from './sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingContent';
import { NoPlateDetectionContent } from './sensorTypes/NoPlateDetection/NoPlateDetectionContent';
import { NumberContent } from './sensorTypes/Number/NumberContent';
import { ObjectCountingContent } from './sensorTypes/ObjectCounting/ObjectCountingContent';
import { ObjectRecognitionContent } from './sensorTypes/ObjectRecognition/ObjectRecognitionContent';
import { ObjectRecognitionNumericContent } from './sensorTypes/ObjectRecognitionNumeric/ObjectRecognitionNumericContent';
import { OpeningDetectionContent } from './sensorTypes/OpeningDetection/OpeningDetectionContent';
import { OpticalCharacterRecognitionContent } from './sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionContent';
import { OverlapDetectionContent } from './sensorTypes/OverlapDetection/OverlapDetectionContent';
import { PeriodicObjectCountingContent } from './sensorTypes/PeriodicObjectCounting/PeriodicObjectCountingContent';
import { PoseDetectionContent } from './sensorTypes/PoseDetection/PoseDetectionContent';
import { QueueSizeContent } from './sensorTypes/QueueSize/QueueSizeContent';
import { ReferrerContent } from './sensorTypes/Referrer/ReferrerContent';
import { SceneChangeContent } from './sensorTypes/SceneChange/SceneChangeContent';
import { ShoppingHoursContent } from './sensorTypes/ShoppingHours/ShoppingHoursContent';
import { SpeedChangeContent } from './sensorTypes/SpeedChange/SpeedChangeContent';
import { StoppedLicensePlateContent } from './sensorTypes/StoppedLicensePlate/StoppedLicensePlateContent';
import { StoppedObjectsDetectorContent } from './sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorContent';
import { StringContent } from './sensorTypes/String/StringContent';
import { VideoContent } from './sensorTypes/Video/VideoContent';

export type Data = {
  id?: string;
  from: Date;
  to: Date;
  location?: Point;
  created?: Date;
  modified?: Date;
} & (
  | { type: SensorTypeLabels['BeaconTracking']; content: BeaconTrackingContent }
  | { type: SensorTypeLabels['Boolean']; content: BooleanContent }
  | { type: SensorTypeLabels['Checkout']; content: CheckoutContent }
  | { type: SensorTypeLabels['ColorPresence']; content: ColorPresenceContent }
  | {
      type: SensorTypeLabels['OpeningDetection'];
      content: OpeningDetectionContent;
    }
  | {
      type: SensorTypeLabels['CrossedBarriersDetection'];
      content: CrossedBarriersDetectionContent;
    }
  | {
      type: SensorTypeLabels['CrossLineMultiRecognition'];
      content: CrossLineMultiRecognitionContent;
    }
  | {
      type: SensorTypeLabels['CrossLineRecognition'];
      content: CrossLineRecognitionContent;
    }
  | { type: SensorTypeLabels['Debug']; content: DebugContent }
  | { type: SensorTypeLabels['FaceDetection']; content: FaceDetectionContent }
  | {
      type: SensorTypeLabels['FaceMaskDetection'];
      content: FaceMaskDetectionContent;
    }
  | {
      type: SensorTypeLabels['FuelingDetection'];
      content: FuelingDetectionContent;
    }
  | { type: SensorTypeLabels['GPS']; content: GPSContent }
  | {
      type: SensorTypeLabels['MotionDetection'];
      content: MotionDetectionContent;
    }
  | { type: SensorTypeLabels['Number']; content: NumberContent }
  | { type: SensorTypeLabels['LicensePlate']; content: LicensePlateContent }
  | {
      type: SensorTypeLabels['LineCrossingDetection'];
      content: LineCrossingDetectionContent;
    }
  | { type: SensorTypeLabels['ObjectCounting']; content: ObjectCountingContent }
  | { type: SensorTypeLabels['QueueSize']; content: QueueSizeContent }
  | {
      type: SensorTypeLabels['NoPlateDetection'];
      content: NoPlateDetectionContent;
    }
  | {
      type: SensorTypeLabels['ObjectRecognition'];
      content: ObjectRecognitionContent;
    }
  | {
      type: SensorTypeLabels['StoppedObjectsDetector'];
      content: StoppedObjectsDetectorContent;
    }
  | {
      type: SensorTypeLabels['NaiveSocialDistancing'];
      content: NaiveSocialDistancingContent;
    }
  | { type: SensorTypeLabels['SpeedChange']; content: SpeedChangeContent }
  | {
      type: SensorTypeLabels['OpticalCharacterRecognition'];
      content: OpticalCharacterRecognitionContent;
    }
  | { type: SensorTypeLabels['PoseDetection']; content: PoseDetectionContent }
  | { type: SensorTypeLabels['Referrer']; content: ReferrerContent }
  | { type: SensorTypeLabels['SceneChange']; content: SceneChangeContent }
  | { type: SensorTypeLabels['ShoppingHours']; content: ShoppingHoursContent }
  | {
      type: SensorTypeLabels['StoppedLicensePlate'];
      content: StoppedLicensePlateContent;
    }
  | { type: SensorTypeLabels['String']; content: StringContent }
  | {
      type: SensorTypeLabels['LicensePlateText'];
      content: LicensePlateTextContent;
    }
  | { type: SensorTypeLabels['Video']; content: VideoContent }
  | {
      type: SensorTypeLabels['GranularityDetection'];
      content: GranularityDetectionContent;
    }
  | {
      type: SensorTypeLabels['ObjectRecognitionNumeric'];
      content: ObjectRecognitionNumericContent;
    }
  | {
      type: SensorTypeLabels['MissingHelmetDetection'];
      content: MissingHelmetDetectionContent;
    }
  | {
      type: SensorTypeLabels['PeriodicObjectCounting'];
      content: PeriodicObjectCountingContent;
    }
  | {
      type: SensorTypeLabels['MultiZoneObjectTracking'];
      content: MultiZoneObjectTrackingContent;
    }
  | {
      type: SensorTypeLabels['CargoContainerISOReader'];
      content: CargoContainerISOReaderContent;
    }
  | {
      type: SensorTypeLabels['OverlapDetection'];
      content: OverlapDetectionContent;
    }
  | {
      type: SensorTypeLabels['MultiLineCrossingDetection'];
      content: MultiLineCrossingDetectionContent;
    }
  | { type: SensorTypeLabels['Heatmap']; content: HeatmapContent }
);

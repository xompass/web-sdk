import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";
import { Point } from "./GeoJSON";
import { BeaconTrackingContent } from "./sensorTypes/BeaconTracking/BeaconTrackingContent";
import { BooleanContent } from "./sensorTypes/Boolean/BooleanContent";
import { CheckoutContent } from "./sensorTypes/Checkout/CheckoutContent";
import { ColorPresenceContent } from "./sensorTypes/ColorPresence/ColorPresenceContent";
import { OpeningDetectionContent } from "./sensorTypes/OpeningDetection/OpeningDetectionContent";
import { CrossedBarriersDetectionContent } from "./sensorTypes/CrossedBarriersDetection/CrossedBarriersDetectionContent";
import { CrossLineMultiRecognitionContent } from "./sensorTypes/CrossLineMultiRecognition/CrossLineMultiRecognitionContent";
import { CrossLineRecognitionContent } from "./sensorTypes/CrossLineRecognition/CrossLineRecognitionContent";
import { DebugContent } from "./sensorTypes/Debug/DebugContent";
import { FaceDetectionContent } from "./sensorTypes/FaceDetection/FaceDetectionContent";
import { FaceMaskDetectionContent } from "./sensorTypes/FaceMaskDetection/FaceMaskDetectionContent";
import { FuelingDetectionContent } from "./sensorTypes/FuelingDetection/FuelingDetectionContent";
import { GPSContent } from "./sensorTypes/GPS/GPSContent";
import { MotionDetectionContent } from "./sensorTypes/MotionDetection/MotionDetectionContent";
import { NumberContent } from "./sensorTypes/Number/NumberContent";
import { LicensePlateContent } from "./sensorTypes/LicensePlate/LicensePlateContent";
import { ObjectCountingContent } from "./sensorTypes/ObjectCounting/ObjectCountingContent";
import { QueueSizeContent } from "./sensorTypes/QueueSize/QueueSizeContent";
import { NoPlateDetectionContent } from "./sensorTypes/NoPlateDetection/NoPlateDetectionContent";
import { ObjectRecognitionContent } from "./sensorTypes/ObjectRecognition/ObjectRecognitionContent";
import { StoppedObjectsDetectorContent } from "./sensorTypes/StoppedObjectsDetector/StoppedObjectsDetectorContent";
import { NaiveSocialDistancingContent } from "./sensorTypes/NaiveSocialDistancing/NaiveSocialDistancingContent";
import { SpeedChangeContent } from "./sensorTypes/SpeedChange/SpeedChangeContent";
import { OpticalCharacterRecognitionContent } from "./sensorTypes/OpticalCharacterRecognition/OpticalCharacterRecognitionContent";
import { PoseDetectionContent } from "./sensorTypes/PoseDetection/PoseDetectionContent";
import { ReferrerContent } from "./sensorTypes/Referrer/ReferrerContent";
import { SceneChangeContent } from "./sensorTypes/SceneChange/SceneChangeContent";
import { ShoppingHoursContent } from "./sensorTypes/ShoppingHours/ShoppingHoursContent";
import { StoppedLicensePlateContent } from "./sensorTypes/StoppedLicensePlate/StoppedLicensePlateContent";
import { StringContent } from "./sensorTypes/String/StringContent";
import { LicensePlateTextContent } from "./sensorTypes/LicensePlateText/LicensePlateTextContent";
import { VideoContent } from "./sensorTypes/Video/VideoContent";

export type Data = {
  id?: string;
  type: SensorTypeLabel;
  from: Date;
  to: Date;
  content:
    | BeaconTrackingContent
    | BooleanContent
    | CheckoutContent
    | ColorPresenceContent
    | OpeningDetectionContent
    | CrossedBarriersDetectionContent
    | CrossLineMultiRecognitionContent
    | CrossLineRecognitionContent
    | DebugContent
    | FaceDetectionContent
    | FaceMaskDetectionContent
    | FuelingDetectionContent
    | GPSContent
    | MotionDetectionContent
    | NumberContent
    | LicensePlateContent
    | ObjectCountingContent
    | QueueSizeContent
    | NoPlateDetectionContent
    | ObjectRecognitionContent
    | StoppedObjectsDetectorContent
    | NaiveSocialDistancingContent
    | SpeedChangeContent
    | OpticalCharacterRecognitionContent
    | PoseDetectionContent
    | ReferrerContent
    | SceneChangeContent
    | ShoppingHoursContent
    | StoppedLicensePlateContent
    | StringContent
    | LicensePlateTextContent
    | VideoContent;
  location?: Point;
  created?: Date;
  modified?: Date;
  deleted?: Date;
};

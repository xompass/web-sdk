import { Feature } from "./GeoJSON";
import { Log } from "./Log";
import {
  ObjectRecognitionCamSurveillanceCameraSettings,
  ObjectRecognitionCamSurveillanceNVRSettings,
  ObjectRecognitionCamVSAASFacesSettings,
} from "./wizardTypes/ObjectRecognitionCam";
import {
  ObjectRecognitionZoneSurveillanceNVRSettings,
  ObjectRecognitionZoneVSAASFacesSettings,
} from "./wizardTypes/ObjectRecognitionZone";
import { StoreStoreVideoAnalyticsSettings } from "./wizardTypes/Store";

export type AssetConfig = {
  id?: string;
  status?: any;
  settings?:
    | ObjectRecognitionCamSurveillanceCameraSettings
    | ObjectRecognitionCamSurveillanceNVRSettings
    | ObjectRecognitionCamVSAASFacesSettings
    | ObjectRecognitionZoneSurveillanceNVRSettings
    | ObjectRecognitionZoneVSAASFacesSettings
    | StoreStoreVideoAnalyticsSettings;
  address?: string;
  feature?: Feature;
  dataTTL?: number;
  layout?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  trackingLogs?: Log[];
};

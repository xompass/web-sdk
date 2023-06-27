export type ObjectRecognitionZoneSurveillanceNVRSettings = {
  nvr?: {
    host: string;
    port: number;
    user?: string;
    password?: string;
    defaultCameraPassword?: string;
  };
  attributes?: Record<string, undefined>;
};

export type ObjectRecognitionZoneVSAASFacesSettings = {
  rekognition?: {
    storeId?: string;
  };
  attributes?: Record<string, undefined>;
};

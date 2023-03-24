export type ObjectRecognitionZoneSurveillanceNVRSettings = {
  nvr?: {
    host: string;
    port: number;
    user?: string;
    password?: string;
    defaultCameraPassword?: string;
  };
};

export type ObjectRecognitionZoneVSAASFacesSettings = {
  rekognition?: {
    storeId?: string;
  };
};

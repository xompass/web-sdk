export type ObjectRecognitionCamSurveillanceCameraSettings = {
  camera?: {
    ip: string;
    port?: number;
    stream?: number;
    auth?: {
      user?: string;
      password?: string;
    };
  };
  attributes?: Record<string, any>;
};

export type ObjectRecognitionCamSurveillanceNVRSettings = {
  broker?: {
    host?: string;
    port?: number;
    namespace?: string;
  };
  nvr?: {
    channel: number;
  };
  attributes?: Record<string, any>;
};

export type ObjectRecognitionCamVSAASFacesSettings = {
  broker?: {
    host?: string;
    port?: number;
    namespace?: string;
  };
  camera: {
    url?: string;
    auth?: {
      type?: "basic" | "digest";
      user: string;
      password: string;
    };
  };
  rekognition?: {
    cameraId?: string;
  };
  attributes?: Record<string, any>;
};

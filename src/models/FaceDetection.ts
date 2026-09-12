import { DetectionFrame } from "./DetectionFrame";

export type FaceDetection = {
  _id?: string;
  projectId?: string;
  customerId?: string;
  assetId: string;
  sensorId: string;
  datasetId: string;
  dataId: string;
  dataIndex: number;
  from: number;
  to: number;
  subjectId?: string;
  subject?: string;
  probability: number;
  frame?: DetectionFrame;
  fileName?: string;
  datasourceName?: string;
  createdAt?: Date;
  expiresAt?: Date;
};

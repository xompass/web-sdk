import { FaceDatabase } from './FaceDatabase';
import { Log } from './Log';

export type FaceSubject = {
  name: string;
  version?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  faceDatabaseId?: string;
  faceDatabase?: FaceDatabase;
  images?: FaceImage[];
  trackingLogs?: Log[];
};

export type FaceImage = {
  fileName: string;
  hash: string;
  width: number;
  height: number;
  size: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  faceSubjectId?: string;
  faceDatabaseId?: string;
};

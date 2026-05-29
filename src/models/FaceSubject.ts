import { Log } from './Log';
import { Project } from './Project';

export type FaceSubject = {
  name: string;
  normalizedName?: string;
  description?: string;
  gender?: string;
  nationality?: string;
  externalId?: string;
  engineType?: string;
  faceDatabaseId?: string;
  version?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  faceDatabaseLinks?: FaceDatabaseFaceSubject[];
  images?: FaceImage[];
  trackingLogs?: Log[];
  project?: Project;
};

export type FaceDatabaseFaceSubject = {
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  faceDatabaseId?: string;
  faceSubjectId?: string;
};

export type FaceImage = {
  fileName: string;
  hash: string;
  width: number;
  height: number;
  size: number;
  externalId?: string;
  faceDatabaseId?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  faceSubjectId?: string;
};

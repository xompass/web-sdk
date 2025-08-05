export type FaceRecognitionTrigger = {
  faceDatabaseId?: string;
  mode: 'MATCH' | 'NO_MATCH';
}[][];

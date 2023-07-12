import { Asset } from './Asset';
import { FileMetadata } from './FileMetadata';
import { Log } from './Log';
import { Storyline } from './Storyline';

export type Storypoint = {
  name: string;
  storypointDate: Date;
  description?: string;
  relatedFiles?: FileMetadata[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  storylineId?: string;
  assetId?: string;
  trackingLogs?: Log[];
  storyline?: Storyline;
  asset?: Asset;
};

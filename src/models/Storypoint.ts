import { Asset } from './Asset';
import { File } from './File';
import { Log } from './Log';
import { Storyline } from './Storyline';

export type Storypoint = {
  name: string;
  storypointDate: Date;
  description?: string;
  relatedFiles?: File[];
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

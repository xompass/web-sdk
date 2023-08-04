import { Asset } from './Asset';
import { Customer } from './Customer';
import { Log } from './Log';
import { Project } from './Project';
import { StorylineCategory } from './StorylineCategory';
import { Storypoint } from './Storypoint';
import { FileMetadata } from './FileMetadata';

export type Storyline = {
  name: string;
  status?: string;
  description?: string;
  placeOfReference?: string;
  storypointsOrder?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  customerId?: string;
  userId?: string;
  principalType?: string;
  assetIds?: string[];
  storylineCategoryId?: string;
  trackingLogs?: Log[];
  project?: Project;
  customer?: Customer;
  author?: any;
  assets?: Asset[];
  storylineCategory?: StorylineCategory;
  container?: StorylineStorageContainer;
  storypoints?: Storypoint[];
};

export type StorylineStorageContainer = {
  id?: string;
  resources?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  storylineId?: string;
  _files?: FileMetadata[];
};

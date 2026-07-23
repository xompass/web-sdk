import { Asset } from "./Asset";
import { Customer } from "./Customer";
import { FileMetadata } from "./FileMetadata";
import { Log } from "./Log";
import { Project } from "./Project";
import { StorylineCategory } from "./StorylineCategory";
import { Storypoint } from "./Storypoint";

export type Storyline = {
  name: string;
  status?: "IN_PROGRESS" | "CLOSED" | "FINISHED";
  storylineDate: Date;
  description?: string;
  placeOfReference?: string;
  storypointsOrder?: any[];
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
  assets?: Asset[];
  author?: any;
  container?: StorylineStorageContainer;
  customer?: Customer;
  project?: Project;
  storylineCategory?: StorylineCategory;
  storypoints?: Storypoint[];
  trackingLogs?: Log[];
};

export type StorylineStorageContainer = {
  id?: string;
  resources?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  storylineId?: string;
  _files?: FileMetadata[];
  files?: FileMetadata[];
  storyline?: Storyline;
  trackingLogs?: Log[];
};

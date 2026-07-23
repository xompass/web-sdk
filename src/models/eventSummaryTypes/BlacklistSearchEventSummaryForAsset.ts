export type BlacklistSearchEventSummaryForAsset = {
  length?: number;
  muted?: number;
  seen?: number;
  hidden?: number;
  starred?: number;
  comments?: number;
  currentStates?: Record<string, number>;
  stateChanges?: Record<string, number>;
  data?: {
    length?: number;
    filtered?: number;
    feedbacks?: number;
    fakes?: number;
    tags?: Record<string, number>;
  };
  users?: Record<
    string,
    Record<
      string,
      {
        comments?: number;
        currentStates?: Record<string, number>;
        stateChanges?: Record<string, number>;
      }
    >
  >;
  eventTriggers?: Record<
    string,
    {
      length?: number;
      filtered?: number;
      feedbacks?: number;
      fakes?: number;
      tags?: Record<string, number>;
    }
  >;
};

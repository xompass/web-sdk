export type BasedOnRulesEventSummary = {
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
  sensors?: Record<
    string,
    {
      type?: string;
      length?: number;
      filtered?: number;
      feedbacks?: number;
      fakes?: number;
      tags?: Record<string, number>;
      summary?: Record<string, any>;
    }
  >;
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
};

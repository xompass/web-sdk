export type PoseDetectionEventContent = {
  image?: {
    container?: string;
    name?: string;
    type?: 'image/jpg' | 'image/jpeg' | 'image/png';
    field?: string;
    originalFilename?: string;
    meta?: Record<string, any>;
    datasourceName?: string;
  };
  files?: {
    image?: {
      container?: string;
      name?: string;
      type?: 'image/jpg' | 'image/jpeg' | 'image/png';
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
  };
  poses?: {
    label:
      | 'NONE'
      | 'HANDS_UP'
      | 'ON_FLOOR'
      | 'RUNNING'
      | 'SEATED'
      | 'STANDING'
      | 'THROWING_THINGS'
      | 'FIGHT'
      | 'SQUAT_HEUR1'
      | 'SQUAT_HEUR2';
    probability: number;
    keypoints?: {
      Nose?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      L_Eye?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      R_Eye?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      L_Ear?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      R_Ear?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      L_Shoulder?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      R_Shoulder?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      L_Elbow?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      R_Elbow?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      L_Wrist?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      R_Wrist?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      L_Hip?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      R_Hip?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      L_Knee?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      R_Knee?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      L_Ankle?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      R_Ankle?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
      Neck?: {
        probability: number;
        point?: {
          x: number;
          y: number;
        };
      };
    };
    frame?: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    filteredBy?: {
      LABEL?: boolean;
      PROBABILITY?: boolean;
      ZONE?: boolean;
    };
  }[];
  filtered?: boolean;
};

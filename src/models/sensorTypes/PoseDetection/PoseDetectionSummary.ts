export type PoseDetectionSummary = {
  meta?: {
    data?: {
      length?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      size?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
    };
  };
  location?: {
    stats?: {
      count?: number;
      sum?: number;
      avg?: number;
      min?: number;
      max?: number;
    };
  };
  content?: {
    files?: {
      image?: {
        length?: {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        };
      };
    };
    detections?: {
      length?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      probability?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      keypoints?: {
        probability?: {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        };
        keypoint?: {
          Nose?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          L_Eye?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          R_Eye?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          L_Ear?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          R_Ear?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          L_Shoulder?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          R_Shoulder?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          L_Elbow?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          R_Elbow?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          L_Wrist?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          R_Wrist?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          L_Hip?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          R_Hip?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          L_Knee?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          R_Knee?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          L_Ankle?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          R_Ankle?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          Neck?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
        };
      };
      label?: {
        NONE?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        HANDS_UP?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        ON_FLOOR?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        RUNNING?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        SEATED?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        STANDING?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        THROWING_THINGS?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        FIGHT?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        SQUAT_HEUR1?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
        SQUAT_HEUR2?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          keypoints?: {
            probability?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            keypoint?: {
              Nose?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Eye?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ear?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Shoulder?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Elbow?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Wrist?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Hip?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Knee?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              L_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              R_Ankle?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              Neck?: {
                probability?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
        };
      };
    };
  };
};

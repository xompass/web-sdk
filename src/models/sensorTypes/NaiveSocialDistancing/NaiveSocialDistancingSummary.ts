import { YoloClassLabel } from '../YoloClassLabel';

export type NaiveSocialDistancingSummary = {
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
    length?: {
      count?: number;
      sum?: number;
      avg?: number;
      min?: number;
      max?: number;
    };
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
      colors?: {
        length?: {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        };
        label?: {
          white?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          gray?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          black?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          red?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          yellow?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          brown?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          green?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          cyan?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          blue?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
          purple?: {
            percentage?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
        };
      };
      class?: Record<
        YoloClassLabel,
        {
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
          colors?: {
            length?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            label?: {
              white?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              gray?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              black?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              red?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              yellow?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              brown?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              green?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              cyan?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              blue?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
              purple?: {
                percentage?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              };
            };
          };
          heatmap?: Record<
            string,
            Record<
              string,
              {
                count?: number;
                sum?: number;
                avg?: number;
                min?: number;
                max?: number;
              }
            >
          >;
        }
      >;
      heatmap?: Record<
        string,
        Record<
          string,
          {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          }
        >
      >;
    };
    pairs?: {
      length?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
    };
    individuals?: {
      length?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
    };
  };
};

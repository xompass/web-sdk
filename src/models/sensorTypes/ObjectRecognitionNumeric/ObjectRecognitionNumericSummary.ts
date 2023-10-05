import { YoloClassLabel } from '../YoloClassLabel';

export type ObjectRecognitionNumericSummary = {
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
      text?: {
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
          text?: {
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
          value?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
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
      value?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
    };
  };
};

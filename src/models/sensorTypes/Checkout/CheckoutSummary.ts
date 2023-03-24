export type CheckoutSummary = {
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
    sellings?: {
      amount?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      price?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      sellingPrice?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      discount?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      totalPrice?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      totalSellingPrice?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      totalDiscount?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
    };
    cashiers?: {
      byId?: Record<
        string,
        {
          amount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          price?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          sellingPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          discount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalSellingPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalDiscount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
        }
      >;
    };
    invoices?: {
      byType?: Record<
        string,
        {
          amount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          price?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          sellingPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          discount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalSellingPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalDiscount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
        }
      >;
    };
    products?: {
      byId?: Record<
        string,
        {
          amount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          price?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          sellingPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          discount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalSellingPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalDiscount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
        }
      >;
    };
    productColorCodes?: {
      byCode?: Record<
        string,
        {
          amount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          price?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          sellingPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          discount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalSellingPrice?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          totalDiscount?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
        }
      >;
    };
    sellers?: {
      byId?: Record<
        string,
        {
          products?: {
            byId?: Record<
              string,
              {
                amount?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
                price?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
                sellingPrice?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
                discount?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
                totalPrice?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
                totalSellingPrice?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
                totalDiscount?: {
                  count?: number;
                  sum?: number;
                  avg?: number;
                  min?: number;
                  max?: number;
                };
              }
            >;
          };
          sellings?: {
            amount?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            price?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            sellingPrice?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            discount?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            totalPrice?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            totalSellingPrice?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
            totalDiscount?: {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            };
          };
        }
      >;
    };
  };
};

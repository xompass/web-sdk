export type ObjectRecognitionBasedOnRulesTRCParameters = {
  byClass?: {
    bicycle?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    bus?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    car?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    motorbike?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    person?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    license_plate?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    shoebox?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    socks?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    deliverybag?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    pistol?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    box?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    label?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    bag?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    backpack?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    cat?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    dog?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    train?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    guard?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    inspector?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    helmet?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    truck?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    machinery?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    red_light?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    green_light?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    yellow_light?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    cart?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    fire?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    smoke?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    material?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    hopper?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    truck_small?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    aljibe?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    mercaderia?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    rock?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    desmonte?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    pallet?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    'pallet-jack'?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    'pallet-stacker'?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    worker?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    forklift?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    cat1?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    cat2?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    cat3?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    cat4?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    cylinder?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    extinguisher?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    crane?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    montacilindro?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    no_helmet?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    gate?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    face?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    laptop?: {
      thresholds?: {
        minProbability?: number;
      };
    };
  };
};

export type ObjectRecognitionBlacklistSearchTRCParameters = {
  minNumOfChars?: number;
  matchMethod?: 'exact' | 'prefix' | 'contains' | 'fuzzy' | 'null';
  fuzzyMaxDistance?: number;
};

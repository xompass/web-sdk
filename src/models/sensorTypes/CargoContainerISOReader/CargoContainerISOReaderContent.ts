export type CargoContainerISOReaderContent = {
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
  info?: {
    ownerCode?: string;
    serialNumber?: string;
    checkDigit?: string;
    containerProperties?: string;
    mgw?: number;
    tare?: number;
    capacity?: number;
    height?: number;
  };
};

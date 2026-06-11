export type PanicButtonFeedback = {
  buttonCode?: string;
  text?: string;
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
    video?: {
      container?: string;
      name?: string;
      type?:
        | 'application/octet-stream'
        | 'video/x-flv'
        | 'video/mp4'
        | 'application/x-mpegURL'
        | 'video/MP2T'
        | 'video/3gpp'
        | 'video/quicktime'
        | 'video/x-msvideo'
        | 'video/x-ms-wmv';
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
  };
};

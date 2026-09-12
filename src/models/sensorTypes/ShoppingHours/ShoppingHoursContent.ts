export type ShoppingHoursContent = {
  state: "opened" | "closed";
  notifier?: string;
  notifierRole?: string;
  staff?: {
    name?: string;
    role?: string;
  }[];
  comment?: string;
  metadata?: Record<string, any>;
};

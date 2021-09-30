export type DayType =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday';

export interface ISched {
  day: DayType;
  subject: string;
  teacher: string;
  time: string;
  code: string;
  link: string;
}

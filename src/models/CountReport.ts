import { Customer } from './Customer';
import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type CountReport = {
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  projectId?: string;
  sectionsOrder?: string[];
  sections?: CountReportSection[];
  customer?: Customer;
  trackingLogs?: Log[];
  managers?: Manager[];
  project?: Project;
};

export type CountReportSection = {
  name: string;
  dateRange: 'day' | 'week' | 'month';
  elements?: CountReportElement[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id: string;
  countReportId: string;
};

export type CountReportElement =
  | CountReportElementIndicator
  | CountReportElementChart
  | CountReportElementTable
  | CountReportElementHeatmap;

export type CountReportElementBase = {
  name: string;
  columns: number;
};

type CountReportElementIndicatorChart<
  T extends 'hour' | 'day' | 'week' | 'month'
> = { addChart?: false } | { addChart: true; xAxis: XAxis<T> };

type CountReportElementIndicatorBase<
  T extends 'hour' | 'day' | 'week' | 'month'
> = CountReportElementBase & {
  type: 'indicator';
  addDifference?: boolean;
  groupInterval: T;
  seriesList: CountReportSeriesIndicator[];
} & CountReportElementIndicatorChart<T>;

export type CountReportElementIndicator =
  | CountReportElementIndicatorBase<'hour'>
  | CountReportElementIndicatorBase<'day'>
  | CountReportElementIndicatorBase<'week'>
  | CountReportElementIndicatorBase<'month'>;

type CountReportSeriesBase = {
  name: string;
  color?: string;
  suffix?: string;
  prefix?: string;
  precision?: number;
  virtualExpressionId: string;
};

export type CountReportSeriesIndicator = Omit<CountReportSeriesBase, 'name'> & {
  chartType?: 'line' | 'bar' | 'area' | 'scatter' | 'spline' | 'splineArea';
};

export type CountReportElementChartBase<
  T extends 'hour' | 'day' | 'week' | 'month'
> = CountReportElementBase & {
  type: 'chart';
  groupInterval: T;
  xAxis: XAxis<T>;
  yAxis?: {
    label?: string;
  };
  seriesList: CountReportSeriesChart[];
};

export type CountReportElementChart =
  | CountReportElementChartBase<'hour'>
  | CountReportElementChartBase<'day'>
  | CountReportElementChartBase<'week'>
  | CountReportElementChartBase<'month'>;

export type CountReportSeriesChart = CountReportSeriesBase & {
  chartType: 'line' | 'bar' | 'area' | 'scatter' | 'spline' | 'splineArea';
};

export type CountReportElementTableBase<
  T extends 'hour' | 'day' | 'week' | 'month'
> = CountReportElementBase & {
  type: 'table';
  groupInterval: T;
  xAxis: XAxis<T>;
  seriesList: CountReportSeriesTable[];
};

export type CountReportElementTable =
  | CountReportElementTableBase<'hour'>
  | CountReportElementTableBase<'day'>
  | CountReportElementTableBase<'week'>
  | CountReportElementTableBase<'month'>;

export type CountReportSeriesTable = CountReportSeriesBase;

export type CountReportElementHeatmapBase<
  T extends 'hour' | 'day' | 'week' | 'month'
> = CountReportElementBase & {
  type: 'heatmap';
  groupInterval: T;
  xAxis: XAxis<T>;
  seriesList: CountReportSeriesHeatmap[];
};

export type CountReportElementHeatmap =
  | CountReportElementHeatmapBase<'hour'>
  | CountReportElementHeatmapBase<'day'>
  | CountReportElementHeatmapBase<'week'>
  | CountReportElementHeatmapBase<'month'>;

export type CountReportSeriesHeatmap = CountReportSeriesBase;

type CategoryTypeHour = 'hourOfDay' | 'hourOfWeekDay' | 'hourOfWeekendDay';
type CategoryTypeDay =
  | 'hourOfDay'
  | 'hourOfWeekDay'
  | 'hourOfWeekendDay'
  | 'dayOfWeek'
  | 'dayOfMonth'
  | 'weekday'
  | 'weekend';

type CategoryTypeWeek = 'weekOfMonth';

export type XAxis<T extends 'hour' | 'day' | 'week' | 'month'> = {
  label?: string;
} & (CategoryType<T> | { type: 'datetime' });

type CategoryType<T extends 'hour' | 'day' | 'week' | 'month'> =
  T extends 'month'
    ? never
    : {
        type: 'category';
        groupMode?: 'sum' | 'average' | 'min' | 'max';
        categoryType: T extends 'hour'
          ? CategoryTypeHour
          : T extends 'day'
          ? CategoryTypeDay
          : T extends 'week'
          ? CategoryTypeWeek
          : never;
      };

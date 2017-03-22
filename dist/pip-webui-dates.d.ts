declare module pip.dates {



export class DateTimeConfig {
    timeZone: number;
}

export interface IDateTimeService {
    readonly config: DateTimeConfig;
    useTimeZone(offset: number): any;
    bbFormatDateLongTime(value: any, firstTime?: boolean): string;
    formatTime(value: any, format: string): string;
    formatDateOptional(value: any, format: string): string;
    formatShortDate(value: any): string;
    formatMiddleDate(value: any): string;
    formatLongDate(value: any): string;
    formatMonth(value: any): string;
    formatLongMonth(value: any): string;
    formatYear(value: any): string;
    formatWeek(value: any): string;
    formatShortWeek(value: any): string;
    formatShortDateTime(value: any): string;
    formatMiddleDateTime(value: any): string;
    formatLongDateTime(value: any): string;
    formatFullDateTime(value: any): string;
    formatShortDateLongTime(value: any, firstTime?: boolean): string;
    formatMiddleDateLongTime(value: any, firstTime?: boolean): string;
    formatLongDateLongTime(value: any, firstTime?: boolean): string;
    formatShortTime(value: any): string;
    formatLongTime(value: any): string;
    formatShortDayOfWeek(value: any): string;
    formatLongDayOfWeek(value: any): string;
    formatLongMonthDay(value: any): string;
    formatShortMonthDay(value: any): string;
    formatDateRange(value1: any, value2: any): string;
    formatDateTimeRange(value1: any, value2: any): string;
    formatISOWeek(value: any): string;
    formatShortISOWeek(value: any): string;
    formatISOWeekOrdinal(value: any): string;
    formatDateY(value: any): string;
    formatLongDateY(value: any): string;
    formatTodayDateLongTimeLong(value: any): string;
    formatTodayDateShortTimeLong(value: any): string;
    formatTodayDateLongTimeShort(value: any): string;
    formatTodayDateShortTimeShort(value: any): string;
    formatMillisecondsToSeconds(value: any): string;
    formatElapsedInterval(value: any, start: any): string;
    getDateJSON(date: any): string;
    getNextStart(value: any, category: string): Date;
    getPrevStart(value: any, category: string): Date;
    getNowStart(category: string): Date;
    addHours(value: any, hours: number): Date;
    toStartDay(value: any): Date;
    toEndDay(value: any, offset: number): Date;
    toStartWeek(value: any): Date;
    toEndWeek(value: any, offset: number): Date;
    toStartMonth(value: any): Date;
    toEndMonth(value: any, offset: number): Date;
    toStartYear(value: any): Date;
    toEndYear(value: any, offset: number): Date;
}
export interface IDateTimeProvider extends IDateTimeService, ng.IServiceProvider {
}


interface IDateBindings {
    [key: string]: any;
    timeMode: any;
    disabled: any;
    model: any;
    ngChange: any;
}
const DateBindings: IDateBindings;
class DateChanges implements ng.IOnChangesObject, IDateBindings {
    [key: string]: ng.IChangesObject<any>;
    timeMode: ng.IChangesObject<string>;
    disabled: ng.IChangesObject<() => boolean>;
    model: ng.IChangesObject<Date>;
    ngChange: ng.IChangesObject<(date: Date) => void>;
}
class DateController {
    private value;
    private localeDate;
    private momentMonths;
    private momentDays;
    private momentShortDays;
    private momentFirstDayOfWeek;
    timeMode: string;
    day: number;
    month: number;
    year: number;
    model: Date;
    ngChange: (date: Date) => void;
    days: number[];
    months: any[];
    years: number[];
    disabled: () => boolean;
    disableControls: boolean;
    constructor($injector: angular.auto.IInjectorService, $scope: ng.IScope);
    $onChanges(changes: DateChanges): void;
    private dayList(month, year);
    private monthList();
    private yearList();
    private adjustDay();
    private getValue(v);
    setValue(): void;
    onMonthChanged(): void;
    onYearChanged(): void;
}

interface IDateRangeBindings {
    [key: string]: any;
    timeMode: any;
    disabled: any;
    model: any;
    pipChanged: any;
    type: any;
    pipDateFormat: any;
    pipNoLine: any;
}
const DateRangeBindings: IDateRangeBindings;
class DateRangeChanges implements ng.IOnChangesObject, IDateRangeBindings {
    [key: string]: ng.IChangesObject<any>;
    timeMode: ng.IChangesObject<string>;
    disabled: ng.IChangesObject<() => void>;
    model: ng.IChangesObject<any>;
    pipChanged: ng.IChangesObject<() => void>;
    type: ng.IChangesObject<string>;
    pipDateFormat: ng.IChangesObject<any>;
    pipNoLine: ng.IChangesObject<any>;
}
class DateRange {
    $mdMedia: angular.material.IMedia;
    private $timeout;
    private currentDate;
    private currentYear;
    private currentMonth;
    private currentDay;
    private prevState;
    private currentState;
    private localeDate;
    private momentMonths;
    private momentDays;
    private momentShortDays;
    private momentFirstDayOfWeek;
    type: string;
    pipChanged: Function;
    year: number;
    month: number;
    week: any;
    day: number;
    shortMonths: string[];
    days: number[];
    weeks: any[];
    months: number[];
    years: number[];
    nameDays: string[];
    model: any;
    disabled: Function;
    disableControls: boolean;
    timeMode: string;
    constructor($mdMedia: angular.material.IMedia, $timeout: ng.ITimeoutService, $scope: ng.IScope, $element: any, $rootScope: ng.IRootScopeService, $injector: angular.auto.IInjectorService);
    $onChanges(changes: DateRangeChanges): void;
    onMonthChanged(): void;
    onYearChanged(): void;
    onWeekChange(): void;
    isDay(): boolean;
    isWeek(): boolean;
    isMonth(): boolean;
    onChange(): void;
    private setCurrent();
    private fillLists();
    private correctWeek();
    private init();
    onYearClick(): void;
    onMonthClick(): void;
    onDayClick(): void;
    getCountDay(month: number, year: number): number;
    private dayList(month, year);
    getWeekByDate(day: any, month: any, year: any): any;
    getWeek(day: number, countDay: number, countPrevMonthDay: any): string;
    weekList(month: number, year: number): any[];
    private monthList();
    private yearList();
    private adjustDay();
    private adjustWeek();
    private getValue(v);
    setValue(): void;
}


class TimeRangeData {
    start: Date;
    end: Date;
}
interface ITimeRangeBindings {
    [key: string]: any;
    start: any;
    end: any;
}
const TimeRangeBindings: ITimeRangeBindings;
class TimeRangeChanges implements ng.IOnChangesObject, ITimeRangeBindings {
    [key: string]: ng.IChangesObject<any>;
    start: ng.IChangesObject<Date>;
    end: ng.IChangesObject<Date>;
}
class TimeRangeController {
    data: TimeRangeData;
    start: Date;
    end: Date;
    constructor($scope: ng.IScope, $attrs: ng.IAttributes, $element: JQuery);
    $onChanges(changes: TimeRangeChanges): void;
    private getDateJSON(value);
    private defineStartDate();
    private defineEndDate();
    private toBoolean(value);
}


}

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
    getNextStart(value: any, category: string): any;
    getPrevStart(value: any, category: string): any;
    getNowStart(category: string): any;
    addHours(value: any, hours: number): any;
    toStartDay(value: any): any;
    toEndDay(value: any, offset: number): any;
    toStartWeek(value: any): any;
    toEndWeek(value: any, offset: number): any;
    toStartMonth(value: any): any;
    toEndMonth(value: any, offset: number): any;
    toStartYear(value: any): any;
    toEndYear(value: any, offset: number): any;
}
export interface IDateTimeProvider extends IDateTimeService, ng.IServiceProvider {
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
    pipDateRangeType: any;
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
    $onChanges(changes: any): void;
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



}

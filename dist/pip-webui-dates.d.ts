declare module pip.dates {





export class DateTimeConfig {
    timeZone: number;
}
export interface IDateConvertService {
    readonly config: DateTimeConfig;
    useTimeZone(offset: number): any;
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
export interface IDateConvertProvider extends IDateConvertService, ng.IServiceProvider {
}

export class DateTimeConfig {
    timeZone: number;
}
export interface IDateFormatService {
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
}
export interface IDateFormatProvider extends IDateFormatService, ng.IServiceProvider {
}





export const IntervalTimeRange = 30;
export const MinutesInHour = 60;
export const HoursInDay = 24;
export const MillisecondsInSecond = 1000;

}

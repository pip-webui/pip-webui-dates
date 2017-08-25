export interface IDateFormatService {
    defaultTimeZoneOffset: number;

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
    formatRange(value1: any, value2: any, basicFormat: string): string;
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
    formatShortElapsed(value: any, hours?: number, start?: any): string;
    formatMiddleElapsed(value: any, hours?: number, start?: any): string;
    formatLongElapsed(value: any, hours?: number, start?: any): string;
    formatTimeShort(value: number): string;
    formatTimeLong(value: number): string;
}

export interface IDateFormatProvider extends IDateFormatService, ng.IServiceProvider {
}
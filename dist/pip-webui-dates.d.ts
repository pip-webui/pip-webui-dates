declare module pip {


function formatTimeFilter(pipDateTime: any): (value: any, format: string) => string;
function formatDateOptionalFilter(pipDateTime: any): (value: any, format: string) => string;
function formatLongDateFilter(pipDateTime: any): (value: any) => string;
function formatShortDateFilter(pipDateTime: any): (value: any) => string;
function formatMonthFilter(pipDateTime: any): (value: any) => any;
function formatLongMonthFilter(pipDateTime: any): (value: any) => string;
function formatYearFilter(pipDateTime: any): (value: any) => string;
function formatWeekFilter(pipDateTime: any): (value: any) => string;
function formatShortWeekFilter(pipDateTime: any): (value: any) => string;
function formatShortDateTimeFilter(pipDateTime: any): (value: any) => string;
function formatLongDateTimeFilter(pipDateTime: any): (value: any) => string;
function formatShortTimeFilter(pipDateTime: any): (value: any) => string;
function formatLongTimeFilter(pipDateTime: any): (value: any) => string;
function formatShortDayOfWeekFilter(pipDateTime: any): (value: any) => string;
function formatLongDayOfWeekFilter(pipDateTime: any): (value: any) => string;
function formatDateNumberFilter(pipDateTime: any): (value: any) => string;
function formatLongDateNumberFilter(pipDateTime: any): (value: any) => string;
function formatTimeNumberFilter(pipDateTime: any): (value: any) => string;
function formatLongTimeNumberFilter(pipDateTime: any): (value: any) => string;
function formatLongMonthDayFilter(pipDateTime: any): (value: any) => string;
function formatShortMonthDayFilter(pipDateTime: any): (value: any) => string;
function formatDateRangeFilter(pipDateTime: any): (value1: any, value2: any) => string;
function formatDateTimeRangeFilter(pipDateTime: any): (value1: any, value2: any) => string;
function formatISOWeekFilter(pipDateTime: any): (value: any) => string;
function formatShortISOWeekFilter(pipDateTime: any): (value: any) => string;
function formatISOWeekOrdinalFilter(pipDateTime: any): (value: any) => string;
function formatDateYFilter(pipDateTime: any): (value: any) => string;
function formatLongDateYFilter(pipDateTime: any): (value: any) => string;
function formatMillisecondsToSecondsFilter(pipDateTime: any): (value: any) => string;
function formatElapsedIntervalFilter(pipDateTime: any): (value: any, start: any) => string;
function getDateJSONFilter(pipDateTime: any): (value: any) => string;

export interface IDateTimeService {
    formatTime(value: any, format: string): string;
    formatDateOptional(value: any, format: string): string;
    formatShortDate(value: any): string;
    formatLongDate(value: any): string;
    formatMonth(value: any): string;
    formatLongMonth(value: any): string;
    formatYear(value: any): string;
    formatWeek(value: any): string;
    formatShortWeek(value: any): string;
    formatShortDateTime(value: any): string;
    formatLongDateTime(value: any): string;
    formatShortTime(value: any): string;
    formatLongTime(value: any): string;
    formatShortDayOfWeek(value: any): string;
    formatLongDayOfWeek(value: any): string;
    formatDateNumber(value: any): string;
    formatLongDateNumber(value: any): string;
    formatTimeNumber(value: any): string;
    formatLongTimeNumber(value: any): string;
    formatLongMonthDay(value: any): string;
    formatShortMonthDay(value: any): string;
    formatDateRange(value1: any, value2: any): string;
    formatDateTimeRange(value1: any, value2: any): string;
    formatISOWeek(value: any): string;
    formatShortISOWeek(value: any): string;
    formatISOWeekOrdinal(value: any): string;
    formatDateY(value: any): string;
    formatLongDateY(value: any): string;
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









}

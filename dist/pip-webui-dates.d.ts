/// <reference path="../typings/tsd.d.ts" />

/// <reference path="../../typings/tsd.d.ts" />
declare module pip.datetime {
}

/// <reference path="../../typings/tsd.d.ts" />
declare module pip.datetime {
}

/// <reference path="../../typings/tsd.d.ts" />
declare module pip.datetime {
    interface IDateTimeService {
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
    interface IDateTimeProvider extends IDateTimeService, ng.IServiceProvider {
    }
}


/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../../typings/tsd.d.ts" />

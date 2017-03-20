import { IDateTimeService } from './IDateService';

function formatTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any, format: string): string => {
        return pipDateTime.formatTime(value, format);
    }
}

function formatDateOptionalFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any, format: string): string => {
        return pipDateTime.formatDateOptional(value, format);
    }
}

function formatLongDateFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatLongDate(value);
    }
}

function formatShortDateFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatShortDate(value);
    }
}

function formatMiddleDateFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatMiddleDate(value);
    }
}

function formatMonthFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any) => {
        return pipDateTime.formatMonth(value);
    }
}

function formatLongMonthFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatLongMonth(value);
    }
}

function formatYearFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatYear(value);
    }
}

function formatWeekFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatWeek(value);
    }
}

function formatShortWeekFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatShortWeek(value);
    }
}

function formatShortDateTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatShortDateTime(value);
    }
}

function formatMiddleDateTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatMiddleDateTime(value);
    }
}

function formatLongDateTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatLongDateTime(value);
    }
}

function formatShortDateLongTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateTime.formatShortDateLongTime(value, firstTime);
    }
}

function formatMiddleDateLongTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateTime.formatMiddleDateLongTime(value, firstTime);
    }
}

function formatLongDateLongTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateTime.formatLongDateLongTime(value, firstTime);
    }
}

function bbFormatDateLongTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateTime.bbFormatDateLongTime(value, firstTime);
    }
}

function formatFullDateTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatFullDateTime(value);
    }
}

function formatShortTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatShortTime(value);
    }
}

function formatLongTimeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatLongTime(value);
    }
}

function formatShortDayOfWeekFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatShortDayOfWeek(value);
    }
}

function formatLongDayOfWeekFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatLongDayOfWeek(value);
    }
}

function formatLongMonthDayFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatLongMonthDay(value);
    }
}

function formatShortMonthDayFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatShortMonthDay(value);
    }
}

function formatDateRangeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value1: any, value2: any): string => {
        return pipDateTime.formatDateRange(value1, value2);
    }
}

function formatDateTimeRangeFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value1: any, value2: any): string => {
        return pipDateTime.formatDateTimeRange(value1, value2);
    }
}

function formatISOWeekFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatISOWeek(value);
    }
}

function formatShortISOWeekFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatShortISOWeek(value);
    }
}

function formatISOWeekOrdinalFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatISOWeekOrdinal(value);
    }
}

function formatDateYFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatDateY(value);
    }
}

function formatLongDateYFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatLongDateY(value);
    }
}

function formatTodayDateLongTimeLongFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatTodayDateLongTimeLong(value);
    }
}

function formatTodayDateShortTimeLongFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatTodayDateShortTimeLong(value);
    }
}

function formatTodayDateLongTimeShortFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatTodayDateLongTimeShort(value);
    }
}

function formatTodayDateShortTimeShortFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatTodayDateShortTimeShort(value);
    }
}

function formatMillisecondsToSecondsFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.formatMillisecondsToSeconds(value);
    }
}

function formatElapsedIntervalFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any, start: any): string => {
        return pipDateTime.formatElapsedInterval(value, start);
    }
}

function getDateJSONFilter(pipDateTime: IDateTimeService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTime.getDateJSON(value);
    }
}

angular
    .module('pipDateTime.Filter', [])
    .filter('formatTime', formatTimeFilter)
    .filter('formatDateOptional', formatDateOptionalFilter)
    .filter('bbFormatDateLongTime', bbFormatDateLongTimeFilter)
    .filter('formatShortDate', formatShortDateFilter)
    .filter('formatMiddleDate', formatMiddleDateFilter)
    .filter('formatLongDate', formatLongDateFilter)
    .filter('formatMonth', formatMonthFilter)
    .filter('formatLongMonth', formatLongMonthFilter)
    .filter('formatYear', formatYearFilter)
    .filter('formatWeek', formatWeekFilter)
    .filter('formatShortWeek', formatShortWeekFilter)
    .filter('formatShortDateTime', formatShortDateTimeFilter)
    .filter('formatMiddleDateTime', formatMiddleDateTimeFilter)
    .filter('formatLongDateTime', formatLongDateTimeFilter)
    .filter('formatShortDateLongTime', formatShortDateLongTimeFilter)
    .filter('formatMiddleDateLongTime', formatMiddleDateLongTimeFilter)
    .filter('formatLongDateLongTime', formatLongDateLongTimeFilter)
    .filter('formatFullDateTime', formatFullDateTimeFilter)
    .filter('formatShortTime', formatShortTimeFilter)
    .filter('formatLongTime', formatLongTimeFilter)
    .filter('formatShortDayOfWeek', formatShortDayOfWeekFilter)
    .filter('formatLongDayOfWeek', formatLongDayOfWeekFilter)
    .filter('formatLongMonthDay', formatLongMonthDayFilter)
    .filter('formatShortMonthDay', formatShortMonthDayFilter)
    .filter('formatDateRange', formatDateRangeFilter)
    .filter('formatDateTimeRange', formatDateTimeRangeFilter)
    .filter('formatISOWeek', formatISOWeekFilter)
    .filter('formatShortISOWeek', formatShortISOWeekFilter)
    .filter('formatISOWeekOrdinal', formatISOWeekOrdinalFilter)
    .filter('formatDateY', formatDateYFilter)
    .filter('formatLongDateY', formatLongDateYFilter)
    .filter('formatTodayDateLongTimeLong', formatTodayDateLongTimeLongFilter)
    .filter('formatTodayDateShortTimeLong', formatTodayDateShortTimeLongFilter)
    .filter('formatTodayDateLongTimeShort', formatTodayDateLongTimeShortFilter)
    .filter('formatTodayDateShortTimeShort', formatTodayDateShortTimeShortFilter)
    .filter('formatMillisecondsToSeconds', formatMillisecondsToSecondsFilter)
    .filter('formatElapsedInterval', formatElapsedIntervalFilter);

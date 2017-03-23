import { IDateTimeFormatService } from './IDateFormatService';
import { IDateTimeConvertService } from './IDateConvertService';

function formatTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any, format: string): string => {
        return pipDateTimeFormat.formatTime(value, format);
    }
}

function formatDateOptionalFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any, format: string): string => {
        return pipDateTimeFormat.formatDateOptional(value, format);
    }
}

function formatLongDateFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatLongDate(value);
    }
}

function formatShortDateFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatShortDate(value);
    }
}

function formatMiddleDateFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatMiddleDate(value);
    }
}

function formatMonthFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any) => {
        return pipDateTimeFormat.formatMonth(value);
    }
}

function formatLongMonthFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatLongMonth(value);
    }
}

function formatYearFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatYear(value);
    }
}

function formatWeekFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatWeek(value);
    }
}

function formatShortWeekFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatShortWeek(value);
    }
}

function formatShortDateTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatShortDateTime(value);
    }
}

function formatMiddleDateTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatMiddleDateTime(value);
    }
}

function formatLongDateTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatLongDateTime(value);
    }
}

function formatShortDateLongTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateTimeFormat.formatShortDateLongTime(value, firstTime);
    }
}

function formatMiddleDateLongTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateTimeFormat.formatMiddleDateLongTime(value, firstTime);
    }
}

function formatLongDateLongTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateTimeFormat.formatLongDateLongTime(value, firstTime);
    }
}

function bbFormatDateLongTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateTimeFormat.bbFormatDateLongTime(value, firstTime);
    }
}

function formatFullDateTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatFullDateTime(value);
    }
}

function formatShortTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatShortTime(value);
    }
}

function formatLongTimeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatLongTime(value);
    }
}

function formatShortDayOfWeekFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatShortDayOfWeek(value);
    }
}

function formatLongDayOfWeekFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatLongDayOfWeek(value);
    }
}

function formatLongMonthDayFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatLongMonthDay(value);
    }
}

function formatShortMonthDayFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatShortMonthDay(value);
    }
}

function formatDateRangeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value1: any, value2: any): string => {
        return pipDateTimeFormat.formatDateRange(value1, value2);
    }
}

function formatDateTimeRangeFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value1: any, value2: any): string => {
        return pipDateTimeFormat.formatDateTimeRange(value1, value2);
    }
}

function formatISOWeekFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatISOWeek(value);
    }
}

function formatShortISOWeekFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatShortISOWeek(value);
    }
}

function formatISOWeekOrdinalFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatISOWeekOrdinal(value);
    }
}

function formatDateYFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatDateY(value);
    }
}

function formatLongDateYFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatLongDateY(value);
    }
}

function formatTodayDateLongTimeLongFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatTodayDateLongTimeLong(value);
    }
}

function formatTodayDateShortTimeLongFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatTodayDateShortTimeLong(value);
    }
}

function formatTodayDateLongTimeShortFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatTodayDateLongTimeShort(value);
    }
}

function formatTodayDateShortTimeShortFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatTodayDateShortTimeShort(value);
    }
}

function formatMillisecondsToSecondsFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeFormat.formatMillisecondsToSeconds(value);
    }
}

function formatElapsedIntervalFilter(pipDateTimeFormat: IDateTimeFormatService) {
    "ngInject";

    return (value: any, start: any): string => {
        return pipDateTimeFormat.formatElapsedInterval(value, start);
    }
}

function getDateJSONFilter(pipDateTimeConvert: IDateTimeConvertService) {
    "ngInject";

    return (value: any): string => {
        return pipDateTimeConvert.getDateJSON(value);
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

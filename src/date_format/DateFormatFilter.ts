import { IDateFormatService } from './IDateFormatService';
import { IDateConvertService } from './IDateConvertService';

function formatTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, format: string): string => {
        return pipDateFormat.formatTime(value, format);
    }
}

function formatDateOptionalFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, format: string): string => {
        return pipDateFormat.formatDateOptional(value, format);
    }
}

function formatLongDateFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatLongDate(value);
    }
}

function formatShortDateFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatShortDate(value);
    }
}

function formatMiddleDateFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatMiddleDate(value);
    }
}

function formatMonthFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any) => {
        return pipDateFormat.formatMonth(value);
    }
}

function formatLongMonthFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatLongMonth(value);
    }
}

function formatYearFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatYear(value);
    }
}

function formatWeekFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatWeek(value);
    }
}

function formatShortWeekFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatShortWeek(value);
    }
}

function formatShortDateTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatShortDateTime(value);
    }
}

function formatMiddleDateTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatMiddleDateTime(value);
    }
}

function formatLongDateTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatLongDateTime(value);
    }
}

function formatShortDateLongTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateFormat.formatShortDateLongTime(value, firstTime);
    }
}

function formatMiddleDateLongTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateFormat.formatMiddleDateLongTime(value, firstTime);
    }
}

function formatLongDateLongTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateFormat.formatLongDateLongTime(value, firstTime);
    }
}

function bbFormatDateLongTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, firstTime: boolean): string => {
        return pipDateFormat.bbFormatDateLongTime(value, firstTime);
    }
}

function formatFullDateTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatFullDateTime(value);
    }
}

function formatShortTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatShortTime(value);
    }
}

function formatLongTimeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatLongTime(value);
    }
}

function formatShortDayOfWeekFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatShortDayOfWeek(value);
    }
}

function formatLongDayOfWeekFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatLongDayOfWeek(value);
    }
}

function formatLongMonthDayFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatLongMonthDay(value);
    }
}

function formatShortMonthDayFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatShortMonthDay(value);
    }
}

function formatDateRangeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value1: any, value2: any): string => {
        return pipDateFormat.formatDateRange(value1, value2);
    }
}

function formatDateTimeRangeFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value1: any, value2: any): string => {
        return pipDateFormat.formatDateTimeRange(value1, value2);
    }
}

function formatISOWeekFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatISOWeek(value);
    }
}

function formatShortISOWeekFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatShortISOWeek(value);
    }
}

function formatISOWeekOrdinalFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatISOWeekOrdinal(value);
    }
}

function formatDateYFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatDateY(value);
    }
}

function formatLongDateYFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatLongDateY(value);
    }
}

function formatTodayDateLongTimeLongFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatTodayDateLongTimeLong(value);
    }
}

function formatTodayDateShortTimeLongFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatTodayDateShortTimeLong(value);
    }
}

function formatTodayDateLongTimeShortFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatTodayDateLongTimeShort(value);
    }
}

function formatTodayDateShortTimeShortFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatTodayDateShortTimeShort(value);
    }
}

function formatMillisecondsToSecondsFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any): string => {
        return pipDateFormat.formatMillisecondsToSeconds(value);
    }
}

function formatElapsedIntervalFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, start: any): string => {
        return pipDateFormat.formatElapsedInterval(value, start);
    }
}

function formatShortElapsedFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, hours?: number): string => {
        return pipDateFormat.formatShortElapsed(value, hours);
    }
}

function formatLongElapsedFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, hours?: number): string => {
        return pipDateFormat.formatLongElapsed(value, hours);
    }
}

function formatMiddleElapsedFilter(pipDateFormat: IDateFormatService) {
    "ngInject";

    return (value: any, hours?: number): string => {
        return pipDateFormat.formatMiddleElapsed(value, hours);
    }
}

function getDateJSONFilter(pipDateConvert: IDateConvertService) {
    "ngInject";

    return (value: any): string => {
        return pipDateConvert.toJson(value);
    }
}

angular
    .module('pipDate.Filter', [])
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
    .filter('formatElapsedInterval', formatElapsedIntervalFilter)
    .filter('formatShortElapsed', formatShortElapsedFilter)
    .filter('formatMiddleElapsed', formatMiddleElapsedFilter)
    .filter('formatLongElapsed', formatLongElapsedFilter);

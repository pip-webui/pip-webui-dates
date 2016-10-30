'use strict';

function formatTimeFilter(pipDateTime: any) {
    "ngInject";

    return function (value: any, format: string): string {
        return pipDateTime.formatTime(value, format);
    }
}

function formatDateOptionalFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any, format: string): string {
        return pipDateTime.formatDateOptional(value, format);
    }
}

function formatLongDateFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongDate(value);
    }
}

function formatShortDateFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatShortDate(value);
    }
}

function formatMonthFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any) {
        return pipDateTime.formatMonth(value);
    }
}

function formatLongMonthFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongMonth(value);
    }
}

function formatYearFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatYear(value);
    }
}

function formatWeekFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatWeek(value);
    }
}

function formatShortWeekFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatShortWeek(value);
    }
}

function formatShortDateTimeFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatShortDateTime(value);
    }
}

function formatLongDateTimeFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongDateTime(value);
    }
}

function formatShortTimeFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatShortTime(value);
    }
}

function formatLongTimeFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongTime(value);
    }
}

function formatShortDayOfWeekFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatShortDayOfWeek(value);
    }
}

function formatLongDayOfWeekFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongDayOfWeek(value);
    }
}

function formatDateNumberFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatDateNumber(value);
    }
}

function formatLongDateNumberFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongDateNumber(value);
    }
}

function formatTimeNumberFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatTimeNumber(value);
    }
}

function formatLongTimeNumberFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongTimeNumber(value);
    }
}

function formatLongMonthDayFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongMonthDay(value);
    }
}

function formatShortMonthDayFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatShortMonthDay(value);
    }
}

function formatDateRangeFilter(pipDateTime: any) {
    "ngInject";  

    return function (value1: any, value2: any): string {
        return pipDateTime.formatDateRange(value1, value2);
    }
}

function formatDateTimeRangeFilter(pipDateTime: any) {
    "ngInject";  

    return function (value1: any, value2: any): string {
        return pipDateTime.formatDateTimeRange(value1, value2);
    }
}

function formatISOWeekFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatISOWeek(value);
    }
}

function formatShortISOWeekFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatShortISOWeek(value);
    }
}

function formatISOWeekOrdinalFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatISOWeekOrdinal(value);
    }
}

function formatDateYFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatDateY(value);
    }
}

function formatLongDateYFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatLongDateY(value);
    }
}

function formatMillisecondsToSecondsFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.formatMillisecondsToSeconds(value);
    }
}

function formatElapsedIntervalFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any, start: any): string {
        return pipDateTime.formatElapsedInterval(value, start);
    }
}

function getDateJSONFilter(pipDateTime: any) {
    "ngInject";  

    return function (value: any): string {
        return pipDateTime.getDateJSON(value);
    }
}

angular
    .module('pipDateTime.Filter', [])
    .filter('formatTime', formatTimeFilter)
    .filter('formatDateOptional', formatDateOptionalFilter)
    .filter('formatShortDate', formatShortDateFilter)
    .filter('formatLongDate', formatLongDateFilter)
    .filter('formatMonth', formatMonthFilter)
    .filter('formatLongMonth', formatLongMonthFilter)
    .filter('formatYear', formatYearFilter)
    .filter('formatWeek', formatWeekFilter)
    .filter('formatShortWeek', formatShortWeekFilter)
    .filter('formatShortDateTime', formatShortDateTimeFilter)
    .filter('formatLongDateTime', formatLongDateTimeFilter)
    .filter('formatShortTime', formatShortTimeFilter)
    .filter('formatLongTime', formatLongTimeFilter)
    .filter('formatShortDayOfWeek', formatShortDayOfWeekFilter)
    .filter('formatLongDayOfWeek', formatLongDayOfWeekFilter)
    .filter('formatDateNumber', formatDateNumberFilter)
    .filter('formatLongDateNumber', formatLongDateNumberFilter)
    .filter('formatTimeNumber', formatTimeNumberFilter)
    .filter('formatLongTimeNumber', formatLongTimeNumberFilter)
    .filter('formatLongMonthDay', formatLongMonthDayFilter)
    .filter('formatShortMonthDay', formatShortMonthDayFilter)
    .filter('formatDateRange', formatDateRangeFilter)
    .filter('formatDateTimeRange', formatDateTimeRangeFilter)
    .filter('formatISOWeek', formatISOWeekFilter)
    .filter('formatShortISOWeek', formatShortISOWeekFilter)
    .filter('formatISOWeekOrdinal', formatISOWeekOrdinalFilter)
    .filter('formatDateY', formatDateYFilter)
    .filter('formatLongDateY', formatLongDateYFilter)
    .filter('formatMillisecondsToSeconds', formatMillisecondsToSecondsFilter)
    .filter('formatElapsedInterval', formatElapsedIntervalFilter);

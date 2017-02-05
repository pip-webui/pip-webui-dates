(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).dates = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
angular.module('pipDateTime', [
    'pipDateTime.Service', 'pipDateTime.Filter'
]);
},{}],2:[function(require,module,exports){
'use strict';
formatTimeFilter.$inject = ['pipDateTime'];
formatDateOptionalFilter.$inject = ['pipDateTime'];
formatLongDateFilter.$inject = ['pipDateTime'];
formatShortDateFilter.$inject = ['pipDateTime'];
formatMiddleDateFilter.$inject = ['pipDateTime'];
formatMonthFilter.$inject = ['pipDateTime'];
formatLongMonthFilter.$inject = ['pipDateTime'];
formatYearFilter.$inject = ['pipDateTime'];
formatWeekFilter.$inject = ['pipDateTime'];
formatShortWeekFilter.$inject = ['pipDateTime'];
formatShortDateTimeFilter.$inject = ['pipDateTime'];
formatMiddleDateTimeFilter.$inject = ['pipDateTime'];
formatLongDateTimeFilter.$inject = ['pipDateTime'];
formatShortDateLongTimeFilter.$inject = ['pipDateTime'];
formatMiddleDateLongTimeFilter.$inject = ['pipDateTime'];
formatLongDateLongTimeFilter.$inject = ['pipDateTime'];
bbFormatDateLongTimeFilter.$inject = ['pipDateTime'];
formatFullDateTimeFilter.$inject = ['pipDateTime'];
formatShortTimeFilter.$inject = ['pipDateTime'];
formatLongTimeFilter.$inject = ['pipDateTime'];
formatShortDayOfWeekFilter.$inject = ['pipDateTime'];
formatLongDayOfWeekFilter.$inject = ['pipDateTime'];
formatLongMonthDayFilter.$inject = ['pipDateTime'];
formatShortMonthDayFilter.$inject = ['pipDateTime'];
formatDateRangeFilter.$inject = ['pipDateTime'];
formatDateTimeRangeFilter.$inject = ['pipDateTime'];
formatISOWeekFilter.$inject = ['pipDateTime'];
formatShortISOWeekFilter.$inject = ['pipDateTime'];
formatISOWeekOrdinalFilter.$inject = ['pipDateTime'];
formatDateYFilter.$inject = ['pipDateTime'];
formatLongDateYFilter.$inject = ['pipDateTime'];
formatTodayDateLongTimeLongFilter.$inject = ['pipDateTime'];
formatTodayDateShortTimeLongFilter.$inject = ['pipDateTime'];
formatTodayDateLongTimeShortFilter.$inject = ['pipDateTime'];
formatTodayDateShortTimeShortFilter.$inject = ['pipDateTime'];
formatMillisecondsToSecondsFilter.$inject = ['pipDateTime'];
formatElapsedIntervalFilter.$inject = ['pipDateTime'];
getDateJSONFilter.$inject = ['pipDateTime'];
function formatTimeFilter(pipDateTime) {
    "ngInject";
    return function (value, format) {
        return pipDateTime.formatTime(value, format);
    };
}
function formatDateOptionalFilter(pipDateTime) {
    "ngInject";
    return function (value, format) {
        return pipDateTime.formatDateOptional(value, format);
    };
}
function formatLongDateFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatLongDate(value);
    };
}
function formatShortDateFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatShortDate(value);
    };
}
function formatMiddleDateFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatMiddleDate(value);
    };
}
function formatMonthFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatMonth(value);
    };
}
function formatLongMonthFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatLongMonth(value);
    };
}
function formatYearFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatYear(value);
    };
}
function formatWeekFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatWeek(value);
    };
}
function formatShortWeekFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatShortWeek(value);
    };
}
function formatShortDateTimeFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatShortDateTime(value);
    };
}
function formatMiddleDateTimeFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatMiddleDateTime(value);
    };
}
function formatLongDateTimeFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatLongDateTime(value);
    };
}
function formatShortDateLongTimeFilter(pipDateTime) {
    "ngInject";
    return function (value, firstTime) {
        return pipDateTime.formatShortDateLongTime(value, firstTime);
    };
}
function formatMiddleDateLongTimeFilter(pipDateTime) {
    "ngInject";
    return function (value, firstTime) {
        return pipDateTime.formatMiddleDateLongTime(value, firstTime);
    };
}
function formatLongDateLongTimeFilter(pipDateTime) {
    "ngInject";
    return function (value, firstTime) {
        return pipDateTime.formatLongDateLongTime(value, firstTime);
    };
}
function bbFormatDateLongTimeFilter(pipDateTime) {
    "ngInject";
    return function (value, firstTime) {
        return pipDateTime.bbFormatDateLongTime(value, firstTime);
    };
}
function formatFullDateTimeFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatFullDateTime(value);
    };
}
function formatShortTimeFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatShortTime(value);
    };
}
function formatLongTimeFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatLongTime(value);
    };
}
function formatShortDayOfWeekFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatShortDayOfWeek(value);
    };
}
function formatLongDayOfWeekFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatLongDayOfWeek(value);
    };
}
function formatLongMonthDayFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatLongMonthDay(value);
    };
}
function formatShortMonthDayFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatShortMonthDay(value);
    };
}
function formatDateRangeFilter(pipDateTime) {
    "ngInject";
    return function (value1, value2) {
        return pipDateTime.formatDateRange(value1, value2);
    };
}
function formatDateTimeRangeFilter(pipDateTime) {
    "ngInject";
    return function (value1, value2) {
        return pipDateTime.formatDateTimeRange(value1, value2);
    };
}
function formatISOWeekFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatISOWeek(value);
    };
}
function formatShortISOWeekFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatShortISOWeek(value);
    };
}
function formatISOWeekOrdinalFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatISOWeekOrdinal(value);
    };
}
function formatDateYFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatDateY(value);
    };
}
function formatLongDateYFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatLongDateY(value);
    };
}
function formatTodayDateLongTimeLongFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatTodayDateLongTimeLong(value);
    };
}
function formatTodayDateShortTimeLongFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatTodayDateShortTimeLong(value);
    };
}
function formatTodayDateLongTimeShortFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatTodayDateLongTimeShort(value);
    };
}
function formatTodayDateShortTimeShortFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatTodayDateShortTimeShort(value);
    };
}
function formatMillisecondsToSecondsFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.formatMillisecondsToSeconds(value);
    };
}
function formatElapsedIntervalFilter(pipDateTime) {
    "ngInject";
    return function (value, start) {
        return pipDateTime.formatElapsedInterval(value, start);
    };
}
function getDateJSONFilter(pipDateTime) {
    "ngInject";
    return function (value) {
        return pipDateTime.getDateJSON(value);
    };
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
},{}],3:[function(require,module,exports){
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DateTimeConfig = (function () {
    function DateTimeConfig() {
    }
    return DateTimeConfig;
}());
exports.DateTimeConfig = DateTimeConfig;
var DateTime = (function () {
    function DateTime(config) {
        this._momentRanged = new Array('year', 'month', 'week', 'isoweek', 'day');
        this._defaultFormat = 'LL';
        this._config = config || { timeZone: null };
    }
    DateTime.prototype.isUndefinedOrNull = function (value) {
        return angular.isUndefined(value) || value === null;
    };
    DateTime.prototype.getRange = function (value) {
        if (this.isUndefinedOrNull(value)) {
            return 'day';
        }
        var index = this._momentRanged.indexOf(value);
        if (index < 0) {
            return 'day';
        }
        else {
            return this._momentRanged[index];
        }
    };
    DateTime.prototype.getOperationRange = function (value) {
        if (this.isUndefinedOrNull(value)) {
            return 'day';
        }
        var range = value == 'isoweek' ? 'week' : value, index = this._momentRanged.indexOf(range);
        if (index < 0) {
            return 'day';
        }
        else {
            return this._momentRanged[index];
        }
    };
    DateTime.prototype.formatDateTime = function (value, basicFormat) {
        var date, formatTpl;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (this._config.timeZone != undefined && this._config.timeZone != null) {
            date = moment(value).utcOffset(this._config.timeZone);
        }
        else {
            date = moment(value);
        }
        if (!date.isValid()) {
            return '';
        }
        formatTpl = basicFormat ? basicFormat : this._defaultFormat;
        return date.format(formatTpl);
    };
    DateTime.prototype.formatDateTimeY = function (value, basicFormat) {
        var date, nowDate, formatMoment;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (this._config.timeZone != undefined && this._config.timeZone != null) {
            date = moment(value).utcOffset(this._config.timeZone);
        }
        else {
            date = moment(value);
        }
        if (!date.isValid()) {
            return '';
        }
        nowDate = moment();
        formatMoment = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat);
        if (nowDate.year() == date.year()) {
            formatMoment = formatMoment.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');
        }
        return date.format(formatMoment);
    };
    DateTime.prototype.formatDay = function (value, basicFormat) {
        var date, format = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat), formatMonthYearless = format.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '').replace(/M/g, '');
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (this._config.timeZone != undefined && this._config.timeZone != null) {
            date = moment(value).utcOffset(this._config.timeZone);
        }
        else {
            date = moment(value);
        }
        if (!date.isValid()) {
            return '';
        }
        return date.format(formatMonthYearless);
    };
    DateTime.prototype.formatMonthDay = function (value, basicFormat) {
        var date, format = basicFormat ? basicFormat : this._defaultFormat, formatLL = moment.localeData().longDateFormat(format), formatYearlessLL = formatLL.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (this._config.timeZone != undefined && this._config.timeZone != null) {
            date = moment(value).utcOffset(this._config.timeZone);
        }
        else {
            date = moment(value);
        }
        if (!date.isValid()) {
            return '';
        }
        return date.format(formatYearlessLL);
    };
    DateTime.prototype.formatRange = function (value1, value2, basicFormat) {
        var dateStart, dateEnd, format = basicFormat ? basicFormat : this._defaultFormat;
        if (this.isUndefinedOrNull(value1)) {
            dateStart = null;
        }
        else {
            dateStart = (this._config.timeZone != undefined && this._config.timeZone != null) ? moment(value1).utcOffset(this._config.timeZone) : moment(value1);
        }
        if (this.isUndefinedOrNull(value2)) {
            dateEnd = null;
        }
        else {
            dateEnd = (this._config.timeZone != undefined && this._config.timeZone != null) ? moment(value2).utcOffset(this._config.timeZone) : moment(value2);
        }
        if (dateStart === null && dateEnd === null)
            return '';
        if (dateStart === null) {
            return dateEnd.format(basicFormat);
        }
        else if (dateEnd === null || dateStart.isSame(dateEnd)) {
            return dateStart.format(basicFormat);
            ;
        }
        if (dateStart.isAfter(dateEnd)) {
            throw new Error('Date range error. Start date is more than end date.');
        }
        if (dateStart.year() == dateEnd.year()) {
            if (dateStart.month() == dateEnd.month()) {
                return this.formatDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
            }
            else {
                return this.formatMonthDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
            }
        }
        else {
            return dateStart.format(basicFormat) + '-' + dateEnd.format(basicFormat);
        }
    };
    DateTime.prototype.toStartRange = function (value, range) {
        var date;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (this._config.timeZone != undefined && this._config.timeZone != null) {
            date = moment(value).utcOffset(this._config.timeZone);
        }
        else {
            date = moment(value);
        }
        if (!date.isValid()) {
            return '';
        }
        return date.startOf(range).toDate();
    };
    DateTime.prototype.toEndRange = function (value, range, offset) {
        var date, result, mssOffset;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (!angular.isNumber(offset)) {
            mssOffset = 0;
        }
        if (this._config.timeZone != undefined && this._config.timeZone != null) {
            date = moment(value).utcOffset(this._config.timeZone);
        }
        else {
            date = moment(value);
        }
        if (!date.isValid()) {
            return '';
        }
        if (mssOffset) {
            result = date.startOf(range).add(mssOffset, 'milliseconds');
        }
        else {
            result = date.startOf(range);
        }
        return date.startOf(range).toDate();
    };
    DateTime.prototype.toDateWithTime = function (value, formatDate, formatTime, firstTime) {
        var date, result, nowDate;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (this._config.timeZone != undefined && this._config.timeZone != null) {
            date = moment(value).utcOffset(this._config.timeZone);
        }
        else {
            date = moment(value);
        }
        if (!date.isValid()) {
            return '';
        }
        nowDate = moment();
        if (firstTime) {
            result = date.format(formatTime) + ' ' + date.format(formatDate);
        }
        else {
            result = date.format(formatDate) + ' ' + date.format(formatTime);
        }
        return result;
    };
    DateTime.prototype.toTodayDate = function (value, formatDate, formatTime) {
        var date, result, nowDate;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (this._config.timeZone != undefined && this._config.timeZone != null) {
            date = moment(value).utcOffset(this._config.timeZone);
        }
        else {
            date = moment(value);
        }
        if (!date.isValid()) {
            return '';
        }
        nowDate = moment();
        if (nowDate.year() == date.year() && nowDate.month() == date.month() && nowDate.day() == date.day()) {
            result = date.format(formatTime);
        }
        else {
            result = date.format(formatDate) + ' ' + date.format(formatTime);
        }
        return result;
    };
    ;
    Object.defineProperty(DateTime.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    DateTime.prototype.useTimeZone = function (offset) {
        this._config.timeZone = offset;
    };
    DateTime.prototype.formatTime = function (value, format) {
        return this.formatDateTime(value, 'LLL');
    };
    DateTime.prototype.formatDateOptional = function (value, format) {
        return this.formatDateTime(value, 'L');
    };
    DateTime.prototype.formatShortDate = function (value) {
        return this.formatDateTime(value, 'L');
    };
    DateTime.prototype.bbFormatDateLongTime = function (value, firstTime) {
        return this.toDateWithTime(value, 'MM/DD/YY', 'LTS', firstTime);
    };
    DateTime.prototype.formatMiddleDate = function (value) {
        return this.formatDateTime(value, 'll');
    };
    DateTime.prototype.formatLongDate = function (value) {
        return this.formatDateTime(value, 'LL');
    };
    DateTime.prototype.formatMonth = function (value) {
        return this.formatDateTime(value, 'MM');
    };
    DateTime.prototype.formatLongMonth = function (value) {
        return this.formatDateTime(value, 'MMMM');
    };
    DateTime.prototype.formatYear = function (value) {
        return this.formatDateTime(value, 'YYYY');
    };
    DateTime.prototype.formatWeek = function (value) {
        return this.formatDateTime(value, 'ww');
    };
    DateTime.prototype.formatShortWeek = function (value) {
        return this.formatDateTime(value, 'w');
    };
    DateTime.prototype.formatShortDateTime = function (value) {
        return this.toDateWithTime(value, 'L', 'LT');
    };
    DateTime.prototype.formatMiddleDateTime = function (value) {
        return this.formatDateTime(value, 'lll');
    };
    DateTime.prototype.formatLongDateTime = function (value) {
        return this.formatDateTime(value, 'LLL');
    };
    DateTime.prototype.formatFullDateTime = function (value) {
        return this.formatDateTime(value, 'LLLL');
    };
    DateTime.prototype.formatShortDateLongTime = function (value, firstTime) {
        return this.toDateWithTime(value, 'L', 'LTS', firstTime);
    };
    DateTime.prototype.formatMiddleDateLongTime = function (value, firstTime) {
        return this.toDateWithTime(value, 'll', 'LTS', firstTime);
    };
    DateTime.prototype.formatLongDateLongTime = function (value, firstTime) {
        return this.toDateWithTime(value, 'LL', 'LTS', firstTime);
    };
    DateTime.prototype.formatShortTime = function (value) {
        return this.formatDateTime(value, 'LT');
    };
    DateTime.prototype.formatLongTime = function (value) {
        return this.formatDateTime(value, 'LTS');
    };
    DateTime.prototype.formatShortDayOfWeek = function (value) {
        return this.formatDateTime(value, 'dd');
    };
    DateTime.prototype.formatLongDayOfWeek = function (value) {
        return this.formatDateTime(value, 'dddd');
    };
    DateTime.prototype.formatLongMonthDay = function (value) {
        return this.formatMonthDay(value, 'LL');
    };
    DateTime.prototype.formatShortMonthDay = function (value) {
        return this.formatMonthDay(value, 'L');
    };
    DateTime.prototype.formatDateRange = function (value1, value2) {
        return this.formatRange(value1, value2, 'LL');
    };
    DateTime.prototype.formatDateTimeRange = function (value1, value2) {
        return this.formatRange(value1, value2, 'LLL');
    };
    DateTime.prototype.formatISOWeek = function (value) {
        return this.formatDateTime(value, 'WW');
    };
    DateTime.prototype.formatShortISOWeek = function (value) {
        return this.formatDateTime(value, 'W');
    };
    DateTime.prototype.formatISOWeekOrdinal = function (value) {
        return this.formatDateTime(value, 'Wo');
    };
    DateTime.prototype.formatDateY = function (value) {
        return this.formatDateTimeY(value, 'L');
    };
    DateTime.prototype.formatLongDateY = function (value) {
        return this.formatDateTimeY(value, 'LL');
    };
    DateTime.prototype.formatTodayDateLongTimeLong = function (value) {
        return this.toTodayDate(value, 'LL', 'LTS');
    };
    DateTime.prototype.formatTodayDateShortTimeLong = function (value) {
        return this.toTodayDate(value, 'LL', 'LTS');
    };
    DateTime.prototype.formatTodayDateLongTimeShort = function (value) {
        return this.toTodayDate(value, 'LL', 'LT');
    };
    DateTime.prototype.formatTodayDateShortTimeShort = function (value) {
        return this.toTodayDate(value, 'll', 'LT');
    };
    DateTime.prototype.formatMillisecondsToSeconds = function (value) {
        return '';
    };
    DateTime.prototype.formatElapsedInterval = function (value, start) {
        var date, nowDate;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        if (this.isUndefinedOrNull(start)) {
            nowDate = moment();
        }
        else {
            nowDate = moment(start);
        }
        date = moment(value);
        if (!date.isValid() || !nowDate.isValid()) {
            return '';
        }
        return moment(date).fromNow(nowDate);
    };
    DateTime.prototype.getDateJSON = function (date) {
        return JSON.stringify(moment(date));
    };
    DateTime.prototype.getNextStart = function (value, category) {
        var date, range, result;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        date = moment(value);
        if (!date.isValid()) {
            return '';
        }
        range = this.getRange(category);
        result = moment(date).startOf(range).add(this.getOperationRange(range));
        return result.toDate();
    };
    DateTime.prototype.getPrevStart = function (value, category) {
        var date, range, result;
        if (this.isUndefinedOrNull(value)) {
            return '';
        }
        date = moment(value);
        if (!date.isValid()) {
            return '';
        }
        range = this.getRange(category);
        result = moment(date).startOf(range).add(-1, this.getOperationRange(range));
        return result.toDate();
    };
    DateTime.prototype.getNowStart = function (category) {
        var date, range, result;
        date = moment();
        if (!date.isValid()) {
            return '';
        }
        range = this.getRange(category);
        result = moment(date).startOf(range);
        return result.toDate();
    };
    DateTime.prototype.addHours = function (value, hours) {
        var date;
        if (this.isUndefinedOrNull(value) || !angular.isNumber(hours)) {
            return '';
        }
        date = moment(value);
        if (!date.isValid()) {
            return '';
        }
        return date.add(hours, 'hours').toDate();
    };
    DateTime.prototype.toStartDay = function (value) {
        return this.toStartRange(value, 'day');
    };
    DateTime.prototype.toEndDay = function (value, offset) {
        return this.toEndRange(value, 'day', offset);
    };
    DateTime.prototype.toStartWeek = function (value) {
        return this.toStartRange(value, 'week');
    };
    DateTime.prototype.toEndWeek = function (value, offset) {
        return this.toEndRange(value, 'week', offset);
    };
    DateTime.prototype.toStartMonth = function (value) {
        return this.toStartRange(value, 'month');
    };
    DateTime.prototype.toEndMonth = function (value, offset) {
        return this.toEndRange(value, 'month', offset);
    };
    DateTime.prototype.toStartYear = function (value) {
        return this.toStartRange(value, 'year');
    };
    DateTime.prototype.toEndYear = function (value, offset) {
        return this.toEndRange(value, 'year', offset);
    };
    return DateTime;
}());
var DateTimeService = (function () {
    function DateTimeService(datetime) {
        this._config = { timeZone: null };
        this._datetime = datetime;
    }
    DateTimeService.prototype.useTimeZone = function (offset) {
        return this._datetime.useTimeZone(offset);
    };
    DateTimeService.prototype.formatTime = function (value, format) {
        return this._datetime.formatTime(value, format);
    };
    DateTimeService.prototype.formatDateOptional = function (value, format) {
        return this._datetime.formatDateOptional(value, format);
    };
    DateTimeService.prototype.formatShortDate = function (value) {
        return this._datetime.formatShortDate(value);
    };
    DateTimeService.prototype.formatMiddleDate = function (value) {
        return this._datetime.formatMiddleDate(value);
    };
    DateTimeService.prototype.formatLongDate = function (value) {
        return this._datetime.formatLongDate(value);
    };
    DateTimeService.prototype.formatMonth = function (value) {
        return this._datetime.formatMonth(value);
    };
    DateTimeService.prototype.formatLongMonth = function (value) {
        return this._datetime.formatLongMonth(value);
    };
    DateTimeService.prototype.formatYear = function (value) {
        return this._datetime.formatYear(value);
    };
    DateTimeService.prototype.formatWeek = function (value) {
        return this._datetime.formatWeek(value);
    };
    DateTimeService.prototype.formatShortWeek = function (value) {
        return this._datetime.formatShortWeek(value);
    };
    DateTimeService.prototype.formatShortDateTime = function (value) {
        return this._datetime.formatShortDateTime(value);
    };
    DateTimeService.prototype.formatMiddleDateTime = function (value) {
        return this._datetime.formatMiddleDateTime(value);
    };
    DateTimeService.prototype.formatLongDateTime = function (value) {
        return this._datetime.formatLongDateTime(value);
    };
    DateTimeService.prototype.formatFullDateTime = function (value) {
        return this._datetime.formatFullDateTime(value);
    };
    DateTimeService.prototype.formatShortDateLongTime = function (value, firstTime) {
        return this._datetime.formatShortDateLongTime(value, firstTime);
    };
    DateTimeService.prototype.formatMiddleDateLongTime = function (value, firstTime) {
        return this._datetime.formatMiddleDateLongTime(value, firstTime);
    };
    DateTimeService.prototype.formatLongDateLongTime = function (value, firstTime) {
        return this._datetime.formatLongDateLongTime(value, firstTime);
    };
    DateTimeService.prototype.bbFormatDateLongTime = function (value, firstTime) {
        return this._datetime.bbFormatDateLongTime(value, firstTime);
    };
    DateTimeService.prototype.formatShortTime = function (value) {
        return this._datetime.formatShortTime(value);
    };
    DateTimeService.prototype.formatLongTime = function (value) {
        return this._datetime.formatLongTime(value);
    };
    DateTimeService.prototype.formatShortDayOfWeek = function (value) {
        return this._datetime.formatShortDayOfWeek(value);
    };
    DateTimeService.prototype.formatLongDayOfWeek = function (value) {
        return this._datetime.formatLongDayOfWeek(value);
    };
    DateTimeService.prototype.formatLongMonthDay = function (value) {
        return this._datetime.formatLongMonthDay(value);
    };
    DateTimeService.prototype.formatShortMonthDay = function (value) {
        return this._datetime.formatShortMonthDay(value);
    };
    DateTimeService.prototype.formatDateRange = function (value1, value2) {
        return this._datetime.formatDateRange(value1, value2);
    };
    DateTimeService.prototype.formatDateTimeRange = function (value1, value2) {
        return this._datetime.formatDateTimeRange(value1, value2);
    };
    DateTimeService.prototype.formatISOWeek = function (value) {
        return this._datetime.formatISOWeek(value);
    };
    DateTimeService.prototype.formatShortISOWeek = function (value) {
        return this._datetime.formatShortISOWeek(value);
    };
    DateTimeService.prototype.formatISOWeekOrdinal = function (value) {
        return this._datetime.formatISOWeekOrdinal(value);
    };
    DateTimeService.prototype.formatDateY = function (value) {
        return this._datetime.formatDateY(value);
    };
    DateTimeService.prototype.formatLongDateY = function (value) {
        return this._datetime.formatLongDateY(value);
    };
    DateTimeService.prototype.formatTodayDateLongTimeLong = function (value) {
        return this._datetime.formatTodayDateLongTimeLong(value);
    };
    DateTimeService.prototype.formatTodayDateShortTimeLong = function (value) {
        return this._datetime.formatTodayDateShortTimeLong(value);
    };
    DateTimeService.prototype.formatTodayDateLongTimeShort = function (value) {
        return this._datetime.formatTodayDateLongTimeShort(value);
    };
    DateTimeService.prototype.formatTodayDateShortTimeShort = function (value) {
        return this._datetime.formatTodayDateShortTimeShort(value);
    };
    DateTimeService.prototype.formatMillisecondsToSeconds = function (value) {
        return this._datetime.formatMillisecondsToSeconds(value);
    };
    DateTimeService.prototype.formatElapsedInterval = function (value, start) {
        return this._datetime.formatElapsedInterval(value, start);
    };
    DateTimeService.prototype.getDateJSON = function (date) {
        return this._datetime.getDateJSON(date);
    };
    DateTimeService.prototype.getNextStart = function (value, category) {
        return this._datetime.getNextStart(value, category);
    };
    DateTimeService.prototype.getPrevStart = function (value, category) {
        return this._datetime.getPrevStart(value, category);
    };
    DateTimeService.prototype.getNowStart = function (category) {
        return this._datetime.getNowStart(category);
    };
    DateTimeService.prototype.addHours = function (value, hours) {
        return this._datetime.addHours(value, hours);
    };
    DateTimeService.prototype.toStartDay = function (value) {
        return this._datetime.toStartDay(value);
    };
    DateTimeService.prototype.toEndDay = function (value, offset) {
        return this._datetime.toEndDay(value, offset);
    };
    DateTimeService.prototype.toStartWeek = function (value) {
        return this._datetime.toStartWeek(value);
    };
    DateTimeService.prototype.toEndWeek = function (value, offset) {
        return this._datetime.toEndWeek(value, offset);
    };
    DateTimeService.prototype.toStartMonth = function (value) {
        return this._datetime.toStartMonth(value);
    };
    DateTimeService.prototype.toEndMonth = function (value, offset) {
        return this._datetime.toEndMonth(value, offset);
    };
    DateTimeService.prototype.toStartYear = function (value) {
        return this._datetime.toStartYear(value);
    };
    DateTimeService.prototype.toEndYear = function (value, offset) {
        return this._datetime.toEndYear(value, offset);
    };
    return DateTimeService;
}());
var DateTimeProvider = (function (_super) {
    __extends(DateTimeProvider, _super);
    function DateTimeProvider() {
        return _super.call(this, { timeZone: null }) || this;
    }
    DateTimeProvider.prototype.$get = function () {
        "ngInject";
        if (this._service == null)
            this._service = new DateTimeService(this);
        return this._service;
    };
    return DateTimeProvider;
}(DateTime));
angular
    .module('pipDateTime.Service', [])
    .provider('pipDateTime', DateTimeProvider);
},{}],4:[function(require,module,exports){
(function () {
    'use strict';
    var thisModule = angular.module('pipDate', ['pipDates.Templates']);
    thisModule.directive('pipDate', function () {
        return {
            restrict: 'EA',
            require: 'ngModel',
            scope: {
                timeMode: '@pipTimeMode',
                disabled: '&ngDisabled',
                model: '=ngModel',
                ngChange: '&'
            },
            templateUrl: 'date_directive/date.html',
            controller: 'pipDateController'
        };
    });
    thisModule.controller('pipDateController', ['$scope', '$element', '$injector', function ($scope, $element, $injector) {
        var value, localeDate = moment.localeData(), momentMonths = angular.isArray(localeDate._months) ? localeDate._months : localeDate._months.format, momentDays = angular.isArray(localeDate._weekdays) ? localeDate._weekdays : localeDate._weekdays.format, momentShortDays = localeDate._weekdaysMin, momentFirstDayOfWeek = localeDate._week.dow;
        var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null;
        if (pipTranslate) {
            pipTranslate.setTranslations('en', {
                DAY: 'Day',
                MONTH: 'Month',
                YEAR: 'Year'
            });
            pipTranslate.setTranslations('ru', {
                DAY: 'День',
                MONTH: 'Месяц',
                YEAR: 'Год'
            });
            $scope.dayLabel = pipTranslate.translate('DAY');
            $scope.monthLabel = pipTranslate.translate('MONTH');
            $scope.yearLabel = pipTranslate.translate('YEAR');
        }
        else {
            $scope.dayLabel = 'Day';
            $scope.monthLabel = 'Month';
            $scope.yearLabel = 'Year';
        }
        function dayList(month, year) {
            var count = 31, days = [], i;
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                count = 30;
            }
            else if (month === 2) {
                if (year) {
                    count = year % 4 === 0 ? 29 : 28;
                }
                else {
                    count = 28;
                }
            }
            for (i = 1; i <= count; i++) {
                days.push(i);
            }
            return days;
        }
        function monthList() {
            var months = [], i;
            for (i = 1; i <= 12; i++) {
                months.push({
                    id: i,
                    name: momentMonths[i - 1]
                });
            }
            return months;
        }
        function yearList() {
            var i, currentYear = new Date().getFullYear(), startYear = $scope.timeMode === 'future' ? currentYear : currentYear - 100, endYear = $scope.timeMode === 'past' ? currentYear : currentYear + 100, years = [];
            if ($scope.timeMode === 'past') {
                for (i = endYear; i >= startYear; i--) {
                    years.push(i);
                }
            }
            else {
                for (i = startYear; i <= endYear; i++) {
                    years.push(i);
                }
            }
            return years;
        }
        function adjustDay() {
            var days = dayList($scope.month, $scope.year);
            if ($scope.days.length !== days.length) {
                if ($scope.day > days.length) {
                    $scope.day = days.length;
                }
                $scope.days = days;
            }
        }
        function getValue(v) {
            var value = v ? _.isDate(v) ? v : new Date(v) : null, day = value ? value.getDate() : null, month = value ? value.getMonth() + 1 : null, year = value ? value.getFullYear() : null;
            if ($scope.month !== month && $scope.year !== year) {
                $scope.days = dayList($scope.month, $scope.year);
            }
            $scope.day = day;
            $scope.month = month;
            $scope.year = year;
        }
        function setValue() {
            var value;
            if ($scope.day && $scope.month && $scope.year) {
                value = new Date($scope.year, $scope.month - 1, $scope.day, 0, 0, 0, 0);
                $scope.model = value;
                $scope.ngChange();
            }
        }
        $scope.onDayChanged = function () {
            setValue();
        };
        $scope.onMonthChanged = function () {
            adjustDay();
            setValue();
        };
        $scope.onYearChanged = function () {
            adjustDay();
            setValue();
        };
        value = $scope.model ? _.isDate($scope.model) ? $scope.model : new Date($scope.model) : null;
        $scope.day = value ? value.getDate() : null;
        $scope.month = value ? value.getMonth() + 1 : null;
        $scope.year = value ? value.getFullYear() : null;
        $scope.days = dayList($scope.month, $scope.year);
        $scope.months = monthList();
        $scope.years = yearList();
        $scope.disableControls = $scope.disabled ? $scope.disabled() : false;
        $scope.$watch('model', function (newValue) {
            getValue(newValue);
        });
        $scope.$watch($scope.disabled, function (newValue) {
            $scope.disableControls = newValue;
        });
    }]);
})();
},{}],5:[function(require,module,exports){
(function () {
    'use strict';
    var thisModule = angular.module('pipDateRange', ['pipDates.Templates']);
    thisModule.directive('pipDateRange', function () {
        return {
            restrict: 'EA',
            require: 'ngModel',
            scope: {
                timeMode: '@pipTimeMode',
                disabled: '&ngDisabled',
                model: '=ngModel',
                pipChanged: '&',
                pipDateRangeType: '@',
                pipDateFormat: '@',
                pipNoLine: '@'
            },
            templateUrl: 'date_range_directive/date_range.html',
            controller: 'pipDateRangeController'
        };
    });
    thisModule.controller('pipDateRangeController', ['$scope', '$element', '$mdMedia', '$rootScope', '$injector', '$timeout', function ($scope, $element, $mdMedia, $rootScope, $injector, $timeout) {
        var currentDate, currentYear, currentMonth, currentDay, prevState = {}, currentState = {}, localeDate = moment.localeData(), momentMonths = angular.isArray(localeDate._months) ? localeDate._months : localeDate._months.format, momentDays = angular.isArray(localeDate._weekdays) ? localeDate._weekdays : localeDate._weekdays.format, momentShortDays = localeDate._weekdaysMin, momentFirstDayOfWeek = localeDate._week.dow;
        currentDate = new Date();
        currentYear = currentDate.getUTCFullYear();
        currentMonth = currentDate.getUTCMonth() + 1;
        currentDay = currentDate.getUTCDate();
        $scope.onDayChanged = function () {
            setValue();
        };
        $scope.onMonthChanged = function () {
            if ($scope.pipDateRangeType === 'weekly') {
                var date, dayOfWeek;
                date = new Date(Date.UTC($scope.year, $scope.month - 1, 1));
                dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
                $scope.week = getWeekByDate(dayOfWeek, $scope.month - 1, $scope.year);
                correctWeek();
                adjustWeek();
            }
            else {
                adjustDay();
            }
            setValue();
        };
        $scope.onYearChanged = function () {
            var date, dayOfWeek;
            date = new Date(Date.UTC($scope.year, $scope.month - 1, 1));
            dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
            if ($scope.pipDateRangeType === 'weekly') {
                $scope.week = getWeekByDate(dayOfWeek, $scope.month - 1, $scope.year);
                adjustWeek();
                correctWeek();
            }
            else {
                adjustDay();
            }
            setValue();
        };
        $scope.onWeekChange = function () {
            if ($scope.pipDateRangeType === 'weekly') {
                adjustWeek();
                correctWeek();
            }
            else {
                adjustDay();
            }
            setValue();
        };
        $scope.isDay = function () {
            return $scope.pipDateRangeType === 'daily';
        };
        $scope.isWeek = function () {
            return $scope.pipDateRangeType === 'weekly';
        };
        $scope.isMonth = function () {
            return $scope.pipDateRangeType === 'daily' ||
                $scope.pipDateRangeType === 'weekly' ||
                $scope.pipDateRangeType === 'monthly';
        };
        $scope.onChange = function () {
            if ($scope.pipChanged) {
                $timeout(function () {
                    $scope.pipChanged();
                }, 0);
            }
        };
        function setCurrent() {
            currentState.day = $scope.day;
            currentState.month = $scope.month;
            currentState.year = $scope.year;
            currentState.week = $scope.week;
            currentState.dateRangeType = $scope.pipDateRangeType;
            currentState.model = $scope.model;
        }
        function fillLists() {
            $scope.days = dayList($scope.month, $scope.year);
            $scope.weeks = weekList($scope.month, $scope.year);
            $scope.months = monthList();
            $scope.shortMonths = monthList();
            $scope.years = yearList();
        }
        function correctWeek() {
            if (!prevState.model || prevState.model && prevState.model.getTime() >= $scope.model.getTime()) {
                if ($scope.weeks && $scope.weeks[$scope.week] && $scope.weeks[$scope.week].id <= 0) {
                    if ($scope.month < 12) {
                        $scope.month += 1;
                    }
                    else {
                        $scope.month = 1;
                        $scope.year += 1;
                    }
                    fillLists();
                }
            }
        }
        function init() {
            var value;
            value = $scope.model ? new Date($scope.model) : null;
            $scope.day = value ? value.getUTCDate() : null;
            $scope.month = value ? value.getUTCMonth() + 1 : null;
            $scope.year = value ? value.getUTCFullYear() : null;
            $scope.week = value ? getWeekByDate($scope.day, $scope.month - 1, $scope.year) : null;
            fillLists();
            if ($scope.pipDateRangeType === 'weekly') {
                correctWeek();
                adjustWeek();
            }
            else {
                adjustDay();
            }
            setValue();
        }
        $scope.$mdMedia = $mdMedia;
        init();
        $scope.disableControls = $scope.disabled ? $scope.disabled() : false;
        $scope.$watch('model', function (newValue, oldValue) {
            if (newValue !== oldValue) {
                getValue(newValue);
            }
        });
        $scope.$watch($scope.disabled, function (newValue) {
            $scope.disableControls = newValue;
        });
        $scope.$watch('pipDateRangeType', function (newValue, oldValue) {
            if (newValue !== oldValue && oldValue) {
                init();
            }
        });
        $scope.onYearClick = function () {
            if (!$scope.year) {
                $scope.year = currentYear;
            }
        };
        $scope.onMonthClick = function () {
            if (!$scope.month) {
                $scope.month = currentMonth;
            }
        };
        $scope.onDayClick = function () {
            if (!$scope.year) {
                $scope.day = currentDay;
            }
        };
        function getCountDay(month, year) {
            var count = 31;
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                count = 30;
            }
            else if (month === 2) {
                if (year) {
                    count = year % 4 === 0 ? 29 : 28;
                }
                else {
                    count = 28;
                }
            }
            return count;
        }
        function dayList(month, year) {
            var count, days, i, ln;
            count = getCountDay(month, year);
            $scope.nameDays = [];
            days = [];
            for (i = 1; i <= count; i++) {
                days.push(i);
                $scope.nameDays.push(momentShortDays[moment([year, month - 1, i]).weekday()]);
            }
            return days;
        }
        function getWeekByDate(day, month, year) {
            var date, dayOfWeek, startWeek;
            date = new Date(Date.UTC(year, month, day));
            dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
            if (dayOfWeek === 1) {
                startWeek = day;
            }
            else {
                startWeek = day + 1 - dayOfWeek;
            }
            return startWeek;
        }
        function getWeek(day, countDay, countPrevMonthDay) {
            var endDay, startDay;
            endDay = day + 6 > countDay ? countDay - day - 6 : day + 6;
            startDay = day > 0 ? day : countPrevMonthDay + day;
            return startDay.toString() + ' - ' + (Math.abs(endDay)).toString();
        }
        function weekList(month, year) {
            var weeks, countDay, countPrevMonthDay, startWeek;
            weeks = [];
            countDay = getCountDay(month, year);
            startWeek = getWeekByDate(1, month - 1, year);
            countPrevMonthDay = month - 1 ? getCountDay(month - 1, year) : getCountDay(12, year - 1);
            while (startWeek < countDay + 1) {
                weeks.push({
                    id: startWeek,
                    name: getWeek(startWeek, countDay, countPrevMonthDay)
                });
                startWeek = startWeek + 7;
            }
            return weeks;
        }
        function monthList() {
            var months = [], i;
            for (i = 1; i <= 12; i++) {
                months.push({
                    id: i,
                    name: momentMonths[i - 1]
                });
            }
            return months;
        }
        function yearList() {
            var startYear, i, endYear, years = [];
            switch ($scope.timeMode) {
                case 'future':
                    startYear = currentYear;
                    endYear = currentYear + 100;
                    break;
                case 'past':
                    startYear = currentYear - 100;
                    endYear = currentYear;
                    break;
                case 'now':
                    startYear = currentYear - 50;
                    endYear = currentYear + 100;
                    break;
                default:
                    startYear = currentYear - 50;
                    endYear = currentYear + 50;
                    break;
            }
            if ($scope.timeMode === 'future') {
                for (i = startYear; i <= endYear; i++) {
                    years.push(i);
                }
            }
            else {
                for (i = endYear; i >= startYear; i--) {
                    years.push(i);
                }
            }
            return years;
        }
        function adjustDay() {
            var days = dayList($scope.month, $scope.year);
            switch ($scope.pipDateRangeType) {
                case 'monthly':
                    $scope.day = 1;
                    break;
                case 'yearly':
                    $scope.month = 1;
                    $scope.day = 1;
                    break;
                default:
                    if ($scope.days.length !== days.length) {
                        if ($scope.day > days.length) {
                            $scope.day = days.length;
                        }
                    }
                    break;
            }
            $scope.days = days;
        }
        function adjustWeek() {
            var weeks;
            weeks = weekList($scope.month, $scope.year);
            $scope.week = getWeekByDate($scope.week, $scope.month - 1, $scope.year);
            $scope.weeks = weeks;
        }
        function getValue(v) {
            var value, day, month, year, week;
            value = v ? new Date(v) : null;
            day = value ? value.getUTCDate() : null;
            month = value ? value.getUTCMonth() + 1 : null;
            year = value ? value.getUTCFullYear() : null;
            week = value ? getWeekByDate(day, month - 1, year) : null;
            if ($scope.day === day && $scope.month === month && $scope.year === year && $scope.week === week) {
                return;
            }
            $scope.day = day;
            $scope.month = month;
            $scope.year = year;
            $scope.week = week;
            $scope.days = dayList($scope.month, $scope.year);
            $scope.weeks = weekList($scope.month, $scope.year);
        }
        function setValue() {
            var value;
            if ($scope.pipDateRangeType === 'weekly') {
                value = new Date($scope.year, $scope.month - 1, $scope.week, 0, 0, 0, 0);
                value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
                $scope.model = value;
            }
            else {
                value = new Date($scope.year, $scope.month - 1, $scope.day, 0, 0, 0, 0);
                value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
                $scope.model = value;
            }
            prevState = _.cloneDeep(currentState);
            setCurrent();
            $scope.onChange();
        }
    }]);
})();
},{}],6:[function(require,module,exports){
'use strict';
angular.module('pipDates', [
    'pipDate',
    'pipTimeRange',
    'pipDateTime',
    'pipTimeRangeEdit',
    'pipDateRange',
    'pipDates.Translate'
]);
},{}],7:[function(require,module,exports){
/**
 * @file Optional filter to translate string resources
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipDates.Translate', []);

    thisModule.filter('translate', ['$injector', function ($injector) {
        var pipTranslate = $injector.has('pipTranslate') 
            ? $injector.get('pipTranslate') : null;

        return function (key) {
            return pipTranslate  ? pipTranslate.translate(key) || key : key;
        }
    }]);

})();

},{}],8:[function(require,module,exports){
(function () {
    'use strict';
    var thisModule = angular.module('pipTimeRange', []);
    thisModule.directive('pipTimeRange', function () {
        return {
            restrict: 'EA',
            scope: {
                pipStartDate: '=',
                pipEndDate: '='
            },
            templateUrl: 'time_range_directive/time_range.html',
            link: function ($scope, $element, $attrs) {
                function getDateJSON(value) {
                    return value ? new Date(value) : null;
                }
                function defineStartDate() {
                    if ($scope.pipStartDate !== null && $scope.pipStartDate !== undefined) {
                        $scope.data.start = _.isDate($scope.pipStartDate) ? $scope.pipStartDate
                            : getDateJSON($scope.pipStartDate);
                    }
                }
                function defineEndDate() {
                    if ($scope.pipEndDate !== null && $scope.pipEndDate !== undefined) {
                        $scope.data.end = _.isDate($scope.pipEndDate) ? $scope.pipEndDate
                            : getDateJSON($scope.pipEndDate);
                    }
                }
                function toBoolean(value) {
                    if (value == null)
                        return false;
                    if (!value)
                        return false;
                    value = value.toString().toLowerCase();
                    return value == '1' || value == 'true';
                }
                $scope.data = {};
                $scope.data.start = null;
                $scope.data.end = null;
                defineStartDate();
                defineEndDate();
                if (toBoolean($attrs.pipRebind)) {
                    $scope.$watch('pipStartDate', function () {
                        $scope.data.start = null;
                        defineStartDate();
                    });
                    $scope.$watch('pipEndDate', function () {
                        $scope.data.end = null;
                        defineEndDate();
                    });
                }
                $element.addClass('pip-time-range');
            }
        };
    });
})();
},{}],9:[function(require,module,exports){
(function () {
    'use strict';
    var thisModule = angular.module('pipTimeRangeEdit', []);
    thisModule.directive('pipTimeRangeEdit', function () {
        return {
            restrict: 'EA',
            scope: {
                pipStartDate: '=',
                pipChanged: '&',
                pipEndDate: '=',
                pipStartLabel: '@',
                pipEndLabel: '@',
                disabled: '&ngDisabled',
                pipHideTime: '=',
                pipSize: '='
            },
            templateUrl: 'time_range_edit_directive/time_range_edit.html',
            controller: 'pipTimeRangeEditController'
        };
    });
    thisModule.controller('pipTimeRangeEditController', ['$scope', '$element', '$attrs', '$injector', 'pipDateTime', function ($scope, $element, $attrs, $injector, pipDateTime) {
        var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null;
        if (pipTranslate) {
            pipTranslate.setTranslations('en', {
                EVENT_NEW_START_TIME: 'Start time',
                EVENT_NEW_END_TIME: 'End time'
            });
            pipTranslate.setTranslations('ru', {
                EVENT_NEW_START_TIME: 'Начало',
                EVENT_NEW_END_TIME: 'Конец'
            });
            $scope.startLabel = $scope.pipStartLabel ? pipTranslate.translate($scope.pipStartLabel)
                : pipTranslate.translate('EVENT_NEW_START_TIME');
            $scope.endLabel = $scope.pipEndLabel ? pipTranslate.translate($scope.pipEndLabel)
                : pipTranslate.translate('EVENT_NEW_END_TIME');
        }
        else {
            $scope.startLabel = $scope.pipStartLabel ? $scope.pipStartLabel : 'Start time';
            $scope.endLabel = $scope.pipEndLabel ? $scope.pipEndLabel : 'End time';
        }
        function getDateJSON(value) {
            return value ? new Date(value) : null;
        }
        function setDuration() {
            var start, end;
            if (!$scope.data.startDate || !$scope.data.endDate) {
                return null;
            }
            start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);
            end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);
            return end - start;
        }
        function validateStartDate() {
            var date, start, end;
            if (!$scope.data.startDate) {
                $scope.data.startTime = null;
                return;
            }
            if ($scope.data.startTime === undefined || $scope.data.startTime === null) {
                if (!$scope.data.endTime) {
                    date = new Date();
                    date = date.getTime() - pipDateTime.toStartDay(date);
                    $scope.data.startTime = Math.floor(date / (30 * 60 * 1000)) * 30;
                }
                else {
                    $scope.data.startTime = $scope.data.endTime === 0 ? 0 : $scope.data.endTime - 30;
                }
            }
            if (!$scope.data.endDate) {
                $scope.data.endTime = null;
                return;
            }
            start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);
            if ($scope.data.duration) {
                end = new Date(start.getTime() + $scope.data.duration);
                $scope.data.endDate = pipDateTime.toStartDay(end);
                end = end.getTime() - $scope.data.endDate.getTime();
                $scope.data.endTime = Math.floor(end / (30 * 60 * 1000)) * 30;
            }
            else {
                end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);
                if (start >= end) {
                    $scope.data.endDate = pipDateTime.toStartDay(new Date(start.getTime() + 30 * 60000));
                    $scope.data.endTime = ($scope.data.startTime + 30) % 1440;
                }
            }
        }
        function validateEndDate() {
            var date, start, end;
            if (!$scope.data.endDate) {
                $scope.data.endTime = null;
                return;
            }
            if ($scope.data.endTime === undefined || $scope.data.endTime === null) {
                if (!$scope.data.startTime) {
                    date = new Date();
                    date = date.getTime() - pipDateTime.toStartDay(date);
                    $scope.data.endTime = Math.floor(date / (30 * 60 * 1000)) * 30;
                }
                else {
                    $scope.data.endTime = $scope.data.startTime === 1410 ? 1410 : $scope.data.startTime + 30;
                }
            }
            if (!$scope.data.startDate) {
                $scope.data.startTime = null;
                return;
            }
            start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);
            end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);
            if (start >= end) {
                $scope.data.startDate = pipDateTime.toStartDay(new Date(end.getTime() - 30 * 60000));
                $scope.data.startTime = $scope.data.endTime % 1440 === 0 ? 1410 : $scope.data.endTime - 30;
            }
            $scope.data.duration = setDuration();
        }
        function setDate() {
            var time;
            $scope.data.bind = false;
            if ($scope.data.startDate) {
                time = $scope.data.startTime ? $scope.data.startTime * 60 * 1000 : 0;
                console.log('time', $scope.data.startTime);
                $scope.pipStartDate = new Date($scope.data.startDate.getTime() + time);
            }
            if ($scope.data.endDate) {
                time = $scope.data.endTime ? $scope.data.endTime * 60 * 1000 : 0;
                $scope.pipEndDate = new Date($scope.data.endDate.getTime() + time);
            }
            $scope.data.bind = true;
        }
        function defineDate() {
            var start, end;
            if ($scope.pipStartDate !== null && $scope.pipStartDate !== undefined) {
                start = _.isDate($scope.pipStartDate) ? $scope.pipStartDate : null;
                if (!start) {
                    start = getDateJSON($scope.pipStartDate);
                }
                $scope.data.startDate = pipDateTime.toStartDay(start);
                $scope.data.startTime = (new Date(start) - $scope.data.startDate) / (60 * 1000);
            }
            if ($scope.pipEndDate !== null && $scope.pipEndDate !== undefined) {
                end = _.isDate($scope.pipEndDate) ? $scope.pipEndDate : null;
                if (!start) {
                    end = getDateJSON($scope.pipEndDate);
                }
                $scope.data.endDate = pipDateTime.toStartDay(end);
                $scope.data.endTime = (new Date(end) - $scope.data.endDate) / (60 * 1000);
            }
            validateStartDate();
            $scope.data.duration = setDuration();
            setDate();
        }
        function getTimeInterval() {
            var result, i, j, minutes;
            result = [];
            for (i = 0; i < 24; i++) {
                for (j = 0; j < 2; j++) {
                    minutes = j * 30;
                    result.push({
                        id: i * 60 + minutes,
                        time: _.pad(i.toString(), 3, '0').substr(0, 2) + ':' + _.pad(minutes.toString(), 2, '0')
                    });
                }
            }
            return result;
        }
        function toBoolean(value) {
            if (value == null)
                return false;
            if (!value)
                return false;
            value = value.toString().toLowerCase();
            return value == '1' || value == 'true';
        }
        function initDate() {
            $scope.data.startDate = null;
            $scope.data.startTime = null;
            $scope.data.endDate = null;
            $scope.data.endTime = null;
            $scope.data.duration = null;
            $scope.showTime = !toBoolean($scope.pipHideTime);
        }
        $scope.intervalTimeCollection = getTimeInterval();
        $scope.data = {};
        initDate();
        defineDate();
        $scope.onChangeStartDate = function (newV) {
            validateStartDate();
            $scope.data.duration = setDuration();
            setDate();
            $scope.pipChanged();
        };
        $scope.onChangeEndDate = function () {
            validateEndDate();
            $scope.data.duration = setDuration();
            setDate();
            $scope.pipChanged();
        };
        $scope.onChangeStartTime = function () {
            if (!$scope.data.startDate) {
                $scope.data.startDate = pipDateTime.toStartDay(new Date());
            }
            validateStartDate();
            $scope.data.duration = setDuration();
            setDate();
            $scope.pipChanged();
        };
        $scope.onChangeEndTime = function () {
            if (!$scope.data.endDate) {
                $scope.data.endDate = pipDateTime.toStartDay(new Date());
            }
            validateEndDate();
            $scope.data.duration = setDuration();
            setDate();
            $scope.pipChanged();
        };
        $scope.isDisabled = function () {
            if ($scope.disabled) {
                return $scope.disabled();
            }
            return false;
        };
        $scope.$watchGroup([$scope.pipStartDate, $scope.pipEndDate], function () {
            if ($scope.data.bind) {
                initDate();
                defineDate();
            }
        });
        $scope.$watch($scope.disabled, function (newValue) {
            $scope.disableControls = newValue;
        });
        $element.addClass('pip-time-range-edit');
    }]);
})();
},{}],10:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('date_directive/date.html',
    '<div class="pip-date layout-row flex" tabindex="-1"><md-input-container class="input-container flex"><md-select class="pip-date-day flex" ng-disabled="disableControls" ng-model="day" placeholder="{{dayLabel}}" ng-change="onDayChanged()"><md-option ng-value="opt" ng-repeat="opt in days track by opt">{{:: opt }}</md-option></md-select></md-input-container><div class="input-container-separator flex-fixed"></div><md-input-container class="input-container flex"><md-select class="pip-date-monthflex" ng-disabled="disableControls" ng-model="month" placeholder="{{monthLabel}}" ng-change="onMonthChanged()"><md-option ng-value="opt.id" ng-repeat="opt in months track by opt.id">{{:: opt.name }}</md-option></md-select></md-input-container><div class="input-container-separator flex-fixed"></div><md-input-container class="input-container flex"><md-select class="pip-date-year flex" ng-disabled="disableControls" ng-model="year" placeholder="{{yearLabel}}" ng-change="onYearChanged()"><md-option ng-value="opt" ng-repeat="opt in years track by opt">{{:: opt }}</md-option></md-select></md-input-container></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('date_range_directive/date_range.html',
    '<div class="pip-date-range layout-row flex" tabindex="-1"><md-input-container ng-show="isDay()" class="input-container pip-day flex" ng-class="{\'flex-fixed\' : $mdMedia(\'gt-xs\')}"><md-select class="select-day" ng-class="{\'pip-no-line\' : pipNoLine}" ng-disable="{{disableControls}}" md-on-open="onDayClick()" ng-model="day" ng-change="onDayChanged()" placeholder="{{dayLabel}}" aria-label="DAY"><md-option ng-value="opt" ng-repeat="opt in days track by opt">{{nameDays[$index]}} {{ opt }}</md-option></md-select></md-input-container><md-input-container ng-show="isWeek()" class="input-container flex" ng-class="{\'flex-fixed\' : $mdMedia(\'gt-xs\')}"><md-select class="select-week" ng-class="{\'pip-no-line\' : pipNoLine}" ng-disable="{{disableControls}}" ng-model="week" ng-change="onWeekChange()" placeholder="{{weekLabel}}" aria-label="WEEK"><md-option ng-value="opt.id" ng-repeat="opt in weeks track by opt.id">{{ opt.name }}</md-option></md-select></md-input-container><div class="flex-fixed" ng-class="{\'space16\': $mdMedia(\'gt-xs\'), \'space8\': $mdMedia(\'xs\')}" ng-show="isDay() || isWeek()"></div><md-input-container ng-show="isMonth() && !monthFormatShort" class="input-container flex" ng-class="{\'flex-fixed\' : $mdMedia(\'gt-xs\')}"><md-select class="select-month" ng-class="{\'pip-no-line\' : pipNoLine}" ng-disable="{{disableControls}}" md-on-open="onMonthClick()" ng-model="month" ng-change="onMonthChanged()" placeholder="{{monthLabel}}" aria-label="MONTH"><md-option ng-value="opt.id" ng-repeat="opt in months track by opt.id">{{ opt.name }}</md-option></md-select></md-input-container><md-input-container ng-show="isMonth() && monthFormatShort" class="flex input-container" ng-class="{\'flex-fixed\' : $mdMedia(\'gt-xs\')}"><md-select class="select-month" ng-class="{\'pip-no-line\' : pipNoLine}" ng-disable="{{disableControls}}" md-on-open="onMonthClick()" ng-model="month" ng-change="onMonthChanged()" placeholder="{{monthLabel}}" aria-label="MONTH"><md-option ng-value="opt.id" ng-repeat="opt in shortMonths track by opt.id">{{ opt.name }}</md-option></md-select></md-input-container><div class="flex-fixed" ng-class="{\'space16\': $mdMedia(\'gt-xs\'), \'space8\': $mdMedia(\'xs\')}" ng-show="isMonth()"></div><md-input-container class="input-container flex" ng-class="{\'flex-fixed\' : $mdMedia(\'gt-xs\')}"><md-select class="select-year" ng-class="{\'pip-no-line\' : pipNoLine}" ng-disable="{{disableControls}}" md-on-open="onYearClick()" ng-model="year" ng-change="onYearChanged()" placeholder="{{yearLabel}}" aria-label="YEAR"><md-option ng-value="opt" ng-repeat="opt in years track by opt">{{ opt }}</md-option></md-select></md-input-container></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('time_range_edit_directive/time_range_edit.html',
    '<div class="event-edit layout-row layout-xs-column flex layout-align-start-start"><div flex="47" class="start-time-container"><p class="text-caption text-grey">{{startLabel}}</p><div class="layout-row layout-align-space-between-center"><div class="pip-datepicker-container" flex="49"><md-datepicker ng-model="data.startDate" xmd-placeholder="{{startLabel}}" ng-change="onChangeStartDate()" ng-disabled="isDisabled()" aria-label="START-DATE"></md-datepicker></div><div flex="" ng-if="showTime"><md-input-container class="input-container"><md-select aria-label="START-TIME" ng-model="data.startTime" ng-disabled="isDisabled()" ng-change="onChangeStartTime(data.startTime)"><md-option ng-value="opt.id" ng-repeat="opt in intervalTimeCollection track by opt.id">{{ opt.time }}</md-option></md-select></md-input-container></div></div></div><div flex="47" class="end-time-container"><p class="text-caption text-grey">{{endLabel}}</p><div class="layout-row layout-align-space-between-center"><div class="pip-datepicker-container flex-49"><md-datepicker ng-model="data.endDate" xmd-placeholder="{{endLabel}}" ng-disabled="isDisabled()" ng-change="onChangeEndDate()" aria-label="END-DATE"></md-datepicker></div><div flex="" ng-if="showTime"><md-input-container class="input-container"><md-select aria-label="END-TIME" ng-model="data.endTime" ng-change="onChangeEndTime()" ng-disabled="isDisabled()"><md-option ng-value="opt.id" ng-repeat="opt in intervalTimeCollection track by opt.id">{{ opt.time }}</md-option></md-select></md-input-container></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('time_range_directive/time_range.html',
    '<p><span ng-if="data.start != null">{{data.start | formatLongDateTime}}</span> <span class="separator" ng-if="data.start && data.end">-</span> <span ng-if="data.end != null">{{data.end | formatLongDateTime}}</span></p>');
}]);
})();



},{}]},{},[10,7,4,5,2,3,1,6,8,9])(10)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0ZS9kYXRlLnRzIiwic3JjL2RhdGUvZGF0ZV9maWx0ZXIudHMiLCJzcmMvZGF0ZS9kYXRlX3NlcnZpY2UudHMiLCJzcmMvZGF0ZV9kaXJlY3RpdmUvZGF0ZS50cyIsInNyYy9kYXRlX3JhbmdlX2RpcmVjdGl2ZS9kYXRlX3JhbmdlLnRzIiwic3JjL2RhdGVzLnRzIiwic3JjL2RlcGVuZGVuY2llcy90cmFuc2xhdGUuanMiLCJzcmMvdGltZV9yYW5nZV9kaXJlY3RpdmUvdGltZV9yYW5nZS50cyIsInNyYy90aW1lX3JhbmdlX2VkaXRfZGlyZWN0aXZlL3RpbWVfcmFuZ2VfZWRpdC50cyIsInRlbXAvcGlwLXdlYnVpLWRhdGVzLWh0bWwubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDO0FBRWIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7SUFDMUIscUJBQXFCLEVBQUUsb0JBQW9CO0NBQzlDLENBQUMsQ0FBQzs7QUNKSCxZQUFZLENBQUM7QUFFYiwwQkFBMEIsV0FBZ0I7SUFDdEMsVUFBVSxDQUFDO0lBRVgsTUFBTSxDQUFDLFVBQVUsS0FBVSxFQUFFLE1BQWM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRCxrQ0FBa0MsV0FBZ0I7SUFDOUMsVUFBVSxDQUFDO0lBRVgsTUFBTSxDQUFDLFVBQVUsS0FBVSxFQUFFLE1BQWM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVELDhCQUE4QixXQUFnQjtJQUMxQyxVQUFVLENBQUM7SUFFWCxNQUFNLENBQUMsVUFBVSxLQUFVO1FBQ3ZCLE1B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QUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixRQUFRLEVBQUUsQ0FBQztnQkFDWCxVQUFVLEVBQUUsQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsVUFBVSxRQUFRO1lBQzdDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBR0gsUUFBUSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FDSixDQUFDO0FBRU4sQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7QUM3U0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncGlwRGF0ZVRpbWUnLCBbXHJcbiAgICAncGlwRGF0ZVRpbWUuU2VydmljZScsICdwaXBEYXRlVGltZS5GaWx0ZXInXHJcbl0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0VGltZSh2YWx1ZSwgZm9ybWF0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZU9wdGlvbmFsRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXREYXRlT3B0aW9uYWwodmFsdWUsIGZvcm1hdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdEYXRlRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdExvbmdEYXRlKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXRlRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFNob3J0RGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE1pZGRsZURhdGVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TWlkZGxlRGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE1vbnRoRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRNb250aCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdNb250aEZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRMb25nTW9udGgodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRZZWFyRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFllYXIodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRXZWVrRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFdlZWsodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydFdlZWtGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0U2hvcnRXZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXRlVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRTaG9ydERhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TWlkZGxlRGF0ZVRpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TWlkZGxlRGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nRGF0ZVRpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TG9uZ0RhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55LCBmaXJzdFRpbWU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRTaG9ydERhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSwgZmlyc3RUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nRGF0ZUxvbmdUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSwgZmlyc3RUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TG9uZ0RhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmJGb3JtYXREYXRlTG9uZ1RpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55LCBmaXJzdFRpbWU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5iYkZvcm1hdERhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RnVsbERhdGVUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdEZ1bGxEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0VGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRTaG9ydFRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRMb25nVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0RGF5T2ZXZWVrRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFNob3J0RGF5T2ZXZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RheU9mV2Vla0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRMb25nRGF5T2ZXZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ01vbnRoRGF5RmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdExvbmdNb250aERheSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0TW9udGhEYXlGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0U2hvcnRNb250aERheSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGVSYW5nZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdERhdGVSYW5nZSh2YWx1ZTEsIHZhbHVlMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lUmFuZ2VGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXREYXRlVGltZVJhbmdlKHZhbHVlMSwgdmFsdWUyKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0SVNPV2Vla0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRJU09XZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnRJU09XZWVrRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFNob3J0SVNPV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdElTT1dlZWtPcmRpbmFsRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdElTT1dlZWtPcmRpbmFsKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZVlGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0RGF0ZVkodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nRGF0ZVlGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TG9uZ0RhdGVZKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lTG9uZyh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmdGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZyh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnRGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0RmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kcyh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdEVsYXBzZWRJbnRlcnZhbEZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnksIHN0YXJ0OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRFbGFwc2VkSW50ZXJ2YWwodmFsdWUsIHN0YXJ0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0ZUpTT05GaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZ2V0RGF0ZUpTT04odmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdwaXBEYXRlVGltZS5GaWx0ZXInLCBbXSlcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFRpbWUnLCBmb3JtYXRUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0RGF0ZU9wdGlvbmFsJywgZm9ybWF0RGF0ZU9wdGlvbmFsRmlsdGVyKVxyXG4gICAgLmZpbHRlcignYmJGb3JtYXREYXRlTG9uZ1RpbWUnLCBiYkZvcm1hdERhdGVMb25nVGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFNob3J0RGF0ZScsIGZvcm1hdFNob3J0RGF0ZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdE1pZGRsZURhdGUnLCBmb3JtYXRNaWRkbGVEYXRlRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ0RhdGUnLCBmb3JtYXRMb25nRGF0ZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdE1vbnRoJywgZm9ybWF0TW9udGhGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nTW9udGgnLCBmb3JtYXRMb25nTW9udGhGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRZZWFyJywgZm9ybWF0WWVhckZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFdlZWsnLCBmb3JtYXRXZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnRXZWVrJywgZm9ybWF0U2hvcnRXZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnREYXRlVGltZScsIGZvcm1hdFNob3J0RGF0ZVRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRNaWRkbGVEYXRlVGltZScsIGZvcm1hdE1pZGRsZURhdGVUaW1lRmlsdGVyKSAgICBcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdEYXRlVGltZScsIGZvcm1hdExvbmdEYXRlVGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFNob3J0RGF0ZUxvbmdUaW1lJywgZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWUnLCBmb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWVGaWx0ZXIpICAgIFxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ0RhdGVMb25nVGltZScsIGZvcm1hdExvbmdEYXRlTG9uZ1RpbWVGaWx0ZXIpICAgIFxyXG4gICAgLmZpbHRlcignZm9ybWF0RnVsbERhdGVUaW1lJywgZm9ybWF0RnVsbERhdGVUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnRUaW1lJywgZm9ybWF0U2hvcnRUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ1RpbWUnLCBmb3JtYXRMb25nVGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFNob3J0RGF5T2ZXZWVrJywgZm9ybWF0U2hvcnREYXlPZldlZWtGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nRGF5T2ZXZWVrJywgZm9ybWF0TG9uZ0RheU9mV2Vla0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdNb250aERheScsIGZvcm1hdExvbmdNb250aERheUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFNob3J0TW9udGhEYXknLCBmb3JtYXRTaG9ydE1vbnRoRGF5RmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0RGF0ZVJhbmdlJywgZm9ybWF0RGF0ZVJhbmdlRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0RGF0ZVRpbWVSYW5nZScsIGZvcm1hdERhdGVUaW1lUmFuZ2VGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRJU09XZWVrJywgZm9ybWF0SVNPV2Vla0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFNob3J0SVNPV2VlaycsIGZvcm1hdFNob3J0SVNPV2Vla0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdElTT1dlZWtPcmRpbmFsJywgZm9ybWF0SVNPV2Vla09yZGluYWxGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXREYXRlWScsIGZvcm1hdERhdGVZRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ0RhdGVZJywgZm9ybWF0TG9uZ0RhdGVZRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nJywgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZycsIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmdGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0JywgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0JywgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnRGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHMnLCBmb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHNGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRFbGFwc2VkSW50ZXJ2YWwnLCBmb3JtYXRFbGFwc2VkSW50ZXJ2YWxGaWx0ZXIpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVDb25maWcge1xyXG4gICAgdGltZVpvbmU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVRpbWVTZXJ2aWNlIHtcclxuICAgIHJlYWRvbmx5IGNvbmZpZzogRGF0ZVRpbWVDb25maWc7XHJcbiAgICB1c2VUaW1lWm9uZShvZmZzZXQ6IG51bWJlcik7XHJcblxyXG4gICAgYmJGb3JtYXREYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZzsgXHJcbiAgICBcclxuICAgIGZvcm1hdFRpbWUodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXREYXRlT3B0aW9uYWwodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRTaG9ydERhdGUodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdE1pZGRsZURhdGUodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdExvbmdEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRNb250aCh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TG9uZ01vbnRoKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRZZWFyKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRTaG9ydFdlZWsodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFNob3J0RGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdE1pZGRsZURhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmc7ICAgIFxyXG4gICAgZm9ybWF0TG9uZ0RhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRGdWxsRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZzsgICAgXHJcbiAgICBmb3JtYXRMb25nRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmc7ICAgIFxyXG4gICAgZm9ybWF0U2hvcnRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRMb25nVGltZSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0U2hvcnREYXlPZldlZWsodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdExvbmdEYXlPZldlZWsodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdExvbmdNb250aERheSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0U2hvcnRNb250aERheSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0RGF0ZVJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdERhdGVUaW1lUmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0SVNPV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0U2hvcnRJU09XZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRJU09XZWVrT3JkaW5hbCh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0RGF0ZVkodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdExvbmdEYXRlWSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydCh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRFbGFwc2VkSW50ZXJ2YWwodmFsdWU6IGFueSwgc3RhcnQ6IGFueSk6IHN0cmluZztcclxuXHJcbiAgICBnZXREYXRlSlNPTihkYXRlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBnZXROZXh0U3RhcnQodmFsdWU6IGFueSwgY2F0ZWdvcnk6IHN0cmluZyk6IGFueTtcclxuICAgIGdldFByZXZTdGFydCh2YWx1ZTogYW55LCBjYXRlZ29yeTogc3RyaW5nKTogYW55O1xyXG4gICAgZ2V0Tm93U3RhcnQoY2F0ZWdvcnk6IHN0cmluZyk6IGFueTtcclxuXHJcbiAgICBhZGRIb3Vycyh2YWx1ZTogYW55LCBob3VyczogbnVtYmVyKTogYW55O1xyXG4gICAgdG9TdGFydERheSh2YWx1ZTogYW55KTogYW55O1xyXG4gICAgdG9FbmREYXkodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnk7XHJcbiAgICB0b1N0YXJ0V2Vlayh2YWx1ZTogYW55KTogYW55O1xyXG4gICAgdG9FbmRXZWVrKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55O1xyXG4gICAgdG9TdGFydE1vbnRoKHZhbHVlOiBhbnkpOiBhbnk7XHJcbiAgICB0b0VuZE1vbnRoKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55O1xyXG4gICAgdG9TdGFydFllYXIodmFsdWU6IGFueSk6IGFueTtcclxuICAgIHRvRW5kWWVhcih2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueTtcclxuIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlVGltZVByb3ZpZGVyIGV4dGVuZHMgSURhdGVUaW1lU2VydmljZSwgbmcuSVNlcnZpY2VQcm92aWRlciB7XHJcblxyXG59XHJcblxyXG5jbGFzcyBEYXRlVGltZSBpbXBsZW1lbnRzIElEYXRlVGltZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBEYXRlVGltZUNvbmZpZztcclxuICAgIHByb3RlY3RlZCBfbW9tZW50UmFuZ2VkID0gbmV3IEFycmF5KCd5ZWFyJywgJ21vbnRoJywgJ3dlZWsnLCAnaXNvd2VlaycsICdkYXknKTtcclxuICAgIHByb3RlY3RlZCBfZGVmYXVsdEZvcm1hdCA9ICdMTCdcclxuXHJcbiAgICBwcml2YXRlIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gYW5ndWxhci5pc1VuZGVmaW5lZCh2YWx1ZSkgfHwgdmFsdWUgPT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSYW5nZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdkYXknO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fbW9tZW50UmFuZ2VkLmluZGV4T2YodmFsdWUpXHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdkYXknXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbWVudFJhbmdlZFtpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3BlcmF0aW9uUmFuZ2UodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZGF5JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYW5nZSA9IHZhbHVlID09ICdpc293ZWVrJyA/ICd3ZWVrJyA6IHZhbHVlLFxyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuX21vbWVudFJhbmdlZC5pbmRleE9mKHJhbmdlKVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZGF5J1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb21lbnRSYW5nZWRbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdERhdGVUaW1lKHZhbHVlOiBhbnksIGJhc2ljRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIGZvcm1hdFRwbDogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybWF0VHBsID0gYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChmb3JtYXRUcGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RGF0ZVRpbWVZKHZhbHVlOiBhbnksIGJhc2ljRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIG5vd0RhdGU6IGFueSxcclxuICAgICAgICAgICAgZm9ybWF0TW9tZW50OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3dEYXRlID0gbW9tZW50KCk7XHJcbiAgICAgICAgZm9ybWF0TW9tZW50ID0gbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdChiYXNpY0Zvcm1hdCA/IGJhc2ljRm9ybWF0IDogdGhpcy5fZGVmYXVsdEZvcm1hdCk7XHJcblxyXG4gICAgICAgIGlmIChub3dEYXRlLnllYXIoKSA9PSBkYXRlLnllYXIoKSkge1xyXG4gICAgICAgICAgICBmb3JtYXRNb21lbnQgPSBmb3JtYXRNb21lbnQucmVwbGFjZSgvWS9nLCAnJykucmVwbGFjZSgvXlxcV3xcXFckfFxcV1xcVy8sICcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChmb3JtYXRNb21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RGF5KHZhbHVlOiBhbnksIGJhc2ljRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIGZvcm1hdCA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQpLFxyXG4gICAgICAgICAgICBmb3JtYXRNb250aFllYXJsZXNzID0gZm9ybWF0LnJlcGxhY2UoL1kvZywgJycpLnJlcGxhY2UoL15cXFd8XFxXJHxcXFdcXFcvLCAnJykucmVwbGFjZSgvTS9nLCAnJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoZm9ybWF0TW9udGhZZWFybGVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXRNb250aERheSh2YWx1ZTogYW55LCBiYXNpY0Zvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICBmb3JtYXQgPSBiYXNpY0Zvcm1hdCA/IGJhc2ljRm9ybWF0IDogdGhpcy5fZGVmYXVsdEZvcm1hdCxcclxuICAgICAgICAgICAgZm9ybWF0TEwgPSBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KGZvcm1hdCksXHJcbiAgICAgICAgICAgIGZvcm1hdFllYXJsZXNzTEwgPSBmb3JtYXRMTC5yZXBsYWNlKC9ZL2csICcnKS5yZXBsYWNlKC9eXFxXfFxcVyR8XFxXXFxXLywgJycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KGZvcm1hdFllYXJsZXNzTEwpO1xyXG4gICAgfVxyXG5cclxuLy8gIHVzZSB0aW1lem9uZSBub3QgdGVzdGluZ1xyXG4gICAgcHJpdmF0ZSBmb3JtYXRSYW5nZSh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnksIGJhc2ljRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBkYXRlU3RhcnQ6IGFueSxcclxuICAgICAgICAgICAgZGF0ZUVuZDogYW55LFxyXG4gICAgICAgICAgICBmb3JtYXQgPSBiYXNpY0Zvcm1hdCA/IGJhc2ljRm9ybWF0IDogdGhpcy5fZGVmYXVsdEZvcm1hdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUxKSkge1xyXG4gICAgICAgICAgICBkYXRlU3RhcnQgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGVTdGFydCA9ICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSA/ICBtb21lbnQodmFsdWUxKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKSA6IG1vbWVudCh2YWx1ZTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZTIpKSB7XHJcbiAgICAgICAgICAgIGRhdGVFbmQgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGVFbmQgPSAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkgPyAgbW9tZW50KHZhbHVlMikudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSkgOiBtb21lbnQodmFsdWUyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlU3RhcnQgPT09IG51bGwgJiYgZGF0ZUVuZCA9PT0gbnVsbCkgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBpZiAoZGF0ZVN0YXJ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlRW5kLmZvcm1hdChiYXNpY0Zvcm1hdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlRW5kID09PSBudWxsIHx8IGRhdGVTdGFydC5pc1NhbWUoZGF0ZUVuZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGVTdGFydC5mb3JtYXQoYmFzaWNGb3JtYXQpOztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlU3RhcnQuaXNBZnRlcihkYXRlRW5kKSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvIGxvY2FsaXphdGlvblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGUgcmFuZ2UgZXJyb3IuIFN0YXJ0IGRhdGUgaXMgbW9yZSB0aGFuIGVuZCBkYXRlLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGVTdGFydC55ZWFyKCkgPT0gZGF0ZUVuZC55ZWFyKCkpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGVTdGFydC5tb250aCgpID09IGRhdGVFbmQubW9udGgoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF5KGRhdGVTdGFydCwgYmFzaWNGb3JtYXQpICsgJy0nICsgZGF0ZUVuZC5mb3JtYXQoYmFzaWNGb3JtYXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TW9udGhEYXkoZGF0ZVN0YXJ0LCBiYXNpY0Zvcm1hdCkgKyAnLScgKyBkYXRlRW5kLmZvcm1hdChiYXNpY0Zvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZVN0YXJ0LmZvcm1hdChiYXNpY0Zvcm1hdCkgKyAnLScgKyBkYXRlRW5kLmZvcm1hdChiYXNpY0Zvcm1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9TdGFydFJhbmdlKHZhbHVlOiBhbnksIHJhbmdlOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0ZS5zdGFydE9mKHJhbmdlKS50b0RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvRW5kUmFuZ2UodmFsdWU6IGFueSwgcmFuZ2U6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIHJlc3VsdDogYW55LFxyXG4gICAgICAgICAgICBtc3NPZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYW5ndWxhci5pc051bWJlcihvZmZzZXQpKSB7XHJcbiAgICAgICAgICAgIG1zc09mZnNldCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobXNzT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGUuc3RhcnRPZihyYW5nZSkuYWRkKG1zc09mZnNldCwgJ21pbGxpc2Vjb25kcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGUuc3RhcnRPZihyYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0ZS5zdGFydE9mKHJhbmdlKS50b0RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvRGF0ZVdpdGhUaW1lKHZhbHVlOiBhbnksIGZvcm1hdERhdGU6IHN0cmluZywgZm9ybWF0VGltZTogc3RyaW5nLCBmaXJzdFRpbWU/OiBib29sZWFuKTogYW55IHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICByZXN1bHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgbm93RGF0ZTogYW55O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm93RGF0ZSA9IG1vbWVudCgpO1xyXG4gICAgICAgIGlmIChmaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZGF0ZS5mb3JtYXQoZm9ybWF0VGltZSkgKyAnICcgKyBkYXRlLmZvcm1hdChmb3JtYXREYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBkYXRlLmZvcm1hdChmb3JtYXREYXRlKSArICcgJyArIGRhdGUuZm9ybWF0KGZvcm1hdFRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvVG9kYXlEYXRlKHZhbHVlOiBhbnksIGZvcm1hdERhdGU6IHN0cmluZywgZm9ybWF0VGltZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICByZXN1bHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgbm93RGF0ZTogYW55O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm93RGF0ZSA9IG1vbWVudCgpO1xyXG5cclxuICAgICAgICBpZiAobm93RGF0ZS55ZWFyKCkgPT0gZGF0ZS55ZWFyKCkgJiYgbm93RGF0ZS5tb250aCgpID09IGRhdGUubW9udGgoKSAmJiBub3dEYXRlLmRheSgpID09IGRhdGUuZGF5KCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZGF0ZS5mb3JtYXQoZm9ybWF0VGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZGF0ZS5mb3JtYXQoZm9ybWF0RGF0ZSkgKyAnICcgKyBkYXRlLmZvcm1hdChmb3JtYXRUaW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogRGF0ZVRpbWVDb25maWcpIHsgXHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnIHx8IHsgdGltZVpvbmU6IG51bGwgfTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldCBjb25maWcoKTogRGF0ZVRpbWVDb25maWcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZVRpbWVab25lKG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnLnRpbWVab25lID0gb2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgLy8gZm9ybWF0aW5nIGZ1bmN0aW9ucyBcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyB0b2RvIE9wdGlvbmFsXHJcbiAgICBwdWJsaWMgZm9ybWF0VGltZSh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMTEwnKTtcclxuICAgIH1cclxuICAgIC8vIHRvZG8gT3B0aW9uYWxcclxuICAgIHB1YmxpYyBmb3JtYXREYXRlT3B0aW9uYWwodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGUgZm9ybWF0c1xyXG4gICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0wnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmJGb3JtYXREYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlV2l0aFRpbWUodmFsdWUsICdNTS9ERC9ZWScsICdMVFMnLCBmaXJzdFRpbWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TWlkZGxlRGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTEwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TW9udGgodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdNTScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nTW9udGgodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdNTU1NJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFllYXIodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdZWVlZJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFdlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICd3dycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydFdlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICd3Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlV2l0aFRpbWUodmFsdWUsICdMJywgJ0xUJyk7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRNaWRkbGVEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ2xsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMTEwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0RnVsbERhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTExMTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydERhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0RhdGVXaXRoVGltZSh2YWx1ZSwgJ0wnLCAnTFRTJywgZmlyc3RUaW1lKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdE1pZGRsZURhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0RhdGVXaXRoVGltZSh2YWx1ZSwgJ2xsJywgJ0xUUycsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlV2l0aFRpbWUodmFsdWUsICdMTCcsICdMVFMnLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydFRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMVCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xUUycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydERheU9mV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ2RkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXlPZldlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdkZGRkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIGZvcm1hdFRpbWVOdW1iZXIodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMTEwnKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgZm9ybWF0TG9uZ1RpbWVOdW1iZXIodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMTExMJyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8vLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ01vbnRoRGF5KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdE1vbnRoRGF5KHZhbHVlLCAnTEwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnRNb250aERheSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRNb250aERheSh2YWx1ZSwgJ0wnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZVJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UmFuZ2UodmFsdWUxLCB2YWx1ZTIsICdMTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXREYXRlVGltZVJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UmFuZ2UodmFsdWUxLCB2YWx1ZTIsICdMTEwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpc28gZnVuY3Rpb25cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgcHVibGljIGZvcm1hdElTT1dlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdXVycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydElTT1dlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdXJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdElTT1dlZWtPcmRpbmFsKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnV28nKTtcclxuICAgIH1cclxuICAgIC8vIHNwZWNpYWwgZm9ybWF0cyBcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8geWVhciBvcHRpb24gZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgeWVhciBpcyBub3QgZXF1YWwgdG8sIHRoZSBkYXRlIG9mIFxyXG4gICAgcHVibGljIGZvcm1hdERhdGVZKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lWSh2YWx1ZSwgJ0wnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB5ZWFyIG9wdGlvbiBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCB5ZWFyIGlzIG5vdCBlcXVhbCB0bywgdGhlIGRhdGUgb2ZcclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZVkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWVZKHZhbHVlLCAnTEwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAvLyBTZXB0ZW1iZXIgNCAxOTg2IDg6MzA6MjUgUE0gb3IgODozMDoyNSBQTVxyXG4gICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lTG9uZyh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1RvZGF5RGF0ZSh2YWx1ZSwgJ0xMJywgJ0xUUycpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgLy8gU2VwIDQgMTk4NiA4OjMwOjI1IFBNIG9yIDg6MzA6MjUgUE1cclxuICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvVG9kYXlEYXRlKHZhbHVlLCAnTEwnLCAnTFRTJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAvLyBTZXB0ZW1iZXIgNCAxOTg2IDg6MzAgUE0gb3IgODozMCBQTVxyXG4gICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Ub2RheURhdGUodmFsdWUsICdMTCcsICdMVCcpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgLy8gU2VwIDQgMTk4NiA4OjMwIFBNIG9yIDg6MzAgUE1cclxuICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1RvZGF5RGF0ZSh2YWx1ZSwgJ2xsJywgJ0xUJylcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2RvXHJcbiAgICBwdWJsaWMgZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2RvXHJcbiAgICBwdWJsaWMgZm9ybWF0RWxhcHNlZEludGVydmFsKHZhbHVlOiBhbnksIHN0YXJ0OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIG5vd0RhdGU6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwoc3RhcnQpKSB7XHJcbiAgICAgICAgICAgIG5vd0RhdGUgPSBtb21lbnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3dEYXRlID0gbW9tZW50KHN0YXJ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkgfHwgIW5vd0RhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZnJvbU5vdyhub3dEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0ZUpTT04oZGF0ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobW9tZW50KGRhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBuYXZpZ2F0aW9uIGZ1bmN0aW9ucyBcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHB1YmxpYyBnZXROZXh0U3RhcnQodmFsdWU6IGFueSwgY2F0ZWdvcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgcmFuZ2U6IHN0cmluZyxcclxuICAgICAgICAgICAgcmVzdWx0OiBhbnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5nZXRSYW5nZShjYXRlZ29yeSk7XHJcbiAgICAgICAgcmVzdWx0ID0gbW9tZW50KGRhdGUpLnN0YXJ0T2YocmFuZ2UpLmFkZCh0aGlzLmdldE9wZXJhdGlvblJhbmdlKHJhbmdlKSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQudG9EYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFByZXZTdGFydCh2YWx1ZTogYW55LCBjYXRlZ29yeTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICByYW5nZTogc3RyaW5nLFxyXG4gICAgICAgICAgICByZXN1bHQ6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLmdldFJhbmdlKGNhdGVnb3J5KTtcclxuICAgICAgICByZXN1bHQgPSBtb21lbnQoZGF0ZSkuc3RhcnRPZihyYW5nZSkuYWRkKC0xLCB0aGlzLmdldE9wZXJhdGlvblJhbmdlKHJhbmdlKSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQudG9EYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vd1N0YXJ0KGNhdGVnb3J5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIHJhbmdlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHJlc3VsdDogYW55O1xyXG5cclxuICAgICAgICBkYXRlID0gbW9tZW50KCk7XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYW5nZSA9IHRoaXMuZ2V0UmFuZ2UoY2F0ZWdvcnkpXHJcbiAgICAgICAgcmVzdWx0ID0gbW9tZW50KGRhdGUpLnN0YXJ0T2YocmFuZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0LnRvRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRIb3Vycyh2YWx1ZTogYW55LCBob3VyczogbnVtYmVyKTogYW55IHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkgfHwgIWFuZ3VsYXIuaXNOdW1iZXIoaG91cnMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGUuYWRkKGhvdXJzLCAnaG91cnMnKS50b0RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdGFydERheSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0YXJ0UmFuZ2UodmFsdWUsICdkYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9FbmREYXkodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRW5kUmFuZ2UodmFsdWUsICdkYXknLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0YXJ0V2Vlayh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0YXJ0UmFuZ2UodmFsdWUsICd3ZWVrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvRW5kV2Vlayh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9FbmRSYW5nZSh2YWx1ZSwgJ3dlZWsnLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0YXJ0TW9udGgodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdGFydFJhbmdlKHZhbHVlLCAnbW9udGgnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9FbmRNb250aCh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9FbmRSYW5nZSh2YWx1ZSwgJ21vbnRoJywgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdGFydFllYXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdGFydFJhbmdlKHZhbHVlLCAneWVhcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0VuZFllYXIodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRW5kUmFuZ2UodmFsdWUsICd5ZWFyJywgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIERhdGVUaW1lU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9kYXRldGltZTogRGF0ZVRpbWU7XHJcbiAgICBwcml2YXRlIF9jb25maWc6IERhdGVUaW1lQ29uZmlnO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBkYXRldGltZTogRGF0ZVRpbWUsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9jb25maWcgPSB7IHRpbWVab25lOiBudWxsfTtcclxuICAgICAgICB0aGlzLl9kYXRldGltZSA9IGRhdGV0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZG8gT3B0aW9uYWxcclxuICAgIHB1YmxpYyB1c2VUaW1lWm9uZShvZmZzZXQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS51c2VUaW1lWm9uZShvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZG8gT3B0aW9uYWxcclxuICAgIHB1YmxpYyBmb3JtYXRUaW1lKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0VGltZSh2YWx1ZSwgZm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2RvIE9wdGlvbmFsXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZU9wdGlvbmFsKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0RGF0ZU9wdGlvbmFsKHZhbHVlLCBmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydERhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFNob3J0RGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdE1pZGRsZURhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdE1pZGRsZURhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TG9uZ0RhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRNb250aCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TW9udGgodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nTW9udGgodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdExvbmdNb250aCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFllYXIodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFllYXIodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRXZWVrKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnRXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRTaG9ydFdlZWsodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydERhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRTaG9ydERhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TWlkZGxlRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdE1pZGRsZURhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRMb25nRGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRGdWxsRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdEZ1bGxEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRTaG9ydERhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdExvbmdEYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJiRm9ybWF0RGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5iYkZvcm1hdERhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRTaG9ydFRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TG9uZ1RpbWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydERheU9mV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0U2hvcnREYXlPZldlZWsodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRMb25nRGF5T2ZXZWVrKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ01vbnRoRGF5KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRMb25nTW9udGhEYXkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydE1vbnRoRGF5KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRTaG9ydE1vbnRoRGF5KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZVJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdERhdGVSYW5nZSh2YWx1ZTEsIHZhbHVlMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdERhdGVUaW1lUmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0RGF0ZVRpbWVSYW5nZSh2YWx1ZTEsIHZhbHVlMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXNvIGZ1bmN0aW9uXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRJU09XZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRJU09XZWVrKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnRJU09XZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRTaG9ydElTT1dlZWsodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRJU09XZWVrT3JkaW5hbCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0SVNPV2Vla09yZGluYWwodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gc3BlY2lhbCBmb3JtYXRzIFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyB5ZWFyIG9wdGlvbiBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCB5ZWFyIGlzIG5vdCBlcXVhbCB0bywgdGhlIGRhdGUgb2YgXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZVkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdERhdGVZKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB5ZWFyIG9wdGlvbiBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCB5ZWFyIGlzIG5vdCBlcXVhbCB0bywgdGhlIGRhdGUgb2ZcclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZVkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdExvbmdEYXRlWSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgLy8gU2VwdGVtYmVyIDQgMTk4NiA4OjMwOjI1IFBNIG9yIDg6MzA6MjUgUE1cclxuICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lTG9uZyh2YWx1ZSk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgIC8vIFNlcCA0IDE5ODYgODozMDoyNSBQTSBvciA4OjMwOjI1IFBNXHJcbiAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZyh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZyh2YWx1ZSk7XHJcbiAgICB9ICAgICBcclxuXHJcbiAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAvLyBTZXB0ZW1iZXIgNCAxOTg2IDg6MzAgUE0gb3IgODozMCBQTVxyXG4gICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnQodmFsdWUpO1xyXG4gICAgfSAgICAgXHJcblxyXG4gICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgLy8gU2VwIDQgMTk4NiA4OjMwIFBNIG9yIDg6MzAgUE1cclxuICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWUpO1xyXG4gICAgfSAgICAgXHJcblxyXG4gICAgLy8gdG9kb1xyXG4gICAgcHVibGljIGZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kcyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kcyh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG9kb1xyXG4gICAgcHVibGljIGZvcm1hdEVsYXBzZWRJbnRlcnZhbCh2YWx1ZTogYW55LCBzdGFydDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0RWxhcHNlZEludGVydmFsKHZhbHVlLCBzdGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGVKU09OKGRhdGU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmdldERhdGVKU09OKGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5hdmlnYXRpb24gZnVuY3Rpb25zIFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgcHVibGljIGdldE5leHRTdGFydCh2YWx1ZTogYW55LCBjYXRlZ29yeTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZ2V0TmV4dFN0YXJ0KHZhbHVlLCBjYXRlZ29yeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFByZXZTdGFydCh2YWx1ZTogYW55LCBjYXRlZ29yeTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZ2V0UHJldlN0YXJ0KHZhbHVlLCBjYXRlZ29yeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vd1N0YXJ0KGNhdGVnb3J5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5nZXROb3dTdGFydChjYXRlZ29yeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhvdXJzKHZhbHVlOiBhbnksIGhvdXJzOiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5hZGRIb3Vycyh2YWx1ZSwgaG91cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0YXJ0RGF5KHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS50b1N0YXJ0RGF5KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9FbmREYXkodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS50b0VuZERheSh2YWx1ZSwgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdGFydFdlZWsodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnRvU3RhcnRXZWVrKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9FbmRXZWVrKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudG9FbmRXZWVrKHZhbHVlLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0YXJ0TW9udGgodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnRvU3RhcnRNb250aCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvRW5kTW9udGgodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS50b0VuZE1vbnRoKHZhbHVlLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0YXJ0WWVhcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudG9TdGFydFllYXIodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0VuZFllYXIodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS50b0VuZFllYXIodmFsdWUsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBEYXRlVGltZVByb3ZpZGVyIGV4dGVuZHMgRGF0ZVRpbWUgaW1wbGVtZW50cyBJRGF0ZVRpbWVQcm92aWRlciB7XHJcbiAgICBwcml2YXRlIF90cmFuc2xhdGlvbjogRGF0ZVRpbWU7XHJcbiAgICBwcml2YXRlIF9zZXJ2aWNlOiBEYXRlVGltZVNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHsgdGltZVpvbmU6IG51bGwgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICRnZXQoKTogYW55IHtcclxuICAgICAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UgPSBuZXcgRGF0ZVRpbWVTZXJ2aWNlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdwaXBEYXRlVGltZS5TZXJ2aWNlJywgW10pXHJcbiAgICAucHJvdmlkZXIoJ3BpcERhdGVUaW1lJywgRGF0ZVRpbWVQcm92aWRlcik7XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIHRoaXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZScsIFsncGlwRGF0ZXMuVGVtcGxhdGVzJ10pO1xyXG5cclxuICAgIHRoaXNNb2R1bGUuZGlyZWN0aXZlKCdwaXBEYXRlJyxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU1vZGU6ICdAcGlwVGltZU1vZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAnJm5nRGlzYWJsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiAnPW5nTW9kZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5nQ2hhbmdlOiAnJidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2RhdGVfZGlyZWN0aXZlL2RhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAncGlwRGF0ZUNvbnRyb2xsZXInXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBUb2RvOiBSZW1vdmUgZGVwZW5kZW5jeSBvbiBUcmFuc2xhdGUuIFVzZSBtb21lbnQgbG9jYWxpemF0aW9uXHJcbiAgICB0aGlzTW9kdWxlLmNvbnRyb2xsZXIoJ3BpcERhdGVDb250cm9sbGVyJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGluamVjdG9yKSB7IC8vcGlwVHJhbnNsYXRlXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGxvY2FsZURhdGU6IGFueSA9IG1vbWVudC5sb2NhbGVEYXRhKCksXHJcbiAgICAgICAgICAgICAgICBtb21lbnRNb250aHMgPSBhbmd1bGFyLmlzQXJyYXkobG9jYWxlRGF0ZS5fbW9udGhzKSA/IGxvY2FsZURhdGUuX21vbnRocyA6IGxvY2FsZURhdGUuX21vbnRocy5mb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBtb21lbnREYXlzID0gYW5ndWxhci5pc0FycmF5KGxvY2FsZURhdGUuX3dlZWtkYXlzKSA/IGxvY2FsZURhdGUuX3dlZWtkYXlzIDogbG9jYWxlRGF0ZS5fd2Vla2RheXMuZm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgbW9tZW50U2hvcnREYXlzID0gbG9jYWxlRGF0ZS5fd2Vla2RheXNNaW4sXHJcbiAgICAgICAgICAgICAgICBtb21lbnRGaXJzdERheU9mV2VlayA9IGxvY2FsZURhdGUuX3dlZWsuZG93O1xyXG5cclxuICAgICAgICAgICAgdmFyIHBpcFRyYW5zbGF0ZSA9ICRpbmplY3Rvci5oYXMoJ3BpcFRyYW5zbGF0ZScpID8gJGluamVjdG9yLmdldCgncGlwVHJhbnNsYXRlJykgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBpcFRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcGlwVHJhbnNsYXRlLnNldFRyYW5zbGF0aW9ucygnZW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgREFZOiAnRGF5JyxcclxuICAgICAgICAgICAgICAgICAgICBNT05USDogJ01vbnRoJyxcclxuICAgICAgICAgICAgICAgICAgICBZRUFSOiAnWWVhcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGlwVHJhbnNsYXRlLnNldFRyYW5zbGF0aW9ucygncnUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgREFZOiAn0JTQtdC90YwnLFxyXG4gICAgICAgICAgICAgICAgICAgIE1PTlRIOiAn0JzQtdGB0Y/RhicsXHJcbiAgICAgICAgICAgICAgICAgICAgWUVBUjogJ9CT0L7QtCcgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF5TGFiZWwgPSBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCdEQVknKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb250aExhYmVsID0gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgnTU9OVEgnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS55ZWFyTGFiZWwgPSBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCdZRUFSJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF5TGFiZWwgPSAnRGF5JztcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb250aExhYmVsID0gJ01vbnRoJzsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUueWVhckxhYmVsID0gJ1llYXInO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZGF5TGlzdChtb250aCwgeWVhcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gMzEsIGRheXMgPSBbXSwgaTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IDQgfHwgbW9udGggPT09IDYgfHwgbW9udGggPT09IDkgfHwgbW9udGggPT09IDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSAzMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9udGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgbGVhcCB5ZWFyIChwcmltaXRpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0geWVhciAlIDQgPT09IDAgPyAyOSA6IDI4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbW9udGhMaXN0KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRocyA9IFtdLCBpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPD0gMTI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRocy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1vbWVudE1vbnRoc1tpLTFdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24geWVhckxpc3QoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFllYXIgPSAkc2NvcGUudGltZU1vZGUgPT09ICdmdXR1cmUnID8gY3VycmVudFllYXIgOiBjdXJyZW50WWVhciAtIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBlbmRZZWFyID0gJHNjb3BlLnRpbWVNb2RlID09PSAncGFzdCcgPyBjdXJyZW50WWVhciA6IGN1cnJlbnRZZWFyICsgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHllYXJzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS50aW1lTW9kZSA9PT0gJ3Bhc3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gZW5kWWVhcjsgaSA+PSBzdGFydFllYXI7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFycy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gc3RhcnRZZWFyOyBpIDw9IGVuZFllYXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFycy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geWVhcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkanVzdERheSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXlzID0gZGF5TGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRheXMubGVuZ3RoICE9PSBkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF5ID4gZGF5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRheSA9IGRheXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRheXMgPSBkYXlzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSh2KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2ID8gXy5pc0RhdGUodikgPyB2IDogbmV3IERhdGUodikgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheSA9IHZhbHVlID8gdmFsdWUuZ2V0RGF0ZSgpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtb250aCA9IHZhbHVlID8gdmFsdWUuZ2V0TW9udGgoKSArIDEgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHllYXIgPSB2YWx1ZSA/IHZhbHVlLmdldEZ1bGxZZWFyKCkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXkgbGlzdCBpZiBtb250aCBhbmQgeWVhciB3ZXJlIGNoYW5nZWRcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubW9udGggIT09IG1vbnRoICYmICRzY29wZS55ZWFyICE9PSB5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRheXMgPSBkYXlMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgdG8gc2NvcGVcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXkgPSBkYXk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9udGggPSBtb250aDtcclxuICAgICAgICAgICAgICAgICRzY29wZS55ZWFyID0geWVhcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0VmFsdWUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXkgJiYgJHNjb3BlLm1vbnRoICYmICRzY29wZS55ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgkc2NvcGUueWVhciwgJHNjb3BlLm1vbnRoIC0gMSwgJHNjb3BlLmRheSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5nQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkRheUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uTW9udGhDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWRqdXN0RGF5KCk7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uWWVhckNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhZGp1c3REYXkoKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcclxuICAgICAgICAgICAgdmFsdWUgPSAkc2NvcGUubW9kZWwgPyBfLmlzRGF0ZSgkc2NvcGUubW9kZWwpID8gJHNjb3BlLm1vZGVsIDogbmV3IERhdGUoJHNjb3BlLm1vZGVsKSA6IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS5kYXkgPSB2YWx1ZSA/IHZhbHVlLmdldERhdGUoKSA6IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS5tb250aCA9IHZhbHVlID8gdmFsdWUuZ2V0TW9udGgoKSArIDEgOiBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUueWVhciA9IHZhbHVlID8gdmFsdWUuZ2V0RnVsbFllYXIoKSA6IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kYXlzID0gZGF5TGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgJHNjb3BlLm1vbnRocyA9IG1vbnRoTGlzdCgpO1xyXG4gICAgICAgICAgICAkc2NvcGUueWVhcnMgPSB5ZWFyTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVDb250cm9scyA9ICRzY29wZS5kaXNhYmxlZCA/ICRzY29wZS5kaXNhYmxlZCgpIDogZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWFjdCBvbiBjaGFuZ2VzXHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ21vZGVsJywgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgkc2NvcGUuZGlzYWJsZWQsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVDb250cm9scyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxufSkoKTtcclxuXHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgdGhpc01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlUmFuZ2UnLCBbJ3BpcERhdGVzLlRlbXBsYXRlcyddKTtcclxuXHJcbiAgICB0aGlzTW9kdWxlLmRpcmVjdGl2ZSgncGlwRGF0ZVJhbmdlJyxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU1vZGU6ICdAcGlwVGltZU1vZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAnJm5nRGlzYWJsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiAnPW5nTW9kZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcENoYW5nZWQ6ICcmJyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBEYXRlUmFuZ2VUeXBlOiAnQCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwRGF0ZUZvcm1hdDogJ0AnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcE5vTGluZTogJ0AnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkYXRlX3JhbmdlX2RpcmVjdGl2ZS9kYXRlX3JhbmdlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ3BpcERhdGVSYW5nZUNvbnRyb2xsZXInXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gVG9kbzogUmVtb3ZlIGRlcGVuZGVuY3kgb24gVHJhbnNsYXRlLiBVc2UgbW9tZW50IGxvY2FsaXphdGlvblxyXG4gICAgdGhpc01vZHVsZS5jb250cm9sbGVyKCdwaXBEYXRlUmFuZ2VDb250cm9sbGVyJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJG1kTWVkaWEsICRyb290U2NvcGUsICRpbmplY3RvciwgJHRpbWVvdXQpIHsgLy9waXBUcmFuc2xhdGUsIFxyXG4gICAgICAgICAgICB2YXIgY3VycmVudERhdGUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50WWVhcixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNb250aCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXksXHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGU6IGFueSA9IHt9LCBcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZTogYW55ID0ge30sXHJcbiAgICAgICAgICAgICAgICBsb2NhbGVEYXRlOiBhbnkgPSBtb21lbnQubG9jYWxlRGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgbW9tZW50TW9udGhzID0gYW5ndWxhci5pc0FycmF5KGxvY2FsZURhdGUuX21vbnRocykgPyBsb2NhbGVEYXRlLl9tb250aHMgOiBsb2NhbGVEYXRlLl9tb250aHMuZm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgbW9tZW50RGF5cyA9IGFuZ3VsYXIuaXNBcnJheShsb2NhbGVEYXRlLl93ZWVrZGF5cykgPyBsb2NhbGVEYXRlLl93ZWVrZGF5cyA6IGxvY2FsZURhdGUuX3dlZWtkYXlzLmZvcm1hdCxcclxuICAgICAgICAgICAgICAgIG1vbWVudFNob3J0RGF5cyA9IGxvY2FsZURhdGUuX3dlZWtkYXlzTWluLFxyXG4gICAgICAgICAgICAgICAgbW9tZW50Rmlyc3REYXlPZldlZWsgPSBsb2NhbGVEYXRlLl93ZWVrLmRvdztcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBwaXBUcmFuc2xhdGUgPSAkaW5qZWN0b3IuaGFzKCdwaXBUcmFuc2xhdGUnKSA/ICRpbmplY3Rvci5nZXQoJ3BpcFRyYW5zbGF0ZScpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChwaXBUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgLy8gICAgIHBpcFRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbnMoJ2VuJywge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIEVWRU5UX05FV19TVEFSVF9USU1FOiAnU3RhcnQgdGltZScsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgRVZFTlRfTkVXX0VORF9USU1FOiAnRW5kIHRpbWUnXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgIHBpcFRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbnMoJ3J1Jywge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIEVWRU5UX05FV19TVEFSVF9USU1FOiAn0J3QsNGH0LDQu9C+JyxcclxuICAgICAgICAgICAgLy8gICAgICAgICBFVkVOVF9ORVdfRU5EX1RJTUU6ICfQmtC+0L3QtdGGJyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgJHNjb3BlLnN0YXJ0TGFiZWwgPSAkc2NvcGUucGlwU3RhcnRMYWJlbCA/IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJHNjb3BlLnBpcFN0YXJ0TGFiZWwpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDogcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgnRVZFTlRfTkVXX1NUQVJUX1RJTUUnKTtcclxuICAgICAgICAgICAgLy8gICAgICRzY29wZS5lbmRMYWJlbCA9ICRzY29wZS5waXBFbmRMYWJlbCA/IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJHNjb3BlLnBpcEVuZExhYmVsKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA6IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ0VWRU5UX05FV19FTkRfVElNRScpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgJHNjb3BlLnN0YXJ0TGFiZWwgPSAkc2NvcGUucGlwU3RhcnRMYWJlbCA/ICRzY29wZS5waXBTdGFydExhYmVsIDogJ1N0YXJ0IHRpbWUnO1xyXG4gICAgICAgICAgICAvLyAgICAgJHNjb3BlLmVuZExhYmVsID0gJHNjb3BlLnBpcEVuZExhYmVsID8gJHNjb3BlLnBpcEVuZExhYmVsIDogJ0VuZCB0aW1lJzsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuICAgICAgICAgICAgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0VVRDTW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgIGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXRVVENEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25EYXlDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbk1vbnRoQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0ZSwgZGF5T2ZXZWVrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoJHNjb3BlLnllYXIsICRzY29wZS5tb250aCAtIDEsIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpID8gZGF0ZS5nZXRVVENEYXkoKSA6IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLndlZWsgPSBnZXRXZWVrQnlEYXRlKGRheU9mV2VlaywgJHNjb3BlLm1vbnRoIC0gMSwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3REYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25ZZWFyQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlLCBkYXlPZldlZWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKCRzY29wZS55ZWFyLCAkc2NvcGUubW9udGggLSAxLCAxKSk7XHJcbiAgICAgICAgICAgICAgICBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpID8gZGF0ZS5nZXRVVENEYXkoKSA6IDc7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLndlZWsgPSBnZXRXZWVrQnlEYXRlKGRheU9mV2VlaywgJHNjb3BlLm1vbnRoIC0gMSwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFdlZWsoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3REYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25XZWVrQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFdlZWsoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3REYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyB2aXNpYmlsaXR5XHJcbiAgICAgICAgICAgICRzY29wZS5pc0RheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ2RhaWx5JztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5pc1dlZWsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICd3ZWVrbHknO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmlzTW9udGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICdkYWlseScgfHxcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ3dlZWtseScgfHxcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ21vbnRobHknO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5waXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRDdXJyZW50KCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLmRheSA9ICRzY29wZS5kYXk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUubW9udGggPSAkc2NvcGUubW9udGg7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUueWVhciA9ICRzY29wZS55ZWFyO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLndlZWsgPSAkc2NvcGUud2VlaztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5kYXRlUmFuZ2VUeXBlID0gJHNjb3BlLnBpcERhdGVSYW5nZVR5cGU7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUubW9kZWwgPSAkc2NvcGUubW9kZWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbGxMaXN0cygpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXlzID0gZGF5TGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS53ZWVrcyA9IHdlZWtMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRocyA9IG1vbnRoTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNob3J0TW9udGhzID0gbW9udGhMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUueWVhcnMgPSB5ZWFyTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY29ycmVjdFdlZWsoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZTdGF0ZS5tb2RlbCB8fCBwcmV2U3RhdGUubW9kZWwgJiYgcHJldlN0YXRlLm1vZGVsLmdldFRpbWUoKSA+PSAkc2NvcGUubW9kZWwuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc2hpZnQgd2VlayAtPiBpbmNyZWFzZSBtb250aFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUud2Vla3MgJiYgJHNjb3BlLndlZWtzWyRzY29wZS53ZWVrXSAmJiAkc2NvcGUud2Vla3NbJHNjb3BlLndlZWtdLmlkIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5tb250aCA8IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9udGggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb250aCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUueWVhciArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxMaXN0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICRzY29wZS5tb2RlbCA/IG5ldyBEYXRlKCRzY29wZS5tb2RlbCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRheSA9IHZhbHVlID8gdmFsdWUuZ2V0VVRDRGF0ZSgpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb250aCA9IHZhbHVlID8gdmFsdWUuZ2V0VVRDTW9udGgoKSArIDEgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnllYXIgPSB2YWx1ZSA/IHZhbHVlLmdldFVUQ0Z1bGxZZWFyKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLndlZWsgPSB2YWx1ZSA/IGdldFdlZWtCeURhdGUoJHNjb3BlLmRheSwgJHNjb3BlLm1vbnRoIC0gMSwgJHNjb3BlLnllYXIpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBmaWxsTGlzdHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdFdlZWsoKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdERheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXHJcbiAgICAgICAgICAgICRzY29wZS4kbWRNZWRpYSA9ICRtZE1lZGlhO1xyXG5cclxuICAgICAgICAgICAgaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVDb250cm9scyA9ICRzY29wZS5kaXNhYmxlZCA/ICRzY29wZS5kaXNhYmxlZCgpIDogZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWFjdCBvbiBjaGFuZ2VzXHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ21vZGVsJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCRzY29wZS5kaXNhYmxlZCwgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZUNvbnRyb2xzID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgncGlwRGF0ZVJhbmdlVHlwZScsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUgJiYgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uWWVhckNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUueWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS55ZWFyID0gY3VycmVudFllYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25Nb250aENsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUubW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9udGggPSBjdXJyZW50TW9udGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25EYXlDbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLnllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF5ID0gY3VycmVudERheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDb3VudERheShtb250aCwgeWVhcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gMzE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSA0IHx8IG1vbnRoID09PSA2IHx8IG1vbnRoID09PSA5IHx8IG1vbnRoID09PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMzA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGxlYXAgeWVhciAocHJpbWl0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHllYXIgJSA0ID09PSAwID8gMjkgOiAyODtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDI4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRheUxpc3QobW9udGgsIHllYXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudCwgZGF5cywgaSwgbG47XHJcblxyXG4gICAgICAgICAgICAgIC8vICBsbiA9ICRyb290U2NvcGUuJGxhbmd1YWdlIHx8ICdlbic7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGdldENvdW50RGF5KG1vbnRoLCB5ZWFyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5uYW1lRGF5cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF5cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5uYW1lRGF5cy5wdXNoKG1vbWVudFNob3J0RGF5c1ttb21lbnQoW3llYXIsIG1vbnRoIC0gMSwgaV0pLndlZWtkYXkoKV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRXZWVrQnlEYXRlKGRheSwgbW9udGgsIHllYXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlLCBkYXlPZldlZWssIHN0YXJ0V2VlaztcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRheSkpO1xyXG4gICAgICAgICAgICAgICAgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKSA/IGRhdGUuZ2V0VVRDRGF5KCkgOiA3O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXlPZldlZWsgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFdlZWsgPSBkYXk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0V2VlayA9IGRheSArIDEgLSBkYXlPZldlZWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0V2VlaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0V2VlayhkYXksIGNvdW50RGF5LCBjb3VudFByZXZNb250aERheSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZERheSwgc3RhcnREYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgZW5kRGF5ID0gZGF5ICsgNiA+IGNvdW50RGF5ID8gY291bnREYXkgLSBkYXkgLSA2IDogZGF5ICsgNjtcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF5ID0gZGF5ID4gMCA/IGRheSA6IGNvdW50UHJldk1vbnRoRGF5ICsgZGF5O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGFydERheS50b1N0cmluZygpICsgJyAtICcgKyAoTWF0aC5hYnMoZW5kRGF5KSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gd2Vla0xpc3QobW9udGgsIHllYXIpIHsgLy8g0LLQvtC30LLRgNCw0YnQsNC10YIg0YHQv9C40YHQvtC6INC90LDRh9Cw0LvQsCDQvdCw0LTQtdC70LhcclxuICAgICAgICAgICAgICAgIHZhciB3ZWVrcywgY291bnREYXksIGNvdW50UHJldk1vbnRoRGF5LCBzdGFydFdlZWs7XHJcblxyXG4gICAgICAgICAgICAgICAgd2Vla3MgPSBbXTsgIC8vINCyINC80LDRgdGB0LjQstC1INC/0LXRgNCy0YvQtSDQtNC90Lgg0L3QtdC00LXQu9C4INCyINGC0LXQutGD0YnQtdC8INC80LXRgdGP0YbQtVxyXG4gICAgICAgICAgICAgICAgY291bnREYXkgPSBnZXRDb3VudERheShtb250aCwgeWVhcik7XHJcbiAgICAgICAgICAgICAgICBzdGFydFdlZWsgPSBnZXRXZWVrQnlEYXRlKDEsIG1vbnRoIC0gMSwgeWVhcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnRQcmV2TW9udGhEYXkgPSBtb250aCAtIDEgPyBnZXRDb3VudERheShtb250aCAtIDEsIHllYXIpIDogZ2V0Q291bnREYXkoMTIsIHllYXIgLSAxKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzdGFydFdlZWsgPCBjb3VudERheSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHN0YXJ0V2VlayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZ2V0V2VlayhzdGFydFdlZWssIGNvdW50RGF5LCBjb3VudFByZXZNb250aERheSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFdlZWsgPSBzdGFydFdlZWsgKyA3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbW9udGhMaXN0KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRocyA9IFtdLCBpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPD0gMTI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRocy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1vbWVudE1vbnRoc1tpLTFdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24geWVhckxpc3QoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRZZWFyLCBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZFllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS50aW1lTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Z1dHVyZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WWVhciA9IGN1cnJlbnRZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRZZWFyID0gY3VycmVudFllYXIgKyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Bhc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFllYXIgPSBjdXJyZW50WWVhciAtIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kWWVhciA9IGN1cnJlbnRZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdub3cnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFllYXIgPSBjdXJyZW50WWVhciAtIDUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRZZWFyID0gY3VycmVudFllYXIgKyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WWVhciA9IGN1cnJlbnRZZWFyIC0gNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFllYXIgPSBjdXJyZW50WWVhciArIDUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUudGltZU1vZGUgPT09ICdmdXR1cmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gc3RhcnRZZWFyOyBpIDw9IGVuZFllYXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFycy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gZW5kWWVhcjsgaSA+PSBzdGFydFllYXI7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFycy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geWVhcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkanVzdERheSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXlzID0gZGF5TGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5waXBEYXRlUmFuZ2VUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbW9udGhseSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd5ZWFybHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9udGggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXlzLmxlbmd0aCAhPT0gZGF5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF5ID4gZGF5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF5ID0gZGF5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF5cyA9IGRheXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkanVzdFdlZWsoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2Vla3M7XHJcblxyXG4gICAgICAgICAgICAgICAgd2Vla3MgPSB3ZWVrTGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS53ZWVrID0gZ2V0V2Vla0J5RGF0ZSgkc2NvcGUud2VlaywgJHNjb3BlLm1vbnRoIC0gMSwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLndlZWtzID0gd2Vla3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHYpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSwgZGF5LCBtb250aCwgeWVhciwgd2VlaztcclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHYgPyBuZXcgRGF0ZSh2KSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBkYXkgPSB2YWx1ZSA/IHZhbHVlLmdldFVUQ0RhdGUoKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBtb250aCA9IHZhbHVlID8gdmFsdWUuZ2V0VVRDTW9udGgoKSArIDEgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgeWVhciA9IHZhbHVlID8gdmFsdWUuZ2V0VVRDRnVsbFllYXIoKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB3ZWVrID0gdmFsdWUgPyBnZXRXZWVrQnlEYXRlKGRheSwgbW9udGggLSAxLCB5ZWFyKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGl0IGlmIG5vdGhpbmcgdG8gdXBkYXRlXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRheSA9PT0gZGF5ICYmICRzY29wZS5tb250aCA9PT0gbW9udGggJiYgJHNjb3BlLnllYXIgPT09IHllYXIgJiYgJHNjb3BlLndlZWsgPT09IHdlZWspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gdmFsdWVzIHRvIHNjb3BlXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF5ID0gZGF5O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoID0gbW9udGg7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUueWVhciA9IHllYXI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUud2VlayA9IHdlZWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGRhdGEgc291cmNlc1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRheXMgPSBkYXlMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLndlZWtzID0gd2Vla0xpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhbHVlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKCRzY29wZS55ZWFyLCAkc2NvcGUubW9udGggLSAxLCAkc2NvcGUud2VlaywgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkgLSB2YWx1ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKCRzY29wZS55ZWFyLCAkc2NvcGUubW9udGggLSAxLCAkc2NvcGUuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSAtIHZhbHVlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldlN0YXRlID0gXy5jbG9uZURlZXAoY3VycmVudFN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbn0pKCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcycsIFtcclxuICAgICdwaXBEYXRlJyxcclxuICAgICdwaXBUaW1lUmFuZ2UnLFxyXG4gICAgJ3BpcERhdGVUaW1lJyxcclxuICAgICdwaXBUaW1lUmFuZ2VFZGl0JyxcclxuICAgICdwaXBEYXRlUmFuZ2UnLFxyXG4gICAgJ3BpcERhdGVzLlRyYW5zbGF0ZSdcclxuXSk7XHJcbiIsIi8qKlxyXG4gKiBAZmlsZSBPcHRpb25hbCBmaWx0ZXIgdG8gdHJhbnNsYXRlIHN0cmluZyByZXNvdXJjZXNcclxuICogQGNvcHlyaWdodCBEaWdpdGFsIExpdmluZyBTb2Z0d2FyZSBDb3JwLiAyMDE0LTIwMTZcclxuICovXHJcbiBcclxuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIHRoaXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVHJhbnNsYXRlJywgW10pO1xyXG5cclxuICAgIHRoaXNNb2R1bGUuZmlsdGVyKCd0cmFuc2xhdGUnLCBmdW5jdGlvbiAoJGluamVjdG9yKSB7XHJcbiAgICAgICAgdmFyIHBpcFRyYW5zbGF0ZSA9ICRpbmplY3Rvci5oYXMoJ3BpcFRyYW5zbGF0ZScpIFxyXG4gICAgICAgICAgICA/ICRpbmplY3Rvci5nZXQoJ3BpcFRyYW5zbGF0ZScpIDogbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBpcFRyYW5zbGF0ZSAgPyBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKGtleSkgfHwga2V5IDoga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSkoKTtcclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgdGhpc01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBUaW1lUmFuZ2UnLCBbXSk7XHJcblxyXG4gICAgdGhpc01vZHVsZS5kaXJlY3RpdmUoJ3BpcFRpbWVSYW5nZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpcFN0YXJ0RGF0ZTogJz0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcEVuZERhdGU6ICc9J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGltZV9yYW5nZV9kaXJlY3RpdmUvdGltZV9yYW5nZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGU6IGFueSwgJGVsZW1lbnQsICRhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXREYXRlSlNPTih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVmaW5lU3RhcnREYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcFN0YXJ0RGF0ZSAhPT0gbnVsbCAmJiAkc2NvcGUucGlwU3RhcnREYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0ID0gXy5pc0RhdGUoJHNjb3BlLnBpcFN0YXJ0RGF0ZSkgPyAkc2NvcGUucGlwU3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBnZXREYXRlSlNPTigkc2NvcGUucGlwU3RhcnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVmaW5lRW5kRGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBFbmREYXRlICE9PSBudWxsICYmICRzY29wZS5waXBFbmREYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZCA9IF8uaXNEYXRlKCRzY29wZS5waXBFbmREYXRlKSA/ICRzY29wZS5waXBFbmREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBnZXREYXRlSlNPTigkc2NvcGUucGlwRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gJzEnIHx8IHZhbHVlID09ICd0cnVlJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lU3RhcnREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lRW5kRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9Cb29sZWFuKCg8YW55PiRhdHRycykucGlwUmViaW5kKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdwaXBTdGFydERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVTdGFydERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgncGlwRW5kRGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVFbmREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NcclxuICAgICAgICAgICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygncGlwLXRpbWUtcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxufSkoKTtcclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgdGhpc01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBUaW1lUmFuZ2VFZGl0JywgW10pO1xyXG5cclxuICAgIHRoaXNNb2R1bGUuZGlyZWN0aXZlKCdwaXBUaW1lUmFuZ2VFZGl0JyxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlwU3RhcnREYXRlOiAnPScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwQ2hhbmdlZDogJyYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcEVuZERhdGU6ICc9JyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBTdGFydExhYmVsOiAnQCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwRW5kTGFiZWw6ICdAJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJyZuZ0Rpc2FibGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBIaWRlVGltZTogJz0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcFNpemU6ICc9J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGltZV9yYW5nZV9lZGl0X2RpcmVjdGl2ZS90aW1lX3JhbmdlX2VkaXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAncGlwVGltZVJhbmdlRWRpdENvbnRyb2xsZXInXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBUb2RvOiBSZW1vdmUgZGVwZW5kZW5jeSBvbiBUcmFuc2xhdGUuIFVzZSBtb21lbnQgbG9jYWxpemF0aW9uXHJcbiAgICB0aGlzTW9kdWxlLmNvbnRyb2xsZXIoJ3BpcFRpbWVSYW5nZUVkaXRDb250cm9sbGVyJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkaW5qZWN0b3IsIHBpcERhdGVUaW1lKSB7IC8vcGlwVHJhbnNsYXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgcGlwVHJhbnNsYXRlID0gJGluamVjdG9yLmhhcygncGlwVHJhbnNsYXRlJykgPyAkaW5qZWN0b3IuZ2V0KCdwaXBUcmFuc2xhdGUnKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAocGlwVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBwaXBUcmFuc2xhdGUuc2V0VHJhbnNsYXRpb25zKCdlbicsIHtcclxuICAgICAgICAgICAgICAgICAgICBFVkVOVF9ORVdfU1RBUlRfVElNRTogJ1N0YXJ0IHRpbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIEVWRU5UX05FV19FTkRfVElNRTogJ0VuZCB0aW1lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwaXBUcmFuc2xhdGUuc2V0VHJhbnNsYXRpb25zKCdydScsIHtcclxuICAgICAgICAgICAgICAgICAgICBFVkVOVF9ORVdfU1RBUlRfVElNRTogJ9Cd0LDRh9Cw0LvQvicsXHJcbiAgICAgICAgICAgICAgICAgICAgRVZFTlRfTkVXX0VORF9USU1FOiAn0JrQvtC90LXRhicgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zdGFydExhYmVsID0gJHNjb3BlLnBpcFN0YXJ0TGFiZWwgPyBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCRzY29wZS5waXBTdGFydExhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ0VWRU5UX05FV19TVEFSVF9USU1FJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZW5kTGFiZWwgPSAkc2NvcGUucGlwRW5kTGFiZWwgPyBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCRzY29wZS5waXBFbmRMYWJlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCdFVkVOVF9ORVdfRU5EX1RJTUUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zdGFydExhYmVsID0gJHNjb3BlLnBpcFN0YXJ0TGFiZWwgPyAkc2NvcGUucGlwU3RhcnRMYWJlbCA6ICdTdGFydCB0aW1lJztcclxuICAgICAgICAgICAgICAgICRzY29wZS5lbmRMYWJlbCA9ICRzY29wZS5waXBFbmRMYWJlbCA/ICRzY29wZS5waXBFbmRMYWJlbCA6ICdFbmQgdGltZSc7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RGF0ZUpTT04odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldER1cmF0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0LCBlbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YS5zdGFydERhdGUgfHwgISRzY29wZS5kYXRhLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbmV3IERhdGUoJHNjb3BlLmRhdGEuc3RhcnREYXRlLmdldFRpbWUoKSArICRzY29wZS5kYXRhLnN0YXJ0VGltZSAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBuZXcgRGF0ZSgkc2NvcGUuZGF0YS5lbmREYXRlLmdldFRpbWUoKSArICRzY29wZS5kYXRhLmVuZFRpbWUgKiA2MCAqIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmQgLSBzdGFydDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVTdGFydERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSwgc3RhcnQsIGVuZDtcclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQvdC1INC30LDQtNCw0L3QsCwg0L7QsdC90YPQu9GP0LXQvCDQuCDQstGL0YXQvtC00LjQvFxyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YS5zdGFydERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0LVj0LvQuCDQvdC1INC30LDQtNCw0L3QviDQvdCw0YfQsNC70YzQvdC+0LUg0LLRgNC10LzRjyAtINC30LDQtNCw0LXQvCDQtdCz0L5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5zdGFydFRpbWUgPT09IHVuZGVmaW5lZCB8fCAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLmVuZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBkYXRlLmdldFRpbWUoKSAtIHBpcERhdGVUaW1lLnRvU3RhcnREYXkoZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0VGltZSA9IE1hdGguZmxvb3IoZGF0ZSAvICgzMCAqIDYwICogMTAwMCkpICogMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID0gJHNjb3BlLmRhdGEuZW5kVGltZSA9PT0gMCA/IDAgOiAkc2NvcGUuZGF0YS5lbmRUaW1lIC0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INC60L7QvdC10YfQvdCw0Y8g0LTQsNGC0LAg0L3QtSDQt9Cw0LTQsNC90LAsINC+0LHQvdGD0LvRj9C10Lwg0Lgg0LLRi9GF0L7QtNC40LxcclxuICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmRhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSgkc2NvcGUuZGF0YS5zdGFydERhdGUuZ2V0VGltZSgpICsgJHNjb3BlLmRhdGEuc3RhcnRUaW1lICogNjAgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQtdGB0YLRjCDQtNC70LjRgtC10LvRjNC90L7RgdGC0YwsINGC0L4g0YHQvtGF0YDQsNC90Y/QtdC8INC10LUuINCU0LvQuNGC0LXQu9GM0L3QvtGB0YLRjCDQvNC+0LbQvdC+INC40LfQvNC10L3QuNGC0Ywg0YLQvtC70YzQutC+INC40LfQvNC10L3Rj9GPINC60L7QvdC10YfQvdGD0Y4g0LTQsNGC0YNcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArICRzY29wZS5kYXRhLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmREYXRlID0gcGlwRGF0ZVRpbWUudG9TdGFydERheShlbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGVuZC5nZXRUaW1lKCkgLSAkc2NvcGUuZGF0YS5lbmREYXRlLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gTWF0aC5mbG9vcihlbmQgLyAoMzAgKiA2MCAqIDEwMDApKSAqIDMwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQvdC10YIg0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INGB0YDQsNCy0L3QuNCy0LDQtdC8INC00LDRgtGLXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbmV3IERhdGUoJHNjb3BlLmRhdGEuZW5kRGF0ZS5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5lbmRUaW1lICogNjAgKiAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPj0gZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQsdC+0LvRjNGI0LUsINGC0L4g0LTQstC40LPQsNC10Lwg0LrQvtC90LXRh9C90YPRjiDQtNCw0YLRg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmREYXRlID0gcGlwRGF0ZVRpbWUudG9TdGFydERheShuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAzMCAqIDYwMDAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZFRpbWUgPSAoJHNjb3BlLmRhdGEuc3RhcnRUaW1lICsgMzApICUgMTQ0MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW5kRGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlLCBzdGFydCwgZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQvdC1INC30LDQtNCw0L3QsCwg0L7QsdC90YPQu9GP0LXQvCDQuCDQstGL0YXQvtC00LjQvFxyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kVGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtWPQu9C4INC90LUg0LfQsNC00LDQvdC+INC60L7QvdC10YfQvdC+0LUg0LLRgNC10LzRjyAtINC30LDQtNCw0LXQvCDQtdCz0L5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5lbmRUaW1lID09PSB1bmRlZmluZWQgfHwgJHNjb3BlLmRhdGEuZW5kVGltZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmRhdGEuc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gZGF0ZS5nZXRUaW1lKCkgLSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gTWF0aC5mbG9vcihkYXRlIC8gKDMwICogNjAgKiAxMDAwKSkgKiAzMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gJHNjb3BlLmRhdGEuc3RhcnRUaW1lID09PSAxNDEwID8gMTQxMCA6ICRzY29wZS5kYXRhLnN0YXJ0VGltZSArIDMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtdGB0LvQuCB50LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQvdC1INC30LDQtNCw0L3QsCwg0L7QsdC90YPQu9GP0LXQvCDQuCDQstGL0YXQvtC00LjQvFxyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YS5zdGFydERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSgkc2NvcGUuZGF0YS5zdGFydERhdGUuZ2V0VGltZSgpICsgJHNjb3BlLmRhdGEuc3RhcnRUaW1lICogNjAgKiAxMDAwKTtcclxuICAgICAgICAgICAgICAgIGVuZCA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLmVuZERhdGUuZ2V0VGltZSgpICsgJHNjb3BlLmRhdGEuZW5kVGltZSAqIDYwICogMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID49IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQsdC+0LvRjNGI0LUsINGC0L4g0LTQstC40LPQsNC10Lwg0L3QsNGH0LDQu9GM0L3Rg9GOINC00LDRgtGDXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnREYXRlID0gcGlwRGF0ZVRpbWUudG9TdGFydERheShuZXcgRGF0ZShlbmQuZ2V0VGltZSgpIC0gMzAgKiA2MDAwMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0VGltZSA9ICRzY29wZS5kYXRhLmVuZFRpbWUgJSAxNDQwID09PSAwID8gMTQxMCA6ICRzY29wZS5kYXRhLmVuZFRpbWUgLSAzMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5kdXJhdGlvbiA9IHNldER1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5iaW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPyAkc2NvcGUuZGF0YS5zdGFydFRpbWUgKiA2MCAqIDEwMDAgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lJywgJHNjb3BlLmRhdGEuc3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGlwU3RhcnREYXRlID0gbmV3IERhdGUoJHNjb3BlLmRhdGEuc3RhcnREYXRlLmdldFRpbWUoKSArIHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9ICRzY29wZS5kYXRhLmVuZFRpbWUgPyAkc2NvcGUuZGF0YS5lbmRUaW1lICogNjAgKiAxMDAwIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGlwRW5kRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLmVuZERhdGUuZ2V0VGltZSgpICsgdGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuYmluZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmluZURhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQsIGVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcFN0YXJ0RGF0ZSAhPT0gbnVsbCAmJiAkc2NvcGUucGlwU3RhcnREYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IF8uaXNEYXRlKCRzY29wZS5waXBTdGFydERhdGUpID8gJHNjb3BlLnBpcFN0YXJ0RGF0ZSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBnZXREYXRlSlNPTigkc2NvcGUucGlwU3RhcnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0RGF0ZSA9IHBpcERhdGVUaW1lLnRvU3RhcnREYXkoc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0VGltZSA9ICg8YW55Pm5ldyBEYXRlKHN0YXJ0KSAtICRzY29wZS5kYXRhLnN0YXJ0RGF0ZSkgLyAoNjAgKiAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcEVuZERhdGUgIT09IG51bGwgJiYgJHNjb3BlLnBpcEVuZERhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IF8uaXNEYXRlKCRzY29wZS5waXBFbmREYXRlKSA/ICRzY29wZS5waXBFbmREYXRlIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBnZXREYXRlSlNPTigkc2NvcGUucGlwRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmREYXRlID0gcGlwRGF0ZVRpbWUudG9TdGFydERheShlbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZFRpbWUgPSAoPGFueT5uZXcgRGF0ZShlbmQpIC0gJHNjb3BlLmRhdGEuZW5kRGF0ZSkgLyAoNjAgKiAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0LCBpLCBqLCBtaW51dGVzO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBqICogMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpICogNjAgKyBtaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogXy5wYWQoaS50b1N0cmluZygpLCAzLCAnMCcpLnN1YnN0cigwLCAyKSArICc6JyArIF8ucGFkKG1pbnV0ZXMudG9TdHJpbmcoKSwgMiwgJzAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gJzEnIHx8IHZhbHVlID09ICd0cnVlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kVGltZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5kdXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd1RpbWUgPSAhdG9Cb29sZWFuKCRzY29wZS5waXBIaWRlVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGluaXRpYWxpemUgZGF0YVxyXG4gICAgICAgICAgICAkc2NvcGUuaW50ZXJ2YWxUaW1lQ29sbGVjdGlvbiA9IGdldFRpbWVJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBpbml0RGF0ZSgpO1xyXG4gICAgICAgICAgICBkZWZpbmVEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBwcm9jZXNzIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZVN0YXJ0RGF0ZSA9IGZ1bmN0aW9uIChuZXdWKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBpcENoYW5nZWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZUVuZERhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUVuZERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmR1cmF0aW9uID0gc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5waXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25DaGFuZ2VTdGFydFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0RGF0ZSA9IHBpcERhdGVUaW1lLnRvU3RhcnREYXkobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBpcENoYW5nZWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZUVuZFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmREYXRlID0gcGlwRGF0ZVRpbWUudG9TdGFydERheShuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUVuZERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmR1cmF0aW9uID0gc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5waXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmRpc2FibGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaEdyb3VwKFskc2NvcGUucGlwU3RhcnREYXRlLCAkc2NvcGUucGlwRW5kRGF0ZV0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5iaW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgkc2NvcGUuZGlzYWJsZWQsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVDb250cm9scyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBjbGFzc1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygncGlwLXRpbWUtcmFuZ2UtZWRpdCcpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2RhdGVfZGlyZWN0aXZlL2RhdGUuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJwaXAtZGF0ZSBsYXlvdXQtcm93IGZsZXhcIiB0YWJpbmRleD1cIi0xXCI+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lciBmbGV4XCI+PG1kLXNlbGVjdCBjbGFzcz1cInBpcC1kYXRlLWRheSBmbGV4XCIgbmctZGlzYWJsZWQ9XCJkaXNhYmxlQ29udHJvbHNcIiBuZy1tb2RlbD1cImRheVwiIHBsYWNlaG9sZGVyPVwie3tkYXlMYWJlbH19XCIgbmctY2hhbmdlPVwib25EYXlDaGFuZ2VkKClcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0XCIgbmctcmVwZWF0PVwib3B0IGluIGRheXMgdHJhY2sgYnkgb3B0XCI+e3s6OiBvcHQgfX08L21kLW9wdGlvbj48L21kLXNlbGVjdD48L21kLWlucHV0LWNvbnRhaW5lcj48ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyLXNlcGFyYXRvciBmbGV4LWZpeGVkXCI+PC9kaXY+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lciBmbGV4XCI+PG1kLXNlbGVjdCBjbGFzcz1cInBpcC1kYXRlLW1vbnRoZmxleFwiIG5nLWRpc2FibGVkPVwiZGlzYWJsZUNvbnRyb2xzXCIgbmctbW9kZWw9XCJtb250aFwiIHBsYWNlaG9sZGVyPVwie3ttb250aExhYmVsfX1cIiBuZy1jaGFuZ2U9XCJvbk1vbnRoQ2hhbmdlZCgpXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBtb250aHMgdHJhY2sgYnkgb3B0LmlkXCI+e3s6OiBvcHQubmFtZSB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXItc2VwYXJhdG9yIGZsZXgtZml4ZWRcIj48L2Rpdj48bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIj48bWQtc2VsZWN0IGNsYXNzPVwicGlwLWRhdGUteWVhciBmbGV4XCIgbmctZGlzYWJsZWQ9XCJkaXNhYmxlQ29udHJvbHNcIiBuZy1tb2RlbD1cInllYXJcIiBwbGFjZWhvbGRlcj1cInt7eWVhckxhYmVsfX1cIiBuZy1jaGFuZ2U9XCJvblllYXJDaGFuZ2VkKClcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0XCIgbmctcmVwZWF0PVwib3B0IGluIHllYXJzIHRyYWNrIGJ5IG9wdFwiPnt7Ojogb3B0IH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4oZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2RhdGVfcmFuZ2VfZGlyZWN0aXZlL2RhdGVfcmFuZ2UuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJwaXAtZGF0ZS1yYW5nZSBsYXlvdXQtcm93IGZsZXhcIiB0YWJpbmRleD1cIi0xXCI+PG1kLWlucHV0LWNvbnRhaW5lciBuZy1zaG93PVwiaXNEYXkoKVwiIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIHBpcC1kYXkgZmxleFwiIG5nLWNsYXNzPVwie1xcJ2ZsZXgtZml4ZWRcXCcgOiAkbWRNZWRpYShcXCdndC14c1xcJyl9XCI+PG1kLXNlbGVjdCBjbGFzcz1cInNlbGVjdC1kYXlcIiBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6IHBpcE5vTGluZX1cIiBuZy1kaXNhYmxlPVwie3tkaXNhYmxlQ29udHJvbHN9fVwiIG1kLW9uLW9wZW49XCJvbkRheUNsaWNrKClcIiBuZy1tb2RlbD1cImRheVwiIG5nLWNoYW5nZT1cIm9uRGF5Q2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ7e2RheUxhYmVsfX1cIiBhcmlhLWxhYmVsPVwiREFZXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBkYXlzIHRyYWNrIGJ5IG9wdFwiPnt7bmFtZURheXNbJGluZGV4XX19IHt7IG9wdCB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxtZC1pbnB1dC1jb250YWluZXIgbmctc2hvdz1cImlzV2VlaygpXCIgY2xhc3M9XCJpbnB1dC1jb250YWluZXIgZmxleFwiIG5nLWNsYXNzPVwie1xcJ2ZsZXgtZml4ZWRcXCcgOiAkbWRNZWRpYShcXCdndC14c1xcJyl9XCI+PG1kLXNlbGVjdCBjbGFzcz1cInNlbGVjdC13ZWVrXCIgbmctY2xhc3M9XCJ7XFwncGlwLW5vLWxpbmVcXCcgOiBwaXBOb0xpbmV9XCIgbmctZGlzYWJsZT1cInt7ZGlzYWJsZUNvbnRyb2xzfX1cIiBuZy1tb2RlbD1cIndlZWtcIiBuZy1jaGFuZ2U9XCJvbldlZWtDaGFuZ2UoKVwiIHBsYWNlaG9sZGVyPVwie3t3ZWVrTGFiZWx9fVwiIGFyaWEtbGFiZWw9XCJXRUVLXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiB3ZWVrcyB0cmFjayBieSBvcHQuaWRcIj57eyBvcHQubmFtZSB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxkaXYgY2xhc3M9XCJmbGV4LWZpeGVkXCIgbmctY2xhc3M9XCJ7XFwnc3BhY2UxNlxcJzogJG1kTWVkaWEoXFwnZ3QteHNcXCcpLCBcXCdzcGFjZThcXCc6ICRtZE1lZGlhKFxcJ3hzXFwnKX1cIiBuZy1zaG93PVwiaXNEYXkoKSB8fCBpc1dlZWsoKVwiPjwvZGl2PjxtZC1pbnB1dC1jb250YWluZXIgbmctc2hvdz1cImlzTW9udGgoKSAmJiAhbW9udGhGb3JtYXRTaG9ydFwiIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIiBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPjxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3QtbW9udGhcIiBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6IHBpcE5vTGluZX1cIiBuZy1kaXNhYmxlPVwie3tkaXNhYmxlQ29udHJvbHN9fVwiIG1kLW9uLW9wZW49XCJvbk1vbnRoQ2xpY2soKVwiIG5nLW1vZGVsPVwibW9udGhcIiBuZy1jaGFuZ2U9XCJvbk1vbnRoQ2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ7e21vbnRoTGFiZWx9fVwiIGFyaWEtbGFiZWw9XCJNT05USFwiPjxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHQuaWRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4gbW9udGhzIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC5uYW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PG1kLWlucHV0LWNvbnRhaW5lciBuZy1zaG93PVwiaXNNb250aCgpICYmIG1vbnRoRm9ybWF0U2hvcnRcIiBjbGFzcz1cImZsZXggaW5wdXQtY29udGFpbmVyXCIgbmctY2xhc3M9XCJ7XFwnZmxleC1maXhlZFxcJyA6ICRtZE1lZGlhKFxcJ2d0LXhzXFwnKX1cIj48bWQtc2VsZWN0IGNsYXNzPVwic2VsZWN0LW1vbnRoXCIgbmctY2xhc3M9XCJ7XFwncGlwLW5vLWxpbmVcXCcgOiBwaXBOb0xpbmV9XCIgbmctZGlzYWJsZT1cInt7ZGlzYWJsZUNvbnRyb2xzfX1cIiBtZC1vbi1vcGVuPVwib25Nb250aENsaWNrKClcIiBuZy1tb2RlbD1cIm1vbnRoXCIgbmctY2hhbmdlPVwib25Nb250aENoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwie3ttb250aExhYmVsfX1cIiBhcmlhLWxhYmVsPVwiTU9OVEhcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0LmlkXCIgbmctcmVwZWF0PVwib3B0IGluIHNob3J0TW9udGhzIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC5uYW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PGRpdiBjbGFzcz1cImZsZXgtZml4ZWRcIiBuZy1jbGFzcz1cIntcXCdzcGFjZTE2XFwnOiAkbWRNZWRpYShcXCdndC14c1xcJyksIFxcJ3NwYWNlOFxcJzogJG1kTWVkaWEoXFwneHNcXCcpfVwiIG5nLXNob3c9XCJpc01vbnRoKClcIj48L2Rpdj48bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIiBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPjxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3QteWVhclwiIG5nLWNsYXNzPVwie1xcJ3BpcC1uby1saW5lXFwnIDogcGlwTm9MaW5lfVwiIG5nLWRpc2FibGU9XCJ7e2Rpc2FibGVDb250cm9sc319XCIgbWQtb24tb3Blbj1cIm9uWWVhckNsaWNrKClcIiBuZy1tb2RlbD1cInllYXJcIiBuZy1jaGFuZ2U9XCJvblllYXJDaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cInt7eWVhckxhYmVsfX1cIiBhcmlhLWxhYmVsPVwiWUVBUlwiPjxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4geWVhcnMgdHJhY2sgYnkgb3B0XCI+e3sgb3B0IH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4oZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3RpbWVfcmFuZ2VfZWRpdF9kaXJlY3RpdmUvdGltZV9yYW5nZV9lZGl0Lmh0bWwnLFxuICAgICc8ZGl2IGNsYXNzPVwiZXZlbnQtZWRpdCBsYXlvdXQtcm93IGxheW91dC14cy1jb2x1bW4gZmxleCBsYXlvdXQtYWxpZ24tc3RhcnQtc3RhcnRcIj48ZGl2IGZsZXg9XCI0N1wiIGNsYXNzPVwic3RhcnQtdGltZS1jb250YWluZXJcIj48cCBjbGFzcz1cInRleHQtY2FwdGlvbiB0ZXh0LWdyZXlcIj57e3N0YXJ0TGFiZWx9fTwvcD48ZGl2IGNsYXNzPVwibGF5b3V0LXJvdyBsYXlvdXQtYWxpZ24tc3BhY2UtYmV0d2Vlbi1jZW50ZXJcIj48ZGl2IGNsYXNzPVwicGlwLWRhdGVwaWNrZXItY29udGFpbmVyXCIgZmxleD1cIjQ5XCI+PG1kLWRhdGVwaWNrZXIgbmctbW9kZWw9XCJkYXRhLnN0YXJ0RGF0ZVwiIHhtZC1wbGFjZWhvbGRlcj1cInt7c3RhcnRMYWJlbH19XCIgbmctY2hhbmdlPVwib25DaGFuZ2VTdGFydERhdGUoKVwiIG5nLWRpc2FibGVkPVwiaXNEaXNhYmxlZCgpXCIgYXJpYS1sYWJlbD1cIlNUQVJULURBVEVcIj48L21kLWRhdGVwaWNrZXI+PC9kaXY+PGRpdiBmbGV4PVwiXCIgbmctaWY9XCJzaG93VGltZVwiPjxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj48bWQtc2VsZWN0IGFyaWEtbGFiZWw9XCJTVEFSVC1USU1FXCIgbmctbW9kZWw9XCJkYXRhLnN0YXJ0VGltZVwiIG5nLWRpc2FibGVkPVwiaXNEaXNhYmxlZCgpXCIgbmctY2hhbmdlPVwib25DaGFuZ2VTdGFydFRpbWUoZGF0YS5zdGFydFRpbWUpXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBpbnRlcnZhbFRpbWVDb2xsZWN0aW9uIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC50aW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBmbGV4PVwiNDdcIiBjbGFzcz1cImVuZC10aW1lLWNvbnRhaW5lclwiPjxwIGNsYXNzPVwidGV4dC1jYXB0aW9uIHRleHQtZ3JleVwiPnt7ZW5kTGFiZWx9fTwvcD48ZGl2IGNsYXNzPVwibGF5b3V0LXJvdyBsYXlvdXQtYWxpZ24tc3BhY2UtYmV0d2Vlbi1jZW50ZXJcIj48ZGl2IGNsYXNzPVwicGlwLWRhdGVwaWNrZXItY29udGFpbmVyIGZsZXgtNDlcIj48bWQtZGF0ZXBpY2tlciBuZy1tb2RlbD1cImRhdGEuZW5kRGF0ZVwiIHhtZC1wbGFjZWhvbGRlcj1cInt7ZW5kTGFiZWx9fVwiIG5nLWRpc2FibGVkPVwiaXNEaXNhYmxlZCgpXCIgbmctY2hhbmdlPVwib25DaGFuZ2VFbmREYXRlKClcIiBhcmlhLWxhYmVsPVwiRU5ELURBVEVcIj48L21kLWRhdGVwaWNrZXI+PC9kaXY+PGRpdiBmbGV4PVwiXCIgbmctaWY9XCJzaG93VGltZVwiPjxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj48bWQtc2VsZWN0IGFyaWEtbGFiZWw9XCJFTkQtVElNRVwiIG5nLW1vZGVsPVwiZGF0YS5lbmRUaW1lXCIgbmctY2hhbmdlPVwib25DaGFuZ2VFbmRUaW1lKClcIiBuZy1kaXNhYmxlZD1cImlzRGlzYWJsZWQoKVwiPjxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHQuaWRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4gaW50ZXJ2YWxUaW1lQ29sbGVjdGlvbiB0cmFjayBieSBvcHQuaWRcIj57eyBvcHQudGltZSB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PicpO1xufV0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKG1vZHVsZSkge1xudHJ5IHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVzLlRlbXBsYXRlcycpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJywgW10pO1xufVxubW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd0aW1lX3JhbmdlX2RpcmVjdGl2ZS90aW1lX3JhbmdlLmh0bWwnLFxuICAgICc8cD48c3BhbiBuZy1pZj1cImRhdGEuc3RhcnQgIT0gbnVsbFwiPnt7ZGF0YS5zdGFydCB8IGZvcm1hdExvbmdEYXRlVGltZX19PC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiIG5nLWlmPVwiZGF0YS5zdGFydCAmJiBkYXRhLmVuZFwiPi08L3NwYW4+IDxzcGFuIG5nLWlmPVwiZGF0YS5lbmQgIT0gbnVsbFwiPnt7ZGF0YS5lbmQgfCBmb3JtYXRMb25nRGF0ZVRpbWV9fTwvc3Bhbj48L3A+Jyk7XG59XSk7XG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXAtd2VidWktZGF0ZXMtaHRtbC5taW4uanMubWFwXG4iXX0=
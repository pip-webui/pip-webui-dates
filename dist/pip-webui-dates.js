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
            $scope.data.startTime = Math.round($scope.data.startTime / 30) * 30;
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
            start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);
            end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);
            if (start >= end) {
                $scope.data.startDate = pipDateTime.toStartDay(new Date(end.getTime() - 30 * 60000));
                $scope.data.startTime = $scope.data.endTime % 1440 === 0 ? 1410 : $scope.data.endTime - 30;
            }
            $scope.data.endTime = Math.round($scope.data.endTime / 30) * 30;
            $scope.data.duration = setDuration();
        }
        function setDate() {
            var time;
            $scope.data.bind = false;
            if ($scope.data.startDate) {
                time = $scope.data.startTime ? $scope.data.startTime * 60 * 1000 : 0;
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
            validateEndDate();
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
  $templateCache.put('time_range_directive/time_range.html',
    '<p><span ng-if="data.start != null">{{data.start | formatLongDateTime}}</span> <span class="separator" ng-if="data.start && data.end">-</span> <span ng-if="data.end != null">{{data.end | formatLongDateTime}}</span></p>');
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



},{}]},{},[10,7,4,5,2,3,1,6,8,9])(10)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0ZS9kYXRlLnRzIiwic3JjL2RhdGUvZGF0ZV9maWx0ZXIudHMiLCJzcmMvZGF0ZS9kYXRlX3NlcnZpY2UudHMiLCJzcmMvZGF0ZV9kaXJlY3RpdmUvZGF0ZS50cyIsInNyYy9kYXRlX3JhbmdlX2RpcmVjdGl2ZS9kYXRlX3JhbmdlLnRzIiwic3JjL2RhdGVzLnRzIiwic3JjL2RlcGVuZGVuY2llcy90cmFuc2xhdGUuanMiLCJzcmMvdGltZV9yYW5nZV9kaXJlY3RpdmUvdGltZV9yYW5nZS50cyIsInNyYy90aW1lX3JhbmdlX2VkaXRfZGlyZWN0aXZlL3RpbWVfcmFuZ2VfZWRpdC50cyIsInRlbXAvcGlwLXdlYnVpLWRhdGVzLWh0bWwubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDO0FBRWIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7SUFDMUIscUJBQXFCLEVBQUUsb0JBQW9CO0NBQzlDLENBQUMsQ0FBQzs7QUNKSCxZQUFZLENBQUM7QUFFYiwwQkFBMEIsV0FBZ0I7SUFDdEMsVUFBVSxDQUFDO0lBRVgsTUFBTSxDQUFDLFVBQVUsS0FBVSxFQUFFLE1BQWM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRCxrQ0FBa0MsV0FBZ0I7SUFDOUMsVUFBVSxDQUFDO0lBRVgsTUFBTSxDQUFDLFVBQVUsS0FBVSxFQUFFLE1BQWM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVELDhCQUE4QixXQUFnQjtJQUMxQyxVQUFVLENBQUM7SUFFWCxNQUFNLENBQUMsVUFBVSxLQUFVO1FBQ3ZCLE1B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QUUsQ0FBQztRQUN6QyxDQUFDO1FBRUQ7WUFDSSxJQUFJLElBQUksQ0FBQztZQUVULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUV6QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDckUsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMzRSxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdkUsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDO1FBRUQ7WUFDSSxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUM7WUFFZixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENB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QztnQkFDbkIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLENBQUM7WUFDakIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsUUFBUTtZQUM3QyxNQUFNLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUdILFFBQVEsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQ0osQ0FBQztBQUVOLENBQUMsQ0FBQyxFQUFFLENBQUM7O0FDblNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVUaW1lJywgW1xyXG4gICAgJ3BpcERhdGVUaW1lLlNlcnZpY2UnLCAncGlwRGF0ZVRpbWUuRmlsdGVyJ1xyXG5dKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFRpbWUodmFsdWUsIGZvcm1hdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGVPcHRpb25hbEZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0RGF0ZU9wdGlvbmFsKHZhbHVlLCBmb3JtYXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nRGF0ZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRMb25nRGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0RGF0ZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRTaG9ydERhdGUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNaWRkbGVEYXRlRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdE1pZGRsZURhdGUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNb250aEZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TW9udGgodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nTW9udGhGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TG9uZ01vbnRoKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0WWVhckZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRZZWFyKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0V2Vla0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRXZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnRXZWVrRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFNob3J0V2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0RGF0ZVRpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0U2hvcnREYXRlVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE1pZGRsZURhdGVUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdE1pZGRsZURhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RhdGVUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdExvbmdEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSwgZmlyc3RUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE1pZGRsZURhdGVMb25nVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnksIGZpcnN0VGltZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdE1pZGRsZURhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RhdGVMb25nVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnksIGZpcnN0VGltZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdExvbmdEYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJiRm9ybWF0RGF0ZUxvbmdUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSwgZmlyc3RUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuYmJGb3JtYXREYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdEZ1bGxEYXRlVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRGdWxsRGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydFRpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0U2hvcnRUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ1RpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TG9uZ1RpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydERheU9mV2Vla0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRTaG9ydERheU9mV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdEYXlPZldlZWtGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TG9uZ0RheU9mV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdNb250aERheUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRMb25nTW9udGhEYXkodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydE1vbnRoRGF5RmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFNob3J0TW9udGhEYXkodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlUmFuZ2VGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXREYXRlUmFuZ2UodmFsdWUxLCB2YWx1ZTIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlVGltZVJhbmdlRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0RGF0ZVRpbWVSYW5nZSh2YWx1ZTEsIHZhbHVlMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdElTT1dlZWtGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0SVNPV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0SVNPV2Vla0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRTaG9ydElTT1dlZWsodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRJU09XZWVrT3JkaW5hbEZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRJU09XZWVrT3JkaW5hbCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGVZRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdERhdGVZKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RhdGVZRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdExvbmdEYXRlWSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lTG9uZ0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmcodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0RmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnQodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydEZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kc0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHModmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRFbGFwc2VkSW50ZXJ2YWxGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55LCBzdGFydDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0RWxhcHNlZEludGVydmFsKHZhbHVlLCBzdGFydCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGVKU09ORmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmdldERhdGVKU09OKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncGlwRGF0ZVRpbWUuRmlsdGVyJywgW10pXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRUaW1lJywgZm9ybWF0VGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdERhdGVPcHRpb25hbCcsIGZvcm1hdERhdGVPcHRpb25hbEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2JiRm9ybWF0RGF0ZUxvbmdUaW1lJywgYmJGb3JtYXREYXRlTG9uZ1RpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydERhdGUnLCBmb3JtYXRTaG9ydERhdGVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRNaWRkbGVEYXRlJywgZm9ybWF0TWlkZGxlRGF0ZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdEYXRlJywgZm9ybWF0TG9uZ0RhdGVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRNb250aCcsIGZvcm1hdE1vbnRoRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ01vbnRoJywgZm9ybWF0TG9uZ01vbnRoRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0WWVhcicsIGZvcm1hdFllYXJGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRXZWVrJywgZm9ybWF0V2Vla0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFNob3J0V2VlaycsIGZvcm1hdFNob3J0V2Vla0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFNob3J0RGF0ZVRpbWUnLCBmb3JtYXRTaG9ydERhdGVUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TWlkZGxlRGF0ZVRpbWUnLCBmb3JtYXRNaWRkbGVEYXRlVGltZUZpbHRlcikgICAgXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nRGF0ZVRpbWUnLCBmb3JtYXRMb25nRGF0ZVRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydERhdGVMb25nVGltZScsIGZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lJywgZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lRmlsdGVyKSAgICBcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdEYXRlTG9uZ1RpbWUnLCBmb3JtYXRMb25nRGF0ZUxvbmdUaW1lRmlsdGVyKSAgICBcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdEZ1bGxEYXRlVGltZScsIGZvcm1hdEZ1bGxEYXRlVGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFNob3J0VGltZScsIGZvcm1hdFNob3J0VGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdUaW1lJywgZm9ybWF0TG9uZ1RpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydERheU9mV2VlaycsIGZvcm1hdFNob3J0RGF5T2ZXZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ0RheU9mV2VlaycsIGZvcm1hdExvbmdEYXlPZldlZWtGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nTW9udGhEYXknLCBmb3JtYXRMb25nTW9udGhEYXlGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydE1vbnRoRGF5JywgZm9ybWF0U2hvcnRNb250aERheUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdERhdGVSYW5nZScsIGZvcm1hdERhdGVSYW5nZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdERhdGVUaW1lUmFuZ2UnLCBmb3JtYXREYXRlVGltZVJhbmdlRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0SVNPV2VlaycsIGZvcm1hdElTT1dlZWtGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydElTT1dlZWsnLCBmb3JtYXRTaG9ydElTT1dlZWtGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRJU09XZWVrT3JkaW5hbCcsIGZvcm1hdElTT1dlZWtPcmRpbmFsRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0RGF0ZVknLCBmb3JtYXREYXRlWUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdEYXRlWScsIGZvcm1hdExvbmdEYXRlWUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lTG9uZycsIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lTG9uZ0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmcnLCBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCcsIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnRGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydCcsIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0RmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzJywgZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0RWxhcHNlZEludGVydmFsJywgZm9ybWF0RWxhcHNlZEludGVydmFsRmlsdGVyKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lQ29uZmlnIHtcclxuICAgIHRpbWVab25lOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGVUaW1lU2VydmljZSB7XHJcbiAgICByZWFkb25seSBjb25maWc6IERhdGVUaW1lQ29uZmlnO1xyXG4gICAgdXNlVGltZVpvbmUob2Zmc2V0OiBudW1iZXIpO1xyXG5cclxuICAgIGJiRm9ybWF0RGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmc7IFxyXG4gICAgXHJcbiAgICBmb3JtYXRUaW1lKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgZm9ybWF0RGF0ZU9wdGlvbmFsKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgZm9ybWF0U2hvcnREYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRNaWRkbGVEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRMb25nRGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TW9udGgodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdExvbmdNb250aCh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0WWVhcih2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0V2Vlayh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0U2hvcnRXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRTaG9ydERhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRNaWRkbGVEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nOyAgICBcclxuICAgIGZvcm1hdExvbmdEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0RnVsbERhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRTaG9ydERhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmc7ICAgIFxyXG4gICAgZm9ybWF0TG9uZ0RhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nOyAgICBcclxuICAgIGZvcm1hdFNob3J0VGltZSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TG9uZ1RpbWUodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFNob3J0RGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRMb25nRGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRMb25nTW9udGhEYXkodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFNob3J0TW9udGhEYXkodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdERhdGVSYW5nZSh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXREYXRlVGltZVJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdElTT1dlZWsodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFNob3J0SVNPV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0SVNPV2Vla09yZGluYWwodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdERhdGVZKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRMb25nRGF0ZVkodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lTG9uZyh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZyh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kcyh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0RWxhcHNlZEludGVydmFsKHZhbHVlOiBhbnksIHN0YXJ0OiBhbnkpOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0RGF0ZUpTT04oZGF0ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZ2V0TmV4dFN0YXJ0KHZhbHVlOiBhbnksIGNhdGVnb3J5OiBzdHJpbmcpOiBhbnk7XHJcbiAgICBnZXRQcmV2U3RhcnQodmFsdWU6IGFueSwgY2F0ZWdvcnk6IHN0cmluZyk6IGFueTtcclxuICAgIGdldE5vd1N0YXJ0KGNhdGVnb3J5OiBzdHJpbmcpOiBhbnk7XHJcblxyXG4gICAgYWRkSG91cnModmFsdWU6IGFueSwgaG91cnM6IG51bWJlcik6IGFueTtcclxuICAgIHRvU3RhcnREYXkodmFsdWU6IGFueSk6IGFueTtcclxuICAgIHRvRW5kRGF5KHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55O1xyXG4gICAgdG9TdGFydFdlZWsodmFsdWU6IGFueSk6IGFueTtcclxuICAgIHRvRW5kV2Vlayh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueTtcclxuICAgIHRvU3RhcnRNb250aCh2YWx1ZTogYW55KTogYW55O1xyXG4gICAgdG9FbmRNb250aCh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueTtcclxuICAgIHRvU3RhcnRZZWFyKHZhbHVlOiBhbnkpOiBhbnk7XHJcbiAgICB0b0VuZFllYXIodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnk7XHJcbiBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVRpbWVQcm92aWRlciBleHRlbmRzIElEYXRlVGltZVNlcnZpY2UsIG5nLklTZXJ2aWNlUHJvdmlkZXIge1xyXG5cclxufVxyXG5cclxuY2xhc3MgRGF0ZVRpbWUgaW1wbGVtZW50cyBJRGF0ZVRpbWVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2NvbmZpZzogRGF0ZVRpbWVDb25maWc7XHJcbiAgICBwcm90ZWN0ZWQgX21vbWVudFJhbmdlZCA9IG5ldyBBcnJheSgneWVhcicsICdtb250aCcsICd3ZWVrJywgJ2lzb3dlZWsnLCAnZGF5Jyk7XHJcbiAgICBwcm90ZWN0ZWQgX2RlZmF1bHRGb3JtYXQgPSAnTEwnXHJcblxyXG4gICAgcHJpdmF0ZSBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGFuZ3VsYXIuaXNVbmRlZmluZWQodmFsdWUpIHx8IHZhbHVlID09PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZ2UodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZGF5JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX21vbWVudFJhbmdlZC5pbmRleE9mKHZhbHVlKVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZGF5J1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb21lbnRSYW5nZWRbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE9wZXJhdGlvblJhbmdlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2RheSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmFuZ2UgPSB2YWx1ZSA9PSAnaXNvd2VlaycgPyAnd2VlaycgOiB2YWx1ZSxcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLl9tb21lbnRSYW5nZWQuaW5kZXhPZihyYW5nZSlcclxuXHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2RheSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9tZW50UmFuZ2VkW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXREYXRlVGltZSh2YWx1ZTogYW55LCBiYXNpY0Zvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICBmb3JtYXRUcGw6IHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1hdFRwbCA9IGJhc2ljRm9ybWF0ID8gYmFzaWNGb3JtYXQgOiB0aGlzLl9kZWZhdWx0Rm9ybWF0O1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoZm9ybWF0VHBsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdERhdGVUaW1lWSh2YWx1ZTogYW55LCBiYXNpY0Zvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICBub3dEYXRlOiBhbnksXHJcbiAgICAgICAgICAgIGZvcm1hdE1vbWVudDogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm93RGF0ZSA9IG1vbWVudCgpO1xyXG4gICAgICAgIGZvcm1hdE1vbWVudCA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQpO1xyXG5cclxuICAgICAgICBpZiAobm93RGF0ZS55ZWFyKCkgPT0gZGF0ZS55ZWFyKCkpIHtcclxuICAgICAgICAgICAgZm9ybWF0TW9tZW50ID0gZm9ybWF0TW9tZW50LnJlcGxhY2UoL1kvZywgJycpLnJlcGxhY2UoL15cXFd8XFxXJHxcXFdcXFcvLCAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoZm9ybWF0TW9tZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdERheSh2YWx1ZTogYW55LCBiYXNpY0Zvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICBmb3JtYXQgPSBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KGJhc2ljRm9ybWF0ID8gYmFzaWNGb3JtYXQgOiB0aGlzLl9kZWZhdWx0Rm9ybWF0KSxcclxuICAgICAgICAgICAgZm9ybWF0TW9udGhZZWFybGVzcyA9IGZvcm1hdC5yZXBsYWNlKC9ZL2csICcnKS5yZXBsYWNlKC9eXFxXfFxcVyR8XFxXXFxXLywgJycpLnJlcGxhY2UoL00vZywgJycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KGZvcm1hdE1vbnRoWWVhcmxlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0TW9udGhEYXkodmFsdWU6IGFueSwgYmFzaWNGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgZm9ybWF0ID0gYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQsXHJcbiAgICAgICAgICAgIGZvcm1hdExMID0gbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdChmb3JtYXQpLFxyXG4gICAgICAgICAgICBmb3JtYXRZZWFybGVzc0xMID0gZm9ybWF0TEwucmVwbGFjZSgvWS9nLCAnJykucmVwbGFjZSgvXlxcV3xcXFckfFxcV1xcVy8sICcnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChmb3JtYXRZZWFybGVzc0xMKTtcclxuICAgIH1cclxuXHJcbi8vICB1c2UgdGltZXpvbmUgbm90IHRlc3RpbmdcclxuICAgIHByaXZhdGUgZm9ybWF0UmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55LCBiYXNpY0Zvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgZGF0ZVN0YXJ0OiBhbnksXHJcbiAgICAgICAgICAgIGRhdGVFbmQ6IGFueSxcclxuICAgICAgICAgICAgZm9ybWF0ID0gYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlMSkpIHtcclxuICAgICAgICAgICAgZGF0ZVN0YXJ0ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlU3RhcnQgPSAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkgPyAgbW9tZW50KHZhbHVlMSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSkgOiBtb21lbnQodmFsdWUxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUyKSkge1xyXG4gICAgICAgICAgICBkYXRlRW5kID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlRW5kID0gKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpID8gIG1vbWVudCh2YWx1ZTIpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpIDogbW9tZW50KHZhbHVlMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZVN0YXJ0ID09PSBudWxsICYmIGRhdGVFbmQgPT09IG51bGwpIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgaWYgKGRhdGVTdGFydCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZUVuZC5mb3JtYXQoYmFzaWNGb3JtYXQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZUVuZCA9PT0gbnVsbCB8fCBkYXRlU3RhcnQuaXNTYW1lKGRhdGVFbmQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlU3RhcnQuZm9ybWF0KGJhc2ljRm9ybWF0KTs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZVN0YXJ0LmlzQWZ0ZXIoZGF0ZUVuZCkpIHtcclxuICAgICAgICAgICAgLy8gdG9kbyBsb2NhbGl6YXRpb25cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRlIHJhbmdlIGVycm9yLiBTdGFydCBkYXRlIGlzIG1vcmUgdGhhbiBlbmQgZGF0ZS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlU3RhcnQueWVhcigpID09IGRhdGVFbmQueWVhcigpKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRlU3RhcnQubW9udGgoKSA9PSBkYXRlRW5kLm1vbnRoKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERheShkYXRlU3RhcnQsIGJhc2ljRm9ybWF0KSArICctJyArIGRhdGVFbmQuZm9ybWF0KGJhc2ljRm9ybWF0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdE1vbnRoRGF5KGRhdGVTdGFydCwgYmFzaWNGb3JtYXQpICsgJy0nICsgZGF0ZUVuZC5mb3JtYXQoYmFzaWNGb3JtYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGVTdGFydC5mb3JtYXQoYmFzaWNGb3JtYXQpICsgJy0nICsgZGF0ZUVuZC5mb3JtYXQoYmFzaWNGb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvU3RhcnRSYW5nZSh2YWx1ZTogYW55LCByYW5nZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGUuc3RhcnRPZihyYW5nZSkudG9EYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b0VuZFJhbmdlKHZhbHVlOiBhbnksIHJhbmdlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICByZXN1bHQ6IGFueSxcclxuICAgICAgICAgICAgbXNzT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNOdW1iZXIob2Zmc2V0KSkge1xyXG4gICAgICAgICAgICBtc3NPZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2NvbmZpZy50aW1lWm9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1zc09mZnNldCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBkYXRlLnN0YXJ0T2YocmFuZ2UpLmFkZChtc3NPZmZzZXQsICdtaWxsaXNlY29uZHMnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBkYXRlLnN0YXJ0T2YocmFuZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGUuc3RhcnRPZihyYW5nZSkudG9EYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b0RhdGVXaXRoVGltZSh2YWx1ZTogYW55LCBmb3JtYXREYXRlOiBzdHJpbmcsIGZvcm1hdFRpbWU6IHN0cmluZywgZmlyc3RUaW1lPzogYm9vbGVhbik6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG5vd0RhdGU6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vd0RhdGUgPSBtb21lbnQoKTtcclxuICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGUuZm9ybWF0KGZvcm1hdFRpbWUpICsgJyAnICsgZGF0ZS5mb3JtYXQoZm9ybWF0RGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZGF0ZS5mb3JtYXQoZm9ybWF0RGF0ZSkgKyAnICcgKyBkYXRlLmZvcm1hdChmb3JtYXRUaW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b1RvZGF5RGF0ZSh2YWx1ZTogYW55LCBmb3JtYXREYXRlOiBzdHJpbmcsIGZvcm1hdFRpbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgcmVzdWx0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG5vd0RhdGU6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vd0RhdGUgPSBtb21lbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKG5vd0RhdGUueWVhcigpID09IGRhdGUueWVhcigpICYmIG5vd0RhdGUubW9udGgoKSA9PSBkYXRlLm1vbnRoKCkgJiYgbm93RGF0ZS5kYXkoKSA9PSBkYXRlLmRheSgpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGUuZm9ybWF0KGZvcm1hdFRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGUuZm9ybWF0KGZvcm1hdERhdGUpICsgJyAnICsgZGF0ZS5mb3JtYXQoZm9ybWF0VGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IERhdGVUaW1lQ29uZmlnKSB7IFxyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZyB8fCB7IHRpbWVab25lOiBudWxsIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IERhdGVUaW1lQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2VUaW1lWm9uZShvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZy50aW1lWm9uZSA9IG9mZnNldDtcclxuICAgIH1cclxuICAgIC8vIGZvcm1hdGluZyBmdW5jdGlvbnMgXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gdG9kbyBPcHRpb25hbFxyXG4gICAgcHVibGljIGZvcm1hdFRpbWUodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTExMJyk7XHJcbiAgICB9XHJcbiAgICAvLyB0b2RvIE9wdGlvbmFsXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZU9wdGlvbmFsKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0wnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIGZvcm1hdHNcclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydERhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJiRm9ybWF0RGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZVdpdGhUaW1lKHZhbHVlLCAnTU0vREQvWVknLCAnTFRTJywgZmlyc3RUaW1lKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdE1pZGRsZURhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdE1vbnRoKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTU0nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ01vbnRoKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTU1NTScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRZZWFyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnWVlZWScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnd3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnRXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAndycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydERhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZVdpdGhUaW1lKHZhbHVlLCAnTCcsICdMVCcpOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TWlkZGxlRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdsbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTExMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdEZ1bGxEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMTEwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlV2l0aFRpbWUodmFsdWUsICdMJywgJ0xUUycsIGZpcnN0VGltZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlV2l0aFRpbWUodmFsdWUsICdsbCcsICdMVFMnLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZVdpdGhUaW1lKHZhbHVlLCAnTEwnLCAnTFRTJywgZmlyc3RUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTFQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ1RpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMVFMnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXlPZldlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdkZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnZGRkZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBmb3JtYXRUaW1lTnVtYmVyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTExMJyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHVibGljIGZvcm1hdExvbmdUaW1lTnVtYmVyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTExMTCcpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vLy0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdNb250aERheSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRNb250aERheSh2YWx1ZSwgJ0xMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0TW9udGhEYXkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TW9udGhEYXkodmFsdWUsICdMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdERhdGVSYW5nZSh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFJhbmdlKHZhbHVlMSwgdmFsdWUyLCAnTEwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZVRpbWVSYW5nZSh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFJhbmdlKHZhbHVlMSwgdmFsdWUyLCAnTExMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXNvIGZ1bmN0aW9uXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRJU09XZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnV1cnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnRJU09XZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnVycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRJU09XZWVrT3JkaW5hbCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ1dvJyk7XHJcbiAgICB9XHJcbiAgICAvLyBzcGVjaWFsIGZvcm1hdHMgXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHllYXIgb3B0aW9uIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IHllYXIgaXMgbm90IGVxdWFsIHRvLCB0aGUgZGF0ZSBvZiBcclxuICAgIHB1YmxpYyBmb3JtYXREYXRlWSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZVkodmFsdWUsICdMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8geWVhciBvcHRpb24gZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgeWVhciBpcyBub3QgZXF1YWwgdG8sIHRoZSBkYXRlIG9mXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGVZKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lWSh2YWx1ZSwgJ0xMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgLy8gU2VwdGVtYmVyIDQgMTk4NiA4OjMwOjI1IFBNIG9yIDg6MzA6MjUgUE1cclxuICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Ub2RheURhdGUodmFsdWUsICdMTCcsICdMVFMnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgIC8vIFNlcCA0IDE5ODYgODozMDoyNSBQTSBvciA4OjMwOjI1IFBNXHJcbiAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZyh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1RvZGF5RGF0ZSh2YWx1ZSwgJ0xMJywgJ0xUUycpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgLy8gU2VwdGVtYmVyIDQgMTk4NiA4OjMwIFBNIG9yIDg6MzAgUE1cclxuICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvVG9kYXlEYXRlKHZhbHVlLCAnTEwnLCAnTFQnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgIC8vIFNlcCA0IDE5ODYgODozMCBQTSBvciA4OjMwIFBNXHJcbiAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Ub2RheURhdGUodmFsdWUsICdsbCcsICdMVCcpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG9kb1xyXG4gICAgcHVibGljIGZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kcyh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG9kb1xyXG4gICAgcHVibGljIGZvcm1hdEVsYXBzZWRJbnRlcnZhbCh2YWx1ZTogYW55LCBzdGFydDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICBub3dEYXRlOiBhbnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHN0YXJ0KSkge1xyXG4gICAgICAgICAgICBub3dEYXRlID0gbW9tZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm93RGF0ZSA9IG1vbWVudChzdGFydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpIHx8ICFub3dEYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZyb21Ob3cobm93RGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGVKU09OKGRhdGU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vbWVudChkYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmF2aWdhdGlvbiBmdW5jdGlvbnMgXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmV4dFN0YXJ0KHZhbHVlOiBhbnksIGNhdGVnb3J5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIHJhbmdlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHJlc3VsdDogYW55O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYW5nZSA9IHRoaXMuZ2V0UmFuZ2UoY2F0ZWdvcnkpO1xyXG4gICAgICAgIHJlc3VsdCA9IG1vbWVudChkYXRlKS5zdGFydE9mKHJhbmdlKS5hZGQodGhpcy5nZXRPcGVyYXRpb25SYW5nZShyYW5nZSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0LnRvRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQcmV2U3RhcnQodmFsdWU6IGFueSwgY2F0ZWdvcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgcmFuZ2U6IHN0cmluZyxcclxuICAgICAgICAgICAgcmVzdWx0OiBhbnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5nZXRSYW5nZShjYXRlZ29yeSk7XHJcbiAgICAgICAgcmVzdWx0ID0gbW9tZW50KGRhdGUpLnN0YXJ0T2YocmFuZ2UpLmFkZCgtMSwgdGhpcy5nZXRPcGVyYXRpb25SYW5nZShyYW5nZSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0LnRvRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3dTdGFydChjYXRlZ29yeTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICByYW5nZTogc3RyaW5nLFxyXG4gICAgICAgICAgICByZXN1bHQ6IGFueTtcclxuXHJcbiAgICAgICAgZGF0ZSA9IG1vbWVudCgpO1xyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLmdldFJhbmdlKGNhdGVnb3J5KVxyXG4gICAgICAgIHJlc3VsdCA9IG1vbWVudChkYXRlKS5zdGFydE9mKHJhbmdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50b0RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSG91cnModmFsdWU6IGFueSwgaG91cnM6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHx8ICFhbmd1bGFyLmlzTnVtYmVyKGhvdXJzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlLmFkZChob3VycywgJ2hvdXJzJykudG9EYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RhcnREYXkodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdGFydFJhbmdlKHZhbHVlLCAnZGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvRW5kRGF5KHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0VuZFJhbmdlKHZhbHVlLCAnZGF5Jywgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdGFydFdlZWsodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdGFydFJhbmdlKHZhbHVlLCAnd2VlaycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0VuZFdlZWsodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRW5kUmFuZ2UodmFsdWUsICd3ZWVrJywgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdGFydE1vbnRoKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RhcnRSYW5nZSh2YWx1ZSwgJ21vbnRoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvRW5kTW9udGgodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRW5kUmFuZ2UodmFsdWUsICdtb250aCcsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RhcnRZZWFyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RhcnRSYW5nZSh2YWx1ZSwgJ3llYXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9FbmRZZWFyKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0VuZFJhbmdlKHZhbHVlLCAneWVhcicsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBEYXRlVGltZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfZGF0ZXRpbWU6IERhdGVUaW1lO1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBEYXRlVGltZUNvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZGF0ZXRpbWU6IERhdGVUaW1lLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0geyB0aW1lWm9uZTogbnVsbH07XHJcbiAgICAgICAgdGhpcy5fZGF0ZXRpbWUgPSBkYXRldGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2RvIE9wdGlvbmFsXHJcbiAgICBwdWJsaWMgdXNlVGltZVpvbmUob2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudXNlVGltZVpvbmUob2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2RvIE9wdGlvbmFsXHJcbiAgICBwdWJsaWMgZm9ybWF0VGltZSh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFRpbWUodmFsdWUsIGZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG9kbyBPcHRpb25hbFxyXG4gICAgcHVibGljIGZvcm1hdERhdGVPcHRpb25hbCh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdERhdGVPcHRpb25hbCh2YWx1ZSwgZm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRTaG9ydERhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRNaWRkbGVEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRNaWRkbGVEYXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdExvbmdEYXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TW9udGgodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdE1vbnRoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ01vbnRoKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRMb25nTW9udGgodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRZZWFyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRZZWFyKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0V2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0V2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0V2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0U2hvcnRXZWVrKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0U2hvcnREYXRlVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdE1pZGRsZURhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRNaWRkbGVEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TG9uZ0RhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0RnVsbERhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRGdWxsRGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydERhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdE1pZGRsZURhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRMb25nRGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYkZvcm1hdERhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuYmJGb3JtYXREYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0VGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0U2hvcnRUaW1lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ1RpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdExvbmdUaW1lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXlPZldlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFNob3J0RGF5T2ZXZWVrKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RheU9mV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TG9uZ0RheU9mV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdNb250aERheSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TG9uZ01vbnRoRGF5KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnRNb250aERheSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0U2hvcnRNb250aERheSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdERhdGVSYW5nZSh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXREYXRlUmFuZ2UodmFsdWUxLCB2YWx1ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXREYXRlVGltZVJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdERhdGVUaW1lUmFuZ2UodmFsdWUxLCB2YWx1ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlzbyBmdW5jdGlvblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0SVNPV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0SVNPV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0SVNPV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0U2hvcnRJU09XZWVrKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0SVNPV2Vla09yZGluYWwodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdElTT1dlZWtPcmRpbmFsKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIHNwZWNpYWwgZm9ybWF0cyBcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8geWVhciBvcHRpb24gZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgeWVhciBpcyBub3QgZXF1YWwgdG8sIHRoZSBkYXRlIG9mIFxyXG4gICAgcHVibGljIGZvcm1hdERhdGVZKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXREYXRlWSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8geWVhciBvcHRpb24gZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgeWVhciBpcyBub3QgZXF1YWwgdG8sIHRoZSBkYXRlIG9mXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGVZKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRMb25nRGF0ZVkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgIC8vIFNlcHRlbWJlciA0IDE5ODYgODozMDoyNSBQTSBvciA4OjMwOjI1IFBNXHJcbiAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcodmFsdWUpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAvLyBTZXAgNCAxOTg2IDg6MzA6MjUgUE0gb3IgODozMDoyNSBQTVxyXG4gICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmcodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmcodmFsdWUpO1xyXG4gICAgfSAgICAgXHJcblxyXG4gICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgLy8gU2VwdGVtYmVyIDQgMTk4NiA4OjMwIFBNIG9yIDg6MzAgUE1cclxuICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0KHZhbHVlKTtcclxuICAgIH0gICAgIFxyXG5cclxuICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgIC8vIFNlcCA0IDE5ODYgODozMCBQTSBvciA4OjMwIFBNXHJcbiAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0KHZhbHVlKTtcclxuICAgIH0gICAgIFxyXG5cclxuICAgIC8vIHRvZG9cclxuICAgIHB1YmxpYyBmb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHModmFsdWU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHModmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZG9cclxuICAgIHB1YmxpYyBmb3JtYXRFbGFwc2VkSW50ZXJ2YWwodmFsdWU6IGFueSwgc3RhcnQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdEVsYXBzZWRJbnRlcnZhbCh2YWx1ZSwgc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRlSlNPTihkYXRlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5nZXREYXRlSlNPTihkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBuYXZpZ2F0aW9uIGZ1bmN0aW9ucyBcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHB1YmxpYyBnZXROZXh0U3RhcnQodmFsdWU6IGFueSwgY2F0ZWdvcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmdldE5leHRTdGFydCh2YWx1ZSwgY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQcmV2U3RhcnQodmFsdWU6IGFueSwgY2F0ZWdvcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmdldFByZXZTdGFydCh2YWx1ZSwgY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3dTdGFydChjYXRlZ29yeTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZ2V0Tm93U3RhcnQoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRIb3Vycyh2YWx1ZTogYW55LCBob3VyczogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuYWRkSG91cnModmFsdWUsIGhvdXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdGFydERheSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudG9TdGFydERheSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvRW5kRGF5KHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudG9FbmREYXkodmFsdWUsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RhcnRXZWVrKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS50b1N0YXJ0V2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvRW5kV2Vlayh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnRvRW5kV2Vlayh2YWx1ZSwgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdGFydE1vbnRoKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS50b1N0YXJ0TW9udGgodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0VuZE1vbnRoKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudG9FbmRNb250aCh2YWx1ZSwgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdGFydFllYXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnRvU3RhcnRZZWFyKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9FbmRZZWFyKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudG9FbmRZZWFyKHZhbHVlLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgRGF0ZVRpbWVQcm92aWRlciBleHRlbmRzIERhdGVUaW1lIGltcGxlbWVudHMgSURhdGVUaW1lUHJvdmlkZXIge1xyXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRpb246IERhdGVUaW1lO1xyXG4gICAgcHJpdmF0ZSBfc2VydmljZTogRGF0ZVRpbWVTZXJ2aWNlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcih7IHRpbWVab25lOiBudWxsIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAkZ2V0KCk6IGFueSB7XHJcbiAgICAgICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2VydmljZSA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlID0gbmV3IERhdGVUaW1lU2VydmljZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncGlwRGF0ZVRpbWUuU2VydmljZScsIFtdKVxyXG4gICAgLnByb3ZpZGVyKCdwaXBEYXRlVGltZScsIERhdGVUaW1lUHJvdmlkZXIpO1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciB0aGlzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcERhdGUnLCBbJ3BpcERhdGVzLlRlbXBsYXRlcyddKTtcclxuXHJcbiAgICB0aGlzTW9kdWxlLmRpcmVjdGl2ZSgncGlwRGF0ZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVNb2RlOiAnQHBpcFRpbWVNb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJyZuZ0Rpc2FibGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcclxuICAgICAgICAgICAgICAgICAgICBuZ0NoYW5nZTogJyYnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkYXRlX2RpcmVjdGl2ZS9kYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ3BpcERhdGVDb250cm9sbGVyJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gVG9kbzogUmVtb3ZlIGRlcGVuZGVuY3kgb24gVHJhbnNsYXRlLiBVc2UgbW9tZW50IGxvY2FsaXphdGlvblxyXG4gICAgdGhpc01vZHVsZS5jb250cm9sbGVyKCdwaXBEYXRlQ29udHJvbGxlcicsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRpbmplY3RvcikgeyAvL3BpcFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICB2YXIgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGVEYXRlOiBhbnkgPSBtb21lbnQubG9jYWxlRGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgbW9tZW50TW9udGhzID0gYW5ndWxhci5pc0FycmF5KGxvY2FsZURhdGUuX21vbnRocykgPyBsb2NhbGVEYXRlLl9tb250aHMgOiBsb2NhbGVEYXRlLl9tb250aHMuZm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgbW9tZW50RGF5cyA9IGFuZ3VsYXIuaXNBcnJheShsb2NhbGVEYXRlLl93ZWVrZGF5cykgPyBsb2NhbGVEYXRlLl93ZWVrZGF5cyA6IGxvY2FsZURhdGUuX3dlZWtkYXlzLmZvcm1hdCxcclxuICAgICAgICAgICAgICAgIG1vbWVudFNob3J0RGF5cyA9IGxvY2FsZURhdGUuX3dlZWtkYXlzTWluLFxyXG4gICAgICAgICAgICAgICAgbW9tZW50Rmlyc3REYXlPZldlZWsgPSBsb2NhbGVEYXRlLl93ZWVrLmRvdztcclxuXHJcbiAgICAgICAgICAgIHZhciBwaXBUcmFuc2xhdGUgPSAkaW5qZWN0b3IuaGFzKCdwaXBUcmFuc2xhdGUnKSA/ICRpbmplY3Rvci5nZXQoJ3BpcFRyYW5zbGF0ZScpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwaXBUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIHBpcFRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbnMoJ2VuJywge1xyXG4gICAgICAgICAgICAgICAgICAgIERBWTogJ0RheScsXHJcbiAgICAgICAgICAgICAgICAgICAgTU9OVEg6ICdNb250aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgWUVBUjogJ1llYXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBpcFRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbnMoJ3J1Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIERBWTogJ9CU0LXQvdGMJyxcclxuICAgICAgICAgICAgICAgICAgICBNT05USDogJ9Cc0LXRgdGP0YYnLFxyXG4gICAgICAgICAgICAgICAgICAgIFlFQVI6ICfQk9C+0LQnICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRheUxhYmVsID0gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgnREFZJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9udGhMYWJlbCA9IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ01PTlRIJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUueWVhckxhYmVsID0gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgnWUVBUicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRheUxhYmVsID0gJ0RheSc7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9udGhMYWJlbCA9ICdNb250aCc7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnllYXJMYWJlbCA9ICdZZWFyJztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRheUxpc3QobW9udGgsIHllYXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IDMxLCBkYXlzID0gW10sIGk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSA0IHx8IG1vbnRoID09PSA2IHx8IG1vbnRoID09PSA5IHx8IG1vbnRoID09PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMzA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGxlYXAgeWVhciAocHJpbWl0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHllYXIgJSA0ID09PSAwID8gMjkgOiAyODtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDI4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vbnRoTGlzdCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbXSwgaTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtb250aHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtb21lbnRNb250aHNbaS0xXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtb250aHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHllYXJMaXN0KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGksXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRZZWFyID0gJHNjb3BlLnRpbWVNb2RlID09PSAnZnV0dXJlJyA/IGN1cnJlbnRZZWFyIDogY3VycmVudFllYXIgLSAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kWWVhciA9ICRzY29wZS50aW1lTW9kZSA9PT0gJ3Bhc3QnID8gY3VycmVudFllYXIgOiBjdXJyZW50WWVhciArIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICB5ZWFycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUudGltZU1vZGUgPT09ICdwYXN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGVuZFllYXI7IGkgPj0gc3RhcnRZZWFyOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcnMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHN0YXJ0WWVhcjsgaSA8PSBlbmRZZWFyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcnMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHllYXJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGp1c3REYXkoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IGRheUxpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXlzLmxlbmd0aCAhPT0gZGF5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRheSA+IGRheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXkgPSBkYXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXlzID0gZGF5cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdiA/IF8uaXNEYXRlKHYpID8gdiA6IG5ldyBEYXRlKHYpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSB2YWx1ZSA/IHZhbHVlLmdldERhdGUoKSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPSB2YWx1ZSA/IHZhbHVlLmdldE1vbnRoKCkgKyAxIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyID0gdmFsdWUgPyB2YWx1ZS5nZXRGdWxsWWVhcigpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZGF5IGxpc3QgaWYgbW9udGggYW5kIHllYXIgd2VyZSBjaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLm1vbnRoICE9PSBtb250aCAmJiAkc2NvcGUueWVhciAhPT0geWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXlzID0gZGF5TGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gdmFsdWVzIHRvIHNjb3BlXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF5ID0gZGF5O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoID0gbW9udGg7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUueWVhciA9IHllYXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhbHVlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF5ICYmICRzY29wZS5tb250aCAmJiAkc2NvcGUueWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUoJHNjb3BlLnllYXIsICRzY29wZS5tb250aCAtIDEsICRzY29wZS5kYXksIDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5uZ0NoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25EYXlDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbk1vbnRoQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFkanVzdERheSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vblllYXJDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWRqdXN0RGF5KCk7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXHJcbiAgICAgICAgICAgIHZhbHVlID0gJHNjb3BlLm1vZGVsID8gXy5pc0RhdGUoJHNjb3BlLm1vZGVsKSA/ICRzY29wZS5tb2RlbCA6IG5ldyBEYXRlKCRzY29wZS5tb2RlbCkgOiBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUuZGF5ID0gdmFsdWUgPyB2YWx1ZS5nZXREYXRlKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUubW9udGggPSB2YWx1ZSA/IHZhbHVlLmdldE1vbnRoKCkgKyAxIDogbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLnllYXIgPSB2YWx1ZSA/IHZhbHVlLmdldEZ1bGxZZWFyKCkgOiBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGF5cyA9IGRheUxpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICRzY29wZS5tb250aHMgPSBtb250aExpc3QoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnllYXJzID0geWVhckxpc3QoKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNhYmxlQ29udHJvbHMgPSAkc2NvcGUuZGlzYWJsZWQgPyAkc2NvcGUuZGlzYWJsZWQoKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVhY3Qgb24gY2hhbmdlc1xyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZ2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJHNjb3BlLmRpc2FibGVkLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlQ29udHJvbHMgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbn0pKCk7XHJcblxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIHRoaXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZVJhbmdlJywgWydwaXBEYXRlcy5UZW1wbGF0ZXMnXSk7XHJcblxyXG4gICAgdGhpc01vZHVsZS5kaXJlY3RpdmUoJ3BpcERhdGVSYW5nZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVNb2RlOiAnQHBpcFRpbWVNb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJyZuZ0Rpc2FibGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbDogJz1uZ01vZGVsJyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBDaGFuZ2VkOiAnJicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwRGF0ZVJhbmdlVHlwZTogJ0AnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcERhdGVGb3JtYXQ6ICdAJyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBOb0xpbmU6ICdAJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZGF0ZV9yYW5nZV9kaXJlY3RpdmUvZGF0ZV9yYW5nZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdwaXBEYXRlUmFuZ2VDb250cm9sbGVyJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8vIFRvZG86IFJlbW92ZSBkZXBlbmRlbmN5IG9uIFRyYW5zbGF0ZS4gVXNlIG1vbWVudCBsb2NhbGl6YXRpb25cclxuICAgIHRoaXNNb2R1bGUuY29udHJvbGxlcigncGlwRGF0ZVJhbmdlQ29udHJvbGxlcicsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRtZE1lZGlhLCAkcm9vdFNjb3BlLCAkaW5qZWN0b3IsICR0aW1lb3V0KSB7IC8vcGlwVHJhbnNsYXRlLCBcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFllYXIsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TW9udGgsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF5LFxyXG4gICAgICAgICAgICAgICAgcHJldlN0YXRlOiBhbnkgPSB7fSwgXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGU6IGFueSA9IHt9LFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlRGF0ZTogYW55ID0gbW9tZW50LmxvY2FsZURhdGEoKSxcclxuICAgICAgICAgICAgICAgIG1vbWVudE1vbnRocyA9IGFuZ3VsYXIuaXNBcnJheShsb2NhbGVEYXRlLl9tb250aHMpID8gbG9jYWxlRGF0ZS5fbW9udGhzIDogbG9jYWxlRGF0ZS5fbW9udGhzLmZvcm1hdCxcclxuICAgICAgICAgICAgICAgIG1vbWVudERheXMgPSBhbmd1bGFyLmlzQXJyYXkobG9jYWxlRGF0ZS5fd2Vla2RheXMpID8gbG9jYWxlRGF0ZS5fd2Vla2RheXMgOiBsb2NhbGVEYXRlLl93ZWVrZGF5cy5mb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBtb21lbnRTaG9ydERheXMgPSBsb2NhbGVEYXRlLl93ZWVrZGF5c01pbixcclxuICAgICAgICAgICAgICAgIG1vbWVudEZpcnN0RGF5T2ZXZWVrID0gbG9jYWxlRGF0ZS5fd2Vlay5kb3c7XHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgcGlwVHJhbnNsYXRlID0gJGluamVjdG9yLmhhcygncGlwVHJhbnNsYXRlJykgPyAkaW5qZWN0b3IuZ2V0KCdwaXBUcmFuc2xhdGUnKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAocGlwVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBwaXBUcmFuc2xhdGUuc2V0VHJhbnNsYXRpb25zKCdlbicsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBFVkVOVF9ORVdfU1RBUlRfVElNRTogJ1N0YXJ0IHRpbWUnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIEVWRU5UX05FV19FTkRfVElNRTogJ0VuZCB0aW1lJ1xyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICBwaXBUcmFuc2xhdGUuc2V0VHJhbnNsYXRpb25zKCdydScsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBFVkVOVF9ORVdfU1RBUlRfVElNRTogJ9Cd0LDRh9Cw0LvQvicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgRVZFTlRfTkVXX0VORF9USU1FOiAn0JrQvtC90LXRhicgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgICRzY29wZS5zdGFydExhYmVsID0gJHNjb3BlLnBpcFN0YXJ0TGFiZWwgPyBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCRzY29wZS5waXBTdGFydExhYmVsKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA6IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ0VWRU5UX05FV19TVEFSVF9USU1FJyk7XHJcbiAgICAgICAgICAgIC8vICAgICAkc2NvcGUuZW5kTGFiZWwgPSAkc2NvcGUucGlwRW5kTGFiZWwgPyBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCRzY29wZS5waXBFbmRMYWJlbClcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgOiBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCdFVkVOVF9ORVdfRU5EX1RJTUUnKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgICRzY29wZS5zdGFydExhYmVsID0gJHNjb3BlLnBpcFN0YXJ0TGFiZWwgPyAkc2NvcGUucGlwU3RhcnRMYWJlbCA6ICdTdGFydCB0aW1lJztcclxuICAgICAgICAgICAgLy8gICAgICRzY29wZS5lbmRMYWJlbCA9ICRzY29wZS5waXBFbmRMYWJlbCA/ICRzY29wZS5waXBFbmRMYWJlbCA6ICdFbmQgdGltZSc7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLmdldFVUQ01vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF5ID0gY3VycmVudERhdGUuZ2V0VVRDRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uRGF5Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25Nb250aENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGUsIGRheU9mV2VlaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKCRzY29wZS55ZWFyLCAkc2NvcGUubW9udGggLSAxLCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKSA/IGRhdGUuZ2V0VVRDRGF5KCkgOiA3O1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS53ZWVrID0gZ2V0V2Vla0J5RGF0ZShkYXlPZldlZWssICRzY29wZS5tb250aCAtIDEsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFdlZWsoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0RGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uWWVhckNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSwgZGF5T2ZXZWVrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygkc2NvcGUueWVhciwgJHNjb3BlLm1vbnRoIC0gMSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKSA/IGRhdGUuZ2V0VVRDRGF5KCkgOiA3O1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS53ZWVrID0gZ2V0V2Vla0J5RGF0ZShkYXlPZldlZWssICRzY29wZS5tb250aCAtIDEsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdFdlZWsoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0RGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uV2Vla0NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdFdlZWsoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0RGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gdmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAkc2NvcGUuaXNEYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICdkYWlseSc7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuaXNXZWVrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnd2Vla2x5JztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5pc01vbnRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnZGFpbHknIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICd3ZWVrbHknIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICdtb250aGx5JztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucGlwQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGlwQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0Q3VycmVudCgpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5kYXkgPSAkc2NvcGUuZGF5O1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLm1vbnRoID0gJHNjb3BlLm1vbnRoO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLnllYXIgPSAkc2NvcGUueWVhcjtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS53ZWVrID0gJHNjb3BlLndlZWs7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuZGF0ZVJhbmdlVHlwZSA9ICRzY29wZS5waXBEYXRlUmFuZ2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLm1vZGVsID0gJHNjb3BlLm1vZGVsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaWxsTGlzdHMoKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF5cyA9IGRheUxpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUud2Vla3MgPSB3ZWVrTGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb250aHMgPSBtb250aExpc3QoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaG9ydE1vbnRocyA9IG1vbnRoTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnllYXJzID0geWVhckxpc3QoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvcnJlY3RXZWVrKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2U3RhdGUubW9kZWwgfHwgcHJldlN0YXRlLm1vZGVsICYmIHByZXZTdGF0ZS5tb2RlbC5nZXRUaW1lKCkgPj0gJHNjb3BlLm1vZGVsLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNoaWZ0IHdlZWsgLT4gaW5jcmVhc2UgbW9udGhcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLndlZWtzICYmICRzY29wZS53ZWVrc1skc2NvcGUud2Vla10gJiYgJHNjb3BlLndlZWtzWyRzY29wZS53ZWVrXS5pZCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubW9udGggPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9udGggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnllYXIgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsTGlzdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAkc2NvcGUubW9kZWwgPyBuZXcgRGF0ZSgkc2NvcGUubW9kZWwpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXkgPSB2YWx1ZSA/IHZhbHVlLmdldFVUQ0RhdGUoKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9udGggPSB2YWx1ZSA/IHZhbHVlLmdldFVUQ01vbnRoKCkgKyAxIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICRzY29wZS55ZWFyID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENGdWxsWWVhcigpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICRzY29wZS53ZWVrID0gdmFsdWUgPyBnZXRXZWVrQnlEYXRlKCRzY29wZS5kYXksICRzY29wZS5tb250aCAtIDEsICRzY29wZS55ZWFyKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsbExpc3RzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3REYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xyXG4gICAgICAgICAgICAkc2NvcGUuJG1kTWVkaWEgPSAkbWRNZWRpYTtcclxuXHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNhYmxlQ29udHJvbHMgPSAkc2NvcGUuZGlzYWJsZWQgPyAkc2NvcGUuZGlzYWJsZWQoKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVhY3Qgb24gY2hhbmdlc1xyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdtb2RlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgkc2NvcGUuZGlzYWJsZWQsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVDb250cm9scyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3BpcERhdGVSYW5nZVR5cGUnLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlICYmIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vblllYXJDbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLnllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUueWVhciA9IGN1cnJlbnRZZWFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uTW9udGhDbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLm1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoID0gY3VycmVudE1vbnRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uRGF5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS55ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRheSA9IGN1cnJlbnREYXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q291bnREYXkobW9udGgsIHllYXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IDMxO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gNCB8fCBtb250aCA9PT0gNiB8fCBtb250aCA9PT0gOSB8fCBtb250aCA9PT0gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDMwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBsZWFwIHllYXIgKHByaW1pdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSB5ZWFyICUgNCA9PT0gMCA/IDI5IDogMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSAyODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkYXlMaXN0KG1vbnRoLCB5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnQsIGRheXMsIGksIGxuO1xyXG5cclxuICAgICAgICAgICAgICAvLyAgbG4gPSAkcm9vdFNjb3BlLiRsYW5ndWFnZSB8fCAnZW4nO1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBnZXRDb3VudERheShtb250aCwgeWVhcik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubmFtZURheXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGRheXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubmFtZURheXMucHVzaChtb21lbnRTaG9ydERheXNbbW9tZW50KFt5ZWFyLCBtb250aCAtIDEsIGldKS53ZWVrZGF5KCldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0V2Vla0J5RGF0ZShkYXksIG1vbnRoLCB5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSwgZGF5T2ZXZWVrLCBzdGFydFdlZWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXkpKTtcclxuICAgICAgICAgICAgICAgIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCkgPyBkYXRlLmdldFVUQ0RheSgpIDogNztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5T2ZXZWVrID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRXZWVrID0gZGF5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFdlZWsgPSBkYXkgKyAxIC0gZGF5T2ZXZWVrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGFydFdlZWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFdlZWsoZGF5LCBjb3VudERheSwgY291bnRQcmV2TW9udGhEYXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbmREYXksIHN0YXJ0RGF5O1xyXG5cclxuICAgICAgICAgICAgICAgIGVuZERheSA9IGRheSArIDYgPiBjb3VudERheSA/IGNvdW50RGF5IC0gZGF5IC0gNiA6IGRheSArIDY7XHJcbiAgICAgICAgICAgICAgICBzdGFydERheSA9IGRheSA+IDAgPyBkYXkgOiBjb3VudFByZXZNb250aERheSArIGRheTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnREYXkudG9TdHJpbmcoKSArICcgLSAnICsgKE1hdGguYWJzKGVuZERheSkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHdlZWtMaXN0KG1vbnRoLCB5ZWFyKSB7IC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0L/QuNGB0L7QuiDQvdCw0YfQsNC70LAg0L3QsNC00LXQu9C4XHJcbiAgICAgICAgICAgICAgICB2YXIgd2Vla3MsIGNvdW50RGF5LCBjb3VudFByZXZNb250aERheSwgc3RhcnRXZWVrO1xyXG5cclxuICAgICAgICAgICAgICAgIHdlZWtzID0gW107ICAvLyDQsiDQvNCw0YHRgdC40LLQtSDQv9C10YDQstGL0LUg0LTQvdC4INC90LXQtNC10LvQuCDQsiDRgtC10LrRg9GJ0LXQvCDQvNC10YHRj9GG0LVcclxuICAgICAgICAgICAgICAgIGNvdW50RGF5ID0gZ2V0Q291bnREYXkobW9udGgsIHllYXIpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRXZWVrID0gZ2V0V2Vla0J5RGF0ZSgxLCBtb250aCAtIDEsIHllYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvdW50UHJldk1vbnRoRGF5ID0gbW9udGggLSAxID8gZ2V0Q291bnREYXkobW9udGggLSAxLCB5ZWFyKSA6IGdldENvdW50RGF5KDEyLCB5ZWFyIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3RhcnRXZWVrIDwgY291bnREYXkgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2Vla3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzdGFydFdlZWssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdldFdlZWsoc3RhcnRXZWVrLCBjb3VudERheSwgY291bnRQcmV2TW9udGhEYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRXZWVrID0gc3RhcnRXZWVrICsgNztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vbnRoTGlzdCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbXSwgaTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtb250aHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtb21lbnRNb250aHNbaS0xXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtb250aHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHllYXJMaXN0KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0WWVhciwgaSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRZZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIHllYXJzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUudGltZU1vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdmdXR1cmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFllYXIgPSBjdXJyZW50WWVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kWWVhciA9IGN1cnJlbnRZZWFyICsgMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwYXN0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZZWFyID0gY3VycmVudFllYXIgLSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFllYXIgPSBjdXJyZW50WWVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm93JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZZWFyID0gY3VycmVudFllYXIgLSA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kWWVhciA9IGN1cnJlbnRZZWFyICsgMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFllYXIgPSBjdXJyZW50WWVhciAtIDUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRZZWFyID0gY3VycmVudFllYXIgKyA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnRpbWVNb2RlID09PSAnZnV0dXJlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHN0YXJ0WWVhcjsgaSA8PSBlbmRZZWFyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcnMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGVuZFllYXI7IGkgPj0gc3RhcnRZZWFyOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcnMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHllYXJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGp1c3REYXkoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IGRheUxpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRobHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAneWVhcmx5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRheSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF5cy5sZW5ndGggIT09IGRheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRheSA+IGRheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRheSA9IGRheXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRheXMgPSBkYXlzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGp1c3RXZWVrKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdlZWtzO1xyXG5cclxuICAgICAgICAgICAgICAgIHdlZWtzID0gd2Vla0xpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUud2VlayA9IGdldFdlZWtCeURhdGUoJHNjb3BlLndlZWssICRzY29wZS5tb250aCAtIDEsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS53ZWVrcyA9IHdlZWtzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSh2KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUsIGRheSwgbW9udGgsIHllYXIsIHdlZWs7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2ID8gbmV3IERhdGUodikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgZGF5ID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENEYXRlKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgbW9udGggPSB2YWx1ZSA/IHZhbHVlLmdldFVUQ01vbnRoKCkgKyAxIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHllYXIgPSB2YWx1ZSA/IHZhbHVlLmdldFVUQ0Z1bGxZZWFyKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgd2VlayA9IHZhbHVlID8gZ2V0V2Vla0J5RGF0ZShkYXksIG1vbnRoIC0gMSwgeWVhcikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gRXhpdCBpZiBub3RoaW5nIHRvIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXkgPT09IGRheSAmJiAkc2NvcGUubW9udGggPT09IG1vbnRoICYmICRzY29wZS55ZWFyID09PSB5ZWFyICYmICRzY29wZS53ZWVrID09PSB3ZWVrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIHZhbHVlcyB0byBzY29wZVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRheSA9IGRheTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb250aCA9IG1vbnRoO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnllYXIgPSB5ZWFyO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLndlZWsgPSB3ZWVrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBkYXRhIHNvdXJjZXNcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXlzID0gZGF5TGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS53ZWVrcyA9IHdlZWtMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgkc2NvcGUueWVhciwgJHNjb3BlLm1vbnRoIC0gMSwgJHNjb3BlLndlZWssIDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUuZ2V0VGltZSgpIC0gdmFsdWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgkc2NvcGUueWVhciwgJHNjb3BlLm1vbnRoIC0gMSwgJHNjb3BlLmRheSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkgLSB2YWx1ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHByZXZTdGF0ZSA9IF8uY2xvbmVEZWVwKGN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUub25DaGFuZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG59KSgpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMnLCBbXHJcbiAgICAncGlwRGF0ZScsXHJcbiAgICAncGlwVGltZVJhbmdlJyxcclxuICAgICdwaXBEYXRlVGltZScsXHJcbiAgICAncGlwVGltZVJhbmdlRWRpdCcsXHJcbiAgICAncGlwRGF0ZVJhbmdlJyxcclxuICAgICdwaXBEYXRlcy5UcmFuc2xhdGUnXHJcbl0pO1xyXG4iLCIvKipcclxuICogQGZpbGUgT3B0aW9uYWwgZmlsdGVyIHRvIHRyYW5zbGF0ZSBzdHJpbmcgcmVzb3VyY2VzXHJcbiAqIEBjb3B5cmlnaHQgRGlnaXRhbCBMaXZpbmcgU29mdHdhcmUgQ29ycC4gMjAxNC0yMDE2XHJcbiAqL1xyXG4gXHJcbi8qIGdsb2JhbCBhbmd1bGFyICovXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciB0aGlzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVzLlRyYW5zbGF0ZScsIFtdKTtcclxuXHJcbiAgICB0aGlzTW9kdWxlLmZpbHRlcigndHJhbnNsYXRlJywgZnVuY3Rpb24gKCRpbmplY3Rvcikge1xyXG4gICAgICAgIHZhciBwaXBUcmFuc2xhdGUgPSAkaW5qZWN0b3IuaGFzKCdwaXBUcmFuc2xhdGUnKSBcclxuICAgICAgICAgICAgPyAkaW5qZWN0b3IuZ2V0KCdwaXBUcmFuc2xhdGUnKSA6IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwaXBUcmFuc2xhdGUgID8gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZShrZXkpIHx8IGtleSA6IGtleTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pKCk7XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIHRoaXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwVGltZVJhbmdlJywgW10pO1xyXG5cclxuICAgIHRoaXNNb2R1bGUuZGlyZWN0aXZlKCdwaXBUaW1lUmFuZ2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBwaXBTdGFydERhdGU6ICc9JyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBFbmREYXRlOiAnPSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RpbWVfcmFuZ2VfZGlyZWN0aXZlL3RpbWVfcmFuZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlOiBhbnksICRlbGVtZW50LCAkYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RGF0ZUpTT04odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmluZVN0YXJ0RGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBTdGFydERhdGUgIT09IG51bGwgJiYgJHNjb3BlLnBpcFN0YXJ0RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydCA9IF8uaXNEYXRlKCRzY29wZS5waXBTdGFydERhdGUpID8gJHNjb3BlLnBpcFN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZ2V0RGF0ZUpTT04oJHNjb3BlLnBpcFN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmluZUVuZERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucGlwRW5kRGF0ZSAhPT0gbnVsbCAmJiAkc2NvcGUucGlwRW5kRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmQgPSBfLmlzRGF0ZSgkc2NvcGUucGlwRW5kRGF0ZSkgPyAkc2NvcGUucGlwRW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZ2V0RGF0ZUpTT04oJHNjb3BlLnBpcEVuZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09ICcxJyB8fCB2YWx1ZSA9PSAndHJ1ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZUVuZERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvQm9vbGVhbigoPGFueT4kYXR0cnMpLnBpcFJlYmluZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgncGlwU3RhcnREYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lU3RhcnREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3BpcEVuZERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lRW5kRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ3BpcC10aW1lLXJhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbn0pKCk7XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIHRoaXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwVGltZVJhbmdlRWRpdCcsIFtdKTtcclxuXHJcbiAgICB0aGlzTW9kdWxlLmRpcmVjdGl2ZSgncGlwVGltZVJhbmdlRWRpdCcsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpcFN0YXJ0RGF0ZTogJz0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcENoYW5nZWQ6ICcmJyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBFbmREYXRlOiAnPScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwU3RhcnRMYWJlbDogJ0AnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcEVuZExhYmVsOiAnQCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICcmbmdEaXNhYmxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwSGlkZVRpbWU6ICc9JyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBTaXplOiAnPSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RpbWVfcmFuZ2VfZWRpdF9kaXJlY3RpdmUvdGltZV9yYW5nZV9lZGl0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ3BpcFRpbWVSYW5nZUVkaXRDb250cm9sbGVyJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gVG9kbzogUmVtb3ZlIGRlcGVuZGVuY3kgb24gVHJhbnNsYXRlLiBVc2UgbW9tZW50IGxvY2FsaXphdGlvblxyXG4gICAgdGhpc01vZHVsZS5jb250cm9sbGVyKCdwaXBUaW1lUmFuZ2VFZGl0Q29udHJvbGxlcicsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJGluamVjdG9yLCBwaXBEYXRlVGltZSkgeyAvL3BpcFRyYW5zbGF0ZVxyXG5cclxuICAgICAgICAgICAgdmFyIHBpcFRyYW5zbGF0ZSA9ICRpbmplY3Rvci5oYXMoJ3BpcFRyYW5zbGF0ZScpID8gJGluamVjdG9yLmdldCgncGlwVHJhbnNsYXRlJykgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBpcFRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcGlwVHJhbnNsYXRlLnNldFRyYW5zbGF0aW9ucygnZW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgRVZFTlRfTkVXX1NUQVJUX1RJTUU6ICdTdGFydCB0aW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBFVkVOVF9ORVdfRU5EX1RJTUU6ICdFbmQgdGltZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGlwVHJhbnNsYXRlLnNldFRyYW5zbGF0aW9ucygncnUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgRVZFTlRfTkVXX1NUQVJUX1RJTUU6ICfQndCw0YfQsNC70L4nLFxyXG4gICAgICAgICAgICAgICAgICAgIEVWRU5UX05FV19FTkRfVElNRTogJ9Ca0L7QvdC10YYnICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhcnRMYWJlbCA9ICRzY29wZS5waXBTdGFydExhYmVsID8gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgkc2NvcGUucGlwU3RhcnRMYWJlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCdFVkVOVF9ORVdfU1RBUlRfVElNRScpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVuZExhYmVsID0gJHNjb3BlLnBpcEVuZExhYmVsID8gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgkc2NvcGUucGlwRW5kTGFiZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgnRVZFTlRfTkVXX0VORF9USU1FJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhcnRMYWJlbCA9ICRzY29wZS5waXBTdGFydExhYmVsID8gJHNjb3BlLnBpcFN0YXJ0TGFiZWwgOiAnU3RhcnQgdGltZSc7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZW5kTGFiZWwgPSAkc2NvcGUucGlwRW5kTGFiZWwgPyAkc2NvcGUucGlwRW5kTGFiZWwgOiAnRW5kIHRpbWUnOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldERhdGVKU09OKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXREdXJhdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCwgZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmRhdGEuc3RhcnREYXRlIHx8ICEkc2NvcGUuZGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbmV3IERhdGUoJHNjb3BlLmRhdGEuc3RhcnREYXRlLmdldFRpbWUoKSArICRzY29wZS5kYXRhLnN0YXJ0VGltZSAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBuZXcgRGF0ZSgkc2NvcGUuZGF0YS5lbmREYXRlLmdldFRpbWUoKSArICRzY29wZS5kYXRhLmVuZFRpbWUgKiA2MCAqIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmQgLSBzdGFydDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVTdGFydERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSwgc3RhcnQsIGVuZDtcclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQvdC1INC30LDQtNCw0L3QsCwg0L7QsdC90YPQu9GP0LXQvCDQuCDQstGL0YXQvtC00LjQvFxyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YS5zdGFydERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0LVj0LvQuCDQvdC1INC30LDQtNCw0L3QviDQvdCw0YfQsNC70YzQvdC+0LUg0LLRgNC10LzRjyAtINC30LDQtNCw0LXQvCDQtdCz0L5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5zdGFydFRpbWUgPT09IHVuZGVmaW5lZCB8fCAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLmVuZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBkYXRlLmdldFRpbWUoKSAtIHBpcERhdGVUaW1lLnRvU3RhcnREYXkoZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0VGltZSA9IE1hdGguZmxvb3IoZGF0ZSAvICgzMCAqIDYwICogMTAwMCkpICogMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID0gJHNjb3BlLmRhdGEuZW5kVGltZSA9PT0gMCA/IDAgOiAkc2NvcGUuZGF0YS5lbmRUaW1lIC0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbmV3IERhdGUoJHNjb3BlLmRhdGEuc3RhcnREYXRlLmdldFRpbWUoKSArICRzY29wZS5kYXRhLnN0YXJ0VGltZSAqIDYwICogMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LXRgdGC0Ywg0LTQu9C40YLQtdC70YzQvdC+0YHRgtGMLCDRgtC+INGB0L7RhdGA0LDQvdGP0LXQvCDQtdC1LiDQlNC70LjRgtC10LvRjNC90L7RgdGC0Ywg0LzQvtC20L3QviDQuNC30LzQtdC90LjRgtGMINGC0L7Qu9GM0LrQviDQuNC30LzQtdC90Y/RjyDQutC+0L3QtdGH0L3Rg9GOINC00LDRgtGDXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kRGF0ZSA9IHBpcERhdGVUaW1lLnRvU3RhcnREYXkoZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBlbmQuZ2V0VGltZSgpIC0gJHNjb3BlLmRhdGEuZW5kRGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kVGltZSA9IE1hdGguZmxvb3IoZW5kIC8gKDMwICogNjAgKiAxMDAwKSkgKiAzMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L3QtdGCINC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDRgdGA0LDQstC90LjQstCw0LXQvCDQtNCw0YLRi1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLmVuZERhdGUuZ2V0VGltZSgpICsgJHNjb3BlLmRhdGEuZW5kVGltZSAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID49IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQvdCw0YfQsNC70YzQvdCw0Y8g0LTQsNGC0LAg0LHQvtC70YzRiNC1LCDRgtC+INC00LLQuNCz0LDQtdC8INC60L7QvdC10YfQvdGD0Y4g0LTQsNGC0YNcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kRGF0ZSA9IHBpcERhdGVUaW1lLnRvU3RhcnREYXkobmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgMzAgKiA2MDAwMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gKCRzY29wZS5kYXRhLnN0YXJ0VGltZSArIDMwKSAlIDE0NDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0VGltZSA9IE1hdGgucm91bmQoJHNjb3BlLmRhdGEuc3RhcnRUaW1lIC8gMzApICogMzA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW5kRGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlLCBzdGFydCwgZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQvdC1INC30LDQtNCw0L3QsCwg0L7QsdC90YPQu9GP0LXQvCDQuCDQstGL0YXQvtC00LjQvFxyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kVGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtWPQu9C4INC90LUg0LfQsNC00LDQvdC+INC60L7QvdC10YfQvdC+0LUg0LLRgNC10LzRjyAtINC30LDQtNCw0LXQvCDQtdCz0L5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5lbmRUaW1lID09PSB1bmRlZmluZWQgfHwgJHNjb3BlLmRhdGEuZW5kVGltZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmRhdGEuc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gZGF0ZS5nZXRUaW1lKCkgLSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gTWF0aC5mbG9vcihkYXRlIC8gKDMwICogNjAgKiAxMDAwKSkgKiAzMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gJHNjb3BlLmRhdGEuc3RhcnRUaW1lID09PSAxNDEwID8gMTQxMCA6ICRzY29wZS5kYXRhLnN0YXJ0VGltZSArIDMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5zdGFydFRpbWUgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgZW5kID0gbmV3IERhdGUoJHNjb3BlLmRhdGEuZW5kRGF0ZS5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5lbmRUaW1lICogNjAgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPj0gZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L3QsNGH0LDQu9GM0L3QsNGPINC00LDRgtCwINCx0L7Qu9GM0YjQtSwg0YLQviDQtNCy0LjQs9Cw0LXQvCDQvdCw0YfQsNC70YzQvdGD0Y4g0LTQsNGC0YNcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydERhdGUgPSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KG5ldyBEYXRlKGVuZC5nZXRUaW1lKCkgLSAzMCAqIDYwMDAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID0gJHNjb3BlLmRhdGEuZW5kVGltZSAlIDE0NDAgPT09IDAgPyAxNDEwIDogJHNjb3BlLmRhdGEuZW5kVGltZSAtIDMwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZFRpbWUgPSBNYXRoLnJvdW5kKCRzY29wZS5kYXRhLmVuZFRpbWUgLyAzMCkgKiAzMDtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmR1cmF0aW9uID0gc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmJpbmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9ICRzY29wZS5kYXRhLnN0YXJ0VGltZSA/ICRzY29wZS5kYXRhLnN0YXJ0VGltZSAqIDYwICogMTAwMCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBpcFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyB0aW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSAkc2NvcGUuZGF0YS5lbmRUaW1lID8gJHNjb3BlLmRhdGEuZW5kVGltZSAqIDYwICogMTAwMCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBpcEVuZERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuZGF0YS5lbmREYXRlLmdldFRpbWUoKSArIHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmJpbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWZpbmVEYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0LCBlbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBTdGFydERhdGUgIT09IG51bGwgJiYgJHNjb3BlLnBpcFN0YXJ0RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBfLmlzRGF0ZSgkc2NvcGUucGlwU3RhcnREYXRlKSA/ICRzY29wZS5waXBTdGFydERhdGUgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gZ2V0RGF0ZUpTT04oJHNjb3BlLnBpcFN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydERhdGUgPSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KHN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPSAoPGFueT5uZXcgRGF0ZShzdGFydCkgLSAkc2NvcGUuZGF0YS5zdGFydERhdGUpIC8gKDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBFbmREYXRlICE9PSBudWxsICYmICRzY29wZS5waXBFbmREYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBfLmlzRGF0ZSgkc2NvcGUucGlwRW5kRGF0ZSkgPyAkc2NvcGUucGlwRW5kRGF0ZSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gZ2V0RGF0ZUpTT04oJHNjb3BlLnBpcEVuZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kRGF0ZSA9IHBpcERhdGVUaW1lLnRvU3RhcnREYXkoZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gKDxhbnk+bmV3IERhdGUoZW5kKSAtICRzY29wZS5kYXRhLmVuZERhdGUpIC8gKDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVTdGFydERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRW5kRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0LCBpLCBqLCBtaW51dGVzO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBqICogMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpICogNjAgKyBtaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogXy5wYWQoaS50b1N0cmluZygpLCAzLCAnMCcpLnN1YnN0cigwLCAyKSArICc6JyArIF8ucGFkKG1pbnV0ZXMudG9TdHJpbmcoKSwgMiwgJzAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gJzEnIHx8IHZhbHVlID09ICd0cnVlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kVGltZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5kdXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd1RpbWUgPSAhdG9Cb29sZWFuKCRzY29wZS5waXBIaWRlVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGluaXRpYWxpemUgZGF0YVxyXG4gICAgICAgICAgICAkc2NvcGUuaW50ZXJ2YWxUaW1lQ29sbGVjdGlvbiA9IGdldFRpbWVJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBpbml0RGF0ZSgpO1xyXG4gICAgICAgICAgICBkZWZpbmVEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBwcm9jZXNzIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZVN0YXJ0RGF0ZSA9IGZ1bmN0aW9uIChuZXdWKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBpcENoYW5nZWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZUVuZERhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUVuZERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmR1cmF0aW9uID0gc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5waXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25DaGFuZ2VTdGFydFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0RGF0ZSA9IHBpcERhdGVUaW1lLnRvU3RhcnREYXkobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBpcENoYW5nZWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZUVuZFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmREYXRlID0gcGlwRGF0ZVRpbWUudG9TdGFydERheShuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUVuZERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmR1cmF0aW9uID0gc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5waXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmRpc2FibGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaEdyb3VwKFskc2NvcGUucGlwU3RhcnREYXRlLCAkc2NvcGUucGlwRW5kRGF0ZV0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5iaW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgkc2NvcGUuZGlzYWJsZWQsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVDb250cm9scyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBjbGFzc1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygncGlwLXRpbWUtcmFuZ2UtZWRpdCcpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2RhdGVfZGlyZWN0aXZlL2RhdGUuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJwaXAtZGF0ZSBsYXlvdXQtcm93IGZsZXhcIiB0YWJpbmRleD1cIi0xXCI+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lciBmbGV4XCI+PG1kLXNlbGVjdCBjbGFzcz1cInBpcC1kYXRlLWRheSBmbGV4XCIgbmctZGlzYWJsZWQ9XCJkaXNhYmxlQ29udHJvbHNcIiBuZy1tb2RlbD1cImRheVwiIHBsYWNlaG9sZGVyPVwie3tkYXlMYWJlbH19XCIgbmctY2hhbmdlPVwib25EYXlDaGFuZ2VkKClcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0XCIgbmctcmVwZWF0PVwib3B0IGluIGRheXMgdHJhY2sgYnkgb3B0XCI+e3s6OiBvcHQgfX08L21kLW9wdGlvbj48L21kLXNlbGVjdD48L21kLWlucHV0LWNvbnRhaW5lcj48ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyLXNlcGFyYXRvciBmbGV4LWZpeGVkXCI+PC9kaXY+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lciBmbGV4XCI+PG1kLXNlbGVjdCBjbGFzcz1cInBpcC1kYXRlLW1vbnRoZmxleFwiIG5nLWRpc2FibGVkPVwiZGlzYWJsZUNvbnRyb2xzXCIgbmctbW9kZWw9XCJtb250aFwiIHBsYWNlaG9sZGVyPVwie3ttb250aExhYmVsfX1cIiBuZy1jaGFuZ2U9XCJvbk1vbnRoQ2hhbmdlZCgpXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBtb250aHMgdHJhY2sgYnkgb3B0LmlkXCI+e3s6OiBvcHQubmFtZSB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXItc2VwYXJhdG9yIGZsZXgtZml4ZWRcIj48L2Rpdj48bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIj48bWQtc2VsZWN0IGNsYXNzPVwicGlwLWRhdGUteWVhciBmbGV4XCIgbmctZGlzYWJsZWQ9XCJkaXNhYmxlQ29udHJvbHNcIiBuZy1tb2RlbD1cInllYXJcIiBwbGFjZWhvbGRlcj1cInt7eWVhckxhYmVsfX1cIiBuZy1jaGFuZ2U9XCJvblllYXJDaGFuZ2VkKClcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0XCIgbmctcmVwZWF0PVwib3B0IGluIHllYXJzIHRyYWNrIGJ5IG9wdFwiPnt7Ojogb3B0IH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4oZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2RhdGVfcmFuZ2VfZGlyZWN0aXZlL2RhdGVfcmFuZ2UuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJwaXAtZGF0ZS1yYW5nZSBsYXlvdXQtcm93IGZsZXhcIiB0YWJpbmRleD1cIi0xXCI+PG1kLWlucHV0LWNvbnRhaW5lciBuZy1zaG93PVwiaXNEYXkoKVwiIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIHBpcC1kYXkgZmxleFwiIG5nLWNsYXNzPVwie1xcJ2ZsZXgtZml4ZWRcXCcgOiAkbWRNZWRpYShcXCdndC14c1xcJyl9XCI+PG1kLXNlbGVjdCBjbGFzcz1cInNlbGVjdC1kYXlcIiBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6IHBpcE5vTGluZX1cIiBuZy1kaXNhYmxlPVwie3tkaXNhYmxlQ29udHJvbHN9fVwiIG1kLW9uLW9wZW49XCJvbkRheUNsaWNrKClcIiBuZy1tb2RlbD1cImRheVwiIG5nLWNoYW5nZT1cIm9uRGF5Q2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ7e2RheUxhYmVsfX1cIiBhcmlhLWxhYmVsPVwiREFZXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBkYXlzIHRyYWNrIGJ5IG9wdFwiPnt7bmFtZURheXNbJGluZGV4XX19IHt7IG9wdCB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxtZC1pbnB1dC1jb250YWluZXIgbmctc2hvdz1cImlzV2VlaygpXCIgY2xhc3M9XCJpbnB1dC1jb250YWluZXIgZmxleFwiIG5nLWNsYXNzPVwie1xcJ2ZsZXgtZml4ZWRcXCcgOiAkbWRNZWRpYShcXCdndC14c1xcJyl9XCI+PG1kLXNlbGVjdCBjbGFzcz1cInNlbGVjdC13ZWVrXCIgbmctY2xhc3M9XCJ7XFwncGlwLW5vLWxpbmVcXCcgOiBwaXBOb0xpbmV9XCIgbmctZGlzYWJsZT1cInt7ZGlzYWJsZUNvbnRyb2xzfX1cIiBuZy1tb2RlbD1cIndlZWtcIiBuZy1jaGFuZ2U9XCJvbldlZWtDaGFuZ2UoKVwiIHBsYWNlaG9sZGVyPVwie3t3ZWVrTGFiZWx9fVwiIGFyaWEtbGFiZWw9XCJXRUVLXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiB3ZWVrcyB0cmFjayBieSBvcHQuaWRcIj57eyBvcHQubmFtZSB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxkaXYgY2xhc3M9XCJmbGV4LWZpeGVkXCIgbmctY2xhc3M9XCJ7XFwnc3BhY2UxNlxcJzogJG1kTWVkaWEoXFwnZ3QteHNcXCcpLCBcXCdzcGFjZThcXCc6ICRtZE1lZGlhKFxcJ3hzXFwnKX1cIiBuZy1zaG93PVwiaXNEYXkoKSB8fCBpc1dlZWsoKVwiPjwvZGl2PjxtZC1pbnB1dC1jb250YWluZXIgbmctc2hvdz1cImlzTW9udGgoKSAmJiAhbW9udGhGb3JtYXRTaG9ydFwiIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIiBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPjxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3QtbW9udGhcIiBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6IHBpcE5vTGluZX1cIiBuZy1kaXNhYmxlPVwie3tkaXNhYmxlQ29udHJvbHN9fVwiIG1kLW9uLW9wZW49XCJvbk1vbnRoQ2xpY2soKVwiIG5nLW1vZGVsPVwibW9udGhcIiBuZy1jaGFuZ2U9XCJvbk1vbnRoQ2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ7e21vbnRoTGFiZWx9fVwiIGFyaWEtbGFiZWw9XCJNT05USFwiPjxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHQuaWRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4gbW9udGhzIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC5uYW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PG1kLWlucHV0LWNvbnRhaW5lciBuZy1zaG93PVwiaXNNb250aCgpICYmIG1vbnRoRm9ybWF0U2hvcnRcIiBjbGFzcz1cImZsZXggaW5wdXQtY29udGFpbmVyXCIgbmctY2xhc3M9XCJ7XFwnZmxleC1maXhlZFxcJyA6ICRtZE1lZGlhKFxcJ2d0LXhzXFwnKX1cIj48bWQtc2VsZWN0IGNsYXNzPVwic2VsZWN0LW1vbnRoXCIgbmctY2xhc3M9XCJ7XFwncGlwLW5vLWxpbmVcXCcgOiBwaXBOb0xpbmV9XCIgbmctZGlzYWJsZT1cInt7ZGlzYWJsZUNvbnRyb2xzfX1cIiBtZC1vbi1vcGVuPVwib25Nb250aENsaWNrKClcIiBuZy1tb2RlbD1cIm1vbnRoXCIgbmctY2hhbmdlPVwib25Nb250aENoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwie3ttb250aExhYmVsfX1cIiBhcmlhLWxhYmVsPVwiTU9OVEhcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0LmlkXCIgbmctcmVwZWF0PVwib3B0IGluIHNob3J0TW9udGhzIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC5uYW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PGRpdiBjbGFzcz1cImZsZXgtZml4ZWRcIiBuZy1jbGFzcz1cIntcXCdzcGFjZTE2XFwnOiAkbWRNZWRpYShcXCdndC14c1xcJyksIFxcJ3NwYWNlOFxcJzogJG1kTWVkaWEoXFwneHNcXCcpfVwiIG5nLXNob3c9XCJpc01vbnRoKClcIj48L2Rpdj48bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIiBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPjxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3QteWVhclwiIG5nLWNsYXNzPVwie1xcJ3BpcC1uby1saW5lXFwnIDogcGlwTm9MaW5lfVwiIG5nLWRpc2FibGU9XCJ7e2Rpc2FibGVDb250cm9sc319XCIgbWQtb24tb3Blbj1cIm9uWWVhckNsaWNrKClcIiBuZy1tb2RlbD1cInllYXJcIiBuZy1jaGFuZ2U9XCJvblllYXJDaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cInt7eWVhckxhYmVsfX1cIiBhcmlhLWxhYmVsPVwiWUVBUlwiPjxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4geWVhcnMgdHJhY2sgYnkgb3B0XCI+e3sgb3B0IH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4oZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3RpbWVfcmFuZ2VfZGlyZWN0aXZlL3RpbWVfcmFuZ2UuaHRtbCcsXG4gICAgJzxwPjxzcGFuIG5nLWlmPVwiZGF0YS5zdGFydCAhPSBudWxsXCI+e3tkYXRhLnN0YXJ0IHwgZm9ybWF0TG9uZ0RhdGVUaW1lfX08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2VwYXJhdG9yXCIgbmctaWY9XCJkYXRhLnN0YXJ0ICYmIGRhdGEuZW5kXCI+LTwvc3Bhbj4gPHNwYW4gbmctaWY9XCJkYXRhLmVuZCAhPSBudWxsXCI+e3tkYXRhLmVuZCB8IGZvcm1hdExvbmdEYXRlVGltZX19PC9zcGFuPjwvcD4nKTtcbn1dKTtcbn0pKCk7XG5cbihmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVzLlRlbXBsYXRlcycsIFtdKTtcbn1cbm1vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgndGltZV9yYW5nZV9lZGl0X2RpcmVjdGl2ZS90aW1lX3JhbmdlX2VkaXQuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJldmVudC1lZGl0IGxheW91dC1yb3cgbGF5b3V0LXhzLWNvbHVtbiBmbGV4IGxheW91dC1hbGlnbi1zdGFydC1zdGFydFwiPjxkaXYgZmxleD1cIjQ3XCIgY2xhc3M9XCJzdGFydC10aW1lLWNvbnRhaW5lclwiPjxwIGNsYXNzPVwidGV4dC1jYXB0aW9uIHRleHQtZ3JleVwiPnt7c3RhcnRMYWJlbH19PC9wPjxkaXYgY2xhc3M9XCJsYXlvdXQtcm93IGxheW91dC1hbGlnbi1zcGFjZS1iZXR3ZWVuLWNlbnRlclwiPjxkaXYgY2xhc3M9XCJwaXAtZGF0ZXBpY2tlci1jb250YWluZXJcIiBmbGV4PVwiNDlcIj48bWQtZGF0ZXBpY2tlciBuZy1tb2RlbD1cImRhdGEuc3RhcnREYXRlXCIgeG1kLXBsYWNlaG9sZGVyPVwie3tzdGFydExhYmVsfX1cIiBuZy1jaGFuZ2U9XCJvbkNoYW5nZVN0YXJ0RGF0ZSgpXCIgbmctZGlzYWJsZWQ9XCJpc0Rpc2FibGVkKClcIiBhcmlhLWxhYmVsPVwiU1RBUlQtREFURVwiPjwvbWQtZGF0ZXBpY2tlcj48L2Rpdj48ZGl2IGZsZXg9XCJcIiBuZy1pZj1cInNob3dUaW1lXCI+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPjxtZC1zZWxlY3QgYXJpYS1sYWJlbD1cIlNUQVJULVRJTUVcIiBuZy1tb2RlbD1cImRhdGEuc3RhcnRUaW1lXCIgbmctZGlzYWJsZWQ9XCJpc0Rpc2FibGVkKClcIiBuZy1jaGFuZ2U9XCJvbkNoYW5nZVN0YXJ0VGltZShkYXRhLnN0YXJ0VGltZSlcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0LmlkXCIgbmctcmVwZWF0PVwib3B0IGluIGludGVydmFsVGltZUNvbGxlY3Rpb24gdHJhY2sgYnkgb3B0LmlkXCI+e3sgb3B0LnRpbWUgfX08L21kLW9wdGlvbj48L21kLXNlbGVjdD48L21kLWlucHV0LWNvbnRhaW5lcj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGZsZXg9XCI0N1wiIGNsYXNzPVwiZW5kLXRpbWUtY29udGFpbmVyXCI+PHAgY2xhc3M9XCJ0ZXh0LWNhcHRpb24gdGV4dC1ncmV5XCI+e3tlbmRMYWJlbH19PC9wPjxkaXYgY2xhc3M9XCJsYXlvdXQtcm93IGxheW91dC1hbGlnbi1zcGFjZS1iZXR3ZWVuLWNlbnRlclwiPjxkaXYgY2xhc3M9XCJwaXAtZGF0ZXBpY2tlci1jb250YWluZXIgZmxleC00OVwiPjxtZC1kYXRlcGlja2VyIG5nLW1vZGVsPVwiZGF0YS5lbmREYXRlXCIgeG1kLXBsYWNlaG9sZGVyPVwie3tlbmRMYWJlbH19XCIgbmctZGlzYWJsZWQ9XCJpc0Rpc2FibGVkKClcIiBuZy1jaGFuZ2U9XCJvbkNoYW5nZUVuZERhdGUoKVwiIGFyaWEtbGFiZWw9XCJFTkQtREFURVwiPjwvbWQtZGF0ZXBpY2tlcj48L2Rpdj48ZGl2IGZsZXg9XCJcIiBuZy1pZj1cInNob3dUaW1lXCI+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPjxtZC1zZWxlY3QgYXJpYS1sYWJlbD1cIkVORC1USU1FXCIgbmctbW9kZWw9XCJkYXRhLmVuZFRpbWVcIiBuZy1jaGFuZ2U9XCJvbkNoYW5nZUVuZFRpbWUoKVwiIG5nLWRpc2FibGVkPVwiaXNEaXNhYmxlZCgpXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBpbnRlcnZhbFRpbWVDb2xsZWN0aW9uIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC50aW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXAtd2VidWktZGF0ZXMtaHRtbC5taW4uanMubWFwXG4iXX0=
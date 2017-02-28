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
            console.log('$scope.data.startTime', $scope.data.startTime);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0ZS9kYXRlLnRzIiwic3JjL2RhdGUvZGF0ZV9maWx0ZXIudHMiLCJzcmMvZGF0ZS9kYXRlX3NlcnZpY2UudHMiLCJzcmMvZGF0ZV9kaXJlY3RpdmUvZGF0ZS50cyIsInNyYy9kYXRlX3JhbmdlX2RpcmVjdGl2ZS9kYXRlX3JhbmdlLnRzIiwic3JjL2RhdGVzLnRzIiwic3JjL2RlcGVuZGVuY2llcy90cmFuc2xhdGUuanMiLCJzcmMvdGltZV9yYW5nZV9kaXJlY3RpdmUvdGltZV9yYW5nZS50cyIsInNyYy90aW1lX3JhbmdlX2VkaXRfZGlyZWN0aXZlL3RpbWVfcmFuZ2VfZWRpdC50cyIsInRlbXAvcGlwLXdlYnVpLWRhdGVzLWh0bWwubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDO0FBRWIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7SUFDMUIscUJBQXFCLEVBQUUsb0JBQW9CO0NBQzlDLENBQUMsQ0FBQzs7QUNKSCxZQUFZLENBQUM7QUFFYiwwQkFBMEIsV0FBZ0I7SUFDdEMsVUFBVSxDQUFDO0lBRVgsTUFBTSxDQUFDLFVBQVUsS0FBVSxFQUFFLE1BQWM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRCxrQ0FBa0MsV0FBZ0I7SUFDOUMsVUFBVSxDQUFDO0lBRVgsTUFBTSxDQUFDLFVBQVUsS0FBVSxFQUFFLE1BQWM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVELDhCQUE4QixXQUFnQjtJQUMxQyxVQUFVLENBQUM7SUFFWCxNQUFNLENBQUMsVUFBVSxLQUFVO1FBQ3ZCLE1B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QUFVLENBQUMsRUFBRTtZQUN6RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFVBQVUsRUFBRSxDQUFDO1lBQ2pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxVQUFVLFFBQVE7WUFDN0MsTUFBTSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFHSCxRQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUNKLENBQUM7QUFFTixDQUFDLENBQUMsRUFBRSxDQUFDOztBQ3BTTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlVGltZScsIFtcclxuICAgICdwaXBEYXRlVGltZS5TZXJ2aWNlJywgJ3BpcERhdGVUaW1lLkZpbHRlcidcclxuXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRUaW1lKHZhbHVlLCBmb3JtYXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlT3B0aW9uYWxGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdERhdGVPcHRpb25hbCh2YWx1ZSwgZm9ybWF0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RhdGVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TG9uZ0RhdGUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydERhdGVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0U2hvcnREYXRlKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TWlkZGxlRGF0ZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRNaWRkbGVEYXRlKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TW9udGhGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdE1vbnRoKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ01vbnRoRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdExvbmdNb250aCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFllYXJGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0WWVhcih2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFdlZWtGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0V2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0V2Vla0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRTaG9ydFdlZWsodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydERhdGVUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFNob3J0RGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNaWRkbGVEYXRlVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRNaWRkbGVEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdEYXRlVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRMb25nRGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydERhdGVMb25nVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnksIGZpcnN0VGltZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55LCBmaXJzdFRpbWU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdEYXRlTG9uZ1RpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55LCBmaXJzdFRpbWU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRMb25nRGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiYkZvcm1hdERhdGVMb25nVGltZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnksIGZpcnN0VGltZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmJiRm9ybWF0RGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRGdWxsRGF0ZVRpbWVGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0RnVsbERhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnRUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdFNob3J0VGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdUaW1lRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdExvbmdUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXlPZldlZWtGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0U2hvcnREYXlPZldlZWsodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nRGF5T2ZXZWVrRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdExvbmdEYXlPZldlZWsodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nTW9udGhEYXlGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TG9uZ01vbnRoRGF5KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnRNb250aERheUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRTaG9ydE1vbnRoRGF5KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZVJhbmdlRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0RGF0ZVJhbmdlKHZhbHVlMSwgdmFsdWUyKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWVSYW5nZUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdERhdGVUaW1lUmFuZ2UodmFsdWUxLCB2YWx1ZTIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRJU09XZWVrRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdElTT1dlZWsodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydElTT1dlZWtGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0U2hvcnRJU09XZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0SVNPV2Vla09yZGluYWxGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0SVNPV2Vla09yZGluYWwodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlWUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXREYXRlWSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdEYXRlWUZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRMb25nRGF0ZVkodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmdGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZ0ZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydEZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5mb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnRGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHNGaWx0ZXIocGlwRGF0ZVRpbWU6IGFueSkge1xyXG4gICAgXCJuZ0luamVjdFwiOyAgXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZVRpbWUuZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RWxhcHNlZEludGVydmFsRmlsdGVyKHBpcERhdGVUaW1lOiBhbnkpIHtcclxuICAgIFwibmdJbmplY3RcIjsgIFxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWU6IGFueSwgc3RhcnQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVUaW1lLmZvcm1hdEVsYXBzZWRJbnRlcnZhbCh2YWx1ZSwgc3RhcnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRlSlNPTkZpbHRlcihwaXBEYXRlVGltZTogYW55KSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7ICBcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlVGltZS5nZXREYXRlSlNPTih2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcERhdGVUaW1lLkZpbHRlcicsIFtdKVxyXG4gICAgLmZpbHRlcignZm9ybWF0VGltZScsIGZvcm1hdFRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXREYXRlT3B0aW9uYWwnLCBmb3JtYXREYXRlT3B0aW9uYWxGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdiYkZvcm1hdERhdGVMb25nVGltZScsIGJiRm9ybWF0RGF0ZUxvbmdUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnREYXRlJywgZm9ybWF0U2hvcnREYXRlRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TWlkZGxlRGF0ZScsIGZvcm1hdE1pZGRsZURhdGVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nRGF0ZScsIGZvcm1hdExvbmdEYXRlRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TW9udGgnLCBmb3JtYXRNb250aEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdNb250aCcsIGZvcm1hdExvbmdNb250aEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFllYXInLCBmb3JtYXRZZWFyRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0V2VlaycsIGZvcm1hdFdlZWtGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydFdlZWsnLCBmb3JtYXRTaG9ydFdlZWtGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydERhdGVUaW1lJywgZm9ybWF0U2hvcnREYXRlVGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdE1pZGRsZURhdGVUaW1lJywgZm9ybWF0TWlkZGxlRGF0ZVRpbWVGaWx0ZXIpICAgIFxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ0RhdGVUaW1lJywgZm9ybWF0TG9uZ0RhdGVUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWUnLCBmb3JtYXRTaG9ydERhdGVMb25nVGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdE1pZGRsZURhdGVMb25nVGltZScsIGZvcm1hdE1pZGRsZURhdGVMb25nVGltZUZpbHRlcikgICAgXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nRGF0ZUxvbmdUaW1lJywgZm9ybWF0TG9uZ0RhdGVMb25nVGltZUZpbHRlcikgICAgXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRGdWxsRGF0ZVRpbWUnLCBmb3JtYXRGdWxsRGF0ZVRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydFRpbWUnLCBmb3JtYXRTaG9ydFRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nVGltZScsIGZvcm1hdExvbmdUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnREYXlPZldlZWsnLCBmb3JtYXRTaG9ydERheU9mV2Vla0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdEYXlPZldlZWsnLCBmb3JtYXRMb25nRGF5T2ZXZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ01vbnRoRGF5JywgZm9ybWF0TG9uZ01vbnRoRGF5RmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnRNb250aERheScsIGZvcm1hdFNob3J0TW9udGhEYXlGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXREYXRlUmFuZ2UnLCBmb3JtYXREYXRlUmFuZ2VGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXREYXRlVGltZVJhbmdlJywgZm9ybWF0RGF0ZVRpbWVSYW5nZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdElTT1dlZWsnLCBmb3JtYXRJU09XZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnRJU09XZWVrJywgZm9ybWF0U2hvcnRJU09XZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0SVNPV2Vla09yZGluYWwnLCBmb3JtYXRJU09XZWVrT3JkaW5hbEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdERhdGVZJywgZm9ybWF0RGF0ZVlGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nRGF0ZVknLCBmb3JtYXRMb25nRGF0ZVlGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcnLCBmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmdGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nJywgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZ0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnQnLCBmb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0RmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQnLCBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kcycsIGZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kc0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdEVsYXBzZWRJbnRlcnZhbCcsIGZvcm1hdEVsYXBzZWRJbnRlcnZhbEZpbHRlcik7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUNvbmZpZyB7XHJcbiAgICB0aW1lWm9uZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlVGltZVNlcnZpY2Uge1xyXG4gICAgcmVhZG9ubHkgY29uZmlnOiBEYXRlVGltZUNvbmZpZztcclxuICAgIHVzZVRpbWVab25lKG9mZnNldDogbnVtYmVyKTtcclxuXHJcbiAgICBiYkZvcm1hdERhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nOyBcclxuICAgIFxyXG4gICAgZm9ybWF0VGltZSh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZztcclxuICAgIGZvcm1hdERhdGVPcHRpb25hbCh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZztcclxuICAgIGZvcm1hdFNob3J0RGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TWlkZGxlRGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TG9uZ0RhdGUodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdE1vbnRoKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRMb25nTW9udGgodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFllYXIodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFdlZWsodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFNob3J0V2Vlayh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0U2hvcnREYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TWlkZGxlRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZzsgICAgXHJcbiAgICBmb3JtYXRMb25nRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdEZ1bGxEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZztcclxuICAgIGZvcm1hdE1pZGRsZURhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nOyAgICBcclxuICAgIGZvcm1hdExvbmdEYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZzsgICAgXHJcbiAgICBmb3JtYXRTaG9ydFRpbWUodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdExvbmdUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRTaG9ydERheU9mV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TG9uZ0RheU9mV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TG9uZ01vbnRoRGF5KHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRTaG9ydE1vbnRoRGF5KHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXREYXRlUmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0RGF0ZVRpbWVSYW5nZSh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRJU09XZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRTaG9ydElTT1dlZWsodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdElTT1dlZWtPcmRpbmFsKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXREYXRlWSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZm9ybWF0TG9uZ0RhdGVZKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmcodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHModmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIGZvcm1hdEVsYXBzZWRJbnRlcnZhbCh2YWx1ZTogYW55LCBzdGFydDogYW55KTogc3RyaW5nO1xyXG5cclxuICAgIGdldERhdGVKU09OKGRhdGU6IGFueSk6IHN0cmluZztcclxuICAgIGdldE5leHRTdGFydCh2YWx1ZTogYW55LCBjYXRlZ29yeTogc3RyaW5nKTogYW55O1xyXG4gICAgZ2V0UHJldlN0YXJ0KHZhbHVlOiBhbnksIGNhdGVnb3J5OiBzdHJpbmcpOiBhbnk7XHJcbiAgICBnZXROb3dTdGFydChjYXRlZ29yeTogc3RyaW5nKTogYW55O1xyXG5cclxuICAgIGFkZEhvdXJzKHZhbHVlOiBhbnksIGhvdXJzOiBudW1iZXIpOiBhbnk7XHJcbiAgICB0b1N0YXJ0RGF5KHZhbHVlOiBhbnkpOiBhbnk7XHJcbiAgICB0b0VuZERheSh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueTtcclxuICAgIHRvU3RhcnRXZWVrKHZhbHVlOiBhbnkpOiBhbnk7XHJcbiAgICB0b0VuZFdlZWsodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnk7XHJcbiAgICB0b1N0YXJ0TW9udGgodmFsdWU6IGFueSk6IGFueTtcclxuICAgIHRvRW5kTW9udGgodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnk7XHJcbiAgICB0b1N0YXJ0WWVhcih2YWx1ZTogYW55KTogYW55O1xyXG4gICAgdG9FbmRZZWFyKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55O1xyXG4gXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGVUaW1lUHJvdmlkZXIgZXh0ZW5kcyBJRGF0ZVRpbWVTZXJ2aWNlLCBuZy5JU2VydmljZVByb3ZpZGVyIHtcclxuXHJcbn1cclxuXHJcbmNsYXNzIERhdGVUaW1lIGltcGxlbWVudHMgSURhdGVUaW1lU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9jb25maWc6IERhdGVUaW1lQ29uZmlnO1xyXG4gICAgcHJvdGVjdGVkIF9tb21lbnRSYW5nZWQgPSBuZXcgQXJyYXkoJ3llYXInLCAnbW9udGgnLCAnd2VlaycsICdpc293ZWVrJywgJ2RheScpO1xyXG4gICAgcHJvdGVjdGVkIF9kZWZhdWx0Rm9ybWF0ID0gJ0xMJ1xyXG5cclxuICAgIHByaXZhdGUgaXNVbmRlZmluZWRPck51bGwodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbHVlKSB8fCB2YWx1ZSA9PT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmdlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2RheSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9tb21lbnRSYW5nZWQuaW5kZXhPZih2YWx1ZSlcclxuXHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2RheSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9tZW50UmFuZ2VkW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRPcGVyYXRpb25SYW5nZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdkYXknO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhbmdlID0gdmFsdWUgPT0gJ2lzb3dlZWsnID8gJ3dlZWsnIDogdmFsdWUsXHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5fbW9tZW50UmFuZ2VkLmluZGV4T2YocmFuZ2UpXHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdkYXknXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbWVudFJhbmdlZFtpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RGF0ZVRpbWUodmFsdWU6IGFueSwgYmFzaWNGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgZm9ybWF0VHBsOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtYXRUcGwgPSBiYXNpY0Zvcm1hdCA/IGJhc2ljRm9ybWF0IDogdGhpcy5fZGVmYXVsdEZvcm1hdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KGZvcm1hdFRwbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXREYXRlVGltZVkodmFsdWU6IGFueSwgYmFzaWNGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgbm93RGF0ZTogYW55LFxyXG4gICAgICAgICAgICBmb3JtYXRNb21lbnQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vd0RhdGUgPSBtb21lbnQoKTtcclxuICAgICAgICBmb3JtYXRNb21lbnQgPSBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KGJhc2ljRm9ybWF0ID8gYmFzaWNGb3JtYXQgOiB0aGlzLl9kZWZhdWx0Rm9ybWF0KTtcclxuXHJcbiAgICAgICAgaWYgKG5vd0RhdGUueWVhcigpID09IGRhdGUueWVhcigpKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdE1vbWVudCA9IGZvcm1hdE1vbWVudC5yZXBsYWNlKC9ZL2csICcnKS5yZXBsYWNlKC9eXFxXfFxcVyR8XFxXXFxXLywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KGZvcm1hdE1vbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXREYXkodmFsdWU6IGFueSwgYmFzaWNGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgZm9ybWF0ID0gbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdChiYXNpY0Zvcm1hdCA/IGJhc2ljRm9ybWF0IDogdGhpcy5fZGVmYXVsdEZvcm1hdCksXHJcbiAgICAgICAgICAgIGZvcm1hdE1vbnRoWWVhcmxlc3MgPSBmb3JtYXQucmVwbGFjZSgvWS9nLCAnJykucmVwbGFjZSgvXlxcV3xcXFckfFxcV1xcVy8sICcnKS5yZXBsYWNlKC9NL2csICcnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChmb3JtYXRNb250aFllYXJsZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdE1vbnRoRGF5KHZhbHVlOiBhbnksIGJhc2ljRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGJhc2ljRm9ybWF0ID8gYmFzaWNGb3JtYXQgOiB0aGlzLl9kZWZhdWx0Rm9ybWF0LFxyXG4gICAgICAgICAgICBmb3JtYXRMTCA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoZm9ybWF0KSxcclxuICAgICAgICAgICAgZm9ybWF0WWVhcmxlc3NMTCA9IGZvcm1hdExMLnJlcGxhY2UoL1kvZywgJycpLnJlcGxhY2UoL15cXFd8XFxXJHxcXFdcXFcvLCAnJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoZm9ybWF0WWVhcmxlc3NMTCk7XHJcbiAgICB9XHJcblxyXG4vLyAgdXNlIHRpbWV6b25lIG5vdCB0ZXN0aW5nXHJcbiAgICBwcml2YXRlIGZvcm1hdFJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSwgYmFzaWNGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGRhdGVTdGFydDogYW55LFxyXG4gICAgICAgICAgICBkYXRlRW5kOiBhbnksXHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGJhc2ljRm9ybWF0ID8gYmFzaWNGb3JtYXQgOiB0aGlzLl9kZWZhdWx0Rm9ybWF0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZTEpKSB7XHJcbiAgICAgICAgICAgIGRhdGVTdGFydCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZVN0YXJ0ID0gKHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY29uZmlnLnRpbWVab25lICE9IG51bGwpID8gIG1vbWVudCh2YWx1ZTEpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpIDogbW9tZW50KHZhbHVlMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlMikpIHtcclxuICAgICAgICAgICAgZGF0ZUVuZCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZUVuZCA9ICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSA/ICBtb21lbnQodmFsdWUyKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKSA6IG1vbWVudCh2YWx1ZTIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGVTdGFydCA9PT0gbnVsbCAmJiBkYXRlRW5kID09PSBudWxsKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChkYXRlU3RhcnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGVFbmQuZm9ybWF0KGJhc2ljRm9ybWF0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGVFbmQgPT09IG51bGwgfHwgZGF0ZVN0YXJ0LmlzU2FtZShkYXRlRW5kKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZVN0YXJ0LmZvcm1hdChiYXNpY0Zvcm1hdCk7O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGVTdGFydC5pc0FmdGVyKGRhdGVFbmQpKSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gbG9jYWxpemF0aW9uXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0ZSByYW5nZSBlcnJvci4gU3RhcnQgZGF0ZSBpcyBtb3JlIHRoYW4gZW5kIGRhdGUuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZVN0YXJ0LnllYXIoKSA9PSBkYXRlRW5kLnllYXIoKSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0ZVN0YXJ0Lm1vbnRoKCkgPT0gZGF0ZUVuZC5tb250aCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXkoZGF0ZVN0YXJ0LCBiYXNpY0Zvcm1hdCkgKyAnLScgKyBkYXRlRW5kLmZvcm1hdChiYXNpY0Zvcm1hdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRNb250aERheShkYXRlU3RhcnQsIGJhc2ljRm9ybWF0KSArICctJyArIGRhdGVFbmQuZm9ybWF0KGJhc2ljRm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlU3RhcnQuZm9ybWF0KGJhc2ljRm9ybWF0KSArICctJyArIGRhdGVFbmQuZm9ybWF0KGJhc2ljRm9ybWF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b1N0YXJ0UmFuZ2UodmFsdWU6IGFueSwgcmFuZ2U6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlLnN0YXJ0T2YocmFuZ2UpLnRvRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9FbmRSYW5nZSh2YWx1ZTogYW55LCByYW5nZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgcmVzdWx0OiBhbnksXHJcbiAgICAgICAgICAgIG1zc09mZnNldDogbnVtYmVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFhbmd1bGFyLmlzTnVtYmVyKG9mZnNldCkpIHtcclxuICAgICAgICAgICAgbXNzT2Zmc2V0ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGltZVpvbmUgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NvbmZpZy50aW1lWm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9jb25maWcudGltZVpvbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtc3NPZmZzZXQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZGF0ZS5zdGFydE9mKHJhbmdlKS5hZGQobXNzT2Zmc2V0LCAnbWlsbGlzZWNvbmRzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZGF0ZS5zdGFydE9mKHJhbmdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlLnN0YXJ0T2YocmFuZ2UpLnRvRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9EYXRlV2l0aFRpbWUodmFsdWU6IGFueSwgZm9ybWF0RGF0ZTogc3RyaW5nLCBmb3JtYXRUaW1lOiBzdHJpbmcsIGZpcnN0VGltZT86IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxyXG4gICAgICAgICAgICBub3dEYXRlOiBhbnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3dEYXRlID0gbW9tZW50KCk7XHJcbiAgICAgICAgaWYgKGZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBkYXRlLmZvcm1hdChmb3JtYXRUaW1lKSArICcgJyArIGRhdGUuZm9ybWF0KGZvcm1hdERhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGUuZm9ybWF0KGZvcm1hdERhdGUpICsgJyAnICsgZGF0ZS5mb3JtYXQoZm9ybWF0VGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9Ub2RheURhdGUodmFsdWU6IGFueSwgZm9ybWF0RGF0ZTogc3RyaW5nLCBmb3JtYXRUaW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxyXG4gICAgICAgICAgICBub3dEYXRlOiBhbnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpbWVab25lICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jb25maWcudGltZVpvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fY29uZmlnLnRpbWVab25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3dEYXRlID0gbW9tZW50KCk7XHJcblxyXG4gICAgICAgIGlmIChub3dEYXRlLnllYXIoKSA9PSBkYXRlLnllYXIoKSAmJiBub3dEYXRlLm1vbnRoKCkgPT0gZGF0ZS5tb250aCgpICYmIG5vd0RhdGUuZGF5KCkgPT0gZGF0ZS5kYXkoKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBkYXRlLmZvcm1hdChmb3JtYXRUaW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBkYXRlLmZvcm1hdChmb3JtYXREYXRlKSArICcgJyArIGRhdGUuZm9ybWF0KGZvcm1hdFRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBEYXRlVGltZUNvbmZpZykgeyBcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWcgfHwgeyB0aW1lWm9uZTogbnVsbCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvbmZpZygpOiBEYXRlVGltZUNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlVGltZVpvbmUob2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jb25maWcudGltZVpvbmUgPSBvZmZzZXQ7XHJcbiAgICB9XHJcbiAgICAvLyBmb3JtYXRpbmcgZnVuY3Rpb25zIFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHRvZG8gT3B0aW9uYWxcclxuICAgIHB1YmxpYyBmb3JtYXRUaW1lKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMTCcpO1xyXG4gICAgfVxyXG4gICAgLy8gdG9kbyBPcHRpb25hbFxyXG4gICAgcHVibGljIGZvcm1hdERhdGVPcHRpb25hbCh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGF0ZSBmb3JtYXRzXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYkZvcm1hdERhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0RhdGVXaXRoVGltZSh2YWx1ZSwgJ01NL0REL1lZJywgJ0xUUycsIGZpcnN0VGltZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRNaWRkbGVEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRNb250aCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ01NJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdNb250aCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ01NTU0nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0WWVhcih2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ1lZWVknKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0V2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ3d3Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0V2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0RhdGVXaXRoVGltZSh2YWx1ZSwgJ0wnLCAnTFQnKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdE1pZGRsZURhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnbGxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRGdWxsRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMTExMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZVdpdGhUaW1lKHZhbHVlLCAnTCcsICdMVFMnLCBmaXJzdFRpbWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZVdpdGhUaW1lKHZhbHVlLCAnbGwnLCAnTFRTJywgZmlyc3RUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0RhdGVXaXRoVGltZSh2YWx1ZSwgJ0xMJywgJ0xUUycsIGZpcnN0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0VGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xUJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTFRTJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0RGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnZGQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RheU9mV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ2RkZGQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgZm9ybWF0VGltZU51bWJlcih2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMTCcpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBmb3JtYXRMb25nVGltZU51bWJlcih2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMTEwnKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLy8tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nTW9udGhEYXkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TW9udGhEYXkodmFsdWUsICdMTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydE1vbnRoRGF5KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdE1vbnRoRGF5KHZhbHVlLCAnTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXREYXRlUmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRSYW5nZSh2YWx1ZTEsIHZhbHVlMiwgJ0xMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdERhdGVUaW1lUmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRSYW5nZSh2YWx1ZTEsIHZhbHVlMiwgJ0xMTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlzbyBmdW5jdGlvblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0SVNPV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ1dXJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0SVNPV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ1cnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0SVNPV2Vla09yZGluYWwodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdXbycpO1xyXG4gICAgfVxyXG4gICAgLy8gc3BlY2lhbCBmb3JtYXRzIFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyB5ZWFyIG9wdGlvbiBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCB5ZWFyIGlzIG5vdCBlcXVhbCB0bywgdGhlIGRhdGUgb2YgXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZVkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWVZKHZhbHVlLCAnTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHllYXIgb3B0aW9uIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IHllYXIgaXMgbm90IGVxdWFsIHRvLCB0aGUgZGF0ZSBvZlxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXRlWSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZVkodmFsdWUsICdMTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgIC8vIFNlcHRlbWJlciA0IDE5ODYgODozMDoyNSBQTSBvciA4OjMwOjI1IFBNXHJcbiAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvVG9kYXlEYXRlKHZhbHVlLCAnTEwnLCAnTFRTJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAvLyBTZXAgNCAxOTg2IDg6MzA6MjUgUE0gb3IgODozMDoyNSBQTVxyXG4gICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmcodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Ub2RheURhdGUodmFsdWUsICdMTCcsICdMVFMnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgIC8vIFNlcHRlbWJlciA0IDE5ODYgODozMCBQTSBvciA4OjMwIFBNXHJcbiAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1RvZGF5RGF0ZSh2YWx1ZSwgJ0xMJywgJ0xUJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAvLyBTZXAgNCAxOTg2IDg6MzAgUE0gb3IgODozMCBQTVxyXG4gICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvVG9kYXlEYXRlKHZhbHVlLCAnbGwnLCAnTFQnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZG9cclxuICAgIHB1YmxpYyBmb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHModmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZG9cclxuICAgIHB1YmxpYyBmb3JtYXRFbGFwc2VkSW50ZXJ2YWwodmFsdWU6IGFueSwgc3RhcnQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgbm93RGF0ZTogYW55O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbChzdGFydCkpIHtcclxuICAgICAgICAgICAgbm93RGF0ZSA9IG1vbWVudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vd0RhdGUgPSBtb21lbnQoc3RhcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSB8fCAhbm93RGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mcm9tTm93KG5vd0RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRlSlNPTihkYXRlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb21lbnQoZGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5hdmlnYXRpb24gZnVuY3Rpb25zIFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgcHVibGljIGdldE5leHRTdGFydCh2YWx1ZTogYW55LCBjYXRlZ29yeTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgZGF0ZTogYW55LFxyXG4gICAgICAgICAgICByYW5nZTogc3RyaW5nLFxyXG4gICAgICAgICAgICByZXN1bHQ6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG4gICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLmdldFJhbmdlKGNhdGVnb3J5KTtcclxuICAgICAgICByZXN1bHQgPSBtb21lbnQoZGF0ZSkuc3RhcnRPZihyYW5nZSkuYWRkKHRoaXMuZ2V0T3BlcmF0aW9uUmFuZ2UocmFuZ2UpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50b0RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHJldlN0YXJ0KHZhbHVlOiBhbnksIGNhdGVnb3J5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnksXHJcbiAgICAgICAgICAgIHJhbmdlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHJlc3VsdDogYW55O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYW5nZSA9IHRoaXMuZ2V0UmFuZ2UoY2F0ZWdvcnkpO1xyXG4gICAgICAgIHJlc3VsdCA9IG1vbWVudChkYXRlKS5zdGFydE9mKHJhbmdlKS5hZGQoLTEsIHRoaXMuZ2V0T3BlcmF0aW9uUmFuZ2UocmFuZ2UpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50b0RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm93U3RhcnQoY2F0ZWdvcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IGFueSxcclxuICAgICAgICAgICAgcmFuZ2U6IHN0cmluZyxcclxuICAgICAgICAgICAgcmVzdWx0OiBhbnk7XHJcblxyXG4gICAgICAgIGRhdGUgPSBtb21lbnQoKTtcclxuICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5nZXRSYW5nZShjYXRlZ29yeSlcclxuICAgICAgICByZXN1bHQgPSBtb21lbnQoZGF0ZSkuc3RhcnRPZihyYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQudG9EYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhvdXJzKHZhbHVlOiBhbnksIGhvdXJzOiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHZhciBkYXRlOiBhbnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB8fCAhYW5ndWxhci5pc051bWJlcihob3VycykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0ZS5hZGQoaG91cnMsICdob3VycycpLnRvRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0YXJ0RGF5KHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RhcnRSYW5nZSh2YWx1ZSwgJ2RheScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0VuZERheSh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9FbmRSYW5nZSh2YWx1ZSwgJ2RheScsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RhcnRXZWVrKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RhcnRSYW5nZSh2YWx1ZSwgJ3dlZWsnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9FbmRXZWVrKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0VuZFJhbmdlKHZhbHVlLCAnd2VlaycsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RhcnRNb250aCh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0YXJ0UmFuZ2UodmFsdWUsICdtb250aCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0VuZE1vbnRoKHZhbHVlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0VuZFJhbmdlKHZhbHVlLCAnbW9udGgnLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0YXJ0WWVhcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0YXJ0UmFuZ2UodmFsdWUsICd5ZWFyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvRW5kWWVhcih2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9FbmRSYW5nZSh2YWx1ZSwgJ3llYXInLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgRGF0ZVRpbWVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RhdGV0aW1lOiBEYXRlVGltZTtcclxuICAgIHByaXZhdGUgX2NvbmZpZzogRGF0ZVRpbWVDb25maWc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGRhdGV0aW1lOiBEYXRlVGltZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHsgdGltZVpvbmU6IG51bGx9O1xyXG4gICAgICAgIHRoaXMuX2RhdGV0aW1lID0gZGF0ZXRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG9kbyBPcHRpb25hbFxyXG4gICAgcHVibGljIHVzZVRpbWVab25lKG9mZnNldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnVzZVRpbWVab25lKG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG9kbyBPcHRpb25hbFxyXG4gICAgcHVibGljIGZvcm1hdFRpbWUodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRUaW1lKHZhbHVlLCBmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZG8gT3B0aW9uYWxcclxuICAgIHB1YmxpYyBmb3JtYXREYXRlT3B0aW9uYWwodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXREYXRlT3B0aW9uYWwodmFsdWUsIGZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0U2hvcnREYXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TWlkZGxlRGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TWlkZGxlRGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRMb25nRGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdE1vbnRoKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRNb250aCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdNb250aCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TG9uZ01vbnRoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0WWVhcih2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0WWVhcih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFdlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFdlZWsodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydFdlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFNob3J0V2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFNob3J0RGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRNaWRkbGVEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TWlkZGxlRGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdExvbmdEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdEZ1bGxEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0RnVsbERhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdE1pZGRsZURhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGVMb25nVGltZSh2YWx1ZTogYW55LCBmaXJzdFRpbWU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TG9uZ0RhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmJGb3JtYXREYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmJiRm9ybWF0RGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydFRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFNob3J0VGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRMb25nVGltZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0RGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRTaG9ydERheU9mV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXlPZldlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdExvbmdEYXlPZldlZWsodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRMb25nTW9udGhEYXkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdExvbmdNb250aERheSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdFNob3J0TW9udGhEYXkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFNob3J0TW9udGhEYXkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXREYXRlUmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0RGF0ZVJhbmdlKHZhbHVlMSwgdmFsdWUyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZVRpbWVSYW5nZSh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXREYXRlVGltZVJhbmdlKHZhbHVlMSwgdmFsdWUyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpc28gZnVuY3Rpb25cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgcHVibGljIGZvcm1hdElTT1dlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdElTT1dlZWsodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRTaG9ydElTT1dlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmZvcm1hdFNob3J0SVNPV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdElTT1dlZWtPcmRpbmFsKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRJU09XZWVrT3JkaW5hbCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBzcGVjaWFsIGZvcm1hdHMgXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHllYXIgb3B0aW9uIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IHllYXIgaXMgbm90IGVxdWFsIHRvLCB0aGUgZGF0ZSBvZiBcclxuICAgIHB1YmxpYyBmb3JtYXREYXRlWSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0RGF0ZVkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHllYXIgb3B0aW9uIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IHllYXIgaXMgbm90IGVxdWFsIHRvLCB0aGUgZGF0ZSBvZlxyXG4gICAgcHVibGljIGZvcm1hdExvbmdEYXRlWSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TG9uZ0RhdGVZKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAvLyBTZXB0ZW1iZXIgNCAxOTg2IDg6MzA6MjUgUE0gb3IgODozMDoyNSBQTVxyXG4gICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lTG9uZyh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nKHZhbHVlKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgLy8gU2VwIDQgMTk4NiA4OjMwOjI1IFBNIG9yIDg6MzA6MjUgUE1cclxuICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nKHZhbHVlKTtcclxuICAgIH0gICAgIFxyXG5cclxuICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgIC8vIFNlcHRlbWJlciA0IDE5ODYgODozMCBQTSBvciA4OjMwIFBNXHJcbiAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCh2YWx1ZSk7XHJcbiAgICB9ICAgICBcclxuXHJcbiAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAvLyBTZXAgNCAxOTg2IDg6MzAgUE0gb3IgODozMCBQTVxyXG4gICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydCh2YWx1ZSk7XHJcbiAgICB9ICAgICBcclxuXHJcbiAgICAvLyB0b2RvXHJcbiAgICBwdWJsaWMgZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2RvXHJcbiAgICBwdWJsaWMgZm9ybWF0RWxhcHNlZEludGVydmFsKHZhbHVlOiBhbnksIHN0YXJ0OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5mb3JtYXRFbGFwc2VkSW50ZXJ2YWwodmFsdWUsIHN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0ZUpTT04oZGF0ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUuZ2V0RGF0ZUpTT04oZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmF2aWdhdGlvbiBmdW5jdGlvbnMgXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmV4dFN0YXJ0KHZhbHVlOiBhbnksIGNhdGVnb3J5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5nZXROZXh0U3RhcnQodmFsdWUsIGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHJldlN0YXJ0KHZhbHVlOiBhbnksIGNhdGVnb3J5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS5nZXRQcmV2U3RhcnQodmFsdWUsIGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm93U3RhcnQoY2F0ZWdvcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmdldE5vd1N0YXJ0KGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSG91cnModmFsdWU6IGFueSwgaG91cnM6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLmFkZEhvdXJzKHZhbHVlLCBob3Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RhcnREYXkodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnRvU3RhcnREYXkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0VuZERheSh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnRvRW5kRGF5KHZhbHVlLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0YXJ0V2Vlayh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudG9TdGFydFdlZWsodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0VuZFdlZWsodmFsdWU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS50b0VuZFdlZWsodmFsdWUsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RhcnRNb250aCh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWUudG9TdGFydE1vbnRoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9FbmRNb250aCh2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnRvRW5kTW9udGgodmFsdWUsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RhcnRZZWFyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRldGltZS50b1N0YXJ0WWVhcih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvRW5kWWVhcih2YWx1ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGV0aW1lLnRvRW5kWWVhcih2YWx1ZSwgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIERhdGVUaW1lUHJvdmlkZXIgZXh0ZW5kcyBEYXRlVGltZSBpbXBsZW1lbnRzIElEYXRlVGltZVByb3ZpZGVyIHtcclxuICAgIHByaXZhdGUgX3RyYW5zbGF0aW9uOiBEYXRlVGltZTtcclxuICAgIHByaXZhdGUgX3NlcnZpY2U6IERhdGVUaW1lU2VydmljZTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoeyB0aW1lWm9uZTogbnVsbCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgJGdldCgpOiBhbnkge1xyXG4gICAgICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5fc2VydmljZSA9IG5ldyBEYXRlVGltZVNlcnZpY2UodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcERhdGVUaW1lLlNlcnZpY2UnLCBbXSlcclxuICAgIC5wcm92aWRlcigncGlwRGF0ZVRpbWUnLCBEYXRlVGltZVByb3ZpZGVyKTtcclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgdGhpc01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlJywgWydwaXBEYXRlcy5UZW1wbGF0ZXMnXSk7XHJcblxyXG4gICAgdGhpc01vZHVsZS5kaXJlY3RpdmUoJ3BpcERhdGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lTW9kZTogJ0BwaXBUaW1lTW9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICcmbmdEaXNhYmxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbmdDaGFuZ2U6ICcmJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZGF0ZV9kaXJlY3RpdmUvZGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdwaXBEYXRlQ29udHJvbGxlcidcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIFRvZG86IFJlbW92ZSBkZXBlbmRlbmN5IG9uIFRyYW5zbGF0ZS4gVXNlIG1vbWVudCBsb2NhbGl6YXRpb25cclxuICAgIHRoaXNNb2R1bGUuY29udHJvbGxlcigncGlwRGF0ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkaW5qZWN0b3IpIHsgLy9waXBUcmFuc2xhdGVcclxuICAgICAgICAgICAgdmFyIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlRGF0ZTogYW55ID0gbW9tZW50LmxvY2FsZURhdGEoKSxcclxuICAgICAgICAgICAgICAgIG1vbWVudE1vbnRocyA9IGFuZ3VsYXIuaXNBcnJheShsb2NhbGVEYXRlLl9tb250aHMpID8gbG9jYWxlRGF0ZS5fbW9udGhzIDogbG9jYWxlRGF0ZS5fbW9udGhzLmZvcm1hdCxcclxuICAgICAgICAgICAgICAgIG1vbWVudERheXMgPSBhbmd1bGFyLmlzQXJyYXkobG9jYWxlRGF0ZS5fd2Vla2RheXMpID8gbG9jYWxlRGF0ZS5fd2Vla2RheXMgOiBsb2NhbGVEYXRlLl93ZWVrZGF5cy5mb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBtb21lbnRTaG9ydERheXMgPSBsb2NhbGVEYXRlLl93ZWVrZGF5c01pbixcclxuICAgICAgICAgICAgICAgIG1vbWVudEZpcnN0RGF5T2ZXZWVrID0gbG9jYWxlRGF0ZS5fd2Vlay5kb3c7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGlwVHJhbnNsYXRlID0gJGluamVjdG9yLmhhcygncGlwVHJhbnNsYXRlJykgPyAkaW5qZWN0b3IuZ2V0KCdwaXBUcmFuc2xhdGUnKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAocGlwVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBwaXBUcmFuc2xhdGUuc2V0VHJhbnNsYXRpb25zKCdlbicsIHtcclxuICAgICAgICAgICAgICAgICAgICBEQVk6ICdEYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIE1PTlRIOiAnTW9udGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIFlFQVI6ICdZZWFyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwaXBUcmFuc2xhdGUuc2V0VHJhbnNsYXRpb25zKCdydScsIHtcclxuICAgICAgICAgICAgICAgICAgICBEQVk6ICfQlNC10L3RjCcsXHJcbiAgICAgICAgICAgICAgICAgICAgTU9OVEg6ICfQnNC10YHRj9GGJyxcclxuICAgICAgICAgICAgICAgICAgICBZRUFSOiAn0JPQvtC0JyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXlMYWJlbCA9IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ0RBWScpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoTGFiZWwgPSBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCdNT05USCcpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnllYXJMYWJlbCA9IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ1lFQVInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXlMYWJlbCA9ICdEYXknO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoTGFiZWwgPSAnTW9udGgnOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICRzY29wZS55ZWFyTGFiZWwgPSAnWWVhcic7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkYXlMaXN0KG1vbnRoLCB5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAzMSwgZGF5cyA9IFtdLCBpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gNCB8fCBtb250aCA9PT0gNiB8fCBtb250aCA9PT0gOSB8fCBtb250aCA9PT0gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDMwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBsZWFwIHllYXIgKHByaW1pdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSB5ZWFyICUgNCA9PT0gMCA/IDI5IDogMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSAyODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb250aExpc3QoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhzID0gW10sIGk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbW9tZW50TW9udGhzW2ktMV1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB5ZWFyTGlzdCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WWVhciA9ICRzY29wZS50aW1lTW9kZSA9PT0gJ2Z1dHVyZScgPyBjdXJyZW50WWVhciA6IGN1cnJlbnRZZWFyIC0gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZFllYXIgPSAkc2NvcGUudGltZU1vZGUgPT09ICdwYXN0JyA/IGN1cnJlbnRZZWFyIDogY3VycmVudFllYXIgKyAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnRpbWVNb2RlID09PSAncGFzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBlbmRZZWFyOyBpID49IHN0YXJ0WWVhcjsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBzdGFydFllYXI7IGkgPD0gZW5kWWVhcjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB5ZWFycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYWRqdXN0RGF5KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRheXMgPSBkYXlMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF5cy5sZW5ndGggIT09IGRheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXkgPiBkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF5ID0gZGF5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF5cyA9IGRheXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHYpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHYgPyBfLmlzRGF0ZSh2KSA/IHYgOiBuZXcgRGF0ZSh2KSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5ID0gdmFsdWUgPyB2YWx1ZS5nZXREYXRlKCkgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gdmFsdWUgPyB2YWx1ZS5nZXRNb250aCgpICsgMSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhciA9IHZhbHVlID8gdmFsdWUuZ2V0RnVsbFllYXIoKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGRheSBsaXN0IGlmIG1vbnRoIGFuZCB5ZWFyIHdlcmUgY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5tb250aCAhPT0gbW9udGggJiYgJHNjb3BlLnllYXIgIT09IHllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF5cyA9IGRheUxpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIHZhbHVlcyB0byBzY29wZVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRheSA9IGRheTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb250aCA9IG1vbnRoO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnllYXIgPSB5ZWFyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRheSAmJiAkc2NvcGUubW9udGggJiYgJHNjb3BlLnllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKCRzY29wZS55ZWFyLCAkc2NvcGUubW9udGggLSAxLCAkc2NvcGUuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubmdDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uRGF5Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25Nb250aENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhZGp1c3REYXkoKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25ZZWFyQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFkanVzdERheSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xyXG4gICAgICAgICAgICB2YWx1ZSA9ICRzY29wZS5tb2RlbCA/IF8uaXNEYXRlKCRzY29wZS5tb2RlbCkgPyAkc2NvcGUubW9kZWwgOiBuZXcgRGF0ZSgkc2NvcGUubW9kZWwpIDogbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLmRheSA9IHZhbHVlID8gdmFsdWUuZ2V0RGF0ZSgpIDogbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLm1vbnRoID0gdmFsdWUgPyB2YWx1ZS5nZXRNb250aCgpICsgMSA6IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS55ZWFyID0gdmFsdWUgPyB2YWx1ZS5nZXRGdWxsWWVhcigpIDogbnVsbDtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRheXMgPSBkYXlMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAkc2NvcGUubW9udGhzID0gbW9udGhMaXN0KCk7XHJcbiAgICAgICAgICAgICRzY29wZS55ZWFycyA9IHllYXJMaXN0KCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZUNvbnRyb2xzID0gJHNjb3BlLmRpc2FibGVkID8gJHNjb3BlLmRpc2FibGVkKCkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlYWN0IG9uIGNoYW5nZXNcclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgnbW9kZWwnLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGdldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCRzY29wZS5kaXNhYmxlZCwgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZUNvbnRyb2xzID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG59KSgpO1xyXG5cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciB0aGlzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVSYW5nZScsIFsncGlwRGF0ZXMuVGVtcGxhdGVzJ10pO1xyXG5cclxuICAgIHRoaXNNb2R1bGUuZGlyZWN0aXZlKCdwaXBEYXRlUmFuZ2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lTW9kZTogJ0BwaXBUaW1lTW9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICcmbmdEaXNhYmxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6ICc9bmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwQ2hhbmdlZDogJyYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcERhdGVSYW5nZVR5cGU6ICdAJyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBEYXRlRm9ybWF0OiAnQCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwTm9MaW5lOiAnQCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2RhdGVfcmFuZ2VfZGlyZWN0aXZlL2RhdGVfcmFuZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAncGlwRGF0ZVJhbmdlQ29udHJvbGxlcidcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvLyBUb2RvOiBSZW1vdmUgZGVwZW5kZW5jeSBvbiBUcmFuc2xhdGUuIFVzZSBtb21lbnQgbG9jYWxpemF0aW9uXHJcbiAgICB0aGlzTW9kdWxlLmNvbnRyb2xsZXIoJ3BpcERhdGVSYW5nZUNvbnRyb2xsZXInLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkbWRNZWRpYSwgJHJvb3RTY29wZSwgJGluamVjdG9yLCAkdGltZW91dCkgeyAvL3BpcFRyYW5zbGF0ZSwgXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRZZWFyLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1vbnRoLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudERheSxcclxuICAgICAgICAgICAgICAgIHByZXZTdGF0ZTogYW55ID0ge30sIFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlOiBhbnkgPSB7fSxcclxuICAgICAgICAgICAgICAgIGxvY2FsZURhdGU6IGFueSA9IG1vbWVudC5sb2NhbGVEYXRhKCksXHJcbiAgICAgICAgICAgICAgICBtb21lbnRNb250aHMgPSBhbmd1bGFyLmlzQXJyYXkobG9jYWxlRGF0ZS5fbW9udGhzKSA/IGxvY2FsZURhdGUuX21vbnRocyA6IGxvY2FsZURhdGUuX21vbnRocy5mb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBtb21lbnREYXlzID0gYW5ndWxhci5pc0FycmF5KGxvY2FsZURhdGUuX3dlZWtkYXlzKSA/IGxvY2FsZURhdGUuX3dlZWtkYXlzIDogbG9jYWxlRGF0ZS5fd2Vla2RheXMuZm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgbW9tZW50U2hvcnREYXlzID0gbG9jYWxlRGF0ZS5fd2Vla2RheXNNaW4sXHJcbiAgICAgICAgICAgICAgICBtb21lbnRGaXJzdERheU9mV2VlayA9IGxvY2FsZURhdGUuX3dlZWsuZG93O1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIHBpcFRyYW5zbGF0ZSA9ICRpbmplY3Rvci5oYXMoJ3BpcFRyYW5zbGF0ZScpID8gJGluamVjdG9yLmdldCgncGlwVHJhbnNsYXRlJykgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHBpcFRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgcGlwVHJhbnNsYXRlLnNldFRyYW5zbGF0aW9ucygnZW4nLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgRVZFTlRfTkVXX1NUQVJUX1RJTUU6ICdTdGFydCB0aW1lJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICBFVkVOVF9ORVdfRU5EX1RJTUU6ICdFbmQgdGltZSdcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgcGlwVHJhbnNsYXRlLnNldFRyYW5zbGF0aW9ucygncnUnLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgRVZFTlRfTkVXX1NUQVJUX1RJTUU6ICfQndCw0YfQsNC70L4nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIEVWRU5UX05FV19FTkRfVElNRTogJ9Ca0L7QvdC10YYnICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAkc2NvcGUuc3RhcnRMYWJlbCA9ICRzY29wZS5waXBTdGFydExhYmVsID8gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgkc2NvcGUucGlwU3RhcnRMYWJlbClcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgOiBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKCdFVkVOVF9ORVdfU1RBUlRfVElNRScpO1xyXG4gICAgICAgICAgICAvLyAgICAgJHNjb3BlLmVuZExhYmVsID0gJHNjb3BlLnBpcEVuZExhYmVsID8gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgkc2NvcGUucGlwRW5kTGFiZWwpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDogcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgnRVZFTlRfTkVXX0VORF9USU1FJyk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAkc2NvcGUuc3RhcnRMYWJlbCA9ICRzY29wZS5waXBTdGFydExhYmVsID8gJHNjb3BlLnBpcFN0YXJ0TGFiZWwgOiAnU3RhcnQgdGltZSc7XHJcbiAgICAgICAgICAgIC8vICAgICAkc2NvcGUuZW5kTGFiZWwgPSAkc2NvcGUucGlwRW5kTGFiZWwgPyAkc2NvcGUucGlwRW5kTGFiZWwgOiAnRW5kIHRpbWUnOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRVVENNb250aCgpICsgMTtcclxuICAgICAgICAgICAgY3VycmVudERheSA9IGN1cnJlbnREYXRlLmdldFVUQ0RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkRheUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm9uTW9udGhDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRlLCBkYXlPZldlZWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygkc2NvcGUueWVhciwgJHNjb3BlLm1vbnRoIC0gMSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCkgPyBkYXRlLmdldFVUQ0RheSgpIDogNztcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUud2VlayA9IGdldFdlZWtCeURhdGUoZGF5T2ZXZWVrLCAkc2NvcGUubW9udGggLSAxLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdFdlZWsoKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdERheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vblllYXJDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUsIGRheU9mV2VlaztcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoJHNjb3BlLnllYXIsICRzY29wZS5tb250aCAtIDEsIDEpKTtcclxuICAgICAgICAgICAgICAgIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCkgPyBkYXRlLmdldFVUQ0RheSgpIDogNztcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUud2VlayA9IGdldFdlZWtCeURhdGUoZGF5T2ZXZWVrLCAkc2NvcGUubW9udGggLSAxLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdERheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbldlZWtDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdERheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZpc2liaWxpdHlcclxuICAgICAgICAgICAgJHNjb3BlLmlzRGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnZGFpbHknO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmlzV2VlayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ3dlZWtseSc7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuaXNNb250aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ2RhaWx5JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnd2Vla2x5JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnbW9udGhseSc7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcENoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBpcENoYW5nZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldEN1cnJlbnQoKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuZGF5ID0gJHNjb3BlLmRheTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5tb250aCA9ICRzY29wZS5tb250aDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS55ZWFyID0gJHNjb3BlLnllYXI7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUud2VlayA9ICRzY29wZS53ZWVrO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLmRhdGVSYW5nZVR5cGUgPSAkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5tb2RlbCA9ICRzY29wZS5tb2RlbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZmlsbExpc3RzKCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRheXMgPSBkYXlMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLndlZWtzID0gd2Vla0xpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9udGhzID0gbW9udGhMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hvcnRNb250aHMgPSBtb250aExpc3QoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS55ZWFycyA9IHllYXJMaXN0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3JyZWN0V2VlaygpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJldlN0YXRlLm1vZGVsIHx8IHByZXZTdGF0ZS5tb2RlbCAmJiBwcmV2U3RhdGUubW9kZWwuZ2V0VGltZSgpID49ICRzY29wZS5tb2RlbC5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBzaGlmdCB3ZWVrIC0+IGluY3JlYXNlIG1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS53ZWVrcyAmJiAkc2NvcGUud2Vla3NbJHNjb3BlLndlZWtdICYmICRzY29wZS53ZWVrc1skc2NvcGUud2Vla10uaWQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLm1vbnRoIDwgMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb250aCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS55ZWFyICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbExpc3RzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gJHNjb3BlLm1vZGVsID8gbmV3IERhdGUoJHNjb3BlLm1vZGVsKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF5ID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENEYXRlKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vbnRoID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENNb250aCgpICsgMSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUueWVhciA9IHZhbHVlID8gdmFsdWUuZ2V0VVRDRnVsbFllYXIoKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUud2VlayA9IHZhbHVlID8gZ2V0V2Vla0J5RGF0ZSgkc2NvcGUuZGF5LCAkc2NvcGUubW9udGggLSAxLCAkc2NvcGUueWVhcikgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGZpbGxMaXN0cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucGlwRGF0ZVJhbmdlVHlwZSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFdlZWsoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0RGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcclxuICAgICAgICAgICAgJHNjb3BlLiRtZE1lZGlhID0gJG1kTWVkaWE7XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZUNvbnRyb2xzID0gJHNjb3BlLmRpc2FibGVkID8gJHNjb3BlLmRpc2FibGVkKCkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlYWN0IG9uIGNoYW5nZXNcclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgnbW9kZWwnLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJHNjb3BlLmRpc2FibGVkLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlQ29udHJvbHMgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdwaXBEYXRlUmFuZ2VUeXBlJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25ZZWFyQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS55ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnllYXIgPSBjdXJyZW50WWVhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbk1vbnRoQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb250aCA9IGN1cnJlbnRNb250aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkRheUNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUueWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXkgPSBjdXJyZW50RGF5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENvdW50RGF5KG1vbnRoLCB5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAzMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IDQgfHwgbW9udGggPT09IDYgfHwgbW9udGggPT09IDkgfHwgbW9udGggPT09IDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSAzMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9udGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgbGVhcCB5ZWFyIChwcmltaXRpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0geWVhciAlIDQgPT09IDAgPyAyOSA6IDI4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZGF5TGlzdChtb250aCwgeWVhcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50LCBkYXlzLCBpLCBsbjtcclxuXHJcbiAgICAgICAgICAgICAgLy8gIGxuID0gJHJvb3RTY29wZS4kbGFuZ3VhZ2UgfHwgJ2VuJztcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gZ2V0Q291bnREYXkobW9udGgsIHllYXIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm5hbWVEYXlzID0gW107XHJcbiAgICAgICAgICAgICAgICBkYXlzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5hbWVEYXlzLnB1c2gobW9tZW50U2hvcnREYXlzW21vbWVudChbeWVhciwgbW9udGggLSAxLCBpXSkud2Vla2RheSgpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFdlZWtCeURhdGUoZGF5LCBtb250aCwgeWVhcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUsIGRheU9mV2Vlaywgc3RhcnRXZWVrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5KSk7XHJcbiAgICAgICAgICAgICAgICBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpID8gZGF0ZS5nZXRVVENEYXkoKSA6IDc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRheU9mV2VlayA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0V2VlayA9IGRheTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRXZWVrID0gZGF5ICsgMSAtIGRheU9mV2VlaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRXZWVrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRXZWVrKGRheSwgY291bnREYXksIGNvdW50UHJldk1vbnRoRGF5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kRGF5LCBzdGFydERheTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmREYXkgPSBkYXkgKyA2ID4gY291bnREYXkgPyBjb3VudERheSAtIGRheSAtIDYgOiBkYXkgKyA2O1xyXG4gICAgICAgICAgICAgICAgc3RhcnREYXkgPSBkYXkgPiAwID8gZGF5IDogY291bnRQcmV2TW9udGhEYXkgKyBkYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0RGF5LnRvU3RyaW5nKCkgKyAnIC0gJyArIChNYXRoLmFicyhlbmREYXkpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB3ZWVrTGlzdChtb250aCwgeWVhcikgeyAvLyDQstC+0LfQstGA0LDRidCw0LXRgiDRgdC/0LjRgdC+0Log0L3QsNGH0LDQu9CwINC90LDQtNC10LvQuFxyXG4gICAgICAgICAgICAgICAgdmFyIHdlZWtzLCBjb3VudERheSwgY291bnRQcmV2TW9udGhEYXksIHN0YXJ0V2VlaztcclxuXHJcbiAgICAgICAgICAgICAgICB3ZWVrcyA9IFtdOyAgLy8g0LIg0LzQsNGB0YHQuNCy0LUg0L/QtdGA0LLRi9C1INC00L3QuCDQvdC10LTQtdC70Lgg0LIg0YLQtdC60YPRidC10Lwg0LzQtdGB0Y/RhtC1XHJcbiAgICAgICAgICAgICAgICBjb3VudERheSA9IGdldENvdW50RGF5KG1vbnRoLCB5ZWFyKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0V2VlayA9IGdldFdlZWtCeURhdGUoMSwgbW9udGggLSAxLCB5ZWFyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb3VudFByZXZNb250aERheSA9IG1vbnRoIC0gMSA/IGdldENvdW50RGF5KG1vbnRoIC0gMSwgeWVhcikgOiBnZXRDb3VudERheSgxMiwgeWVhciAtIDEpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN0YXJ0V2VlayA8IGNvdW50RGF5ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWtzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogc3RhcnRXZWVrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBnZXRXZWVrKHN0YXJ0V2VlaywgY291bnREYXksIGNvdW50UHJldk1vbnRoRGF5KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0V2VlayA9IHN0YXJ0V2VlayArIDc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb250aExpc3QoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhzID0gW10sIGk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbW9tZW50TW9udGhzW2ktMV1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB5ZWFyTGlzdCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydFllYXIsIGksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kWWVhcixcclxuICAgICAgICAgICAgICAgICAgICB5ZWFycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLnRpbWVNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZnV0dXJlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZZWFyID0gY3VycmVudFllYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFllYXIgPSBjdXJyZW50WWVhciArIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGFzdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WWVhciA9IGN1cnJlbnRZZWFyIC0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRZZWFyID0gY3VycmVudFllYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vdyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WWVhciA9IGN1cnJlbnRZZWFyIC0gNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFllYXIgPSBjdXJyZW50WWVhciArIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZZWFyID0gY3VycmVudFllYXIgLSA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kWWVhciA9IGN1cnJlbnRZZWFyICsgNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS50aW1lTW9kZSA9PT0gJ2Z1dHVyZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBzdGFydFllYXI7IGkgPD0gZW5kWWVhcjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBlbmRZZWFyOyBpID49IHN0YXJ0WWVhcjsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB5ZWFycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYWRqdXN0RGF5KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRheXMgPSBkYXlMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLnBpcERhdGVSYW5nZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdtb250aGx5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRheSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3llYXJseSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb250aCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRheXMubGVuZ3RoICE9PSBkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXkgPiBkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXkgPSBkYXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXlzID0gZGF5cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYWRqdXN0V2VlaygpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3ZWVrcztcclxuXHJcbiAgICAgICAgICAgICAgICB3ZWVrcyA9IHdlZWtMaXN0KCRzY29wZS5tb250aCwgJHNjb3BlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLndlZWsgPSBnZXRXZWVrQnlEYXRlKCRzY29wZS53ZWVrLCAkc2NvcGUubW9udGggLSAxLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUud2Vla3MgPSB3ZWVrcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlLCBkYXksIG1vbnRoLCB5ZWFyLCB3ZWVrO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdiA/IG5ldyBEYXRlKHYpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIERlZmluZSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGRheSA9IHZhbHVlID8gdmFsdWUuZ2V0VVRDRGF0ZSgpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIG1vbnRoID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENNb250aCgpICsgMSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB5ZWFyID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENGdWxsWWVhcigpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHdlZWsgPSB2YWx1ZSA/IGdldFdlZWtCeURhdGUoZGF5LCBtb250aCAtIDEsIHllYXIpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIEV4aXQgaWYgbm90aGluZyB0byB1cGRhdGVcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF5ID09PSBkYXkgJiYgJHNjb3BlLm1vbnRoID09PSBtb250aCAmJiAkc2NvcGUueWVhciA9PT0geWVhciAmJiAkc2NvcGUud2VlayA9PT0gd2Vlaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgdG8gc2NvcGVcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXkgPSBkYXk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9udGggPSBtb250aDtcclxuICAgICAgICAgICAgICAgICRzY29wZS55ZWFyID0geWVhcjtcclxuICAgICAgICAgICAgICAgICRzY29wZS53ZWVrID0gd2VlaztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgZGF0YSBzb3VyY2VzXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF5cyA9IGRheUxpc3QoJHNjb3BlLm1vbnRoLCAkc2NvcGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUud2Vla3MgPSB3ZWVrTGlzdCgkc2NvcGUubW9udGgsICRzY29wZS55ZWFyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0VmFsdWUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBEYXRlUmFuZ2VUeXBlID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUoJHNjb3BlLnllYXIsICRzY29wZS5tb250aCAtIDEsICRzY29wZS53ZWVrLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSAtIHZhbHVlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUoJHNjb3BlLnllYXIsICRzY29wZS5tb250aCAtIDEsICRzY29wZS5kYXksIDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUuZ2V0VGltZSgpIC0gdmFsdWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUgPSBfLmNsb25lRGVlcChjdXJyZW50U3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxufSkoKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVzJywgW1xyXG4gICAgJ3BpcERhdGUnLFxyXG4gICAgJ3BpcFRpbWVSYW5nZScsXHJcbiAgICAncGlwRGF0ZVRpbWUnLFxyXG4gICAgJ3BpcFRpbWVSYW5nZUVkaXQnLFxyXG4gICAgJ3BpcERhdGVSYW5nZScsXHJcbiAgICAncGlwRGF0ZXMuVHJhbnNsYXRlJ1xyXG5dKTtcclxuIiwiLyoqXHJcbiAqIEBmaWxlIE9wdGlvbmFsIGZpbHRlciB0byB0cmFuc2xhdGUgc3RyaW5nIHJlc291cmNlc1xyXG4gKiBAY29weXJpZ2h0IERpZ2l0YWwgTGl2aW5nIFNvZnR3YXJlIENvcnAuIDIwMTQtMjAxNlxyXG4gKi9cclxuIFxyXG4vKiBnbG9iYWwgYW5ndWxhciAqL1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgdGhpc01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UcmFuc2xhdGUnLCBbXSk7XHJcblxyXG4gICAgdGhpc01vZHVsZS5maWx0ZXIoJ3RyYW5zbGF0ZScsIGZ1bmN0aW9uICgkaW5qZWN0b3IpIHtcclxuICAgICAgICB2YXIgcGlwVHJhbnNsYXRlID0gJGluamVjdG9yLmhhcygncGlwVHJhbnNsYXRlJykgXHJcbiAgICAgICAgICAgID8gJGluamVjdG9yLmdldCgncGlwVHJhbnNsYXRlJykgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGlwVHJhbnNsYXRlICA/IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoa2V5KSB8fCBrZXkgOiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KSgpO1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciB0aGlzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcFRpbWVSYW5nZScsIFtdKTtcclxuXHJcbiAgICB0aGlzTW9kdWxlLmRpcmVjdGl2ZSgncGlwVGltZVJhbmdlJyxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlwU3RhcnREYXRlOiAnPScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwRW5kRGF0ZTogJz0nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0aW1lX3JhbmdlX2RpcmVjdGl2ZS90aW1lX3JhbmdlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKCRzY29wZTogYW55LCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldERhdGVKU09OKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWZpbmVTdGFydERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucGlwU3RhcnREYXRlICE9PSBudWxsICYmICRzY29wZS5waXBTdGFydERhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnQgPSBfLmlzRGF0ZSgkc2NvcGUucGlwU3RhcnREYXRlKSA/ICRzY29wZS5waXBTdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdldERhdGVKU09OKCRzY29wZS5waXBTdGFydERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWZpbmVFbmREYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBpcEVuZERhdGUgIT09IG51bGwgJiYgJHNjb3BlLnBpcEVuZERhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kID0gXy5pc0RhdGUoJHNjb3BlLnBpcEVuZERhdGUpID8gJHNjb3BlLnBpcEVuZERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdldERhdGVKU09OKCRzY29wZS5waXBFbmREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSAnMScgfHwgdmFsdWUgPT0gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVTdGFydERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVFbmREYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0Jvb2xlYW4oKDxhbnk+JGF0dHJzKS5waXBSZWJpbmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3BpcFN0YXJ0RGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdwaXBFbmREYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZUVuZERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKCdwaXAtdGltZS1yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG59KSgpO1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciB0aGlzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcFRpbWVSYW5nZUVkaXQnLCBbXSk7XHJcblxyXG4gICAgdGhpc01vZHVsZS5kaXJlY3RpdmUoJ3BpcFRpbWVSYW5nZUVkaXQnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBwaXBTdGFydERhdGU6ICc9JyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBDaGFuZ2VkOiAnJicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwRW5kRGF0ZTogJz0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcFN0YXJ0TGFiZWw6ICdAJyxcclxuICAgICAgICAgICAgICAgICAgICBwaXBFbmRMYWJlbDogJ0AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAnJm5nRGlzYWJsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpcEhpZGVUaW1lOiAnPScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwU2l6ZTogJz0nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0aW1lX3JhbmdlX2VkaXRfZGlyZWN0aXZlL3RpbWVfcmFuZ2VfZWRpdC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdwaXBUaW1lUmFuZ2VFZGl0Q29udHJvbGxlcidcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIFRvZG86IFJlbW92ZSBkZXBlbmRlbmN5IG9uIFRyYW5zbGF0ZS4gVXNlIG1vbWVudCBsb2NhbGl6YXRpb25cclxuICAgIHRoaXNNb2R1bGUuY29udHJvbGxlcigncGlwVGltZVJhbmdlRWRpdENvbnRyb2xsZXInLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRpbmplY3RvciwgcGlwRGF0ZVRpbWUpIHsgLy9waXBUcmFuc2xhdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBwaXBUcmFuc2xhdGUgPSAkaW5qZWN0b3IuaGFzKCdwaXBUcmFuc2xhdGUnKSA/ICRpbmplY3Rvci5nZXQoJ3BpcFRyYW5zbGF0ZScpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwaXBUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIHBpcFRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbnMoJ2VuJywge1xyXG4gICAgICAgICAgICAgICAgICAgIEVWRU5UX05FV19TVEFSVF9USU1FOiAnU3RhcnQgdGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgRVZFTlRfTkVXX0VORF9USU1FOiAnRW5kIHRpbWUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBpcFRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbnMoJ3J1Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIEVWRU5UX05FV19TVEFSVF9USU1FOiAn0J3QsNGH0LDQu9C+JyxcclxuICAgICAgICAgICAgICAgICAgICBFVkVOVF9ORVdfRU5EX1RJTUU6ICfQmtC+0L3QtdGGJyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXJ0TGFiZWwgPSAkc2NvcGUucGlwU3RhcnRMYWJlbCA/IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJHNjb3BlLnBpcFN0YXJ0TGFiZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZSgnRVZFTlRfTkVXX1NUQVJUX1RJTUUnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5lbmRMYWJlbCA9ICRzY29wZS5waXBFbmRMYWJlbCA/IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJHNjb3BlLnBpcEVuZExhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ0VWRU5UX05FV19FTkRfVElNRScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXJ0TGFiZWwgPSAkc2NvcGUucGlwU3RhcnRMYWJlbCA/ICRzY29wZS5waXBTdGFydExhYmVsIDogJ1N0YXJ0IHRpbWUnO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVuZExhYmVsID0gJHNjb3BlLnBpcEVuZExhYmVsID8gJHNjb3BlLnBpcEVuZExhYmVsIDogJ0VuZCB0aW1lJzsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXREYXRlSlNPTih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0RHVyYXRpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQsIGVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLnN0YXJ0RGF0ZSB8fCAhJHNjb3BlLmRhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5zdGFydFRpbWUgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgZW5kID0gbmV3IERhdGUoJHNjb3BlLmRhdGEuZW5kRGF0ZS5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5lbmRUaW1lICogNjAgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kIC0gc3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlU3RhcnREYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUsIHN0YXJ0LCBlbmQ7XHJcbiAgICAgICAgICAgICAgICAvLyDQtdGB0LvQuCDQvdCw0YfQsNC70YzQvdCw0Y8g0LTQsNGC0LAg0L3QtSDQt9Cw0LTQsNC90LAsINC+0LHQvdGD0LvRj9C10Lwg0Lgg0LLRi9GF0L7QtNC40LxcclxuICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmRhdGEuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINC1Y9C70Lgg0L3QtSDQt9Cw0LTQsNC90L4g0L3QsNGH0LDQu9GM0L3QvtC1INCy0YDQtdC80Y8gLSDQt9Cw0LTQsNC10Lwg0LXQs9C+XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuc3RhcnRUaW1lID09PSB1bmRlZmluZWQgfHwgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YS5lbmRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gZGF0ZS5nZXRUaW1lKCkgLSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPSBNYXRoLmZsb29yKGRhdGUgLyAoMzAgKiA2MCAqIDEwMDApKSAqIDMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0VGltZSA9ICRzY29wZS5kYXRhLmVuZFRpbWUgPT09IDAgPyAwIDogJHNjb3BlLmRhdGEuZW5kVGltZSAtIDMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5zdGFydFRpbWUgKiA2MCAqIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INC10YHRgtGMINC00LvQuNGC0LXQu9GM0L3QvtGB0YLRjCwg0YLQviDRgdC+0YXRgNCw0L3Rj9C10Lwg0LXQtS4g0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMINC80L7QttC90L4g0LjQt9C80LXQvdC40YLRjCDRgtC+0LvRjNC60L4g0LjQt9C80LXQvdGP0Y8g0LrQvtC90LXRh9C90YPRjiDQtNCw0YLRg1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgJHNjb3BlLmRhdGEuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZERhdGUgPSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KGVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gZW5kLmdldFRpbWUoKSAtICRzY29wZS5kYXRhLmVuZERhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZFRpbWUgPSBNYXRoLmZsb29yKGVuZCAvICgzMCAqIDYwICogMTAwMCkpICogMzA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INC90LXRgiDQtNC70LjRgtC10LvRjNC90L7RgdGC0Lgg0YHRgNCw0LLQvdC40LLQsNC10Lwg0LTQsNGC0YtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBuZXcgRGF0ZSgkc2NvcGUuZGF0YS5lbmREYXRlLmdldFRpbWUoKSArICRzY29wZS5kYXRhLmVuZFRpbWUgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L3QsNGH0LDQu9GM0L3QsNGPINC00LDRgtCwINCx0L7Qu9GM0YjQtSwg0YLQviDQtNCy0LjQs9Cw0LXQvCDQutC+0L3QtdGH0L3Rg9GOINC00LDRgtGDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZERhdGUgPSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArIDMwICogNjAwMDApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kVGltZSA9ICgkc2NvcGUuZGF0YS5zdGFydFRpbWUgKyAzMCkgJSAxNDQwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPSBNYXRoLnJvdW5kKCRzY29wZS5kYXRhLnN0YXJ0VGltZSAvIDMwKSAqIDMwO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyRzY29wZS5kYXRhLnN0YXJ0VGltZScsICRzY29wZS5kYXRhLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW5kRGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlLCBzdGFydCwgZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQvdC1INC30LDQtNCw0L3QsCwg0L7QsdC90YPQu9GP0LXQvCDQuCDQstGL0YXQvtC00LjQvFxyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kVGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtWPQu9C4INC90LUg0LfQsNC00LDQvdC+INC60L7QvdC10YfQvdC+0LUg0LLRgNC10LzRjyAtINC30LDQtNCw0LXQvCDQtdCz0L5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5lbmRUaW1lID09PSB1bmRlZmluZWQgfHwgJHNjb3BlLmRhdGEuZW5kVGltZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmRhdGEuc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gZGF0ZS5nZXRUaW1lKCkgLSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gTWF0aC5mbG9vcihkYXRlIC8gKDMwICogNjAgKiAxMDAwKSkgKiAzMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gJHNjb3BlLmRhdGEuc3RhcnRUaW1lID09PSAxNDEwID8gMTQxMCA6ICRzY29wZS5kYXRhLnN0YXJ0VGltZSArIDMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5zdGFydFRpbWUgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgZW5kID0gbmV3IERhdGUoJHNjb3BlLmRhdGEuZW5kRGF0ZS5nZXRUaW1lKCkgKyAkc2NvcGUuZGF0YS5lbmRUaW1lICogNjAgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPj0gZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L3QsNGH0LDQu9GM0L3QsNGPINC00LDRgtCwINCx0L7Qu9GM0YjQtSwg0YLQviDQtNCy0LjQs9Cw0LXQvCDQvdCw0YfQsNC70YzQvdGD0Y4g0LTQsNGC0YNcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydERhdGUgPSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KG5ldyBEYXRlKGVuZC5nZXRUaW1lKCkgLSAzMCAqIDYwMDAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID0gJHNjb3BlLmRhdGEuZW5kVGltZSAlIDE0NDAgPT09IDAgPyAxNDEwIDogJHNjb3BlLmRhdGEuZW5kVGltZSAtIDMwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZFRpbWUgPSBNYXRoLnJvdW5kKCRzY29wZS5kYXRhLmVuZFRpbWUgLyAzMCkgKiAzMDtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmR1cmF0aW9uID0gc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmJpbmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9ICRzY29wZS5kYXRhLnN0YXJ0VGltZSA/ICRzY29wZS5kYXRhLnN0YXJ0VGltZSAqIDYwICogMTAwMCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBpcFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyB0aW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSAkc2NvcGUuZGF0YS5lbmRUaW1lID8gJHNjb3BlLmRhdGEuZW5kVGltZSAqIDYwICogMTAwMCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBpcEVuZERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuZGF0YS5lbmREYXRlLmdldFRpbWUoKSArIHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmJpbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWZpbmVEYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0LCBlbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBTdGFydERhdGUgIT09IG51bGwgJiYgJHNjb3BlLnBpcFN0YXJ0RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBfLmlzRGF0ZSgkc2NvcGUucGlwU3RhcnREYXRlKSA/ICRzY29wZS5waXBTdGFydERhdGUgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gZ2V0RGF0ZUpTT04oJHNjb3BlLnBpcFN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydERhdGUgPSBwaXBEYXRlVGltZS50b1N0YXJ0RGF5KHN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydFRpbWUgPSAoPGFueT5uZXcgRGF0ZShzdGFydCkgLSAkc2NvcGUuZGF0YS5zdGFydERhdGUpIC8gKDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5waXBFbmREYXRlICE9PSBudWxsICYmICRzY29wZS5waXBFbmREYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBfLmlzRGF0ZSgkc2NvcGUucGlwRW5kRGF0ZSkgPyAkc2NvcGUucGlwRW5kRGF0ZSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gZ2V0RGF0ZUpTT04oJHNjb3BlLnBpcEVuZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kRGF0ZSA9IHBpcERhdGVUaW1lLnRvU3RhcnREYXkoZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmRUaW1lID0gKDxhbnk+bmV3IERhdGUoZW5kKSAtICRzY29wZS5kYXRhLmVuZERhdGUpIC8gKDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVTdGFydERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRW5kRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0LCBpLCBqLCBtaW51dGVzO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBqICogMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpICogNjAgKyBtaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogXy5wYWQoaS50b1N0cmluZygpLCAzLCAnMCcpLnN1YnN0cigwLCAyKSArICc6JyArIF8ucGFkKG1pbnV0ZXMudG9TdHJpbmcoKSwgMiwgJzAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gJzEnIHx8IHZhbHVlID09ICd0cnVlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5zdGFydERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmVuZERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZW5kVGltZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5kdXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd1RpbWUgPSAhdG9Cb29sZWFuKCRzY29wZS5waXBIaWRlVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGluaXRpYWxpemUgZGF0YVxyXG4gICAgICAgICAgICAkc2NvcGUuaW50ZXJ2YWxUaW1lQ29sbGVjdGlvbiA9IGdldFRpbWVJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBpbml0RGF0ZSgpO1xyXG4gICAgICAgICAgICBkZWZpbmVEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBwcm9jZXNzIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZVN0YXJ0RGF0ZSA9IGZ1bmN0aW9uIChuZXdWKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBpcENoYW5nZWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZUVuZERhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUVuZERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmR1cmF0aW9uID0gc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5waXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUub25DaGFuZ2VTdGFydFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnN0YXJ0RGF0ZSA9IHBpcERhdGVUaW1lLnRvU3RhcnREYXkobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuZHVyYXRpb24gPSBzZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBpcENoYW5nZWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5vbkNoYW5nZUVuZFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5kYXRhLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5lbmREYXRlID0gcGlwRGF0ZVRpbWUudG9TdGFydERheShuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUVuZERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmR1cmF0aW9uID0gc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGUoKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5waXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmRpc2FibGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaEdyb3VwKFskc2NvcGUucGlwU3RhcnREYXRlLCAkc2NvcGUucGlwRW5kRGF0ZV0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5iaW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgkc2NvcGUuZGlzYWJsZWQsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVDb250cm9scyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBjbGFzc1xyXG4gICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygncGlwLXRpbWUtcmFuZ2UtZWRpdCcpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2RhdGVfZGlyZWN0aXZlL2RhdGUuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJwaXAtZGF0ZSBsYXlvdXQtcm93IGZsZXhcIiB0YWJpbmRleD1cIi0xXCI+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lciBmbGV4XCI+PG1kLXNlbGVjdCBjbGFzcz1cInBpcC1kYXRlLWRheSBmbGV4XCIgbmctZGlzYWJsZWQ9XCJkaXNhYmxlQ29udHJvbHNcIiBuZy1tb2RlbD1cImRheVwiIHBsYWNlaG9sZGVyPVwie3tkYXlMYWJlbH19XCIgbmctY2hhbmdlPVwib25EYXlDaGFuZ2VkKClcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0XCIgbmctcmVwZWF0PVwib3B0IGluIGRheXMgdHJhY2sgYnkgb3B0XCI+e3s6OiBvcHQgfX08L21kLW9wdGlvbj48L21kLXNlbGVjdD48L21kLWlucHV0LWNvbnRhaW5lcj48ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyLXNlcGFyYXRvciBmbGV4LWZpeGVkXCI+PC9kaXY+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lciBmbGV4XCI+PG1kLXNlbGVjdCBjbGFzcz1cInBpcC1kYXRlLW1vbnRoZmxleFwiIG5nLWRpc2FibGVkPVwiZGlzYWJsZUNvbnRyb2xzXCIgbmctbW9kZWw9XCJtb250aFwiIHBsYWNlaG9sZGVyPVwie3ttb250aExhYmVsfX1cIiBuZy1jaGFuZ2U9XCJvbk1vbnRoQ2hhbmdlZCgpXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBtb250aHMgdHJhY2sgYnkgb3B0LmlkXCI+e3s6OiBvcHQubmFtZSB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXItc2VwYXJhdG9yIGZsZXgtZml4ZWRcIj48L2Rpdj48bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIj48bWQtc2VsZWN0IGNsYXNzPVwicGlwLWRhdGUteWVhciBmbGV4XCIgbmctZGlzYWJsZWQ9XCJkaXNhYmxlQ29udHJvbHNcIiBuZy1tb2RlbD1cInllYXJcIiBwbGFjZWhvbGRlcj1cInt7eWVhckxhYmVsfX1cIiBuZy1jaGFuZ2U9XCJvblllYXJDaGFuZ2VkKClcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0XCIgbmctcmVwZWF0PVwib3B0IGluIHllYXJzIHRyYWNrIGJ5IG9wdFwiPnt7Ojogb3B0IH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4oZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2RhdGVfcmFuZ2VfZGlyZWN0aXZlL2RhdGVfcmFuZ2UuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJwaXAtZGF0ZS1yYW5nZSBsYXlvdXQtcm93IGZsZXhcIiB0YWJpbmRleD1cIi0xXCI+PG1kLWlucHV0LWNvbnRhaW5lciBuZy1zaG93PVwiaXNEYXkoKVwiIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIHBpcC1kYXkgZmxleFwiIG5nLWNsYXNzPVwie1xcJ2ZsZXgtZml4ZWRcXCcgOiAkbWRNZWRpYShcXCdndC14c1xcJyl9XCI+PG1kLXNlbGVjdCBjbGFzcz1cInNlbGVjdC1kYXlcIiBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6IHBpcE5vTGluZX1cIiBuZy1kaXNhYmxlPVwie3tkaXNhYmxlQ29udHJvbHN9fVwiIG1kLW9uLW9wZW49XCJvbkRheUNsaWNrKClcIiBuZy1tb2RlbD1cImRheVwiIG5nLWNoYW5nZT1cIm9uRGF5Q2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ7e2RheUxhYmVsfX1cIiBhcmlhLWxhYmVsPVwiREFZXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBkYXlzIHRyYWNrIGJ5IG9wdFwiPnt7bmFtZURheXNbJGluZGV4XX19IHt7IG9wdCB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxtZC1pbnB1dC1jb250YWluZXIgbmctc2hvdz1cImlzV2VlaygpXCIgY2xhc3M9XCJpbnB1dC1jb250YWluZXIgZmxleFwiIG5nLWNsYXNzPVwie1xcJ2ZsZXgtZml4ZWRcXCcgOiAkbWRNZWRpYShcXCdndC14c1xcJyl9XCI+PG1kLXNlbGVjdCBjbGFzcz1cInNlbGVjdC13ZWVrXCIgbmctY2xhc3M9XCJ7XFwncGlwLW5vLWxpbmVcXCcgOiBwaXBOb0xpbmV9XCIgbmctZGlzYWJsZT1cInt7ZGlzYWJsZUNvbnRyb2xzfX1cIiBuZy1tb2RlbD1cIndlZWtcIiBuZy1jaGFuZ2U9XCJvbldlZWtDaGFuZ2UoKVwiIHBsYWNlaG9sZGVyPVwie3t3ZWVrTGFiZWx9fVwiIGFyaWEtbGFiZWw9XCJXRUVLXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiB3ZWVrcyB0cmFjayBieSBvcHQuaWRcIj57eyBvcHQubmFtZSB9fTwvbWQtb3B0aW9uPjwvbWQtc2VsZWN0PjwvbWQtaW5wdXQtY29udGFpbmVyPjxkaXYgY2xhc3M9XCJmbGV4LWZpeGVkXCIgbmctY2xhc3M9XCJ7XFwnc3BhY2UxNlxcJzogJG1kTWVkaWEoXFwnZ3QteHNcXCcpLCBcXCdzcGFjZThcXCc6ICRtZE1lZGlhKFxcJ3hzXFwnKX1cIiBuZy1zaG93PVwiaXNEYXkoKSB8fCBpc1dlZWsoKVwiPjwvZGl2PjxtZC1pbnB1dC1jb250YWluZXIgbmctc2hvdz1cImlzTW9udGgoKSAmJiAhbW9udGhGb3JtYXRTaG9ydFwiIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIiBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPjxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3QtbW9udGhcIiBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6IHBpcE5vTGluZX1cIiBuZy1kaXNhYmxlPVwie3tkaXNhYmxlQ29udHJvbHN9fVwiIG1kLW9uLW9wZW49XCJvbk1vbnRoQ2xpY2soKVwiIG5nLW1vZGVsPVwibW9udGhcIiBuZy1jaGFuZ2U9XCJvbk1vbnRoQ2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ7e21vbnRoTGFiZWx9fVwiIGFyaWEtbGFiZWw9XCJNT05USFwiPjxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHQuaWRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4gbW9udGhzIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC5uYW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PG1kLWlucHV0LWNvbnRhaW5lciBuZy1zaG93PVwiaXNNb250aCgpICYmIG1vbnRoRm9ybWF0U2hvcnRcIiBjbGFzcz1cImZsZXggaW5wdXQtY29udGFpbmVyXCIgbmctY2xhc3M9XCJ7XFwnZmxleC1maXhlZFxcJyA6ICRtZE1lZGlhKFxcJ2d0LXhzXFwnKX1cIj48bWQtc2VsZWN0IGNsYXNzPVwic2VsZWN0LW1vbnRoXCIgbmctY2xhc3M9XCJ7XFwncGlwLW5vLWxpbmVcXCcgOiBwaXBOb0xpbmV9XCIgbmctZGlzYWJsZT1cInt7ZGlzYWJsZUNvbnRyb2xzfX1cIiBtZC1vbi1vcGVuPVwib25Nb250aENsaWNrKClcIiBuZy1tb2RlbD1cIm1vbnRoXCIgbmctY2hhbmdlPVwib25Nb250aENoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwie3ttb250aExhYmVsfX1cIiBhcmlhLWxhYmVsPVwiTU9OVEhcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0LmlkXCIgbmctcmVwZWF0PVwib3B0IGluIHNob3J0TW9udGhzIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC5uYW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PGRpdiBjbGFzcz1cImZsZXgtZml4ZWRcIiBuZy1jbGFzcz1cIntcXCdzcGFjZTE2XFwnOiAkbWRNZWRpYShcXCdndC14c1xcJyksIFxcJ3NwYWNlOFxcJzogJG1kTWVkaWEoXFwneHNcXCcpfVwiIG5nLXNob3c9XCJpc01vbnRoKClcIj48L2Rpdj48bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIiBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPjxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3QteWVhclwiIG5nLWNsYXNzPVwie1xcJ3BpcC1uby1saW5lXFwnIDogcGlwTm9MaW5lfVwiIG5nLWRpc2FibGU9XCJ7e2Rpc2FibGVDb250cm9sc319XCIgbWQtb24tb3Blbj1cIm9uWWVhckNsaWNrKClcIiBuZy1tb2RlbD1cInllYXJcIiBuZy1jaGFuZ2U9XCJvblllYXJDaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cInt7eWVhckxhYmVsfX1cIiBhcmlhLWxhYmVsPVwiWUVBUlwiPjxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4geWVhcnMgdHJhY2sgYnkgb3B0XCI+e3sgb3B0IH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4oZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3RpbWVfcmFuZ2VfZGlyZWN0aXZlL3RpbWVfcmFuZ2UuaHRtbCcsXG4gICAgJzxwPjxzcGFuIG5nLWlmPVwiZGF0YS5zdGFydCAhPSBudWxsXCI+e3tkYXRhLnN0YXJ0IHwgZm9ybWF0TG9uZ0RhdGVUaW1lfX08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2VwYXJhdG9yXCIgbmctaWY9XCJkYXRhLnN0YXJ0ICYmIGRhdGEuZW5kXCI+LTwvc3Bhbj4gPHNwYW4gbmctaWY9XCJkYXRhLmVuZCAhPSBudWxsXCI+e3tkYXRhLmVuZCB8IGZvcm1hdExvbmdEYXRlVGltZX19PC9zcGFuPjwvcD4nKTtcbn1dKTtcbn0pKCk7XG5cbihmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVzLlRlbXBsYXRlcycsIFtdKTtcbn1cbm1vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgndGltZV9yYW5nZV9lZGl0X2RpcmVjdGl2ZS90aW1lX3JhbmdlX2VkaXQuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJldmVudC1lZGl0IGxheW91dC1yb3cgbGF5b3V0LXhzLWNvbHVtbiBmbGV4IGxheW91dC1hbGlnbi1zdGFydC1zdGFydFwiPjxkaXYgZmxleD1cIjQ3XCIgY2xhc3M9XCJzdGFydC10aW1lLWNvbnRhaW5lclwiPjxwIGNsYXNzPVwidGV4dC1jYXB0aW9uIHRleHQtZ3JleVwiPnt7c3RhcnRMYWJlbH19PC9wPjxkaXYgY2xhc3M9XCJsYXlvdXQtcm93IGxheW91dC1hbGlnbi1zcGFjZS1iZXR3ZWVuLWNlbnRlclwiPjxkaXYgY2xhc3M9XCJwaXAtZGF0ZXBpY2tlci1jb250YWluZXJcIiBmbGV4PVwiNDlcIj48bWQtZGF0ZXBpY2tlciBuZy1tb2RlbD1cImRhdGEuc3RhcnREYXRlXCIgeG1kLXBsYWNlaG9sZGVyPVwie3tzdGFydExhYmVsfX1cIiBuZy1jaGFuZ2U9XCJvbkNoYW5nZVN0YXJ0RGF0ZSgpXCIgbmctZGlzYWJsZWQ9XCJpc0Rpc2FibGVkKClcIiBhcmlhLWxhYmVsPVwiU1RBUlQtREFURVwiPjwvbWQtZGF0ZXBpY2tlcj48L2Rpdj48ZGl2IGZsZXg9XCJcIiBuZy1pZj1cInNob3dUaW1lXCI+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPjxtZC1zZWxlY3QgYXJpYS1sYWJlbD1cIlNUQVJULVRJTUVcIiBuZy1tb2RlbD1cImRhdGEuc3RhcnRUaW1lXCIgbmctZGlzYWJsZWQ9XCJpc0Rpc2FibGVkKClcIiBuZy1jaGFuZ2U9XCJvbkNoYW5nZVN0YXJ0VGltZShkYXRhLnN0YXJ0VGltZSlcIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0LmlkXCIgbmctcmVwZWF0PVwib3B0IGluIGludGVydmFsVGltZUNvbGxlY3Rpb24gdHJhY2sgYnkgb3B0LmlkXCI+e3sgb3B0LnRpbWUgfX08L21kLW9wdGlvbj48L21kLXNlbGVjdD48L21kLWlucHV0LWNvbnRhaW5lcj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGZsZXg9XCI0N1wiIGNsYXNzPVwiZW5kLXRpbWUtY29udGFpbmVyXCI+PHAgY2xhc3M9XCJ0ZXh0LWNhcHRpb24gdGV4dC1ncmV5XCI+e3tlbmRMYWJlbH19PC9wPjxkaXYgY2xhc3M9XCJsYXlvdXQtcm93IGxheW91dC1hbGlnbi1zcGFjZS1iZXR3ZWVuLWNlbnRlclwiPjxkaXYgY2xhc3M9XCJwaXAtZGF0ZXBpY2tlci1jb250YWluZXIgZmxleC00OVwiPjxtZC1kYXRlcGlja2VyIG5nLW1vZGVsPVwiZGF0YS5lbmREYXRlXCIgeG1kLXBsYWNlaG9sZGVyPVwie3tlbmRMYWJlbH19XCIgbmctZGlzYWJsZWQ9XCJpc0Rpc2FibGVkKClcIiBuZy1jaGFuZ2U9XCJvbkNoYW5nZUVuZERhdGUoKVwiIGFyaWEtbGFiZWw9XCJFTkQtREFURVwiPjwvbWQtZGF0ZXBpY2tlcj48L2Rpdj48ZGl2IGZsZXg9XCJcIiBuZy1pZj1cInNob3dUaW1lXCI+PG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPjxtZC1zZWxlY3QgYXJpYS1sYWJlbD1cIkVORC1USU1FXCIgbmctbW9kZWw9XCJkYXRhLmVuZFRpbWVcIiBuZy1jaGFuZ2U9XCJvbkNoYW5nZUVuZFRpbWUoKVwiIG5nLWRpc2FibGVkPVwiaXNEaXNhYmxlZCgpXCI+PG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiBpbnRlcnZhbFRpbWVDb2xsZWN0aW9uIHRyYWNrIGJ5IG9wdC5pZFwiPnt7IG9wdC50aW1lIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXAtd2VidWktZGF0ZXMtaHRtbC5taW4uanMubWFwXG4iXX0=
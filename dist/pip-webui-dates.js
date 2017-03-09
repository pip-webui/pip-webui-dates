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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=pip-webui-dates.js.map

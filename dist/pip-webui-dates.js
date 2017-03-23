(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).dates = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    var DateBindings = {
        timeMode: '@pipTimeMode',
        disabled: '&ngDisabled',
        model: '<ngModel',
        ngChange: '<'
    };
    var DateChanges = (function () {
        function DateChanges() {
        }
        return DateChanges;
    }());
    var DateController = (function () {
        function DateController($injector, $scope) {
            this.localeDate = moment.localeData();
            this.momentMonths = angular.isArray(this.localeDate['_months']) ? this.localeDate['_months'] : this.localeDate['_months'].format;
            this.momentDays = angular.isArray(this.localeDate['_weekdays']) ? this.localeDate['_weekdays'] : this.localeDate['_weekdays'].format;
            this.momentShortDays = this.localeDate['_weekdaysMin'];
            this.momentFirstDayOfWeek = this.localeDate['_week'].dow;
            var value = this.model ? _.isDate(this.model) ? this.model : new Date(this.model) : null;
            this.day = value ? value.getDate() : null;
            this.month = value ? value.getMonth() + 1 : null;
            this.year = value ? value.getFullYear() : null;
            this.days = this.dayList(this.month, this.year);
            this.months = this.monthList();
            this.years = this.yearList();
            this.disableControls = this.disabled ? this.disabled() : false;
        }
        DateController.prototype.$onChanges = function (changes) {
            if (changes.model && changes.model.currentValue) {
                this.model = changes.model.currentValue;
                this.getValue(this.model);
            }
        };
        DateController.prototype.dayList = function (month, year) {
            var count = 31, days = [];
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                count = 30;
            }
            else {
                if (month === 2) {
                    if (year) {
                        count = year % 4 === 0 ? 29 : 28;
                    }
                    else {
                        count = 28;
                    }
                }
            }
            for (var i = 1; i <= count; i++) {
                days.push(i);
            }
            return days;
        };
        DateController.prototype.monthList = function () {
            var months = [];
            for (var i = 1; i <= 12; i++) {
                months.push({
                    id: i,
                    name: this.momentMonths[i - 1]
                });
            }
            return months;
        };
        DateController.prototype.yearList = function () {
            var currentYear = new Date().getFullYear(), startYear = this.timeMode === 'future' ? currentYear : currentYear - 100, endYear = this.timeMode === 'past' ? currentYear : currentYear + 100, years = [];
            if (this.timeMode === 'past') {
                for (var i = endYear; i >= startYear; i--) {
                    years.push(i);
                }
            }
            else {
                for (var i = startYear; i <= endYear; i++) {
                    years.push(i);
                }
            }
            return years;
        };
        DateController.prototype.adjustDay = function () {
            var days = this.dayList(this.month, this.year);
            if (this.days.length !== days.length) {
                if (this.day > days.length) {
                    this.day = days.length;
                }
                this.days = days;
            }
        };
        DateController.prototype.getValue = function (v) {
            var value = v ? _.isDate(v) ? v : new Date(v) : null, day = value ? value.getDate() : null, month = value ? value.getMonth() + 1 : null, year = value ? value.getFullYear() : null;
            if (this.month !== month && this.year !== year) {
                this.days = this.dayList(this.month, this.year);
            }
            this.day = day;
            this.month = month;
            this.year = year;
        };
        DateController.prototype.setValue = function () {
            var value;
            if (this.day && this.month && this.year) {
                value = new Date(this.year, this.month - 1, this.day, 0, 0, 0, 0);
                this.model = value;
                this.ngChange(this.model);
            }
        };
        DateController.prototype.onMonthChanged = function () {
            this.adjustDay();
            this.setValue();
        };
        DateController.prototype.onYearChanged = function () {
            this.adjustDay();
            this.setValue();
        };
        return DateController;
    }());
    var DateComponent = {
        bindings: DateBindings,
        templateUrl: 'date/Date.html',
        controller: DateController
    };
    angular
        .module('pipDate', ['pipDates.Templates'])
        .component('pipDate', DateComponent);
})();
},{}],2:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
"use strict";
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
(function () {
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
            return this._momentRanged[index];
        };
        DateTime.prototype.getOperationRange = function (value) {
            if (this.isUndefinedOrNull(value)) {
                return 'day';
            }
            var range = value == 'isoweek' ? 'week' : value, index = this._momentRanged.indexOf(range);
            if (index < 0) {
                return 'day';
            }
            return this._momentRanged[index];
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
            if (dateEnd === null || dateStart.isSame(dateEnd)) {
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
                return this.formatMonthDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
            }
            return dateStart.format(basicFormat) + '-' + dateEnd.format(basicFormat);
        };
        DateTime.prototype.toStartRange = function (value, range) {
            var date;
            if (this.isUndefinedOrNull(value)) {
                throw new Error('toStartRange - value is undefined or null');
            }
            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            }
            else {
                date = moment(value);
            }
            if (!date.isValid()) {
                throw new Error('toStartRange - date is invalid');
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
                throw new Error('getPrevStart - value is undefined or null');
            }
            date = moment(value);
            if (!date.isValid()) {
                throw new Error('getPrevStart - date is invalid');
            }
            range = this.getRange(category);
            result = moment(date).startOf(range).add(-1, this.getOperationRange(range));
            return result.toDate();
        };
        DateTime.prototype.getNowStart = function (category) {
            var date, range, result;
            date = moment();
            if (!date.isValid()) {
                throw new Error('getNowStart - date is invalid');
            }
            range = this.getRange(category);
            result = moment(date).startOf(range);
            return result.toDate();
        };
        DateTime.prototype.addHours = function (value, hours) {
            var date;
            if (this.isUndefinedOrNull(value) || !angular.isNumber(hours)) {
                throw new Error('addHours - value is undefined or null or hours is not a number');
            }
            date = moment(value);
            if (!date.isValid()) {
                throw new Error('addHours - date is invalid');
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
})();
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateTimeConfig = (function () {
    function DateTimeConfig() {
    }
    return DateTimeConfig;
}());
exports.DateTimeConfig = DateTimeConfig;
},{}],5:[function(require,module,exports){
angular.module('pipDateTime', [
    'pipDateTime.Service',
    'pipDateTime.Filter'
]);
},{}],6:[function(require,module,exports){
(function () {
    var DateRangeBindings = {
        timeMode: '@pipTimeMode',
        disabled: '&ngDisabled',
        model: '=ngModel',
        pipChanged: '&',
        type: '@pipDateRangeType',
        pipDateFormat: '@',
        pipNoLine: '@'
    };
    var DateRangeChanges = (function () {
        function DateRangeChanges() {
        }
        return DateRangeChanges;
    }());
    var DateRangeController = (function () {
        function DateRangeController($mdMedia, $timeout, $scope, $element, $rootScope, $injector) {
            this.$mdMedia = $mdMedia;
            this.$timeout = $timeout;
            this.prevState = {};
            this.currentState = {};
            this.localeDate = moment.localeData();
            this.momentMonths = angular.isArray(this.localeDate._months) ? this.localeDate._months : this.localeDate._months.format;
            this.momentDays = angular.isArray(this.localeDate._weekdays) ? this.localeDate._weekdays : this.localeDate._weekdays.format;
            this.momentShortDays = this.localeDate._weekdaysMin;
            this.momentFirstDayOfWeek = this.localeDate._week.dow;
            this.currentDate = new Date();
            this.currentYear = this.currentDate.getUTCFullYear();
            this.currentMonth = this.currentDate.getUTCMonth() + 1;
            this.currentDay = this.currentDate.getUTCDate();
            this.init();
            this.disableControls = this.disabled ? this.disabled() : false;
        }
        DateRangeController.prototype.$onChanges = function (changes) {
            console.log(changes);
            if (changes.type && changes.type.currentValue) {
                this.type = changes.type.currentValue;
                this.init();
            }
        };
        DateRangeController.prototype.onMonthChanged = function () {
            if (this.type === 'weekly') {
                var date = void 0, dayOfWeek = void 0;
                date = new Date(Date.UTC(this.year, this.month - 1, 1));
                dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
                this.week = this.getWeekByDate(dayOfWeek, this.month - 1, this.year);
                this.correctWeek();
                this.adjustWeek();
            }
            else {
                this.adjustDay();
            }
            this.setValue();
        };
        DateRangeController.prototype.onYearChanged = function () {
            var date, dayOfWeek;
            date = new Date(Date.UTC(this.year, this.month - 1, 1));
            dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
            if (this.type === 'weekly') {
                this.week = this.getWeekByDate(dayOfWeek, this.month - 1, this.year);
                this.adjustWeek();
                this.correctWeek();
            }
            else {
                this.adjustDay();
            }
            this.setValue();
        };
        ;
        DateRangeController.prototype.onWeekChange = function () {
            if (this.type === 'weekly') {
                this.adjustWeek();
                this.correctWeek();
            }
            else {
                this.adjustDay();
            }
            this.setValue();
        };
        ;
        DateRangeController.prototype.isDay = function () {
            return this.type === 'daily';
        };
        ;
        DateRangeController.prototype.isWeek = function () {
            return this.type === 'weekly';
        };
        ;
        DateRangeController.prototype.isMonth = function () {
            return this.type === 'daily' ||
                this.type === 'weekly' ||
                this.type === 'monthly';
        };
        ;
        DateRangeController.prototype.onChange = function () {
            var _this = this;
            if (this.pipChanged) {
                this.$timeout(function () {
                    _this.pipChanged();
                }, 0);
            }
        };
        ;
        DateRangeController.prototype.setCurrent = function () {
            this.currentState.day = this.day;
            this.currentState.month = this.month;
            this.currentState.year = this.year;
            this.currentState.week = this.week;
            this.currentState.dateRangeType = this.type;
            this.currentState.model = this.model;
        };
        DateRangeController.prototype.fillLists = function () {
            this.days = this.dayList(this.month, this.year);
            this.weeks = this.weekList(this.month, this.year);
            this.months = this.monthList();
            this.shortMonths = this.monthList();
            this.years = this.yearList();
        };
        DateRangeController.prototype.correctWeek = function () {
            if (!this.prevState.model || this.prevState.model && this.prevState.model.getTime() >= this.model.getTime()) {
                if (this.weeks && this.weeks[this.week] && this.weeks[this.week].id <= 0) {
                    if (this.month < 12) {
                        this.month += 1;
                    }
                    else {
                        this.month = 1;
                        this.year += 1;
                    }
                    this.fillLists();
                }
            }
        };
        DateRangeController.prototype.init = function () {
            var value;
            value = this.model ? new Date(this.model) : null;
            this.day = value ? value.getUTCDate() : null;
            this.month = value ? value.getUTCMonth() + 1 : null;
            this.year = value ? value.getUTCFullYear() : null;
            this.week = value ? this.getWeekByDate(this.day, this.month - 1, this.year) : null;
            this.fillLists();
            if (this.type === 'weekly') {
                this.correctWeek();
            }
            this.adjustWeek();
            this.setValue();
        };
        DateRangeController.prototype.onYearClick = function () {
            if (!this.year) {
                this.year = this.currentYear;
            }
        };
        ;
        DateRangeController.prototype.onMonthClick = function () {
            if (!this.month) {
                this.month = this.currentMonth;
            }
        };
        ;
        DateRangeController.prototype.onDayClick = function () {
            if (!this.year) {
                this.day = this.currentDay;
            }
        };
        ;
        DateRangeController.prototype.getCountDay = function (month, year) {
            var count = 31;
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                count = 30;
                return count;
            }
            if (month === 2) {
                if (year) {
                    count = year % 4 === 0 ? 29 : 28;
                    return count;
                }
                count = 28;
            }
            return count;
        };
        DateRangeController.prototype.dayList = function (month, year) {
            var count, days;
            count = this.getCountDay(month, year);
            this.nameDays = [];
            days = [];
            for (var i = 1; i <= count; i++) {
                days.push(i);
                this.nameDays.push(this.momentShortDays[moment([year, month - 1, i]).weekday()]);
            }
            return days;
        };
        DateRangeController.prototype.getWeekByDate = function (day, month, year) {
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
        };
        DateRangeController.prototype.getWeek = function (day, countDay, countPrevMonthDay) {
            var endDay, startDay;
            endDay = day + 6 > countDay ? countDay - day - 6 : day + 6;
            startDay = day > 0 ? day : countPrevMonthDay + day;
            return startDay.toString() + ' - ' + (Math.abs(endDay)).toString();
        };
        DateRangeController.prototype.weekList = function (month, year) {
            var weeks, countDay, countPrevMonthDay, startWeek;
            weeks = [];
            countDay = this.getCountDay(month, year);
            startWeek = this.getWeekByDate(1, month - 1, year);
            countPrevMonthDay = month - 1 ? this.getCountDay(month - 1, year) : this.getCountDay(12, year - 1);
            while (startWeek < countDay + 1) {
                weeks.push({
                    id: startWeek,
                    name: this.getWeek(startWeek, countDay, countPrevMonthDay)
                });
                startWeek = startWeek + 7;
            }
            return weeks;
        };
        DateRangeController.prototype.monthList = function () {
            var months = [];
            for (var i = 1; i <= 12; i++) {
                months.push({
                    id: i,
                    name: this.momentMonths[i - 1]
                });
            }
            return months;
        };
        DateRangeController.prototype.yearList = function () {
            var startYear, endYear, years = [];
            switch (this.timeMode) {
                case 'future':
                    startYear = this.currentYear;
                    endYear = this.currentYear + 100;
                    break;
                case 'past':
                    startYear = this.currentYear - 100;
                    endYear = this.currentYear;
                    break;
                case 'now':
                    startYear = this.currentYear - 50;
                    endYear = this.currentYear + 100;
                    break;
                default:
                    startYear = this.currentYear - 50;
                    endYear = this.currentYear + 50;
                    break;
            }
            if (this.timeMode === 'future') {
                for (var i = startYear; i <= endYear; i++) {
                    years.push(i);
                }
            }
            else {
                for (var i = endYear; i >= startYear; i--) {
                    years.push(i);
                }
            }
            return years;
        };
        DateRangeController.prototype.adjustDay = function () {
            var days = this.dayList(this.month, this.year);
            switch (this.type) {
                case 'monthly':
                    this.day = 1;
                    break;
                case 'yearly':
                    this.month = 1;
                    this.day = 1;
                    break;
                default:
                    if (this.days.length !== days.length) {
                        if (this.day > days.length) {
                            this.day = days.length;
                        }
                    }
                    break;
            }
            this.days = days;
        };
        DateRangeController.prototype.adjustWeek = function () {
            var weeks = this.weekList(this.month, this.year);
            this.week = this.getWeekByDate(this.week, this.month - 1, this.year);
            this.weeks = weeks;
        };
        DateRangeController.prototype.getValue = function (v) {
            var value, day, month, year, week;
            value = v ? new Date(v) : null;
            day = value ? value.getUTCDate() : null;
            month = value ? value.getUTCMonth() + 1 : null;
            year = value ? value.getUTCFullYear() : null;
            week = value ? this.getWeekByDate(day, month - 1, year) : null;
            if (this.day === day && this.month === month && this.year === year && this.week === week) {
                return;
            }
            this.day = day;
            this.month = month;
            this.year = year;
            this.week = week;
            this.days = this.dayList(this.month, this.year);
            this.weeks = this.weekList(this.month, this.year);
        };
        DateRangeController.prototype.setValue = function () {
            var value;
            if (this.type === 'weekly') {
                value = new Date(this.year, this.month - 1, this.week, 0, 0, 0, 0);
                value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
                this.model = value;
            }
            else {
                value = new Date(this.year, this.month - 1, this.day, 0, 0, 0, 0);
                value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
                this.model = value;
            }
            this.prevState = _.cloneDeep(this.currentState);
            this.setCurrent();
            this.onChange();
        };
        return DateRangeController;
    }());
    var daterange = {
        bindings: DateRangeBindings,
        templateUrl: 'date_range/DateRange.html',
        controller: DateRangeController
    };
    angular
        .module('pipDateRange', ['pipDates.Templates'])
        .component('pipDateRange', daterange);
})();
},{}],7:[function(require,module,exports){
{
    translateFilter.$inject = ['$injector'];
    function translateFilter($injector) {
        var pipTranslate = $injector.has('pipTranslate')
            ? $injector.get('pipTranslate') : null;
        return function (key) {
            return pipTranslate ? pipTranslate.translate(key) || key : key;
        };
    }
    angular
        .module('pipDates.Translate', [])
        .filter('translate', translateFilter);
}
},{}],8:[function(require,module,exports){
angular.module('pipDates', [
    'pipDate',
    'pipTimeRange',
    'pipDateTime',
    'pipTimeRangeEdit',
    'pipDateRange',
    'pipDates.Translate'
]);
},{}],9:[function(require,module,exports){
(function () {
    var TimeRangeData = (function () {
        function TimeRangeData() {
        }
        return TimeRangeData;
    }());
    var TimeRangeBindings = {
        start: '<pipStartDate',
        end: '<pipEndDate'
    };
    var TimeRangeChanges = (function () {
        function TimeRangeChanges() {
        }
        return TimeRangeChanges;
    }());
    var TimeRangeController = (function () {
        function TimeRangeController($scope, $attrs, $element) {
            this.data = new TimeRangeData();
            this.defineStartDate();
            this.defineEndDate();
            $element.addClass('pip-time-range');
        }
        TimeRangeController.prototype.$onChanges = function (changes) {
            if (changes.start && changes.start.currentValue) {
                this.data.start = null;
                this.defineStartDate();
            }
            if (changes.end && changes.end.currentValue) {
                this.data.end = null;
                this.defineEndDate();
            }
        };
        TimeRangeController.prototype.getDateJSON = function (value) {
            return value ? new Date(value) : null;
        };
        TimeRangeController.prototype.defineStartDate = function () {
            if (this.start !== null && this.start !== undefined) {
                this.data.start = _.isDate(this.start) ? this.start
                    : this.getDateJSON(this.start);
            }
        };
        TimeRangeController.prototype.defineEndDate = function () {
            if (this.end !== null && this.end !== undefined) {
                this.data.end = _.isDate(this.end) ? this.end
                    : this.getDateJSON(this.end);
            }
        };
        TimeRangeController.prototype.toBoolean = function (value) {
            if (value == null)
                return false;
            if (!value)
                return false;
            value = value.toString().toLowerCase();
            return value == '1' || value == 'true';
        };
        return TimeRangeController;
    }());
    var TimeRangeComponent = {
        bindings: TimeRangeBindings,
        templateUrl: 'time_range/TimeRange.html',
        controller: TimeRangeController
    };
    angular.module('pipTimeRange', [])
        .component('pipTimeRange', TimeRangeComponent);
})();
},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervalTimeRange = 30;
exports.MinutesInHour = 60;
exports.HoursInDay = 24;
exports.MillisecondsInSecond = 1000;
{
    var TimeRangeEditData_1 = (function () {
        function TimeRangeEditData_1() {
            this.bind = false;
        }
        return TimeRangeEditData_1;
    }());
    var TimeRangeEditBindings = {
        pipStartDate: '<',
        pipChanged: '=',
        pipEndDate: '<',
        pipStartLabel: '@',
        pipEndLabel: '@',
        disabled: '&ngDisabled',
        pipHideTime: '=',
        pipSize: '='
    };
    var TimeRangeEditChanges = (function () {
        function TimeRangeEditChanges() {
        }
        return TimeRangeEditChanges;
    }());
    var TimeRangeEditController = (function () {
        function TimeRangeEditController($injector, pipDateTime, $scope, $element) {
            this.$injector = $injector;
            this.pipDateTime = pipDateTime;
            this.$scope = $scope;
            this.startLabel = 'Start time';
            this.endLabel = 'End time';
            this.translate();
            this.intervalTimeCollection = this.getTimeInterval();
            this.data = new TimeRangeEditData_1();
            this.initDate();
            this.defineDate();
            $element.addClass('pip-time-range-edit');
        }
        TimeRangeEditController.prototype.$onChanges = function (changes) {
            if (changes.pipStartDate && changes.pipStartDate.currentValue) {
                this.pipStartDate = changes.pipStartDate.currentValue;
                this.initDate();
                this.defineDate();
            }
            if (changes.pipEndDate && changes.pipEndDate.currentValue) {
                this.pipEndDate = changes.pipEndDate.currentValue;
                this.initDate();
                this.defineDate();
            }
        };
        TimeRangeEditController.prototype.translate = function () {
            var pipTranslate = this.$injector.has('pipTranslate') ? this.$injector.get('pipTranslate') : null;
            if (pipTranslate) {
                pipTranslate.setTranslations('en', {
                    EVENT_NEW_START_TIME: 'Start time',
                    EVENT_NEW_END_TIME: 'End time'
                });
                pipTranslate.setTranslations('ru', {
                    EVENT_NEW_START_TIME: 'Начало',
                    EVENT_NEW_END_TIME: 'Конец'
                });
                this.startLabel = this.pipStartLabel ? pipTranslate.translate(this.pipStartLabel)
                    : pipTranslate.translate('EVENT_NEW_START_TIME');
                this.endLabel = this.pipEndLabel ? pipTranslate.translate(this.pipEndLabel)
                    : pipTranslate.translate('EVENT_NEW_END_TIME');
            }
        };
        TimeRangeEditController.prototype.getDateJSON = function (value) {
            return value ? new Date(value) : null;
        };
        TimeRangeEditController.prototype.setDuration = function () {
            var start, end;
            if (!this.data.startDate || !this.data.endDate) {
                return null;
            }
            start = new Date(this.data.startDate.getTime() + this.data.startTime * exports.MinutesInHour * exports.MillisecondsInSecond);
            end = new Date(this.data.endDate.getTime() + this.data.endTime * exports.MinutesInHour * exports.MillisecondsInSecond);
            return end - start;
        };
        TimeRangeEditController.prototype.validateStartDate = function () {
            var date, start, end, endTime, startTime;
            if (!this.data.startDate) {
                this.data.startTime = null;
                return;
            }
            if (_.isUndefined(this.data.startTime) || _.isNull(this.data.startTime)) {
                if (!this.data.endTime) {
                    start = new Date();
                    startTime = date.getTime() - this.pipDateTime.toStartDay(date);
                    this.data.startTime = Math.floor(startTime / (exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond)) * exports.IntervalTimeRange;
                }
                else {
                    this.data.startTime = this.data.endTime === 0 ? 0 : this.data.endTime - exports.IntervalTimeRange;
                }
            }
            start = new Date(this.data.startDate.getTime() + this.data.startTime * exports.MinutesInHour * exports.MillisecondsInSecond);
            if (this.data.duration) {
                end = new Date(start.getTime() + this.data.duration);
                this.data.endDate = this.pipDateTime.toStartDay(end);
                endTime = end.getTime() - this.data.endDate.getTime();
                this.data.endTime = Math.floor(endTime / (exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond)) * exports.IntervalTimeRange;
            }
            else {
                end = new Date(this.data.endDate.getTime() + this.data.endTime * exports.MinutesInHour * exports.MillisecondsInSecond);
                if (start >= end) {
                    this.data.endDate = this.pipDateTime.toStartDay(new Date(start.getTime() + (exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond)));
                    this.data.endTime = (this.data.startTime + exports.IntervalTimeRange) % (exports.HoursInDay * exports.MinutesInHour);
                }
            }
            this.data.startTime = Math.round(this.data.startTime / exports.IntervalTimeRange) * exports.IntervalTimeRange;
        };
        TimeRangeEditController.prototype.validateEndDate = function () {
            var date, start, end;
            if (!this.data.endDate) {
                this.data.endTime = null;
                return;
            }
            if (_.isUndefined(this.data.endTime) || _.isNull(this.data.endTime)) {
                if (!this.data.startTime) {
                    date = new Date();
                    date = date.getTime() - this.pipDateTime.toStartDay(date);
                    this.data.endTime = Math.floor(date / (exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond)) * exports.IntervalTimeRange;
                }
                else {
                    this.data.endTime = this.data.startTime === (exports.HoursInDay * exports.MinutesInHour - exports.IntervalTimeRange) ? (exports.HoursInDay * exports.MinutesInHour - exports.IntervalTimeRange) : this.data.startTime + exports.IntervalTimeRange;
                }
            }
            start = new Date(this.data.startDate.getTime() + this.data.startTime * exports.MinutesInHour * exports.MillisecondsInSecond);
            end = new Date(this.data.endDate.getTime() + this.data.endTime * exports.MinutesInHour * exports.MillisecondsInSecond);
            if (start >= end) {
                this.data.startDate = this.pipDateTime.toStartDay(new Date(end.getTime() - exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond));
                this.data.startTime = this.data.endTime % (exports.HoursInDay * exports.MinutesInHour) === 0 ? (exports.HoursInDay * exports.MinutesInHour - exports.IntervalTimeRange) : this.data.endTime - exports.IntervalTimeRange;
            }
            this.data.endTime = Math.round(this.data.endTime / exports.IntervalTimeRange) * exports.IntervalTimeRange;
            this.data.duration = this.setDuration();
        };
        TimeRangeEditController.prototype.setDate = function () {
            var time;
            if (!this.data)
                this.data = new TimeRangeEditData_1();
            this.data.bind = false;
            if (this.data.startDate) {
                time = this.data.startTime ? this.data.startTime * exports.MinutesInHour * exports.MillisecondsInSecond : 0;
                this.pipStartDate = new Date(this.data.startDate.getTime() + time);
            }
            if (this.data.endDate) {
                time = this.data.endTime ? this.data.endTime * exports.MinutesInHour * exports.MillisecondsInSecond : 0;
                this.pipEndDate = new Date(this.data.endDate.getTime() + time);
            }
            this.data.bind = true;
        };
        TimeRangeEditController.prototype.defineDate = function () {
            var start, end;
            if (this.pipStartDate !== null && this.pipStartDate !== undefined) {
                start = _.isDate(this.pipStartDate) ? this.pipStartDate : null;
                if (!start) {
                    start = this.getDateJSON(this.pipStartDate);
                }
                this.data.startDate = this.pipDateTime.toStartDay(start);
                this.data.startTime = (new Date(start) - this.data.startDate) / (exports.MinutesInHour * exports.MillisecondsInSecond);
            }
            if (this.pipEndDate !== null && this.pipEndDate !== undefined) {
                end = _.isDate(this.pipEndDate) ? this.pipEndDate : null;
                if (!start) {
                    end = this.getDateJSON(this.pipEndDate);
                }
                this.data.endDate = this.pipDateTime.toStartDay(end);
                this.data.endTime = (new Date(end) - this.data.endDate) / (exports.MinutesInHour * exports.MillisecondsInSecond);
            }
            this.validateStartDate();
            this.validateEndDate();
            this.data.duration = this.setDuration();
            this.setDate();
        };
        TimeRangeEditController.prototype.getTimeInterval = function () {
            var result, minutes;
            result = [];
            for (var i = 0; i < 24; i++) {
                for (var j = 0; j < 2; j++) {
                    minutes = j * exports.IntervalTimeRange;
                    result.push({
                        id: i * exports.MinutesInHour + minutes,
                        time: _.pad(i.toString(), 3, '0').substr(0, 2) + ':' + _.pad(minutes.toString(), 2, '0')
                    });
                }
            }
            return result;
        };
        TimeRangeEditController.prototype.toBoolean = function (value) {
            if (value == null)
                return false;
            if (!value)
                return false;
            value = value.toString().toLowerCase();
            return value == '1' || value == 'true';
        };
        TimeRangeEditController.prototype.initDate = function () {
            this.data.startDate = null;
            this.data.startTime = null;
            this.data.endDate = null;
            this.data.endTime = null;
            this.data.duration = null;
            this.showTime = !this.toBoolean(this.pipHideTime);
        };
        TimeRangeEditController.prototype.onChangeStartDate = function (newV) {
            this.validateStartDate();
            this.data.duration = this.setDuration();
            this.setDate();
            this.pipChanged(this.pipStartDate, this.pipEndDate);
        };
        ;
        TimeRangeEditController.prototype.onChangeEndDate = function () {
            this.validateEndDate();
            this.data.duration = this.setDuration();
            this.setDate();
            this.pipChanged(this.pipStartDate, this.pipEndDate);
        };
        ;
        TimeRangeEditController.prototype.onChangeStartTime = function () {
            if (!this.data.startDate) {
                this.data.startDate = this.pipDateTime.toStartDay(new Date());
            }
            this.validateStartDate();
            this.data.duration = this.setDuration();
            this.setDate();
            this.pipChanged(this.pipStartDate, this.pipEndDate);
        };
        ;
        TimeRangeEditController.prototype.onChangeEndTime = function () {
            if (!this.data.endDate) {
                this.data.endDate = this.pipDateTime.toStartDay(new Date());
            }
            this.validateEndDate();
            this.data.duration = this.setDuration();
            this.setDate();
            this.pipChanged(this.pipStartDate, this.pipEndDate);
        };
        ;
        TimeRangeEditController.prototype.isDisabled = function () {
            if (this.disabled) {
                return this.disabled();
            }
            return false;
        };
        ;
        return TimeRangeEditController;
    }());
    var TimeRangeEditComponent = {
        bindings: TimeRangeEditBindings,
        templateUrl: 'time_range_edit/TimeRangeEdit.html',
        controller: TimeRangeEditController
    };
    angular.module('pipTimeRangeEdit', [])
        .component('pipTimeRangeEdit', TimeRangeEditComponent);
}
},{}],11:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('date/Date.html',
    '<div class="pip-date layout-row flex" tabindex="-1"><md-input-container class="input-container flex"><md-select class="pip-date-day flex" ng-disabled="$ctrl.disableControls" ng-model="$ctrl.day" placeholder="{{$ctrl.dayLabel}}" ng-change="$ctrl.setValue()"><md-option ng-value="opt" ng-repeat="opt in $ctrl.days track by opt">{{:: opt }}</md-option></md-select></md-input-container><div class="input-container-separator flex-fixed"></div><md-input-container class="input-container flex"><md-select class="pip-date-monthflex" ng-disabled="$ctrl.disableControls" ng-model="$ctrl.month" placeholder="{{$ctrl.monthLabel}}" ng-change="$ctrl.onMonthChanged()"><md-option ng-value="opt.id" ng-repeat="opt in $ctrl.months track by opt.id">{{:: opt.name }}</md-option></md-select></md-input-container><div class="input-container-separator flex-fixed"></div><md-input-container class="input-container flex"><md-select class="pip-date-year flex" ng-disabled="$ctrl.disableControls" ng-model="$ctrl.year" placeholder="{{$ctrl.yearLabel}}" ng-change="$ctrl.onYearChanged()"><md-option ng-value="opt" ng-repeat="opt in $ctrl.years track by opt">{{:: opt }}</md-option></md-select></md-input-container></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('date_range/DateRange.html',
    '<div class="pip-date-range layout-row flex" tabindex="-1"><md-input-container ng-show="$ctrl.isDay()" class="input-container pip-day flex" ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}"><md-select class="select-day" ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}" ng-disable="{{$ctrl.disableControls}}" md-on-open="$ctrl.onDayClick()" ng-model="$ctrl.day" ng-change="$ctrl.setValue()" placeholder="{{$ctrl.dayLabel}}" aria-label="DAY"><md-option ng-value="opt" ng-repeat="opt in $ctrl.days track by opt">{{$ctrl.nameDays[$index]}} {{ opt }}</md-option></md-select></md-input-container><md-input-container ng-show="$ctrl.isWeek()" class="input-container flex" ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}"><md-select class="select-week" ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}" ng-disable="{{$ctrl.disableControls}}" ng-model="$ctrl.week" ng-change="$ctrl.onWeekChange()" placeholder="{{$ctrl.weekLabel}}" aria-label="WEEK"><md-option ng-value="opt.id" ng-repeat="opt in $ctrl.weeks track by opt.id">{{ opt.name }}</md-option></md-select></md-input-container><div class="flex-fixed" ng-class="{\'space16\': $ctrl.$mdMedia(\'gt-xs\'), \'space8\': $ctrl.$mdMedia(\'xs\')}" ng-show="$ctrl.isDay() || $ctrl.isWeek()"></div><md-input-container ng-show="$ctrl.isMonth() && !$ctrl.monthFormatShort" class="input-container flex" ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}"><md-select class="select-month" ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}" ng-disable="{{$ctrl.disableControls}}" md-on-open="$ctrl.onMonthClick()" ng-model="$ctrl.month" ng-change="$ctrl.onMonthChanged()" placeholder="{{$ctrl.monthLabel}}" aria-label="MONTH"><md-option ng-value="opt.id" ng-repeat="opt in $ctrl.months track by opt.id">{{ opt.name }}</md-option></md-select></md-input-container><md-input-container ng-show="$ctrl.isMonth() && $ctrl.monthFormatShort" class="flex input-container" ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}"><md-select class="select-month" ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}" ng-disable="{{$ctrl.disableControls}}" md-on-open="$ctrl.onMonthClick()" ng-model="$ctrl.month" ng-change="$ctrl.onMonthChanged()" placeholder="{{$ctrl.monthLabel}}" aria-label="MONTH"><md-option ng-value="opt.id" ng-repeat="opt in $ctrl.shortMonths track by opt.id">{{ opt.name }}</md-option></md-select></md-input-container><div class="flex-fixed" ng-class="{\'space16\': $ctrl.$mdMedia(\'gt-xs\'), \'space8\': $ctrl.$mdMedia(\'xs\')}" ng-show="$ctrl.isMonth()"></div><md-input-container class="input-container flex" ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}"><md-select class="select-year" ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}" ng-disable="{{$ctrl.disableControls}}" md-on-open="$ctrl.onYearClick()" ng-model="$ctrl.year" ng-change="$ctrl.onYearChanged()" placeholder="{{$ctrl.yearLabel}}" aria-label="YEAR"><md-option ng-value="opt" ng-repeat="opt in $ctrl.years track by opt">{{ opt }}</md-option></md-select></md-input-container></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('time_range/TimeRange.html',
    '<p><span ng-if="$ctrl.data.start != null">{{$ctrl.data.start | formatLongDateTime}}</span> <span class="separator" ng-if="$ctrl.data.start && $ctrl.data.end">-</span> <span ng-if="$ctrl.data.end != null">{{$ctrl.data.end | formatLongDateTime}}</span></p>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('time_range_edit/TimeRangeEdit.html',
    '<div class="event-edit layout-row layout-xs-column flex layout-align-start-start"><div flex="47" class="start-time-container"><p class="text-caption text-grey">{{$ctrl.startLabel}}</p><div class="layout-row layout-align-space-between-center"><div class="pip-datepicker-container" flex="49"><md-datepicker ng-model="$ctrl.data.startDate" xmd-placeholder="{{$ctrl.startLabel}}" ng-change="$ctrl.onChangeStartDate()" ng-disabled="$ctrl.isDisabled()" aria-label="START-DATE"></md-datepicker></div><div flex="" ng-if="$ctrl.showTime"><md-input-container class="input-container"><md-select aria-label="START-TIME" ng-model="$ctrl.data.startTime" ng-disabled="$ctrl.isDisabled()" ng-change="$ctrl.onChangeStartTime($ctrl.data.startTime)"><md-option ng-value="opt.id" ng-repeat="opt in $ctrl.intervalTimeCollection track by opt.id">{{ opt.time }}</md-option></md-select></md-input-container></div></div></div><div flex="47" class="end-time-container"><p class="text-caption text-grey">{{$ctrl.endLabel}}</p><div class="layout-row layout-align-space-between-center"><div class="pip-datepicker-container flex-49"><md-datepicker ng-model="$ctrl.data.endDate" xmd-placeholder="{{$ctrl.endLabel}}" ng-disabled="$ctrl.isDisabled()" ng-change="$ctrl.onChangeEndDate()" aria-label="END-DATE"></md-datepicker></div><div flex="" ng-if="$ctrl.showTime"><md-input-container class="input-container"><md-select aria-label="END-TIME" ng-model="$ctrl.data.endTime" ng-change="$ctrl.onChangeEndTime()" ng-disabled="$ctrl.isDisabled()"><md-option ng-value="opt.id" ng-repeat="opt in $ctrl.intervalTimeCollection track by opt.id">{{ opt.time }}</md-option></md-select></md-input-container></div></div></div></div>');
}]);
})();



},{}]},{},[11,2,3,4,5,6,1,7,8,10,9])(11)
});

//# sourceMappingURL=pip-webui-dates.js.map

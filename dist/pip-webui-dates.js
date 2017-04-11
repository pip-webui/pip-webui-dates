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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IDateConvertService_1 = require("./IDateConvertService");
(function () {
    var DateConvert = (function () {
        function DateConvert() {
            this._momentRanged = IDateConvertService_1.DateRangeType.All;
            this._defaultFormat = 'LL';
        }
        Object.defineProperty(DateConvert.prototype, "defaultTimeZoneOffset", {
            get: function () {
                return this._defaultTimeZoneOffset;
            },
            set: function (value) {
                this._defaultTimeZoneOffset = value;
            },
            enumerable: true,
            configurable: true
        });
        DateConvert.prototype.isUndefinedOrNull = function (date) {
            return angular.isUndefined(date) || date === null;
        };
        DateConvert.prototype.getRange = function (date) {
            if (this.isUndefinedOrNull(date)) {
                return IDateConvertService_1.DateRangeType.Day;
            }
            var index = this._momentRanged.indexOf(date);
            if (index < 0) {
                return IDateConvertService_1.DateRangeType.Day;
            }
            return this._momentRanged[index];
        };
        DateConvert.prototype.getOperationRange = function (date) {
            if (this.isUndefinedOrNull(date)) {
                return IDateConvertService_1.DateRangeType.Day;
            }
            var range = date == IDateConvertService_1.DateRangeType.WeekFromSunday ? IDateConvertService_1.DateRangeType.Week : date, index = this._momentRanged.indexOf(range);
            if (index < 0) {
                return IDateConvertService_1.DateRangeType.Day;
            }
            return this._momentRanged[index];
        };
        DateConvert.prototype.toStartRange = function (date, range) {
            var localDate;
            if (this.isUndefinedOrNull(date)) {
                throw new Error('toStartRange - date is undefined or null');
            }
            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null) {
                localDate = moment(date).utcOffset(this._defaultTimeZoneOffset);
            }
            else {
                localDate = moment(date);
            }
            if (!localDate.isValid()) {
                throw new Error('toStartRange - localDate is invalid');
            }
            return localDate.startOf(range).toDate();
        };
        DateConvert.prototype.toEndRange = function (date, range, offset) {
            var localDate, result, mssOffset;
            if (this.isUndefinedOrNull(date)) {
                return '';
            }
            if (!angular.isNumber(offset)) {
                mssOffset = 0;
            }
            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null) {
                localDate = moment(date).utcOffset(this._defaultTimeZoneOffset);
            }
            else {
                localDate = moment(date);
            }
            if (!localDate.isValid()) {
                return '';
            }
            if (mssOffset) {
                result = localDate.startOf(range).add(mssOffset, 'milliseconds');
            }
            else {
                result = localDate.startOf(range);
            }
            return localDate.startOf(range).toDate();
        };
        DateConvert.prototype.toJson = function (date) {
            return JSON.stringify(moment(date));
        };
        DateConvert.prototype.toNextRange = function (date, type) {
            var localDate, range, result;
            if (this.isUndefinedOrNull(date)) {
                return '';
            }
            localDate = moment(date);
            if (!localDate.isValid()) {
                return '';
            }
            range = this.getRange(type);
            result = moment(localDate).startOf(range).add(this.getOperationRange(range));
            return result.toDate();
        };
        DateConvert.prototype.toPrevRange = function (date, type) {
            var localDate, range, result;
            if (this.isUndefinedOrNull(date)) {
                throw new Error('toPrevRange- date is undefined or null');
            }
            localDate = moment(date);
            if (!localDate.isValid()) {
                throw new Error('toPrevRange - localDate is invalid');
            }
            range = this.getRange(type);
            result = moment(localDate).startOf(range).add(-1, this.getOperationRange(range));
            return result.toDate();
        };
        DateConvert.prototype.toCurrentRange = function (type) {
            var localDate, range, result;
            localDate = moment();
            if (!localDate.isValid()) {
                throw new Error('toCurrentRange - localDate is invalid');
            }
            range = this.getRange(type);
            result = moment(localDate).startOf(range);
            return result.toDate();
        };
        DateConvert.prototype.addHours = function (date, hours) {
            var localDate;
            if (this.isUndefinedOrNull(date) || !angular.isNumber(hours)) {
                throw new Error('addHours - date is undefined or null or hours is not a number');
            }
            localDate = moment(date);
            if (!localDate.isValid()) {
                throw new Error('addHours - localDate is invalid');
            }
            return localDate.add(hours, 'hours').toDate();
        };
        DateConvert.prototype.toStartDay = function (date) {
            return this.toStartRange(date, IDateConvertService_1.DateRangeType.Day);
        };
        DateConvert.prototype.toEndDay = function (date, offset) {
            return this.toEndRange(date, IDateConvertService_1.DateRangeType.Day, offset);
        };
        DateConvert.prototype.toStartWeek = function (date) {
            return this.toStartRange(date, IDateConvertService_1.DateRangeType.Week);
        };
        DateConvert.prototype.toEndWeek = function (date, offset) {
            return this.toEndRange(date, IDateConvertService_1.DateRangeType.Week, offset);
        };
        DateConvert.prototype.toStartMonth = function (date) {
            return this.toStartRange(date, IDateConvertService_1.DateRangeType.Month);
        };
        DateConvert.prototype.toEndMonth = function (date, offset) {
            return this.toEndRange(date, IDateConvertService_1.DateRangeType.Month, offset);
        };
        DateConvert.prototype.toStartYear = function (date) {
            return this.toStartRange(date, IDateConvertService_1.DateRangeType.Year);
        };
        DateConvert.prototype.toEndYear = function (date, offset) {
            return this.toEndRange(date, IDateConvertService_1.DateRangeType.Year, offset);
        };
        return DateConvert;
    }());
    var DateConvertService = (function () {
        function DateConvertService(convert) {
            this._convert = convert;
        }
        Object.defineProperty(DateConvertService.prototype, "defaultTimeZoneOffset", {
            get: function () {
                return this._convert.defaultTimeZoneOffset;
            },
            set: function (value) {
                this._convert.defaultTimeZoneOffset = value;
            },
            enumerable: true,
            configurable: true
        });
        DateConvertService.prototype.toJSON = function (date) {
            return this._convert.toJson(date);
        };
        DateConvertService.prototype.toNextRange = function (date, type) {
            return this._convert.toNextRange(date, type);
        };
        DateConvertService.prototype.toPrevRange = function (date, type) {
            return this._convert.toPrevRange(date, type);
        };
        DateConvertService.prototype.toCurrentRange = function (type) {
            return this._convert.toCurrentRange(type);
        };
        DateConvertService.prototype.addHours = function (date, hours) {
            return this._convert.addHours(date, hours);
        };
        DateConvertService.prototype.toStartDay = function (date) {
            return this._convert.toStartDay(date);
        };
        DateConvertService.prototype.toEndDay = function (date, offset) {
            return this._convert.toEndDay(date, offset);
        };
        DateConvertService.prototype.toStartWeek = function (date) {
            return this._convert.toStartWeek(date);
        };
        DateConvertService.prototype.toEndWeek = function (date, offset) {
            return this._convert.toEndWeek(date, offset);
        };
        DateConvertService.prototype.toStartMonth = function (date) {
            return this._convert.toStartMonth(date);
        };
        DateConvertService.prototype.toEndMonth = function (date, offset) {
            return this._convert.toEndMonth(date, offset);
        };
        DateConvertService.prototype.toStartYear = function (date) {
            return this._convert.toStartYear(date);
        };
        DateConvertService.prototype.toEndYear = function (date, offset) {
            return this._convert.toEndYear(date, offset);
        };
        return DateConvertService;
    }());
    var DateConvertProvider = (function (_super) {
        __extends(DateConvertProvider, _super);
        function DateConvertProvider() {
            return _super.apply(this, arguments) || this;
        }
        DateConvertProvider.prototype.$get = function () {
            "ngInject";
            if (this._service == null)
                this._service = new DateConvertService(this);
            return this._service;
        };
        return DateConvertProvider;
    }(DateConvert));
    angular
        .module('pipDate.Convert', [])
        .provider('pipDateConvert', DateConvertProvider);
})();
},{"./IDateConvertService":5}],3:[function(require,module,exports){
"use strict";
formatTimeFilter.$inject = ['pipDateFormat'];
formatDateOptionalFilter.$inject = ['pipDateFormat'];
formatLongDateFilter.$inject = ['pipDateFormat'];
formatShortDateFilter.$inject = ['pipDateFormat'];
formatMiddleDateFilter.$inject = ['pipDateFormat'];
formatMonthFilter.$inject = ['pipDateFormat'];
formatLongMonthFilter.$inject = ['pipDateFormat'];
formatYearFilter.$inject = ['pipDateFormat'];
formatWeekFilter.$inject = ['pipDateFormat'];
formatShortWeekFilter.$inject = ['pipDateFormat'];
formatShortDateTimeFilter.$inject = ['pipDateFormat'];
formatMiddleDateTimeFilter.$inject = ['pipDateFormat'];
formatLongDateTimeFilter.$inject = ['pipDateFormat'];
formatShortDateLongTimeFilter.$inject = ['pipDateFormat'];
formatMiddleDateLongTimeFilter.$inject = ['pipDateFormat'];
formatLongDateLongTimeFilter.$inject = ['pipDateFormat'];
bbFormatDateLongTimeFilter.$inject = ['pipDateFormat'];
formatFullDateTimeFilter.$inject = ['pipDateFormat'];
formatShortTimeFilter.$inject = ['pipDateFormat'];
formatLongTimeFilter.$inject = ['pipDateFormat'];
formatShortDayOfWeekFilter.$inject = ['pipDateFormat'];
formatLongDayOfWeekFilter.$inject = ['pipDateFormat'];
formatLongMonthDayFilter.$inject = ['pipDateFormat'];
formatShortMonthDayFilter.$inject = ['pipDateFormat'];
formatDateRangeFilter.$inject = ['pipDateFormat'];
formatDateTimeRangeFilter.$inject = ['pipDateFormat'];
formatISOWeekFilter.$inject = ['pipDateFormat'];
formatShortISOWeekFilter.$inject = ['pipDateFormat'];
formatISOWeekOrdinalFilter.$inject = ['pipDateFormat'];
formatDateYFilter.$inject = ['pipDateFormat'];
formatLongDateYFilter.$inject = ['pipDateFormat'];
formatTodayDateLongTimeLongFilter.$inject = ['pipDateFormat'];
formatTodayDateShortTimeLongFilter.$inject = ['pipDateFormat'];
formatTodayDateLongTimeShortFilter.$inject = ['pipDateFormat'];
formatTodayDateShortTimeShortFilter.$inject = ['pipDateFormat'];
formatMillisecondsToSecondsFilter.$inject = ['pipDateFormat'];
formatElapsedIntervalFilter.$inject = ['pipDateFormat'];
getDateJSONFilter.$inject = ['pipDateConvert'];
function formatTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value, format) {
        return pipDateFormat.formatTime(value, format);
    };
}
function formatDateOptionalFilter(pipDateFormat) {
    "ngInject";
    return function (value, format) {
        return pipDateFormat.formatDateOptional(value, format);
    };
}
function formatLongDateFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatLongDate(value);
    };
}
function formatShortDateFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatShortDate(value);
    };
}
function formatMiddleDateFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatMiddleDate(value);
    };
}
function formatMonthFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatMonth(value);
    };
}
function formatLongMonthFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatLongMonth(value);
    };
}
function formatYearFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatYear(value);
    };
}
function formatWeekFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatWeek(value);
    };
}
function formatShortWeekFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatShortWeek(value);
    };
}
function formatShortDateTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatShortDateTime(value);
    };
}
function formatMiddleDateTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatMiddleDateTime(value);
    };
}
function formatLongDateTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatLongDateTime(value);
    };
}
function formatShortDateLongTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value, firstTime) {
        return pipDateFormat.formatShortDateLongTime(value, firstTime);
    };
}
function formatMiddleDateLongTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value, firstTime) {
        return pipDateFormat.formatMiddleDateLongTime(value, firstTime);
    };
}
function formatLongDateLongTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value, firstTime) {
        return pipDateFormat.formatLongDateLongTime(value, firstTime);
    };
}
function bbFormatDateLongTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value, firstTime) {
        return pipDateFormat.bbFormatDateLongTime(value, firstTime);
    };
}
function formatFullDateTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatFullDateTime(value);
    };
}
function formatShortTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatShortTime(value);
    };
}
function formatLongTimeFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatLongTime(value);
    };
}
function formatShortDayOfWeekFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatShortDayOfWeek(value);
    };
}
function formatLongDayOfWeekFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatLongDayOfWeek(value);
    };
}
function formatLongMonthDayFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatLongMonthDay(value);
    };
}
function formatShortMonthDayFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatShortMonthDay(value);
    };
}
function formatDateRangeFilter(pipDateFormat) {
    "ngInject";
    return function (value1, value2) {
        return pipDateFormat.formatDateRange(value1, value2);
    };
}
function formatDateTimeRangeFilter(pipDateFormat) {
    "ngInject";
    return function (value1, value2) {
        return pipDateFormat.formatDateTimeRange(value1, value2);
    };
}
function formatISOWeekFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatISOWeek(value);
    };
}
function formatShortISOWeekFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatShortISOWeek(value);
    };
}
function formatISOWeekOrdinalFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatISOWeekOrdinal(value);
    };
}
function formatDateYFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatDateY(value);
    };
}
function formatLongDateYFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatLongDateY(value);
    };
}
function formatTodayDateLongTimeLongFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatTodayDateLongTimeLong(value);
    };
}
function formatTodayDateShortTimeLongFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatTodayDateShortTimeLong(value);
    };
}
function formatTodayDateLongTimeShortFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatTodayDateLongTimeShort(value);
    };
}
function formatTodayDateShortTimeShortFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatTodayDateShortTimeShort(value);
    };
}
function formatMillisecondsToSecondsFilter(pipDateFormat) {
    "ngInject";
    return function (value) {
        return pipDateFormat.formatMillisecondsToSeconds(value);
    };
}
function formatElapsedIntervalFilter(pipDateFormat) {
    "ngInject";
    return function (value, start) {
        return pipDateFormat.formatElapsedInterval(value, start);
    };
}
function getDateJSONFilter(pipDateConvert) {
    "ngInject";
    return function (value) {
        return pipDateConvert.toJson(value);
    };
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
    .filter('formatElapsedInterval', formatElapsedIntervalFilter);
},{}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IDateConvertService_1 = require("./IDateConvertService");
(function () {
    var DateFormat = (function () {
        function DateFormat() {
            this._momentRanged = IDateConvertService_1.DateRangeType.All;
            this._defaultFormat = 'LL';
        }
        Object.defineProperty(DateFormat.prototype, "defaultTimeZoneOffset", {
            get: function () {
                return this._defaultTimeZoneOffset;
            },
            set: function (value) {
                this._defaultTimeZoneOffset = value;
            },
            enumerable: true,
            configurable: true
        });
        DateFormat.prototype.isUndefinedOrNull = function (value) {
            return angular.isUndefined(value) || value === null;
        };
        DateFormat.prototype.formatDateTime = function (value, basicFormat) {
            var date;
            var formatTpl;
            if (this.isUndefinedOrNull(value))
                return '';
            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);
            if (!date.isValid())
                return '';
            formatTpl = basicFormat ? basicFormat : this._defaultFormat;
            return date.format(formatTpl);
        };
        DateFormat.prototype.formatDateTimeY = function (value, basicFormat) {
            var date;
            var nowDate;
            var formatMoment;
            if (this.isUndefinedOrNull(value))
                return '';
            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);
            if (!date.isValid())
                return '';
            nowDate = moment();
            formatMoment = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat);
            if (nowDate.year() == date.year())
                formatMoment = formatMoment.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');
            return date.format(formatMoment);
        };
        DateFormat.prototype.formatDay = function (value, basicFormat) {
            var date;
            var format = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat);
            var formatMonthYearless = format.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '').replace(/M/g, '');
            if (this.isUndefinedOrNull(value))
                return '';
            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);
            if (!date.isValid())
                return '';
            return date.format(formatMonthYearless);
        };
        DateFormat.prototype.formatMonthDay = function (value, basicFormat) {
            var date;
            var format = basicFormat ? basicFormat : this._defaultFormat;
            var formatLL = moment.localeData().longDateFormat(format);
            var formatYearlessLL = formatLL.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');
            if (this.isUndefinedOrNull(value))
                return '';
            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);
            if (!date.isValid())
                return '';
            return date.format(formatYearlessLL);
        };
        DateFormat.prototype.formatRange = function (value1, value2, basicFormat) {
            var dateStart;
            var dateEnd;
            var format = basicFormat ? basicFormat : this._defaultFormat;
            if (this.isUndefinedOrNull(value1))
                dateStart = null;
            else
                dateStart = (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                    ? moment(value1).utcOffset(this._defaultTimeZoneOffset) : moment(value1);
            if (this.isUndefinedOrNull(value2))
                dateEnd = null;
            else
                dateEnd = (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                    ? moment(value2).utcOffset(this._defaultTimeZoneOffset) : moment(value2);
            if (dateStart === null && dateEnd === null)
                return '';
            if (dateStart === null)
                return dateEnd.format(basicFormat);
            if (dateEnd === null || dateStart.isSame(dateEnd))
                return dateStart.format(basicFormat);
            ;
            if (dateStart.isAfter(dateEnd))
                throw new Error('Date range error. Start date is more than end date.');
            if (dateStart.year() == dateEnd.year()) {
                if (dateStart.month() == dateEnd.month())
                    return this.formatDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
                return this.formatMonthDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
            }
            return dateStart.format(basicFormat) + '-' + dateEnd.format(basicFormat);
        };
        DateFormat.prototype.toDateWithTime = function (value, formatDate, formatTime, firstTime) {
            var date;
            var result;
            var nowDate;
            if (this.isUndefinedOrNull(value))
                return '';
            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);
            if (!date.isValid())
                return '';
            nowDate = moment();
            if (firstTime)
                result = date.format(formatTime) + ' ' + date.format(formatDate);
            else
                result = date.format(formatDate) + ' ' + date.format(formatTime);
            return result;
        };
        DateFormat.prototype.toTodayDate = function (value, formatDate, formatTime) {
            var date;
            var result;
            var nowDate;
            if (this.isUndefinedOrNull(value))
                return '';
            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);
            if (!date.isValid())
                return '';
            nowDate = moment();
            if (nowDate.year() == date.year() && nowDate.month() == date.month() && nowDate.day() == date.day())
                result = date.format(formatTime);
            else
                result = date.format(formatDate) + ' ' + date.format(formatTime);
            return result;
        };
        DateFormat.prototype.formatTime = function (value, format) {
            return this.formatDateTime(value, 'LLL');
        };
        DateFormat.prototype.formatDateOptional = function (value, format) {
            return this.formatDateTime(value, 'L');
        };
        DateFormat.prototype.formatShortDate = function (value) {
            return this.formatDateTime(value, 'L');
        };
        DateFormat.prototype.bbFormatDateLongTime = function (value, firstTime) {
            return this.toDateWithTime(value, 'MM/DD/YY', 'LTS', firstTime);
        };
        DateFormat.prototype.formatMiddleDate = function (value) {
            return this.formatDateTime(value, 'll');
        };
        DateFormat.prototype.formatLongDate = function (value) {
            return this.formatDateTime(value, 'LL');
        };
        DateFormat.prototype.formatMonth = function (value) {
            return this.formatDateTime(value, 'MM');
        };
        DateFormat.prototype.formatLongMonth = function (value) {
            return this.formatDateTime(value, 'MMMM');
        };
        DateFormat.prototype.formatYear = function (value) {
            return this.formatDateTime(value, 'YYYY');
        };
        DateFormat.prototype.formatWeek = function (value) {
            return this.formatDateTime(value, 'ww');
        };
        DateFormat.prototype.formatShortWeek = function (value) {
            return this.formatDateTime(value, 'w');
        };
        DateFormat.prototype.formatShortDateTime = function (value) {
            return this.toDateWithTime(value, 'L', 'LT');
        };
        DateFormat.prototype.formatMiddleDateTime = function (value) {
            return this.formatDateTime(value, 'lll');
        };
        DateFormat.prototype.formatLongDateTime = function (value) {
            return this.formatDateTime(value, 'LLL');
        };
        DateFormat.prototype.formatFullDateTime = function (value) {
            return this.formatDateTime(value, 'LLLL');
        };
        DateFormat.prototype.formatShortDateLongTime = function (value, firstTime) {
            return this.toDateWithTime(value, 'L', 'LTS', firstTime);
        };
        DateFormat.prototype.formatMiddleDateLongTime = function (value, firstTime) {
            return this.toDateWithTime(value, 'll', 'LTS', firstTime);
        };
        DateFormat.prototype.formatLongDateLongTime = function (value, firstTime) {
            return this.toDateWithTime(value, 'LL', 'LTS', firstTime);
        };
        DateFormat.prototype.formatShortTime = function (value) {
            return this.formatDateTime(value, 'LT');
        };
        DateFormat.prototype.formatLongTime = function (value) {
            return this.formatDateTime(value, 'LTS');
        };
        DateFormat.prototype.formatShortDayOfWeek = function (value) {
            return this.formatDateTime(value, 'dd');
        };
        DateFormat.prototype.formatLongDayOfWeek = function (value) {
            return this.formatDateTime(value, 'dddd');
        };
        DateFormat.prototype.formatLongMonthDay = function (value) {
            return this.formatMonthDay(value, 'LL');
        };
        DateFormat.prototype.formatShortMonthDay = function (value) {
            return this.formatMonthDay(value, 'L');
        };
        DateFormat.prototype.formatDateRange = function (value1, value2) {
            return this.formatRange(value1, value2, 'LL');
        };
        DateFormat.prototype.formatDateTimeRange = function (value1, value2) {
            return this.formatRange(value1, value2, 'LLL');
        };
        DateFormat.prototype.formatISOWeek = function (value) {
            return this.formatDateTime(value, 'WW');
        };
        DateFormat.prototype.formatShortISOWeek = function (value) {
            return this.formatDateTime(value, 'W');
        };
        DateFormat.prototype.formatISOWeekOrdinal = function (value) {
            return this.formatDateTime(value, 'Wo');
        };
        DateFormat.prototype.formatDateY = function (value) {
            return this.formatDateTimeY(value, 'L');
        };
        DateFormat.prototype.formatLongDateY = function (value) {
            return this.formatDateTimeY(value, 'LL');
        };
        DateFormat.prototype.formatTodayDateLongTimeLong = function (value) {
            return this.toTodayDate(value, 'LL', 'LTS');
        };
        DateFormat.prototype.formatTodayDateShortTimeLong = function (value) {
            return this.toTodayDate(value, 'LL', 'LTS');
        };
        DateFormat.prototype.formatTodayDateLongTimeShort = function (value) {
            return this.toTodayDate(value, 'LL', 'LT');
        };
        DateFormat.prototype.formatTodayDateShortTimeShort = function (value) {
            return this.toTodayDate(value, 'll', 'LT');
        };
        DateFormat.prototype.formatMillisecondsToSeconds = function (value) {
            return '';
        };
        DateFormat.prototype.formatElapsedInterval = function (value, start) {
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
        DateFormat.prototype.getDateJSON = function (date) {
            return JSON.stringify(moment(date));
        };
        return DateFormat;
    }());
    var DateFormatService = (function () {
        function DateFormatService(_format) {
            this._format = _format;
        }
        Object.defineProperty(DateFormatService.prototype, "defaultTimeZoneOffset", {
            get: function () {
                return this._format.defaultTimeZoneOffset;
            },
            set: function (value) {
                this._format.defaultTimeZoneOffset = value;
            },
            enumerable: true,
            configurable: true
        });
        DateFormatService.prototype.formatTime = function (value, format) {
            return this._format.formatTime(value, format);
        };
        DateFormatService.prototype.formatDateOptional = function (value, format) {
            return this._format.formatDateOptional(value, format);
        };
        DateFormatService.prototype.formatShortDate = function (value) {
            return this._format.formatShortDate(value);
        };
        DateFormatService.prototype.formatMiddleDate = function (value) {
            return this._format.formatMiddleDate(value);
        };
        DateFormatService.prototype.formatLongDate = function (value) {
            return this._format.formatLongDate(value);
        };
        DateFormatService.prototype.formatMonth = function (value) {
            return this._format.formatMonth(value);
        };
        DateFormatService.prototype.formatLongMonth = function (value) {
            return this._format.formatLongMonth(value);
        };
        DateFormatService.prototype.formatYear = function (value) {
            return this._format.formatYear(value);
        };
        DateFormatService.prototype.formatWeek = function (value) {
            return this._format.formatWeek(value);
        };
        DateFormatService.prototype.formatShortWeek = function (value) {
            return this._format.formatShortWeek(value);
        };
        DateFormatService.prototype.formatShortDateTime = function (value) {
            return this._format.formatShortDateTime(value);
        };
        DateFormatService.prototype.formatMiddleDateTime = function (value) {
            return this._format.formatMiddleDateTime(value);
        };
        DateFormatService.prototype.formatLongDateTime = function (value) {
            return this._format.formatLongDateTime(value);
        };
        DateFormatService.prototype.formatFullDateTime = function (value) {
            return this._format.formatFullDateTime(value);
        };
        DateFormatService.prototype.formatShortDateLongTime = function (value, firstTime) {
            return this._format.formatShortDateLongTime(value, firstTime);
        };
        DateFormatService.prototype.formatMiddleDateLongTime = function (value, firstTime) {
            return this._format.formatMiddleDateLongTime(value, firstTime);
        };
        DateFormatService.prototype.formatLongDateLongTime = function (value, firstTime) {
            return this._format.formatLongDateLongTime(value, firstTime);
        };
        DateFormatService.prototype.bbFormatDateLongTime = function (value, firstTime) {
            return this._format.bbFormatDateLongTime(value, firstTime);
        };
        DateFormatService.prototype.formatShortTime = function (value) {
            return this._format.formatShortTime(value);
        };
        DateFormatService.prototype.formatLongTime = function (value) {
            return this._format.formatLongTime(value);
        };
        DateFormatService.prototype.formatShortDayOfWeek = function (value) {
            return this._format.formatShortDayOfWeek(value);
        };
        DateFormatService.prototype.formatLongDayOfWeek = function (value) {
            return this._format.formatLongDayOfWeek(value);
        };
        DateFormatService.prototype.formatLongMonthDay = function (value) {
            return this._format.formatLongMonthDay(value);
        };
        DateFormatService.prototype.formatShortMonthDay = function (value) {
            return this._format.formatShortMonthDay(value);
        };
        DateFormatService.prototype.formatDateRange = function (value1, value2) {
            return this._format.formatDateRange(value1, value2);
        };
        DateFormatService.prototype.formatDateTimeRange = function (value1, value2) {
            return this._format.formatDateTimeRange(value1, value2);
        };
        DateFormatService.prototype.formatISOWeek = function (value) {
            return this._format.formatISOWeek(value);
        };
        DateFormatService.prototype.formatShortISOWeek = function (value) {
            return this._format.formatShortISOWeek(value);
        };
        DateFormatService.prototype.formatISOWeekOrdinal = function (value) {
            return this._format.formatISOWeekOrdinal(value);
        };
        DateFormatService.prototype.formatDateY = function (value) {
            return this._format.formatDateY(value);
        };
        DateFormatService.prototype.formatLongDateY = function (value) {
            return this._format.formatLongDateY(value);
        };
        DateFormatService.prototype.formatTodayDateLongTimeLong = function (value) {
            return this._format.formatTodayDateLongTimeLong(value);
        };
        DateFormatService.prototype.formatTodayDateShortTimeLong = function (value) {
            return this._format.formatTodayDateShortTimeLong(value);
        };
        DateFormatService.prototype.formatTodayDateLongTimeShort = function (value) {
            return this._format.formatTodayDateLongTimeShort(value);
        };
        DateFormatService.prototype.formatTodayDateShortTimeShort = function (value) {
            return this._format.formatTodayDateShortTimeShort(value);
        };
        DateFormatService.prototype.formatMillisecondsToSeconds = function (value) {
            return this._format.formatMillisecondsToSeconds(value);
        };
        DateFormatService.prototype.formatElapsedInterval = function (value, start) {
            return this._format.formatElapsedInterval(value, start);
        };
        DateFormatService.prototype.getDateJSON = function (date) {
            return this._format.getDateJSON(date);
        };
        return DateFormatService;
    }());
    var DateFormatProvider = (function (_super) {
        __extends(DateFormatProvider, _super);
        function DateFormatProvider() {
            return _super.apply(this, arguments) || this;
        }
        DateFormatProvider.prototype.$get = function () {
            "ngInject";
            if (this._service == null)
                this._service = new DateFormatService(this);
            return this._service;
        };
        return DateFormatProvider;
    }(DateFormat));
    angular
        .module('pipDate.Format', [])
        .provider('pipDateFormat', DateFormatProvider);
})();
},{"./IDateConvertService":5}],5:[function(require,module,exports){
"use strict";
var DateRangeType = (function () {
    function DateRangeType() {
    }
    return DateRangeType;
}());
DateRangeType.Year = 'year';
DateRangeType.Month = 'month';
DateRangeType.Week = 'week';
DateRangeType.WeekFromSunday = 'isoweek';
DateRangeType.Day = 'day';
DateRangeType.All = ['year', 'month', 'week', 'isoweek', 'day'];
exports.DateRangeType = DateRangeType;
},{}],6:[function(require,module,exports){
"use strict";
},{}],7:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
angular.module('pipDate.Common', [
    'pipDate.Convert',
    'pipDate.Format',
    'pipDate.Filter'
]);
require("./DateConvertService");
require("./DateFormatFilter");
require("./DateFormatService");
require("./IDateConvertService");
require("./IDateFormatService");
__export(require("./IDateConvertService"));
},{"./DateConvertService":2,"./DateFormatFilter":3,"./DateFormatService":4,"./IDateConvertService":5,"./IDateFormatService":6}],8:[function(require,module,exports){
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
            var _this = this;
            this.$mdMedia = $mdMedia;
            this.$timeout = $timeout;
            this.prevState = {};
            this.currentState = {};
            this.localeDate = moment.localeData();
            this.momentMonths = angular.isArray(this.localeDate._months) ? this.localeDate._months : this.localeDate._months.standalone;
            this.momentDays = angular.isArray(this.localeDate._weekdays) ? this.localeDate._weekdays : this.localeDate._weekdays.format;
            this.momentShortDays = this.localeDate._weekdaysMin;
            this.momentFirstDayOfWeek = this.localeDate._week.dow;
            this.currentDate = new Date();
            this.currentYear = this.currentDate.getUTCFullYear();
            this.currentMonth = this.currentDate.getUTCMonth() + 1;
            this.currentDay = this.currentDate.getUTCDate();
            this.init();
            this.disableControls = this.disabled ? this.disabled() : false;
            $scope.$watch('$ctrl.type', function (newValue, oldValue) {
                if (newValue !== oldValue && oldValue) {
                    _this.init();
                }
            });
        }
        DateRangeController.prototype.$onChanges = function (changes) {
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
angular.module('pipDates', [
    'pipDate',
    'pipDate.Common',
    'pipTimeRange',
    'pipTimeRangeEdit',
    'pipDateRange',
    'pipDates.Translate'
]);
},{}],11:[function(require,module,exports){
(function () {
    var TimeRangeData = (function () {
        function TimeRangeData() {
        }
        return TimeRangeData;
    }());
    var TimeRangeBindings = {
        start: '<?pipStartDate',
        end: '<?pipEndDate'
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
},{}],12:[function(require,module,exports){
"use strict";
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
        function TimeRangeEditController($injector, pipDateConvert, $scope, $element) {
            this.$injector = $injector;
            this.pipDateConvert = pipDateConvert;
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
                    startTime = date.getTime() - this.pipDateConvert.toStartDay(date);
                    this.data.startTime = Math.floor(startTime / (exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond)) * exports.IntervalTimeRange;
                }
                else {
                    this.data.startTime = this.data.endTime === 0 ? 0 : this.data.endTime - exports.IntervalTimeRange;
                }
            }
            start = new Date(this.data.startDate.getTime() + this.data.startTime * exports.MinutesInHour * exports.MillisecondsInSecond);
            if (this.data.duration) {
                end = new Date(start.getTime() + this.data.duration);
                this.data.endDate = this.pipDateConvert.toStartDay(end);
                endTime = end.getTime() - this.data.endDate.getTime();
                this.data.endTime = Math.floor(endTime / (exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond)) * exports.IntervalTimeRange;
            }
            else {
                end = new Date(this.data.endDate.getTime() + this.data.endTime * exports.MinutesInHour * exports.MillisecondsInSecond);
                if (start >= end) {
                    this.data.endDate = this.pipDateConvert.toStartDay(new Date(start.getTime() + (exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond)));
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
                    date = date.getTime() - this.pipDateConvert.toStartDay(date);
                    this.data.endTime = Math.floor(date / (exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond)) * exports.IntervalTimeRange;
                }
                else {
                    this.data.endTime = this.data.startTime === (exports.HoursInDay * exports.MinutesInHour - exports.IntervalTimeRange) ? (exports.HoursInDay * exports.MinutesInHour - exports.IntervalTimeRange) : this.data.startTime + exports.IntervalTimeRange;
                }
            }
            start = new Date(this.data.startDate.getTime() + this.data.startTime * exports.MinutesInHour * exports.MillisecondsInSecond);
            end = new Date(this.data.endDate.getTime() + this.data.endTime * exports.MinutesInHour * exports.MillisecondsInSecond);
            if (start >= end) {
                this.data.startDate = this.pipDateConvert.toStartDay(new Date(end.getTime() - exports.IntervalTimeRange * exports.MinutesInHour * exports.MillisecondsInSecond));
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
                this.data.startDate = this.pipDateConvert.toStartDay(start);
                this.data.startTime = (new Date(start) - this.data.startDate) / (exports.MinutesInHour * exports.MillisecondsInSecond);
            }
            if (this.pipEndDate !== null && this.pipEndDate !== undefined) {
                end = _.isDate(this.pipEndDate) ? this.pipEndDate : null;
                if (!end) {
                    end = this.getDateJSON(this.pipEndDate);
                }
                this.data.endDate = this.pipDateConvert.toStartDay(end);
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
                this.data.startDate = this.pipDateConvert.toStartDay(new Date());
            }
            this.validateStartDate();
            this.data.duration = this.setDuration();
            this.setDate();
            this.pipChanged(this.pipStartDate, this.pipEndDate);
        };
        ;
        TimeRangeEditController.prototype.onChangeEndTime = function () {
            if (!this.data.endDate) {
                this.data.endDate = this.pipDateConvert.toStartDay(new Date());
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
},{}],13:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('date/Date.html',
    '<div class="pip-date layout-row flex" tabindex="-1">\n' +
    '	<md-input-container class="input-container flex">\n' +
    '		<md-select class="pip-date-day flex" ng-disabled="$ctrl.disableControls"\n' +
    '				   ng-model="$ctrl.day" placeholder="{{$ctrl.dayLabel}}" ng-change="$ctrl.setValue()">\n' +
    '			<md-option ng-value="opt" ng-repeat="opt in $ctrl.days track by opt">{{:: opt }}</md-option>\n' +
    '		</md-select>\n' +
    '	</md-input-container>\n' +
    '	<div class="input-container-separator flex-fixed"></div>\n' +
    '	<md-input-container class="input-container flex">\n' +
    '		<md-select class="pip-date-monthflex" ng-disabled="$ctrl.disableControls"\n' +
    '				   ng-model="$ctrl.month" placeholder="{{$ctrl.monthLabel}}" ng-change="$ctrl.onMonthChanged()">\n' +
    '			<md-option ng-value="opt.id" ng-repeat="opt in $ctrl.months track by opt.id">{{:: opt.name }}</md-option>\n' +
    '		</md-select>\n' +
    '	</md-input-container>\n' +
    '	<div class="input-container-separator flex-fixed"></div>\n' +
    '	<md-input-container class="input-container flex">\n' +
    '		<md-select class="pip-date-year flex" ng-disabled="$ctrl.disableControls"\n' +
    '				   ng-model="$ctrl.year" placeholder="{{$ctrl.yearLabel}}" ng-change="$ctrl.onYearChanged()">\n' +
    '			<md-option ng-value="opt" ng-repeat="opt in $ctrl.years track by opt">{{:: opt }}</md-option>\n' +
    '		</md-select>\n' +
    '	</md-input-container>\n' +
    '</div>\n' +
    '					');
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
    '<div class="pip-date-range layout-row flex" tabindex="-1">\n' +
    '    <md-input-container ng-show="$ctrl.isDay()" class="input-container pip-day flex"\n' +
    '            ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}">\n' +
    '        <md-select class="select-day"\n' +
    '                   ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}"\n' +
    '                   ng-disable="{{$ctrl.disableControls}}"\n' +
    '                   md-on-open="$ctrl.onDayClick()"\n' +
    '                   ng-model="$ctrl.day"\n' +
    '                   ng-change="$ctrl.setValue()"\n' +
    '                   placeholder="{{$ctrl.dayLabel}}"\n' +
    '                   aria-label="DAY">\n' +
    '\n' +
    '            <md-option ng-value="opt" ng-repeat="opt in $ctrl.days track by opt ">\n' +
    '               {{$ctrl.nameDays[$index]}} {{ opt }}\n' +
    '            </md-option>\n' +
    '        </md-select>\n' +
    '    </md-input-container>\n' +
    '    <md-input-container ng-show="$ctrl.isWeek()" class="input-container flex"\n' +
    '                        ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}">\n' +
    '        <md-select class="select-week"\n' +
    '                   ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}"\n' +
    '                   ng-disable="{{$ctrl.disableControls}}"\n' +
    '                   ng-model="$ctrl.week"\n' +
    '                   ng-change="$ctrl.onWeekChange()"\n' +
    '                   placeholder="{{$ctrl.weekLabel}}"\n' +
    '                   aria-label="WEEK">\n' +
    '\n' +
    '            <md-option ng-value="opt.id" ng-repeat="opt in $ctrl.weeks track by opt.id">\n' +
    '                {{ opt.name }}\n' +
    '            </md-option>\n' +
    '        </md-select>\n' +
    '    </md-input-container >\n' +
    '    <div class="flex-fixed"\n' +
    '         ng-class="{\'space16\': $ctrl.$mdMedia(\'gt-xs\'), \'space8\':  $ctrl.$mdMedia(\'xs\')}"\n' +
    '         ng-show="$ctrl.isDay() || $ctrl.isWeek()">\n' +
    '    </div>\n' +
    '    <md-input-container ng-show="$ctrl.isMonth() && !$ctrl.monthFormatShort " class="input-container flex"\n' +
    '                        ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}">\n' +
    '        <md-select class="select-month"\n' +
    '                   ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}"\n' +
    '                   ng-disable="{{$ctrl.disableControls}}"\n' +
    '                   md-on-open="$ctrl.onMonthClick()"\n' +
    '                   ng-model="$ctrl.month"\n' +
    '                   ng-change="$ctrl.onMonthChanged()"\n' +
    '                   placeholder="{{$ctrl.monthLabel}}"\n' +
    '                   aria-label="MONTH">\n' +
    '\n' +
    '            <md-option ng-value="opt.id" ng-repeat="opt in $ctrl.months track by opt.id">\n' +
    '                {{ opt.name }}\n' +
    '            </md-option>\n' +
    '        </md-select>\n' +
    '    </md-input-container>\n' +
    '    <md-input-container ng-show="$ctrl.isMonth() && $ctrl.monthFormatShort" class="flex input-container"\n' +
    '                        ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}">\n' +
    '        <md-select class="select-month"\n' +
    '                   ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}"\n' +
    '                   ng-disable="{{$ctrl.disableControls}}"\n' +
    '                   md-on-open="$ctrl.onMonthClick()"\n' +
    '                   ng-model="$ctrl.month"\n' +
    '                   ng-change="$ctrl.onMonthChanged()"\n' +
    '                   placeholder="{{$ctrl.monthLabel}}"\n' +
    '                   aria-label="MONTH">\n' +
    '\n' +
    '            <md-option ng-value="opt.id" ng-repeat="opt in $ctrl.shortMonths track by opt.id">\n' +
    '                {{ opt.name }}\n' +
    '            </md-option>\n' +
    '        </md-select>\n' +
    '    </md-input-container>\n' +
    '    <div class="flex-fixed"\n' +
    '         ng-class="{\'space16\': $ctrl.$mdMedia(\'gt-xs\'), \'space8\':  $ctrl.$mdMedia(\'xs\')}"\n' +
    '         ng-show="$ctrl.isMonth()">\n' +
    '    </div>\n' +
    '    <md-input-container class="input-container flex"\n' +
    '                        ng-class="{\'flex-fixed\' : $ctrl.$mdMedia(\'gt-xs\')}">\n' +
    '        <md-select class="select-year"\n' +
    '                   ng-class="{\'pip-no-line\' : $ctrl.pipNoLine}"\n' +
    '                   ng-disable="{{$ctrl.disableControls}}"\n' +
    '                   md-on-open="$ctrl.onYearClick()"\n' +
    '                   ng-model="$ctrl.year"\n' +
    '                   ng-change="$ctrl.onYearChanged()"\n' +
    '                   placeholder="{{$ctrl.yearLabel}}"\n' +
    '                   aria-label="YEAR">\n' +
    '\n' +
    '            <md-option ng-value="opt" ng-repeat="opt in $ctrl.years track by opt">\n' +
    '                {{ opt }}\n' +
    '            </md-option>\n' +
    '        </md-select>\n' +
    '    </md-input-container>\n' +
    '</div>');
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
    '<p>\n' +
    '    <span ng-if="$ctrl.data.start != null">{{$ctrl.data.start | formatLongDateTime}}</span>\n' +
    '    <span  class="separator" ng-if="$ctrl.data.start && $ctrl.data.end"> - </span>\n' +
    '    <span ng-if="$ctrl.data.end != null">{{$ctrl.data.end | formatLongDateTime}}</span>\n' +
    '</p>');
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
    '<div class="event-edit layout-row layout-xs-column flex layout-align-start-start">\n' +
    '    <div flex="47" class="start-time-container ">\n' +
    '        <p class="text-caption text-grey">{{$ctrl.startLabel}}</p>\n' +
    '\n' +
    '        <div class="layout-row layout-align-space-between-center">\n' +
    '            <div class="pip-datepicker-container" flex="49">\n' +
    '                <md-datepicker ng-model="$ctrl.data.startDate"\n' +
    '                               xmd-placeholder="{{$ctrl.startLabel}}"\n' +
    '                               ng-change="$ctrl.onChangeStartDate()"\n' +
    '                               ng-disabled="$ctrl.isDisabled()"\n' +
    '                               aria-label="START-DATE">\n' +
    '                </md-datepicker>\n' +
    '            </div>\n' +
    '            <div flex ng-if="$ctrl.showTime">\n' +
    '                <md-input-container class="input-container">\n' +
    '                    <md-select aria-label="START-TIME" ng-model="$ctrl.data.startTime" ng-disabled="$ctrl.isDisabled()"\n' +
    '                               ng-change="$ctrl.onChangeStartTime($ctrl.data.startTime)">\n' +
    '                        <md-option ng-value="opt.id" ng-repeat="opt in $ctrl.intervalTimeCollection track by opt.id">{{ opt.time }}\n' +
    '                        </md-option>\n' +
    '                    </md-select>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div flex="47" class="end-time-container">\n' +
    '        <p class="text-caption text-grey">{{$ctrl.endLabel}}</p>\n' +
    '\n' +
    '        <div class="layout-row layout-align-space-between-center">\n' +
    '            <div class="pip-datepicker-container flex-49">\n' +
    '                <md-datepicker ng-model="$ctrl.data.endDate"\n' +
    '                               xmd-placeholder="{{$ctrl.endLabel}}"\n' +
    '                               ng-disabled="$ctrl.isDisabled()"\n' +
    '                               ng-change="$ctrl.onChangeEndDate()"\n' +
    '                               aria-label="END-DATE">\n' +
    '                </md-datepicker>\n' +
    '            </div>\n' +
    '            <div flex ng-if="$ctrl.showTime">\n' +
    '                <md-input-container class="input-container">\n' +
    '                    <md-select aria-label="END-TIME" ng-model="$ctrl.data.endTime" ng-change="$ctrl.onChangeEndTime()"\n' +
    '                               ng-disabled="$ctrl.isDisabled()">\n' +
    '                        <md-option ng-value="opt.id" ng-repeat="opt in $ctrl.intervalTimeCollection track by opt.id">\n' +
    '                            {{ opt.time }}\n' +
    '                        </md-option>\n' +
    '                    </md-select>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();



},{}]},{},[13,2,3,4,5,6,7,8,1,9,10,12,11])(13)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0ZS9EYXRlLnRzIiwic3JjL2RhdGVfZm9ybWF0L0RhdGVDb252ZXJ0U2VydmljZS50cyIsInNyYy9kYXRlX2Zvcm1hdC9EYXRlRm9ybWF0RmlsdGVyLnRzIiwic3JjL2RhdGVfZm9ybWF0L0RhdGVGb3JtYXRTZXJ2aWNlLnRzIiwic3JjL2RhdGVfZm9ybWF0L0lEYXRlQ29udmVydFNlcnZpY2UudHMiLCJzcmMvZGF0ZV9mb3JtYXQvaW5kZXgudHMiLCJzcmMvZGF0ZV9yYW5nZS9EYXRlUmFuZ2UudHMiLCJzcmMvZGVwZW5kZW5jaWVzL1RyYW5zbGF0ZUZpbHRlci50cyIsInNyYy9pbmRleC50cyIsInNyYy90aW1lX3JhbmdlL1RpbWVSYW5nZS50cyIsInNyYy90aW1lX3JhbmdlX2VkaXQvVGltZVJhbmdlRWRpdC50cyIsInRlbXAvcGlwLXdlYnVpLWRhdGVzLWh0bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxDQUFDO0lBVUcsSUFBTSxZQUFZLEdBQWtCO1FBQ2hDLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFFBQVEsRUFBRSxHQUFHO0tBQ2hCLENBQUE7SUFFRDtRQUFBO1FBT0EsQ0FBQztRQUFELGtCQUFDO0lBQUQsQ0FQQSxBQU9DLElBQUE7SUFHRDtRQXNCSSx3QkFDSSxTQUF3QyxFQUN4QyxNQUFpQjtZQXRCYixlQUFVLEdBQThCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQXVCaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbigoKSA9PiB7XHJcbiAgICBpbnRlcmZhY2UgSURhdGVCaW5kaW5ncyB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICAgICAgICB0aW1lTW9kZTogYW55LFxyXG4gICAgICAgIGRpc2FibGVkOiBhbnksXHJcbiAgICAgICAgbW9kZWw6IGFueSxcclxuICAgICAgICBuZ0NoYW5nZTogYW55XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGF0ZUJpbmRpbmdzOiBJRGF0ZUJpbmRpbmdzID0ge1xyXG4gICAgICAgIHRpbWVNb2RlOiAnQHBpcFRpbWVNb2RlJyxcclxuICAgICAgICBkaXNhYmxlZDogJyZuZ0Rpc2FibGVkJyxcclxuICAgICAgICBtb2RlbDogJzxuZ01vZGVsJyxcclxuICAgICAgICBuZ0NoYW5nZTogJzwnXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgRGF0ZUNoYW5nZXMgaW1wbGVtZW50cyBuZy5JT25DaGFuZ2VzT2JqZWN0LCBJRGF0ZUJpbmRpbmdzIHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBuZy5JQ2hhbmdlc09iamVjdDxhbnk+O1xyXG5cclxuICAgICAgICB0aW1lTW9kZTogbmcuSUNoYW5nZXNPYmplY3Q8c3RyaW5nPjtcclxuICAgICAgICBkaXNhYmxlZDogbmcuSUNoYW5nZXNPYmplY3Q8KCkgPT4gYm9vbGVhbj47XHJcbiAgICAgICAgbW9kZWw6IG5nLklDaGFuZ2VzT2JqZWN0PERhdGU+O1xyXG4gICAgICAgIG5nQ2hhbmdlOiBuZy5JQ2hhbmdlc09iamVjdDwoZGF0ZTogRGF0ZSkgPT4gdm9pZD47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsYXNzIERhdGVDb250cm9sbGVyIHtcclxuICAgICAgICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhbGVEYXRlOiBtb21lbnQuTW9tZW50TGFuZ3VhZ2VEYXRhID0gbW9tZW50LmxvY2FsZURhdGEoKTtcclxuICAgICAgICBwcml2YXRlIG1vbWVudE1vbnRoczogYW55W107XHJcbiAgICAgICAgcHJpdmF0ZSBtb21lbnREYXlzOiBhbnlbXTtcclxuICAgICAgICBwcml2YXRlIG1vbWVudFNob3J0RGF5czogYW55O1xyXG4gICAgICAgIHByaXZhdGUgbW9tZW50Rmlyc3REYXlPZldlZWs6IGFueTtcclxuXHJcbiAgICAgICAgcHVibGljIHRpbWVNb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGRheTogbnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBtb250aDogbnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyB5ZWFyOiBudW1iZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBtb2RlbDogRGF0ZTtcclxuICAgICAgICBwdWJsaWMgbmdDaGFuZ2U6IChkYXRlOiBEYXRlKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgZGF5czogbnVtYmVyW107XHJcbiAgICAgICAgcHVibGljIG1vbnRoczogYW55W107XHJcbiAgICAgICAgcHVibGljIHllYXJzOiBudW1iZXJbXTtcclxuICAgICAgICBwdWJsaWMgZGlzYWJsZWQ6ICgpID0+IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGRpc2FibGVDb250cm9sczogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICRpbmplY3RvcjogYW5ndWxhci5hdXRvLklJbmplY3RvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICRzY29wZTogbmcuSVNjb3BlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9tZW50TW9udGhzID0gYW5ndWxhci5pc0FycmF5KHRoaXMubG9jYWxlRGF0ZVsnX21vbnRocyddKSA/IHRoaXMubG9jYWxlRGF0ZVsnX21vbnRocyddIDogdGhpcy5sb2NhbGVEYXRlWydfbW9udGhzJ10uZm9ybWF0O1xyXG4gICAgICAgICAgICB0aGlzLm1vbWVudERheXMgPSBhbmd1bGFyLmlzQXJyYXkodGhpcy5sb2NhbGVEYXRlWydfd2Vla2RheXMnXSkgPyB0aGlzLmxvY2FsZURhdGVbJ193ZWVrZGF5cyddIDogdGhpcy5sb2NhbGVEYXRlWydfd2Vla2RheXMnXS5mb3JtYXQ7XHJcbiAgICAgICAgICAgIHRoaXMubW9tZW50U2hvcnREYXlzID0gdGhpcy5sb2NhbGVEYXRlWydfd2Vla2RheXNNaW4nXTtcclxuICAgICAgICAgICAgdGhpcy5tb21lbnRGaXJzdERheU9mV2VlayA9IHRoaXMubG9jYWxlRGF0ZVsnX3dlZWsnXS5kb3c7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLm1vZGVsID8gXy5pc0RhdGUodGhpcy5tb2RlbCkgPyB0aGlzLm1vZGVsIDogbmV3IERhdGUodGhpcy5tb2RlbCkgOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmRheSA9IHZhbHVlID8gdmFsdWUuZ2V0RGF0ZSgpIDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tb250aCA9IHZhbHVlID8gdmFsdWUuZ2V0TW9udGgoKSArIDEgOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnllYXIgPSB2YWx1ZSA/IHZhbHVlLmdldEZ1bGxZZWFyKCkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5kYXlMaXN0KHRoaXMubW9udGgsIHRoaXMueWVhcik7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGhzID0gdGhpcy5tb250aExpc3QoKTtcclxuICAgICAgICAgICAgdGhpcy55ZWFycyA9IHRoaXMueWVhckxpc3QoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUNvbnRyb2xzID0gdGhpcy5kaXNhYmxlZCA/IHRoaXMuZGlzYWJsZWQoKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyAkb25DaGFuZ2VzKGNoYW5nZXM6IERhdGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLm1vZGVsICYmIGNoYW5nZXMubW9kZWwuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gY2hhbmdlcy5tb2RlbC5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFZhbHVlKHRoaXMubW9kZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGRheUxpc3QobW9udGg6IG51bWJlciwgeWVhcjogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDMxLCBkYXlzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vbnRoID09PSA0IHx8IG1vbnRoID09PSA2IHx8IG1vbnRoID09PSA5IHx8IG1vbnRoID09PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAzMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBsZWFwIHllYXIgKHByaW1pdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSB5ZWFyICUgNCA9PT0gMCA/IDI5IDogMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSAyODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtb250aExpc3QoKSB7XHJcbiAgICAgICAgICAgIGxldCBtb250aHM6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG1vbnRocy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm1vbWVudE1vbnRoc1tpIC0gMV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbW9udGhzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB5ZWFyTGlzdCgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50WWVhcjogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRZZWFyOiBudW1iZXIgPSB0aGlzLnRpbWVNb2RlID09PSAnZnV0dXJlJyA/IGN1cnJlbnRZZWFyIDogY3VycmVudFllYXIgLSAxMDAsXHJcbiAgICAgICAgICAgICAgICBlbmRZZWFyOiBudW1iZXIgPSB0aGlzLnRpbWVNb2RlID09PSAncGFzdCcgPyBjdXJyZW50WWVhciA6IGN1cnJlbnRZZWFyICsgMTAwLFxyXG4gICAgICAgICAgICAgICAgeWVhcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVNb2RlID09PSAncGFzdCcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGVuZFllYXI7IGkgPj0gc3RhcnRZZWFyOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFycy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gc3RhcnRZZWFyOyBpIDw9IGVuZFllYXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB5ZWFycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYWRqdXN0RGF5KCkge1xyXG4gICAgICAgICAgICBsZXQgZGF5cyA9IHRoaXMuZGF5TGlzdCh0aGlzLm1vbnRoLCB0aGlzLnllYXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF5cy5sZW5ndGggIT09IGRheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXkgPiBkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF5ID0gZGF5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gZGF5cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRWYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBEYXRlID0gdiA/IF8uaXNEYXRlKHYpID8gdiA6IG5ldyBEYXRlKHYpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGRheTogbnVtYmVyID0gdmFsdWUgPyB2YWx1ZS5nZXREYXRlKCkgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IG51bWJlciA9IHZhbHVlID8gdmFsdWUuZ2V0TW9udGgoKSArIDEgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgeWVhcjogbnVtYmVyID0gdmFsdWUgPyB2YWx1ZS5nZXRGdWxsWWVhcigpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXkgbGlzdCBpZiBtb250aCBhbmQgeWVhciB3ZXJlIGNoYW5nZWRcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9udGggIT09IG1vbnRoICYmIHRoaXMueWVhciAhPT0geWVhcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5kYXlMaXN0KHRoaXMubW9udGgsIHRoaXMueWVhcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgdG8gc2NvcGVcclxuICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXk7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBtb250aDtcclxuICAgICAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBEYXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF5ICYmIHRoaXMubW9udGggJiYgdGhpcy55ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCAtIDEsIHRoaXMuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdDaGFuZ2UodGhpcy5tb2RlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvbk1vbnRoQ2hhbmdlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGp1c3REYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uWWVhckNoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0RGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGF0ZUNvbXBvbmVudDogbmcuSUNvbXBvbmVudE9wdGlvbnMgPSB7XHJcbiAgICAgICAgYmluZGluZ3M6IERhdGVCaW5kaW5ncyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2RhdGUvRGF0ZS5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBEYXRlQ29udHJvbGxlclxyXG4gICAgfVxyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdwaXBEYXRlJywgWydwaXBEYXRlcy5UZW1wbGF0ZXMnXSlcclxuICAgICAgICAuY29tcG9uZW50KCdwaXBEYXRlJywgRGF0ZUNvbXBvbmVudClcclxufSkoKTtcclxuXHJcbiIsImltcG9ydCB7IERhdGVSYW5nZVR5cGUsIElEYXRlQ29udmVydFNlcnZpY2UsIElEYXRlQ29udmVydFByb3ZpZGVyIH0gZnJvbSAnLi9JRGF0ZUNvbnZlcnRTZXJ2aWNlJztcclxuXHJcbigoKSA9PiB7XHJcbiAgICBjbGFzcyBEYXRlQ29udmVydCBpbXBsZW1lbnRzIElEYXRlQ29udmVydFNlcnZpY2Uge1xyXG4gICAgICAgIHByb3RlY3RlZCBfbW9tZW50UmFuZ2VkOiBzdHJpbmdbXSA9IERhdGVSYW5nZVR5cGUuQWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfZGVmYXVsdEZvcm1hdDogc3RyaW5nID0gJ0xMJztcclxuICAgICAgICBwcml2YXRlIF9kZWZhdWx0VGltZVpvbmVPZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgcHVibGljIGdldCBkZWZhdWx0VGltZVpvbmVPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgZGVmYXVsdFRpbWVab25lT2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGlzVW5kZWZpbmVkT3JOdWxsKGRhdGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhci5pc1VuZGVmaW5lZChkYXRlKSB8fCBkYXRlID09PSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRSYW5nZShkYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbChkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVSYW5nZVR5cGUuRGF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9tb21lbnRSYW5nZWQuaW5kZXhPZihkYXRlKVxyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVSYW5nZVR5cGUuRGF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9tZW50UmFuZ2VkW2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0T3BlcmF0aW9uUmFuZ2UoZGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlUmFuZ2VUeXBlLkRheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJhbmdlOiBzdHJpbmcgPSBkYXRlID09IERhdGVSYW5nZVR5cGUuV2Vla0Zyb21TdW5kYXkgPyBEYXRlUmFuZ2VUeXBlLldlZWsgOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLl9tb21lbnRSYW5nZWQuaW5kZXhPZihyYW5nZSlcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlUmFuZ2VUeXBlLkRheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbWVudFJhbmdlZFtpbmRleF07XHJcblxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwcml2YXRlIHRvU3RhcnRSYW5nZShkYXRlOiBhbnksIHJhbmdlOiBzdHJpbmcpOiBEYXRlIHtcclxuICAgICAgICAgICAgbGV0IGxvY2FsRGF0ZTogbW9tZW50Lk1vbWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvU3RhcnRSYW5nZSAtIGRhdGUgaXMgdW5kZWZpbmVkIG9yIG51bGwnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCAhPSB1bmRlZmluZWQgJiYgdGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsRGF0ZSA9IG1vbWVudChkYXRlKS51dGNPZmZzZXQodGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsRGF0ZSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2NhbERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvU3RhcnRSYW5nZSAtIGxvY2FsRGF0ZSBpcyBpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhbERhdGUuc3RhcnRPZihyYW5nZSkudG9EYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRvRW5kUmFuZ2UoZGF0ZTogYW55LCByYW5nZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbERhdGU6IGFueSxcclxuICAgICAgICAgICAgICAgIHJlc3VsdDogYW55LFxyXG4gICAgICAgICAgICAgICAgbXNzT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbChkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNOdW1iZXIob2Zmc2V0KSkge1xyXG4gICAgICAgICAgICAgICAgbXNzT2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCAhPSB1bmRlZmluZWQgJiYgdGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsRGF0ZSA9IG1vbWVudChkYXRlKS51dGNPZmZzZXQodGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsRGF0ZSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2NhbERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtc3NPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsRGF0ZS5zdGFydE9mKHJhbmdlKS5hZGQobXNzT2Zmc2V0LCAnbWlsbGlzZWNvbmRzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsb2NhbERhdGUuc3RhcnRPZihyYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhbERhdGUuc3RhcnRPZihyYW5nZSkudG9EYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdG9Kc29uKGRhdGU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb21lbnQoZGF0ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbmF2aWdhdGlvbiBmdW5jdGlvbnMgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHB1YmxpYyB0b05leHRSYW5nZShkYXRlOiBhbnksIHR5cGU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbERhdGU6IG1vbWVudC5Nb21lbnQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBhbnk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbChkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsb2NhbERhdGUgPSBtb21lbnQoZGF0ZSk7XHJcbiAgICAgICAgICAgIGlmICghbG9jYWxEYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByYW5nZSA9IHRoaXMuZ2V0UmFuZ2UodHlwZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG1vbWVudChsb2NhbERhdGUpLnN0YXJ0T2YocmFuZ2UpLmFkZCh0aGlzLmdldE9wZXJhdGlvblJhbmdlKHJhbmdlKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRvRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvUHJldlJhbmdlKGRhdGU6IGFueSwgdHlwZTogc3RyaW5nKTogRGF0ZSB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbERhdGU6IG1vbWVudC5Nb21lbnQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBtb21lbnQuTW9tZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndG9QcmV2UmFuZ2UtIGRhdGUgaXMgdW5kZWZpbmVkIG9yIG51bGwnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbG9jYWxEYXRlID0gbW9tZW50KGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAoIWxvY2FsRGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndG9QcmV2UmFuZ2UgLSBsb2NhbERhdGUgaXMgaW52YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByYW5nZSA9IHRoaXMuZ2V0UmFuZ2UodHlwZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG1vbWVudChsb2NhbERhdGUpLnN0YXJ0T2YocmFuZ2UpLmFkZCgtMSwgdGhpcy5nZXRPcGVyYXRpb25SYW5nZShyYW5nZSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50b0RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b0N1cnJlbnRSYW5nZSh0eXBlOiBzdHJpbmcpOiBEYXRlIHtcclxuICAgICAgICAgICAgbGV0IGxvY2FsRGF0ZTogbW9tZW50Lk1vbWVudCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6IG1vbWVudC5Nb21lbnQ7XHJcblxyXG4gICAgICAgICAgICBsb2NhbERhdGUgPSBtb21lbnQoKTtcclxuICAgICAgICAgICAgaWYgKCFsb2NhbERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvQ3VycmVudFJhbmdlIC0gbG9jYWxEYXRlIGlzIGludmFsaWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmFuZ2UgPSB0aGlzLmdldFJhbmdlKHR5cGUpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG1vbWVudChsb2NhbERhdGUpLnN0YXJ0T2YocmFuZ2UpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50b0RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhZGRIb3VycyhkYXRlOiBhbnksIGhvdXJzOiBudW1iZXIpOiBEYXRlIHtcclxuICAgICAgICAgICAgbGV0IGxvY2FsRGF0ZTogbW9tZW50Lk1vbWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKGRhdGUpIHx8ICFhbmd1bGFyLmlzTnVtYmVyKGhvdXJzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZGRIb3VycyAtIGRhdGUgaXMgdW5kZWZpbmVkIG9yIG51bGwgb3IgaG91cnMgaXMgbm90IGEgbnVtYmVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxvY2FsRGF0ZSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICAgICAgaWYgKCFsb2NhbERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FkZEhvdXJzIC0gbG9jYWxEYXRlIGlzIGludmFsaWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsRGF0ZS5hZGQoaG91cnMsICdob3VycycpLnRvRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvU3RhcnREYXkoZGF0ZTogYW55KTogRGF0ZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RhcnRSYW5nZShkYXRlLCBEYXRlUmFuZ2VUeXBlLkRheSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdG9FbmREYXkoZGF0ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0VuZFJhbmdlKGRhdGUsIERhdGVSYW5nZVR5cGUuRGF5LCBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvU3RhcnRXZWVrKGRhdGU6IGFueSk6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0YXJ0UmFuZ2UoZGF0ZSwgRGF0ZVJhbmdlVHlwZS5XZWVrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b0VuZFdlZWsoZGF0ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0VuZFJhbmdlKGRhdGUsIERhdGVSYW5nZVR5cGUuV2Vlaywgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b1N0YXJ0TW9udGgoZGF0ZTogYW55KTogRGF0ZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RhcnRSYW5nZShkYXRlLCBEYXRlUmFuZ2VUeXBlLk1vbnRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b0VuZE1vbnRoKGRhdGU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBEYXRlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9FbmRSYW5nZShkYXRlLCBEYXRlUmFuZ2VUeXBlLk1vbnRoLCBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvU3RhcnRZZWFyKGRhdGU6IGFueSk6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0YXJ0UmFuZ2UoZGF0ZSwgRGF0ZVJhbmdlVHlwZS5ZZWFyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b0VuZFllYXIoZGF0ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0VuZFJhbmdlKGRhdGUsIERhdGVSYW5nZVR5cGUuWWVhciwgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIERhdGVDb252ZXJ0U2VydmljZSB7XHJcbiAgICAgICAgcHJpdmF0ZSBfY29udmVydDogRGF0ZUNvbnZlcnQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgY29udmVydDogRGF0ZUNvbnZlcnQsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnZlcnQgPSBjb252ZXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBkZWZhdWx0VGltZVpvbmVPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQuZGVmYXVsdFRpbWVab25lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBkZWZhdWx0VGltZVpvbmVPZmZzZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb252ZXJ0LmRlZmF1bHRUaW1lWm9uZU9mZnNldCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyB0b0pTT04oZGF0ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQudG9Kc29uKGRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGF0ZSByYW5nZSBmdW5jdGlvbnMgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHB1YmxpYyB0b05leHRSYW5nZShkYXRlOiBhbnksIHR5cGU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0LnRvTmV4dFJhbmdlKGRhdGUsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvUHJldlJhbmdlKGRhdGU6IGFueSwgdHlwZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQudG9QcmV2UmFuZ2UoZGF0ZSwgdHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdG9DdXJyZW50UmFuZ2UodHlwZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQudG9DdXJyZW50UmFuZ2UodHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkSG91cnMoZGF0ZTogYW55LCBob3VyczogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQuYWRkSG91cnMoZGF0ZSwgaG91cnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvU3RhcnREYXkoZGF0ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQudG9TdGFydERheShkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b0VuZERheShkYXRlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQudG9FbmREYXkoZGF0ZSwgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b1N0YXJ0V2VlayhkYXRlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udmVydC50b1N0YXJ0V2VlayhkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b0VuZFdlZWsoZGF0ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0LnRvRW5kV2VlayhkYXRlLCBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvU3RhcnRNb250aChkYXRlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udmVydC50b1N0YXJ0TW9udGgoZGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdG9FbmRNb250aChkYXRlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQudG9FbmRNb250aChkYXRlLCBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvU3RhcnRZZWFyKGRhdGU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0LnRvU3RhcnRZZWFyKGRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvRW5kWWVhcihkYXRlOiBhbnksIG9mZnNldDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnQudG9FbmRZZWFyKGRhdGUsIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBEYXRlQ29udmVydFByb3ZpZGVyIGV4dGVuZHMgRGF0ZUNvbnZlcnQgaW1wbGVtZW50cyBJRGF0ZUNvbnZlcnRQcm92aWRlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBfdHJhbnNsYXRpb246IERhdGVDb252ZXJ0O1xyXG4gICAgICAgIHByaXZhdGUgX3NlcnZpY2U6IERhdGVDb252ZXJ0U2VydmljZTtcclxuXHJcbiAgICAgICAgcHVibGljICRnZXQoKTogYW55IHtcclxuICAgICAgICAgICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UgPSBuZXcgRGF0ZUNvbnZlcnRTZXJ2aWNlKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdwaXBEYXRlLkNvbnZlcnQnLCBbXSlcclxuICAgICAgICAucHJvdmlkZXIoJ3BpcERhdGVDb252ZXJ0JywgRGF0ZUNvbnZlcnRQcm92aWRlcik7XHJcbn0pKCk7IiwiaW1wb3J0IHsgSURhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi9JRGF0ZUZvcm1hdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJRGF0ZUNvbnZlcnRTZXJ2aWNlIH0gZnJvbSAnLi9JRGF0ZUNvbnZlcnRTZXJ2aWNlJztcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWVGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0VGltZSh2YWx1ZSwgZm9ybWF0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZU9wdGlvbmFsRmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdERhdGVPcHRpb25hbCh2YWx1ZSwgZm9ybWF0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RhdGVGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRMb25nRGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0RGF0ZUZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdFNob3J0RGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE1pZGRsZURhdGVGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRNaWRkbGVEYXRlKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TW9udGhGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0TW9udGgodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nTW9udGhGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRMb25nTW9udGgodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRZZWFyRmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0WWVhcih2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFdlZWtGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRXZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnRXZWVrRmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0U2hvcnRXZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXRlVGltZUZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdFNob3J0RGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNaWRkbGVEYXRlVGltZUZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdE1pZGRsZURhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RhdGVUaW1lRmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0TG9uZ0RhdGVUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWVGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55LCBmaXJzdFRpbWU6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWVGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55LCBmaXJzdFRpbWU6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdE1pZGRsZURhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RhdGVMb25nVGltZUZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnksIGZpcnN0VGltZTogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0TG9uZ0RhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmJGb3JtYXREYXRlTG9uZ1RpbWVGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55LCBmaXJzdFRpbWU6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmJiRm9ybWF0RGF0ZUxvbmdUaW1lKHZhbHVlLCBmaXJzdFRpbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRGdWxsRGF0ZVRpbWVGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRGdWxsRGF0ZVRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTaG9ydFRpbWVGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRTaG9ydFRpbWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRMb25nVGltZUZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdExvbmdUaW1lKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXlPZldlZWtGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRTaG9ydERheU9mV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExvbmdEYXlPZldlZWtGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRMb25nRGF5T2ZXZWVrKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ01vbnRoRGF5RmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0TG9uZ01vbnRoRGF5KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2hvcnRNb250aERheUZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdFNob3J0TW9udGhEYXkodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlUmFuZ2VGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdERhdGVSYW5nZSh2YWx1ZTEsIHZhbHVlMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lUmFuZ2VGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdERhdGVUaW1lUmFuZ2UodmFsdWUxLCB2YWx1ZTIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRJU09XZWVrRmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0SVNPV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0SVNPV2Vla0ZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdFNob3J0SVNPV2Vlayh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdElTT1dlZWtPcmRpbmFsRmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0SVNPV2Vla09yZGluYWwodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlWUZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdERhdGVZKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TG9uZ0RhdGVZRmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0TG9uZ0RhdGVZKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nRmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZ0ZpbHRlcihwaXBEYXRlRm9ybWF0OiBJRGF0ZUZvcm1hdFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlRm9ybWF0LmZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmcodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0RmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZVNob3J0RmlsdGVyKHBpcERhdGVGb3JtYXQ6IElEYXRlRm9ybWF0U2VydmljZSkge1xyXG4gICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBpcERhdGVGb3JtYXQuZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHNGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHModmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRFbGFwc2VkSW50ZXJ2YWxGaWx0ZXIocGlwRGF0ZUZvcm1hdDogSURhdGVGb3JtYXRTZXJ2aWNlKSB7XHJcbiAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55LCBzdGFydDogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gcGlwRGF0ZUZvcm1hdC5mb3JtYXRFbGFwc2VkSW50ZXJ2YWwodmFsdWUsIHN0YXJ0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0ZUpTT05GaWx0ZXIocGlwRGF0ZUNvbnZlcnQ6IElEYXRlQ29udmVydFNlcnZpY2UpIHtcclxuICAgIFwibmdJbmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBwaXBEYXRlQ29udmVydC50b0pzb24odmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdwaXBEYXRlLkZpbHRlcicsIFtdKVxyXG4gICAgLmZpbHRlcignZm9ybWF0VGltZScsIGZvcm1hdFRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXREYXRlT3B0aW9uYWwnLCBmb3JtYXREYXRlT3B0aW9uYWxGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdiYkZvcm1hdERhdGVMb25nVGltZScsIGJiRm9ybWF0RGF0ZUxvbmdUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnREYXRlJywgZm9ybWF0U2hvcnREYXRlRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TWlkZGxlRGF0ZScsIGZvcm1hdE1pZGRsZURhdGVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nRGF0ZScsIGZvcm1hdExvbmdEYXRlRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TW9udGgnLCBmb3JtYXRNb250aEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdNb250aCcsIGZvcm1hdExvbmdNb250aEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFllYXInLCBmb3JtYXRZZWFyRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0V2VlaycsIGZvcm1hdFdlZWtGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydFdlZWsnLCBmb3JtYXRTaG9ydFdlZWtGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydERhdGVUaW1lJywgZm9ybWF0U2hvcnREYXRlVGltZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdE1pZGRsZURhdGVUaW1lJywgZm9ybWF0TWlkZGxlRGF0ZVRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nRGF0ZVRpbWUnLCBmb3JtYXRMb25nRGF0ZVRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydERhdGVMb25nVGltZScsIGZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lJywgZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ0RhdGVMb25nVGltZScsIGZvcm1hdExvbmdEYXRlTG9uZ1RpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRGdWxsRGF0ZVRpbWUnLCBmb3JtYXRGdWxsRGF0ZVRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRTaG9ydFRpbWUnLCBmb3JtYXRTaG9ydFRpbWVGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nVGltZScsIGZvcm1hdExvbmdUaW1lRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnREYXlPZldlZWsnLCBmb3JtYXRTaG9ydERheU9mV2Vla0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdExvbmdEYXlPZldlZWsnLCBmb3JtYXRMb25nRGF5T2ZXZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0TG9uZ01vbnRoRGF5JywgZm9ybWF0TG9uZ01vbnRoRGF5RmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnRNb250aERheScsIGZvcm1hdFNob3J0TW9udGhEYXlGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXREYXRlUmFuZ2UnLCBmb3JtYXREYXRlUmFuZ2VGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXREYXRlVGltZVJhbmdlJywgZm9ybWF0RGF0ZVRpbWVSYW5nZUZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdElTT1dlZWsnLCBmb3JtYXRJU09XZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0U2hvcnRJU09XZWVrJywgZm9ybWF0U2hvcnRJU09XZWVrRmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0SVNPV2Vla09yZGluYWwnLCBmb3JtYXRJU09XZWVrT3JkaW5hbEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdERhdGVZJywgZm9ybWF0RGF0ZVlGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRMb25nRGF0ZVknLCBmb3JtYXRMb25nRGF0ZVlGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcnLCBmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmdGaWx0ZXIpXHJcbiAgICAuZmlsdGVyKCdmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nJywgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lTG9uZ0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnQnLCBmb3JtYXRUb2RheURhdGVMb25nVGltZVNob3J0RmlsdGVyKVxyXG4gICAgLmZpbHRlcignZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQnLCBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVTaG9ydEZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kcycsIGZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kc0ZpbHRlcilcclxuICAgIC5maWx0ZXIoJ2Zvcm1hdEVsYXBzZWRJbnRlcnZhbCcsIGZvcm1hdEVsYXBzZWRJbnRlcnZhbEZpbHRlcik7XHJcbiIsImltcG9ydCB7IERhdGVSYW5nZVR5cGUgfSBmcm9tICcuL0lEYXRlQ29udmVydFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJRGF0ZUZvcm1hdFNlcnZpY2UsIElEYXRlRm9ybWF0UHJvdmlkZXIgfSBmcm9tICcuL0lEYXRlRm9ybWF0U2VydmljZSc7XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgY2xhc3MgRGF0ZUZvcm1hdCBpbXBsZW1lbnRzIElEYXRlRm9ybWF0U2VydmljZSB7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9tb21lbnRSYW5nZWQ6IHN0cmluZ1tdID0gRGF0ZVJhbmdlVHlwZS5BbGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9kZWZhdWx0Rm9ybWF0OiBzdHJpbmcgPSAnTEwnXHJcblxyXG4gICAgICAgIHByaXZhdGUgX2RlZmF1bHRUaW1lWm9uZU9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGRlZmF1bHRUaW1lWm9uZU9mZnNldCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBkZWZhdWx0VGltZVpvbmVPZmZzZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaXNVbmRlZmluZWRPck51bGwodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhci5pc1VuZGVmaW5lZCh2YWx1ZSkgfHwgdmFsdWUgPT09IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm1hdERhdGVUaW1lKHZhbHVlOiBhbnksIGJhc2ljRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogbW9tZW50Lk1vbWVudDtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdFRwbDogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0IT0gdW5kZWZpbmVkICYmIHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSkudXRjT2Zmc2V0KHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRlLmlzVmFsaWQoKSkgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICAgICAgZm9ybWF0VHBsID0gYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoZm9ybWF0VHBsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybWF0RGF0ZVRpbWVZKHZhbHVlOiBhbnksIGJhc2ljRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogbW9tZW50Lk1vbWVudDtcclxuICAgICAgICAgICAgbGV0IG5vd0RhdGU6IG1vbWVudC5Nb21lbnQ7XHJcbiAgICAgICAgICAgIGxldCBmb3JtYXRNb21lbnQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCAhPSB1bmRlZmluZWQgJiYgdGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgICAgICBub3dEYXRlID0gbW9tZW50KCk7XHJcbiAgICAgICAgICAgIGZvcm1hdE1vbWVudCA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vd0RhdGUueWVhcigpID09IGRhdGUueWVhcigpKVxyXG4gICAgICAgICAgICAgICAgZm9ybWF0TW9tZW50ID0gZm9ybWF0TW9tZW50LnJlcGxhY2UoL1kvZywgJycpLnJlcGxhY2UoL15cXFd8XFxXJHxcXFdcXFcvLCAnJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoZm9ybWF0TW9tZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybWF0RGF5KHZhbHVlOiBhbnksIGJhc2ljRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogbW9tZW50Lk1vbWVudDtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybWF0TW9udGhZZWFybGVzcyA9IGZvcm1hdC5yZXBsYWNlKC9ZL2csICcnKS5yZXBsYWNlKC9eXFxXfFxcVyR8XFxXXFxXLywgJycpLnJlcGxhY2UoL00vZywgJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChmb3JtYXRNb250aFllYXJsZXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybWF0TW9udGhEYXkodmFsdWU6IGFueSwgYmFzaWNGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlOiBtb21lbnQuTW9tZW50O1xyXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XHJcbiAgICAgICAgICAgIGxldCBmb3JtYXRMTCA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoZm9ybWF0KTtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdFllYXJsZXNzTEwgPSBmb3JtYXRMTC5yZXBsYWNlKC9ZL2csICcnKS5yZXBsYWNlKC9eXFxXfFxcVyR8XFxXXFxXLywgJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChmb3JtYXRZZWFybGVzc0xMKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICB1c2UgdGltZXpvbmUgbm90IHRlc3RpbmdcclxuICAgICAgICBwcml2YXRlIGZvcm1hdFJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSwgYmFzaWNGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlU3RhcnQ6IG1vbWVudC5Nb21lbnQ7XHJcbiAgICAgICAgICAgIGxldCBkYXRlRW5kOiBtb21lbnQuTW9tZW50O1xyXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gYmFzaWNGb3JtYXQgPyBiYXNpY0Zvcm1hdCA6IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZTEpKVxyXG4gICAgICAgICAgICAgICAgZGF0ZVN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGF0ZVN0YXJ0ID0gKHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCAhPSB1bmRlZmluZWQgJiYgdGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ICE9IG51bGwpIFxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50KHZhbHVlMSkudXRjT2Zmc2V0KHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCkgOiBtb21lbnQodmFsdWUxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlMikpXHJcbiAgICAgICAgICAgICAgICBkYXRlRW5kID0gbnVsbDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGF0ZUVuZCA9ICh0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCAhPSBudWxsKSBcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudCh2YWx1ZTIpLnV0Y09mZnNldCh0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQpIDogbW9tZW50KHZhbHVlMik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0ZVN0YXJ0ID09PSBudWxsICYmIGRhdGVFbmQgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIGlmIChkYXRlU3RhcnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZUVuZC5mb3JtYXQoYmFzaWNGb3JtYXQpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZUVuZCA9PT0gbnVsbCB8fCBkYXRlU3RhcnQuaXNTYW1lKGRhdGVFbmQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVTdGFydC5mb3JtYXQoYmFzaWNGb3JtYXQpOztcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRlU3RhcnQuaXNBZnRlcihkYXRlRW5kKSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0ZSByYW5nZSBlcnJvci4gU3RhcnQgZGF0ZSBpcyBtb3JlIHRoYW4gZW5kIGRhdGUuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0ZVN0YXJ0LnllYXIoKSA9PSBkYXRlRW5kLnllYXIoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGVTdGFydC5tb250aCgpID09IGRhdGVFbmQubW9udGgoKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXkoZGF0ZVN0YXJ0LCBiYXNpY0Zvcm1hdCkgKyAnLScgKyBkYXRlRW5kLmZvcm1hdChiYXNpY0Zvcm1hdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TW9udGhEYXkoZGF0ZVN0YXJ0LCBiYXNpY0Zvcm1hdCkgKyAnLScgKyBkYXRlRW5kLmZvcm1hdChiYXNpY0Zvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlU3RhcnQuZm9ybWF0KGJhc2ljRm9ybWF0KSArICctJyArIGRhdGVFbmQuZm9ybWF0KGJhc2ljRm9ybWF0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdG9EYXRlV2l0aFRpbWUodmFsdWU6IGFueSwgZm9ybWF0RGF0ZTogc3RyaW5nLCBmb3JtYXRUaW1lOiBzdHJpbmcsIGZpcnN0VGltZT86IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogbW9tZW50Lk1vbWVudDtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgbm93RGF0ZTogbW9tZW50Lk1vbWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSkgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRUaW1lWm9uZU9mZnNldCAhPSB1bmRlZmluZWQgJiYgdGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKS51dGNPZmZzZXQodGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGUuaXNWYWxpZCgpKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgICAgICBub3dEYXRlID0gbW9tZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdFRpbWUpXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRlLmZvcm1hdChmb3JtYXRUaW1lKSArICcgJyArIGRhdGUuZm9ybWF0KGZvcm1hdERhdGUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRlLmZvcm1hdChmb3JtYXREYXRlKSArICcgJyArIGRhdGUuZm9ybWF0KGZvcm1hdFRpbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdG9Ub2RheURhdGUodmFsdWU6IGFueSwgZm9ybWF0RGF0ZTogc3RyaW5nLCBmb3JtYXRUaW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogbW9tZW50Lk1vbWVudDtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgbm93RGF0ZTogYW55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVmYXVsdFRpbWVab25lT2Zmc2V0ICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpLnV0Y09mZnNldCh0aGlzLl9kZWZhdWx0VGltZVpvbmVPZmZzZXQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbW9tZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkpIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgICAgIG5vd0RhdGUgPSBtb21lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChub3dEYXRlLnllYXIoKSA9PSBkYXRlLnllYXIoKSAmJiBub3dEYXRlLm1vbnRoKCkgPT0gZGF0ZS5tb250aCgpICYmIG5vd0RhdGUuZGF5KCkgPT0gZGF0ZS5kYXkoKSlcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRhdGUuZm9ybWF0KGZvcm1hdFRpbWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRlLmZvcm1hdChmb3JtYXREYXRlKSArICcgJyArIGRhdGUuZm9ybWF0KGZvcm1hdFRpbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZm9ybWF0aW5nIGZ1bmN0aW9ucyBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRUaW1lKHZhbHVlOiBhbnksIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMTEwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXREYXRlT3B0aW9uYWwodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0wnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRhdGUgZm9ybWF0c1xyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRTaG9ydERhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJiRm9ybWF0RGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGVXaXRoVGltZSh2YWx1ZSwgJ01NL0REL1lZJywgJ0xUUycsIGZpcnN0VGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0TWlkZGxlRGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdsbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdExvbmdEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0TW9udGgodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTU0nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRMb25nTW9udGgodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTU1NTScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFllYXIodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnWVlZWScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFdlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnd3cnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRTaG9ydFdlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAndycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZVdpdGhUaW1lKHZhbHVlLCAnTCcsICdMVCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdE1pZGRsZURhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ2xsbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdExvbmdEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdMTEwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRGdWxsRGF0ZVRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTExMTCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGVXaXRoVGltZSh2YWx1ZSwgJ0wnLCAnTFRTJywgZmlyc3RUaW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRNaWRkbGVEYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZVdpdGhUaW1lKHZhbHVlLCAnbGwnLCAnTFRTJywgZmlyc3RUaW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGVXaXRoVGltZSh2YWx1ZSwgJ0xMJywgJ0xUUycsIGZpcnN0VGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0U2hvcnRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xUJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0TG9uZ1RpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnTFRTJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXlPZldlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVUaW1lKHZhbHVlLCAnZGQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRMb25nRGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ2RkZGQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHB1YmxpYyBmb3JtYXRUaW1lTnVtYmVyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMTCcpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gcHVibGljIGZvcm1hdExvbmdUaW1lTnVtYmVyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ0xMTEwnKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vLy0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRMb25nTW9udGhEYXkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdE1vbnRoRGF5KHZhbHVlLCAnTEwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRTaG9ydE1vbnRoRGF5KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRNb250aERheSh2YWx1ZSwgJ0wnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXREYXRlUmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UmFuZ2UodmFsdWUxLCB2YWx1ZTIsICdMTCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdERhdGVUaW1lUmFuZ2UodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UmFuZ2UodmFsdWUxLCB2YWx1ZTIsICdMTEwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlzbyBmdW5jdGlvblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRJU09XZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ1dXJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0U2hvcnRJU09XZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZSh2YWx1ZSwgJ1cnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRJU09XZWVrT3JkaW5hbCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWUodmFsdWUsICdXbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzcGVjaWFsIGZvcm1hdHMgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgLy8geWVhciBvcHRpb24gZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgeWVhciBpcyBub3QgZXF1YWwgdG8sIHRoZSBkYXRlIG9mIFxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXREYXRlWSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWVZKHZhbHVlLCAnTCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8geWVhciBvcHRpb24gZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgeWVhciBpcyBub3QgZXF1YWwgdG8sIHRoZSBkYXRlIG9mXHJcbiAgICAgICAgcHVibGljIGZvcm1hdExvbmdEYXRlWSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVRpbWVZKHZhbHVlLCAnTEwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgICAgICAvLyBTZXB0ZW1iZXIgNCAxOTg2IDg6MzA6MjUgUE0gb3IgODozMDoyNSBQTVxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvVG9kYXlEYXRlKHZhbHVlLCAnTEwnLCAnTFRTJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgICAgICAvLyBTZXAgNCAxOTg2IDg6MzA6MjUgUE0gb3IgODozMDoyNSBQTVxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1RvZGF5RGF0ZSh2YWx1ZSwgJ0xMJywgJ0xUUycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAgICAgLy8gU2VwdGVtYmVyIDQgMTk4NiA4OjMwIFBNIG9yIDg6MzAgUE1cclxuICAgICAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Ub2RheURhdGUodmFsdWUsICdMTCcsICdMVCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAgICAgLy8gU2VwIDQgMTk4NiA4OjMwIFBNIG9yIDg6MzAgUE1cclxuICAgICAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvVG9kYXlEYXRlKHZhbHVlLCAnbGwnLCAnTFQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG9kb1xyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRNaWxsaXNlY29uZHNUb1NlY29uZHModmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRFbGFwc2VkSW50ZXJ2YWwodmFsdWU6IGFueSwgc3RhcnQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlOiBtb21lbnQuTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgbm93RGF0ZTogYW55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWRPck51bGwoc3RhcnQpKSB7XHJcbiAgICAgICAgICAgICAgICBub3dEYXRlID0gbW9tZW50KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3dEYXRlID0gbW9tZW50KHN0YXJ0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkgfHwgIW5vd0RhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZnJvbU5vdyhub3dEYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXREYXRlSlNPTihkYXRlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobW9tZW50KGRhdGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIERhdGVGb3JtYXRTZXJ2aWNlIGltcGxlbWVudHMgSURhdGVGb3JtYXRTZXJ2aWNlIHtcclxuICAgICAgICBwcml2YXRlIF9mb3JtYXQ6IERhdGVGb3JtYXQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgX2Zvcm1hdDogRGF0ZUZvcm1hdCxcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5fZm9ybWF0ID0gX2Zvcm1hdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgZGVmYXVsdFRpbWVab25lT2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZGVmYXVsdFRpbWVab25lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBkZWZhdWx0VGltZVpvbmVPZmZzZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JtYXQuZGVmYXVsdFRpbWVab25lT2Zmc2V0ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0b2RvIE9wdGlvbmFsXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFRpbWUodmFsdWU6IGFueSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdFRpbWUodmFsdWUsIGZvcm1hdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0b2RvIE9wdGlvbmFsXHJcbiAgICAgICAgcHVibGljIGZvcm1hdERhdGVPcHRpb25hbCh2YWx1ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0RGF0ZU9wdGlvbmFsKHZhbHVlLCBmb3JtYXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFNob3J0RGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdC5mb3JtYXRTaG9ydERhdGUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdE1pZGRsZURhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0TWlkZGxlRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0TG9uZ0RhdGUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdE1vbnRoKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdE1vbnRoKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRMb25nTW9udGgodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0TG9uZ01vbnRoKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRZZWFyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdFllYXIodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFdlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0V2Vlayh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0U2hvcnRXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdFNob3J0V2Vlayh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdC5mb3JtYXRTaG9ydERhdGVUaW1lKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRNaWRkbGVEYXRlVGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdC5mb3JtYXRNaWRkbGVEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0TG9uZ0RhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdExvbmdEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0RnVsbERhdGVUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdEZ1bGxEYXRlVGltZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0U2hvcnREYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0TWlkZGxlRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdE1pZGRsZURhdGVMb25nVGltZSh2YWx1ZSwgZmlyc3RUaW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZUxvbmdUaW1lKHZhbHVlOiBhbnksIGZpcnN0VGltZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdExvbmdEYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYmJGb3JtYXREYXRlTG9uZ1RpbWUodmFsdWU6IGFueSwgZmlyc3RUaW1lPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuYmJGb3JtYXREYXRlTG9uZ1RpbWUodmFsdWUsIGZpcnN0VGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0U2hvcnRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdFNob3J0VGltZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0TG9uZ1RpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0TG9uZ1RpbWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFNob3J0RGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdFNob3J0RGF5T2ZXZWVrKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRMb25nRGF5T2ZXZWVrKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdExvbmdEYXlPZldlZWsodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdExvbmdNb250aERheSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdC5mb3JtYXRMb25nTW9udGhEYXkodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFNob3J0TW9udGhEYXkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0U2hvcnRNb250aERheSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0RGF0ZVJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0RGF0ZVJhbmdlKHZhbHVlMSwgdmFsdWUyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXREYXRlVGltZVJhbmdlKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0RGF0ZVRpbWVSYW5nZSh2YWx1ZTEsIHZhbHVlMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpc28gZnVuY3Rpb25cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICBwdWJsaWMgZm9ybWF0SVNPV2Vlayh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdC5mb3JtYXRJU09XZWVrKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRTaG9ydElTT1dlZWsodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0U2hvcnRJU09XZWVrKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRJU09XZWVrT3JkaW5hbCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdC5mb3JtYXRJU09XZWVrT3JkaW5hbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNwZWNpYWwgZm9ybWF0cyBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAvLyB5ZWFyIG9wdGlvbiBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCB5ZWFyIGlzIG5vdCBlcXVhbCB0bywgdGhlIGRhdGUgb2YgXHJcbiAgICAgICAgcHVibGljIGZvcm1hdERhdGVZKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdERhdGVZKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHllYXIgb3B0aW9uIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IHllYXIgaXMgbm90IGVxdWFsIHRvLCB0aGUgZGF0ZSBvZlxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRMb25nRGF0ZVkodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0TG9uZ0RhdGVZKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgICAgICAvLyBTZXB0ZW1iZXIgNCAxOTg2IDg6MzA6MjUgUE0gb3IgODozMDoyNSBQTVxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVMb25nVGltZUxvbmcodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVMb25nKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRhdGUgZGlzcGxheXMgaWYgdGhlIGN1cnJlbnQgZGF0ZSAgaXMgbm90IGVxdWFsIG5vdyBcclxuICAgICAgICAvLyBTZXAgNCAxOTg2IDg6MzA6MjUgUE0gb3IgODozMDoyNSBQTVxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRUb2RheURhdGVTaG9ydFRpbWVMb25nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0LmZvcm1hdFRvZGF5RGF0ZVNob3J0VGltZUxvbmcodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGF0ZSBkaXNwbGF5cyBpZiB0aGUgY3VycmVudCBkYXRlICBpcyBub3QgZXF1YWwgbm93IFxyXG4gICAgICAgIC8vIFNlcHRlbWJlciA0IDE5ODYgODozMCBQTSBvciA4OjMwIFBNXHJcbiAgICAgICAgcHVibGljIGZvcm1hdFRvZGF5RGF0ZUxvbmdUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0VG9kYXlEYXRlTG9uZ1RpbWVTaG9ydCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkYXRlIGRpc3BsYXlzIGlmIHRoZSBjdXJyZW50IGRhdGUgIGlzIG5vdCBlcXVhbCBub3cgXHJcbiAgICAgICAgLy8gU2VwIDQgMTk4NiA4OjMwIFBNIG9yIDg6MzAgUE1cclxuICAgICAgICBwdWJsaWMgZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0VG9kYXlEYXRlU2hvcnRUaW1lU2hvcnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZvcm1hdE1pbGxpc2Vjb25kc1RvU2Vjb25kcyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0TWlsbGlzZWNvbmRzVG9TZWNvbmRzKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmb3JtYXRFbGFwc2VkSW50ZXJ2YWwodmFsdWU6IGFueSwgc3RhcnQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQuZm9ybWF0RWxhcHNlZEludGVydmFsKHZhbHVlLCBzdGFydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0RGF0ZUpTT04oZGF0ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdC5nZXREYXRlSlNPTihkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIERhdGVGb3JtYXRQcm92aWRlciBleHRlbmRzIERhdGVGb3JtYXQgaW1wbGVtZW50cyBJRGF0ZUZvcm1hdFByb3ZpZGVyIHtcclxuICAgICAgICBwcml2YXRlIF90cmFuc2xhdGlvbjogRGF0ZUZvcm1hdDtcclxuICAgICAgICBwcml2YXRlIF9zZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZTtcclxuXHJcbiAgICAgICAgcHVibGljICRnZXQoKTogYW55IHtcclxuICAgICAgICAgICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UgPSBuZXcgRGF0ZUZvcm1hdFNlcnZpY2UodGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ3BpcERhdGUuRm9ybWF0JywgW10pXHJcbiAgICAgICAgLnByb3ZpZGVyKCdwaXBEYXRlRm9ybWF0JywgRGF0ZUZvcm1hdFByb3ZpZGVyKTtcclxufSkoKTsiLCJleHBvcnQgY2xhc3MgRGF0ZVJhbmdlVHlwZSB7XHJcbiAgICBzdGF0aWMgWWVhcjogc3RyaW5nID0gJ3llYXInO1xyXG4gICAgc3RhdGljIE1vbnRoOiBzdHJpbmcgPSAnbW9udGgnO1xyXG4gICAgc3RhdGljIFdlZWs6IHN0cmluZyA9ICd3ZWVrJztcclxuICAgIHN0YXRpYyBXZWVrRnJvbVN1bmRheTogc3RyaW5nID0gJ2lzb3dlZWsnOyBcclxuICAgIHN0YXRpYyBEYXk6IHN0cmluZyA9ICdkYXknO1xyXG4gICAgc3RhdGljIEFsbDogc3RyaW5nW10gPSBbJ3llYXInLCAnbW9udGgnLCAnd2VlaycsICdpc293ZWVrJywgJ2RheSddIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlQ29udmVydFNlcnZpY2Uge1xyXG4gICAgZGVmYXVsdFRpbWVab25lT2Zmc2V0OiBudW1iZXI7XHJcbiAgICBcclxuICAgIHRvSnNvbihkYXRlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICB0b05leHRSYW5nZShkYXRlOiBhbnksIHR5cGU6IHN0cmluZyk6IERhdGU7XHJcbiAgICB0b1ByZXZSYW5nZShkYXRlOiBhbnksIHR5cGU6IHN0cmluZyk6IERhdGU7XHJcbiAgICB0b0N1cnJlbnRSYW5nZSh0eXBlOiBzdHJpbmcpOiBEYXRlO1xyXG5cclxuICAgIGFkZEhvdXJzKGRhdGU6IGFueSwgaG91cnM6IG51bWJlcik6IERhdGU7XHJcbiAgICB0b1N0YXJ0RGF5KGRhdGU6IGFueSk6IERhdGU7XHJcbiAgICB0b0VuZERheShkYXRlOiBhbnksIG9mZnNldDogbnVtYmVyKTogRGF0ZTtcclxuICAgIHRvU3RhcnRXZWVrKGRhdGU6IGFueSk6IERhdGU7XHJcbiAgICB0b0VuZFdlZWsoZGF0ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IERhdGU7XHJcbiAgICB0b1N0YXJ0TW9udGgoZGF0ZTogYW55KTogRGF0ZTtcclxuICAgIHRvRW5kTW9udGgoZGF0ZTogYW55LCBvZmZzZXQ6IG51bWJlcik6IERhdGU7XHJcbiAgICB0b1N0YXJ0WWVhcihkYXRlOiBhbnkpOiBEYXRlO1xyXG4gICAgdG9FbmRZZWFyKGRhdGU6IGFueSwgb2Zmc2V0OiBudW1iZXIpOiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlQ29udmVydFByb3ZpZGVyIGV4dGVuZHMgSURhdGVDb252ZXJ0U2VydmljZSwgbmcuSVNlcnZpY2VQcm92aWRlciB7XHJcbn0iLCJcclxuYW5ndWxhci5tb2R1bGUoJ3BpcERhdGUuQ29tbW9uJywgW1xyXG4gICAgJ3BpcERhdGUuQ29udmVydCcsXHJcbiAgICAncGlwRGF0ZS5Gb3JtYXQnLFxyXG4gICAgJ3BpcERhdGUuRmlsdGVyJ1xyXG5dKTtcclxuXHJcbmltcG9ydCAnLi9EYXRlQ29udmVydFNlcnZpY2UnO1xyXG5pbXBvcnQgJy4vRGF0ZUZvcm1hdEZpbHRlcic7XHJcbmltcG9ydCAnLi9EYXRlRm9ybWF0U2VydmljZSc7XHJcbmltcG9ydCAnLi9JRGF0ZUNvbnZlcnRTZXJ2aWNlJztcclxuaW1wb3J0ICcuL0lEYXRlRm9ybWF0U2VydmljZSc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL0lEYXRlQ29udmVydFNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lEYXRlRm9ybWF0U2VydmljZSc7IiwiXHJcbigoKSA9PiB7XHJcbiAgICBpbnRlcmZhY2UgSURhdGVSYW5nZUJpbmRpbmdzIHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gICAgICAgIHRpbWVNb2RlOiBhbnk7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGFueTtcclxuICAgICAgICBtb2RlbDogYW55O1xyXG4gICAgICAgIHBpcENoYW5nZWQ6IGFueTtcclxuICAgICAgICB0eXBlOiBhbnk7XHJcbiAgICAgICAgcGlwRGF0ZUZvcm1hdDogYW55O1xyXG4gICAgICAgIHBpcE5vTGluZTogYW55O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERhdGVSYW5nZUJpbmRpbmdzOiBJRGF0ZVJhbmdlQmluZGluZ3MgPSB7XHJcbiAgICAgICAgdGltZU1vZGU6ICdAcGlwVGltZU1vZGUnLFxyXG4gICAgICAgIGRpc2FibGVkOiAnJm5nRGlzYWJsZWQnLFxyXG4gICAgICAgIG1vZGVsOiAnPW5nTW9kZWwnLFxyXG4gICAgICAgIHBpcENoYW5nZWQ6ICcmJyxcclxuICAgICAgICB0eXBlOiAnQHBpcERhdGVSYW5nZVR5cGUnLFxyXG4gICAgICAgIHBpcERhdGVGb3JtYXQ6ICdAJyxcclxuICAgICAgICBwaXBOb0xpbmU6ICdAJ1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGFzcyBEYXRlUmFuZ2VDaGFuZ2VzIGltcGxlbWVudHMgbmcuSU9uQ2hhbmdlc09iamVjdCwgSURhdGVSYW5nZUJpbmRpbmdzIHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBuZy5JQ2hhbmdlc09iamVjdDxhbnk+O1xyXG5cclxuICAgICAgICB0aW1lTW9kZTogbmcuSUNoYW5nZXNPYmplY3Q8c3RyaW5nPjtcclxuICAgICAgICBkaXNhYmxlZDogbmcuSUNoYW5nZXNPYmplY3Q8KCkgPT4gdm9pZD47XHJcbiAgICAgICAgbW9kZWw6IG5nLklDaGFuZ2VzT2JqZWN0PGFueT47XHJcbiAgICAgICAgcGlwQ2hhbmdlZDogbmcuSUNoYW5nZXNPYmplY3Q8KCkgPT4gdm9pZD47XHJcbiAgICAgICAgdHlwZTogbmcuSUNoYW5nZXNPYmplY3Q8c3RyaW5nPjtcclxuICAgICAgICBwaXBEYXRlRm9ybWF0OiBuZy5JQ2hhbmdlc09iamVjdDxhbnk+O1xyXG4gICAgICAgIHBpcE5vTGluZTogbmcuSUNoYW5nZXNPYmplY3Q8YW55PjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBEYXRlUmFuZ2VDb250cm9sbGVyIHtcclxuICAgICAgICBwcml2YXRlIGN1cnJlbnREYXRlOiBEYXRlO1xyXG4gICAgICAgIHByaXZhdGUgY3VycmVudFllYXI6IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIGN1cnJlbnRNb250aDogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgY3VycmVudERheTogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgcHJldlN0YXRlOiBhbnkgPSB7fTtcclxuICAgICAgICBwcml2YXRlIGN1cnJlbnRTdGF0ZTogYW55ID0ge307XHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhbGVEYXRlOiBhbnk7XHJcbiAgICAgICAgcHJpdmF0ZSBtb21lbnRNb250aHM6IGFueTtcclxuICAgICAgICBwcml2YXRlIG1vbWVudERheXM6IGFueTtcclxuICAgICAgICBwcml2YXRlIG1vbWVudFNob3J0RGF5czogYW55O1xyXG4gICAgICAgIHByaXZhdGUgbW9tZW50Rmlyc3REYXlPZldlZWs6IGFueTtcclxuXHJcbiAgICAgICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgcGlwQ2hhbmdlZDogRnVuY3Rpb247XHJcbiAgICAgICAgcHVibGljIHllYXI6IG51bWJlcjtcclxuICAgICAgICBwdWJsaWMgbW9udGg6IG51bWJlcjtcclxuICAgICAgICBwdWJsaWMgd2VlazogYW55O1xyXG4gICAgICAgIHB1YmxpYyBkYXk6IG51bWJlcjtcclxuICAgICAgICBwdWJsaWMgc2hvcnRNb250aHM6IHN0cmluZ1tdO1xyXG4gICAgICAgIHB1YmxpYyBkYXlzOiBudW1iZXJbXTtcclxuICAgICAgICBwdWJsaWMgd2Vla3M6IGFueVtdO1xyXG4gICAgICAgIHB1YmxpYyBtb250aHM6IG51bWJlcltdO1xyXG4gICAgICAgIHB1YmxpYyB5ZWFyczogbnVtYmVyW107XHJcbiAgICAgICAgcHVibGljIG5hbWVEYXlzOiBzdHJpbmdbXTtcclxuICAgICAgICBwdWJsaWMgbW9kZWw6IGFueTtcclxuICAgICAgICBwdWJsaWMgZGlzYWJsZWQ6IEZ1bmN0aW9uO1xyXG4gICAgICAgIHB1YmxpYyBkaXNhYmxlQ29udHJvbHM6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIHRpbWVNb2RlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgJG1kTWVkaWE6IGFuZ3VsYXIubWF0ZXJpYWwuSU1lZGlhLFxyXG4gICAgICAgICAgICBwcml2YXRlICR0aW1lb3V0OiBuZy5JVGltZW91dFNlcnZpY2UsXHJcbiAgICAgICAgICAgICRzY29wZTogbmcuSVNjb3BlLFxyXG4gICAgICAgICAgICAkZWxlbWVudCxcclxuICAgICAgICAgICAgJHJvb3RTY29wZTogbmcuSVJvb3RTY29wZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICRpbmplY3RvcjogYW5ndWxhci5hdXRvLklJbmplY3RvclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0ZSA9IG1vbWVudC5sb2NhbGVEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9tZW50TW9udGhzID0gYW5ndWxhci5pc0FycmF5KHRoaXMubG9jYWxlRGF0ZS5fbW9udGhzKSA/IHRoaXMubG9jYWxlRGF0ZS5fbW9udGhzIDogdGhpcy5sb2NhbGVEYXRlLl9tb250aHMuc3RhbmRhbG9uZTtcclxuICAgICAgICAgICAgdGhpcy5tb21lbnREYXlzID0gYW5ndWxhci5pc0FycmF5KHRoaXMubG9jYWxlRGF0ZS5fd2Vla2RheXMpID8gdGhpcy5sb2NhbGVEYXRlLl93ZWVrZGF5cyA6IHRoaXMubG9jYWxlRGF0ZS5fd2Vla2RheXMuZm9ybWF0O1xyXG4gICAgICAgICAgICB0aGlzLm1vbWVudFNob3J0RGF5cyA9IHRoaXMubG9jYWxlRGF0ZS5fd2Vla2RheXNNaW47XHJcbiAgICAgICAgICAgIHRoaXMubW9tZW50Rmlyc3REYXlPZldlZWsgPSB0aGlzLmxvY2FsZURhdGUuX3dlZWsuZG93O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLmN1cnJlbnREYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gdGhpcy5jdXJyZW50RGF0ZS5nZXRVVENNb250aCgpICsgMTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF5ID0gdGhpcy5jdXJyZW50RGF0ZS5nZXRVVENEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUNvbnRyb2xzID0gdGhpcy5kaXNhYmxlZCA/IHRoaXMuZGlzYWJsZWQoKSA6IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJyRjdHJsLnR5cGUnLCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlICYmIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyAkb25DaGFuZ2VzKGNoYW5nZXM6IERhdGVSYW5nZUNoYW5nZXMpIHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMudHlwZSAmJiBjaGFuZ2VzLnR5cGUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSBjaGFuZ2VzLnR5cGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qaWYgKGNoYW5nZXMudHlwZSAmJiBjaGFuZ2VzLnR5cGUuY3VycmVudFZhbHVlICYmIGNoYW5nZXMudHlwZS5jdXJyZW50VmFsdWUgIT0gY2hhbmdlcy50eXBlLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgdGhpcy50eXBlID0gY2hhbmdlcy50eXBlLmN1cnJlbnRWYWx1ZTsgXHJcbiAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQgJiYgY2hhbmdlcy5kaXNhYmxlZC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUNvbnRyb2xzID0gY2hhbmdlcy5kaXNhYmxlZC5jdXJyZW50VmFsdWUoKTtcclxuICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgIGlmIChjaGFuZ2VzLm1vZGVsICYmIGNoYW5nZXMubW9kZWwuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5nZXRWYWx1ZShjaGFuZ2VzLm1vZGVsLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uTW9udGhDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGU6IERhdGUsIGRheU9mV2VlazogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHRoaXMueWVhciwgdGhpcy5tb250aCAtIDEsIDEpKTtcclxuICAgICAgICAgICAgICAgIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCkgPyBkYXRlLmdldFVUQ0RheSgpIDogNztcclxuICAgICAgICAgICAgICAgIHRoaXMud2VlayA9IHRoaXMuZ2V0V2Vla0J5RGF0ZShkYXlPZldlZWssIHRoaXMubW9udGggLSAxLCB0aGlzLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0V2VlaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RXZWVrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkanVzdERheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvblllYXJDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogRGF0ZSwgZGF5T2ZXZWVrOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aGlzLnllYXIsIHRoaXMubW9udGggLSAxLCAxKSk7XHJcbiAgICAgICAgICAgIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCkgPyBkYXRlLmdldFVUQ0RheSgpIDogNztcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2VlayA9IHRoaXMuZ2V0V2Vla0J5RGF0ZShkYXlPZldlZWssIHRoaXMubW9udGggLSAxLCB0aGlzLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RXZWVrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkanVzdERheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgb25XZWVrQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RXZWVrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkanVzdERheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgaXNEYXkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdkYWlseSc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIGlzV2VlaygpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ3dlZWtseSc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIGlzTW9udGgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdkYWlseScgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ3dlZWtseScgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ21vbnRobHknO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHB1YmxpYyBvbkNoYW5nZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGlwQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2V0Q3VycmVudCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUuZGF5ID0gdGhpcy5kYXk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlLm1vbnRoID0gdGhpcy5tb250aDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUueWVhciA9IHRoaXMueWVhcjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUud2VlayA9IHRoaXMud2VlaztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUuZGF0ZVJhbmdlVHlwZSA9IHRoaXMudHlwZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUubW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmaWxsTGlzdHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF5cyA9IHRoaXMuZGF5TGlzdCh0aGlzLm1vbnRoLCB0aGlzLnllYXIpO1xyXG4gICAgICAgICAgICB0aGlzLndlZWtzID0gdGhpcy53ZWVrTGlzdCh0aGlzLm1vbnRoLCB0aGlzLnllYXIpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRocyA9IHRoaXMubW9udGhMaXN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcnRNb250aHMgPSB0aGlzLm1vbnRoTGlzdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnllYXJzID0gdGhpcy55ZWFyTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjb3JyZWN0V2VlaygpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByZXZTdGF0ZS5tb2RlbCB8fCB0aGlzLnByZXZTdGF0ZS5tb2RlbCAmJiB0aGlzLnByZXZTdGF0ZS5tb2RlbC5nZXRUaW1lKCkgPj0gdGhpcy5tb2RlbC5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHNoaWZ0IHdlZWsgLT4gaW5jcmVhc2UgbW9udGhcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLndlZWtzICYmIHRoaXMud2Vla3NbdGhpcy53ZWVrXSAmJiB0aGlzLndlZWtzW3RoaXMud2Vla10uaWQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vbnRoIDwgMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsTGlzdHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWU6IERhdGU7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMubW9kZWwgPyBuZXcgRGF0ZSh0aGlzLm1vZGVsKSA6IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF5ID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENEYXRlKCkgOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENNb250aCgpICsgMSA6IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMueWVhciA9IHZhbHVlID8gdmFsdWUuZ2V0VVRDRnVsbFllYXIoKSA6IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMud2VlayA9IHZhbHVlID8gdGhpcy5nZXRXZWVrQnlEYXRlKHRoaXMuZGF5LCB0aGlzLm1vbnRoIC0gMSwgdGhpcy55ZWFyKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpbGxMaXN0cygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFdlZWsoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkanVzdFdlZWsoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uWWVhckNsaWNrKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMueWVhcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyID0gdGhpcy5jdXJyZW50WWVhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHB1YmxpYyBvbk1vbnRoQ2xpY2soKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aCA9IHRoaXMuY3VycmVudE1vbnRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIG9uRGF5Q2xpY2soKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy55ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheSA9IHRoaXMuY3VycmVudERheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRDb3VudERheShtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAzMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtb250aCA9PT0gNCB8fCBtb250aCA9PT0gNiB8fCBtb250aCA9PT0gOSB8fCBtb250aCA9PT0gMTEpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMzA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtb250aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHllYXIgJSA0ID09PSAwID8gMjkgOiAyODtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDI4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBkYXlMaXN0KG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50OiBudW1iZXIsIGRheXM6IG51bWJlcltdO1xyXG5cclxuICAgICAgICAgICAgY291bnQgPSB0aGlzLmdldENvdW50RGF5KG1vbnRoLCB5ZWFyKTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lRGF5cyA9IFtdO1xyXG4gICAgICAgICAgICBkYXlzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lRGF5cy5wdXNoKHRoaXMubW9tZW50U2hvcnREYXlzW21vbWVudChbeWVhciwgbW9udGggLSAxLCBpXSkud2Vla2RheSgpXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldFdlZWtCeURhdGUoZGF5LCBtb250aCwgeWVhcikge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogRGF0ZSwgZGF5T2ZXZWVrOiBudW1iZXIsIHN0YXJ0V2VlaztcclxuXHJcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5KSk7XHJcbiAgICAgICAgICAgIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCkgPyBkYXRlLmdldFVUQ0RheSgpIDogNztcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXlPZldlZWsgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0V2VlayA9IGRheTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0V2VlayA9IGRheSArIDEgLSBkYXlPZldlZWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGFydFdlZWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0V2VlayhkYXk6IG51bWJlciwgY291bnREYXk6IG51bWJlciwgY291bnRQcmV2TW9udGhEYXkpIHtcclxuICAgICAgICAgICAgbGV0IGVuZERheTogbnVtYmVyLCBzdGFydERheTogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgZW5kRGF5ID0gZGF5ICsgNiA+IGNvdW50RGF5ID8gY291bnREYXkgLSBkYXkgLSA2IDogZGF5ICsgNjtcclxuICAgICAgICAgICAgc3RhcnREYXkgPSBkYXkgPiAwID8gZGF5IDogY291bnRQcmV2TW9udGhEYXkgKyBkYXk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RhcnREYXkudG9TdHJpbmcoKSArICcgLSAnICsgKE1hdGguYWJzKGVuZERheSkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgd2Vla0xpc3QobW9udGg6IG51bWJlciwgeWVhcjogbnVtYmVyKSB7IC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0L/QuNGB0L7QuiDQvdCw0YfQsNC70LAg0L3QsNC00LXQu9C4XHJcbiAgICAgICAgICAgIGxldCB3ZWVrczogYW55W10sIGNvdW50RGF5OiBudW1iZXIsIGNvdW50UHJldk1vbnRoRGF5OiBudW1iZXIsIHN0YXJ0V2VlazogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgd2Vla3MgPSBbXTsgIC8vINCyINC80LDRgdGB0LjQstC1INC/0LXRgNCy0YvQtSDQtNC90Lgg0L3QtdC00LXQu9C4INCyINGC0LXQutGD0YnQtdC8INC80LXRgdGP0YbQtVxyXG4gICAgICAgICAgICBjb3VudERheSA9IHRoaXMuZ2V0Q291bnREYXkobW9udGgsIHllYXIpO1xyXG4gICAgICAgICAgICBzdGFydFdlZWsgPSB0aGlzLmdldFdlZWtCeURhdGUoMSwgbW9udGggLSAxLCB5ZWFyKTtcclxuXHJcbiAgICAgICAgICAgIGNvdW50UHJldk1vbnRoRGF5ID0gbW9udGggLSAxID8gdGhpcy5nZXRDb3VudERheShtb250aCAtIDEsIHllYXIpIDogdGhpcy5nZXRDb3VudERheSgxMiwgeWVhciAtIDEpO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhcnRXZWVrIDwgY291bnREYXkgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICB3ZWVrcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogc3RhcnRXZWVrLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZ2V0V2VlayhzdGFydFdlZWssIGNvdW50RGF5LCBjb3VudFByZXZNb250aERheSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRXZWVrID0gc3RhcnRXZWVrICsgNztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHdlZWtzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtb250aExpc3QoKSB7XHJcbiAgICAgICAgICAgIGxldCBtb250aHM6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG1vbnRocy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm1vbWVudE1vbnRoc1tpIC0gMV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbW9udGhzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB5ZWFyTGlzdCgpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0WWVhcjogbnVtYmVyLCBlbmRZZWFyOiBudW1iZXIsIHllYXJzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRpbWVNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmdXR1cmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WWVhciA9IHRoaXMuY3VycmVudFllYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kWWVhciA9IHRoaXMuY3VycmVudFllYXIgKyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwYXN0JzpcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFllYXIgPSB0aGlzLmN1cnJlbnRZZWFyIC0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZFllYXIgPSB0aGlzLmN1cnJlbnRZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbm93JzpcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFllYXIgPSB0aGlzLmN1cnJlbnRZZWFyIC0gNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kWWVhciA9IHRoaXMuY3VycmVudFllYXIgKyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WWVhciA9IHRoaXMuY3VycmVudFllYXIgLSA1MDtcclxuICAgICAgICAgICAgICAgICAgICBlbmRZZWFyID0gdGhpcy5jdXJyZW50WWVhciArIDUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVNb2RlID09PSAnZnV0dXJlJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gc3RhcnRZZWFyOyBpIDw9IGVuZFllYXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBlbmRZZWFyOyBpID49IHN0YXJ0WWVhcjsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcnMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHllYXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhZGp1c3REYXkoKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXlzID0gdGhpcy5kYXlMaXN0KHRoaXMubW9udGgsIHRoaXMueWVhcik7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbW9udGhseSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAneWVhcmx5JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRheSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRheXMubGVuZ3RoICE9PSBkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXkgPiBkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRheXMgPSBkYXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhZGp1c3RXZWVrKCkge1xyXG4gICAgICAgICAgICBsZXQgd2Vla3MgPSB0aGlzLndlZWtMaXN0KHRoaXMubW9udGgsIHRoaXMueWVhcik7XHJcbiAgICAgICAgICAgIHRoaXMud2VlayA9IHRoaXMuZ2V0V2Vla0J5RGF0ZSh0aGlzLndlZWssIHRoaXMubW9udGggLSAxLCB0aGlzLnllYXIpO1xyXG4gICAgICAgICAgICB0aGlzLndlZWtzID0gd2Vla3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFZhbHVlKHYpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBEYXRlLCBkYXk6IG51bWJlciwgbW9udGg6IG51bWJlciwgeWVhcjogbnVtYmVyLCB3ZWVrOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZSA9IHYgPyBuZXcgRGF0ZSh2KSA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIERlZmluZSB2YWx1ZXNcclxuICAgICAgICAgICAgZGF5ID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENEYXRlKCkgOiBudWxsO1xyXG4gICAgICAgICAgICBtb250aCA9IHZhbHVlID8gdmFsdWUuZ2V0VVRDTW9udGgoKSArIDEgOiBudWxsO1xyXG4gICAgICAgICAgICB5ZWFyID0gdmFsdWUgPyB2YWx1ZS5nZXRVVENGdWxsWWVhcigpIDogbnVsbDtcclxuICAgICAgICAgICAgd2VlayA9IHZhbHVlID8gdGhpcy5nZXRXZWVrQnlEYXRlKGRheSwgbW9udGggLSAxLCB5ZWFyKSA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIEV4aXQgaWYgbm90aGluZyB0byB1cGRhdGVcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF5ID09PSBkYXkgJiYgdGhpcy5tb250aCA9PT0gbW9udGggJiYgdGhpcy55ZWFyID09PSB5ZWFyICYmIHRoaXMud2VlayA9PT0gd2Vlaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgdG8gc2NvcGVcclxuICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXk7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBtb250aDtcclxuICAgICAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcclxuICAgICAgICAgICAgdGhpcy53ZWVrID0gd2VlaztcclxuXHJcbiAgICAgICAgICAgIC8vIERlZmluZSBkYXRhIHNvdXJjZXNcclxuICAgICAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5kYXlMaXN0KHRoaXMubW9udGgsIHRoaXMueWVhcik7XHJcbiAgICAgICAgICAgIHRoaXMud2Vla3MgPSB0aGlzLndlZWtMaXN0KHRoaXMubW9udGgsIHRoaXMueWVhcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0VmFsdWUoKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCAtIDEsIHRoaXMud2VlaywgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSAtIHZhbHVlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCAtIDEsIHRoaXMuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUuZ2V0VGltZSgpIC0gdmFsdWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmV2U3RhdGUgPSBfLmNsb25lRGVlcCh0aGlzLmN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRlcmFuZ2U6IG5nLklDb21wb25lbnRPcHRpb25zID0ge1xyXG4gICAgICAgIGJpbmRpbmdzOiBEYXRlUmFuZ2VCaW5kaW5ncyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2RhdGVfcmFuZ2UvRGF0ZVJhbmdlLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IERhdGVSYW5nZUNvbnRyb2xsZXIgXHJcblxyXG4gICAgfTtcclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdwaXBEYXRlUmFuZ2UnLCBbJ3BpcERhdGVzLlRlbXBsYXRlcyddKVxyXG4gICAgICAgIC5jb21wb25lbnQoJ3BpcERhdGVSYW5nZScsIGRhdGVyYW5nZSlcclxufSkoKTtcclxuIiwie1xyXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlRmlsdGVyKCRpbmplY3RvcjogYW5ndWxhci5hdXRvLklJbmplY3RvclNlcnZpY2UpIHtcclxuICAgICAgICBsZXQgcGlwVHJhbnNsYXRlOiBhbnkgPSAkaW5qZWN0b3IuaGFzKCdwaXBUcmFuc2xhdGUnKSBcclxuICAgICAgICAgICAgPyAkaW5qZWN0b3IuZ2V0KCdwaXBUcmFuc2xhdGUnKSA6IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHBpcFRyYW5zbGF0ZSAgPyBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKGtleSkgfHwga2V5IDoga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgncGlwRGF0ZXMuVHJhbnNsYXRlJywgW10pXHJcbiAgICAgICAgLmZpbHRlcigndHJhbnNsYXRlJywgdHJhbnNsYXRlRmlsdGVyKTtcclxufSIsImFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcycsIFtcclxuICAgICdwaXBEYXRlJyxcclxuICAgICdwaXBEYXRlLkNvbW1vbicsXHJcbiAgICAncGlwVGltZVJhbmdlJyxcclxuICAgICdwaXBUaW1lUmFuZ2VFZGl0JyxcclxuICAgICdwaXBEYXRlUmFuZ2UnLFxyXG4gICAgJ3BpcERhdGVzLlRyYW5zbGF0ZSdcclxuXSk7XHJcbiIsIlxyXG4oKCkgPT4ge1xyXG4gICAgY2xhc3MgVGltZVJhbmdlRGF0YSB7XHJcbiAgICAgICAgc3RhcnQ6IGFueTtcclxuICAgICAgICBlbmQ6IGFueTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSVRpbWVSYW5nZUJpbmRpbmdzIHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gICAgICAgIHN0YXJ0OiBhbnk7XHJcbiAgICAgICAgZW5kOiBhbnk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVGltZVJhbmdlQmluZGluZ3M6IElUaW1lUmFuZ2VCaW5kaW5ncyA9IHtcclxuICAgICAgICBzdGFydDogJzw/cGlwU3RhcnREYXRlJyxcclxuICAgICAgICBlbmQ6ICc8P3BpcEVuZERhdGUnXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgVGltZVJhbmdlQ2hhbmdlcyBpbXBsZW1lbnRzIG5nLklPbkNoYW5nZXNPYmplY3QsIElUaW1lUmFuZ2VCaW5kaW5ncyB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogbmcuSUNoYW5nZXNPYmplY3Q8YW55PjtcclxuXHJcbiAgICAgICAgc3RhcnQ6IG5nLklDaGFuZ2VzT2JqZWN0PGFueT47XHJcbiAgICAgICAgZW5kOiBuZy5JQ2hhbmdlc09iamVjdDxhbnk+O1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFRpbWVSYW5nZUNvbnRyb2xsZXIge1xyXG4gICAgICAgIHB1YmxpYyBkYXRhOiBUaW1lUmFuZ2VEYXRhO1xyXG4gICAgICAgIHB1YmxpYyBzdGFydDogYW55O1xyXG4gICAgICAgIHB1YmxpYyBlbmQ6IGFueTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoJHNjb3BlOiBuZy5JU2NvcGUsICRhdHRyczogbmcuSUF0dHJpYnV0ZXMsICRlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3IFRpbWVSYW5nZURhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVTdGFydERhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVFbmREYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygncGlwLXRpbWUtcmFuZ2UnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyAkb25DaGFuZ2VzKGNoYW5nZXM6IFRpbWVSYW5nZUNoYW5nZXMpIHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMuc3RhcnQgJiYgY2hhbmdlcy5zdGFydC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmluZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmVuZCAmJiBjaGFuZ2VzLmVuZC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lbmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVFbmREYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0RGF0ZUpTT04odmFsdWU6IGFueSk6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBkZWZpbmVTdGFydERhdGUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0ICE9PSBudWxsICYmIHRoaXMuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXJ0ID0gXy5pc0RhdGUodGhpcy5zdGFydCkgPyB0aGlzLnN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldERhdGVKU09OKHRoaXMuc3RhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGRlZmluZUVuZERhdGUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZCAhPT0gbnVsbCAmJiB0aGlzLmVuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZW5kID0gXy5pc0RhdGUodGhpcy5lbmQpID8gdGhpcy5lbmRcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0RGF0ZUpTT04odGhpcy5lbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRvQm9vbGVhbih2YWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gJzEnIHx8IHZhbHVlID09ICd0cnVlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVGltZVJhbmdlQ29tcG9uZW50OiBuZy5JQ29tcG9uZW50T3B0aW9ucyA9IHtcclxuICAgICAgICBiaW5kaW5nczogVGltZVJhbmdlQmluZGluZ3MsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0aW1lX3JhbmdlL1RpbWVSYW5nZS5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBUaW1lUmFuZ2VDb250cm9sbGVyXHJcbiAgICB9XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ3BpcFRpbWVSYW5nZScsIFtdKVxyXG4gICAgICAgIC5jb21wb25lbnQoJ3BpcFRpbWVSYW5nZScsIFRpbWVSYW5nZUNvbXBvbmVudCk7XHJcblxyXG59KSgpO1xyXG4iLCJleHBvcnQgY29uc3QgSW50ZXJ2YWxUaW1lUmFuZ2UgPSAzMDtcclxuZXhwb3J0IGNvbnN0IE1pbnV0ZXNJbkhvdXIgPSA2MDtcclxuZXhwb3J0IGNvbnN0IEhvdXJzSW5EYXkgPSAyNDtcclxuZXhwb3J0IGNvbnN0IE1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcclxuXHJcbntcclxuICAgIGNsYXNzIFRpbWVSYW5nZUVkaXREYXRhIHtcclxuICAgICAgICBlbmRUaW1lOiBudW1iZXI7XHJcbiAgICAgICAgc3RhcnRUaW1lOiBudW1iZXI7XHJcbiAgICAgICAgc3RhcnREYXRlOiBEYXRlO1xyXG4gICAgICAgIGVuZERhdGU6IERhdGU7XHJcbiAgICAgICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgICAgICBiaW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGludGVyZmFjZSBJVGltZVJhbmdlRWRpdEJpbmRpbmdzIHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gICAgICAgIHBpcFN0YXJ0RGF0ZTogYW55LFxyXG4gICAgICAgIHBpcENoYW5nZWQ6IGFueSxcclxuICAgICAgICBwaXBFbmREYXRlOiBhbnksXHJcbiAgICAgICAgcGlwU3RhcnRMYWJlbDogYW55LFxyXG4gICAgICAgIHBpcEVuZExhYmVsOiBhbnksXHJcbiAgICAgICAgZGlzYWJsZWQ6IGFueSxcclxuICAgICAgICBwaXBIaWRlVGltZTogYW55LFxyXG4gICAgICAgIHBpcFNpemU6IGFueVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFRpbWVSYW5nZUVkaXRCaW5kaW5nczogSVRpbWVSYW5nZUVkaXRCaW5kaW5ncyA9IHtcclxuICAgICAgICBwaXBTdGFydERhdGU6ICc8JyxcclxuICAgICAgICBwaXBDaGFuZ2VkOiAnPScsXHJcbiAgICAgICAgcGlwRW5kRGF0ZTogJzwnLFxyXG4gICAgICAgIHBpcFN0YXJ0TGFiZWw6ICdAJyxcclxuICAgICAgICBwaXBFbmRMYWJlbDogJ0AnLFxyXG4gICAgICAgIGRpc2FibGVkOiAnJm5nRGlzYWJsZWQnLFxyXG4gICAgICAgIHBpcEhpZGVUaW1lOiAnPScsXHJcbiAgICAgICAgcGlwU2l6ZTogJz0nXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgVGltZVJhbmdlRWRpdENoYW5nZXMgaW1wbGVtZW50cyBuZy5JT25DaGFuZ2VzT2JqZWN0LCBJVGltZVJhbmdlRWRpdEJpbmRpbmdzIHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBuZy5JQ2hhbmdlc09iamVjdDxhbnk+O1xyXG5cclxuICAgICAgICBwaXBTdGFydERhdGU6IG5nLklDaGFuZ2VzT2JqZWN0PGFueT47XHJcbiAgICAgICAgcGlwQ2hhbmdlZDogbmcuSUNoYW5nZXNPYmplY3Q8KHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUpID0+IHZvaWQ+XHJcbiAgICAgICAgcGlwRW5kRGF0ZTogbmcuSUNoYW5nZXNPYmplY3Q8YW55PjtcclxuICAgICAgICBwaXBTdGFydExhYmVsOiBuZy5JQ2hhbmdlc09iamVjdDxzdHJpbmc+O1xyXG4gICAgICAgIHBpcEVuZExhYmVsOiBuZy5JQ2hhbmdlc09iamVjdDxzdHJpbmc+O1xyXG4gICAgICAgIGRpc2FibGVkOiBuZy5JQ2hhbmdlc09iamVjdDwoKSA9PiB2b2lkPjtcclxuICAgICAgICBwaXBIaWRlVGltZTogbmcuSUNoYW5nZXNPYmplY3Q8Ym9vbGVhbj47XHJcbiAgICAgICAgcGlwU2l6ZTogbmcuSUNoYW5nZXNPYmplY3Q8YW55PjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xhc3MgVGltZVJhbmdlRWRpdENvbnRyb2xsZXIge1xyXG4gICAgICAgIHB1YmxpYyBzdGFydExhYmVsOiBzdHJpbmcgPSAnU3RhcnQgdGltZSc7XHJcbiAgICAgICAgcHVibGljIGVuZExhYmVsOiBzdHJpbmcgPSAnRW5kIHRpbWUnO1xyXG4gICAgICAgIHB1YmxpYyBwaXBTdGFydExhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIHBpcEVuZExhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIHB1YmxpYyBwaXBFbmREYXRlOiBhbnk7XHJcbiAgICAgICAgcHVibGljIHBpcFN0YXJ0RGF0ZTogYW55O1xyXG4gICAgICAgIHB1YmxpYyBwaXBIaWRlVGltZTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgcGlwU2l6ZTtcclxuICAgICAgICBwdWJsaWMgc2hvd1RpbWU6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGRhdGE6IFRpbWVSYW5nZUVkaXREYXRhO1xyXG4gICAgICAgIHB1YmxpYyBpbnRlcnZhbFRpbWVDb2xsZWN0aW9uOiBhbnk7XHJcbiAgICAgICAgcHVibGljIGRpc2FibGVkOiAoKSA9PiBib29sZWFuO1xyXG5cclxuICAgICAgICBwdWJsaWMgcGlwQ2hhbmdlZDogKHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlICRpbmplY3RvcjogYW5ndWxhci5hdXRvLklJbmplY3RvclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcGlwRGF0ZUNvbnZlcnQsXHJcbiAgICAgICAgICAgIHByaXZhdGUgJHNjb3BlOiBuZy5JU2NvcGUsXHJcbiAgICAgICAgICAgICRlbGVtZW50OiBKUXVlcnkpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lQ29sbGVjdGlvbiA9IHRoaXMuZ2V0VGltZUludGVydmFsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG5ldyBUaW1lUmFuZ2VFZGl0RGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGNsYXNzXHJcbiAgICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKCdwaXAtdGltZS1yYW5nZS1lZGl0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgJG9uQ2hhbmdlcyhjaGFuZ2VzOiBUaW1lUmFuZ2VFZGl0Q2hhbmdlcykge1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5waXBTdGFydERhdGUgJiYgY2hhbmdlcy5waXBTdGFydERhdGUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpcFN0YXJ0RGF0ZSA9IGNoYW5nZXMucGlwU3RhcnREYXRlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lRGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLnBpcEVuZERhdGUgJiYgY2hhbmdlcy5waXBFbmREYXRlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXBFbmREYXRlID0gY2hhbmdlcy5waXBFbmREYXRlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lRGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGUoKSB7XHJcbiAgICAgICAgICAgIGxldCBwaXBUcmFuc2xhdGU6IGFueSA9IHRoaXMuJGluamVjdG9yLmhhcygncGlwVHJhbnNsYXRlJykgPyB0aGlzLiRpbmplY3Rvci5nZXQoJ3BpcFRyYW5zbGF0ZScpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwaXBUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIHBpcFRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbnMoJ2VuJywge1xyXG4gICAgICAgICAgICAgICAgICAgIEVWRU5UX05FV19TVEFSVF9USU1FOiAnU3RhcnQgdGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgRVZFTlRfTkVXX0VORF9USU1FOiAnRW5kIHRpbWUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHBpcFRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbnMoJ3J1Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIEVWRU5UX05FV19TVEFSVF9USU1FOiAn0J3QsNGH0LDQu9C+JyxcclxuICAgICAgICAgICAgICAgICAgICBFVkVOVF9ORVdfRU5EX1RJTUU6ICfQmtC+0L3QtdGGJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TGFiZWwgPSB0aGlzLnBpcFN0YXJ0TGFiZWwgPyBwaXBUcmFuc2xhdGUudHJhbnNsYXRlKHRoaXMucGlwU3RhcnRMYWJlbClcclxuICAgICAgICAgICAgICAgICAgICA6IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ0VWRU5UX05FV19TVEFSVF9USU1FJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZExhYmVsID0gdGhpcy5waXBFbmRMYWJlbCA/IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5waXBFbmRMYWJlbClcclxuICAgICAgICAgICAgICAgICAgICA6IHBpcFRyYW5zbGF0ZS50cmFuc2xhdGUoJ0VWRU5UX05FV19FTkRfVElNRScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERhdGVKU09OKHZhbHVlOiBhbnkpOiBEYXRlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2V0RHVyYXRpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCwgZW5kO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc3RhcnREYXRlIHx8ICF0aGlzLmRhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gbmV3IERhdGUodGhpcy5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyB0aGlzLmRhdGEuc3RhcnRUaW1lICogTWludXRlc0luSG91ciAqIE1pbGxpc2Vjb25kc0luU2Vjb25kKTtcclxuICAgICAgICAgICAgZW5kID0gbmV3IERhdGUodGhpcy5kYXRhLmVuZERhdGUuZ2V0VGltZSgpICsgdGhpcy5kYXRhLmVuZFRpbWUgKiBNaW51dGVzSW5Ib3VyICogTWlsbGlzZWNvbmRzSW5TZWNvbmQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGVuZCAtIHN0YXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2YWxpZGF0ZVN0YXJ0RGF0ZSgpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGU6IERhdGUsIHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUsIGVuZFRpbWU6IG51bWJlciwgc3RhcnRUaW1lOiBudW1iZXI7XHJcbiAgICAgICAgICAgIC8vINC10YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQvdC1INC30LDQtNCw0L3QsCwg0L7QsdC90YPQu9GP0LXQvCDQuCDQstGL0YXQvtC00LjQvFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zdGFydERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g0LVj0LvQuCDQvdC1INC30LDQtNCw0L3QviDQvdCw0YfQsNC70YzQvdC+0LUg0LLRgNC10LzRjyAtINC30LDQtNCw0LXQvCDQtdCz0L5cclxuICAgICAgICAgICAgaWYgKF8uaXNVbmRlZmluZWQodGhpcy5kYXRhLnN0YXJ0VGltZSkgfHwgXy5pc051bGwodGhpcy5kYXRhLnN0YXJ0VGltZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmVuZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gZGF0ZS5nZXRUaW1lKCkgLSB0aGlzLnBpcERhdGVDb252ZXJ0LnRvU3RhcnREYXkoZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXJ0VGltZSA9IE1hdGguZmxvb3Ioc3RhcnRUaW1lIC8gKEludGVydmFsVGltZVJhbmdlICogTWludXRlc0luSG91ciAqIE1pbGxpc2Vjb25kc0luU2Vjb25kKSkgKiBJbnRlcnZhbFRpbWVSYW5nZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXJ0VGltZSA9IHRoaXMuZGF0YS5lbmRUaW1lID09PSAwID8gMCA6IHRoaXMuZGF0YS5lbmRUaW1lIC0gSW50ZXJ2YWxUaW1lUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gbmV3IERhdGUodGhpcy5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyB0aGlzLmRhdGEuc3RhcnRUaW1lICogTWludXRlc0luSG91ciAqIE1pbGxpc2Vjb25kc0luU2Vjb25kKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC10YHRgtGMINC00LvQuNGC0LXQu9GM0L3QvtGB0YLRjCwg0YLQviDRgdC+0YXRgNCw0L3Rj9C10Lwg0LXQtS4g0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMINC80L7QttC90L4g0LjQt9C80LXQvdC40YLRjCDRgtC+0LvRjNC60L4g0LjQt9C80LXQvdGP0Y8g0LrQvtC90LXRh9C90YPRjiDQtNCw0YLRg1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyB0aGlzLmRhdGEuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVuZERhdGUgPSB0aGlzLnBpcERhdGVDb252ZXJ0LnRvU3RhcnREYXkoZW5kKTtcclxuICAgICAgICAgICAgICAgIGVuZFRpbWUgPSBlbmQuZ2V0VGltZSgpIC0gdGhpcy5kYXRhLmVuZERhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVuZFRpbWUgPSBNYXRoLmZsb29yKGVuZFRpbWUgLyAoSW50ZXJ2YWxUaW1lUmFuZ2UgKiBNaW51dGVzSW5Ib3VyICogTWlsbGlzZWNvbmRzSW5TZWNvbmQpKSAqIEludGVydmFsVGltZVJhbmdlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L3QtdGCINC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDRgdGA0LDQstC90LjQstCw0LXQvCDQtNCw0YLRi1xyXG4gICAgICAgICAgICAgICAgZW5kID0gbmV3IERhdGUodGhpcy5kYXRhLmVuZERhdGUuZ2V0VGltZSgpICsgdGhpcy5kYXRhLmVuZFRpbWUgKiBNaW51dGVzSW5Ib3VyICogTWlsbGlzZWNvbmRzSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID49IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQsdC+0LvRjNGI0LUsINGC0L4g0LTQstC40LPQsNC10Lwg0LrQvtC90LXRh9C90YPRjiDQtNCw0YLRg1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lbmREYXRlID0gdGhpcy5waXBEYXRlQ29udmVydC50b1N0YXJ0RGF5KG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArIChJbnRlcnZhbFRpbWVSYW5nZSAqIE1pbnV0ZXNJbkhvdXIgKiBNaWxsaXNlY29uZHNJblNlY29uZCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZW5kVGltZSA9ICh0aGlzLmRhdGEuc3RhcnRUaW1lICsgSW50ZXJ2YWxUaW1lUmFuZ2UpICUgKEhvdXJzSW5EYXkgKiBNaW51dGVzSW5Ib3VyKTsgLy8g0LzQuNC90YPRgiDQsiDRgdGD0YLQutCw0YVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXJ0VGltZSA9IE1hdGgucm91bmQodGhpcy5kYXRhLnN0YXJ0VGltZSAvIEludGVydmFsVGltZVJhbmdlKSAqIEludGVydmFsVGltZVJhbmdlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgdmFsaWRhdGVFbmREYXRlKCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogYW55LCBzdGFydDogRGF0ZSwgZW5kOiBEYXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVuZFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g0LVj0LvQuCDQvdC1INC30LDQtNCw0L3QviDQutC+0L3QtdGH0L3QvtC1INCy0YDQtdC80Y8gLSDQt9Cw0LTQsNC10Lwg0LXQs9C+XHJcbiAgICAgICAgICAgIGlmIChfLmlzVW5kZWZpbmVkKHRoaXMuZGF0YS5lbmRUaW1lKSB8fCBfLmlzTnVsbCh0aGlzLmRhdGEuZW5kVGltZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBkYXRlLmdldFRpbWUoKSAtIHRoaXMucGlwRGF0ZUNvbnZlcnQudG9TdGFydERheShkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZW5kVGltZSA9IE1hdGguZmxvb3IoZGF0ZSAvIChJbnRlcnZhbFRpbWVSYW5nZSAqIE1pbnV0ZXNJbkhvdXIgKiBNaWxsaXNlY29uZHNJblNlY29uZCkpICogSW50ZXJ2YWxUaW1lUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lbmRUaW1lID0gdGhpcy5kYXRhLnN0YXJ0VGltZSA9PT0gKEhvdXJzSW5EYXkgKiBNaW51dGVzSW5Ib3VyIC0gSW50ZXJ2YWxUaW1lUmFuZ2UpID8gKEhvdXJzSW5EYXkgKiBNaW51dGVzSW5Ib3VyIC0gSW50ZXJ2YWxUaW1lUmFuZ2UpIDogdGhpcy5kYXRhLnN0YXJ0VGltZSArIEludGVydmFsVGltZVJhbmdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKHRoaXMuZGF0YS5zdGFydERhdGUuZ2V0VGltZSgpICsgdGhpcy5kYXRhLnN0YXJ0VGltZSAqIE1pbnV0ZXNJbkhvdXIgKiBNaWxsaXNlY29uZHNJblNlY29uZCk7XHJcbiAgICAgICAgICAgIGVuZCA9IG5ldyBEYXRlKHRoaXMuZGF0YS5lbmREYXRlLmdldFRpbWUoKSArIHRoaXMuZGF0YS5lbmRUaW1lICogTWludXRlc0luSG91ciAqIE1pbGxpc2Vjb25kc0luU2Vjb25kKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHtcclxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQtNCw0YLQsCDQsdC+0LvRjNGI0LUsINGC0L4g0LTQstC40LPQsNC10Lwg0L3QsNGH0LDQu9GM0L3Rg9GOINC00LDRgtGDXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3RhcnREYXRlID0gdGhpcy5waXBEYXRlQ29udmVydC50b1N0YXJ0RGF5KG5ldyBEYXRlKGVuZC5nZXRUaW1lKCkgLSBJbnRlcnZhbFRpbWVSYW5nZSAqIE1pbnV0ZXNJbkhvdXIgKiBNaWxsaXNlY29uZHNJblNlY29uZCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXJ0VGltZSA9IHRoaXMuZGF0YS5lbmRUaW1lICUgKEhvdXJzSW5EYXkgKiBNaW51dGVzSW5Ib3VyKSA9PT0gMCA/IChIb3Vyc0luRGF5ICogTWludXRlc0luSG91ciAtIEludGVydmFsVGltZVJhbmdlKSA6IHRoaXMuZGF0YS5lbmRUaW1lIC0gSW50ZXJ2YWxUaW1lUmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5lbmRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLmRhdGEuZW5kVGltZSAvIEludGVydmFsVGltZVJhbmdlKSAqIEludGVydmFsVGltZVJhbmdlO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZHVyYXRpb24gPSB0aGlzLnNldER1cmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNldERhdGUoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YSkgdGhpcy5kYXRhID0gbmV3IFRpbWVSYW5nZUVkaXREYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5iaW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuZGF0YS5zdGFydFRpbWUgPyB0aGlzLmRhdGEuc3RhcnRUaW1lICogTWludXRlc0luSG91ciAqIE1pbGxpc2Vjb25kc0luU2Vjb25kIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlwU3RhcnREYXRlID0gbmV3IERhdGUodGhpcy5kYXRhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgKyB0aW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5kYXRhLmVuZFRpbWUgPyB0aGlzLmRhdGEuZW5kVGltZSAqIE1pbnV0ZXNJbkhvdXIgKiBNaWxsaXNlY29uZHNJblNlY29uZCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpcEVuZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGEuZW5kRGF0ZS5nZXRUaW1lKCkgKyB0aW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhLmJpbmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBkZWZpbmVEYXRlKCkge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnQ6IERhdGUsIGVuZDogRGF0ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGlwU3RhcnREYXRlICE9PSBudWxsICYmIHRoaXMucGlwU3RhcnREYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gXy5pc0RhdGUodGhpcy5waXBTdGFydERhdGUpID8gdGhpcy5waXBTdGFydERhdGUgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghc3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMuZ2V0RGF0ZUpTT04odGhpcy5waXBTdGFydERhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydERhdGUgPSB0aGlzLnBpcERhdGVDb252ZXJ0LnRvU3RhcnREYXkoc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXJ0VGltZSA9ICg8YW55Pm5ldyBEYXRlKHN0YXJ0KSAtIDxhbnk+dGhpcy5kYXRhLnN0YXJ0RGF0ZSkgLyAoTWludXRlc0luSG91ciAqIE1pbGxpc2Vjb25kc0luU2Vjb25kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGlwRW5kRGF0ZSAhPT0gbnVsbCAmJiB0aGlzLnBpcEVuZERhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZW5kID0gXy5pc0RhdGUodGhpcy5waXBFbmREYXRlKSA/IHRoaXMucGlwRW5kRGF0ZSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSB0aGlzLmdldERhdGVKU09OKHRoaXMucGlwRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVuZERhdGUgPSB0aGlzLnBpcERhdGVDb252ZXJ0LnRvU3RhcnREYXkoZW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lbmRUaW1lID0gKDxhbnk+bmV3IERhdGUoZW5kKSAtIDxhbnk+dGhpcy5kYXRhLmVuZERhdGUpIC8gKE1pbnV0ZXNJbkhvdXIgKiBNaWxsaXNlY29uZHNJblNlY29uZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGFydERhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUVuZERhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmR1cmF0aW9uID0gdGhpcy5zZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0VGltZUludGVydmFsKCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0LCBtaW51dGVzOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCAyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gaiAqIEludGVydmFsVGltZVJhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGkgKiBNaW51dGVzSW5Ib3VyICsgbWludXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogXy5wYWQoaS50b1N0cmluZygpLCAzLCAnMCcpLnN1YnN0cigwLCAyKSArICc6JyArIF8ucGFkKG1pbnV0ZXMudG9TdHJpbmcoKSwgMiwgJzAnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b0Jvb2xlYW4odmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gJzEnIHx8IHZhbHVlID09ICd0cnVlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW5pdERhdGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmVuZERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZW5kVGltZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kdXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWUgPSAhdGhpcy50b0Jvb2xlYW4odGhpcy5waXBIaWRlVGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb25DaGFuZ2VTdGFydERhdGUobmV3Vikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlU3RhcnREYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kdXJhdGlvbiA9IHRoaXMuc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGlwQ2hhbmdlZCh0aGlzLnBpcFN0YXJ0RGF0ZSwgdGhpcy5waXBFbmREYXRlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgb25DaGFuZ2VFbmREYXRlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlRW5kRGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZHVyYXRpb24gPSB0aGlzLnNldER1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBpcENoYW5nZWQodGhpcy5waXBTdGFydERhdGUsIHRoaXMucGlwRW5kRGF0ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIG9uQ2hhbmdlU3RhcnRUaW1lKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zdGFydERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydERhdGUgPSB0aGlzLnBpcERhdGVDb252ZXJ0LnRvU3RhcnREYXkobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVN0YXJ0RGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZHVyYXRpb24gPSB0aGlzLnNldER1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBpcENoYW5nZWQodGhpcy5waXBTdGFydERhdGUsIHRoaXMucGlwRW5kRGF0ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIG9uQ2hhbmdlRW5kVGltZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVuZERhdGUgPSB0aGlzLnBpcERhdGVDb252ZXJ0LnRvU3RhcnREYXkobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVFbmREYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kdXJhdGlvbiA9IHRoaXMuc2V0RHVyYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGlwQ2hhbmdlZCh0aGlzLnBpcFN0YXJ0RGF0ZSwgdGhpcy5waXBFbmREYXRlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgaXNEaXNhYmxlZCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBUaW1lUmFuZ2VFZGl0Q29tcG9uZW50OiBuZy5JQ29tcG9uZW50T3B0aW9ucyA9IHtcclxuICAgICAgICBiaW5kaW5nczogVGltZVJhbmdlRWRpdEJpbmRpbmdzLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGltZV9yYW5nZV9lZGl0L1RpbWVSYW5nZUVkaXQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogVGltZVJhbmdlRWRpdENvbnRyb2xsZXJcclxuICAgIH07XHJcbiAgICBhbmd1bGFyLm1vZHVsZSgncGlwVGltZVJhbmdlRWRpdCcsIFtdKVxyXG4gICAgICAgIC5jb21wb25lbnQoJ3BpcFRpbWVSYW5nZUVkaXQnLCBUaW1lUmFuZ2VFZGl0Q29tcG9uZW50KVxyXG5cclxufVxyXG4iLCIoZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2RhdGUvRGF0ZS5odG1sJyxcbiAgICAnPGRpdiBjbGFzcz1cInBpcC1kYXRlIGxheW91dC1yb3cgZmxleFwiIHRhYmluZGV4PVwiLTFcIj5cXG4nICtcbiAgICAnXHQ8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIj5cXG4nICtcbiAgICAnXHRcdDxtZC1zZWxlY3QgY2xhc3M9XCJwaXAtZGF0ZS1kYXkgZmxleFwiIG5nLWRpc2FibGVkPVwiJGN0cmwuZGlzYWJsZUNvbnRyb2xzXCJcXG4nICtcbiAgICAnXHRcdFx0XHQgICBuZy1tb2RlbD1cIiRjdHJsLmRheVwiIHBsYWNlaG9sZGVyPVwie3skY3RybC5kYXlMYWJlbH19XCIgbmctY2hhbmdlPVwiJGN0cmwuc2V0VmFsdWUoKVwiPlxcbicgK1xuICAgICdcdFx0XHQ8bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0XCIgbmctcmVwZWF0PVwib3B0IGluICRjdHJsLmRheXMgdHJhY2sgYnkgb3B0XCI+e3s6OiBvcHQgfX08L21kLW9wdGlvbj5cXG4nICtcbiAgICAnXHRcdDwvbWQtc2VsZWN0PlxcbicgK1xuICAgICdcdDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcdDxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXItc2VwYXJhdG9yIGZsZXgtZml4ZWRcIj48L2Rpdj5cXG4nICtcbiAgICAnXHQ8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIj5cXG4nICtcbiAgICAnXHRcdDxtZC1zZWxlY3QgY2xhc3M9XCJwaXAtZGF0ZS1tb250aGZsZXhcIiBuZy1kaXNhYmxlZD1cIiRjdHJsLmRpc2FibGVDb250cm9sc1wiXFxuJyArXG4gICAgJ1x0XHRcdFx0ICAgbmctbW9kZWw9XCIkY3RybC5tb250aFwiIHBsYWNlaG9sZGVyPVwie3skY3RybC5tb250aExhYmVsfX1cIiBuZy1jaGFuZ2U9XCIkY3RybC5vbk1vbnRoQ2hhbmdlZCgpXCI+XFxuJyArXG4gICAgJ1x0XHRcdDxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHQuaWRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4gJGN0cmwubW9udGhzIHRyYWNrIGJ5IG9wdC5pZFwiPnt7Ojogb3B0Lm5hbWUgfX08L21kLW9wdGlvbj5cXG4nICtcbiAgICAnXHRcdDwvbWQtc2VsZWN0PlxcbicgK1xuICAgICdcdDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcdDxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXItc2VwYXJhdG9yIGZsZXgtZml4ZWRcIj48L2Rpdj5cXG4nICtcbiAgICAnXHQ8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIj5cXG4nICtcbiAgICAnXHRcdDxtZC1zZWxlY3QgY2xhc3M9XCJwaXAtZGF0ZS15ZWFyIGZsZXhcIiBuZy1kaXNhYmxlZD1cIiRjdHJsLmRpc2FibGVDb250cm9sc1wiXFxuJyArXG4gICAgJ1x0XHRcdFx0ICAgbmctbW9kZWw9XCIkY3RybC55ZWFyXCIgcGxhY2Vob2xkZXI9XCJ7eyRjdHJsLnllYXJMYWJlbH19XCIgbmctY2hhbmdlPVwiJGN0cmwub25ZZWFyQ2hhbmdlZCgpXCI+XFxuJyArXG4gICAgJ1x0XHRcdDxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4gJGN0cmwueWVhcnMgdHJhY2sgYnkgb3B0XCI+e3s6OiBvcHQgfX08L21kLW9wdGlvbj5cXG4nICtcbiAgICAnXHRcdDwvbWQtc2VsZWN0PlxcbicgK1xuICAgICdcdDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnXHRcdFx0XHRcdCcpO1xufV0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKG1vZHVsZSkge1xudHJ5IHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVzLlRlbXBsYXRlcycpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJywgW10pO1xufVxubW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCdkYXRlX3JhbmdlL0RhdGVSYW5nZS5odG1sJyxcbiAgICAnPGRpdiBjbGFzcz1cInBpcC1kYXRlLXJhbmdlIGxheW91dC1yb3cgZmxleFwiIHRhYmluZGV4PVwiLTFcIj5cXG4nICtcbiAgICAnICAgIDxtZC1pbnB1dC1jb250YWluZXIgbmctc2hvdz1cIiRjdHJsLmlzRGF5KClcIiBjbGFzcz1cImlucHV0LWNvbnRhaW5lciBwaXAtZGF5IGZsZXhcIlxcbicgK1xuICAgICcgICAgICAgICAgICBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJGN0cmwuJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3QtZGF5XCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVwie1xcJ3BpcC1uby1saW5lXFwnIDogJGN0cmwucGlwTm9MaW5lfVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlPVwie3skY3RybC5kaXNhYmxlQ29udHJvbHN9fVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBtZC1vbi1vcGVuPVwiJGN0cmwub25EYXlDbGljaygpXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJGN0cmwuZGF5XCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIG5nLWNoYW5nZT1cIiRjdHJsLnNldFZhbHVlKClcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyRjdHJsLmRheUxhYmVsfX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRBWVwiPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdFwiIG5nLXJlcGVhdD1cIm9wdCBpbiAkY3RybC5kYXlzIHRyYWNrIGJ5IG9wdCBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAge3skY3RybC5uYW1lRGF5c1skaW5kZXhdfX0ge3sgb3B0IH19XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvbWQtb3B0aW9uPlxcbicgK1xuICAgICcgICAgICAgIDwvbWQtc2VsZWN0PlxcbicgK1xuICAgICcgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgICA8bWQtaW5wdXQtY29udGFpbmVyIG5nLXNob3c9XCIkY3RybC5pc1dlZWsoKVwiIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJGN0cmwuJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3Qtd2Vla1wiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6ICRjdHJsLnBpcE5vTGluZX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZT1cInt7JGN0cmwuZGlzYWJsZUNvbnRyb2xzfX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkY3RybC53ZWVrXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIG5nLWNoYW5nZT1cIiRjdHJsLm9uV2Vla0NoYW5nZSgpXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3skY3RybC53ZWVrTGFiZWx9fVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV0VFS1wiPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiAkY3RybC53ZWVrcyB0cmFjayBieSBvcHQuaWRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIHt7IG9wdC5uYW1lIH19XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvbWQtb3B0aW9uPlxcbicgK1xuICAgICcgICAgICAgIDwvbWQtc2VsZWN0PlxcbicgK1xuICAgICcgICAgPC9tZC1pbnB1dC1jb250YWluZXIgPlxcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cImZsZXgtZml4ZWRcIlxcbicgK1xuICAgICcgICAgICAgICBuZy1jbGFzcz1cIntcXCdzcGFjZTE2XFwnOiAkY3RybC4kbWRNZWRpYShcXCdndC14c1xcJyksIFxcJ3NwYWNlOFxcJzogICRjdHJsLiRtZE1lZGlhKFxcJ3hzXFwnKX1cIlxcbicgK1xuICAgICcgICAgICAgICBuZy1zaG93PVwiJGN0cmwuaXNEYXkoKSB8fCAkY3RybC5pc1dlZWsoKVwiPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtaW5wdXQtY29udGFpbmVyIG5nLXNob3c9XCIkY3RybC5pc01vbnRoKCkgJiYgISRjdHJsLm1vbnRoRm9ybWF0U2hvcnQgXCIgY2xhc3M9XCJpbnB1dC1jb250YWluZXIgZmxleFwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVwie1xcJ2ZsZXgtZml4ZWRcXCcgOiAkY3RybC4kbWRNZWRpYShcXCdndC14c1xcJyl9XCI+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLXNlbGVjdCBjbGFzcz1cInNlbGVjdC1tb250aFwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6ICRjdHJsLnBpcE5vTGluZX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZT1cInt7JGN0cmwuZGlzYWJsZUNvbnRyb2xzfX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbWQtb24tb3Blbj1cIiRjdHJsLm9uTW9udGhDbGljaygpXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJGN0cmwubW9udGhcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbmctY2hhbmdlPVwiJGN0cmwub25Nb250aENoYW5nZWQoKVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7JGN0cmwubW9udGhMYWJlbH19XCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNT05USFwiPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiAkY3RybC5tb250aHMgdHJhY2sgYnkgb3B0LmlkXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICB7eyBvcHQubmFtZSB9fVxcbicgK1xuICAgICcgICAgICAgICAgICA8L21kLW9wdGlvbj5cXG4nICtcbiAgICAnICAgICAgICA8L21kLXNlbGVjdD5cXG4nICtcbiAgICAnICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgICAgPG1kLWlucHV0LWNvbnRhaW5lciBuZy1zaG93PVwiJGN0cmwuaXNNb250aCgpICYmICRjdHJsLm1vbnRoRm9ybWF0U2hvcnRcIiBjbGFzcz1cImZsZXggaW5wdXQtY29udGFpbmVyXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7XFwnZmxleC1maXhlZFxcJyA6ICRjdHJsLiRtZE1lZGlhKFxcJ2d0LXhzXFwnKX1cIj5cXG4nICtcbiAgICAnICAgICAgICA8bWQtc2VsZWN0IGNsYXNzPVwic2VsZWN0LW1vbnRoXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVwie1xcJ3BpcC1uby1saW5lXFwnIDogJGN0cmwucGlwTm9MaW5lfVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlPVwie3skY3RybC5kaXNhYmxlQ29udHJvbHN9fVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBtZC1vbi1vcGVuPVwiJGN0cmwub25Nb250aENsaWNrKClcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkY3RybC5tb250aFwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBuZy1jaGFuZ2U9XCIkY3RybC5vbk1vbnRoQ2hhbmdlZCgpXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3skY3RybC5tb250aExhYmVsfX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1PTlRIXCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgICAgICAgICA8bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0LmlkXCIgbmctcmVwZWF0PVwib3B0IGluICRjdHJsLnNob3J0TW9udGhzIHRyYWNrIGJ5IG9wdC5pZFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAge3sgb3B0Lm5hbWUgfX1cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJmbGV4LWZpeGVkXCJcXG4nICtcbiAgICAnICAgICAgICAgbmctY2xhc3M9XCJ7XFwnc3BhY2UxNlxcJzogJGN0cmwuJG1kTWVkaWEoXFwnZ3QteHNcXCcpLCBcXCdzcGFjZThcXCc6ICAkY3RybC4kbWRNZWRpYShcXCd4c1xcJyl9XCJcXG4nICtcbiAgICAnICAgICAgICAgbmctc2hvdz1cIiRjdHJsLmlzTW9udGgoKVwiPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyIGZsZXhcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cIntcXCdmbGV4LWZpeGVkXFwnIDogJGN0cmwuJG1kTWVkaWEoXFwnZ3QteHNcXCcpfVwiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1zZWxlY3QgY2xhc3M9XCJzZWxlY3QteWVhclwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cIntcXCdwaXAtbm8tbGluZVxcJyA6ICRjdHJsLnBpcE5vTGluZX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZT1cInt7JGN0cmwuZGlzYWJsZUNvbnRyb2xzfX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbWQtb24tb3Blbj1cIiRjdHJsLm9uWWVhckNsaWNrKClcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkY3RybC55ZWFyXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIG5nLWNoYW5nZT1cIiRjdHJsLm9uWWVhckNoYW5nZWQoKVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7JGN0cmwueWVhckxhYmVsfX1cIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIllFQVJcIj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgICAgICAgIDxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4gJGN0cmwueWVhcnMgdHJhY2sgYnkgb3B0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICB7eyBvcHQgfX1cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnPC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuXG4oZnVuY3Rpb24obW9kdWxlKSB7XG50cnkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRGF0ZXMuVGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3RpbWVfcmFuZ2UvVGltZVJhbmdlLmh0bWwnLFxuICAgICc8cD5cXG4nICtcbiAgICAnICAgIDxzcGFuIG5nLWlmPVwiJGN0cmwuZGF0YS5zdGFydCAhPSBudWxsXCI+e3skY3RybC5kYXRhLnN0YXJ0IHwgZm9ybWF0TG9uZ0RhdGVUaW1lfX08L3NwYW4+XFxuJyArXG4gICAgJyAgICA8c3BhbiAgY2xhc3M9XCJzZXBhcmF0b3JcIiBuZy1pZj1cIiRjdHJsLmRhdGEuc3RhcnQgJiYgJGN0cmwuZGF0YS5lbmRcIj4gLSA8L3NwYW4+XFxuJyArXG4gICAgJyAgICA8c3BhbiBuZy1pZj1cIiRjdHJsLmRhdGEuZW5kICE9IG51bGxcIj57eyRjdHJsLmRhdGEuZW5kIHwgZm9ybWF0TG9uZ0RhdGVUaW1lfX08L3NwYW4+XFxuJyArXG4gICAgJzwvcD4nKTtcbn1dKTtcbn0pKCk7XG5cbihmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBEYXRlcy5UZW1wbGF0ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcERhdGVzLlRlbXBsYXRlcycsIFtdKTtcbn1cbm1vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgndGltZV9yYW5nZV9lZGl0L1RpbWVSYW5nZUVkaXQuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJldmVudC1lZGl0IGxheW91dC1yb3cgbGF5b3V0LXhzLWNvbHVtbiBmbGV4IGxheW91dC1hbGlnbi1zdGFydC1zdGFydFwiPlxcbicgK1xuICAgICcgICAgPGRpdiBmbGV4PVwiNDdcIiBjbGFzcz1cInN0YXJ0LXRpbWUtY29udGFpbmVyIFwiPlxcbicgK1xuICAgICcgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jYXB0aW9uIHRleHQtZ3JleVwiPnt7JGN0cmwuc3RhcnRMYWJlbH19PC9wPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXJvdyBsYXlvdXQtYWxpZ24tc3BhY2UtYmV0d2Vlbi1jZW50ZXJcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpcC1kYXRlcGlja2VyLWNvbnRhaW5lclwiIGZsZXg9XCI0OVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPG1kLWRhdGVwaWNrZXIgbmctbW9kZWw9XCIkY3RybC5kYXRhLnN0YXJ0RGF0ZVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWQtcGxhY2Vob2xkZXI9XCJ7eyRjdHJsLnN0YXJ0TGFiZWx9fVwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jaGFuZ2U9XCIkY3RybC5vbkNoYW5nZVN0YXJ0RGF0ZSgpXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiJGN0cmwuaXNEaXNhYmxlZCgpXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTVEFSVC1EQVRFXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L21kLWRhdGVwaWNrZXI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgICA8ZGl2IGZsZXggbmctaWY9XCIkY3RybC5zaG93VGltZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxtZC1zZWxlY3QgYXJpYS1sYWJlbD1cIlNUQVJULVRJTUVcIiBuZy1tb2RlbD1cIiRjdHJsLmRhdGEuc3RhcnRUaW1lXCIgbmctZGlzYWJsZWQ9XCIkY3RybC5pc0Rpc2FibGVkKClcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctY2hhbmdlPVwiJGN0cmwub25DaGFuZ2VTdGFydFRpbWUoJGN0cmwuZGF0YS5zdGFydFRpbWUpXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1vcHRpb24gbmctdmFsdWU9XCJvcHQuaWRcIiBuZy1yZXBlYXQ9XCJvcHQgaW4gJGN0cmwuaW50ZXJ2YWxUaW1lQ29sbGVjdGlvbiB0cmFjayBieSBvcHQuaWRcIj57eyBvcHQudGltZSB9fVxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L21kLW9wdGlvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L21kLXNlbGVjdD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPGRpdiBmbGV4PVwiNDdcIiBjbGFzcz1cImVuZC10aW1lLWNvbnRhaW5lclwiPlxcbicgK1xuICAgICcgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jYXB0aW9uIHRleHQtZ3JleVwiPnt7JGN0cmwuZW5kTGFiZWx9fTwvcD5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC1yb3cgbGF5b3V0LWFsaWduLXNwYWNlLWJldHdlZW4tY2VudGVyXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXAtZGF0ZXBpY2tlci1jb250YWluZXIgZmxleC00OVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPG1kLWRhdGVwaWNrZXIgbmctbW9kZWw9XCIkY3RybC5kYXRhLmVuZERhdGVcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1kLXBsYWNlaG9sZGVyPVwie3skY3RybC5lbmRMYWJlbH19XCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiJGN0cmwuaXNEaXNhYmxlZCgpXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWNoYW5nZT1cIiRjdHJsLm9uQ2hhbmdlRW5kRGF0ZSgpXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFTkQtREFURVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9tZC1kYXRlcGlja2VyPlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBmbGV4IG5nLWlmPVwiJGN0cmwuc2hvd1RpbWVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8bWQtc2VsZWN0IGFyaWEtbGFiZWw9XCJFTkQtVElNRVwiIG5nLW1vZGVsPVwiJGN0cmwuZGF0YS5lbmRUaW1lXCIgbmctY2hhbmdlPVwiJGN0cmwub25DaGFuZ2VFbmRUaW1lKClcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCIkY3RybC5pc0Rpc2FibGVkKClcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy12YWx1ZT1cIm9wdC5pZFwiIG5nLXJlcGVhdD1cIm9wdCBpbiAkY3RybC5pbnRlcnZhbFRpbWVDb2xsZWN0aW9uIHRyYWNrIGJ5IG9wdC5pZFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0LnRpbWUgfX1cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGlwLXdlYnVpLWRhdGVzLWh0bWwuanMubWFwXG4iXX0=
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
            return _super !== null && _super.apply(this, arguments) || this;
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
Object.defineProperty(exports, "__esModule", { value: true });
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
            return _super !== null && _super.apply(this, arguments) || this;
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
Object.defineProperty(exports, "__esModule", { value: true });
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
Object.defineProperty(exports, "__esModule", { value: true });
},{}],7:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
},{}],12:[function(require,module,exports){
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
                if (!start) {
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



},{}]},{},[13,2,3,4,5,6,7,8,1,9,10,12,11])(13)
});

//# sourceMappingURL=pip-webui-dates.js.map

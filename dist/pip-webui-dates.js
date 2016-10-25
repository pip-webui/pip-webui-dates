(function(module) {
try {
  module = angular.module('pipDates.Templates');
} catch (e) {
  module = angular.module('pipDates.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('date_directive/date.html',
    '<!--\n' +
    '@file Date control content\n' +
    '@copyright Digital Living Software Corp. 2014-2016\n' +
    '-->\n' +
    '\n' +
    '<div class="pip-date layout-row flex" tabindex="-1">\n' +
    '	<md-input-container class="input-container flex">\n' +
    '		<md-select class="pip-date-day flex" ng-disabled="disableControls"\n' +
    '				   ng-model="day" placeholder="{{dayLabel}}" ng-change="onDayChanged()">\n' +
    '			<md-option ng-value="opt" ng-repeat="opt in days track by opt">{{:: opt }}</md-option>\n' +
    '		</md-select>\n' +
    '	</md-input-container>\n' +
    '	<div class="input-container-separator flex-fixed"></div>\n' +
    '	<md-input-container class="input-container flex">\n' +
    '		<md-select class="pip-date-monthflex" ng-disabled="disableControls"\n' +
    '				   ng-model="month" placeholder="{{monthLabel}}" ng-change="onMonthChanged()">\n' +
    '			<md-option ng-value="opt.id" ng-repeat="opt in months track by opt.id">{{:: opt.name }}</md-option>\n' +
    '		</md-select>\n' +
    '	</md-input-container>\n' +
    '	<div class="input-container-separator flex-fixed"></div>\n' +
    '	<md-input-container class="input-container flex">\n' +
    '		<md-select class="pip-date-year flex" ng-disabled="disableControls"\n' +
    '				   ng-model="year" placeholder="{{yearLabel}}" ng-change="onYearChanged()">\n' +
    '			<md-option ng-value="opt" ng-repeat="opt in years track by opt">{{:: opt }}</md-option>\n' +
    '		</md-select>\n' +
    '	</md-input-container>\n' +
    '</div>\n' +
    '					');
}]);
})();

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

/// <reference path="../typings/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('pipDates', [
        'pipDate',
        'pipDateTime',
        'pipDates.Translate'
    ]);
})();

/// <reference path="../../typings/tsd.d.ts" />
var pip;
(function (pip) {
    var datetime;
    (function (datetime) {
        'use strict';
        angular.module('pipDateTime', [
            'pipDateTime.Service', 'pipDateTime.Filter'
        ]);
    })(datetime = pip.datetime || (pip.datetime = {}));
})(pip || (pip = {}));

/// <reference path="../../typings/tsd.d.ts" />
var pip;
(function (pip) {
    var datetime;
    (function (datetime) {
        'use strict';
        formatTimeFilter.$inject = ['pipDateTime'];
        formatDateOptionalFilter.$inject = ['pipDateTime'];
        formatLongDateFilter.$inject = ['pipDateTime'];
        formatShortDateFilter.$inject = ['pipDateTime'];
        formatMonthFilter.$inject = ['pipDateTime'];
        formatLongMonthFilter.$inject = ['pipDateTime'];
        formatYearFilter.$inject = ['pipDateTime'];
        formatWeekFilter.$inject = ['pipDateTime'];
        formatShortWeekFilter.$inject = ['pipDateTime'];
        formatShortDateTimeFilter.$inject = ['pipDateTime'];
        formatLongDateTimeFilter.$inject = ['pipDateTime'];
        formatShortTimeFilter.$inject = ['pipDateTime'];
        formatLongTimeFilter.$inject = ['pipDateTime'];
        formatShortDayOfWeekFilter.$inject = ['pipDateTime'];
        formatLongDayOfWeekFilter.$inject = ['pipDateTime'];
        formatDateNumberFilter.$inject = ['pipDateTime'];
        formatLongDateNumberFilter.$inject = ['pipDateTime'];
        formatTimeNumberFilter.$inject = ['pipDateTime'];
        formatLongTimeNumberFilter.$inject = ['pipDateTime'];
        formatLongMonthDayFilter.$inject = ['pipDateTime'];
        formatShortMonthDayFilter.$inject = ['pipDateTime'];
        formatDateRangeFilter.$inject = ['pipDateTime'];
        formatDateTimeRangeFilter.$inject = ['pipDateTime'];
        formatISOWeekFilter.$inject = ['pipDateTime'];
        formatShortISOWeekFilter.$inject = ['pipDateTime'];
        formatISOWeekOrdinalFilter.$inject = ['pipDateTime'];
        formatDateYFilter.$inject = ['pipDateTime'];
        formatLongDateYFilter.$inject = ['pipDateTime'];
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
        function formatLongDateTimeFilter(pipDateTime) {
            "ngInject";
            return function (value) {
                return pipDateTime.formatLongDateTime(value);
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
        function formatDateNumberFilter(pipDateTime) {
            "ngInject";
            return function (value) {
                return pipDateTime.formatDateNumber(value);
            };
        }
        function formatLongDateNumberFilter(pipDateTime) {
            "ngInject";
            return function (value) {
                return pipDateTime.formatLongDateNumber(value);
            };
        }
        function formatTimeNumberFilter(pipDateTime) {
            "ngInject";
            return function (value) {
                return pipDateTime.formatTimeNumber(value);
            };
        }
        function formatLongTimeNumberFilter(pipDateTime) {
            "ngInject";
            return function (value) {
                return pipDateTime.formatLongTimeNumber(value);
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
    })(datetime = pip.datetime || (pip.datetime = {}));
})(pip || (pip = {}));

/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pip;
(function (pip) {
    var datetime;
    (function (datetime_1) {
        'use strict';
        var DateTime = (function () {
            function DateTime() {
                this._momentRanged = new Array('year', 'month', 'week', 'isoweek', 'day');
                this._defaultFormat = 'LL';
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
                date = moment(value);
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
                date = moment(value);
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
                date = moment(value);
                return date.format(formatMonthYearless);
            };
            DateTime.prototype.formatMonthDay = function (value, basicFormat) {
                var date, format = basicFormat ? basicFormat : this._defaultFormat, formatLL = moment.localeData().longDateFormat(format), formatYearlessLL = formatLL.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');
                if (this.isUndefinedOrNull(value)) {
                    return '';
                }
                date = moment(value);
                return date.format(formatYearlessLL);
            };
            DateTime.prototype.formatRange = function (value1, value2, basicFormat) {
                var dateStart, dateEnd, format = basicFormat ? basicFormat : this._defaultFormat;
                if (this.isUndefinedOrNull(value1)) {
                    dateStart = null;
                }
                else {
                    dateStart = moment(value1);
                }
                if (this.isUndefinedOrNull(value2)) {
                    dateEnd = null;
                }
                else {
                    dateEnd = moment(value2);
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
                    // todo localization
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
                date = moment(value);
                if (!date.isValid()) {
                    return '';
                }
                return date.startOf(range);
            };
            DateTime.prototype.toEndRange = function (value, range, offset) {
                var date, result, mssOffset;
                if (this.isUndefinedOrNull(value)) {
                    return '';
                }
                if (!angular.isNumber(offset)) {
                    mssOffset = 0;
                }
                date = moment(value);
                if (!date.isValid()) {
                    return '';
                }
                if (mssOffset) {
                    result = date.startOf(range).add(mssOffset, 'milliseconds');
                }
                else {
                    result = date.startOf(range);
                }
                return date.startOf(range);
            };
            ;
            // formating functions 
            // -------------------
            // todo Optional
            DateTime.prototype.formatTime = function (value, format) {
                return this.formatDateTime(value, 'LLL');
            };
            // todo Optional
            DateTime.prototype.formatDateOptional = function (value, format) {
                return this.formatDateTime(value, 'L');
            };
            DateTime.prototype.formatShortDate = function (value) {
                return this.formatDateTime(value, 'L');
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
                return this.formatDateTime(value, 'LLL');
            };
            DateTime.prototype.formatLongDateTime = function (value) {
                return this.formatDateTime(value, 'LLLL');
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
            // numeric month writing formats
            // --------------
            // numeric month writing 
            DateTime.prototype.formatDateNumber = function (value) {
                return this.formatDateTime(value, 'l');
            };
            // numeric month writing 
            DateTime.prototype.formatLongDateNumber = function (value) {
                return this.formatDateTime(value, 'll');
            };
            DateTime.prototype.formatTimeNumber = function (value) {
                return this.formatDateTime(value, 'LLL');
            };
            DateTime.prototype.formatLongTimeNumber = function (value) {
                return this.formatDateTime(value, 'LLLL');
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
            // iso function
            // --------------
            DateTime.prototype.formatISOWeek = function (value) {
                return this.formatDateTime(value, 'WW');
            };
            DateTime.prototype.formatShortISOWeek = function (value) {
                return this.formatDateTime(value, 'W');
            };
            DateTime.prototype.formatISOWeekOrdinal = function (value) {
                return this.formatDateTime(value, 'Wo');
            };
            // special formats 
            // --------------
            // year option displays if the current year is not equal to, the date of 
            DateTime.prototype.formatDateY = function (value) {
                return this.formatDateTimeY(value, 'L');
            };
            // year option displays if the current year is not equal to, the date of
            DateTime.prototype.formatLongDateY = function (value) {
                return this.formatDateTimeY(value, 'LL');
            };
            // todo
            DateTime.prototype.formatMillisecondsToSeconds = function (value) {
                return '';
            };
            // todo
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
            // navigation functions 
            // ------------------
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
                return result;
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
                return result;
            };
            DateTime.prototype.getNowStart = function (category) {
                var date, range, result;
                date = moment();
                if (!date.isValid()) {
                    return '';
                }
                range = this.getRange(category);
                result = moment(date).startOf(range);
                return result;
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
                return date.add(hours, 'hours');
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
                this._datetime = datetime;
            }
            // todo Optional
            DateTimeService.prototype.formatTime = function (value, format) {
                return this._datetime.formatTime(value, format);
            };
            // todo Optional
            DateTimeService.prototype.formatDateOptional = function (value, format) {
                return this._datetime.formatDateOptional(value, format);
            };
            DateTimeService.prototype.formatShortDate = function (value) {
                return this._datetime.formatShortDate(value);
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
            DateTimeService.prototype.formatLongDateTime = function (value) {
                return this._datetime.formatLongDateTime(value);
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
            // numeric month writing formats
            // --------------
            // numeric month writing 
            DateTimeService.prototype.formatDateNumber = function (value) {
                return this._datetime.formatDateNumber(value);
            };
            // numeric month writing 
            DateTimeService.prototype.formatLongDateNumber = function (value) {
                return this._datetime.formatLongDateNumber(value);
            };
            DateTimeService.prototype.formatTimeNumber = function (value) {
                return this._datetime.formatTimeNumber(value);
            };
            DateTimeService.prototype.formatLongTimeNumber = function (value) {
                return this._datetime.formatLongTimeNumber(value);
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
            // iso function
            // --------------
            DateTimeService.prototype.formatISOWeek = function (value) {
                return this._datetime.formatISOWeek(value);
            };
            DateTimeService.prototype.formatShortISOWeek = function (value) {
                return this._datetime.formatShortISOWeek(value);
            };
            DateTimeService.prototype.formatISOWeekOrdinal = function (value) {
                return this._datetime.formatISOWeekOrdinal(value);
            };
            // special formats 
            // --------------
            // year option displays if the current year is not equal to, the date of 
            DateTimeService.prototype.formatDateY = function (value) {
                return this._datetime.formatDateY(value);
            };
            // year option displays if the current year is not equal to, the date of
            DateTimeService.prototype.formatLongDateY = function (value) {
                return this._datetime.formatLongDateY(value);
            };
            // todo
            DateTimeService.prototype.formatMillisecondsToSeconds = function (value) {
                return this._datetime.formatMillisecondsToSeconds(value);
            };
            // todo
            DateTimeService.prototype.formatElapsedInterval = function (value, start) {
                return this._datetime.formatElapsedInterval(value, start);
            };
            DateTimeService.prototype.getDateJSON = function (date) {
                return this._datetime.getDateJSON(date);
            };
            // navigation functions 
            // ------------------
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
                _super.call(this);
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
    })(datetime = pip.datetime || (pip.datetime = {}));
})(pip || (pip = {}));

/// <reference path="../../typings/tsd.d.ts" />
(function (angular, _) {
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
    // Todo: Remove dependency on Translate. Use moment localization
    thisModule.controller('pipDateController', ['$scope', '$element', function ($scope, $element) {
        var value, localeDate = moment.localeData(), momentMonths = angular.isArray(localeDate._months) ? localeDate._months : localeDate._months.format, momentDays = angular.isArray(localeDate._weekdays) ? localeDate._weekdays : localeDate._weekdays.format, momentShortDays = localeDate._weekdaysMin, momentFirstDayOfWeek = localeDate._week.dow;
        console.log('months', momentMonths);
        console.log('days', momentDays);
        console.log('shortDays', momentShortDays);
        console.log('firstDayOfWeek', momentFirstDayOfWeek);
        function dayList(month, year) {
            var count = 31, days = [], i;
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                count = 30;
            }
            else if (month === 2) {
                if (year) {
                    // Calculate leap year (primitive)
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
            console.log('monthList', months);
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
            // Update day list if month and year were changed
            if ($scope.month !== month && $scope.year !== year) {
                $scope.days = dayList($scope.month, $scope.year);
            }
            // Assign values to scope
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
        // Set initial values
        value = $scope.model ? _.isDate($scope.model) ? $scope.model : new Date($scope.model) : null;
        $scope.day = value ? value.getDate() : null;
        $scope.month = value ? value.getMonth() + 1 : null;
        $scope.year = value ? value.getFullYear() : null;
        $scope.dayLabel = 'day'; //pipTranslate.translate('DAY');
        $scope.monthLabel = 'month'; //pipTranslate.translate('MONTH');
        $scope.yearLabel = 'year'; //pipTranslate.translate('YEAR');
        $scope.days = dayList($scope.month, $scope.year);
        $scope.months = monthList();
        $scope.years = yearList();
        $scope.disableControls = $scope.disabled ? $scope.disabled() : false;
        // React on changes
        $scope.$watch('model', function (newValue) {
            getValue(newValue);
        });
        $scope.$watch($scope.disabled, function (newValue) {
            $scope.disableControls = newValue;
        });
    }]);
})(window.angular, window._);



//# sourceMappingURL=pip-webui-dates.js.map

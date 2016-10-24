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
        'pipDateTime',
        'pipDates.Translate'
    ]);
})();

<<<<<<< HEAD
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
        formatDateFilter.$inject = ['pipDateTime'];
        function formatDateFilter(pipDateTime) {
            "ngInject";
            return function (value) {
                return pipDateTime.formatDate(value) || value;
            };
        }
        angular
            .module('pipDateTime.Filter', [])
            .filter('formatDate', formatDateFilter);
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
            }
            DateTime.prototype.isUndefinedOrNull = function (value) {
                return angular.isUndefined(value) || value === null;
            };
            DateTime.prototype.formatDate = function (value) {
                var date;
                if (this.isUndefinedOrNull(value)) {
                    return '';
                }
                date = moment(value);
                if (!date.isValid()) {
                    return '';
                }
                return date.format('L');
            };
            return DateTime;
        }());
        var DateTimeService = (function () {
            function DateTimeService(datetime) {
                this._datetime = datetime;
            }
            DateTimeService.prototype.formatDate = function (value) {
                return this._datetime.formatDate(value);
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


=======
/**
 * @file Date formatting service
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
 /* global _, angular */
 
(function () {
    'use strict';

    var thisModule = angular.module('pipDateFormat', []);

    // Todo: Remove dependency on Translate. Use moment localization
	thisModule.config(function() {

        // pipTranslateProvider.translations('en', {
        //     // Months - 'MONTH_' + monthIndex
        //     // start at 0 to match JS date format
        //     'MONTH_1': 'January',
        //     'MONTH_2': 'February',
        //     'MONTH_3': 'March',
        //     'MONTH_4': 'April',
        //     'MONTH_5': 'May',
        //     'MONTH_6': 'June',
        //     'MONTH_7': 'July',
        //     'MONTH_8': 'August',
        //     'MONTH_9': 'September',
        //     'MONTH_10': 'October',
        //     'MONTH_11': 'November',
        //     'MONTH_12': 'December',

        //     'MONTH_LONG_1': 'January',
        //     'MONTH_LONG_2': 'February',
        //     'MONTH_LONG_3': 'March',
        //     'MONTH_LONG_4': 'April',
        //     'MONTH_LONG_5': 'May',
        //     'MONTH_LONG_6': 'June',
        //     'MONTH_LONG_7': 'July',
        //     'MONTH_LONG_8': 'August',
        //     'MONTH_LONG_9': 'September',
        //     'MONTH_LONG_10': 'October',
        //     'MONTH_LONG_11': 'November',
        //     'MONTH_LONG_12': 'December',

        //     'MONTH_SHORT_1': 'Jan',
        //     'MONTH_SHORT_2': 'Feb',
        //     'MONTH_SHORT_3': 'Mar',
        //     'MONTH_SHORT_4': 'Apr',
        //     'MONTH_SHORT_5': 'May',
        //     'MONTH_SHORT_6': 'Jun',
        //     'MONTH_SHORT_7': 'Jul',
        //     'MONTH_SHORT_8': 'Aug',
        //     'MONTH_SHORT_9': 'Sep',
        //     'MONTH_SHORT_10': 'Oct',
        //     'MONTH_SHORT_11': 'Nov',
        //     'MONTH_SHORT_12': 'Dec',

        //     // Days of the week - 'DAY_' + dayIndex
        //     // start at 1 to match JS date format
        //     'DAY_1': 'Monday',
        //     'DAY_2': 'Tuesday',
        //     'DAY_3': 'Wednesday',
        //     'DAY_4': 'Thursday',
        //     'DAY_5': 'Friday',
        //     'DAY_6': 'Saturday',
        //     'DAY_7': 'Sunday',

        //     'ELAPSED_TODAY': 'Today',
        //     'ELAPSED_YESTERDAY': 'Yesterday',
        //     'ELAPSED_YEARS': 'y',
        //     'ELAPSED_MONTHS': 'mth',
        //     'ELAPSED_WEEKS': 'w',
        //     'ELAPSED_DAYS': 'd',
        //     'ELAPSED_HOURS': 'h',
        //     'ELAPSED_MINUTES': 'm',
        //     'ELAPSED_SECONDS': 's',
        //     'ELAPSED_AT': 'at',
        //     'ELAPSED_AGO': 'ago',
        //     'ELAPSED_JUST_NOW': 'Just now',
        //     'ELAPSED_FEW_MIN_AGO': 'Few min ago',
        //     'ELAPSED_MIN_AGO': 'min ago',
        //     'ELAPSED_HOUR_AGO': 'hour ago',
        //     'ELAPSED_HOURS_AGO': 'hours ago',
        //     'ELAPSED_HOURS_AGO_MORE_THAN_FIVE': 'hours ago'
        // });

        // pipTranslateProvider.translations('ru', {
        //     // Months - 'MONTH_' + monthIndex
        //     // start at 0 to match JS date format
        //     'MONTH_1': 'январь',
        //     'MONTH_2': 'февраль',
        //     'MONTH_3': 'март',
        //     'MONTH_4': 'апрель',
        //     'MONTH_5': 'май',
        //     'MONTH_6': 'июнь',
        //     'MONTH_7': 'июль',
        //     'MONTH_8': 'август',
        //     'MONTH_9': 'сентябрь',
        //     'MONTH_10': 'октябрь',
        //     'MONTH_11': 'ноябрь',
        //     'MONTH_12': 'декабрь',

        //     'MONTH_LONG_1': 'января',
        //     'MONTH_LONG_2': 'февраля',
        //     'MONTH_LONG_3': 'марта',
        //     'MONTH_LONG_4': 'апреля',
        //     'MONTH_LONG_5': 'мая',
        //     'MONTH_LONG_6': 'июня',
        //     'MONTH_LONG_7': 'июля',
        //     'MONTH_LONG_8': 'августа',
        //     'MONTH_LONG_9': 'сентября',
        //     'MONTH_LONG_10': 'октября',
        //     'MONTH_LONG_11': 'ноября',
        //     'MONTH_LONG_12': 'декабря',

        //     'MONTH_SHORT_1': 'янв',
        //     'MONTH_SHORT_2': 'фев',
        //     'MONTH_SHORT_3': 'мар',
        //     'MONTH_SHORT_4': 'апр',
        //     'MONTH_SHORT_5': 'май',
        //     'MONTH_SHORT_6': 'июн',
        //     'MONTH_SHORT_7': 'июл',
        //     'MONTH_SHORT_8': 'авг',
        //     'MONTH_SHORT_9': 'сен',
        //     'MONTH_SHORT_10': 'окт',
        //     'MONTH_SHORT_11': 'ноя',
        //     'MONTH_SHORT_12': 'дек',

        //     // Days of the week - 'DAY_' + dayIndex
        //     // start at 1 to match JS date format
        //     'DAY_1': 'понедельник',
        //     'DAY_2': 'вторник',
        //     'DAY_3': 'среда',
        //     'DAY_4': 'четверг',
        //     'DAY_5': 'пятница',
        //     'DAY_6': 'суббота',
        //     'DAY_7': 'воскресенье',

        //     'ELAPSED_TODAY': 'Сегодня',
        //     'ELAPSED_YESTERDAY': 'Вчера',
        //     'ELAPSED_YEARS': 'г',
        //     'ELAPSED_MONTHS': 'мц',
        //     'ELAPSED_WEEKS': 'н',
        //     'ELAPSED_DAYS': 'д',
        //     'ELAPSED_HOURS': 'ч',
        //     'ELAPSED_MINUTES': 'м',
        //     'ELAPSED_SECONDS': 'с',
        //     'ELAPSED_AT': 'в',
        //     'ELAPSED_AGO': 'тн',
        //     'ELAPSED_JUST_NOW': 'Только что',
        //     'ELAPSED_FEW_MIN_AGO': 'Несколько мин тн',
        //     'ELAPSED_MIN_AGO': 'мин тн',
        //     'ELAPSED_HOUR_AGO': 'час тн',
        //     'ELAPSED_HOURS_AGO': 'часа тн',
        //     'ELAPSED_HOURS_AGO_MORE_THAN_FIVE': 'часов тн'
        // });
		
	});

    thisModule.factory('pipDateFormat',
        ['pipDates', '$rootScope', function (pipDates, $rootScope) { //pipTranslate

            return {
                formatDate: formatDate,
                formatLongDate: formatLongDate,
                formatShortDate: formatShortDate,
                formatShortDateWithYear: formatShortDateWithYear,
                formatLongDateWithYear: formatLongDateWithYear,

                formatLongMonth: formatLongMonth,
                formatMonth: formatMonth,
                formatYear: formatYear,
                formatShortWeek: formatShortWeek,
                formatShortDayAndMonth: formatShortDayAndMonth,
                formatLongDayAndMonth: formatLongDayAndMonth,

                formatDateRange: formatDateRange,
                formatDateTimeRange: formatDateTimeRange,

                formatTime: formatTime,
                formatLongTime: formatLongTime,
                formatShortTime: formatShortTime, 

                formatLongDateTime: formatLongDateTime,
                formatShortDateTime: formatShortDateTime,

                formatElapsedTime: formatElapsedTime,
                formatElapsedInterval: formatElapsedInterval,

                formatMillisecondsToSeconds: formatMillisecondsToSeconds
            };


            function twoDigits(value) {
                return value < 10 ? '0' + value : value; 
            };

            function formatDate(value, format, str) {
                if (value == null) return '';

                var
                    strict = str || false,
                    value = _.isDate(value) ? value : new Date(value),
                    thisYear = new Date().getUTCFullYear(),
                    year = value.getUTCFullYear(),
                    month = value.getUTCMonth(),
                    // longMonthName = pipTranslate.translate('MONTH_LONG_' + (month + 1)),
                    // shortMonthName = pipTranslate.translate('MONTH_SHORT_' + (month + 1)),
                    // monthName = pipTranslate.translate('MONTH_' + (month + 1)),
                    day = value.getUTCDate(),
                    startWeek = pipDates.toStartWeek(value),
                    endWeek = pipDates.toEndWeek(value, -1);

                if (strict == false && format == 'd MMMM yyyy' && thisYear === year) {
                        format = 'MMMM d';
                }
                if (strict == false && format == 'd MMM yyyy' && thisYear === year) {
                        format = 'MMM d';
                }
                if ((format == 'MMM d') && $rootScope.$language == 'ru') {
                        format = 'd MMM';
                }
                if ((format == 'MMMM d') && $rootScope.$language == 'ru') {
                    format = 'd MMMM';
                }

                if (format == 'd MMMM yyyy')
                    return '' + day + ' ' + longMonthName + ' ' + year
                else if (format == 'MMMM d, yyyy')
                    return '' + monthName + ' ' + day + ', ' + year
                if (format == 'd MMM yyyy')
                    return '' + day + ' ' + shortMonthName + ' ' + year
                else if (format == 'MMM d, yyyy')
                    return '' + shortMonthName + ' ' + day + ', ' + year
                else if (format == 'd MMMM')
                    return '' + day + ' ' + longMonthName
                else if (format == 'd MMM')
                    return '' + day + ' ' + shortMonthName
                else if (format == 'MMM d')
                    return '' + shortMonthName + ' ' + day;
                else if (format == 'MMMM d')
                    return '' + longMonthName + ' ' + day;
                else if (format == 'yyyy/M/d')
                    return '' + year + '/' + month + '/' + day;
                else if (format == 'yyy-M-d')
                    return '' + year + '-' + month + '-' + day;
                else if (format == 'MMMM')
                    return '' + longMonthName + ' ' + year;
                else if (format == 'yyyy')
                    return '' + year;
                else if (format == 'ww')
                    return '' + startWeek.getUTCDate() + ' - ' + endWeek.getUTCDate() + ' ' + monthName + ' ' + year;

                return '' + day + ' ' + monthName + ' ' + year
            }

            function formatLongDate(value) {
                return formatDate(value, 'd MMMM yyyy');
            }

            function formatShortDateWithYear(value) {
                return formatDate(value, 'd MMM yyyy', true);
            }

            function formatLongDateWithYear(value) {
                return formatDate(value, 'd MMMM yyyy', true);
            }

            function formatShortDate(value) {
                return formatDate(value, 'd MMM yyyy');
            }

            function formatLongMonth(value) {
                return formatDate(value, 'MMMM');
            }

            function formatYear(value) {
                return formatDate(value, 'yyyy');
            }

            function formatShortWeek(value) {
                return formatDate(value, 'ww');
            }

            function formatShortDayAndMonth(value) {
                return formatDate(value, 'd MMM');
            }

            function formatLongDayAndMonth(value) {
                if ($rootScope.$language == 'ru')
                    return formatDate(value, 'd MMMM');
                else
                    return formatDate(value, 'MMMM d');
            }

            function formatDateRange(value1, value2) {
                value1 =  value1 ? (_.isDate(value1) ? value1 : new Date(value1)) : null;
                value2 =  value2 ? (_.isDate(value2) ? value2 : new Date(value2)) : null;

                if (value1 == null) {
                    if ($rootScope.$language == 'ru')
                        return formatDate(value2, 'd MMM yyyy', true);
                    else
                        return formatDate(value2, 'MMM d, yyyy', true);
                }

                if (value2 == null || value1 == value2) {
                    if ($rootScope.$language == 'ru')
                        return formatDate(value1, 'd MMM yyyy', true);
                    else
                        return formatDate(value1, 'MMM d, yyyy', true);
                }

                if (value1.getUTCFullYear() !== value2.getUTCFullYear()) {
                    if ($rootScope.$language == 'ru')
                        return formatDate(value1, 'd MMM yyyy', true) + '-' + formatDate(value2, 'd MMM yyyy', true);
                    else
                        return formatDate(value1, 'MMM d, yyyy', true) + '-' + formatDate(value2, 'MMM d, yyyy', true);
                } else {
                        return formatDate(value1, 'd MMM') + ' - ' + formatDate(value2, 'd MMM')
                            + ((new Date().getUTCFullYear() !== value1.getUTCFullYear()) ? ' ' + formatDate(value1, 'yyyy') : '');
                }
            }

            function formatDateTimeRange(value1, value2) {
                value1 =  value1 ? (_.isDate(value1) ? value1 : new Date(value1)) : null;
                value2 =  value2 ? (_.isDate(value2) ? value2 : new Date(value2)) : null;
                if (value1 == null && value2 == null) return '';

                if (value1 == null) {
                    return formatShortDateTime(value2);
                }

                if (value2 == null || value1 == value2) {
                    return formatShortDateTime(value1);
                }

                var dayStart, monthStart, yearStart,
                    dayEnd, monthEnd, yearEnd;

                dayStart = value1.getUTCDate();
                monthStart = value1.getUTCMonth();
                yearStart = value1.getUTCFullYear();
                dayEnd = value2.getUTCDate();
                monthEnd = value2.getUTCMonth();
                yearEnd = value2.getUTCFullYear();


                if (yearStart !== yearEnd) {
                    return formatDate(value1, 'd MMM') + ', ' + yearStart + ' ' + formatTime(value1, 'hh:mm') +
                        ' - ' + formatDate(value2, 'd MMM') + ', ' + yearEnd + ' ' + formatTime(value2, 'hh:mm');
                } else {
                    if (monthStart != monthEnd && !dayStart != dayEnd)
                        return formatDate(value1, 'd MMM') + ', ' + formatTime(value1, 'hh:mm') +
                            ' - ' + formatDate(value2, 'd MMM') + ', ' + formatTime(value2, 'hh:mm');
                    else
                        return formatTime(value1, 'hh:mm') + ' - ' + formatTime(value2, 'hh:mm')
                }
            }

            function formatTime(value, format) {
                if (value == null) return '';

                value = _.isDate(value) ? value : new Date(value);
                
                var 
                    hours = value.getHours(),
                    mins = value.getMinutes(),
                    secs = value.getSeconds(),
                    ampm = '';

                // if (pipTranslate && pipTranslate.use() == 'en') {
                //     ampm = hours >= 12 ? ' PM' : ' AM';
                //     hours = hours % 12;
                //     if (hours == 0) hours = 12;
                // }

                if (format == 'hh:mm:ss')
                    return '' + twoDigits(hours) + ':' + twoDigits(mins) + ':' + twoDigits(secs) + ampm;
                else if (format == 'hh:mm')
                    return '' + twoDigits(hours) + ':' + twoDigits(mins) + ampm;

                return '' + twoDigits(hours) + ':' + twoDigits(mins) + ':' + twoDigits(secs) + ampm;
            }

            function formatMonth(value, short) {
                if (value == null) return '';
                return 'MONTH_SHORT_' + value //short ? pipTranslate.translate('MONTH_SHORT_' + value) : pipTranslate.translate('MONTH_' + value);
            }

            function formatLongTime(value) {
                return formatTime(value, 'hh:mm:ss');
            }

            function formatShortTime(value) {
                return formatTime(value, 'hh:mm');
            }

            function formatLongDateTime(value) {
                if (value == null) return '';
                value = _.isDate(value) ? value : new Date(value);
                return formatLongDate(value) + ' ' + formatLongTime(value);
            }

            function formatShortDateTime(value) {
                if (value == null) return '';
                value = _.isDate(value) ? value : new Date(value);
                return formatShortDate(value) + ' ' + formatShortTime(value);
            }

            function formatElapsedTime(value, format) {
                if (value == null) return '';

                value = _.isDate(value) ? value : new Date(value);

                var 
                    current = new Date(),
                    diff = Math.floor(((current.getTime() + current.getTimezoneOffset()) - (value.getTime() + value.getTimezoneOffset())) / 1000);

                if (diff < 1) return 'ELAPSED_JUST_NOW' //pipTranslate.translate('ELAPSED_JUST_NOW');

                var years, months, weeks, days, hours, mins, secs;

                secs = diff % 60;

                diff = Math.floor(diff / 60);
                mins = diff % 60;

                diff = Math.floor(diff / 60);
                hours = diff % 24;

                diff = diff / 24;
                years = Math.floor(diff / 365),

                diff = diff - years * 365;
                months = Math.floor(diff / 30),
                days = Math.floor(diff - months * 30);

                if (days % 7 == 0) {
                    weeks = Math.floor(days / 7);
                    days = 0;
                } else {
                    weeks = 0;
                }

                // if (format == 'interval') {
                //     var result = '';

                //     if (years) {
                //         result += ' ' + years + pipTranslate.translate('ELAPSED_YEARS');
                //         weeks = days = hours = mins = secs = null;
                //     }
                //     if (months) {
                //         result += ' ' + months + pipTranslate.translate('ELAPSED_MONTHS');
                //         days = hours = mins = secs = null;
                //     }
                //     if (weeks) {
                //         result += ' ' + weeks + pipTranslate.translate('ELAPSED_WEEKS');
                //         hours = mins = secs = null;
                //     }
                //     if (days) {
                //         result += ' ' + days + pipTranslate.translate('ELAPSED_DAYS');
                //         mins = secs = null;
                //     }
                //     if (hours) {
                //         result += ' ' + hours + pipTranslate.translate('ELAPSED_HOURS');
                //         secs = null;
                //     }
                //     if (mins) result += ' ' + mins + pipTranslate.translate('ELAPSED_MINUTES');
                //     if (secs) result += ' ' + secs + pipTranslate.translate('ELAPSED_SECONDS');

                //     return result != '' ? result + ' ' + pipTranslate.translate('ELAPSED_AGO') 
                //         : pipTranslate.translate('ELAPSED_JUST_NOW');
                // }

                // Default time format = 'default'

                // if (years > 0) {
                //     return formatDate(value, 'd MMM yyyy');
                // }

                // if (months > 0 || weeks > 0 || days > 1) {
                //     return formatDate(value, 'MMM d') 
                //         + ', ' + formatTime(value, 'hh:mm');
                // }

                // if (days == 1) {
                //     return pipTranslate.translate('ELAPSED_YESTERDAY') 
                //         + ', ' + formatTime(value, 'hh:mm');
                // }

                // if (hours > 10) {
                //     return pipTranslate.translate('ELAPSED_TODAY') 
                //         + ', ' + formatTime(value, 'hh:mm');
                // }

                // if (hours > 0) {
                //     return '' + hours + ' ' + (hours < 2 ? pipTranslate.translate('ELAPSED_HOUR_AGO') :
                //         hours < 5 ? pipTranslate.translate('ELAPSED_HOURS_AGO') : pipTranslate.translate('ELAPSED_HOURS_AGO_MORE_THAN_FIVE'));
                // }

                // if (mins > 10) {
                //     return '' + mins + ' ' + pipTranslate.translate('ELAPSED_MIN_AGO');
                // }

                // if (mins > 0) {
                //     return pipTranslate.translate('ELAPSED_FEW_MIN_AGO');
                // }

                // return pipTranslate.translate('ELAPSED_JUST_NOW');
            }

            function formatElapsedInterval(value) {
                return formatElapsedTime(value, 'interval');  
            }

            function formatMillisecondsToSeconds(value) {
                return Math.floor(value / 1000)
            }

        }]
    );
    
})();

/**
 * @file Time control
 * @copyright Digital Living Software Corp. 2014-2016
 */

(function (angular, _) {
    'use strict';

    var thisModule = angular.module('pipTimeRange', []);

    thisModule.directive('pipTimeRange',
        function () {
            return {
                restrict: 'EA',
                scope: {
                    pipStartDate: '=',
                    pipEndDate: '='
                },
                templateUrl: 'time_range/time_range.html',
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
                        if (value == null) return false;
                        if (!value) return false;
                        value = value.toString().toLowerCase();
                        return value == '1' || value == 'true';
                    }

                    $scope.data = {};
                    $scope.data.start = null;
                    $scope.data.end = null;
                    defineStartDate();
                    defineEndDate();

                    if (toBoolean($attrs.pipRebind)) {
                        $scope.$watch('pipStartDate',
                            function () {
                                $scope.data.start = null;
                                defineStartDate();
                            }
                        );
                        $scope.$watch('pipEndDate',
                            function () {
                                $scope.data.end = null;
                                defineEndDate();
                            }
                        );
                    }

                    // Add class
                    $element.addClass('pip-time-range');
                }
            };
        }
    );

})(window.angular, window._);


(function (angular, _) {
    'use strict';

    var thisModule = angular.module('pipTimeRangeEdit', ['pipDatesUtils']);

    thisModule.directive('pipTimeRangeEdit',
        function () {
            return {
                restrict: 'EA',
                scope: {
                    pipStartDate: '=',
                    pipChanged: '&',
                    pipEndDate: '=',
                    pipStartLabel: '@',
                    pipEndLabel: '@',
                    disabled: '&ngDisabled',
                    pipSize: '='
                },
                templateUrl: 'time_range_edit/time_range_edit.html',
                controller: 'pipTimeRangeEditController'
            };
        }
    );

    // Todo: Remove dependency on Translate. Use moment localization
    thisModule.controller('pipTimeRangeEditController',
        ['$scope', '$element', '$attrs', 'pipDates', 'pipTranslate', function ($scope, $element, $attrs, pipDates, pipTranslate) {

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

                // если начальная дата не задана, обнуляем и выходим
                if (!$scope.data.startDate) {
                    $scope.data.startTime = null;

                    return;
                }

                // еcли не задано начальное время - задаем его
                if (!$scope.data.startTime) {
                    if (!$scope.data.endTime) {
                        date = new Date();
                        date = date.getTime() - pipDates.toStartDay(date);
                        $scope.data.startTime = Math.floor(date / (30 * 60 * 1000)) * 30;
                    } else {
                        $scope.data.startTime = $scope.data.endTime === 0 ? 0 : $scope.data.endTime - 30;
                    }
                }

                // если конечная дата не задана, обнуляем и выходим
                if (!$scope.data.endDate) {
                    $scope.data.endTime = null;

                    return;
                }

                start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);

                // Если есть длительность, то сохраняем ее. Длительность можно изменить только изменяя конечную дату
                if ($scope.data.duration) {
                    end = new Date(start.getTime() + $scope.data.duration);
                    $scope.data.endDate = pipDates.toStartDay(end);
                    end = end.getTime() - $scope.data.endDate.getTime();
                    $scope.data.endTime = Math.floor(end / (30 * 60 * 1000)) * 30;
                } else {
                    // Если нет длительности сравниваем даты
                    end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);
                    if (start >= end) {
                        // Если начальная дата больше, то двигаем конечную дату
                        $scope.data.endDate = pipDates.toStartDay(new Date(start.getTime() + 30 * 60000));
                        $scope.data.endTime = ($scope.data.startTime + 30) % 1440;
                    }
                }
            }

            function validateEndDate() {
                var date, start, end;

                // если начальная дата не задана, обнуляем и выходим
                if (!$scope.data.endDate) {
                    $scope.data.endTime = null;

                    return;
                }

                // еcли не задано конечное время - задаем его
                if (!$scope.data.endTime) {
                    if (!$scope.data.startTime) {
                        date = new Date();
                        date = date.getTime() - pipDates.toStartDay(date);
                        $scope.data.endTime = Math.floor(date / (30 * 60 * 1000)) * 30;
                    } else {
                        $scope.data.endTime = $scope.data.startTime === 1410 ? 1410 : $scope.data.startTime + 30;
                    }
                }

                // если yачальная дата не задана, обнуляем и выходим
                if (!$scope.data.startDate) {
                    $scope.data.startTime = null;

                    return;
                }

                start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);
                end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);

                if (start >= end) {
                    // Если начальная дата больше, то двигаем начальную дату
                    $scope.data.startDate = pipDates.toStartDay(new Date(end.getTime() - 30 * 60000));
                    $scope.data.startTime = $scope.data.endTime % 1440 === 0 ? 1410 : $scope.data.endTime - 30;
                }

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

                    $scope.data.startDate = pipDates.toStartDay(start);
                    $scope.data.startTime = (new Date(start) - $scope.data.startDate) / (60 * 1000);
                }

                if ($scope.pipEndDate !== null && $scope.pipEndDate !== undefined) {
                    end = _.isDate($scope.pipEndDate) ? $scope.pipEndDate : null;

                    if (!start) {
                        end = getDateJSON($scope.pipEndDate);
                    }

                    $scope.data.endDate = pipDates.toStartDay(end);
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

            function initDate() {
                $scope.data.startDate = null;
                $scope.data.startTime = null;
                $scope.data.endDate = null;
                $scope.data.endTime = null;
                $scope.data.duration = null;
            }

            // initialize data
            $scope.intervalTimeCollection = getTimeInterval();
            $scope.data = {};
            $scope.startLabel = $scope.pipStartLabel ? pipTranslate.translate($scope.pipStartLabel)
                : pipTranslate.translate('EVENT_NEW_START_TIME');
            $scope.endLabel = $scope.pipEndLabel ? pipTranslate.translate($scope.pipEndLabel)
                : pipTranslate.translate('EVENT_NEW_END_TIME');
            initDate();
            defineDate();

            // process function
            $scope.onChangeStartDate = function () {
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
                    $scope.data.startDate = pipDates.toStartDay(new Date());
                }
                validateStartDate();
                $scope.data.duration = setDuration();
                setDate();
                $scope.pipChanged();
            };

            $scope.onChangeEndTime = function () {
                if (!$scope.data.endDate) {
                    $scope.data.endDate = pipDates.toStartDay(new Date());
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

            // Add class
            $element.addClass('pip-time-range-edit');
        }]
    );

})(window.angular, window._);

/**
 * @file Date utilities
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global _, angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipDatesUtils', []);

    // Todo: Use moment functions instead
    thisModule.factory('pipDates', function () {
        var dates = {};

        dates.addHours = function (date, hours) {
            date = _.isDate(date) ? date : new Date(date);
            var time = date.getTime() + hours * 3600000;
            return new Date(time);
        };

        dates.toStartDay = function (date) {
            date = _.isDate(date) ? date : new Date(date);
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        };

        dates.toEndDay = function (date, offset) {
            date = _.isDate(date) ? date : new Date(date);
            offset = offset != null ? offset : 0;
            var start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return new Date(start.getTime() + 24 * 3600000 + offset);
        };

        dates.toStartWeek = function (date) {
            date = _.isDate(date) ? date : new Date(date);
            var dayOfWeek = date.getDay() ? date.getDay() : 7;
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return new Date(date.getTime() - (dayOfWeek - 1) * 24 * 3600000);  // dayOfWeek = 0 для воскресенья
        };

        dates.toEndWeek = function (date, offset) {
            date = _.isDate(date) ? date : new Date(date);
            offset = offset != null ? offset : 0;
            var dayOfWeek = date.getDay() ? date.getDay() : 7;
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return new Date(date.getTime() + (8 - dayOfWeek) * 24 * 3600000 + offset);
        };

        dates.toStartMonth = function (date) {
            date = _.isDate(date) ? date : new Date(date);
            return new Date(date.getFullYear(), date.getMonth(), 1);
        };

        dates.toEndMonth = function (date, offset) {
            date = _.isDate(date) ? date : new Date(date);

            var
                month = date.getMonth() + 1,
                year = date.getFullYear();

            if (month > 11) {
                year++;
                month = 0;
            }

            date = new Date(year, month, 1);

            if (offset != null) {
                date = new Date(date.getTime() + offset);
            }

            return date;
        };

        dates.toStartYear = function (date) {
            date = _.isDate(date) ? date : new Date(date);
            return new Date(date.getFullYear(), 0, 1);
        };

        dates.toEndYear = function (date, offset) {
            date = _.isDate(date) ? date : new Date(date);
            date = new Date(date.getFullYear() + 1, 0, 1);

            if (offset != null) {
                date = new Date(date.getTime() + offset);
            }

            return date;
        };

        /** UTC functions  - **/
        dates.toUTCDate = function (year, month, day) {
            return new Date(Date.UTC(year, month, day));
        };

        dates.toUTCDate = function (date) {
            return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        };

        dates.fromUTCDate = function (date) {
            if (date == null) date = new Date();
            return new Date(
                date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        };

        dates.toUTCStartWeek = function (date) {
            if(!_.isDate(date)) {
                date = new Date(date);
                date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            }
            var dayOfWeek = date.getDay() ? date.getDay() : 7;
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            date = dayOfWeek != 1 ? new Date(date.getTime() - (dayOfWeek - 1) * 24 * 3600000) : date;
            return  new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        };

        dates.toUTCEndWeek = function (date, offset) {
            if(!_.isDate(date)) {
                date = new Date(date);
                date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            }
            offset = offset != null ? offset : 0;
            var dayOfWeek = date.getDay() ? date.getDay() : 7;
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            date = new Date(date.getTime() + (8 - dayOfWeek) * 24 * 3600000 + offset);
            return  new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        };

        return dates;
    });
})();
>>>>>>> 76983ac1f654b33c5ec5d7e26d5b0166d68eeb64

//# sourceMappingURL=pip-webui-dates.js.map

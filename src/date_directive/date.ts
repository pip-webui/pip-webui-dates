/// <reference path="../../typings/tsd.d.ts" />

(function () {
    'use strict';

    var thisModule = angular.module('pipDate', ['pipDates.Templates']);

    thisModule.directive('pipDate',
        function () {
            return {
                restrict: 'E',
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
        }
    );

    // Todo: Remove dependency on Translate. Use moment localization
    thisModule.controller('pipDateController',
        function ($scope, $element, $injector) { //pipTranslate
            var value,
                localeDate: any = moment.localeData(),
                momentMonths = angular.isArray(localeDate._months) ? localeDate._months : localeDate._months.format,
                momentDays = angular.isArray(localeDate._weekdays) ? localeDate._weekdays : localeDate._weekdays.format,
                momentShortDays = localeDate._weekdaysMin,
                momentFirstDayOfWeek = localeDate._week.dow;

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
            } else {
                $scope.dayLabel = 'Day';
                $scope.monthLabel = 'Month';                
                $scope.yearLabel = 'Year';

            }

            function dayList(month, year) {
                var count = 31, days = [], i;

                if (month === 4 || month === 6 || month === 9 || month === 11) {
                    count = 30;
                } else if (month === 2) {
                    if (year) {
                        // Calculate leap year (primitive)
                        count = year % 4 === 0 ? 29 : 28;
                    } else {
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
                        name: momentMonths[i-1]
                    });
                }

                return months;
            }

            function yearList() {
                var i,
                    currentYear = new Date().getFullYear(),
                    startYear = $scope.timeMode === 'future' ? currentYear : currentYear - 100,
                    endYear = $scope.timeMode === 'past' ? currentYear : currentYear + 100,
                    years = [];

                if ($scope.timeMode === 'past') {
                    for (i = endYear; i >= startYear; i--) {
                        years.push(i);
                    }
                } else {
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
                var value = v ? _.isDate(v) ? v : new Date(v) : null,
                    day = value ? value.getDate() : null,
                    month = value ? value.getMonth() + 1 : null,
                    year = value ? value.getFullYear() : null;

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
        }
    );

})();


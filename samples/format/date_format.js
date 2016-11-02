/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appDateTimes.DateFormat', []);

    thisModule.controller('DateFormatController',
        function($scope, pipDateTime, $window) {
            $scope.currentTime = new Date();
            $scope.fewDaysAgo = new Date(new Date().getTime() - 172800000);
            $scope.fewHoursFuture = new Date($scope.currentTime.getTime() + 60000*180);
            $scope.pastTime = new Date(new Date().getTime() - 10000000000);
            $scope.pastTime1 = new Date(new Date().getTime() - 60000*60*24*40);
            $scope.pastTime2 = new Date(new Date().getTime() - 100000000000);

            $scope.longDate = pipDateTime.formatLongDate($scope.currentTime);
            $scope.shortDate = pipDateTime.formatShortDate($scope.currentTime);
            $scope.longDateWithoutYear = pipDateTime.formatLongDateY($scope.currentTime);
            $scope.shortDateWithoutYear = pipDateTime.formatDateY($scope.currentTime);
            $scope.longTime = pipDateTime.formatLongTime($scope.currentTime);
            $scope.shortTime = pipDateTime.formatShortTime($scope.currentTime);
            $scope.longDateTime = pipDateTime.formatLongDateTime($scope.currentTime);
            $scope.shortDateTime = pipDateTime.formatShortDateTime($scope.currentTime);

            $scope.dateRange = pipDateTime.formatDateRange($scope.currentTime, $scope.currentTime);
            $scope.dateRange3 = pipDateTime.formatDateRange($scope.fewDaysAgo, $scope.currentTime);
            $scope.dateRange2 = pipDateTime.formatDateRange($scope.pastTime2, $scope.currentTime);

            $scope.dateTimeRangeDay = {
                start: $scope.currentTime,
                end: $scope.fewHoursFuture
            };
            $scope.dateTimeRangeYear = {
                start: $scope.pastTime1,
                end: $scope.currentTime
            };
            $scope.dateTimeRangeDiffYear = {
                start: $scope.pastTime2,
                end: $scope.currentTime
            };
            $scope.dateTimeRangeStart = {
                start: $scope.currentTime,
                end: null
            };
            $scope.dateTimeRangeEnd = {
                start: null,
                end: $scope.fewHoursFuture
            };
            $scope.dateTimeRangeDay.text = pipDateTime.formatDateTimeRange($scope.dateTimeRangeDay.start, $scope.dateTimeRangeDay.end);
            $scope.dateTimeRangeYear.text = pipDateTime.formatDateTimeRange($scope.dateTimeRangeYear.start, $scope.dateTimeRangeYear.end);
            $scope.dateTimeRangeDiffYear.text = pipDateTime.formatDateTimeRange($scope.dateTimeRangeDiffYear.start, $scope.dateTimeRangeDiffYear.end);
            $scope.dateTimeRangeStart.text = pipDateTime.formatDateTimeRange($scope.dateTimeRangeStart.start, $scope.dateTimeRangeStart.end);
            $scope.dateTimeRangeEnd.text = pipDateTime.formatDateTimeRange($scope.dateTimeRangeEnd.start, $scope.dateTimeRangeEnd.end);

            // $scope.userAgent = $window.navigator.userAgent;

            $scope.fewDayAgo = new Date(new Date().getTime() - 6*24*60*60*1000);

            $scope.formatTodayDateTimeLong = function (value) {
                var date,
                    nowDate,
                    formatMoment,
                    result;
                
                // if (this.isUndefinedOrNull(value)) {
                //     return '';
                // }

                date = moment(value);
                if (!date.isValid()) {
                    return '';
                }

                nowDate = moment();

                if (nowDate.year() == date.year() && nowDate.month() == date.month() && nowDate.day() == date.day()) {
                    result = date.format('LTS');
                } else {
                    result = date.format('LL') + ' ' + date.format('LTS');
                }

                return result;
            }
        }   
    );

})();

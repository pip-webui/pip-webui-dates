/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appDateTimes.DateFormat', []);

    thisModule.controller('DateFormatController',
        function($scope, pipDateTimeFormat, $window, $timeout) {

            // pipDateTimeFormat.useTimeZone(10);

            $scope.currentTime = new Date();
            $scope.fewDaysAgo = new Date(new Date().getTime() - 172800000);
            $scope.fewHoursFuture = new Date($scope.currentTime.getTime() + 60000*180);
            $scope.pastTime = new Date(new Date().getTime() - 10000000000);
            $scope.pastTime1 = new Date(new Date().getTime() - 60000*60*24*40);
            $scope.pastTime2 = new Date(new Date().getTime() - 100000000000);

            $scope.longDate = pipDateTimeFormat.formatLongDate($scope.currentTime);
            $scope.shortDate = pipDateTimeFormat.formatShortDate($scope.currentTime);
            $scope.longDateWithoutYear = pipDateTimeFormat.formatLongDateY($scope.currentTime);
            $scope.shortDateWithoutYear = pipDateTimeFormat.formatDateY($scope.currentTime);
            $scope.longTime = pipDateTimeFormat.formatLongTime($scope.currentTime);
            $scope.shortTime = pipDateTimeFormat.formatShortTime($scope.currentTime);
            $scope.longDateTime = pipDateTimeFormat.formatLongDateTime($scope.currentTime);
            $scope.shortDateTime = pipDateTimeFormat.formatShortDateTime($scope.currentTime);

            $scope.dateRange = pipDateTimeFormat.formatDateRange($scope.currentTime, $scope.currentTime);
            $scope.dateRange3 = pipDateTimeFormat.formatDateRange($scope.fewDaysAgo, $scope.currentTime);
            $scope.dateRange2 = pipDateTimeFormat.formatDateRange($scope.pastTime2, $scope.currentTime);

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
            $scope.dateTimeRangeDay.text = pipDateTimeFormat.formatDateTimeRange($scope.dateTimeRangeDay.start, $scope.dateTimeRangeDay.end);
            $scope.dateTimeRangeYear.text = pipDateTimeFormat.formatDateTimeRange($scope.dateTimeRangeYear.start, $scope.dateTimeRangeYear.end);
            $scope.dateTimeRangeDiffYear.text = pipDateTimeFormat.formatDateTimeRange($scope.dateTimeRangeDiffYear.start, $scope.dateTimeRangeDiffYear.end);
            $scope.dateTimeRangeStart.text = pipDateTimeFormat.formatDateTimeRange($scope.dateTimeRangeStart.start, $scope.dateTimeRangeStart.end);
            $scope.dateTimeRangeEnd.text = pipDateTimeFormat.formatDateTimeRange($scope.dateTimeRangeEnd.start, $scope.dateTimeRangeEnd.end);

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

            // $scope.onSetTimeZone = function (value) {
            //     $timeout(function () {
            //         pipDateTimeFormat.useTimeZone(value)       
            //     }, 0);
                
            //     console.log('Set timezone: ', value);
            // }
        }   
    );

})();

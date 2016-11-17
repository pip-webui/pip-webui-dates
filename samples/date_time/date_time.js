(function (angular) {
    'use strict';

    var thisModule = angular.module('appDateTimes.Date', []);

    // thisModule.config(function (pipTranslateProvider) {
    //     pipTranslateProvider.translations('en', {
    //         EVENT_NEW_START_TIME: 'Start time',
    //         EVENT_NEW_END_TIME: 'End time',
    //         DATE: 'Date',
    //         VALUE: 'Value',
    //         TIME_EDIT_TIME_VIEW: 'Full date editing and viewing',
    //         DATE_RANGE: 'Date range',
    //         DAILY: 'Daily',
    //         WEEKLY: 'Weekly',
    //         MONTHLY: 'Monthly',
    //         YEARLY: 'Yearly',
    //         DISABLED: 'Disabled',
    //         NEXT_WEEK: 'Next week'
    //     });
    //     pipTranslateProvider.translations('ru', {
    //         EVENT_NEW_START_TIME: 'Начало',
    //         EVENT_NEW_END_TIME: 'Конец',
    //         DATE: 'Дата',
    //         VALUE: 'Значение',
    //         TIME_EDIT_TIME_VIEW: 'Изменение и просмотр полной даты',
    //         DATE_RANGE: 'Диапозоны дат',
    //         DAILY: 'Суточный',
    //         WEEKLY: 'Недельный',
    //         MONTHLY: 'Месячный',
    //         YEARLY: 'Годовой',
    //         DISABLED: 'Отключенный',
    //         NEXT_WEEK: 'Следующая неделя'
    //     });
    // });

    thisModule.controller('DateController',
        function ($scope, $timeout, $injector) {

            $timeout(function() {
                $('pre code').each(function(i, block) {
                    Prism.highlightElement(block);
                });
            });
            var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null;

            if (pipTranslate) {
                pipTranslate.setTranslations('en', {
                    DISABLED: 'Disabled',
                    DATE: 'Date',
                    VALUE: 'Value',
                    TIME_EDIT_TIME_VIEW: 'Full date editing and viewing',
                    DATE_RANGE: 'Date range',
                    DAILY: 'Daily',
                    WEEKLY: 'Weekly',
                    MONTHLY: 'Monthly',
                    YEARLY: 'Yearly',
                    NEXT_WEEK: 'Next week',                    
                    SAMPLE: 'Sample',
                    CODE: 'Code'
                });
                pipTranslate.setTranslations('ru', {
                    DISABLED: 'Отключенный',
                    DATE: 'Дата',
                    VALUE: 'Значение',
                    TIME_EDIT_TIME_VIEW: 'Изменение и просмотр полной даты',
                    DATE_RANGE: 'Диапозоны дат',
                    DAILY: 'Суточный',
                    WEEKLY: 'Недельный',
                    MONTHLY: 'Месячный',
                    YEARLY: 'Годовой',
                    NEXT_WEEK: 'Следующая неделя',                    
                    SAMPLE: 'Пример',
                    CODE: 'Пример кода'                    
                });
                $scope.disabledLabel = pipTranslate.translate('DISABLED');
                $scope.dateLabel = pipTranslate.translate('DATE');
                $scope.valueLabel = pipTranslate.translate('VALUE');
                $scope.sampleLabel = pipTranslate.translate('SAMPLE');
                $scope.code = pipTranslate.translate('CODE');

                $scope.teimeEditLabek = pipTranslate.translate('TIME_EDIT_TIME_VIEW');
                $scope.dateRangeLabel = pipTranslate.translate('DATE_RANGE');
                $scope.dailyLabel = pipTranslate.translate('DAILY');
                $scope.weeklyLabel = pipTranslate.translate('WEEKLY');
                $scope.monthlyLabel = pipTranslate.translate('MONTHLY');
                $scope.yearlyLabel = pipTranslate.translate('YEARLY');
                $scope.nextWeekLabel = pipTranslate.translate('NEXT_WEEK');
            } else {
                $scope.disabledLabel = 'Disabled';
                $scope.dateLabel = 'Date';                
                $scope.valueLabel = 'Value';                
                $scope.sampleLabel = 'Sample';
                $scope.codeLabel = 'Code';
                $scope.teimeEditLabek = 'Full date editing and viewing';
                $scope.dateRangeLabel = 'Date range';
                $scope.dailyLabel = 'Daily';
                $scope.weeklyLabel = 'Weekly';
                $scope.monthlyLabel = 'Monthly';
                $scope.yearlyLabel = 'Yearly';
                $scope.nextWeekLabel = 'Next week';                
            }


            $scope.specialDate = new Date('1975-04-08T00:00:00.000Z');
            $scope.specialDateDisabled = false;

            $scope.startDate = new Date('1975-04-08T00:00:00.000Z');
            $scope.endDate = new Date('1975-04-12T00:00:00.000Z');

            $scope.daily = new Date(Date.UTC(2016, 10, 1, 0, 0, 0));
            $scope.weekly = new Date(Date.UTC(2016, 10, 1, 0, 0, 0));
            $scope.weeklyDouble = new Date(Date.UTC(2016, 10, 1, 0, 0, 0));
            $scope.monthly = new Date(Date.UTC(2016, 10, 1, 0, 0, 0));
            $scope.yearly = new Date(Date.UTC(2016, 0, 1, 0, 0, 0));

            $scope.onNextWeek = function () {
                var day = $scope.weekly.getDate() + 7;

                $scope.weekly = new Date(Date.UTC($scope.weekly.getFullYear(), $scope.weekly.getMonth(), day));
            };

            $scope.onChangeWeekly = function() {
                console.log('$scope.weekly', $scope.weekly);
            }
        }
    );

})(window.angular);

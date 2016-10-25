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
                pipTranslate.translations('en', {
                    DISABLED: 'Disabled',
                    DATE: 'Date',
                    VALUE: 'Value',
                    SAMPLE: 'Sample',
                    CODE: 'Code'
                });
                pipTranslate.translations('ru', {
                    DISABLED: 'Отключенный',
                    DATE: 'Дата',
                    VALUE: 'Значение',
                    SAMPLE: 'Пример',
                    CODE: 'Пример кода'                    
                });
                $scope.disabledLabel = pipTranslate.translate('DISABLED');
                $scope.dateLabel = pipTranslate.translate('DATE');
                $scope.valueLabel = pipTranslate.translate('VALUE');
                $scope.sampleLabel = pipTranslate.translate('SAMPLE');
                $scope.code = pipTranslate.translate('CODE');
            } else {
                $scope.disabledLabel = 'Disabled';
                $scope.dateLabel = 'Date';                
                $scope.valueLabel = 'Value';                
                $scope.sampleLabel = 'Sample';
                $scope.codeLabel = 'Code';

            }


            $scope.specialDate = '1975-04-08T00:00:00.00';
            $scope.specialDateDisabled = false;

            $scope.startDate = '1975-04-08T00:00:00.00';
            $scope.endDate = '1975-04-12T00:00:00.00';

            $scope.daily = new Date(Date.UTC(2016, 10, 1, 0, 0, 0));
            $scope.weekly = new Date(Date.UTC(2016, 10, 1, 0, 0, 0));
            $scope.weeklyDouble = new Date(Date.UTC(2016, 10, 1, 0, 0, 0));
            $scope.monthly = new Date(Date.UTC(2016, 10, 1, 0, 0, 0));
            $scope.yearly = new Date(Date.UTC(2016, 0, 1, 0, 0, 0));

            $scope.onNextWeek = function () {
                var day = $scope.weekly.getDate() + 7;

                $scope.weekly = new Date(Date.UTC($scope.weekly.getFullYear(), $scope.weekly.getMonth(), day));
            };
        }
    );

})(window.angular);

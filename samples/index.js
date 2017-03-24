/* global angular */

(function (moment) {
    'use strict';

    var content = [
        { title: 'Time Range', state: 'time_range', url: '/time_range', controller: 'TimeRangeController', templateUrl: 'time_range/time_range.html' },
        { title: 'Date', state: 'date', url: '/date', controller: 'DateController', templateUrl: 'date/date.html' },
        { title: 'Date Range', state: 'date_range', url: '/date_range', controller: 'DateRangeController', templateUrl: 'date_range/date_range.html' },
        { title: 'Date Format', state: 'date_format', url: '/date_format', controller: 'DateFormatController', templateUrl: 'format/date_format.html' },
        { title: 'Moment', state: 'moment', url: '/moment', controller: 'MomentExController', templateUrl: 'moment_examples/moment_ex.html' }
    ];

    var thisModule = angular.module('appDates',
        [
            'ngMaterial',
            'ui.router', 'ui.utils',
            'LocalStorageModule',

            'pipServices',
            'pipTheme.Default', 'pipTheme.BootBarn', 'pipTheme',


            'pipDates',

            'appDateTimes.Date',
            'appDateTimes.DateRange',
            'appDateTimes.TimeRange',
            'appDateTimes.DateFormat',
            'appDateTimes.momentEx'
        ]
    );

    thisModule.config(
        function ($stateProvider, $urlRouterProvider, $mdIconProvider,
            $compileProvider, $httpProvider, $mdDateLocaleProvider) {

            $compileProvider.debugInfoEnabled(false);
            $httpProvider.useApplyAsync(true);

            var contentItem, i;

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);

            for (i = 0; i < content.length; i++) {
                contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }

            $urlRouterProvider.otherwise('/moment');

            // set locales
            moment.locale(['en', 'ru', 'fr']);

            // configure matrials date provider with momentjs
            $mdDateLocaleProvider.parseDate = function (dateString) {
                var m = moment(dateString, 'L', true);

                return m.isValid() ? m.toDate() : new Date(NaN);
            };
            $mdDateLocaleProvider.formatDate = function (date) {
                var m = moment(date);
                return m.isValid() ? m.format('L') : '';
            };

            // set relativeTime configuration
            moment.updateLocale('en', {
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: function (number, withoutSuffix, key, isFuture) {
                        return '00:' + (number < 10 ? '0' : '') + number + ' minutes';
                    },
                    m: "01:00 minutes",
                    mm: function (number, withoutSuffix, key, isFuture) {
                        return (number < 10 ? '0' : '') + number + ':00' + ' minutes';
                    },
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                }
            });
        }
    );

    thisModule.controller('pipSampleController',
        function ($scope, $rootScope, $injector, $state, $mdSidenav, $timeout, $mdTheming, $mdMedia, localStorageService, $mdDateLocale) {

            var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null,
                appThemesDefault = $injector.has('appThemesDefault') ? $injector.get('appThemesDefault') : null,
                pipTheme = $injector.has('pipTheme') ? $injector.get('pipTheme') : null;

            if (pipTranslate) {
                pipTranslate.setTranslations('en', {
                    DATE_TIME: 'Date and time Controls and filters',
                });
                pipTranslate.setTranslations('ru', {
                    DATE_TIME: 'Элементы и фильтры для работы с датой и временем',
                });
                $scope.dateTimeLabel = pipTranslate.translate('DATE_TIME');
            } else {
                $scope.dateTimeLabel = 'Date and time Controls and filters';
            }

            $scope.isTranslated = !!pipTranslate;
            $scope.isTheme = !!pipTheme;
            $scope.$mdMedia = $mdMedia;

            $rootScope.$theme = localStorageService.get('theme') || 'blue';
            if ($scope.isTheme) {
                $scope.themes = _.keys(_.omit($mdTheming.THEMES, 'default'));
            } else {
                $scope.themes = [];
            }


            $scope.languages = ['en', 'ru', 'fr'];
            if (!$rootScope.$language) {
                $rootScope.$language = 'en';
            }
            changeLocale($rootScope.$language);

            $scope.content = content;
            $scope.menuOpened = false;

            // Update page after language changed
            $rootScope.$on('languageChanged', function (event) {
                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('themeChanged', function (event) {
                $state.reload();
            });

            $scope.onSwitchPage = function (state) {
                $mdSidenav('left').close();
                $state.go(state);
            };

            $scope.onThemeClick = function (theme) {
                if ($scope.isTheme) {
                    setTimeout(function () {
                        pipTheme.use(theme, false, false);
                        $rootScope.$theme = theme;
                        $rootScope.$apply();
                    }, 0);
                }
            };

            $scope.onToggleMenu = function () {
                $mdSidenav('left').toggle();
            };

            function changeLocale(locale) {
                var localeDate = moment.localeData();

                moment.locale(locale);

                var localeDate = moment.localeData();

                $mdDateLocale.months = angular.isArray(localeDate._months) ? localeDate._months : localeDate._months.format;
                $mdDateLocale.shortMonths = angular.isArray(localeDate._monthsShort) ? localeDate._monthsShort : localeDate._monthsShort.format;
                $mdDateLocale.days = angular.isArray(localeDate._weekdays) ? localeDate._weekdays : localeDate._weekdays.format;
                $mdDateLocale.shortDays = localeDate._weekdaysMin;

                $mdDateLocale.firstDayOfWeek = localeDate._week.dow;

            }

            $scope.onLanguageClick = function (language) {
                if ($scope.isTranslated) {
                    setTimeout(function () {
                        // change momentjs local 
                        // changeLocale(language);
                        pipTranslate.use(language);
                        $rootScope.$apply();
                    }, 0);
                }

            };

            $scope.isActiveState = function (state) {
                return $state.current.name == state;
            };
        }
    );

})(window.moment);

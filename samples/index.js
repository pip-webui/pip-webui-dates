/* global angular */

(function () {
    'use strict';

    var content = [
        { title: 'Date and time control', state: 'date_time', url: '/date_time', controller: 'DateController', templateUrl: 'date_time/date_time.html' },
        { title: 'Date Format', state: 'date_format', url: '/date_format', controller: 'DateFormatController', templateUrl: 'format/date_format.html' },
        { title: 'Moment', state: 'moment', url: '/moment', controller: 'MomentExController', templateUrl: 'moment_examples/moment_ex.html' }        
    ];

    var thisModule = angular.module('appDates', 
        [
            'ngMaterial',
            'ui.router', 'ui.utils', 
            // 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            // 'wu.masonry', 
            'LocalStorageModule', 

            'pipServices',
            'pipTheme.Default', 'pipTheme.Bootbarn', 'pipTheme', 


            'pipDateTimes',
            
            'appDateTimes.Date', 'appDateTimes.DateFormat', 'appDateTimes.momentEx'
        ]
    );

    thisModule.config(
        function ($stateProvider, $urlRouterProvider, $mdIconProvider,
                  $compileProvider, $httpProvider) { // pipTranslateProvider, pipSideNavProvider, pipAppBarProvider,

            $compileProvider.debugInfoEnabled(false);
            $httpProvider.useApplyAsync(true);

            var contentItem, i;

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);

            for (i = 0; i < content.length; i++) {
                contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }

            $urlRouterProvider.otherwise('/date_time');
        }        
    );

    thisModule.controller('pipSampleController',
        function ($scope, $rootScope, $injector, $state, $mdSidenav, $timeout, $mdTheming, $mdMedia, localStorageService) {

            var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null,
                // appThemesDefault = $injector.has('appThemesDefault') ? $injector.get('appThemesDefault') : null,
                pipTheme = $injector.has('pipTheme') ? $injector.get('pipTheme') : null;

            $scope.isTranslated = !!pipTranslate;
            $scope.isTheme = !!pipTheme;
            $scope.$mdMedia = $mdMedia;

            $rootScope.$theme = localStorageService.get('theme');
            if ($scope.isTheme) {
                $scope.themes = _.keys(_.omit($mdTheming.THEMES, 'default'));
            } else {
                $scope.themes = [];
            }
            

            $scope.languages = ['en', 'ru'];
            if (!$rootScope.$language) {
                $rootScope.$language = 'en';
            }

            $scope.content = content;
            $scope.menuOpened = false;

            // Update page after language changed
            $rootScope.$on('languageChanged', function(event) {
                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('themeChanged', function(event) {
                $state.reload();
            });

            $scope.onSwitchPage = function (state) {
                $mdSidenav('left').close();
                $state.go(state);
            };

            $scope.onThemeClick = function(theme) {
                console.log('onThemeClick');
                if ($scope.isTheme) {
                    console.log('onThemeClick1');
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

            $scope.onLanguageClick = function(language) {
                console.log('onLanguageClick');
                if (pipTranslate) {
                    console.log('onLanguageClick1', language);
                    setTimeout(function () {
                        pipTranslate.use(language);
                        $rootScope.$apply();
                    }, 0);   
                } 
             
            };

            $scope.isActiveState = function (state) {
                return $state.current.name == state;
            };

            // pipTranslateProvider.translations('en', {
            //     'DATE_TIME': 'Date and Time'
            // });

            // pipTranslateProvider.translations('ru', {
            //     'DATE_TIME': 'Дата и время'
            // });
        }
    );

})();

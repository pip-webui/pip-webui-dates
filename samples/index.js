(function (angular) {
    'use strict';

    var thisModule = angular.module('appBasicControls',
        [
            'pipSampleConfig',

            'pipDropdown', 'pipLayout',
            // 3rd Party Modules
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'LocalStorageModule', 'angularFileUpload', 'ngAnimate',
            'pipCore', 'pipData',

            'appDateTimes.Date', 'appDateTimes.DateFormat'
        ]
    );

    thisModule.controller('pipSampleController',
        function ($scope, $rootScope, $state, $mdSidenav, $timeout, pipTranslate, $mdTheming, pipTheme,
                  $mdMedia) {

            $scope.pages = [
                { title: 'Date', state: 'date', url: '/date',
                    controller: 'DateController', templateUrl: '../samples/date/date.html' },
                { title: 'Date Format', state: 'date_format', url: '/date_format',
                    controller: 'DateFormatController', templateUrl: '../samples/format/date_format.html' }
            ];
            $scope.selected = {};
            $timeout(function () {
                $scope.selected.pageIndex = _.findIndex($scope.pages, {state: $state.current.name});
            });

            $scope.onNavigationSelect = function (stateName) {
                if ($state.current.name !== stateName) {
                    $state.go(stateName);
                }
            };

            $scope.onDropdownSelect = function (obj) {
                if ($state.current.name !== obj.state) {
                    $state.go(obj.state);
                }
            };

            $scope.isEntryPage = function () {
                return $state.current.name === 'signin' || $state.current.name === 'signup' ||
                    $state.current.name === 'recover_password' || $state.current.name === 'post_signup';
            };

            $scope.isPadding = function () {
                return $rootScope.$state
                    ? !($rootScope.$state.name === 'date' ||
                    $rootScope.$state.name === 'dropdown' && $mdMedia('xs')) : true;
            };
        }
    );

})(window.angular);

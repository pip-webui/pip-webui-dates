/* global angular */

(function () {
    'use strict';

    var content = [
        { title: 'Date and time control', state: 'date_time', url: '/date_time', controller: 'DateController', templateUrl: 'date_time/date_time.html' },
        { title: 'Date Format', state: 'date_format', url: '/date_format', controller: 'DateFormatController', templateUrl: 'format/date_format.html' },
        { title: 'Moment', state: 'moment', url: '/date_format', controller: 'DateFormatController', templateUrl: 'format/date_format.html' }        
    ];

    var thisModule = angular.module('app', ['ngMaterial', 'appDateTimes.Date', 'appDateTimes.DateFormat', 'pipDateTimes']);

    thisModule.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, pipTranslateProvider) {

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);
        
            for (var i = 0; i < content.length; i++) {
                var contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }
                
            $urlRouterProvider.otherwise('/default');

            pipTranslateProvider.translations('en', {
                'DATE_TIME': 'Date and Time'
            });

            pipTranslateProvider.translations('ru', {
                'DATE_TIME': 'Дата и время'
            });

        });

    thisModule.controller('AppController', 
        function ($scope, $rootScope, $state, $mdSidenav) {
            
            $scope.content = content;
                        
            $scope.onSwitchPage = function(state) {
                $mdSidenav('left').close();
                $state.go(state);
            };
                        
            $scope.isActiveState = function(state) {
                return $state.current.name == state;  
            };
        }
    );

})();

/* global angular */

(function (moment) {
    'use strict';

    var thisModule = angular.module('appDateTimes.momentEx', []);

    thisModule.controller('MomentExController',
        function($scope, $window) {

            $scope.languages = ['en', 'ru'];
            $scope.language = 'en';

            $scope.onLanguageClick = onLanguageClick; 

            $scope.date = new moment();
            $scope.time_from = moment("20111031", "YYYYMMDD").fromNow();      

            return;

            function onLanguageClick(language) {
                $scope.language = language; 
                moment.locale(language);
            };

        }
    );

})(window.moment);

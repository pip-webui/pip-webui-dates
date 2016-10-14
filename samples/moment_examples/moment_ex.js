/* global angular */

(function (moment) {
    'use strict';

    var thisModule = angular.module('appDateTimes.momentEx', []);

    thisModule.controller('MomentExController',
        function($scope, $window) {

            $scope.date = new moment();
            $scope.time_from = moment("20111031", "YYYYMMDD").fromNow();            
        }
    );

})(window.moment);

/* global angular */
// $mdDateLocaleProvider API Documentation


(function (moment) {
    'use strict';

    var thisModule = angular.module('appDateTimes.momentEx', []);

    thisModule.controller('MomentExController',
        function($scope, $rootScope, $window, $injector) {

            var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null

            $scope.moment = moment;
            $scope.date = new moment();
            $scope.dateUTC = new moment.utc();
            $scope.strJSON = '2016-04-11T21:36:24.933Z';     
            $scope.strUTCJSON = '2016-09-19T00:00:00.000Z';                 
            $scope.dateJSON = new moment('2016-04-11T21:36:24.933Z');     
            $scope.dateUTCJSON = new moment('2016-09-19T00:00:00.000Z');   


            $scope.now = $scope.date.toObject();    
console.log('now', $scope.now);
console.log('date', $scope.date);
console.log('dateUTC', $scope.dateUTC);
console.log('dateJSON', $scope.dateJSON);
console.log('dateUTCJSON', $scope.dateUTCJSON);

        $scope.getDateJSON = getDateJSON;
/*
moment.utc();

// as object
moment().toObject() 
// You may also specify a list of locales, and Moment will use the first one it has localizations for.
moment.locale(['tq', 'fr']);
// строгий формат
moment('5917238b-33ff-f849-cd63-80f4c9b37d0c', moment.ISO_8601, true).format()

moment.duration().toJSON();

moment.locale('en'); // set to english
moment.locale(); // returns 'en'
moment.locale('fr'); // set to french
moment.locale(); // returns 'fr'
//Use this to transform a moment object into a date object:
moment().toDate();

*/        
            return;

            function GetNextWeekStart(date) {
                var today = moment();
                //edited part
                var daystoMonday = 0 - (today.isoWeekday() - 1) + 7;       
                var nextMonday = today.subtract('days', daystoMonday);

                return nextMonday;
            }

            function GetNextWeekEnd(date) {
                var nextMonday = GetNextWeekStart();
                var nextSunday = nextMonday.add('days', 6);

                return nextSunday;
            }

            function GetPrevWeekStart() {
                var today = moment();
                var daystoLastMonday = 0 - (1 - today.isoWeekday()) + 7;

                var lastMonday = today.subtract('days', daystoLastMonday);

                return lastMonday;
            }

            function GetPrevWeekEnd() {
                var lastMonday = GetLastWeekStart();
                var lastSunday = lastMonday.add('days', 6);

                return lastSunday; 
            }

            function getDateJSON(date) {
                return JSON.stringify(moment(date));                
            }
        }
    );

})(window.moment);

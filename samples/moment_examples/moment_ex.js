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
            $scope.dateJSON1 = new moment('2014-04-11T21:36:24.933Z');     
            $scope.dateJSON2 = new moment('2014-04-13T21:36:24.933Z');     
            $scope.dateJSON3 = new moment('2014-04-11T21:44:15.933Z');     
            $scope.dateUTCJSON = new moment('2016-09-19T00:00:00.000Z');   




            $scope.now = $scope.date.toObject();    
console.log('now', $scope.now);





        $scope.getDateJSON = getDateJSON;

        $scope.getNextStart = getNextStart;
        $scope.getPrevStart = getPrevStart;
        $scope.getNowStart = getNowStart;

        $scope.formatLongMonthDay = formatLongMonthDay;
        $scope.formatShortMonthDay = formatShortMonthDay;
        $scope.formatDateRange = formatDateRange;
        $scope.formatDateTimeRange = formatDateTimeRange;
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

            var momentRanged = new Array('year','month','week','isoweek', 'day');

            return;

            function isUndefinedOrNull(val) {
                return angular.isUndefined(val) || val === null;
            }

            function getRange(value) {
                if (isUndefinedOrNull(value)) {
                    return 'day';
                }

                var index = momentRanged.indexOf(value)

                if (index < 0) {
                    return 'day'
                } else {
                    return momentRanged[index];
                }
            }

            function getNextStart(value, category) {
                var date, range, result;

                if (isUndefinedOrNull(value)) {
					return '';
				}

				date = moment(value);
				if (!date.isValid()) {
					return '';
				}

                range = getRange(category);
                result = moment(date).startOf(range).add(1, range == 'isoweek' ? 'week' : range);

                return result;
            }

            function getPrevStart(value, category) {
                var date, range, result;

                if (isUndefinedOrNull(value)) {
					return '';
				}

				date = moment(value);
				if (!date.isValid()) {
					return '';
				}

                range = getRange(category);
                result = moment(date).startOf(range).add(-1, range == 'isoweek' ? 'week' : range);

                return result;
            }

            function getNowStart(category) {
                var date, range, result;

				date = new moment();
				if (!date.isValid()) {
					return '';
				}

                range = getRange(category) 
                result = moment(date).startOf(range);

                return result;
            }

            function formatDay(value, basicFormat) {
                var date,
                    format = moment.localeData().longDateFormat(basicFormat ? basicFormat : 'LL'),
                    formatMonthYearless = format.replace(/Y/g,'').replace(/^\W|\W$|\W\W/,'').replace(/M/g,'');

                if (isUndefinedOrNull(value)) {
					return '';
				}

				date = moment(value);

                return date.format(formatMonthYearless);
            }

            function formatMonthDay(value, basicFormat) {
                var date,
                    format = basicFormat ? basicFormat : 'LL',
                    formatLL = moment.localeData().longDateFormat(format),
                    formatYearlessLL = formatLL.replace(/Y/g,'').replace(/^\W|\W$|\W\W/,'');

                if (isUndefinedOrNull(value)) {
					return '';
				}

				date = moment(value);

                return date.format(formatYearlessLL);
            }

            function formatLongMonthDay(value) {
                return formatMonthDay(value, 'LL');
            }

            function formatShortMonthDay(value) {
                return formatMonthDay(value, 'L');        
            }    

            function formatRange(value1, value2, basicFormat) {
                var dateStart, dateEnd,
                    format = basicFormat ? basicFormat : 'LL';

                if (isUndefinedOrNull(value1)) { 
                    dateStart = null;
                } else { 
                    dateStart = moment(value1);
                }
                if (isUndefinedOrNull(value2)) {
					dateEnd = null;
				} else { 
                    dateEnd = moment(value2);
                }

                if (dateStart === null && dateEnd === null) return '';

                if  (dateStart === null) {
                    return dateEnd.format(basicFormat);
                } else if (dateEnd === null || dateStart.isSame(dateEnd)) {
                    return dateStart.format(basicFormat);;
                }

                if (dateStart.isAfter(dateEnd)) {
                    // todo localization
                    throw new Error('Date range error. Start date is more than end date.');
                }

                if (dateStart.year() == dateEnd.year()) {
                    if (dateStart.month() == dateEnd.month()) {
                        return formatDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
                    } else {
                        return formatMonthDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
                    }
                } else {
                    return dateStart.format(basicFormat) + '-' + dateEnd.format(basicFormat);
                }                
            }

            function formatDateRange(value1, value2) {
                 return formatRange(value1, value2, 'LL');
            } 

            function formatDateTimeRange(value1, value2) {
                return formatRange(value1, value2, 'LLL');
            }      

            function getDateJSON(date) {
                return JSON.stringify(moment(date));                
            }                   

        }
    );

})(window.moment);

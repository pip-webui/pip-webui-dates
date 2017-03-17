/// <reference path="../../typings/tsd.d.ts" />

class DateRange {
    private currentDate: Date;
    private currentYear: number;
    private currentMonth: number;
    private currentDay: number;
    private prevState: any = {};
    private currentState: any = {};
    private localeDate: any;
    private momentMonths: any;
    private momentDays: any;
    private momentShortDays: any;
    private momentFirstDayOfWeek: any;

    public pipDateRangeType: string;
    public pipChanged: Function;
    public year: number;
    public month: number;
    public week: any;
    public day: number;
    public shortMonths: string[];
    public days: number[];
    public weeks: any[];
    public months: number[];
    public years: number[];
    public nameDays: string[];
    public model: any;
    public disabled: Function;
    public disableControls: boolean;
    public timeMode: string;

    constructor(
        $scope: ng.IScope, 
        $element, 
        public $mdMedia: angular.material.IMedia, 
        $rootScope: ng.IRootScopeService, 
        $injector: angular.auto.IInjectorService, 
        private $timeout: ng.ITimeoutService) {

        this.localeDate = moment.localeData();
        this.momentMonths = angular.isArray(this.localeDate._months) ? this.localeDate._months : this.localeDate._months.format;
        this.momentDays = angular.isArray(this.localeDate._weekdays) ? this.localeDate._weekdays : this.localeDate._weekdays.format;
        this.momentShortDays = this.localeDate._weekdaysMin;
        this.momentFirstDayOfWeek = this.localeDate._week.dow;

        this.currentDate = new Date();
        this.currentYear = this.currentDate.getUTCFullYear();
        this.currentMonth = this.currentDate.getUTCMonth() + 1;
        this.currentDay = this.currentDate.getUTCDate();


        this.init();

        this.disableControls = this.disabled ? this.disabled() : false;

            // React on changes
        $scope.$watch('model', (newValue, oldValue) => {
            if (newValue !== oldValue) {
                this.getValue(newValue);
            }
        });

        $scope.$watch('$ctrl.disabled', (newValue) => {
            this.disableControls = newValue ? true : false;
        });

        $scope.$watch('pipDateRangeType', (newValue, oldValue) => {
            if (newValue !== oldValue && oldValue) {
                this.init();
            }
        });

    }

    public onMonthChanged(): void {
        if (this.pipDateRangeType === 'weekly') {
            let date: Date, dayOfWeek: number;
            date = new Date(Date.UTC(this.year, this.month - 1, 1));
            dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
            this.week = this.getWeekByDate(dayOfWeek, this.month - 1, this.year);
            this.correctWeek();
            this.adjustWeek();
        } else {
            this.adjustDay();
        }
        this.setValue();
    }

    public onYearChanged() {
        let date: Date, dayOfWeek: number;
        date = new Date(Date.UTC(this.year, this.month - 1, 1));
        dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
        if (this.pipDateRangeType === 'weekly') {
            this.week = this.getWeekByDate(dayOfWeek, this.month - 1, this.year);
            this.adjustWeek();
            this.correctWeek();
        } else {
            this.adjustDay();
        }
        this.setValue();
    };

    public onWeekChange() {
        if (this.pipDateRangeType === 'weekly') {
            this.adjustWeek();
            this.correctWeek();
        } else {
            this.adjustDay();
        }
        this.setValue();
    };

    public isDay(): boolean {
        return this.pipDateRangeType === 'daily';
    };

    public isWeek(): boolean {
        return this.pipDateRangeType === 'weekly';
    };

    public isMonth(): boolean {
        return this.pipDateRangeType === 'daily' ||
               this.pipDateRangeType === 'weekly' ||
               this.pipDateRangeType === 'monthly';
    };

    public onChange() {
        if (this.pipChanged) {
            this.$timeout(() => {
                this.pipChanged();
            }, 0);
        }
    };

    private setCurrent() {
        this.currentState.day = this.day;
        this.currentState.month = this.month;
        this.currentState.year = this.year;
        this.currentState.week = this.week;
        this.currentState.dateRangeType = this.pipDateRangeType;
        this.currentState.model = this.model;
    }

    private fillLists() {
        this.days = this.dayList(this.month, this.year);
        this.weeks = this.weekList(this.month, this.year);
        this.months = this.monthList();
        this.shortMonths = this.monthList();
        this.years = this.yearList();
    }

    private correctWeek() {
        if (!this.prevState.model || this.prevState.model && this.prevState.model.getTime() >= this.model.getTime()) {
            // if shift week -> increase month
            if (this.weeks && this.weeks[this.week] && this.weeks[this.week].id <= 0) {
                if (this.month < 12) {
                    this.month += 1;
                } else {
                    this.month = 1;
                    this.year += 1;
                }
                this.fillLists();
            }
        }
    }

    private init() {
        let value: Date;

        value = this.model ? new Date(this.model) : null;
        this.day = value ? value.getUTCDate() : null;
        this.month = value ? value.getUTCMonth() + 1 : null;
        this.year = value ? value.getUTCFullYear() : null;
        this.week = value ? this.getWeekByDate(this.day, this.month - 1, this.year) : null;

        this.fillLists();

        if (this.pipDateRangeType === 'weekly') {
            this.correctWeek();
        }
        this.adjustWeek();
        this.setValue();
    }

    public onYearClick() {
        if (!this.year) {
            this.year = this.currentYear;
        }
    };

    public onMonthClick() {
        if (!this.month) {
            this.month = this.currentMonth;
        }
    };

    public onDayClick() {
        if (!this.year) {
            this.day = this.currentDay;
        }
    };
            // ---------------------------------------------------------------------------------------

    public getCountDay(month: number, year: number): number {
        let count = 31;

        if (month === 4 || month === 6 || month === 9 || month === 11) {
            count = 30;
            return count;
        }

        if (month === 2) {
            if (year) {
                count = year % 4 === 0 ? 29 : 28;
                return count;
            }
            count = 28;
        }
    
        return count;
       
    }

    private dayList(month: number, year: number): number[] {
        let count: number, days: number[];

        count = this.getCountDay(month, year);
        this.nameDays = [];
        this.days = [];
        for (let i: number = 1; i <= count; i++) {
            this.days.push(i);
            this.nameDays.push(this.momentShortDays[moment([year, month - 1, i]).weekday()]);
        }

        return days;
    }

    public getWeekByDate(day, month, year) {
        let date: Date, dayOfWeek: number, startWeek;

        date = new Date(Date.UTC(year, month, day));
        dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;

        if (dayOfWeek === 1) {
            startWeek = day;
        } else {
            startWeek = day + 1 - dayOfWeek;
        }

        return startWeek;
    }

    public getWeek(day: number, countDay: number, countPrevMonthDay) {
        let endDay: number, startDay: number;

        endDay = day + 6 > countDay ? countDay - day - 6 : day + 6;
        startDay = day > 0 ? day : countPrevMonthDay + day;

        return startDay.toString() + ' - ' + (Math.abs(endDay)).toString();
    }

    public weekList(month: number, year: number) { // возвращает список начала надели
        let weeks: any[], countDay: number, countPrevMonthDay: number, startWeek: number;

        weeks = [];  // в массиве первые дни недели в текущем месяце
        countDay = this.getCountDay(month, year);
        startWeek = this.getWeekByDate(1, month - 1, year);

        countPrevMonthDay = month - 1 ? this.getCountDay(month - 1, year) : this.getCountDay(12, year - 1);
        while (startWeek < countDay + 1) {
            weeks.push({
                id: startWeek,
                name: this.getWeek(startWeek, countDay, countPrevMonthDay)
            });
            startWeek = startWeek + 7;
        }

        return weeks;
    }

    private monthList() {
        let months: any[] = [];

        for (let i: number = 1; i <= 12; i++) {
            months.push({
                id: i,
                name: this.momentMonths[i-1]
            });
        }

        return months;
    }

    private yearList() {
        let startYear: number, endYear: number, years: any[] = [];

        switch (this.timeMode) {
            case 'future':
                startYear = this.currentYear;
                endYear = this.currentYear + 100;
                break;
            case 'past':
                startYear = this.currentYear - 100;
                endYear = this.currentYear;
                break;
            case 'now':
                startYear = this.currentYear - 50;
                endYear = this.currentYear + 100;
                break;
            default:
                startYear = this.currentYear - 50;
                endYear = this.currentYear + 50;
                break;
            }
            if (this.timeMode === 'future') {
                for (let i: number = startYear; i <= endYear; i++) {
                    years.push(i);
                }
            } else {
                for (let i: number = endYear; i >= startYear; i--) {
                    years.push(i);
                }
            }

        return years;
    }

    private adjustDay() {
        let days = this.dayList(this.month, this.year);

        switch (this.pipDateRangeType) {
            case 'monthly':
                this.day = 1;
                break;
            case 'yearly':
                this.month = 1;
                this.day = 1;
                break;
            default:
                if (this.days.length !== days.length) {
                    if (this.day > days.length) {
                        this.day = days.length;
                    }
                }
                break;
            }
        this.days = days;
    }

    private adjustWeek() {
        let weeks = this.weekList(this.month, this.year);
        this.week = this.getWeekByDate(this.week, this.month - 1, this.year);
        this.weeks = weeks;
    }

    private getValue(v) {
        let value: Date, day: number, month: number, year: number, week: string;

        value = v ? new Date(v) : null;
        // Define values
        day = value ? value.getUTCDate() : null;
        month = value ? value.getUTCMonth() + 1 : null;
        year = value ? value.getUTCFullYear() : null;
        week = value ? this.getWeekByDate(day, month - 1, year) : null;
        // Exit if nothing to update
        if (this.day === day && this.month === month && this.year === year && this.week === week) {
            return;
        }
        // Assign values to scope
        this.day = day;
        this.month = month;
        this.year = year;
        this.week = week;

        // Define data sources
        this.days = this.dayList(this.month, this.year);
        this.weeks = this.weekList(this.month, this.year);
    }

    public setValue() {
        let value;

        if (this.pipDateRangeType === 'weekly') {
            value = new Date(this.year, this.month - 1, this.week, 0, 0, 0, 0);
            value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
            this.model = value;
        } else {
            value = new Date(this.year, this.month - 1, this.day, 0, 0, 0, 0);
            value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
            this.model = value;
        }

        this.prevState = _.cloneDeep(this.currentState);
        this.setCurrent();
        this.onChange();
    }

} 

(function () {
    'use strict';
    var thisModule = angular.module('pipDateRange', ['pipDates.Templates']);

    thisModule.directive('pipDateRange',
        function () {
            return {
                restrict: 'E',
                require: 'ngModel',
                scope: {
                    timeMode: '@pipTimeMode',
                    disabled: '&ngDisabled',
                    model: '=ngModel',
                    pipChanged: '&',
                    pipDateRangeType: '@',
                    pipDateFormat: '@',
                    pipNoLine: '@'
                },
                templateUrl: 'date_range_directive/date_range.html',
                controller: 'pipDateRangeController'
            };
        });

    // Todo: Remove dependency on Translate. Use moment localization
    thisModule.controller('pipDateRangeController',
        function ($scope, $element, $mdMedia, $rootScope, $injector, $timeout) { //pipTranslate, 
            var currentDate,
                currentYear,
                currentMonth,
                currentDay,
                prevState: any = {}, 
                currentState: any = {},
                localeDate: any = moment.localeData(),
                momentMonths = angular.isArray(localeDate._months) ? localeDate._months : localeDate._months.format,
                momentDays = angular.isArray(localeDate._weekdays) ? localeDate._weekdays : localeDate._weekdays.format,
                momentShortDays = localeDate._weekdaysMin,
                momentFirstDayOfWeek = localeDate._week.dow;

            // var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null;

            // if (pipTranslate) {
            //     pipTranslate.setTranslations('en', {
            //         EVENT_NEW_START_TIME: 'Start time',
            //         EVENT_NEW_END_TIME: 'End time'
            //     });
            //     pipTranslate.setTranslations('ru', {
            //         EVENT_NEW_START_TIME: 'Начало',
            //         EVENT_NEW_END_TIME: 'Конец'                
            //     });
            //     $scope.startLabel = $scope.pipStartLabel ? pipTranslate.translate($scope.pipStartLabel)
            //             : pipTranslate.translate('EVENT_NEW_START_TIME');
            //     $scope.endLabel = $scope.pipEndLabel ? pipTranslate.translate($scope.pipEndLabel)
            //             : pipTranslate.translate('EVENT_NEW_END_TIME');
            // } else {
            //     $scope.startLabel = $scope.pipStartLabel ? $scope.pipStartLabel : 'Start time';
            //     $scope.endLabel = $scope.pipEndLabel ? $scope.pipEndLabel : 'End time';              
            // }

            currentDate = new Date();
            currentYear = currentDate.getUTCFullYear();
            currentMonth = currentDate.getUTCMonth() + 1;
            currentDay = currentDate.getUTCDate();

            $scope.onDayChanged = function () {
                setValue();
            };

            $scope.onMonthChanged = function () {
                if ($scope.pipDateRangeType === 'weekly') {
                    var date, dayOfWeek;

                    date = new Date(Date.UTC($scope.year, $scope.month - 1, 1));
                    dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
                    $scope.week = getWeekByDate(dayOfWeek, $scope.month - 1, $scope.year);
                    correctWeek();
                    adjustWeek();
                } else {
                    adjustDay();
                }
                setValue();
            };

            $scope.onYearChanged = function () {
                var date, dayOfWeek;

                date = new Date(Date.UTC($scope.year, $scope.month - 1, 1));
                dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;
                if ($scope.pipDateRangeType === 'weekly') {
                    $scope.week = getWeekByDate(dayOfWeek, $scope.month - 1, $scope.year);
                    adjustWeek();
                    correctWeek();
                } else {
                    adjustDay();
                }
                setValue();
            };

            $scope.onWeekChange = function () {
                if ($scope.pipDateRangeType === 'weekly') {
                    adjustWeek();
                    correctWeek();
                } else {
                    adjustDay();
                }
                setValue();
            };

            // visibility
            $scope.isDay = function () {
                return $scope.pipDateRangeType === 'daily';
            };

            $scope.isWeek = function () {
                return $scope.pipDateRangeType === 'weekly';
            };

            $scope.isMonth = function () {
                return $scope.pipDateRangeType === 'daily' ||
                    $scope.pipDateRangeType === 'weekly' ||
                    $scope.pipDateRangeType === 'monthly';
            };

            $scope.onChange = function () {
                if ($scope.pipChanged) {
                    $timeout(function() {
                        $scope.pipChanged();
                    }, 0);
                }
            };

            function setCurrent() {
                currentState.day = $scope.day;
                currentState.month = $scope.month;
                currentState.year = $scope.year;
                currentState.week = $scope.week;
                currentState.dateRangeType = $scope.pipDateRangeType;
                currentState.model = $scope.model;
            }

            function fillLists() {
                $scope.days = dayList($scope.month, $scope.year);
                $scope.weeks = weekList($scope.month, $scope.year);
                $scope.months = monthList();
                $scope.shortMonths = monthList();
                $scope.years = yearList();

            }

            function correctWeek() {
                if (!prevState.model || prevState.model && prevState.model.getTime() >= $scope.model.getTime()) {
                    // if shift week -> increase month
                    if ($scope.weeks && $scope.weeks[$scope.week] && $scope.weeks[$scope.week].id <= 0) {
                        if ($scope.month < 12) {
                            $scope.month += 1;
                        } else {
                            $scope.month = 1;
                            $scope.year += 1;
                        }
                        fillLists();
                    }
                }
            }

            function init() {
                var value;

                value = $scope.model ? new Date($scope.model) : null;
                $scope.day = value ? value.getUTCDate() : null;
                $scope.month = value ? value.getUTCMonth() + 1 : null;
                $scope.year = value ? value.getUTCFullYear() : null;
                $scope.week = value ? getWeekByDate($scope.day, $scope.month - 1, $scope.year) : null;

                fillLists();

                if ($scope.pipDateRangeType === 'weekly') {
                    correctWeek();
                    adjustWeek();
                } else {
                    adjustDay();
                }
                setValue();
            }

            // Set initial values
            $scope.$mdMedia = $mdMedia;

            init();

            $scope.disableControls = $scope.disabled ? $scope.disabled() : false;

            // React on changes
            $scope.$watch('model', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    getValue(newValue);
                }
            });

            $scope.$watch($scope.disabled, function (newValue) {
                $scope.disableControls = newValue;
            });

            $scope.$watch('pipDateRangeType', function (newValue, oldValue) {
                if (newValue !== oldValue && oldValue) {
                    init();
                }
            });

            $scope.onYearClick = function () {
                if (!$scope.year) {
                    $scope.year = currentYear;
                }
            };

            $scope.onMonthClick = function () {
                if (!$scope.month) {
                    $scope.month = currentMonth;
                }
            };

            $scope.onDayClick = function () {
                if (!$scope.year) {
                    $scope.day = currentDay;
                }
            };
            // ---------------------------------------------------------------------------------------

            function getCountDay(month, year) {
                var count = 31;

                if (month === 4 || month === 6 || month === 9 || month === 11) {
                    count = 30;
                } else if (month === 2) {
                    if (year) {
                        // Calculate leap year (primitive)
                        count = year % 4 === 0 ? 29 : 28;
                    } else {
                        count = 28;
                    }
                }

                return count;
            }

            function dayList(month, year) {
                var count, days, i, ln;

              //  ln = $rootScope.$language || 'en';
                count = getCountDay(month, year);
                $scope.nameDays = [];
                days = [];
                for (i = 1; i <= count; i++) {
                    days.push(i);
                    $scope.nameDays.push(momentShortDays[moment([year, month - 1, i]).weekday()]);
                }

                return days;
            }

            function getWeekByDate(day, month, year) {
                var date, dayOfWeek, startWeek;

                date = new Date(Date.UTC(year, month, day));
                dayOfWeek = date.getUTCDay() ? date.getUTCDay() : 7;

                if (dayOfWeek === 1) {
                    startWeek = day;
                } else {
                    startWeek = day + 1 - dayOfWeek;
                }

                return startWeek;
            }

            function getWeek(day, countDay, countPrevMonthDay) {
                var endDay, startDay;

                endDay = day + 6 > countDay ? countDay - day - 6 : day + 6;
                startDay = day > 0 ? day : countPrevMonthDay + day;

                return startDay.toString() + ' - ' + (Math.abs(endDay)).toString();
            }

            function weekList(month, year) { // возвращает список начала надели
                var weeks, countDay, countPrevMonthDay, startWeek;

                weeks = [];  // в массиве первые дни недели в текущем месяце
                countDay = getCountDay(month, year);
                startWeek = getWeekByDate(1, month - 1, year);

                countPrevMonthDay = month - 1 ? getCountDay(month - 1, year) : getCountDay(12, year - 1);
                while (startWeek < countDay + 1) {
                    weeks.push({
                        id: startWeek,
                        name: getWeek(startWeek, countDay, countPrevMonthDay)
                    });
                    startWeek = startWeek + 7;
                }

                return weeks;
            }

            function monthList() {
                var months = [], i;

                for (i = 1; i <= 12; i++) {
                    months.push({
                        id: i,
                        name: momentMonths[i-1]
                    });
                }

                return months;
            }

            function yearList() {
                var startYear, i,
                    endYear,
                    years = [];

                switch ($scope.timeMode) {
                    case 'future':
                        startYear = currentYear;
                        endYear = currentYear + 100;
                        break;
                    case 'past':
                        startYear = currentYear - 100;
                        endYear = currentYear;
                        break;
                    case 'now':
                        startYear = currentYear - 50;
                        endYear = currentYear + 100;
                        break;
                    default:
                        startYear = currentYear - 50;
                        endYear = currentYear + 50;
                        break;
                }
                if ($scope.timeMode === 'future') {
                    for (i = startYear; i <= endYear; i++) {
                        years.push(i);
                    }
                } else {
                    for (i = endYear; i >= startYear; i--) {
                        years.push(i);
                    }
                }

                return years;
            }

            function adjustDay() {
                var days = dayList($scope.month, $scope.year);

                switch ($scope.pipDateRangeType) {
                    case 'monthly':
                        $scope.day = 1;
                        break;
                    case 'yearly':
                        $scope.month = 1;
                        $scope.day = 1;
                        break;
                    default:
                        if ($scope.days.length !== days.length) {
                            if ($scope.day > days.length) {
                                $scope.day = days.length;
                            }
                        }
                        break;
                }
                $scope.days = days;
            }

            function adjustWeek() {
                var weeks;

                weeks = weekList($scope.month, $scope.year);
                $scope.week = getWeekByDate($scope.week, $scope.month - 1, $scope.year);
                $scope.weeks = weeks;
            }

            function getValue(v) {
                var value, day, month, year, week;

                value = v ? new Date(v) : null;
                // Define values
                day = value ? value.getUTCDate() : null;
                month = value ? value.getUTCMonth() + 1 : null;
                year = value ? value.getUTCFullYear() : null;
                week = value ? getWeekByDate(day, month - 1, year) : null;
                // Exit if nothing to update
                if ($scope.day === day && $scope.month === month && $scope.year === year && $scope.week === week) {
                    return;
                }
                // Assign values to scope
                $scope.day = day;
                $scope.month = month;
                $scope.year = year;
                $scope.week = week;

                // Define data sources
                $scope.days = dayList($scope.month, $scope.year);
                $scope.weeks = weekList($scope.month, $scope.year);
            }

            function setValue() {
                var value;

                if ($scope.pipDateRangeType === 'weekly') {
                    value = new Date($scope.year, $scope.month - 1, $scope.week, 0, 0, 0, 0);
                    value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
                    $scope.model = value;
                } else {
                    value = new Date($scope.year, $scope.month - 1, $scope.day, 0, 0, 0, 0);
                    value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
                    $scope.model = value;
                }

                prevState = _.cloneDeep(currentState);
                setCurrent();
                $scope.onChange();
            }
        }
    );

})();

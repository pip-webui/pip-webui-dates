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
        public $mdMedia: angular.material.IMedia,
        private $timeout: ng.ITimeoutService,
        $scope: ng.IScope,
        $element,
        $rootScope: ng.IRootScopeService,
        $injector: angular.auto.IInjectorService) {

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
        $scope.$watch('$ctrl.model', (newValue, oldValue) => {
            if (newValue !== oldValue) {
                this.getValue(newValue);
            }
        });

        $scope.$watch('$ctrl.disabled', (newValue) => {
            this.disableControls = newValue ? true : false;
        });

        $scope.$watch('$ctrl.pipDateRangeType', (newValue, oldValue) => {
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
        days = [];
        for (let i: number = 1; i <= count; i++) {
            days.push(i);
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
                name: this.momentMonths[i - 1]
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

(() => {
    'use strict';

    const daterange: ng.IComponentOptions = {
                bindings: {
                    timeMode: '@pipTimeMode',
                    disabled: '&ngDisabled',
                    model: '=ngModel',
                    pipChanged: '&',
                    pipDateRangeType: '@',
                    pipDateFormat: '@',
                    pipNoLine: '@'
                },
                templateUrl: 'date_range_directive/date_range.html',
                controller: DateRange //'pipDateRangeController'
            
        };
    angular.module('pipDateRange', ['pipDates.Templates']).component('pipDateRange', daterange)
})();

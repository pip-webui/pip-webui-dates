/// <reference path="../../typings/tsd.d.ts" />

class DateController {
    private value: any;
    private localeDate: moment.MomentLanguageData = moment.localeData();
    private momentMonths: any[];
    private momentDays: any[];
    private momentShortDays: any;
    private momentFirstDayOfWeek: any;

    public timeMode: string;
    public day: number;
    public month: number;
    public year: number;

    public model: Date;
    public ngChange: () => void;

    public days: number[];
    public months: any[];
    public years: number[];
    public disabled: () => boolean;
    public disableControls: boolean;

    constructor(
        $injector: angular.auto.IInjectorService,
        $scope: ng.IScope) {
        this.momentMonths = angular.isArray(this.localeDate['_months']) ? this.localeDate['_months'] : this.localeDate['_months'].format;
        this.momentDays = angular.isArray(this.localeDate['_weekdays']) ? this.localeDate['_weekdays'] : this.localeDate['_weekdays'].format;
        this.momentShortDays = this.localeDate['_weekdaysMin'];
        this.momentFirstDayOfWeek = this.localeDate['_week'].dow;


        let value = this.model ? _.isDate(this.model) ? this.model : new Date(this.model) : null;
        this.day = value ? value.getDate() : null;
        this.month = value ? value.getMonth() + 1 : null;
        this.year = value ? value.getFullYear() : null;



        this.days = this.dayList(this.month, this.year);
        this.months = this.monthList();
        this.years = this.yearList();

        this.disableControls = this.disabled ? this.disabled() : false;

        // React on changes
        $scope.$watch('model', (newValue) => {
            this.getValue(newValue);
        });

        $scope.$watch(this.disabled, (newValue) => {
            this.disableControls = newValue;
        });
    }

    private dayList(month: number, year: number): number[] {
        let count: number = 31, days: number[] = [];

        if (month === 4 || month === 6 || month === 9 || month === 11) {
            count = 30;
        } else {
            if (month === 2) {
                if (year) {
                    // Calculate leap year (primitive)
                    count = year % 4 === 0 ? 29 : 28;
                } else {
                    count = 28;
                }
            }
        }
        for (let i: number = 1; i <= count; i++) {
            days.push(i);
        }

        return days;
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

    private yearList(): number[] {
        let currentYear: number = new Date().getFullYear(),
            startYear: number = this.timeMode === 'future' ? currentYear : currentYear - 100,
            endYear: number = this.timeMode === 'past' ? currentYear : currentYear + 100,
            years = [];

        if (this.timeMode === 'past') {
            for (let i: number = endYear; i >= startYear; i--) {
                years.push(i);
            }
        } else {
            for (let i: number = startYear; i <= endYear; i++) {
                years.push(i);
            }
        }

        return years;
    }

    private adjustDay() {
        let days = this.dayList(this.month, this.year);

        if (this.days.length !== days.length) {
            if (this.day > days.length) {
                this.day = days.length;
            }

            this.days = days;
        }
    }

    private getValue(v: any) {
        let value: Date = v ? _.isDate(v) ? v : new Date(v) : null,
            day: number = value ? value.getDate() : null,
            month: number = value ? value.getMonth() + 1 : null,
            year: number = value ? value.getFullYear() : null;

        // Update day list if month and year were changed
        if (this.month !== month && this.year !== year) {
            this.days = this.dayList(this.month, this.year);
        }

        // Assign values to scope
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public setValue() {
        let value: Date;

        if (this.day && this.month && this.year) {
            value = new Date(this.year, this.month - 1, this.day, 0, 0, 0, 0);
            this.model = value;
            this.ngChange();
        }
    }

    public onMonthChanged() {
        this.adjustDay();
        this.setValue();
    }

    public onYearChanged() {
        this.adjustDay();
        this.setValue();
    }



}

(() => {

    angular.module('pipDate', ['pipDates.Templates'])
        .directive('pipDate',
        function () {
            return {
                restrict: 'E',
                require: 'ngModel',
                scope: {
                    timeMode: '@pipTimeMode',
                    disabled: '&ngDisabled',
                    model: '=ngModel',
                    ngChange: '&'
                },
                templateUrl: 'date_directive/date.html',
                controller: 'pipDateController'
            };
        }
        )
        .controller('pipDateController',
        function ($scope, $element, $injector) { //pipTranslate
            var value,
                localeDate: any = moment.localeData(),
                momentMonths = angular.isArray(localeDate._months) ? localeDate._months : localeDate._months.format,
                momentDays = angular.isArray(localeDate._weekdays) ? localeDate._weekdays : localeDate._weekdays.format,
                momentShortDays = localeDate._weekdaysMin,
                momentFirstDayOfWeek = localeDate._week.dow;

            var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null;

            if (pipTranslate) {
                pipTranslate.setTranslations('en', {
                    DAY: 'Day',
                    MONTH: 'Month',
                    YEAR: 'Year'
                });
                pipTranslate.setTranslations('ru', {
                    DAY: 'День',
                    MONTH: 'Месяц',
                    YEAR: 'Год'
                });
                $scope.dayLabel = pipTranslate.translate('DAY');
                $scope.monthLabel = pipTranslate.translate('MONTH');
                $scope.yearLabel = pipTranslate.translate('YEAR');
            } else {
                $scope.dayLabel = 'Day';
                $scope.monthLabel = 'Month';
                $scope.yearLabel = 'Year';

            }

            function dayList(month, year) {
                var count = 31, days = [], i;

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

                for (i = 1; i <= count; i++) {
                    days.push(i);
                }

                return days;
            }

            function monthList() {
                var months = [], i;

                for (i = 1; i <= 12; i++) {
                    months.push({
                        id: i,
                        name: momentMonths[i - 1]
                    });
                }

                return months;
            }

            function yearList() {
                var i,
                    currentYear = new Date().getFullYear(),
                    startYear = $scope.timeMode === 'future' ? currentYear : currentYear - 100,
                    endYear = $scope.timeMode === 'past' ? currentYear : currentYear + 100,
                    years = [];

                if ($scope.timeMode === 'past') {
                    for (i = endYear; i >= startYear; i--) {
                        years.push(i);
                    }
                } else {
                    for (i = startYear; i <= endYear; i++) {
                        years.push(i);
                    }
                }

                return years;
            }

            function adjustDay() {
                var days = dayList($scope.month, $scope.year);

                if ($scope.days.length !== days.length) {
                    if ($scope.day > days.length) {
                        $scope.day = days.length;
                    }

                    $scope.days = days;
                }
            }

            function getValue(v) {
                var value = v ? _.isDate(v) ? v : new Date(v) : null,
                    day = value ? value.getDate() : null,
                    month = value ? value.getMonth() + 1 : null,
                    year = value ? value.getFullYear() : null;

                // Update day list if month and year were changed
                if ($scope.month !== month && $scope.year !== year) {
                    $scope.days = dayList($scope.month, $scope.year);
                }

                // Assign values to scope
                $scope.day = day;
                $scope.month = month;
                $scope.year = year;
            }

            function setValue() {
                var value;

                if ($scope.day && $scope.month && $scope.year) {
                    value = new Date($scope.year, $scope.month - 1, $scope.day, 0, 0, 0, 0);
                    $scope.model = value;
                    $scope.ngChange();
                }
            }

            $scope.onDayChanged = function () {
                setValue();
            };

            $scope.onMonthChanged = function () {
                adjustDay();
                setValue();
            };

            $scope.onYearChanged = function () {
                adjustDay();
                setValue();
            };

            // Set initial values
            value = $scope.model ? _.isDate($scope.model) ? $scope.model : new Date($scope.model) : null;
            $scope.day = value ? value.getDate() : null;
            $scope.month = value ? value.getMonth() + 1 : null;
            $scope.year = value ? value.getFullYear() : null;



            $scope.days = dayList($scope.month, $scope.year);
            $scope.months = monthList();
            $scope.years = yearList();

            $scope.disableControls = $scope.disabled ? $scope.disabled() : false;

            // React on changes
            $scope.$watch('model', function (newValue) {
                getValue(newValue);
            });

            $scope.$watch($scope.disabled, function (newValue) {
                $scope.disableControls = newValue;
            });
        }
        );

})();


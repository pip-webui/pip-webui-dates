
(() => {
    interface IDateBindings {
        [key: string]: any;

        timeMode: any,
        disabled: any,
        model: any,
        ngChange: any
    }

    const DateBindings: IDateBindings = {
        timeMode: '@pipTimeMode',
        disabled: '&ngDisabled',
        model: '<ngModel',
        ngChange: '<'
    }

    class DateChanges implements ng.IOnChangesObject, IDateBindings {
        [key: string]: ng.IChangesObject<any>;

        timeMode: ng.IChangesObject<string>;
        disabled: ng.IChangesObject<() => boolean>;
        model: ng.IChangesObject<Date>;
        ngChange: ng.IChangesObject<(date: Date) => void>;
    }


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
        public ngChange: (date: Date) => void;

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

        }

        public $onChanges(changes: DateChanges) {
            if (changes.model && changes.model.currentValue) {
                this.model = changes.model.currentValue;
                this.getValue(this.model);
            }
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
                this.ngChange(this.model);
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

    const DateComponent: ng.IComponentOptions = {
        bindings: DateBindings,
        templateUrl: 'date_directive/Date.html',
        controller: DateController
    }

    angular.module('pipDate', ['pipDates.Templates'])
        .component('pipDate', DateComponent)
})();


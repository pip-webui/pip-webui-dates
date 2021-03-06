
(() => {
    class TimeRangeData {
        start: any;
        end: any;
    }

    interface ITimeRangeBindings {
        [key: string]: any;

        start: any;
        end: any;
    }

    const TimeRangeBindings: ITimeRangeBindings = {
        start: '<?pipStartDate',
        end: '<?pipEndDate'
    }

    class TimeRangeChanges implements ng.IOnChangesObject, ITimeRangeBindings {
        [key: string]: ng.IChangesObject<any>;

        start: ng.IChangesObject<any>;
        end: ng.IChangesObject<any>;
    }

    class TimeRangeController {
        public data: TimeRangeData;
        public start: any;
        public end: any;

        constructor($scope: ng.IScope, $attrs: ng.IAttributes, $element: JQuery) {
            "ngInject";
            this.data = new TimeRangeData();
            this.defineStartDate();
            this.defineEndDate();

            $element.addClass('pip-time-range');
        }

        public $onChanges(changes: TimeRangeChanges) {
            if (changes.start && changes.start.currentValue) {
                this.data.start = null;
                this.defineStartDate();
            }
            if (changes.end && changes.end.currentValue) {
                this.data.end = null;
                this.defineEndDate();
            }
        }

        private getDateJSON(value: any): Date {
            return value ? new Date(value) : null;
        }

        private defineStartDate() {
            if (this.start !== null && this.start !== undefined) {
                this.data.start = _.isDate(this.start) ? this.start
                    : this.getDateJSON(this.start);
            }
        }

        private defineEndDate() {
            if (this.end !== null && this.end !== undefined) {
                this.data.end = _.isDate(this.end) ? this.end
                    : this.getDateJSON(this.end);
            }
        }

        private toBoolean(value): boolean {
            if (value == null) return false;
            if (!value) return false;
            value = value.toString().toLowerCase();
            return value == '1' || value == 'true';
        }
    }

    const TimeRangeComponent: ng.IComponentOptions = {
        bindings: TimeRangeBindings,
        templateUrl: 'time_range/TimeRange.html',
        controller: TimeRangeController
    }

    angular.module('pipTimeRange', [])
        .component('pipTimeRange', TimeRangeComponent);

})();

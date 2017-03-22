class TimeRangeData {
    start: Date;
    end: Date;
}

class TimeRangeController {
    public data: TimeRangeData;
    public start: Date;
    public end: Date;

    constructor($scope: ng.IScope, $attrs: ng.IAttributes, $element: JQuery) {
        this.data = new TimeRangeData();
        this.defineStartDate();
        this.defineEndDate();

        if (this.toBoolean((<any>$attrs).pipRebind)) {
            $scope.$watch('$ctrl.start',
                () => {
                    this.data.start = null;
                    this.defineStartDate();
                }
            );
            $scope.$watch('$ctrl.end',
                () => {
                    this.data.end = null;
                    this.defineEndDate();
                }
            );
        }

        // Add class
        $element.addClass('pip-time-range');
    }

    public $onChanges(changes) {

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

(() => {

    angular.module('pipTimeRange', [])
        .component('pipTimeRange', {

            bindings: {
                start: '=pipDateStart',
                end: '=pipDateEnd'
            },
            templateUrl: 'time_range_directive/TimeRange.html',
            controller: TimeRangeController,
            controllerAs: '$ctrl'
        }

        );

})();

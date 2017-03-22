class TimeRangeData {
    start: Date;
    end: Date;
}

class TimeRangeController {
    public data: TimeRangeData;
    public pipStartDate: Date;
    public pipEndDate: Date;

    constructor($scope, $attrs, $element) {
        console.log(this.pipEndDate, this.pipStartDate);
        this.data = new TimeRangeData();
        this.defineStartDate();
        this.defineEndDate();

        if (this.toBoolean((<any>$attrs).pipRebind)) {
            $scope.$watch('$ctrl.pipStartDate',
                () => {
                    this.data.start = null;
                    this.defineStartDate();
                }
            );
            $scope.$watch('$ctrl.pipEndDate',
                () => {
                    this.data.end = null;
                    this.defineEndDate();
                }
            );
        }

        // Add class
        $element.addClass('pip-time-range');
    }

    private getDateJSON(value: any): Date {
        return value ? new Date(value) : null;
    }

    private defineStartDate() {
        if (this.pipStartDate !== null && this.pipStartDate !== undefined) {
            this.data.start = _.isDate(this.pipStartDate) ? this.pipStartDate
                : this.getDateJSON(this.pipStartDate);
        }
    }

    private defineEndDate() {
        if (this.pipEndDate !== null && this.pipEndDate !== undefined) {
            this.data.end = _.isDate(this.pipEndDate) ? this.pipEndDate
                : this.getDateJSON(this.pipEndDate);
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
                pipStartDate: '=',
                pipEndDate: '='
            },
            templateUrl: 'time_range_directive/TimeRange.html',
            controller: TimeRangeController,
            controllerAs: '$ctrl'
        }

        );

})();

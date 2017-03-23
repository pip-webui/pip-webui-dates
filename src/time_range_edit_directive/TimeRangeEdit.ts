class TimeRangeEditData {
    endTime: number;
    startTime: number;
    startDate: Date;
    endDate: Date;
    duration: number;
    bind: boolean = false;
}

class TimeRangeEditController {
    public startLabel: string = 'Start time';
    public endLabel: string = 'End time';
    public pipStartLabel: string;
    public pipEndLabel: string;

    public pipEndDate: Date;
    public pipStartDate: Date;
    public pipHideTime: boolean;
    public pipSize;
    public showTime: boolean;
    public data: TimeRangeEditData;
    public intervalTimeCollection: any;
    public disabled: () => boolean;

    public pipChanged: (start: Date, end: Date) => void;

    constructor(
        private $injector: angular.auto.IInjectorService,
        private pipDateTime,
        private $scope: ng.IScope,
        $element: JQuery) {

        this.translate();
        this.intervalTimeCollection = this.getTimeInterval();
        this.data = new TimeRangeEditData();
        this.initDate();
        this.defineDate();

        // Add class
        $element.addClass('pip-time-range-edit');
    }

    public $onChanges(changes) {
        if (changes.pipStartDate && changes.pipStartDate.currentValue) {
            this.pipStartDate = changes.pipStartDate.currentValue;
    this.initDate();
                this.defineDate();
        }
        if (changes.pipEndDate && changes.pipEndDate.currentValue) {
            this.pipEndDate = changes.pipEndDate.currentValue;
    this.initDate();
                this.defineDate();
        }
    
    }

    private translate() {
        let pipTranslate: any = this.$injector.has('pipTranslate') ? this.$injector.get('pipTranslate') : null;

        if (pipTranslate) {
            pipTranslate.setTranslations('en', {
                EVENT_NEW_START_TIME: 'Start time',
                EVENT_NEW_END_TIME: 'End time'
            });
            pipTranslate.setTranslations('ru', {
                EVENT_NEW_START_TIME: 'Начало',
                EVENT_NEW_END_TIME: 'Конец'
            });
            this.startLabel = this.pipStartLabel ? pipTranslate.translate(this.pipStartLabel)
                : pipTranslate.translate('EVENT_NEW_START_TIME');
            this.endLabel = this.pipEndLabel ? pipTranslate.translate(this.pipEndLabel)
                : pipTranslate.translate('EVENT_NEW_END_TIME');
        }
    }

    private getDateJSON(value: any): Date {
        return value ? new Date(value) : null;
    }

    private setDuration() {
        let start, end;

        if (!this.data.startDate || !this.data.endDate) {
            return null;
        }

        start = new Date(this.data.startDate.getTime() + this.data.startTime * 60 * 1000);
        end = new Date(this.data.endDate.getTime() + this.data.endTime * 60 * 1000);

        return end - start;
    }

    private validateStartDate() {
        let date: Date, start: Date, end: Date, endTime: number, startTime: number;
        // если начальная дата не задана, обнуляем и выходим
        if (!this.data.startDate) {
            this.data.startTime = null;

            return;
        }

        // еcли не задано начальное время - задаем его
        if (_.isUndefined(this.data.startTime) || _.isNull(this.data.startTime)) {
            if (!this.data.endTime) {
                start = new Date();
                startTime = date.getTime() - this.pipDateTime.toStartDay(date);
                this.data.startTime = Math.floor(startTime / (30 * 60 * 1000)) * 30;
            } else {
                this.data.startTime = this.data.endTime === 0 ? 0 : this.data.endTime - 30;
            }
        }

        start = new Date(this.data.startDate.getTime() + this.data.startTime * 60 * 1000);

        // Если есть длительность, то сохраняем ее. Длительность можно изменить только изменяя конечную дату
        if (this.data.duration) {
            end = new Date(start.getTime() + this.data.duration);
            this.data.endDate = this.pipDateTime.toStartDay(end);
            endTime = end.getTime() - this.data.endDate.getTime();
            this.data.endTime = Math.floor(endTime / (30 * 60 * 1000)) * 30;
        } else {
            // Если нет длительности сравниваем даты
            end = new Date(this.data.endDate.getTime() + this.data.endTime * 60 * 1000);
            if (start >= end) {
                // Если начальная дата больше, то двигаем конечную дату
                this.data.endDate = this.pipDateTime.toStartDay(new Date(start.getTime() + 30 * 60000));
                this.data.endTime = (this.data.startTime + 30) % 1440; // минут в сутках
            }
        }

        this.data.startTime = Math.round(this.data.startTime / 30) * 30;
    }


    private validateEndDate() {
        let date: any, start: Date, end: Date;

        if (!this.data.endDate) {
            this.data.endTime = null;

            return;
        }

        // еcли не задано конечное время - задаем его
        if (_.isUndefined(this.data.endTime) || _.isNull(this.data.endTime)) {
            if (!this.data.startTime) {
                date = new Date();
                date = date.getTime() - this.pipDateTime.toStartDay(date);
                this.data.endTime = Math.floor(date / (30 * 60 * 1000)) * 30;
            } else {
                this.data.endTime = this.data.startTime === 1410 ? 1410 : this.data.startTime + 30;
            }
        }

        start = new Date(this.data.startDate.getTime() + this.data.startTime * 60 * 1000);
        end = new Date(this.data.endDate.getTime() + this.data.endTime * 60 * 1000);

        if (start >= end) {
            // Если начальная дата больше, то двигаем начальную дату
            this.data.startDate = this.pipDateTime.toStartDay(new Date(end.getTime() - 30 * 60000));
            this.data.startTime = this.data.endTime % 1440 === 0 ? 1410 : this.data.endTime - 30;
        }

        this.data.endTime = Math.round(this.data.endTime / 30) * 30;
        this.data.duration = this.setDuration();
    }

    private setDate() {
        let time: number;

        if (!this.data) this.data = new TimeRangeEditData();
        this.data.bind = false;

        if (this.data.startDate) {
            time = this.data.startTime ? this.data.startTime * 60 * 1000 : 0;
            this.pipStartDate = new Date(this.data.startDate.getTime() + time);
        }

        if (this.data.endDate) {
            time = this.data.endTime ? this.data.endTime * 60 * 1000 : 0;
            this.pipEndDate = new Date(this.data.endDate.getTime() + time);
        }

        this.data.bind = true;
    }

    private defineDate() {
        var start, end;

        if (this.pipStartDate !== null && this.pipStartDate !== undefined) {
            start = _.isDate(this.pipStartDate) ? this.pipStartDate : null;

            if (!start) {
                start = this.getDateJSON(this.pipStartDate);
            }

            this.data.startDate = this.pipDateTime.toStartDay(start);
            this.data.startTime = (<any>new Date(start) - <any>this.data.startDate) / (60 * 1000);
        }

        if (this.pipEndDate !== null && this.pipEndDate !== undefined) {
            end = _.isDate(this.pipEndDate) ? this.pipEndDate : null;

            if (!start) {
                end = this.getDateJSON(this.pipEndDate);
            }

            this.data.endDate = this.pipDateTime.toStartDay(end);
            this.data.endTime = (<any>new Date(end) - <any>this.data.endDate) / (60 * 1000);
        }

        this.validateStartDate();
        this.validateEndDate();
        this.data.duration = this.setDuration();
        this.setDate();
    }

    private getTimeInterval() {
        let result, minutes: number;

        result = [];
        for (let i: number = 0; i < 24; i++) {
            for (let j: number = 0; j < 2; j++) {
                minutes = j * 30;
                result.push({
                    id: i * 60 + minutes,
                    time: _.pad(i.toString(), 3, '0').substr(0, 2) + ':' + _.pad(minutes.toString(), 2, '0')
                });
            }
        }

        return result;
    }

    private toBoolean(value: any): boolean {
        if (value == null) return false;
        if (!value) return false;
        value = value.toString().toLowerCase();
        return value == '1' || value == 'true';
    }

    private initDate() {
        this.data.startDate = null;
        this.data.startTime = null;
        this.data.endDate = null;
        this.data.endTime = null;
        this.data.duration = null;
        this.showTime = !this.toBoolean(this.pipHideTime);
    }

    public onChangeStartDate(newV) {
        this.validateStartDate();
        this.data.duration = this.setDuration();
        this.setDate();
        this.pipChanged(this.pipStartDate, this.pipEndDate);
    };

    public onChangeEndDate() {
        this.validateEndDate();
        this.data.duration = this.setDuration();
        this.setDate();
        this.pipChanged(this.pipStartDate, this.pipEndDate);
    };

    public onChangeStartTime() {
        if (!this.data.startDate) {
            this.data.startDate = this.pipDateTime.toStartDay(new Date());
        }
        this.validateStartDate();
        this.data.duration = this.setDuration();
        this.setDate();
        this.pipChanged(this.pipStartDate, this.pipEndDate);
    };

    public onChangeEndTime() {
        if (!this.data.endDate) {
            this.data.endDate = this.pipDateTime.toStartDay(new Date());
        }

        this.validateEndDate();
        this.data.duration = this.setDuration();
        this.setDate();
        this.pipChanged(this.pipStartDate, this.pipEndDate);
    };

    public isDisabled() {
        if (this.disabled) {
            return this.disabled();
        }

        return false;
    };

}

(() => {
    angular.module('pipTimeRangeEdit', [])
        .component('pipTimeRangeEdit',  {
                bindings: {
                    pipStartDate: '<',
                    pipChanged: '=',
                    pipEndDate: '<',
                    pipStartLabel: '@',
                    pipEndLabel: '@',
                    disabled: '&ngDisabled',
                    pipHideTime: '=',
                    pipSize: '='
                },
                templateUrl: 'time_range_edit_directive/TimeRangeEdit.html',
                controller: TimeRangeEditController
            }
        )
       
})();

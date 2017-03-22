class TimeRangeEditData {
    endTime: number;
    startTime: number;
    startDate: Date;
    endDate: Date;
    duration: number;
    bind: boolean;
}

class TimeRangeEditController {
    public startLabel: string = 'Start time';
    public endLabel: string = 'End time';
    public pipStartLabel: string;
    public pipEndLabel: string;

    public pipEndDate: Date;
    public pipStartDate: Date;
    public pipHideTime: boolean;
    public showTime: boolean;
    public data: TimeRangeEditData;
    public intervalTimeCollection: any;
    public disabled: () => boolean;

    public pipChanged: () => void;

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

        $scope.$watchGroup([this.pipStartDate, this.pipEndDate], function () {
            if (this.data.bind) {
                this.initDate();
                this.defineDate();
            }
        });

        $scope.$watch(this.disabled, function (newValue) {
            this.disableControls = newValue;
        });

        // Add class
        $element.addClass('pip-time-range-edit');
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
        this.pipChanged();
    };

    public onChangeEndDate() {
        this.validateEndDate();
        this.data.duration = this.setDuration();
        this.setDate();
        this.pipChanged();
    };

    public onChangeStartTime() {
        if (!this.data.startDate) {
            this.data.startDate = this.pipDateTime.toStartDay(new Date());
        }
        this.validateStartDate();
        this.data.duration = this.setDuration();
        this.setDate();
        this.pipChanged();
    };

    public onChangeEndTime() {
        if (!this.data.endDate) {
            this.data.endDate = this.pipDateTime.toStartDay(new Date());
        }

        this.validateEndDate();
        this.data.duration = this.setDuration();
        this.setDate();
        this.pipChanged();
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
        .directive('pipTimeRangeEdit',
        function () {
            return {
                restrict: 'E',
                scope: {
                    pipStartDate: '=',
                    pipChanged: '&',
                    pipEndDate: '=',
                    pipStartLabel: '@',
                    pipEndLabel: '@',
                    disabled: '&ngDisabled',
                    pipHideTime: '=',
                    pipSize: '='
                },
                templateUrl: 'time_range_edit_directive/TimeRangeEdit.html',
                controller: 'pipTimeRangeEditController'
            };
        }
        )
        .controller('pipTimeRangeEditController',
        function ($scope, $element, $attrs, $injector, pipDateTime) { //pipTranslate

            var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null;

            if (pipTranslate) {
                pipTranslate.setTranslations('en', {
                    EVENT_NEW_START_TIME: 'Start time',
                    EVENT_NEW_END_TIME: 'End time'
                });
                pipTranslate.setTranslations('ru', {
                    EVENT_NEW_START_TIME: 'Начало',
                    EVENT_NEW_END_TIME: 'Конец'
                });
                $scope.startLabel = $scope.pipStartLabel ? pipTranslate.translate($scope.pipStartLabel)
                    : pipTranslate.translate('EVENT_NEW_START_TIME');
                $scope.endLabel = $scope.pipEndLabel ? pipTranslate.translate($scope.pipEndLabel)
                    : pipTranslate.translate('EVENT_NEW_END_TIME');
            } else {
                $scope.startLabel = $scope.pipStartLabel ? $scope.pipStartLabel : 'Start time';
                $scope.endLabel = $scope.pipEndLabel ? $scope.pipEndLabel : 'End time';
            }

            function getDateJSON(value) {
                return value ? new Date(value) : null;
            }

            function setDuration() {
                var start, end;

                if (!$scope.data.startDate || !$scope.data.endDate) {
                    return null;
                }

                start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);
                end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);

                return end - start;
            }

            function validateStartDate() {
                var date, start, end;
                // если начальная дата не задана, обнуляем и выходим
                if (!$scope.data.startDate) {
                    $scope.data.startTime = null;

                    return;
                }

                // еcли не задано начальное время - задаем его
                if ($scope.data.startTime === undefined || $scope.data.startTime === null) {
                    if (!$scope.data.endTime) {
                        date = new Date();
                        date = date.getTime() - pipDateTime.toStartDay(date);
                        $scope.data.startTime = Math.floor(date / (30 * 60 * 1000)) * 30;
                    } else {
                        $scope.data.startTime = $scope.data.endTime === 0 ? 0 : $scope.data.endTime - 30;
                    }
                }

                start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);

                // Если есть длительность, то сохраняем ее. Длительность можно изменить только изменяя конечную дату
                if ($scope.data.duration) {
                    end = new Date(start.getTime() + $scope.data.duration);
                    $scope.data.endDate = pipDateTime.toStartDay(end);
                    end = end.getTime() - $scope.data.endDate.getTime();
                    $scope.data.endTime = Math.floor(end / (30 * 60 * 1000)) * 30;
                } else {
                    // Если нет длительности сравниваем даты
                    end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);
                    if (start >= end) {
                        // Если начальная дата больше, то двигаем конечную дату
                        $scope.data.endDate = pipDateTime.toStartDay(new Date(start.getTime() + 30 * 60000));
                        $scope.data.endTime = ($scope.data.startTime + 30) % 1440;
                    }
                }

                $scope.data.startTime = Math.round($scope.data.startTime / 30) * 30;
            }

            function validateEndDate() {
                var date, start, end;

                // если начальная дата не задана, обнуляем и выходим
                if (!$scope.data.endDate) {
                    $scope.data.endTime = null;

                    return;
                }

                // еcли не задано конечное время - задаем его
                if ($scope.data.endTime === undefined || $scope.data.endTime === null) {
                    if (!$scope.data.startTime) {
                        date = new Date();
                        date = date.getTime() - pipDateTime.toStartDay(date);
                        $scope.data.endTime = Math.floor(date / (30 * 60 * 1000)) * 30;
                    } else {
                        $scope.data.endTime = $scope.data.startTime === 1410 ? 1410 : $scope.data.startTime + 30;
                    }
                }

                start = new Date($scope.data.startDate.getTime() + $scope.data.startTime * 60 * 1000);
                end = new Date($scope.data.endDate.getTime() + $scope.data.endTime * 60 * 1000);

                if (start >= end) {
                    // Если начальная дата больше, то двигаем начальную дату
                    $scope.data.startDate = pipDateTime.toStartDay(new Date(end.getTime() - 30 * 60000));
                    $scope.data.startTime = $scope.data.endTime % 1440 === 0 ? 1410 : $scope.data.endTime - 30;
                }

                $scope.data.endTime = Math.round($scope.data.endTime / 30) * 30;
                $scope.data.duration = setDuration();
            }

            function setDate() {
                var time;

                $scope.data.bind = false;

                if ($scope.data.startDate) {
                    time = $scope.data.startTime ? $scope.data.startTime * 60 * 1000 : 0;
                    $scope.pipStartDate = new Date($scope.data.startDate.getTime() + time);
                }

                if ($scope.data.endDate) {
                    time = $scope.data.endTime ? $scope.data.endTime * 60 * 1000 : 0;
                    $scope.pipEndDate = new Date($scope.data.endDate.getTime() + time);
                }

                $scope.data.bind = true;
            }

            function defineDate() {
                var start, end;

                if ($scope.pipStartDate !== null && $scope.pipStartDate !== undefined) {
                    start = _.isDate($scope.pipStartDate) ? $scope.pipStartDate : null;

                    if (!start) {
                        start = getDateJSON($scope.pipStartDate);
                    }

                    $scope.data.startDate = pipDateTime.toStartDay(start);
                    $scope.data.startTime = (<any>new Date(start) - $scope.data.startDate) / (60 * 1000);
                }

                if ($scope.pipEndDate !== null && $scope.pipEndDate !== undefined) {
                    end = _.isDate($scope.pipEndDate) ? $scope.pipEndDate : null;

                    if (!start) {
                        end = getDateJSON($scope.pipEndDate);
                    }

                    $scope.data.endDate = pipDateTime.toStartDay(end);
                    $scope.data.endTime = (<any>new Date(end) - $scope.data.endDate) / (60 * 1000);
                }

                validateStartDate();
                validateEndDate();
                $scope.data.duration = setDuration();
                setDate();
            }

            function getTimeInterval() {
                var result, i, j, minutes;

                result = [];
                for (i = 0; i < 24; i++) {
                    for (j = 0; j < 2; j++) {
                        minutes = j * 30;
                        result.push({
                            id: i * 60 + minutes,
                            time: _.pad(i.toString(), 3, '0').substr(0, 2) + ':' + _.pad(minutes.toString(), 2, '0')
                        });
                    }
                }

                return result;
            }

            function toBoolean(value) {
                if (value == null) return false;
                if (!value) return false;
                value = value.toString().toLowerCase();
                return value == '1' || value == 'true';
            }

            function initDate() {
                $scope.data.startDate = null;
                $scope.data.startTime = null;
                $scope.data.endDate = null;
                $scope.data.endTime = null;
                $scope.data.duration = null;
                $scope.showTime = !toBoolean($scope.pipHideTime);
            }

            // initialize data
            $scope.intervalTimeCollection = getTimeInterval();
            $scope.data = {};
            initDate();
            defineDate();

            // process function
            $scope.onChangeStartDate = function (newV) {
                validateStartDate();
                $scope.data.duration = setDuration();
                setDate();
                $scope.pipChanged();
            };

            $scope.onChangeEndDate = function () {
                validateEndDate();
                $scope.data.duration = setDuration();
                setDate();
                $scope.pipChanged();
            };

            $scope.onChangeStartTime = function () {
                if (!$scope.data.startDate) {
                    $scope.data.startDate = pipDateTime.toStartDay(new Date());
                }
                validateStartDate();
                $scope.data.duration = setDuration();
                setDate();
                $scope.pipChanged();
            };

            $scope.onChangeEndTime = function () {
                if (!$scope.data.endDate) {
                    $scope.data.endDate = pipDateTime.toStartDay(new Date());
                }

                validateEndDate();
                $scope.data.duration = setDuration();
                setDate();
                $scope.pipChanged();
            };

            $scope.isDisabled = function () {
                if ($scope.disabled) {
                    return $scope.disabled();
                }

                return false;
            };

            $scope.$watchGroup([$scope.pipStartDate, $scope.pipEndDate], function () {
                if ($scope.data.bind) {
                    initDate();
                    defineDate();
                }
            });

            $scope.$watch($scope.disabled, function (newValue) {
                $scope.disableControls = newValue;
            });

            // Add class
            $element.addClass('pip-time-range-edit');
        }
        );

})();

import { DateRangeType } from './IDateConvertService';
import { IDateFormatService, IDateFormatProvider } from './IDateFormatService';

(() => {
    class DateFormat implements IDateFormatService {
        protected _momentRanged: string[] = DateRangeType.All;
        protected _defaultFormat: string = 'LL'

        private _defaultTimeZoneOffset: number;

        public constructor(
            private $injector: angular.auto.IInjectorService
        ) {

        }

        public get defaultTimeZoneOffset(): number {
            return this._defaultTimeZoneOffset;
        }

        public set defaultTimeZoneOffset(value: number) {
            this._defaultTimeZoneOffset = value;
        }

        private isUndefinedOrNull(value: any): boolean {
            return angular.isUndefined(value) || value === null;
        }

        private formatDateTime(value: any, basicFormat: string): string {
            let date: moment.Moment;
            let formatTpl: string;

            if (this.isUndefinedOrNull(value)) return '';

            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);

            if (!date.isValid()) return '';

            formatTpl = basicFormat ? basicFormat : this._defaultFormat;

            return date.format(formatTpl);
        }

        private formatDateTimeY(value: any, basicFormat: string): string {
            let date: moment.Moment;
            let nowDate: moment.Moment;
            let formatMoment: string;

            if (this.isUndefinedOrNull(value)) return '';

            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);

            if (!date.isValid()) return '';

            nowDate = moment();
            formatMoment = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat);

            if (nowDate.year() == date.year())
                formatMoment = formatMoment.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');

            return date.format(formatMoment);
        }

        private formatDay(value: any, basicFormat: string): string {
            let date: moment.Moment;
            let format = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat);
            let formatMonthYearless = format.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '').replace(/M/g, '');

            if (this.isUndefinedOrNull(value)) return '';

            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);

            if (!date.isValid()) return '';

            return date.format(formatMonthYearless);
        }

        private formatMonthDay(value: any, basicFormat: string): string {
            let date: moment.Moment;
            let format = basicFormat ? basicFormat : this._defaultFormat;
            let formatLL = moment.localeData().longDateFormat(format);
            let formatYearlessLL = formatLL.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');

            if (this.isUndefinedOrNull(value)) return '';

            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);

            if (!date.isValid()) return '';

            return date.format(formatYearlessLL);
        }

        //  use timezone not testing
        public formatRange(value1: any, value2: any, basicFormat: string): string {
            let dateStart: moment.Moment;
            let dateEnd: moment.Moment;
            let format = basicFormat ? basicFormat : this._defaultFormat;

            if (this.isUndefinedOrNull(value1))
                dateStart = null;
            else
                dateStart = (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                    ? moment(value1).utcOffset(this._defaultTimeZoneOffset) : moment(value1);

            if (this.isUndefinedOrNull(value2))
                dateEnd = null;
            else
                dateEnd = (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                    ? moment(value2).utcOffset(this._defaultTimeZoneOffset) : moment(value2);

            if (dateStart === null && dateEnd === null)
                return '';
            if (dateStart === null)
                return dateEnd.format(basicFormat);
            if (dateEnd === null || dateStart.isSame(dateEnd))
                return dateStart.format(basicFormat);;

            if (dateStart.isAfter(dateEnd))
                throw new Error('Date range error. Start date is more than end date.');

            if (dateStart.year() == dateEnd.year()) {
                if (dateStart.month() == dateEnd.month())
                    return this.formatDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);

                return this.formatMonthDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
            }

            return dateStart.format(basicFormat) + '-' + dateEnd.format(basicFormat);
        }

        private toDateWithTime(value: any, formatDate: string, formatTime: string, firstTime?: boolean): any {
            let date: moment.Moment;
            let result: string;
            let nowDate: moment.Moment;

            if (this.isUndefinedOrNull(value)) return '';

            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);

            if (!date.isValid()) return '';

            nowDate = moment();
            if (firstTime)
                result = date.format(formatTime) + ' ' + date.format(formatDate);
            else
                result = date.format(formatDate) + ' ' + date.format(formatTime);

            return result;
        }

        private toTodayDate(value: any, formatDate: string, formatTime: string): any {
            let date: moment.Moment;
            let result: string;
            let nowDate: any;

            if (this.isUndefinedOrNull(value)) return '';

            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null)
                date = moment(value).utcOffset(this._defaultTimeZoneOffset);
            else
                date = moment(value);

            if (!date.isValid()) return '';

            nowDate = moment();

            if (nowDate.year() == date.year() && nowDate.month() == date.month() && nowDate.day() == date.day())
                result = date.format(formatTime);
            else
                result = date.format(formatDate) + ' ' + date.format(formatTime);

            return result;
        }

        // formating functions 
        // -------------------

        public formatTime(value: any, format: string): string {
            return this.formatDateTime(value, 'LLL');
        }

        public formatDateOptional(value: any, format: string): string {
            return this.formatDateTime(value, 'L');
        }

        // date formats
        public formatShortDate(value: any): string {
            return this.formatDateTime(value, 'L');
        }

        public bbFormatDateLongTime(value: any, firstTime?: boolean): string {
            return this.toDateWithTime(value, 'MM/DD/YY', 'LTS', firstTime);
        }

        public formatMiddleDate(value: any): string {
            return this.formatDateTime(value, 'll');
        }

        public formatLongDate(value: any): string {
            return this.formatDateTime(value, 'LL');
        }

        public formatMonth(value: any): string {
            return this.formatDateTime(value, 'MM');
        }

        public formatLongMonth(value: any): string {
            return this.formatDateTime(value, 'MMMM');
        }

        public formatYear(value: any): string {
            return this.formatDateTime(value, 'YYYY');
        }

        public formatWeek(value: any): string {
            return this.formatDateTime(value, 'ww');
        }

        public formatShortWeek(value: any): string {
            return this.formatDateTime(value, 'w');
        }

        public formatShortDateTime(value: any): string {
            return this.toDateWithTime(value, 'L', 'LT');
        }

        public formatMiddleDateTime(value: any): string {
            return this.formatDateTime(value, 'lll');
        }

        public formatLongDateTime(value: any): string {
            return this.formatDateTime(value, 'LLL');
        }

        public formatFullDateTime(value: any): string {
            return this.formatDateTime(value, 'LLLL');
        }

        public formatShortDateLongTime(value: any, firstTime?: boolean): string {
            return this.toDateWithTime(value, 'L', 'LTS', firstTime);
        }

        public formatMiddleDateLongTime(value: any, firstTime?: boolean): string {
            return this.toDateWithTime(value, 'll', 'LTS', firstTime);
        }

        public formatLongDateLongTime(value: any, firstTime?: boolean): string {
            return this.toDateWithTime(value, 'LL', 'LTS', firstTime);
        }

        public formatShortTime(value: any): string {
            return this.formatDateTime(value, 'LT');
        }

        public formatLongTime(value: any): string {
            return this.formatDateTime(value, 'LTS');
        }

        public formatShortDayOfWeek(value: any): string {
            return this.formatDateTime(value, 'dd');
        }

        public formatLongDayOfWeek(value: any): string {
            return this.formatDateTime(value, 'dddd');
        }

        // public formatTimeNumber(value: any): string {
        //     return this.formatDateTime(value, 'LLL');
        // }

        // public formatLongTimeNumber(value: any): string {
        //     return this.formatDateTime(value, 'LLLL');
        // }

        ///-----------------

        public formatLongMonthDay(value: any): string {
            return this.formatMonthDay(value, 'LL');
        }

        public formatShortMonthDay(value: any): string {
            return this.formatMonthDay(value, 'L');
        }

        public formatDateRange(value1: any, value2: any): string {
            return this.formatRange(value1, value2, 'LL');
        }

        public formatDateTimeRange(value1: any, value2: any): string {
            return this.formatRange(value1, value2, 'LLL');
        }

        // iso function
        // --------------

        public formatISOWeek(value: any): string {
            return this.formatDateTime(value, 'WW');
        }

        public formatShortISOWeek(value: any): string {
            return this.formatDateTime(value, 'W');
        }

        public formatISOWeekOrdinal(value: any): string {
            return this.formatDateTime(value, 'Wo');
        }
        // special formats 
        // --------------

        // year option displays if the current year is not equal to, the date of 
        public formatDateY(value: any): string {
            return this.formatDateTimeY(value, 'L');
        }

        // year option displays if the current year is not equal to, the date of
        public formatLongDateY(value: any): string {
            return this.formatDateTimeY(value, 'LL');
        }

        // date displays if the current date  is not equal now 
        // September 4 1986 8:30:25 PM or 8:30:25 PM
        public formatTodayDateLongTimeLong(value: any): string {
            return this.toTodayDate(value, 'LL', 'LTS')
        }

        // date displays if the current date  is not equal now 
        // Sep 4 1986 8:30:25 PM or 8:30:25 PM
        public formatTodayDateShortTimeLong(value: any): string {
            return this.toTodayDate(value, 'LL', 'LTS')
        }

        // date displays if the current date  is not equal now 
        // September 4 1986 8:30 PM or 8:30 PM
        public formatTodayDateLongTimeShort(value: any): string {
            return this.toTodayDate(value, 'LL', 'LT')
        }

        // date displays if the current date  is not equal now 
        // Sep 4 1986 8:30 PM or 8:30 PM
        public formatTodayDateShortTimeShort(value: any): string {
            return this.toTodayDate(value, 'll', 'LT')
        }

        // todo
        public formatMillisecondsToSeconds(value: any): string {
            return '';
        }

        public formatElapsedInterval(value: any, start: any): string {
            let date: moment.Moment,
                nowDate: any;

            if (this.isUndefinedOrNull(value)) {
                return '';
            }
            if (this.isUndefinedOrNull(start)) {
                nowDate = moment();
            } else {
                nowDate = moment(start);
            }

            date = moment(value);
            if (!date.isValid() || !nowDate.isValid()) {
                return '';
            }

            return moment(date).fromNow(nowDate);
        }

        public formatShortElapsed(value: any, hours?: number): string {
            let date: moment.Moment,
                nowDate: any = moment(),
                borderDate: any = _.cloneDeep(nowDate);

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            date = moment(value);
            if (!date.isValid() || !nowDate.isValid()) {
                return '';
            }

            // define default hours
            if (this.isUndefinedOrNull(hours)) {
                hours = -24;
            }
            // add hours to now date
            borderDate.add(hours, 'hours');

            if (date.isBefore(borderDate)) {
                // return date
                return this.formatShortDateTime(date);
            } else {
                // return time
                let ms = nowDate.diff(date);
                let diff = moment.duration(nowDate.diff(date));
                let s: string;

                let pipTranslate: any = this.$injector.has('pipTranslate') ? this.$injector.get('pipTranslate') : null;
                    let h = Math.floor(diff.asHours());
                    let m = Math.floor(diff.asMinutes() - 60 * h);

                if (pipTranslate) {
                    let hString: string = this.getHoursString(h);
                    let mString: string = this.getMinutesString(m);
                    if (h) {
                        s = Math.floor(diff.asHours()) + moment.utc(ms).format(":mm ") + pipTranslate.translate('DATE_ELAPSED');
                    } else {
                        if (m) {
                            s = moment.utc(ms).format("mm ") + pipTranslate.translate('DATE_ELAPSED');
                        } else {
                            s = pipTranslate.translate('DATE_FEW_SECOND_SHORT');
                        }
                    }
                } else {
                    if (h) {
                         s = Math.floor(diff.asHours()) + moment.utc(ms).format(":mm ") + ' ago';
                    } else {
                        if (m) {
                            s = moment.utc(ms).format("mm min.") + ' ago';
                        } else {
                            s = 'few sec. ago';
                        }                        
                    }
                }

                return s;
            }
        }

        private getHoursString(h: number): string {
            let hh: number = h % 10;
            if (h == 0) return '';

            if (hh == 1) {
                return 'DATE_HOUR_ONE'
            }
            if (hh > 1 && hh < 5) {
                return 'DATE_HOURS_FEW'
            }

            return 'DATE_HOURS_AFTER_FOOR'
        }

        private getMinutesString(m: number): string {
            if (m == 1) {
                return 'DATE_MINUTE_ONE'
            }
            if (m > 1 && m < 5) {
                return 'DATE_MINUTES_FEW'
            }

            return 'DATE_MINUTES_AFTER_FOOR'
        }

        public formatLongElapsed(value: any, hours?: number): string {
            let date: moment.Moment,
                nowDate: any = moment(),
                borderDate: any = _.cloneDeep(nowDate);

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            date = moment(value);
            if (!date.isValid() || !nowDate.isValid()) {
                return '';
            }

            // define default hours
            if (this.isUndefinedOrNull(hours)) {
                hours = -24;
            }
            // add hours to now date
            borderDate.add(hours, 'hours');

            if (date.isBefore(borderDate)) {
                // return date
                return this.formatFullDateTime(date);
            } else {
                // return time
                let ms = nowDate.diff(date);
                let diff = moment.duration(nowDate.diff(date));
                let s: string;

                let pipTranslate: any = this.$injector.has('pipTranslate') ? this.$injector.get('pipTranslate') : null;

                let h = Math.floor(diff.asHours());
                let m = Math.floor(diff.asMinutes() - 60 * h);

                if (pipTranslate) {
                    let hString: string = this.getHoursString(h);
                    let mString: string = this.getMinutesString(m);
                    if (h) {
                        s = Math.floor(diff.asHours()) + ' ' + pipTranslate.translate(hString) + moment.utc(ms).format(" mm ") +
                            pipTranslate.translate(mString) + ' ' + pipTranslate.translate('DATE_ELAPSED');
                    } else {
                        if (m) {
                            s = moment.utc(ms).format("mm ") + pipTranslate.translate(mString) + ' ' + pipTranslate.translate('DATE_ELAPSED');
                        } else {
                            s = pipTranslate.translate('DATE_FEW_SECOND') + ' ' + pipTranslate.translate('DATE_ELAPSED');
                        }
                    }
                } else {
                    if (h) {
                        s = Math.floor(diff.asHours()) + ' hours ' + moment.utc(ms).format(":mm minutes") + ' ago';
                    } else {
                        if (m) {
                            s = moment.utc(ms).format("mm minutes") + ' ago';
                        } else {
                            s = 'few second ago';
                        }                        
                    }
                }

                return s;
            }
        }

        public formatMiddleElapsed(value: any, hours?: number): string {
            let date: moment.Moment,
                nowDate: any = moment(),
                borderDate: any = _.cloneDeep(nowDate);

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            date = moment(value);
            if (!date.isValid() || !nowDate.isValid()) {
                return '';
            }

            // define default hours
            if (this.isUndefinedOrNull(hours)) {
                hours = -24;
            }
            // add hours to now date
            borderDate.add(hours, 'hours');

            if (date.isBefore(borderDate)) {
                // return date
                return this.formatMiddleDateTime(date);
            } else {
                // return time
                let ms = nowDate.diff(date);
                let diff = moment.duration(nowDate.diff(date));
                let s: string;

                let pipTranslate: any = this.$injector.has('pipTranslate') ? this.$injector.get('pipTranslate') : null;

                let h = Math.floor(diff.asHours());
                let m = Math.floor(diff.asMinutes() - 60 * h);

                if (pipTranslate) {
                    let hString: string = 'DATE_HOUR_SHORT';
                    let mString: string = 'DATE_MINUTE_SHORT';
                    if (h) {
                        s = Math.floor(diff.asHours()) + ' ' + pipTranslate.translate(hString) + moment.utc(ms).format(" mm ") +
                            pipTranslate.translate(mString) + ' ' + pipTranslate.translate('DATE_ELAPSED');
                    } else {
                        if (m) {
                            s = moment.utc(ms).format("mm ") + pipTranslate.translate(mString) + ' ' + pipTranslate.translate('DATE_ELAPSED');
                        } else {
                            s = pipTranslate.translate('DATE_FEW_SECOND_SHORT') + ' ' + pipTranslate.translate('DATE_ELAPSED');
                        }
                    }
                } else {
                    if (h) {
                        s = Math.floor(diff.asHours()) + ' h. ' + moment.utc(ms).format(":mm min.") + ' ago';
                    } else {
                        if (m) {
                            s = moment.utc(ms).format("mm min.") + ' ago';
                        } else {
                            s = 'few sec. ago';
                        }                        
                    }
                }

                return s;
            }
        }

        public getDateJSON(date: any): string {
            return JSON.stringify(moment(date));
        }
    }

    class DateFormatProvider extends DateFormat implements IDateFormatProvider {
        private _translation: DateFormat;
        private _service: DateFormat;

        public $get(
            $injector: angular.auto.IInjectorService
        ): any {
            "ngInject";

            if (this._service == null)
                this._service = new DateFormat($injector);

            return this._service;
        }
    }

    function declarePipDateResources($injector: angular.auto.IInjectorService) {
        let pipTranslateProvider: any = $injector.has('pipTranslateProvider') ? $injector.get('pipTranslateProvider') : null;
        if (pipTranslateProvider && pipTranslateProvider.translations) {
            pipTranslateProvider.translations('en', {
                DATE_ELAPSED: 'ago',
                DATE_HOUR_ONE: 'hour',
                DATE_HOUR_SHORT: 'h',
                DATE_MINUTE_SHORT: 'min',
                DATE_HOURS_FEW: 'hours',
                DATE_HOURS_AFTER_FOOR: 'hours',
                DATE_MINUTE_ONE: 'minute',
                DATE_MINUTES_FEW: 'minutes',
                DATE_MINUTES_AFTER_FOOR: 'minutes',
                DATE_FEW_SECOND: 'few sec. ago',
                DATE_FEW_SECOND_SHORT: 'few sec. ago'

            });
            pipTranslateProvider.translations('ru', {
                DATE_ELAPSED: 'тн',
                DATE_HOUR_ONE: 'час',
                DATE_HOUR_SHORT: 'ч.',
                DATE_MINUTE_SHORT: 'мин.',                
                DATE_HOURS_FEW: 'часа',
                DATE_HOURS_AFTER_FOOR: 'часов',
                DATE_MINUTE_ONE: 'минуту',
                DATE_MINUTES_FEW: 'минуты',
                DATE_MINUTES_AFTER_FOOR: 'минут',
                DATE_FEW_SECOND: 'несколько секунд назад',
                DATE_FEW_SECOND_SHORT: 'неск. сек. тн',
            });
        }

    }

    angular
        .module('pipDate.Format', [])
        .provider('pipDateFormat', DateFormatProvider)
        .config(declarePipDateResources);
})();
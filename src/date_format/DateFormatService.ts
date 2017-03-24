import { DateRangeType } from './IDateConvertService';
import { IDateFormatService, IDateFormatProvider } from './IDateFormatService';

(() => {
    class DateFormat implements IDateFormatService {
        protected _momentRanged: string[] = DateRangeType.All;
        protected _defaultFormat: string = 'LL'

        private _defaultTimeZoneOffset: number;

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

            if (this._defaultTimeZoneOffset!= undefined && this._defaultTimeZoneOffset != null)
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
        private formatRange(value1: any, value2: any, basicFormat: string): string {
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

        public getDateJSON(date: any): string {
            return JSON.stringify(moment(date));
        }

        
    }

    class DateFormatService implements IDateFormatService {
        private _format: DateFormat;

        public constructor(
            _format: DateFormat,
        ) {
            this._format = _format;
        }

        public get defaultTimeZoneOffset(): number {
            return this._format.defaultTimeZoneOffset;
        }

        public set defaultTimeZoneOffset(value: number) {
            this._format.defaultTimeZoneOffset = value;
        }

        // todo Optional
        public formatTime(value: any, format: string): string {
            return this._format.formatTime(value, format);
        }

        // todo Optional
        public formatDateOptional(value: any, format: string): string {
            return this._format.formatDateOptional(value, format);
        }

        public formatShortDate(value: any): string {
            return this._format.formatShortDate(value);
        }

        public formatMiddleDate(value: any): string {
            return this._format.formatMiddleDate(value);
        }

        public formatLongDate(value: any): string {
            return this._format.formatLongDate(value);
        }

        public formatMonth(value: any): string {
            return this._format.formatMonth(value);
        }

        public formatLongMonth(value: any): string {
            return this._format.formatLongMonth(value);
        }

        public formatYear(value: any): string {
            return this._format.formatYear(value);
        }

        public formatWeek(value: any): string {
            return this._format.formatWeek(value);
        }

        public formatShortWeek(value: any): string {
            return this._format.formatShortWeek(value);
        }

        public formatShortDateTime(value: any): string {
            return this._format.formatShortDateTime(value);
        }

        public formatMiddleDateTime(value: any): string {
            return this._format.formatMiddleDateTime(value);
        }

        public formatLongDateTime(value: any): string {
            return this._format.formatLongDateTime(value);
        }

        public formatFullDateTime(value: any): string {
            return this._format.formatFullDateTime(value);
        }

        public formatShortDateLongTime(value: any, firstTime?: boolean): string {
            return this._format.formatShortDateLongTime(value, firstTime);
        }

        public formatMiddleDateLongTime(value: any, firstTime?: boolean): string {
            return this._format.formatMiddleDateLongTime(value, firstTime);
        }

        public formatLongDateLongTime(value: any, firstTime?: boolean): string {
            return this._format.formatLongDateLongTime(value, firstTime);
        }

        public bbFormatDateLongTime(value: any, firstTime?: boolean): string {
            return this._format.bbFormatDateLongTime(value, firstTime);
        }

        public formatShortTime(value: any): string {
            return this._format.formatShortTime(value);
        }

        public formatLongTime(value: any): string {
            return this._format.formatLongTime(value);
        }

        public formatShortDayOfWeek(value: any): string {
            return this._format.formatShortDayOfWeek(value);
        }

        public formatLongDayOfWeek(value: any): string {
            return this._format.formatLongDayOfWeek(value);
        }

        public formatLongMonthDay(value: any): string {
            return this._format.formatLongMonthDay(value);
        }

        public formatShortMonthDay(value: any): string {
            return this._format.formatShortMonthDay(value);
        }

        public formatDateRange(value1: any, value2: any): string {
            return this._format.formatDateRange(value1, value2);
        }

        public formatDateTimeRange(value1: any, value2: any): string {
            return this._format.formatDateTimeRange(value1, value2);
        }

        // iso function
        // --------------

        public formatISOWeek(value: any): string {
            return this._format.formatISOWeek(value);
        }

        public formatShortISOWeek(value: any): string {
            return this._format.formatShortISOWeek(value);
        }

        public formatISOWeekOrdinal(value: any): string {
            return this._format.formatISOWeekOrdinal(value);
        }
        // special formats 
        // --------------

        // year option displays if the current year is not equal to, the date of 
        public formatDateY(value: any): string {
            return this._format.formatDateY(value);
        }

        // year option displays if the current year is not equal to, the date of
        public formatLongDateY(value: any): string {
            return this._format.formatLongDateY(value);
        }

        // date displays if the current date  is not equal now 
        // September 4 1986 8:30:25 PM or 8:30:25 PM
        public formatTodayDateLongTimeLong(value: any): string {
            return this._format.formatTodayDateLongTimeLong(value);
        }

        // date displays if the current date  is not equal now 
        // Sep 4 1986 8:30:25 PM or 8:30:25 PM
        public formatTodayDateShortTimeLong(value: any): string {
            return this._format.formatTodayDateShortTimeLong(value);
        }

        // date displays if the current date  is not equal now 
        // September 4 1986 8:30 PM or 8:30 PM
        public formatTodayDateLongTimeShort(value: any): string {
            return this._format.formatTodayDateLongTimeShort(value);
        }

        // date displays if the current date  is not equal now 
        // Sep 4 1986 8:30 PM or 8:30 PM
        public formatTodayDateShortTimeShort(value: any): string {
            return this._format.formatTodayDateShortTimeShort(value);
        }

        public formatMillisecondsToSeconds(value: any) {
            return this._format.formatMillisecondsToSeconds(value);
        }

        public formatElapsedInterval(value: any, start: any): string {
            return this._format.formatElapsedInterval(value, start);
        }

        public getDateJSON(date: any): string {
            return this._format.getDateJSON(date);
        }

    }

    class DateFormatProvider extends DateFormat implements IDateFormatProvider {
        private _translation: DateFormat;
        private _service: DateFormatService;

        public $get(): any {
            "ngInject";

            if (this._service == null)
                this._service = new DateFormatService(this);

            return this._service;
        }
    }

    angular
        .module('pipDate.Format', [])
        .provider('pipDateFormat', DateFormatProvider);
})();
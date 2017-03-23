import { DateTimeConfig, IDateConvertService, IDateConvertProvider } from './IDateConvertService';

(() => {
    class DateTimeConvert implements IDateConvertService {
        private _config: DateTimeConfig;
        protected _momentRanged: string[] = new Array('year', 'month', 'week', 'isoweek', 'day');
        protected _defaultFormat: string = 'LL'

        private isUndefinedOrNull(value: any): boolean {
            return angular.isUndefined(value) || value === null;
        }

        private getRange(value: string): string {
            if (this.isUndefinedOrNull(value)) {
                return 'day';
            }

            let index = this._momentRanged.indexOf(value)

            if (index < 0) {
                return 'day'
            }
            return this._momentRanged[index];
        }

        private getOperationRange(value: string): string {
            if (this.isUndefinedOrNull(value)) {
                return 'day';
            }

            let range = value == 'isoweek' ? 'week' : value,
                index = this._momentRanged.indexOf(range)

            if (index < 0) {
                return 'day'
            }
            return this._momentRanged[index];

        }

        private formatDateTime(value: any, basicFormat: string): string {
            let date: moment.Moment,
                formatTpl: string;

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            } else {
                date = moment(value);
            }

            if (!date.isValid()) {
                return '';
            }

            formatTpl = basicFormat ? basicFormat : this._defaultFormat;

            return date.format(formatTpl);
        }

        private formatDateTimeY(value: any, basicFormat: string): string {
            let date: moment.Moment,
                nowDate: moment.Moment,
                formatMoment: string;

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            } else {
                date = moment(value);
            }

            if (!date.isValid()) {
                return '';
            }

            nowDate = moment();
            formatMoment = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat);

            if (nowDate.year() == date.year()) {
                formatMoment = formatMoment.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');
            }

            return date.format(formatMoment);
        }

        private formatDay(value: any, basicFormat: string): string {
            let date: moment.Moment,
                format = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat),
                formatMonthYearless = format.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '').replace(/M/g, '');

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            } else {
                date = moment(value);
            }

            if (!date.isValid()) {
                return '';
            }

            return date.format(formatMonthYearless);
        }

        private formatMonthDay(value: any, basicFormat: string): string {
            let date: moment.Moment,
                format = basicFormat ? basicFormat : this._defaultFormat,
                formatLL = moment.localeData().longDateFormat(format),
                formatYearlessLL = formatLL.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            } else {
                date = moment(value);
            }

            if (!date.isValid()) {
                return '';
            }

            return date.format(formatYearlessLL);
        }

        //  use timezone not testing
        private formatRange(value1: any, value2: any, basicFormat: string): string {
            let dateStart: moment.Moment,
                dateEnd: moment.Moment,
                format = basicFormat ? basicFormat : this._defaultFormat;

            if (this.isUndefinedOrNull(value1)) {
                dateStart = null;
            } else {
                dateStart = (this._config.timeZone != undefined && this._config.timeZone != null) ? moment(value1).utcOffset(this._config.timeZone) : moment(value1);
            }
            if (this.isUndefinedOrNull(value2)) {
                dateEnd = null;
            } else {
                dateEnd = (this._config.timeZone != undefined && this._config.timeZone != null) ? moment(value2).utcOffset(this._config.timeZone) : moment(value2);
            }

            if (dateStart === null && dateEnd === null) return '';

            if (dateStart === null) {
                return dateEnd.format(basicFormat);
            }
            if (dateEnd === null || dateStart.isSame(dateEnd)) {
                return dateStart.format(basicFormat);;
            }

            if (dateStart.isAfter(dateEnd)) {
                // todo localization
                throw new Error('Date range error. Start date is more than end date.');
            }

            if (dateStart.year() == dateEnd.year()) {
                if (dateStart.month() == dateEnd.month()) {
                    return this.formatDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
                }
                return this.formatMonthDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);

            }
            return dateStart.format(basicFormat) + '-' + dateEnd.format(basicFormat);

        }

        private toStartRange(value: any, range: string): Date {
            let date: moment.Moment;

            if (this.isUndefinedOrNull(value)) {
                throw new Error('toStartRange - value is undefined or null');
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            } else {
                date = moment(value);
            }
            if (!date.isValid()) {
                throw new Error('toStartRange - date is invalid');
            }

            return date.startOf(range).toDate();
        }

        private toEndRange(value: any, range: string, offset: number): any {
            let date: any,
                result: any,
                mssOffset: number;

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            if (!angular.isNumber(offset)) {
                mssOffset = 0;
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            } else {
                date = moment(value);
            }
            if (!date.isValid()) {
                return '';
            }

            if (mssOffset) {
                result = date.startOf(range).add(mssOffset, 'milliseconds');
            } else {
                result = date.startOf(range);
            }

            return date.startOf(range).toDate();
        }

        private toDateWithTime(value: any, formatDate: string, formatTime: string, firstTime?: boolean): any {
            let date: moment.Moment,
                result: string,
                nowDate: moment.Moment;

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            } else {
                date = moment(value);
            }
            if (!date.isValid()) {
                return '';
            }

            nowDate = moment();
            if (firstTime) {
                result = date.format(formatTime) + ' ' + date.format(formatDate);
            } else {
                result = date.format(formatDate) + ' ' + date.format(formatTime);
            }

            return result;
        }

        private toTodayDate(value: any, formatDate: string, formatTime: string): any {
            let date: moment.Moment,
                result: string,
                nowDate: any;

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                date = moment(value).utcOffset(this._config.timeZone);
            } else {
                date = moment(value);
            }
            if (!date.isValid()) {
                return '';
            }

            nowDate = moment();

            if (nowDate.year() == date.year() && nowDate.month() == date.month() && nowDate.day() == date.day()) {
                result = date.format(formatTime);
            } else {
                result = date.format(formatDate) + ' ' + date.format(formatTime);
            }

            return result;
        }

        public constructor(config: DateTimeConfig) {
            this._config = config || { timeZone: null };
        };

        public get config(): DateTimeConfig {
            return this._config;
        }

        public useTimeZone(offset: number) {
            this._config.timeZone = offset;
        }
        
      

        public getDateJSON(date: any): string {
            return JSON.stringify(moment(date));
        }

        // navigation functions 
        // ------------------

        public getNextStart(value: any, category: string): any {
            let date: moment.Moment,
                range: string,
                result: any;

            if (this.isUndefinedOrNull(value)) {
                return '';
            }

            date = moment(value);
            if (!date.isValid()) {
                return '';
            }

            range = this.getRange(category);
            result = moment(date).startOf(range).add(this.getOperationRange(range));

            return result.toDate();
        }

        public getPrevStart(value: any, category: string): Date {
            let date: moment.Moment,
                range: string,
                result: moment.Moment;

            if (this.isUndefinedOrNull(value)) {
                throw new Error('getPrevStart - value is undefined or null');
            }

            date = moment(value);
            if (!date.isValid()) {
                throw new Error('getPrevStart - date is invalid');
            }

            range = this.getRange(category);
            result = moment(date).startOf(range).add(-1, this.getOperationRange(range));

            return result.toDate();
        }

        public getNowStart(category: string): Date {
            let date: moment.Moment,
                range: string,
                result: moment.Moment;

            date = moment();
            if (!date.isValid()) {
                throw new Error('getNowStart - date is invalid');
            }

            range = this.getRange(category)
            result = moment(date).startOf(range);

            return result.toDate();
        }

        public addHours(value: any, hours: number): Date {
            let date: moment.Moment;

            if (this.isUndefinedOrNull(value) || !angular.isNumber(hours)) {
                throw new Error('addHours - value is undefined or null or hours is not a number');
            }

            date = moment(value);
            if (!date.isValid()) {
                throw new Error('addHours - date is invalid');
            }

            return date.add(hours, 'hours').toDate();
        }

        public toStartDay(value: any): Date {
            return this.toStartRange(value, 'day');
        }

        public toEndDay(value: any, offset: number): Date {
            return this.toEndRange(value, 'day', offset);
        }

        public toStartWeek(value: any): Date {
            return this.toStartRange(value, 'week');
        }

        public toEndWeek(value: any, offset: number): Date {
            return this.toEndRange(value, 'week', offset);
        }

        public toStartMonth(value: any): Date {
            return this.toStartRange(value, 'month');
        }

        public toEndMonth(value: any, offset: number): Date {
            return this.toEndRange(value, 'month', offset);
        }

        public toStartYear(value: any): Date {
            return this.toStartRange(value, 'year');
        }

        public toEndYear(value: any, offset: number): Date {
            return this.toEndRange(value, 'year', offset);
        }

    }

    class DateTimeConvertService {
        private _datetime: DateTimeConvert;
        private _config: DateTimeConfig;

        public constructor(
            datetime: DateTimeConvert,
        ) {
            this._config = { timeZone: null };
            this._datetime = datetime;
        }

        // todo Optional
        public useTimeZone(offset: number): void {
            return this._datetime.useTimeZone(offset);
        }

     

        public getDateJSON(date: any): string {
            return this._datetime.getDateJSON(date);
        }

        // navigation functions 
        // ------------------

        public getNextStart(value: any, category: string): any {
            return this._datetime.getNextStart(value, category);
        }

        public getPrevStart(value: any, category: string): any {
            return this._datetime.getPrevStart(value, category);
        }

        public getNowStart(category: string): any {
            return this._datetime.getNowStart(category);
        }

        public addHours(value: any, hours: number): any {
            return this._datetime.addHours(value, hours);
        }

        public toStartDay(value: any): any {
            return this._datetime.toStartDay(value);
        }

        public toEndDay(value: any, offset: number): any {
            return this._datetime.toEndDay(value, offset);
        }

        public toStartWeek(value: any): any {
            return this._datetime.toStartWeek(value);
        }

        public toEndWeek(value: any, offset: number): any {
            return this._datetime.toEndWeek(value, offset);
        }

        public toStartMonth(value: any): any {
            return this._datetime.toStartMonth(value);
        }

        public toEndMonth(value: any, offset: number): any {
            return this._datetime.toEndMonth(value, offset);
        }

        public toStartYear(value: any): any {
            return this._datetime.toStartYear(value);
        }

        public toEndYear(value: any, offset: number): any {
            return this._datetime.toEndYear(value, offset);
        }

    }

    class DateConvertProvider extends DateTimeConvert implements IDateConvertProvider {
        private _translation: DateTimeConvert;
        private _service: DateTimeConvertService;

        public constructor() {
            super({ timeZone: null });
        }

        public $get(): any {
            "ngInject";

            if (this._service == null)
                this._service = new DateTimeConvertService(this);
            return this._service;
        }
    }

    angular
        .module('pipDate.Convert', [])
        .provider('pipDateConvert', DateConvertProvider);
})();
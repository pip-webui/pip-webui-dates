import { DateTimeConfig, IDateConvertService, IDateConvertProvider } from './IDateConvertService';

(() => {
    class DateTimeConvert implements IDateConvertService {
        private _config: DateTimeConfig;
        protected _momentRanged: string[] = new Array('year', 'month', 'week', 'isoweek', 'day');
        protected _defaultFormat: string = 'LL'

        private isUndefinedOrNull(date: any): boolean {
            return angular.isUndefined(date) || date === null;
        }

        private getRange(date: string): string {
            if (this.isUndefinedOrNull(date)) {
                return 'day';
            }

            let index = this._momentRanged.indexOf(date)

            if (index < 0) {
                return 'day'
            }
            return this._momentRanged[index];
        }

        private getOperationRange(date: string): string {
            if (this.isUndefinedOrNull(date)) {
                return 'day';
            }

            let range = date == 'isoweek' ? 'week' : date,
                index = this._momentRanged.indexOf(range)

            if (index < 0) {
                return 'day'
            }
            return this._momentRanged[index];

        }

        private formatDateTime(date: any, basicFormat: string): string {
            let localDate: moment.Moment,
                formatTpl: string;

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                localDate = moment(date).utcOffset(this._config.timeZone);
            } else {
                localDate = moment(date);
            }

            if (!localDate.isValid()) {
                return '';
            }

            formatTpl = basicFormat ? basicFormat : this._defaultFormat;

            return localDate.format(formatTpl);
        }

        private formatDateTimeY(date: any, basicFormat: string): string {
            let localDate: moment.Moment,
                nowDate: moment.Moment,
                formatMoment: string;

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                localDate = moment(date).utcOffset(this._config.timeZone);
            } else {
                localDate = moment(date);
            }

            if (!localDate.isValid()) {
                return '';
            }

            nowDate = moment();
            formatMoment = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat);

            if (nowDate.year() == localDate.year()) {
                formatMoment = formatMoment.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');
            }

            return localDate.format(formatMoment);
        }

        private formatDay(date: any, basicFormat: string): string {
            let localDate: moment.Moment,
                format = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat),
                formatMonthYearless = format.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '').replace(/M/g, '');

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                localDate = moment(date).utcOffset(this._config.timeZone);
            } else {
                localDate = moment(date);
            }

            if (!localDate.isValid()) {
                return '';
            }

            return localDate.format(formatMonthYearless);
        }

        private formatMonthDay(date: any, basicFormat: string): string {
            let localDate: moment.Moment,
                format = basicFormat ? basicFormat : this._defaultFormat,
                formatLL = moment.localeData().longDateFormat(format),
                formatYearlessLL = formatLL.replace(/Y/g, '').replace(/^\W|\W$|\W\W/, '');

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                localDate = moment(date).utcOffset(this._config.timeZone);
            } else {
                localDate = moment(date);
            }

            if (!localDate.isValid()) {
                return '';
            }

            return localDate.format(formatYearlessLL);
        }

        //  use timezone not testing
        private formatRange(date1: any, date2: any, basicFormat: string): string {
            let localDateStart: moment.Moment,
                localDateEnd: moment.Moment,
                format = basicFormat ? basicFormat : this._defaultFormat;

            if (this.isUndefinedOrNull(date1)) {
                localDateStart = null;
            } else {
                localDateStart = (this._config.timeZone != undefined && this._config.timeZone != null) ? moment(date1).utcOffset(this._config.timeZone) : moment(date1);
            }
            if (this.isUndefinedOrNull(date2)) {
                localDateEnd = null;
            } else {
                localDateEnd = (this._config.timeZone != undefined && this._config.timeZone != null) ? moment(date2).utcOffset(this._config.timeZone) : moment(date2);
            }

            if (localDateStart === null && localDateEnd === null) return '';

            if (localDateStart === null) {
                return localDateEnd.format(basicFormat);
            }
            if (localDateEnd === null || localDateStart.isSame(localDateEnd)) {
                return localDateStart.format(basicFormat);;
            }

            if (localDateStart.isAfter(localDateEnd)) {
                // todo localization
                throw new Error('Date range error. Start localDate is more than end localDate.');
            }

            if (localDateStart.year() == localDateEnd.year()) {
                if (localDateStart.month() == localDateEnd.month()) {
                    return this.formatDay(localDateStart, basicFormat) + '-' + localDateEnd.format(basicFormat);
                }
                return this.formatMonthDay(localDateStart, basicFormat) + '-' + localDateEnd.format(basicFormat);

            }
            return localDateStart.format(basicFormat) + '-' + localDateEnd.format(basicFormat);

        }

        private toStartRange(date: any, range: string): Date {
            let localDate: moment.Moment;

            if (this.isUndefinedOrNull(date)) {
                throw new Error('toStartRange - date is undefined or null');
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                localDate = moment(date).utcOffset(this._config.timeZone);
            } else {
                localDate = moment(date);
            }
            if (!localDate.isValid()) {
                throw new Error('toStartRange - localDate is invalid');
            }

            return localDate.startOf(range).toDate();
        }

        private toEndRange(date: any, range: string, offset: number): any {
            let localDate: any,
                result: any,
                mssOffset: number;

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            if (!angular.isNumber(offset)) {
                mssOffset = 0;
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                localDate = moment(date).utcOffset(this._config.timeZone);
            } else {
                localDate = moment(date);
            }
            if (!localDate.isValid()) {
                return '';
            }

            if (mssOffset) {
                result = localDate.startOf(range).add(mssOffset, 'milliseconds');
            } else {
                result = localDate.startOf(range);
            }

            return localDate.startOf(range).toDate();
        }

        private toDateWithTime(date: any, formatDate: string, formatTime: string, firstTime?: boolean): any {
            let localDate: moment.Moment,
                result: string,
                nowDate: moment.Moment;

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                localDate = moment(date).utcOffset(this._config.timeZone);
            } else {
                localDate = moment(date);
            }
            if (!localDate.isValid()) {
                return '';
            }

            nowDate = moment();
            if (firstTime) {
                result = localDate.format(formatTime) + ' ' + localDate.format(formatDate);
            } else {
                result = localDate.format(formatDate) + ' ' + localDate.format(formatTime);
            }

            return result;
        }

        private toTodayDate(date: any, formatDate: string, formatTime: string): any {
            let localDate: moment.Moment,
                result: string,
                nowDate: any;

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            if (this._config.timeZone != undefined && this._config.timeZone != null) {
                localDate = moment(date).utcOffset(this._config.timeZone);
            } else {
                localDate = moment(date);
            }
            if (!localDate.isValid()) {
                return '';
            }

            nowDate = moment();

            if (nowDate.year() == localDate.year() && nowDate.month() == localDate.month() && nowDate.day() == localDate.day()) {
                result = localDate.format(formatTime);
            } else {
                result = localDate.format(formatDate) + ' ' + localDate.format(formatTime);
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
        
      

        public getDateJSON(localDate: any): string {
            return JSON.stringify(moment(localDate));
        }

        // navigation functions 
        // ------------------

        public getNextStart(date: any, category: string): any {
            let localDate: moment.Moment,
                range: string,
                result: any;

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            localDate = moment(date);
            if (!localDate.isValid()) {
                return '';
            }

            range = this.getRange(category);
            result = moment(localDate).startOf(range).add(this.getOperationRange(range));

            return result.toDate();
        }

        public getPrevStart(date: any, category: string): Date {
            let localDate: moment.Moment,
                range: string,
                result: moment.Moment;

            if (this.isUndefinedOrNull(date)) {
                throw new Error('getPrevStart - date is undefined or null');
            }

            localDate = moment(date);
            if (!localDate.isValid()) {
                throw new Error('getPrevStart - localDate is invalid');
            }

            range = this.getRange(category);
            result = moment(localDate).startOf(range).add(-1, this.getOperationRange(range));

            return result.toDate();
        }

        public getNowStart(category: string): Date {
            let localDate: moment.Moment,
                range: string,
                result: moment.Moment;

            localDate = moment();
            if (!localDate.isValid()) {
                throw new Error('getNowStart - localDate is invalid');
            }

            range = this.getRange(category)
            result = moment(localDate).startOf(range);

            return result.toDate();
        }

        public addHours(date: any, hours: number): Date {
            let localDate: moment.Moment;

            if (this.isUndefinedOrNull(date) || !angular.isNumber(hours)) {
                throw new Error('addHours - date is undefined or null or hours is not a number');
            }

            localDate = moment(date);
            if (!localDate.isValid()) {
                throw new Error('addHours - localDate is invalid');
            }

            return localDate.add(hours, 'hours').toDate();
        }

        public toStartDay(date: any): Date {
            return this.toStartRange(date, 'day');
        }

        public toEndDay(date: any, offset: number): Date {
            return this.toEndRange(date, 'day', offset);
        }

        public toStartWeek(date: any): Date {
            return this.toStartRange(date, 'week');
        }

        public toEndWeek(date: any, offset: number): Date {
            return this.toEndRange(date, 'week', offset);
        }

        public toStartMonth(date: any): Date {
            return this.toStartRange(date, 'month');
        }

        public toEndMonth(date: any, offset: number): Date {
            return this.toEndRange(date, 'month', offset);
        }

        public toStartYear(date: any): Date {
            return this.toStartRange(date, 'year');
        }

        public toEndYear(date: any, offset: number): Date {
            return this.toEndRange(date, 'year', offset);
        }

    }

    class DateTimeConvertService {
        private _localDatetime: DateTimeConvert;
        private _config: DateTimeConfig;

        public constructor(
            localDatetime: DateTimeConvert,
        ) {
            this._config = { timeZone: null };
            this._localDatetime = localDatetime;
        }

        // todo Optional
        public useTimeZone(offset: number): void {
            return this._localDatetime.useTimeZone(offset);
        }

     

        public getDateJSON(localDate: any): string {
            return this._localDatetime.getDateJSON(localDate);
        }

        // navigation functions 
        // ------------------

        public getNextStart(date: any, category: string): any {
            return this._localDatetime.getNextStart(date, category);
        }

        public getPrevStart(date: any, category: string): any {
            return this._localDatetime.getPrevStart(date, category);
        }

        public getNowStart(category: string): any {
            return this._localDatetime.getNowStart(category);
        }

        public addHours(date: any, hours: number): any {
            return this._localDatetime.addHours(date, hours);
        }

        public toStartDay(date: any): any {
            return this._localDatetime.toStartDay(date);
        }

        public toEndDay(date: any, offset: number): any {
            return this._localDatetime.toEndDay(date, offset);
        }

        public toStartWeek(date: any): any {
            return this._localDatetime.toStartWeek(date);
        }

        public toEndWeek(date: any, offset: number): any {
            return this._localDatetime.toEndWeek(date, offset);
        }

        public toStartMonth(date: any): any {
            return this._localDatetime.toStartMonth(date);
        }

        public toEndMonth(date: any, offset: number): any {
            return this._localDatetime.toEndMonth(date, offset);
        }

        public toStartYear(date: any): any {
            return this._localDatetime.toStartYear(date);
        }

        public toEndYear(date: any, offset: number): any {
            return this._localDatetime.toEndYear(date, offset);
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
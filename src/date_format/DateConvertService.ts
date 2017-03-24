import { DateTimeConfig, IDateConvertService, IDateConvertProvider } from './IDateConvertService';

class MomentRange {
    static Year: string = 'year';
    static Month: string = 'month';
    static Week: string = 'week';
    static IsWeek: string = 'isoweek'; 
    static Day: string = 'day';
    static All: string[] = ['year', 'month', 'week', 'isoweek', 'day'] 
}

(() => {
    class DateTimeConvert implements IDateConvertService {
        private _config: DateTimeConfig;
        protected _momentRanged: string[] = MomentRange.All;
        protected _defaultFormat: string = 'LL'

        private isUndefinedOrNull(date: any): boolean {
            return angular.isUndefined(date) || date === null;
        }

        private getRange(date: string): string {
            if (this.isUndefinedOrNull(date)) {
                return MomentRange.Day;
            }

            let index = this._momentRanged.indexOf(date)

            if (index < 0) {
                return MomentRange.Day;
            }
            return this._momentRanged[index];
        }

        private getOperationRange(date: string): string {
            if (this.isUndefinedOrNull(date)) {
                return MomentRange.Day;
            }

            let range = date == MomentRange.IsWeek ? MomentRange.Week : date,
                index = this._momentRanged.indexOf(range)

            if (index < 0) {
                return MomentRange.Day;
            }
            return this._momentRanged[index];

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

        public toNextRange(date: any, type: string): any {
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

            range = this.getRange(type);
            result = moment(localDate).startOf(range).add(this.getOperationRange(range));

            return result.toDate();
        }

        public toPrevRange(date: any, type: string): Date {
            let localDate: moment.Moment,
                range: string,
                result: moment.Moment;

            if (this.isUndefinedOrNull(date)) {
                throw new Error('toPrevRange- date is undefined or null');
            }

            localDate = moment(date);
            if (!localDate.isValid()) {
                throw new Error('toPrevRange - localDate is invalid');
            }

            range = this.getRange(type);
            result = moment(localDate).startOf(range).add(-1, this.getOperationRange(range));

            return result.toDate();
        }

        public toCurrentRange(type: string): Date {
            let localDate: moment.Moment,
                range: string,
                result: moment.Moment;

            localDate = moment();
            if (!localDate.isValid()) {
                throw new Error('toCurrentRange - localDate is invalid');
            }

            range = this.getRange(type)
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
            return this.toStartRange(date, MomentRange.Day);
        }

        public toEndDay(date: any, offset: number): Date {
            return this.toEndRange(date, MomentRange.Day, offset);
        }

        public toStartWeek(date: any): Date {
            return this.toStartRange(date, MomentRange.Week);
        }

        public toEndWeek(date: any, offset: number): Date {
            return this.toEndRange(date, MomentRange.Week, offset);
        }

        public toStartMonth(date: any): Date {
            return this.toStartRange(date, MomentRange.Month);
        }

        public toEndMonth(date: any, offset: number): Date {
            return this.toEndRange(date, MomentRange.Month, offset);
        }

        public toStartYear(date: any): Date {
            return this.toStartRange(date, MomentRange.Year);
        }

        public toEndYear(date: any, offset: number): Date {
            return this.toEndRange(date, MomentRange.Year, offset);
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

        public toNextRange(date: any, type: string): any {
            return this._localDatetime.toNextRange(date, type);
        }

        public toPrevRange(date: any, type: string): any {
            return this._localDatetime.toPrevRange(date, type);
        }

        public toCurrentRange(type: string): any {
            return this._localDatetime.toCurrentRange(type);
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
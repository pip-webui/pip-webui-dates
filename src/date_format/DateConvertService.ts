import { DateRangeType, IDateConvertService, IDateConvertProvider } from './IDateConvertService';

(() => {
    class DateConvert implements IDateConvertService {
        protected _momentRanged: string[] = DateRangeType.All;
        protected _defaultFormat: string = 'LL';
        private _defaultTimeZoneOffset: number;

        public get defaultTimeZoneOffset(): number {
            return this._defaultTimeZoneOffset;
        }

        public set defaultTimeZoneOffset(value: number) {
            this._defaultTimeZoneOffset = value;
        }

        private isUndefinedOrNull(date: any): boolean {
            return angular.isUndefined(date) || date === null;
        }

        private getRange(date: string): string {
            if (this.isUndefinedOrNull(date)) {
                return DateRangeType.Day;
            }

            let index = this._momentRanged.indexOf(date)

            if (index < 0) {
                return DateRangeType.Day;
            }

            return this._momentRanged[index];
        }

        private getOperationRange(date: string): string {
            if (this.isUndefinedOrNull(date)) {
                return DateRangeType.Day;
            }

            let range: string = date == DateRangeType.WeekFromSunday ? DateRangeType.WeekFromSunday : date,
                index = this._momentRanged.indexOf(range)

            if (index < 0) {
                return DateRangeType.Day;
            }

            return this._momentRanged[index];

        }
  
        private toStartRange(date: any, range: string): Date {
            let localDate: moment.Moment;

            if (this.isUndefinedOrNull(date)) {
                throw new Error('toStartRange - date is undefined or null');
            }

            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null) {
                localDate = moment(date).utcOffset(this._defaultTimeZoneOffset);
            } else {
                localDate = moment(date);
            }

            if (!localDate.isValid()) {
                throw new Error('toStartRange - localDate is invalid');
            }

            return localDate.startOf(range).toDate();
        }

        private toEndRange(date: any, range: string, offset?: number): any {
            let localDate: any,
                result: any,
                mssOffset: number;

            if (this.isUndefinedOrNull(date)) {
                return '';
            }

            if (!angular.isNumber(offset)) {
                mssOffset = 0;
            }

            if (this._defaultTimeZoneOffset != undefined && this._defaultTimeZoneOffset != null) {
                localDate = moment(date).utcOffset(this._defaultTimeZoneOffset);
            } else {
                localDate = moment(date);
            }

            if (!localDate.isValid()) {
                return '';
            }

            if (mssOffset) {
                result = localDate.endOf(range).add(mssOffset, 'milliseconds');
            } else {
                result = localDate.endOf(range);
            }

            return localDate.endOf(range).toDate();
        }

        public toJson(date: any): string {
            return JSON.stringify(moment(date));
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
            result = moment(localDate).startOf(range).add(1, this.getOperationRange(range));

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
            return this.toStartRange(date, DateRangeType.Day);
        }

        public toEndDay(date: any, offset?: number): Date {
            return this.toEndRange(date, DateRangeType.Day, offset);
        }

        public toStartWeek(date: any): Date {
            return this.toStartRange(date, DateRangeType.WeekFromSunday);
        }

        public toEndWeek(date: any, offset?: number): Date {
            return this.toEndRange(date, DateRangeType.WeekFromSunday, offset);
        }

        public toStartMonth(date: any): Date {
            return this.toStartRange(date, DateRangeType.Month);
        }

        public toEndMonth(date: any, offset?: number): Date {
            return this.toEndRange(date, DateRangeType.Month, offset);
        }

        public toStartYear(date: any): Date {
            return this.toStartRange(date, DateRangeType.Year);
        }

        public toEndYear(date: any, offset?: number): Date {
            return this.toEndRange(date, DateRangeType.Year, offset);
        }

        public toTimeZoneToString(date: any, tzOffset?: number, offset?: number): string {
            tzOffset = tzOffset !== null && tzOffset !== undefined ? tzOffset : 0;
            offset = offset ? offset : 0; 

            return moment(date).add(offset - tzOffset, 'minutes').format();
        }

        public fromTimeZoneToString(date: any, tzOffset?: number, offset?: number): string {
            tzOffset = tzOffset !== null && tzOffset !== undefined ? tzOffset : 0;
            offset = offset ? offset : 0; 

            return moment(date).add(tzOffset - offset, 'minutes').format();
        }

    }

    class DateConvertService {
        private _convert: DateConvert;

        public constructor(
            convert: DateConvert,
        ) {
            this._convert = convert;
        }

        public get defaultTimeZoneOffset(): number {
            return this._convert.defaultTimeZoneOffset;
        }

        public set defaultTimeZoneOffset(value: number) {
            this._convert.defaultTimeZoneOffset = value;
        }
    
        public toJSON(date: any): string {
            return this._convert.toJson(date);
        }

        // date range functions 
        // ------------------

        public toNextRange(date: any, type: string): any {
            return this._convert.toNextRange(date, type);
        }

        public toPrevRange(date: any, type: string): any {
            return this._convert.toPrevRange(date, type);
        }

        public toCurrentRange(type: string): any {
            return this._convert.toCurrentRange(type);
        }

        public addHours(date: any, hours: number): any {
            return this._convert.addHours(date, hours);
        }

        public toStartDay(date: any): any {
            return this._convert.toStartDay(date);
        }

        public toEndDay(date: any, offset?: number): any {
            return this._convert.toEndDay(date, offset);
        }

        public toStartWeek(date: any): any {
            return this._convert.toStartWeek(date);
        }

        public toEndWeek(date: any, offset?: number): any {
            return this._convert.toEndWeek(date, offset);
        }

        public toStartMonth(date: any): any {
            return this._convert.toStartMonth(date);
        }

        public toEndMonth(date: any, offset?: number): any {
            return this._convert.toEndMonth(date, offset);
        }

        public toStartYear(date: any): any {
            return this._convert.toStartYear(date);
        }

        public toEndYear(date: any, offset?: number): any {
            return this._convert.toEndYear(date, offset);
        }

        public toTimeZoneToString(date: any, tzOffset?: number, offset?: number): string {
            return this._convert.toTimeZoneToString(date, tzOffset, offset);
        }

        public fromTimeZoneToString(date: any, tzOffset?: number, offset?: number): string {
            return this._convert.fromTimeZoneToString(date, tzOffset, offset);
        }
    }

    class DateConvertProvider extends DateConvert implements IDateConvertProvider {
        private _translation: DateConvert;
        private _service: DateConvertService;

        public $get(): any {
            "ngInject";

            if (this._service == null)
                this._service = new DateConvertService(this);

            return this._service;
        }
    }

    angular
        .module('pipDate.Convert', [])
        .provider('pipDateConvert', DateConvertProvider);
})();
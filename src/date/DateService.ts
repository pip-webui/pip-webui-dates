import { IDateTimeService, IDateTimeProvider } from './IDateService';
import { DateTimeConfig } from './DateTimeConfig';

class DateTime implements IDateTimeService {
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

    public toEndYear(value: any, offset: number): Date{
        return this.toEndRange(value, 'year', offset);
    }

}

class DateTimeService {
    private _datetime: DateTime;
    private _config: DateTimeConfig;

    public constructor(
        datetime: DateTime,
    ) {
        this._config = { timeZone: null };
        this._datetime = datetime;
    }

    // todo Optional
    public useTimeZone(offset: number): void {
        return this._datetime.useTimeZone(offset);
    }

    // todo Optional
    public formatTime(value: any, format: string): string {
        return this._datetime.formatTime(value, format);
    }

    // todo Optional
    public formatDateOptional(value: any, format: string): string {
        return this._datetime.formatDateOptional(value, format);
    }

    public formatShortDate(value: any): string {
        return this._datetime.formatShortDate(value);
    }

    public formatMiddleDate(value: any): string {
        return this._datetime.formatMiddleDate(value);
    }

    public formatLongDate(value: any): string {
        return this._datetime.formatLongDate(value);
    }

    public formatMonth(value: any): string {
        return this._datetime.formatMonth(value);
    }

    public formatLongMonth(value: any): string {
        return this._datetime.formatLongMonth(value);
    }

    public formatYear(value: any): string {
        return this._datetime.formatYear(value);
    }

    public formatWeek(value: any): string {
        return this._datetime.formatWeek(value);
    }

    public formatShortWeek(value: any): string {
        return this._datetime.formatShortWeek(value);
    }

    public formatShortDateTime(value: any): string {
        return this._datetime.formatShortDateTime(value);
    }

    public formatMiddleDateTime(value: any): string {
        return this._datetime.formatMiddleDateTime(value);
    }

    public formatLongDateTime(value: any): string {
        return this._datetime.formatLongDateTime(value);
    }

    public formatFullDateTime(value: any): string {
        return this._datetime.formatFullDateTime(value);
    }

    public formatShortDateLongTime(value: any, firstTime?: boolean): string {
        return this._datetime.formatShortDateLongTime(value, firstTime);
    }

    public formatMiddleDateLongTime(value: any, firstTime?: boolean): string {
        return this._datetime.formatMiddleDateLongTime(value, firstTime);
    }

    public formatLongDateLongTime(value: any, firstTime?: boolean): string {
        return this._datetime.formatLongDateLongTime(value, firstTime);
    }

    public bbFormatDateLongTime(value: any, firstTime?: boolean): string {
        return this._datetime.bbFormatDateLongTime(value, firstTime);
    }

    public formatShortTime(value: any): string {
        return this._datetime.formatShortTime(value);
    }

    public formatLongTime(value: any): string {
        return this._datetime.formatLongTime(value);
    }

    public formatShortDayOfWeek(value: any): string {
        return this._datetime.formatShortDayOfWeek(value);
    }

    public formatLongDayOfWeek(value: any): string {
        return this._datetime.formatLongDayOfWeek(value);
    }

    public formatLongMonthDay(value: any): string {
        return this._datetime.formatLongMonthDay(value);
    }

    public formatShortMonthDay(value: any): string {
        return this._datetime.formatShortMonthDay(value);
    }

    public formatDateRange(value1: any, value2: any): string {
        return this._datetime.formatDateRange(value1, value2);
    }

    public formatDateTimeRange(value1: any, value2: any): string {
        return this._datetime.formatDateTimeRange(value1, value2);
    }

    // iso function
    // --------------

    public formatISOWeek(value: any): string {
        return this._datetime.formatISOWeek(value);
    }

    public formatShortISOWeek(value: any): string {
        return this._datetime.formatShortISOWeek(value);
    }

    public formatISOWeekOrdinal(value: any): string {
        return this._datetime.formatISOWeekOrdinal(value);
    }
    // special formats 
    // --------------

    // year option displays if the current year is not equal to, the date of 
    public formatDateY(value: any): string {
        return this._datetime.formatDateY(value);
    }

    // year option displays if the current year is not equal to, the date of
    public formatLongDateY(value: any): string {
        return this._datetime.formatLongDateY(value);
    }

    // date displays if the current date  is not equal now 
    // September 4 1986 8:30:25 PM or 8:30:25 PM
    public formatTodayDateLongTimeLong(value: any): string {
        return this._datetime.formatTodayDateLongTimeLong(value);
    }

    // date displays if the current date  is not equal now 
    // Sep 4 1986 8:30:25 PM or 8:30:25 PM
    public formatTodayDateShortTimeLong(value: any): string {
        return this._datetime.formatTodayDateShortTimeLong(value);
    }

    // date displays if the current date  is not equal now 
    // September 4 1986 8:30 PM or 8:30 PM
    public formatTodayDateLongTimeShort(value: any): string {
        return this._datetime.formatTodayDateLongTimeShort(value);
    }

    // date displays if the current date  is not equal now 
    // Sep 4 1986 8:30 PM or 8:30 PM
    public formatTodayDateShortTimeShort(value: any): string {
        return this._datetime.formatTodayDateShortTimeShort(value);
    }

    public formatMillisecondsToSeconds(value: any) {
        return this._datetime.formatMillisecondsToSeconds(value);
    }

    public formatElapsedInterval(value: any, start: any): string {
        return this._datetime.formatElapsedInterval(value, start);
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

class DateTimeProvider extends DateTime implements IDateTimeProvider {
    private _translation: DateTime;
    private _service: DateTimeService;

    public constructor() {
        super({ timeZone: null });
    }

    public $get(): any {
        "ngInject";

        if (this._service == null)
            this._service = new DateTimeService(this);
        return this._service;
    }
}

angular
    .module('pipDateTime.Service', [])
    .provider('pipDateTime', DateTimeProvider);

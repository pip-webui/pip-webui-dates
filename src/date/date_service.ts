/// <reference path="../../typings/tsd.d.ts" />

module pip.datetime {
    'use strict';

    export interface IDateTimeService {
        formatTime(value: any, format: string): string;
        formatDateOptional(value: any, format: string): string;
        formatShortDate(value: any): string;
        formatLongDate(value: any): string;
        formatMonth(value: any): string;
        formatLongMonth(value: any): string;
        formatYear(value: any): string;
        formatWeek(value: any): string;
        formatShortWeek(value: any): string;
        formatShortDateTime(value: any): string;
        formatLongDateTime(value: any): string;
        formatShortTime(value: any): string;
        formatLongTime(value: any): string;
        formatShortDayOfWeek(value: any): string;
        formatLongDayOfWeek(value: any): string;
        formatDateNumber(value: any): string;
        formatLongDateNumber(value: any): string;
        formatTimeNumber(value: any): string;
        formatLongTimeNumber(value: any): string;
        formatLongMonthDay(value: any): string;
        formatShortMonthDay(value: any): string;
        formatDateRange(value1: any, value2: any): string;
        formatDateTimeRange(value1: any, value2: any): string;
        formatISOWeek(value: any): string;
        formatShortISOWeek(value: any): string;
        formatISOWeekOrdinal(value: any): string;
        formatDateY(value: any): string;
        formatLongDateY(value: any): string;
        formatMillisecondsToSeconds(value: any): string;
        formatElapsedInterval(value: any, start: any): string;
        getDateJSON(date: any): string;
        getNextStart(value: any, category: string): any;
        getPrevStart(value: any, category: string): any;
        getNowStart(category: string): any;
        addHours(value: any, hours: number): any;
        toStartDay(value: any): any;
        toEndDay(value: any, offset: number): any;
        toStartWeek(value: any): any;
        toEndWeek(value: any, offset: number): any;
        toStartMonth(value: any): any;
        toEndMonth(value: any, offset: number): any;
        toStartYear(value: any): any;
        toEndYear(value: any, offset: number): any;

    }    

    export interface IDateTimeProvider extends IDateTimeService, ng.IServiceProvider {

    }    

    class DateTime implements IDateTimeService{
        protected _momentRanged = new Array('year','month','week','isoweek', 'day');
        protected _defaultFormat = 'LL'

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
            } else {
                return this._momentRanged[index];
            }
        }

        private getOperationRange(value: string): string {
            if (this.isUndefinedOrNull(value)) {
                return 'day';
            }

            let range = value == 'isoweek' ? 'week' : value,
                index = this._momentRanged.indexOf(range)

            if (index < 0) {
                return 'day'
            } else {
                return this._momentRanged[index];
            }
        }

        private formatDateTime(value: any, basicFormat: string): string {
            var date: any,
                formatTpl: string;
            
             if (this.isUndefinedOrNull(value)) {
				return '';
			}

			date = moment(value);
			if (!date.isValid()) {
				return '';
			}

           formatTpl = basicFormat ? basicFormat : this._defaultFormat;

            return date.format(formatTpl);
        }

        private formatDateTimeY(value: any, basicFormat: string): string {
            var date: any,
                nowDate: any,
                formatMoment: string;
            
            if (this.isUndefinedOrNull(value)) {
				return '';
			}

			date = moment(value);
			if (!date.isValid()) {
				return '';
			}

            nowDate = moment();
            formatMoment = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat);

            if (nowDate.year() == date.year()) {
                formatMoment = formatMoment.replace(/Y/g,'').replace(/^\W|\W$|\W\W/,'');
            }

            return date.format(formatMoment);
        }

            private formatDay(value: any, basicFormat: string): string {
                var date: any,
                    format = moment.localeData().longDateFormat(basicFormat ? basicFormat : this._defaultFormat),
                    formatMonthYearless = format.replace(/Y/g,'').replace(/^\W|\W$|\W\W/,'').replace(/M/g,'');

                if (this.isUndefinedOrNull(value)) {
					return '';
				}

				date = moment(value);

                return date.format(formatMonthYearless);
            }

            private formatMonthDay(value: any, basicFormat: string): string {
                var date: any,
                    format = basicFormat ? basicFormat : this._defaultFormat,
                    formatLL = moment.localeData().longDateFormat(format),
                    formatYearlessLL = formatLL.replace(/Y/g,'').replace(/^\W|\W$|\W\W/,'');

                if (this.isUndefinedOrNull(value)) {
					return '';
				}

				date = moment(value);

                return date.format(formatYearlessLL);
            }

            private formatRange(value1: any, value2: any, basicFormat: string): string {
                var dateStart: any, 
                    dateEnd: any,
                    format = basicFormat ? basicFormat : this._defaultFormat;

                if (this.isUndefinedOrNull(value1)) { 
                    dateStart = null;
                } else { 
                    dateStart = moment(value1);
                }
                if (this.isUndefinedOrNull(value2)) {
					dateEnd = null;
				} else { 
                    dateEnd = moment(value2);
                }

                if (dateStart === null && dateEnd === null) return '';

                if  (dateStart === null) {
                    return dateEnd.format(basicFormat);
                } else if (dateEnd === null || dateStart.isSame(dateEnd)) {
                    return dateStart.format(basicFormat);;
                }

                if (dateStart.isAfter(dateEnd)) {
                    // todo localization
                    throw new Error('Date range error. Start date is more than end date.');
                }

                if (dateStart.year() == dateEnd.year()) {
                    if (dateStart.month() == dateEnd.month()) {
                        return this.formatDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
                    } else {
                        return this.formatMonthDay(dateStart, basicFormat) + '-' + dateEnd.format(basicFormat);
                    }
                } else {
                    return dateStart.format(basicFormat) + '-' + dateEnd.format(basicFormat);
                }                
            }

        private toStartRange(value: any, range: string): any {
            var date: any;

            if (this.isUndefinedOrNull(value)) {
				return '';
			}

			date = moment(value);
			if (!date.isValid()) {
				return '';
			}       

            return date.startOf(range);    
        }

        private toEndRange(value: any, range: string, offset: number): any {
            var date: any, 
                result: any,
                mssOffset: number;

            if (this.isUndefinedOrNull(value)) {
				return '';
			}

            if (!angular.isNumber(offset)) {
                mssOffset = 0;
            }

			date = moment(value);
			if (!date.isValid()) {
				return '';
			}       

            if (mssOffset) {
                result = date.startOf(range).add(mssOffset, 'milliseconds');
            } else {
                result = date.startOf(range);
            }

            return date.startOf(range);    
        }

        public constructor() {};        

        // formating functions 
        // -------------------

        // todo Optional
        public formatTime(value: any, format: string): string {
            return this.formatDateTime(value, 'LLL');
        }
        // todo Optional
        public formatDateOptional(value: any, format: string): string {
            return this.formatDateTime(value, 'L');
        }
        
        public formatShortDate(value: any): string {
            return this.formatDateTime(value, 'L');
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
            return this.formatDateTime(value, 'LLL');
        }

        public formatLongDateTime(value: any): string {
            return this.formatDateTime(value, 'LLLL');
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

        // numeric month writing formats
        // --------------

        // numeric month writing 
        public formatDateNumber(value: any): string {
            return this.formatDateTime(value, 'l');
        }
        // numeric month writing 
        public formatLongDateNumber(value: any): string {
            return this.formatDateTime(value, 'll');
        }  

        public formatTimeNumber(value: any): string {
            return this.formatDateTime(value, 'LLL');
        }

        public formatLongTimeNumber(value: any): string {
            return this.formatDateTime(value, 'LLLL');
        }

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

        // todo
        public formatMillisecondsToSeconds(value: any): string {
            return '';
        }

        // todo
        public formatElapsedInterval(value: any, start: any): string {
            var date: any, 
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
                var date: any, 
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

                return result;
            }

            public getPrevStart(value: any, category: string): any {
                var date: any, 
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
                result = moment(date).startOf(range).add(-1, this.getOperationRange(range));

                return result;
            }

            public getNowStart(category: string): any {
                var date: any, 
                    range: string, 
                    result: any;

				date = moment();
				if (!date.isValid()) {
					return '';
				}

                range = this.getRange(category) 
                result = moment(date).startOf(range);

                return result;
            }  

            public addHours(value: any, hours: number): any {
                var date: any;

                if (this.isUndefinedOrNull(value) || !angular.isNumber(hours)) {
					return '';
				}

				date = moment(value);
				if (!date.isValid()) {
					return '';
				}

                return date.add(hours, 'hours');
            }  

            public toStartDay(value: any): any {
                return this.toStartRange(value, 'day');
            }  

            public toEndDay(value: any, offset: number): any {
                return this.toEndRange(value, 'day', offset);
            }  
  
            public toStartWeek(value: any): any {
                return this.toStartRange(value, 'week');
            }  

            public toEndWeek(value: any, offset: number): any {
                return this.toEndRange(value, 'week', offset);
            }  

            public toStartMonth(value: any): any {
                return this.toStartRange(value, 'month');
            }  

            public toEndMonth(value: any, offset: number): any {
                return this.toEndRange(value, 'month', offset);
            }  

            public toStartYear(value: any): any {
                return this.toStartRange(value, 'year');
            }  

            public toEndYear(value: any, offset: number): any {
                return this.toEndRange(value, 'year', offset);
            }  

    }

    class DateTimeService {
        private _datetime: DateTime;

        public constructor(
            datetime: DateTime,
        ) {
            this._datetime = datetime;
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

        public formatLongDateTime(value: any): string {
            return this._datetime.formatLongDateTime(value);
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

        // numeric month writing formats
        // --------------

        // numeric month writing 
        public formatDateNumber(value: any): string {
            return this._datetime.formatDateNumber(value);
        }
        // numeric month writing 
        public formatLongDateNumber(value: any): string {
            return this._datetime.formatLongDateNumber(value);
        }  

        public formatTimeNumber(value: any): string {
            return this._datetime.formatTimeNumber(value);
        }

        public formatLongTimeNumber(value: any): string {
            return this._datetime.formatLongTimeNumber(value);
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

        // todo
        public formatMillisecondsToSeconds(value: any) {
            return this._datetime.formatMillisecondsToSeconds(value);
        }

        // todo
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
            super();
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

}
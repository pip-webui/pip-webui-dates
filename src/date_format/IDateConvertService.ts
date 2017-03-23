export class DateTimeConfig {
    timeZone: number;
}

export interface IDateTimeConvertService {
    readonly config: DateTimeConfig;
    useTimeZone(offset: number);
   
    getDateJSON(date: any): string;
    getNextStart(value: any, category: string): Date;
    getPrevStart(value: any, category: string): Date;
    getNowStart(category: string): Date;

    addHours(value: any, hours: number): Date;
    toStartDay(value: any): Date;
    toEndDay(value: any, offset: number): Date;
    toStartWeek(value: any): Date;
    toEndWeek(value: any, offset: number): Date;
    toStartMonth(value: any): Date;
    toEndMonth(value: any, offset: number): Date;
    toStartYear(value: any): Date;
    toEndYear(value: any, offset: number): Date;
 
}

export interface IDateTimeConvertProvider extends IDateTimeConvertService, ng.IServiceProvider {}
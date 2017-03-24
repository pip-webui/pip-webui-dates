export class DateTimeConfig {
    timeZone: number;
}

export interface IDateConvertService {
    readonly config: DateTimeConfig;
    useTimeZone(offset: number);
   
    getDateJSON(date: any): string;
    getNextStart(date: any, category: string): Date;
    getPrevStart(date: any, category: string): Date;
    getNowStart(category: string): Date;

    addHours(date: any, hours: number): Date;
    toStartDay(date: any): Date;
    toEndDay(date: any, offset: number): Date;
    toStartWeek(date: any): Date;
    toEndWeek(date: any, offset: number): Date;
    toStartMonth(date: any): Date;
    toEndMonth(date: any, offset: number): Date;
    toStartYear(date: any): Date;
    toEndYear(date: any, offset: number): Date;
 
}

export interface IDateConvertProvider extends IDateConvertService, ng.IServiceProvider {}
/// <reference path="../typings/tsd.d.ts" />

/// <reference path="../../typings/tsd.d.ts" />
declare module pip.datetime {
}

/// <reference path="../../typings/tsd.d.ts" />
declare module pip.datetime {
}

/// <reference path="../../typings/tsd.d.ts" />
declare module pip.datetime {
    interface IDateTimeService {
        formatDate(value: any): string;
    }
    interface IDateTimeProvider extends IDateTimeService, ng.IServiceProvider {
    }
}

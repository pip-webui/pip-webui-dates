/// <reference path="../../typings/tsd.d.ts" />

module pip.datetime {
    'use strict';

    export interface IDateTimeService {
        formatDate(value: any): string;
    }    

    export interface IDateTimeProvider extends IDateTimeService, ng.IServiceProvider {

    }    

    class DateTime implements IDateTimeService{
        public constructor() {}

        private isUndefinedOrNull(value: any): boolean {
            return angular.isUndefined(value) || value === null;
        }

        public formatDate(value: any): string {
            var date;

            if (this.isUndefinedOrNull(value)) {
				return '';
			}

			date = moment(value);
			if (!date.isValid()) {
				return '';
			}

            return date.format('L')
        }
     
    }

    class DateTimeService {
        private _datetime: DateTime;

        public constructor(
            datetime: DateTime,
        ) {
            this._datetime = datetime;
        }


        public formatDate(value: any): string {
            return this._datetime.formatDate(value);
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
/**
 * @file Optional filter to translate string resources
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipDates.Translate', []);

    thisModule.filter('translate', ['$injector', function ($injector) {
        var pipTranslate = $injector.has('pipTranslate') 
            ? $injector.get('pipTranslate') : null;

        return function (key) {
            return pipTranslate  ? pipTranslate.translate(key) || key : key;
        }
    }]);

})();

/// <reference path="../typings/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('pipDates', [
        'pipDateTime',
        'pipDates.Translate'
    ]);
})();

/// <reference path="../../typings/tsd.d.ts" />
var pip;
(function (pip) {
    var datetime;
    (function (datetime) {
        'use strict';
        angular.module('pipDateTime', [
            'pipDateTime.Service', 'pipDateTime.Filter'
        ]);
    })(datetime = pip.datetime || (pip.datetime = {}));
})(pip || (pip = {}));

/// <reference path="../../typings/tsd.d.ts" />
var pip;
(function (pip) {
    var datetime;
    (function (datetime) {
        'use strict';
        formatDateFilter.$inject = ['pipDateTime'];
        function formatDateFilter(pipDateTime) {
            "ngInject";
            return function (value) {
                return pipDateTime.formatDate(value) || value;
            };
        }
        angular
            .module('pipDateTime.Filter', [])
            .filter('formatDate', formatDateFilter);
    })(datetime = pip.datetime || (pip.datetime = {}));
})(pip || (pip = {}));

/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pip;
(function (pip) {
    var datetime;
    (function (datetime_1) {
        'use strict';
        var DateTime = (function () {
            function DateTime() {
            }
            DateTime.prototype.isUndefinedOrNull = function (value) {
                return angular.isUndefined(value) || value === null;
            };
            DateTime.prototype.formatDate = function (value) {
                var date;
                if (this.isUndefinedOrNull(value)) {
                    return '';
                }
                date = moment(value);
                if (!date.isValid()) {
                    return '';
                }
                return date.format('L');
            };
            return DateTime;
        }());
        var DateTimeService = (function () {
            function DateTimeService(datetime) {
                this._datetime = datetime;
            }
            DateTimeService.prototype.formatDate = function (value) {
                return this._datetime.formatDate(value);
            };
            return DateTimeService;
        }());
        var DateTimeProvider = (function (_super) {
            __extends(DateTimeProvider, _super);
            function DateTimeProvider() {
                _super.call(this);
            }
            DateTimeProvider.prototype.$get = function () {
                "ngInject";
                if (this._service == null)
                    this._service = new DateTimeService(this);
                return this._service;
            };
            return DateTimeProvider;
        }(DateTime));
        angular
            .module('pipDateTime.Service', [])
            .provider('pipDateTime', DateTimeProvider);
    })(datetime = pip.datetime || (pip.datetime = {}));
})(pip || (pip = {}));



//# sourceMappingURL=pip-webui-dates.js.map

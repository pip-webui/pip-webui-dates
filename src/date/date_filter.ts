/// <reference path="../../typings/tsd.d.ts" />

module pip.datetime {
    'use strict';

    function formatDateFilter(pipDateTime) {
        "ngInject";

        return function (value) {
            return pipDateTime.formatDate(value) || value;
        }
    }

    angular
        .module('pipDateTime.Filter', [])
        .filter('formatDate', formatDateFilter);

}

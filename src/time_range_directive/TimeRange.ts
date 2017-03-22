
(() => {

    angular.module('pipTimeRange', [])
        .directive('pipTimeRange',
        function () {
            return {
                restrict: 'E',
                scope: {
                    pipStartDate: '=',
                    pipEndDate: '='
                },
                templateUrl: 'time_range_directive/TimeRange.html',
                link: function ($scope: any, $element, $attrs) {

                    function getDateJSON(value) {
                        return value ? new Date(value) : null;
                    }

                    function defineStartDate() {
                        if ($scope.pipStartDate !== null && $scope.pipStartDate !== undefined) {
                            $scope.data.start = _.isDate($scope.pipStartDate) ? $scope.pipStartDate
                                : getDateJSON($scope.pipStartDate);
                        }
                    }

                    function defineEndDate() {
                        if ($scope.pipEndDate !== null && $scope.pipEndDate !== undefined) {
                            $scope.data.end = _.isDate($scope.pipEndDate) ? $scope.pipEndDate
                                : getDateJSON($scope.pipEndDate);
                        }
                    }

                    function toBoolean(value) {
                        if (value == null) return false;
                        if (!value) return false;
                        value = value.toString().toLowerCase();
                        return value == '1' || value == 'true';
                    }

                    $scope.data = {};
                    $scope.data.start = null;
                    $scope.data.end = null;
                    defineStartDate();
                    defineEndDate();

                    if (toBoolean((<any>$attrs).pipRebind)) {
                        $scope.$watch('pipStartDate',
                            function () {
                                $scope.data.start = null;
                                defineStartDate();
                            }
                        );
                        $scope.$watch('pipEndDate',
                            function () {
                                $scope.data.end = null;
                                defineEndDate();
                            }
                        );
                    }

                    // Add class
                    $element.addClass('pip-time-range');
                }
            };
        }
    );

})();

(function () {
    angular.module('controllers').controller('DataTypesController', ['$scope', 'DataTypes', function ($scope, DataTypes) {

        $scope.pageTitle = "DataTypes Controller";
        $scope.dataTypes = DataTypes.query();

        $scope.changeTitle = function (newTitle) {
            $scope.pageTitle = newTitle;
        };

        $scope.addDataType = function (dataType) {
            DataTypes.add(dataType);
        };
    }]);
}());
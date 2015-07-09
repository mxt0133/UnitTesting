(function () {
    angular.module('controllers').controller('DataTypesController', ['$scope', 'DataTypes', function ($scope, Dog) {
        $scope.pageTitle = "DataTypes";
        $scope.dataTypes = DataTypes.query();
    }]);
}());
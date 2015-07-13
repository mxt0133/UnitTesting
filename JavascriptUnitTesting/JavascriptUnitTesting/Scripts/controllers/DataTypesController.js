(function () {
    angular.module('controllers').controller('DataTypesController', ['$scope', 'DataTypes', 'RemoteData', function ($scope, DataTypes, RemoteData) {
        $scope.pageTitle = "DataTypes Controller";
        $scope.dataTypes = DataTypes.query();

        $scope.remoteData = null;

        console.log('Calling RemoteData.getData()');
        RemoteData.getData().then(function (data) {
            $scope.remoteData = data;
        });

    }]);
}());
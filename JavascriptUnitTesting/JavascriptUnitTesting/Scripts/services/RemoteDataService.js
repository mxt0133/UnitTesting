(function () {
    angular.module('services').factory('RemoteData', function ($http) {

        var getWebApiData = function () {
            return $http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories").success(function (response) {
                var data;

                data = response.data;

                data.newAttribute = "new attribute value";

                return data
            });
        };

        var getDataSE = function (){
            return $http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories")
                /*
                .then(function (response) {
                var data;

                data = response.data;
                data.newAttribute = "new attribute value";
                return data
            }).success(function (result) {
                success(restul);
            }).error(function () {
                error();

                
            });;

            */
        };

        return {
            getData: getWebApiData,
            getDataSuccessOrError : getDataSE
        };
    });
}());
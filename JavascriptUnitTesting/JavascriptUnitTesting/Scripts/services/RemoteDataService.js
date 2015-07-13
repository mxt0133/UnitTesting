(function () {
    angular.module('services').factory('RemoteData', function ($http) {

        var getWebApiData = function () {
            return $http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories").then(function (response) {
                var data;

                data = response.data;

                data.newAttribute = "new attribute value";

                return data
            });
        };

        return {
            getData :  getWebApiData        
        };
    });
}());
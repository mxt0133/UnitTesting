(function () {
    angular.module('services').factory('DataTypes', function () {

        var dataTypes = [
            { type: "String", name: "string" },
            { type: "Int32", name: "Integer" },
            { type: "Bool", name: "Boolean" }
        ];

        return {
            query: function () {
                return dataTypes;
            },
            add: function (dataType) {
                dataTypes.push(dataType);
            }
        };
    });
}());

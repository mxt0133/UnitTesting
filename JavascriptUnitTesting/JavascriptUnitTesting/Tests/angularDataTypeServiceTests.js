// Lib references
///<reference path="lib/jasmine.js"/>
///<reference path="../Scripts/lib/angular.js"/>
///<reference path="lib/angular-mocks.js"/>

// Source references
///<reference path="../Scripts/app/service.js"/>
///<reference path="../Scripts/services/DataTypesService.js"/>

describe("Services", function () {

    beforeEach(module("services"));

    describe("DataTypes service", function () {

        var dataTypes;

        beforeEach(inject(function ($injector) {
            dataTypes = $injector.get('DataTypes');
        }));

        it('should return 3 dataTypes when querying', function () {
            expect(dataTypes.query().length).toBe(3);
        });

        
        it('should return 4 dataTypes when querying after adding a dog', function () {
            dataTypes.add({ name: 'String', type: 'String' });
            expect(dataTypes.query().length).toBe(4);
        });
    });
});
// Lib references
///<reference path="../lib/jasmine-2.3.4/jasmine.js""/>
///<reference path="../../Scripts/lib/angular.js"/>
///<reference path="../lib/angular-mocks.js"/>

// Source references
///<reference path="../../Scripts/app/service.js"/>
///<reference path="../../Scripts/services/DataTypesService.js"/>


describe("Services", function () {

    // load services module before each describe
    beforeEach(module("services"));

    describe("DataTypes service", function () {

        var dataTypes;

        // inject a reference to the injector module that will resolve the DataTypes service for us
        beforeEach(inject(function ($injector) {
            dataTypes = $injector.get('DataTypes');
        }));

        it('should return 3 dataTypes when querying', function () {
            expect(dataTypes.query().length).toBe(3);
        });
        
        it('should return 4 dataTypes when querying after calling add method', function () {
            var startLenght = dataTypes.query().length;

            dataTypes.add({ name: 'String', type: 'String' });
            expect(dataTypes.query().length).toBe(startLenght + 1);
        });
    });
});

// Lib references
///<reference path="../lib/jasmine-2.3.4/jasmine.js""/>
///<reference path="../../Scripts/lib/angular.js"/>
///<reference path="../lib/angular-mocks.js"/>

// Source references
///<reference path="../../Scripts/app/service.js"/>
///<reference path="../../Scripts/app/controller.js"/>
///<reference path="../../Scripts/services/DataTypesService.js"/>
///<reference path="../../Scripts/controllers/DataTypesController.js"/>


describe("Controllers", function () {

    beforeEach(function () {
        module("services");
        module("controllers");
    });

    describe("DataTypes controller", function () {
        
        var dataTypesController, scope;

        beforeEach(inject(function ($rootScope, $controller) {

            scope = $rootScope.$new();
            dataTypesController = $controller('DataTypesController', { '$scope': scope });
        }));

        it('scope should have 3 record', function() {
            expect(scope.dataTypes.length).toBe(3);
        });

        it('scope pageTitle should be "DataTypes Controller"', function () {
            expect(scope.pageTitle).toBe('DataTypes Controller');
        });

        it('scope pageTitle should change when calling "changeTitle"', function () {

            var newTitle = 'New Title';

            scope.changeTitle(newTitle);
            expect(scope.pageTitle).toBe(newTitle);
        });

        
        it('scope addDataType should add a new data type to query', function () {

            var count = scope.dataTypes.length;
            
            scope.addDataType({ type: "bit", name: "Bit" });
            expect(scope.dataTypes.length).toBe(count + 1);
        });
    });


    describe('DataTypes controller using a mock DataTypesService', function () {
        
        var scope, mockDataTypesService, dataTypesController, mockDataTypes = [
                { type: "Char", name: "char" },
                { type: "Float", name: "float" },
        ];

        // create mock DataTypesService that will be injected to DataTypesController
        mockDataTypesService = {     
            query: function () {
                return mockDataTypes;
            },
            add: function (dataType) {
                //do nothing add
            }
        };

        // to create a DataTypesController we need the rootScope and controller modules
        // from the rootScope we need to create a child scope that will be passed to the
        // controller along with the mockedDataTypeService
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();               
            dataTypesController = $controller('DataTypesController', {
                '$scope': scope,
                'DataTypes': mockDataTypesService
            });
        }));

        // Tests against the DataTypesController will be done through the scope refrence

        // Test that the controller's dataTypes lenght is the same as the mockDataTypeService query lenght
        it('should return value from mocked service, dataTypes.length = 2', function () {
            expect(scope.dataTypes.length).toBe(mockDataTypesService.query().length);
        });

        // Test that the controllers call to addDataType execute the mockDataTypeController's do nothing add method
        it('mock of DataTypesService call to add should return only 2 data types after call', function () {
            scope.addDataType({ type: "Float", name: "float" });
            expect(scope.dataTypes.length).toBe(2);
        });
    });
});

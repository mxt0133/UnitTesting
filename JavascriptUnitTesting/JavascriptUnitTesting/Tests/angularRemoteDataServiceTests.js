// Lib references
///<reference path="lib/jasmine.js"/>
///<reference path="../Scripts/lib/angular.js"/>
///<reference path="lib/angular-mocks.js"/>

// Source references
///<reference path="../Scripts/app/service.js"/>
///<reference path="../Scripts/services/RemoteDataService.js"/>

describe("Services", function () {

    beforeEach(module("services"));

    describe("DataTypes service", function () {

        var remoteData, httpBackend;

        beforeEach(inject(function ($injector) {
            remoteData = $injector.get('RemoteData');
            // this will allos us to intercept calls made to $http
            // so that we can control what is returend for unit testing 
            // purposes
            httpBackend = $injector.get('$httpBackend');
        }));
        
        it('should return two records with [0].name = "MockedName" for GetData call', function () {

            //
            httpBackend.whenGET("http://services.odata.org/V4/Northwind/Northwind.svc/Categories").respond(
                {
                    value: [{ CategoryID: 1, CategoryName: "Beverages", Description: "Soft drinks, coffees, teas, beers, and ales" },
                            { CategoryID: 2, CategoryName: "Condiments", Description: "Sweet and savory sauces, relishes, spreads, and seasonings"}]
                }
               
            );

            // it resturns a promise so need to pass a function to handle 
            // when the call completes
            remoteData.getData().then(function (results) {
                
                expect(results.value).not.toBe(null);         
        
                expect(results.value.length).toBe(2);
                expect(results.newAttribute).toBe('new attribute value');
            });
            
            httpBackend.flush();
        });
    });
});

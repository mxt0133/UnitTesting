// Lib references
///<reference path="../lib/jasmine-2.3.4/jasmine.js""/>
///<reference path="../../Scripts/lib/angular.js"/>
///<reference path="../lib/angular-mocks.js"/>

// Source references
///<reference path="../../Scripts/app/service.js"/>
///<reference path="../../Scripts/services/RemoteDataService.js"/>


describe("Services", function () {

    beforeEach(module("services"));

    describe("RemoteDataTypes service", function () {

        var remoteData, httpBackend;

        beforeEach(inject(function ($injector) {
            remoteData = $injector.get('RemoteData');
            // this will allos us to intercept calls made to $http
            // so that we can control what is returend for unit testing 
            // purposes
            httpBackend = $injector.get('$httpBackend');
        }));
        

        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should return two records with for GetData call', function () {

            var successCallBack, errorCallBack;

            successCallBack = jasmine.createSpy();
            errorCallBack = jasmine.createSpy();

            // This response will cause the success to be executed on the promise with the object specified
            httpBackend.whenGET("http://services.odata.org/V4/Northwind/Northwind.svc/Categories").respond(
                {
                    data: [{ CategoryID: 1, CategoryName: "Beverages", Description: "Soft drinks, coffees, teas, beers, and ales" },
                            { CategoryID: 2, CategoryName: "Condiments", Description: "Sweet and savory sauces, relishes, spreads, and seasonings"}]
                }               
            );                   

            // getData() resturns a promise so need to pass a success and error function to handle 
            // the expected response
            remoteData.getData().success(successCallBack).error(errorCallBack);

            // success or error should not be called until httpBackend is flushed
            expect(successCallBack).not.toHaveBeenCalled();
            expect(errorCallBack).not.toHaveBeenCalled();   

            // This will cause the httpBackend to send the response
            httpBackend.flush();

            // Expect success to have been called and not error
            expect(successCallBack).toHaveBeenCalled();
            expect(errorCallBack).not.toHaveBeenCalled();
            
            // Expect that the success call back was called with an object that has a data property
            expect(successCallBack.calls.mostRecent().args[0].data).not.toBeNull();
            // Expect that the success call back was called with an object that has a data property
            // that is an array with lenght of 2
            expect(successCallBack.calls.mostRecent().args[0].data.length).toBe(2);
        });

        it('should return error for GetData call', function () {

            var successCallBack, errorCallBack;

            successCallBack = jasmine.createSpy();
            errorCallBack = jasmine.createSpy();

            // This will response will cause the error to be executed on the promise
            // Respond with a 500 which is the an error
            httpBackend.whenGET("http://services.odata.org/V4/Northwind/Northwind.svc/Categories").respond(500);

            // it resturns a promise so need to pass a function to handle 
            // when the call completes
            remoteData.getData().success(successCallBack).error(errorCallBack);

            // success or error should not be called until httpBackend is flushed
            expect(successCallBack).not.toHaveBeenCalled();
            expect(errorCallBack).not.toHaveBeenCalled();

            // This will cause the httpBackend to send the response
            httpBackend.flush();     

            // Expect error to have been called and not success
            expect(successCallBack).not.toHaveBeenCalled();
            expect(errorCallBack).toHaveBeenCalled();
        });
    });
});

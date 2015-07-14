/*  This is a basic jasmine test based on BDD
    ref:  http://jasmine.github.io/2.1/introduction.html

    This test will call Service.MethodA and expect the result
    to 'Called MethodA'

    This test references the jasmine.js file and Service.js
    which contains the definition of the Service class.
*/

// Library references
/// <reference path="../lib/jasmine-2.3.4/jasmine.js""/>


// Source code references
/// <reference path="../../Scripts/TestService.js"/>

describe("TestService.MethodA", function ()
{
    it("Will call TestService.MethodA", function () {
        var result = new TestService().MethodA();

        expect(result).toBe("Called MethodA");
    });
});
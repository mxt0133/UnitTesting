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

describe("TestService", function ()
{
    it(" test that will call TestService.methodA", function () {
        // create new instancce of TestService class and call methodA
        var result = new TestService().methodA();

        expect(result).toBe("Called MethodA");
    });

    it(" test that will call TestService.sayHello", function () {
        var result = new TestService().sayHello('Matt');

        expect(result).toBe('Hello "Matt"!');
    });


    it(" test that should fail.", function () {
        var result = new TestService().sayHello('Matt');

        expect(result).not.toBe('Hello "Tom"!');
    });
});
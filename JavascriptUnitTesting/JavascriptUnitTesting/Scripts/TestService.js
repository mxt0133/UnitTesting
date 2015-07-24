var TestService = function () {
    function MethodA() { return "Called MethodA"; }

    function SayHello(name) { return 'Hello "' + name + '"!'};

    return { methodA: MethodA, sayHello : SayHello };
};
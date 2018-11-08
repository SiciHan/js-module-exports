// flat js
require('./testAA');

// directory/js
require('./testA/testB');

//one by one exports
const objAB = require('./testAB');
console.log(objAB);
console.log(objAB.sayHelloInEnglish());
console.log(objAB.sayHelloInEnglish2());
console.log(objAB.sayHelloInEnglish3());

// one block of exports
const objAC = require('./testAC');
console.log(objAC);
console.log(objAC.sayHelloInEnglish());
console.log(objAC.sayHelloInSpanish());

// class instantiation
const testAE = require('./testAE');
var ObjAE = new testAE.TestAE('test 111');
ObjAE.helloWorld();
ObjAE.helloWorld2();

function xfunc() {
    console.log("xfunc");
    return "testX";
}

function yfunc() {
    console.log("yfunc");
    return "testY"
}
require('./testAD.js')(xfunc, yfunc);

// class instantiation
var ObjAE2 = new testAE.TestAE2('test 111');
console.log(ObjAE2);
ObjAE2.helloWorld3();
ObjAE2.helloWorld4();
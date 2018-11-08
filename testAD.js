module.exports = function(a , b){
    console.log(a);
    console.log(b);
    sayHelloInEnglishAD(a);
    sayHelloInSpanishAD(b);
    
    function sayHelloInEnglishAD(a) {
      console.log(a());
    }
  
    function sayHelloInSpanishAD(b) {
        console.log(b());
    }
};
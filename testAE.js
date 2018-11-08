class TestAE {
    // cannot delcare on class level.
    constructor(yy){
        console.log("incoming > " + yy);
        // variable that declare as 
        //this is part the class variable
        this.yyy = yy;
        let appleClass = new Apple('red');
        console.log(appleClass);
    }

    helloWorld(){
        console.log(" helloWorld ");
        console.log(" helloWorld " + this.yyy);
        this.yyyy = "Hello this yyyy"
        console.log(this.yyyy);
    }

    helloWorld2(){
        console.log("helloWorld > " + this.yyyy);
    }
}

class TestAE2 {
    // cannot delcare on class level.
    constructor(yy){
        console.log("incoming > " + yy);
        // variable that declare as 
        //this is part the class variable
        this.yyy = yy;
    }

    helloWorld3(){
        console.log(" helloWorld ");
        console.log(" helloWorld " + this.yyy);
        this.yyyy = "Hello this yyyy"
    }

    helloWorld4(){
        console.log("helloWorld > " + this.yyyy);
    }
}

class Apple {
    constructor(color){
        console.log(color);
    }
}

module.exports = { TestAE, TestAE2 };
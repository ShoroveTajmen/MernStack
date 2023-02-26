class parent {
    func1() {
        console.log("hello from function 1");
    }
    func2() {
        console.log("hello from function 2");
    }
}
class child extends parent {
    //method overriding----child class can change the function/method behaviour which extends from parent class but parent class can't
    func1() {
        console.log("change the function activities");
    }

    //super keyword used for directly access the parent class properties
    demo() {
        super.func1();
        super.func2();
    }
}
var obj = new child();
obj.func1();
obj.func2();
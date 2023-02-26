//constructor is like a method but can't return type
class MyClasss {
    constructor(a, b) {
        this.firstNum = a;
        this.secondNum = b;
    }
    add() {
        let result = this.firstNum + this.secondNum;
        console.log(result);
    }
}
var obj = new MyClasss(10, 20);
obj.add();
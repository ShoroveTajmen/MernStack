//Simple Function
function myName() {
    var x = 10;
    var y = 10;
    var zz = x + y;
    console.log(zz);
}
myName();


//Parameterized Functions
function myName1(x, y) {
    var z = x + y;
    console.log(z);
}
myName1(10, 20);


//Rest Parameter  ---> using one parameter rest parameter can access all values and print like an array
function something(...a) {
    console.log(a); //here we access all parameter
    console.log(a[5]); //here we can access specific index value
}
something(1, 2, 3, 4, 5, 6, 7, "a", "b", "c");


//Returning Function
function funOne() {
    return "shorove";
}

function funTwo() {
    return funOne();
}
console.log(funTwo());;

//Anonymous Function -->
//1. A function without a name
//2.It can be declared dynamically at runtime
//3. An anonymous function can be assigned within a variable


var myFunc = function() {
    return "hello";

}

//reassign function
var myFunc = function() {
    return "hello again";

}
console.log(myFunc());


//Arrow Function
var myArraowFun = (...x) => {
    return x;
}
console.log(myArraowFun(1, 2, 3, 4, 5, "helloooooo"));
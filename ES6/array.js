//simple array creation
var myArray = [1, 2, 3, 4, 5];
//array creation with array constructor or object
var myArrayPro = new Array(1, 2, 3, 4, 5);
console.log(myArray[2]);
console.log(myArrayPro[2]);
//print array element using for of loop
for (let item of myArray) {
    console.log(item);
}
for (let item of myArrayPro) {
    console.log(item);
}



//multidimensional Array
var bangladesh = ["Dhaka", "Khulna", "Bogura"]
var india = ["Mumbai", "Chennai", "Kolkata"]
var China = ["Uhan", "Shanghai", "Honkong"]

var Asia = [bangladesh, india, China]
console.log(Asia[2][0]);


//Array de-structuring
//Break down a complex structure into simple parts
var countries = ["Bangladesh", "India", "Japan", "China", "Germany", "Canada"];
var [a, , , b, , c] = countries;
console.log(a, b, c);
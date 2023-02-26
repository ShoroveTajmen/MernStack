//....Let variable
//1. let keyword is assigned in the block scope
//2. It can't be re-declared
//3.can be re-assigned a value

//....const variable
//1. const keyword is assigned in the block scope
//2. It can't be re-declared
//3. can not be re-assigned a value

//....var variable
//1. It can be re-declared
//2. can be re-assigned a value

var name1 = "Shorove";
name1 = "tajmen"; //re-assign also applicable for let keyword except for const keyword
console.log(name1);


var name2 = "Shorove";
var name2 = "tajmen"; //re-declare isn't applicable for let keyword and const keyword
console.log(name1);
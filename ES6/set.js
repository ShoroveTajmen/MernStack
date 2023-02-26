//set is a collection of data
//set is almost like array
//but it does not contain any duplicates
var mySet = new Set();
mySet.add("BAN");
mySet.add("IND");
mySet.add("NEPAL");
mySet.add("CHINA");
mySet.add("JAPAN");
console.log(mySet);

//or we can add the set values inside the set constructor like an array but this will be not be efficient.
// var mySet1 = new Set(['A', 'B', 'C', 'D']);
// console.log(mySet1);



//some set methods
//.delete()
mySet.delete("NEPAL");
console.log(mySet);
//.has(value)
if (mySet.has("BAN")) {
    console.log("yes");
} else {
    console.log("no");
}
//.values()
console.log(mySet.values());
//Set.size
console.log(mySet.size);
//.clear()
console.log(mySet.clear());
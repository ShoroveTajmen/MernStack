//map is a collection of data(key,value)pairing
var myMap = new Map();

myMap.set("key1", "bangladesh");
myMap.set("key2", "Japan");
myMap.set("key3", "Bhutan");
myMap.set("key4", "China");
myMap.set("key5", "Korea");

console.log(myMap.keys());
console.log(myMap.values());



//some methods
//delete(key)
//get(key)
//clear()
//has(key)
myMap.delete("key1");
myMap.delete("key2");
myMap.clear();
console.log(myMap.get("key1"));
if (myMap.has("key1")) {
    console.log("yes");
} else {
    console.log("No");
}


//loop for map values and keys
for (let myValues of myMap.values()) {
    console.log(myValues);
}
for (let myKeys of myMap.keys()) {
    console.log(myKeys);
}
//if we used static keyword it will be directly connected to the class
//if we don't use static keyword then it will connected to the object

// class Mycls {
//     hello() {
//         console.log("shorove");
//     }
// }
// var obj = new Mycls();
// obj.hello();

class Mycls {
    static hello() {
        console.log("shorove");
    }
}
Mycls.hello();
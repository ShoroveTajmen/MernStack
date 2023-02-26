//for in loop is best for using in object
var billgates = { shirt: true, shirtColor: "ofWhite", smile: true, sweater: true, sweaterColor: "gray", glasses: true }
for (let props in billgates) {
    console.log(props + ":" + billgates[props]);
}

//practice decision making statement
if (billgates['shirtColor'] == "red") {
    console.log("this is the shirt color");
} else if (billgates['shirtColor'] == "blue") {
    console.log("this is the shirt color");
} else {
    console.log("color not found");
}
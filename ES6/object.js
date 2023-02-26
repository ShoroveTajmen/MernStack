//simple object
var billgates = { shirt: true, shirtColor: "ofWhite", smile: true, sweater: true, sweaterColor: "gray", glasses: true }
console.log(billgates['shirtColor']);

//nested object
var billgatesPro = {
    shirt: {
        color: "gray",
        size: "M",
        prize: "1500taka"
    },
    sweater: {
        color: "red",
        size: "M",
        prize: "1000taka"
    }
}
console.log(billgatesPro['shirt']['size']);
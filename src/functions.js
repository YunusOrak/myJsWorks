function addToCart(productName, quantity = "1") {
    console.log("Sepete Eklendi : ürün : " + productName + " Adet : " + quantity)
}

//addToCart("Elma")
addToCart("Lemon")
    //addToCart("Karpuz")



let sayHello = () => {
    console.log("Hello World")
}

sayHello()

let sayHello2 = function() {
    console.log("Hello World 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = { productName: " Elma", unitPrice: 10, quantity: 5 }

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Fiyat : " + product.unitPrice)
    console.log("Adet : " + product.quantity)
}
addToCart3(product1)

let product2 = { productName: " Elma", unitPrice: 10, quantity: 5 }
let product3 = { productName: " Elma", unitPrice: 10, quantity: 5 }
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)


function addToCart4(products) {
    console.log(products)
}

let products = [
    { productName: " Elma", unitPrice: 10, quantity: 5 },
    { productName: " Armut", unitPrice: 10, quantity: 5 },
    { productName: " Karpuz", unitPrice: 10, quantity: 5 }
]

addToCart4(products)



let add = (birsey, ...numbers) => { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(birsey)
}

add(20, 30)
    //add(20, 30, 40)
    //add(20, 30, 40, 50)

let numbers = [30, 10, 5, 600, 120, 450]
    //console.log(...numbers)
console.log(Math.max(...numbers))

let [İcAnadolu, Marmara, Akdeniz, [icAnadoluSehirleri, MarmaraSehirleri, AkdenizSehirleri]] = [{
        name: "İç Anadolu",
        population: "20 M"
    },
    {
        name: "Marmara",
        population: "30 M"
    },
    {
        name: "Akdeniz",
        population: "10 M"
    },
    [
        ["Ankara", "Konya"],
        ["Çanakkale", "İstanbul"],
        ["Antalya", "Muğla"]
    ]
]

//console.log(Akdeniz.name)
//console.log(İcAnadolu.population)
console.log(AkdenizSehirleri)

let newProductName, newUnitPrice, newQuantity

    ({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = {
    productName: " Armut",
    unitPrice: 10,
    quantity: 5
})


console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)














//
//Destructuring

//Array

const colors=["ขาว","แดง"]
const [a,b]=colors

const product={
    productName : "คอมพิวเตอร์",
    price:30000,
    stock:10
}

const {productName:n,price:p,stock:s} = product   // เก็บในตัวแปร  n p s


console.log(a)
console.log(b)
console.log(productName)
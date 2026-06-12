// Operators

var a = 10 
a ++
console.log(a)

var b = 10 
b --
console.log(b)


var a = 10 
a ++
++ a
console.log(a)

var b = 10 
b --
-- b
console.log(b)


// post increment
// post decrement

var c = 10
var d = c++         // inga d variable la 10 thaa store aagi irukum, bacause c++ eppo again innum oru C ah meet pannutho appotha + add aagum  
console.log(d)
console.log(c)

var c = 10
var d = c--         
console.log(d)
console.log(c)


// pre increment
// pre decrement

var e = 17
var f = ++e       // inga pre ya ve ++ e meet panniruthu so f la add aagi thaa store aagum, ithu tha pre increment
console.log(f)

var e = 17
var f = --e       
console.log(f)


// Data Type

console.log(typeof(10))                // Number
console.log(typeof("Apple"))           // String
console.log(typeof("10"))              // String

var m 
console.log(m)                        // undefined

var n = "true"
console.log(n)                        // boolean

var o = "false"
console.log(o)                       // boolean

console.log(typeof(true))            // boolean


// Test

// 1. Create a variable named "Price" and set it to a specific price value.
// 2. Create a variable named "Product" and set it to a product name.
// 3. Create a variable named "Tax" and set it to a specific tax value.
// 4. Print the name of the product.
// 5. Calculate the total price amount, including tax (total = Price + Tax), and then print it.

var Price = 50        // integer   
var Product = "Pen"   // string must be declared in quotaions
var Tax = 10
console.log(Product)
var total = (Price+Tax)
console.log(total)



// 1. Declare a variable named "FruitName."
// 2. Declare a variable named "count."
// 3. Declare a variable named "Price" and set it to the price of the fruit.
// 4. Declare a variable named "total" and calculate it by multiplying the "count" by the "Price."
// 5. Print the name of the fruit.
// 6. Print the total price of the fruits


var FruitName = "Orange"
var count = 10
var Pricee = 40
var Totall = (count*Pricee)
console.log(FruitName)
console.log(Totall) 
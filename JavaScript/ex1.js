var a = 10 
var b = 30
console.log(a)
console.log(b)
console.log (a+b)

// var
{
    var m = 100
}

console.log(m)   // allow outside block also


// let

{
    let a =10
    console.log(a)     //allowed inside the block (let)
}

// console.log(a)   Not allowed a is not defined (outside the block - let)

// const

const d = 50     // ex : weekdays = 7
// d = 15    // Assignment to constant variable. once one time we assign any value to any variable cant change that is called const keyword.
console.log (d)
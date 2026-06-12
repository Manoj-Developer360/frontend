// JavaScript Functions

function hi ()
{
    console.log("Function is Working")
}
hi()

function Vivo ()
{
    console.log("This is Vivo Mobile")
}

function MyName (){
    console.log("My Name is Manoj Kumar V")
}

Vivo()
MyName()

//Exercise

// - Create two variables a and b
// - Create a function called add
// This Function should print addition of two Numbers

var a = 10
var b = 20
function Add ()
{
    console.log(a+b)
}
Add()



// Create a variable called factor, fplayer, fmovie
// Create a function called favourite()
// Everytime you call this function, this function should return the following output

// O/P
// Favourite Actor : Vijay
// Favourite Player : Virat
// Favourite Movie : Vettaikaaran


var factor = "Vijay"
var fplayer = "Virat"
var fmovie = "Vettaikaaran"

function favourite () {
    console.log("Favourite Actor : "+ factor)
    console.log("Favourite Player : "+ fplayer)
    console.log("Favourite Movie : "+ fmovie)
}

favourite()


// Function Parameters 

function multiply (a,b){
    console.log(a*b)
}
multiply(5,5)

// Exercise

// Create a function called area()
// This function should get 2 values as parameter(length, breadth)
// Pass two values to the function and print the result

function area (l,b){
    console.log("Area is : "+(l*b))
}
area(4,5)


//Return Type Functions 


function myname ()
{
    return ("Manoj")
}
var a = myname()
console.log(a)

// Create a function called add which should take 2 parameters a and b
// and it should return the addition of two variables

function add (a,b)
{
    return (a+b)
}
var addition = add(10,5)
console.log(addition)
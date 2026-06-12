// conditional Statement

// if else

if (true){
    console.log("Its true")
}else{
    console.log("Its False")
}

// if else exercise

// 1. Question: Is it raining outside?
// - If the answer is "yes," print "Take an umbrella."
// - If the answer is "no," print "Enjoy the sunshine."
// 2. Question: Did you finish your homework?
// - If the answer is "yes," print "Great job!"
// - If the answer is "no," print "Finish your homework before playing."
// 3. Question: Are there any cookies left?
// - If the answer is "yes," print "Would you like a cookie?"
// If the answer is "no," print "Time to bake more cookies."


rain = false 
if (rain){
    console.log("Take an umbrella.")
}else{
    console.log("Enjoy the sunshine")
}

homework = true
if (homework){
    console.log("Great job!")
}else{
    console.log("Finish your homework before playing.")
}

cookies = false
if (cookies){
    console.log("Would you like a cookie?")
}else{
    console.log("Time to bake more cookies.")
}

// Logical operators
// AND(&&) OR(||) NOT(!)
console.log(true && true)
console.log(true && false)
console.log(true && true && false)
console.log(true || false)
console.log(false || false || true)
console.log(!true)
console.log(!false)


// 1. Question: What is the color of the traffic light?
// - If the answer is "red," print "Stop."
// -If the answer is "yellow," print "Get Ready"
// - If the answer is "green," print "Go."

color = "yellow"

if(color == "red"){
    console.log("Stop")
}

if(color == "yellow"){
    console.log("Get Ready")
}

if (color == "green"){
    console.log("Go")
}



// 2. Question: What is the season of the year?
// - If the answer is "spring," print "Enjoy the blooming flowers."
// - If the answer is "summer," print "Have fun in the sun."
// - If the answer is "autumn" or "fall," print "Admire the colorful leaves."
// - If the answer is "winter," print "Bundle up and stay warm."


season = "spring"

if (season == "spring"){
    console.log("Enjoy the blooming flowers.")
}

if (season == "summer"){
    console.log("Have fun in the sun.")
}

if (season == "autumn" || season == "fall"){
    console.log("Admire the colorful leaves")
}

if (season == "winter"){
    console.log("Bundle up and stay warm.")
}

// 3. Question: What is the score in a game?
// - If the score is less than 50, print "You need to improve."
// - If the score is between 50 and 70 (inclusive), print "Good job!"
// - If the score is greater than 70, print "Excellent performance!"

score = 65

if (score < 50){
    console.log("You need to improve.")
}
else if (score >= 50 && score <=70){
    console.log("Good job!")
}
else if (score <= 70){
    console.log("Excellent performance!")
}
else {
    console.log("Fail")
}



// 4. Question: Is the number even or odd?
// - If the number is even, print "The number is even."
// - If the number is odd, print "The number is odd."

number = 15
if (number%2==0){
    console.log("The number is even.")
}else{
    console.log("The number is odd.")
}


// 5. Question: Is the character a vowel or a consonant?
// - If the character is a vowel (a, e, i, o, u), print "It's a vowel."
// - If the character is a consonant, print "It's a consonant."


character = "i"
if ("aeiouAEIOU".includes(character)) {
    console.log("It's a vowel")
} else {
    console.log("It's a consonant")
}
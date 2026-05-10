let name = "Komal"
let age = 34

console.log(`"My name is ${name} and I am ${age} years old"`)

// -----------------------------------------------------------------------------------------------------------------------------------

let city = "Nagpur"
let country = "India"

let string = `"I live in ${city}, ${country}"`
console.log(string)

// --------------------------------------------------------------------------------------------------------------------------------------

let price = 100;
price = 150
console.log(price)

// ---------------------------------------------------------------------------------------------------------------------------------------

// const company = "Google";

// company = "Google is big company"

// console.log(company)
//TypeError: Assignment to constant variable. It is used when we need to use constant value

// ------------------------------------------------------------------------------------------------------------------------------------------
let name1 = "A";

let user_name = "B"

let _age = 20;

let $city = "Pune"

let lets = 10;

// -------------------------------------------------------------------------------------------------------------------------------------------

let name2 = "Komal"
let age2 = 34
let isThisWrong = "False"

console.log(name2)
console.log(age2)
console.log(isThisWrong)

// -------------------------------------------------------------------------------------------------------------------------------------------
// let a = "100" ----- string
// let b = 100 ------Number
// let c = true; ------Boolean
// let d; ----undefined
// let e = null ; null

// -----------------------------------------------------------------------------------------------------------------------------------

let date;
let DOB = null;

console.log(date)
console.log(DOB)

// --------------------------------------------------------------------------------------------------------------------------------------------

// trim() -----> remove extra space
let text = "  Hello World       "
console.log(text.trim())

// include() ------>checks if value exists
let sent = "I love javascripts"
console.log(sent.includes("javascripts"))

// lenght --------> total number of characters
let word = "Hello"
console.log(word.length);

// toUpperCase()---->convert to uppercase
let text1 = "hello world"
console.log(text1.toLocaleUpperCase());

// toLowerCase()---->convert to lowercase
let text2 = "KOMAL"
console.log(text2.toLowerCase());

// slice()----->extract part of string
let text3 = "Hello World"
console.log(text3.slice(0,7))

// -----------------------------------------------------------------------------------------------------------------------------

let name5 = "Rahul";
let city2 = "Pune";

message = "My name is " + name5 + " and I live in "+ city2 
console.log(message)

// “My name is Rahul and I live in Pune”

let response = `My name is ${name5} and I live in ${city2}`
console.log(response)

// ------------------------------------------------------------------------------------------------------------------------------

let responseMessage = " ERROR: Invalid Password ";

console.log(responseMessage.trim())

console.log(responseMessage.toLowerCase())

console.log(responseMessage.includes("invalid"))

// --------------------------------------------------------------------------------------------------------------------------------

let log = "User: Rahul | Status: Success";

console.log(log.slice(6,11))
console.log(log.slice(22,29))

// --------------------------------------------------------------------------------------------------------------------------------

//let num1 = 10;
//let num2 = 5;

// let num3 = num1 + num2
// console.log(num3)

// let num4 = num1 - num2
// console.log(num4)

// let num5 = num1 * num2
// console.log(num5)

// let num6 = num1 / num2
// console.log(num6)

// -----------------------------------------------------------------------------------------------------------------------------------
let num1 = 20;
let num2 = 10;
let result = num1 + num2;
console.log(result);

// -------------------------------------------------------------------------------------------------------------------------------

let totalMarks = 450;
let obtainedMarks = 360;
// Calculate percentage

let perc = (obtainedMarks / totalMarks)*100
console.log(perc)

// ---------------------------------------------------------------------------------------------------------------------------------

let price1 = 1000;
let gst = 18  ;

let GSTamount = (price1 * gst) /100 
console.log(GSTamount)

let Totalprice = GSTamount + price1
console.log(`Total Bill Amountn : ${Totalprice}`)

// ---------------------------------------------------------------------------------------------------------------------------------

let api1 = 120 // ms
let api2 = 200 // ms
let api3 = 150 //ms

let totalresponsetime = api1 + api2 + api3
console.log(`“Total Response Time : ${totalresponsetime} ms `)

let averageresponsetime = (api1 + api2 + api3) / 3
console.log(`“Total Response Time : ${averageresponsetime} ms `)

// --------------------------------------------------------------------------------------------------------------------------------\
// Arrays
// Q1.Create an array called fruits with 5 fruit names of your choice.
// • Print the entire array
// • Print only the first and last fruit

let fruits = ["Mango", "Kiwi", "Apple", "Chikoo", "Guava"]

console.log(fruits)
console.log(fruits[0])
console.log(fruits[4])
// -----------------------------------------------------------------------------------------------------------------------------

// Given:
// let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
// Print:
// • The element at index 2
// • The last element using its index

let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

console.log(colors[2])
console.log(colors.indexOf("Purple"))

// ------------------------------------------------------------------------------------------------------------------------------

// Q3.
// Given:
// let cities = ["Mumbai", "Pune", "Delhi", "Chennai"];
// Perform the following one by one and print the array after each step:
// • Add "Bangalore" to the end
// • Remove the last city
// • Check if "Pune" is in the array
// • Find the index of "Delhi"
// • Print the total number of cities

let cities = ["Mumbai", "Pune", "Delhi", "Chennai"];

cities.push("Bangalore")
console.log(cities)

cities.pop()
console.log(cities)

console.log(cities.includes("Pune"))
console.log(cities.indexOf("Delhi"))
console.log(cities.length)

// -----------------------------------------------------------------------------------------------------------------------------
// Q4.
// Given:
// let scores = [88, 45, 92, 67, 30];
// • Check if 92 is present in the array
// • Find the index of 45
// • Add a new score 75 at the end
// • Remove the last score
// • Print the final length of the array

let scores = [88, 45, 92, 67, 30];

console.log(scores.includes(92))
console.log(scores.indexOf(45))

scores.push(75)
console.log(scores)

scores.pop()
console.log(scores)

console.log(scores.length)
// -----------------------------------------------------------------------------------------------------------------------------
// Q5.
// Create an array of 5 of your friends' names.
// • Print "My best friend is ___" using index 0
// • Add a new friend at the end
// • Remove the last friend
// • Check if your own name is in the list

let friends = ["Trupti", "Chaitali", "Radha", "Aiman", "Sneha"]

console.log(`My best friend is ${friends[2]}`)

friends.push("Nidhi")
console.log(friends)

friends.pop()
console.log(friends)

console.log(friends.includes("Komal"))
// --------------------------------------------------------------------------------------------------------------------------
// Q1.
// Create an object called student with:
// • name
// • age
// • city
// • isEnrolled (boolean)
// 👉 Print the full object, then print each value individually using dot notation

let student = {
    name : "Komal",
    age : 34,
    city : "Nagpur",
    isEnrolled : "True" 
}

console.log(Object.entries(student))
console.log(student.name)
console.log(student.age)
console.log(student.city)
console.log(student.isEnrolled)

// --------------------------------------------------------------------------------------------------------------------
// Q2.
// Create an object called phone with:
// • brand
// • model
// • price
// • specs (a nested object with: ram, storage, battery)
// 👉 Print: "The ___ ___ has ___GB RAM and ___mAh battery"

let phone = {
    Brand : "Motorola",
    Model: "S50",
    Price : 25000,
    Specs : {
        ram : 16 ,
        storage : 256,
        battery : 5000
    }
}

let resp = `The ${phone.Brand} ${phone.Model} has ${phone.Specs.ram} GB RAM and ${phone.Specs.battery} mAh battery`
console.log(resp)
// -----------------------------------------------------------------------------------------------------------------------------

// Q3.
// Given:
// let product = {
// name: "Laptop",
// price: 55000,
// category: "Electronics",
// inStock: true
// };
// Use Object.keys(), Object.values(), and Object.entries() to print all the information in the product.


let product = {
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    inStock: true
    };

console.log(Object.keys(product))
console.log(Object.values(product))
console.log(Object.entries(product))
// -----------------------------------------------------------------------------------------------------------------------------
// Q4.
// Create an object called user with:
// • username
// • email
// • age
// • address (nested object with: city, state, pincode)
// 👉 Print the user's full address as: "___, ___ - ___" (city, state - pincode)

let user = {
    username : "KomalBaseshankar",
    email : "baseshankarkomal@gmail.com",
    age : 34,
    address : {
        city : "Nagpur",
        state : "Maharashtra",
        pincode : 440024
    }
}
let message1 = `${user.username}, ${user.email} - ${user.age} (${user.address.city}, ${user.address.state} - ${user.address.pincode})`
console.log(message1)
// --------------------------------------------------------------------------------------------------------------------------------
// Q5.
// Create an object called apiResponse with:
// • status: "success"
// • code: 200
// • message: "Data fetched successfully"
// • data: an object with name, email of a user
// 👉 Print: "Status: ___ | Message: ___" and also print the user's name from inside data

let apiResponse = {
    status: "success",
    code: 200,
    message: "Data fetched successfully",
    data : {
        name : "Komal",
        email : "baseshankarkomal@gmail.com",
    }
}

let resp1 = `Status : ${apiResponse.status} | Message : ${apiResponse.message} | Username : ${apiResponse.data.name}` 
console.log(resp1)

// ------------------------------------------------------------------------------------------------------------------------
 // Conditionals
// Q1.
// Given:
// let temperature = 38;
// Write an if-else to print:
// • Above 37 → "You have a fever, see a doctor"
// • 37 or below → "You are fi ne"

let temperature = 38;
if (temperature >= 37){
    console.log("You have a fever, see a doctor")
}else{
    console.log("You are fine")
}

// ---------------------------------------------------------------------------------------------------------------------------
// Q2.
// Given:
// let balance = 500;
// let withdrawAmount = 1000;
// Use an if-else to check if the withdrawal is possible.
// • If balance >= withdrawAmount → "Withdrawal Successful"
// • Else → "Insufficient Balance"

let balance = 500;
let withdrawAmount = 1000;
if(balance >= withdrawAmount){
       console.log("Withdrawal Successful")
}
else{
    console.log("Insufficient Balance")
}
// ----------------------------------------------------------------------------------------------------------------------------
// Q3.
// Given:
// let marks = 74;
// Use else-if to print:
// • marks <= 35 → "Fail"
// • 36 to 74 → "Pass"
// • 75 and above → "Distinction"

let marks = 36;
if(marks <= 35){
    console.log("Fail")
}else if(marks >= 36 && marks <=74) {
    console.log("Pass")
}
else if(marks >=75)
{
    console.log("Distinction")
}
// ------------------------------------------------------------------------------------------------------------------------------
// Q4.
// Given:
// let user = {
// name: "Rahul",
// age: 17,
// hasLicense: false
// };
// Use nested if to check:
// • If user exists → print "User found: ___"
// • Inside that, if age >= 18 → check hasLicense
// • If hasLicense → "Can drive"
// • Else → "Needs to get a license"
// • If age < 18 → "Too young to drive"

// let user3 = {
//     name: "Rahul",
//     age: 17,
//     hasLicense: false
// };

// if(user3 != null){
//     console.log(`User found : ${user3.name}`)
//     if(age >= 18){
//         if(hasLicense){
//             console.log("Can drive")
//         }else{
//            console.log("Needs to get a license")
//         }
//     }else(age < 18){
//          console.log("Too young to drive")
//     }
       
// }

// -----------------------------------------------------------------------------------------------------------------------

// Q5.
// Given:
// let status = "pending";
// Use else-if to print:
// • "success" → "✅ Request completed"
// • "failure" → "❌ Request failed"
// • "pending" → "⏳ Request in progress"
// • anything else → "Unknown status"

let status = "pending";

if (status == "success"){
    console.log("✅ Request completed")
}
else if (status == "failure"){
    console.log("❌ Request failed")
}
else if (status == "pending"){
    console.log("⏳ Request in progress")
}
else{
    console.log("Unknown status")
}
// ---------------------------------------------------------------------------------------------------------------------------
// Comparison Operators
// Q1.
// Without running the code, predict the output. Then verify:
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 === 10);

// ------------------------------------------------------------------------------------------------------------------------
// Q2.
// Given:
// let a = "5";
// let b = 5;
// Write two checks:
// • Are they equal in value? (use ==)
// • Are they equal in value AND type? (use ===)
// 👉 Print the result of both checks and explain the difference in a comment

let a = "5";
let b = 5;

console.log(a == b) //----> true
console.log(a === b) //----> false

// ---------------------------------------------------------------------------------------------------------------------------
// Q3.
// Given:
// let userAge = 20;
// let minAge = 18;
// let maxAge = 60;
// Check if userAge is between minAge and maxAge (inclusive) and print "Eligible" or "Not Eligible".

let userAge = 20;
let minAge = 18;
let maxAge = 60;

if (userAge >= minAge &&  userAge <= maxAge){
    console.log("Eligible")
}else{
    console.log("Not Eligible")
}
// ------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------Logical Operators------------------------------------------
// Q1.
// Given:
// let hasTicket = true;
// let hasID = false;
// Use && to check if the person can enter (needs both ticket and ID).
// • Both true → "Entry Allowed"
// • Otherwise → "Entry Denied"

let hasTicket = true;
let hasID = false;
if(hasTicket && hasID){
    console.log("Entry Allowed")
}else{
    console.log("Entry Denied")
}
// -------------------------------------------------------------------------------------------------------------------------
// Q2.
// Given:
// let isWeekend = false;
// let isHoliday = true;
// Use ||(or) to check if the person gets a day off (needs at least one to be true).
// • At least one true → "Enjoy your day off!"
// • Both false → "You have to work today"

let isWeekend = false;
let isHoliday = true;

if(isWeekend || isHoliday){
    console.log("Enjoy your day off!")
}else{
    console.log("You have to work today")
}
// ------------------------------------------------------------------------------------------------------------------------
// Q3.
// Given:
// let username = "admin";
// let password = "1234";
// Use && to check if both username and password match expected values.
// 👉 Expected: username === "admin" and password === "1234"
// 👉 Print "Login Successful" or "Login Failed"

let username = "admin";
let password = "1234";
if(username === "admin" && password === "1234"){
    console.log("Login Successful")
}else{
    console.log("Login Failed")
}
// ---------------------------------------------------------------------------------------------------------------------------
// Q4.
// Given:
// let speed = 85;
// Use logical operators to check:
// • speed < 40 → "Too Slow"
// • speed >= 40 && speed <= 80 → "Speed OK"
// • speed > 80 → "Over Speed Limit"

let speed = 85;
if(speed < 40){
    console.log("Too Slow")
}else if(speed >= 40 && speed <= 80){
    console.log("Speed OK")
}else if(speed > 80){
    console.log("Over Speed Limit")
}else{
    console.log("I don't know")
}
// -------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------Truthy & Falsy Values------------------------------------------------
// Q1.
// For each value below, predict whether it is truthy or falsy. Then verify using an if statement:
let a1 = 0;
console.log(a1)

let b1 = "";
console.log(b1)

let c = "Hello";
console.log(c)

let d = null;
console.log(d)

let e = undefined;
console.log(e)

let f = [];
console.log(f)

let g = {};
console.log(g)

let h = NaN;
console.log(h)
// 👉 Print "truthy" or "falsy" for each
// ------------------------------------------------------------------------------------------------------------------------------
// Q2.
// Given:
let username7 = "";
// Use an if statement to check if a username was provided.
// • If username is truthy → "Welcome, ___"
// • If username is falsy → "Error: Username cannot be empty"

if (username7 != ""){
    console.log(`Welcome, ${username7}`)
}else{
    console.log("Error: Username cannot be empty")
}
// -----------------------------------------------------------------------------------------------------------------------------
// Q3.
// Given:
let userData = null;
// Use an if statement to safely check before accessing data.
// • If userData exists → "User loaded"
// • If userData is null or undefi ned → "No user data found"

if (userData != null){
    console.log("User loaded")
}else{
    console.log("No user data found")
}
// -----------------------------------------------------------------------------------------------------------------------------
// Q4.
// Given:
let cartItems = ["Radha","pihu"];
// Even though an empty array is truthy, check if the cart actually has items using .length:
// • If cart has items → "You have ___ item(s) in your cart"
// • If cart is empty → "Your cart is empty"

if(cartItems.length != []){
    console.log(`You have [${cartItems}] item(s) in your cart`)
}
else{
    console.log("Your cart is empty")
}
// ----------------------------------------------------------------------------------------------------------------------------
// Switch Case
// Q1.
// Given:
let day = "Wednesday";
// Use a switch statement to print:
// • Monday, Tuesday, Wednesday → "Sad"
// • Thursday, Friday → "Happy"
// • Saturday, Sunday → "Super Happy"
// • Anything else → "Invalid Day"

if (day == "Monday" || day == "Tuesday" || day == "Wednesday"  ){
    console.log("Sad")
}
else if(day == "Thursday" || day == "Friday"){
    console.log("Happy")
}
else if(day == "Saturday" || day == "Sunday"){
    console.log("Super Happy")
}
else{
    console.log("Invalid Day")
}
// ----------------------------------------------------------------------------------------------------------------------------
// Q2.
// Given:
let statusCode = 600;
// Use a switch to print the meaning of the status code:
// • 200 → "OK"
// • 201 → "Created"
// • 400 → "Bad Request"
// • 401 → "Unauthorized"
// • 404 → "Not Found"
// • 500 → "Internal Server Error"
// • Anything else → "Unknown Status"

if (statusCode == 404){
    console.log("OK")
}
else if(statusCode == 201){
    console.log("Created")
}
else if(statusCode == 400){
    console.log("Bad Request")
}
else if(statusCode == 401){
    console.log("Unauthorized")
}
else if(statusCode == 404){
    console.log("Not Found")
}
else if(statusCode == 500){
    console.log("Internal Server Error")
}
else{
    console.log("Unknown Status")
}
// -----------------------------------------------------------------------------------------------------------------------------
// Q3.
// Given:
let grade = "H";
// Use a switch to print:
// • A → "Excellent"
// • B → "Good"
// • C → "Average"
// • D → "Below Average"
// • F → "Fail"
// • Anything else → "Invalid Grade"

if (grade === "A"){
    console.log("Excellent")
}
else if(grade === "B"){
    console.log("Good")
}
else if(grade === "C"){
    console.log("Average")
}
else if(grade === "D"){
    console.log("Below Average")
}
else if(grade === "F"){
    console.log("Fail")
}
else {
    console.log("Invalid Grade")
}
// -----------------------------------------------------------------------------------------------------------------------------
// Q4.
// Given:
let role = "editor";
// Use a switch to print what each role can access:
// • admin → "Can read, write, and delete"
// • editor → "Can read and write"
// • viewer → "Can only read"
// • Anything else → "Access Denied"
if(role == "admin"){
    console.log("Can read, write, and delete")
}
else if(role == "editor"){
    console.log("Can read and write")
}
else if(role == "viewer"){
    console.log("Can only read")
}
else{
    console.log("Access Denied")
}
// ----------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------Loops------------------------------------------------------------
// Q1.
// Use a for loop to print all numbers from 1 to 20.

for(let num = 1 ; num <= 20 ; num++){
    console.log(num)
}
// ---------------------------------------------------------------------------------------------------------------------
// Q2.
// Given:
// let fruits = ["Mango", "Banana", "Pineapple", "Grapes", "Apple"];
// Use a loop to print each fruit with its position:
// "Fruit 1: Mango"
// "Fruit 2: Banana"
// "..."
let fruitss = ["Mango", "Banana", "Pineapple", "Grapes", "Apple"];

for(let idx = 0; idx < fruitss.length; idx++){
    console.log(`fruitss ${idx + 1}: ${fruitss[idx]}`)
}
// ---------------------------------------------------------------------------------------------------------------
// Q3.
// Use a for loop to print all even numbers between 1 and 50.

for(let i = 1; i <=50; i++){
     if (i % 2 == 0 )
     {
        console.log(i)
     }
}
// -------------------------------------------------------------------------------------------------------------------------
// Q4.
// Given:
// let marks = [45, 82, 36, 91, 58, 70, 29];
// Use a loop to count how many students passed (>= 35) and how many failed.
// 👉 Print: "Passed: ___ | Failed: ___"

let marks1 = [45, 82, 36, 91, 58, 70, 29];
for(let i = 0; i < marks1.length; i++){
    if(marks1[i] >= 35){
        console.log(`Passed : ${marks1[i]}`)
    }else{
        console.log(`Failed : ${marks1[i]}`)
    }
}
// ----------------------------------------------------------------------------------------------------------------------------
// Q5.
// Use a for loop to print the multiplication table of 7 (7x1 to 7x10).
// 👉 Expected: "7 x 1 = 7", "7 x 2 = 14" ...

for( let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = ${7 * i}`)
}
// ----------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------Number Logic----------------------------------------------------
// Q1.
// Use a loop to go through numbers 1 to 15 and print whether each is "Even" or "Odd".
// 👉 Use the % (modulus) operator

for(let range = 1 ; range <= 15 ; range++){
    if (range % 2 == 0 ){
        console.log(`even : ${range}`)
    }else{
        console.log(`odd : ${range}`)
    }
}
// ------------------------------------------------------------------------------------------------------------------------------
// Q2.(for division use % sign)
// Given:
// let nums = [3, 8, 15, 4, 22, 7, 11, 6];
// Loop through and separately sum all odd numbers and all even numbers.
// • Print: "Sum of odd numbers: ___"
// • Print: "Sum of even numbers: ___"

let nums = [3, 8, 15, 4, 22, 7, 11, 6];

let oddSum = 0;
let evenSum = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        evenSum = evenSum + nums[i];
    } else {
        oddSum = oddSum + nums[i];
    }
}

console.log("Sum of odd numbers:", oddSum);
console.log("Sum of even numbers:", evenSum);
// ------------------------------------------------------------------------------------------------------------------------------
// Q3.
// Use a for loop to check numbers from 1 to 30:
// • Divisible by both 3 and 5 → "FizzBuzz"
// • Divisible by 3 only → "Fizz"
// • Divisible by 5 only → "Buzz"
// • Otherwise → print the number

for(let num = 1 ; num <= 30 ; num++){
    if(num % 3 == 0 && num % 5 == 0){
        console.log(`FizzBuzz : ${num}`)
    }
    else if (num % 3 == 0){
        console.log(`Fizz : ${num}`)
    }
    else if (num % 5 == 0){
        console.log(`Buzz : ${num}`)
    }
    else{
        console.log(num)
    }
}
// ---------------------------------------------------------------------------------------------------------------------------
// Q4.
// Given:
let prices = [200, 450, 120, 890, 340];
let total = 0
let highest = 0
// Use a loop to:
// • Find the total of all prices
// • Find the highest price
// 👉 Print: "Total: ___ | Highest: ___"
for(i = 0; i< prices.length;i++){
    total = total + prices[i]
        if(prices[i] > highest){
            highest = prices[i];
        }
}
console.log(`Total: ${total} | Highest: ${highest}`)
// ------------------------------------------------------------------------------------------------------------------------------
// Problem Solving with Loops
// Q1.
// Given:
let nums1 = [1, 10, 3, 20, 4, 32, 23];
// Loop through and calculate the sum of odd numbers and the sum of even numbers separately.
// 👉 Print both sums at the end

let oddSum1 = 0;
let evenSum1 = 0;

for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] % 2 == 0) {
        evenSum1 = evenSum1 + nums1[i];
    } else {
        oddSum1 = oddSum1 + nums1[i];
    }
}

console.log("Sum of odd numbers:", oddSum1);
console.log("Sum of even numbers:", evenSum1);
// ---------------------------------------------------------------------------------------------------------------------------
// Q2.
// Given:
// let names = ["Rahul", "Priya", "Arjun", "Sneha", "Vikram"];
// Use a loop to:
// • Print "Welcome, Rahul!" for each name
// • Also check if "Arjun" is in the list — when found, print "Found Arjun at index ___"

let names = ["Rahul", "Priya", "Arjun", "Sneha", "Vikram"];

for (i = 0; i < names.length; i++){
    console.log(`Welcome, ${names[i]} !`)
    if(names[i] === "Arjun") {
        console.log(`Found Arjun at index ${i}`)
    }
}
// ----------------------------------------------------------------------------------------------------------------------------
// Q3.
// Given:
// let statusCodes = [100, 200, 201, 301, 404, 500, 602];
// Loop through each code and print its category:
// • 100–199 → "Informational"
// • 200–299 → "Successful"
// • 300–399 → "Redirection"
// • 400–499 → "Client Error"
// • 500–599 → "Server Error"
// • Anything else → "Unknown"

let statusCodes = [100, 200, 201, 301, 404, 500, 602];

for(i = 0 ; i < statusCodes.length; i++){
    let Value = statusCodes[i]
    if (Value >=100 && Value < 199){
          console.log(`Information : ${statusCodes[i]}`)
    }else if (Value >=200 && Value<299){
        console.log(`Successful : ${statusCodes[i]}`)
    }
    else if (Value >=300 && Value<399){
        console.log(`Redirection : ${statusCodes[i]}`)
    }
    else if (Value >=400 && Value<499){
        console.log(`Client error : ${statusCodes[i]}`)
    }
    else if (Value >=500 && Value<599){
        console.log(`server error : ${statusCodes[i]}`)
    }
    else{
        console.log("I don't know")
    }
}
// ----------------------------------------------------------------------------------------------------------------------
// Q4.
// Given:
let cart = [
{ name: "Laptop", price: 55000, qty: 1 },
{ name: "Mouse", price: 800, qty: 2 },
{ name: "Bag", price: 1500, qty: 1 }
];
// Loop through and:
// • Print each item: "Laptop x 1 = Rs.55000"
// • Calculate and print the grand total

let grandTotal = 0;

for (let item of cart) {
  let total = item.price * item.qty;
  
  console.log(`${item.name} x ${item.qty} = Rs.${total}`);
  
  grandTotal = grandTotal + total;
}

console.log("Grand Total: Rs." + grandTotal);
// --------------------------------------------------------------------------------------------------------------------------
// Q1.
// Create a function called greet that takes a name and prints:
// "Hello, ___! Welcome aboard."

function greet(name){
    console.log(`Hello, ${name} ! Welcome aboard`)
}
greet("Komal");
// --------------------------------------------------------------------------------------------------------------------
// Q2.
// Create a function called isEven that takes a number and returns true if it is even, false if odd.
// 👉 Test with: 4, 7, 10, 3

function isEven(num){
    if(num%2==0){
        console.log("True")
    }else(
        console.log("False")
    )  
}
isEven(10);
// ----------------------------------------------------------------------------------------------------------------------------
// Q3.
// Create a function called isEligible that takes an age and returns:
// • true if age >= 18
// • false if age < 18
// 👉 Test with: 16, 18, 25

function isEligible(age){
    if(age >= 18){
        console.log("True")
    }else{
        console.log("False")
    }
}

//isEligible(25)
function isEligible(age){
    return (age >= 18)
}
console.log(isEligible(20))

// --------------------------------------------------------------------------------------------------------------------------
// Q4.
// Create a function called isCodeSuccessful that takes an HTTP status code and returns:
// • true if the code is between 200 and 299
// • false otherwise
// 👉 Test with: 200, 201, 404, 500

function isCodeSuccessful(statuscode){
    return statuscode >= 200 && statuscode <= 299;
}

console.log(isCodeSuccessful(200));
console.log(isCodeSuccessful(201));
console.log(isCodeSuccessful(404));
console.log(isCodeSuccessful(500));
// -----------------------------------------------------------------------------------------------------------------------------
// Q5.
// Create a function called simpleInterest that takes principle, rate, and time:
// Simple Interest = (principle × rate × time) / 100
// 👉 Test: simpleInterest(10000, 10, 2) → 2000

function simpleInterest(principle, rate, time){
    let answer = (principle * rate * time) / 100
    return answer // return (principle * rate * time) / 100
}

console.log(simpleInterest(10000, 10, 2))
// --------------------------------------------------------------------------------------------------------------------------
// Q6.
// Create a function called arrayPop that takes an array, removes the last element, and returns the updated array.
let fruits11 = ["Mango", "Banana", "Pineapple", "Grapes", "Apple"];
// 👉 Print the result of calling arrayPop(fruits)

function arrayPop(array){
    array.pop()
    return array
}

console.log(arrayPop(fruits11))
// ----------------------------------------------------------------------------------------------------------------------------
// Q7.
// Create a function called calculator that takes two numbers and an operation string ("+", "-", "*", "/") and prints the result.
// 👉 Test all four operations

function calculator(numbers, operation){
    if(operation === "+"){
        let add = numbers[0] + numbers[1]
        console.log(add)
    }
    else if (operation === "-"){
        let sub = numbers[0] - numbers[1]
        console.log(sub)
    }
    else if (operation === "*"){
        let mul = numbers[0] * numbers[1]
        console.log(mul)
    }
    else if (operation === "/"){
        let div = numbers[0] / numbers[1]
        console.log(div)
    }
}
let numbers1 =[2,3] 
let numbers2 =[2,3] 
let numbers3 =[2,3] 
let numbers4 =[10,2] 

calculator(numbers1, "+")
calculator(numbers2, "-")
calculator(numbers3, "*")
calculator(numbers4, "/")
// -----------------------------------------------------------------------------------------------------------------------
// Q1. API Status Code Classifi er
// Given:
let statusCodes1 = [100, 104, 200, 201, 301, 405, 304, 602, 302, 50];
// Write a function called classifyCode that takes a single code and returns its category (Informational, Successful, Redirection, 
// Client Error, Server Error, or Unknown).
// 👉 Then loop through the array and use classifyCode to print the category for each code

function classifyCode(code) {
  if (code >= 100 && code <= 199) {
    return "Informational";
  } else if (code >= 200 && code <= 299) {
    return "Successful";
  } else if (code >= 300 && code <= 399) {
    return "Redirection";
  } else if (code >= 400 && code <= 499) {
    return "Client Error";
  } else if (code >= 500 && code <= 599) {
    return "Server Error";
  } else {
    return "Unknown";
  }
}

for (let code of statusCodes1) {
  console.log(code + " → " + classifyCode(code));
}
// -------------------------------------------------------------------------------------------------------------------------
// Create a user object with username, password, and isLoggedIn (false by default).
// Write a function called login that takes a username and password:
// • If both match → set isLoggedIn to true, print "Login Successful. Welcome, ___!"
// • If either doesn't match → print "Login Failed. Incorrect credentials."
// 👉 Test with: correct credentials, wrong password, and wrong username
let user5 = {
  username: "admin",
  password: "1234",
  isLoggedIn: false
};

function login(inputUsername, inputPassword) {
  if (inputUsername === user5.username && inputPassword === user5.password) {
    user.isLoggedIn = true;
    console.log(`Login Successful. Welcome, ${user5.username}!`);
  } else {
    console.log("Login Failed. Incorrect credentials.");
  }
}
login("admin", "1234");  
// ----------------------------------------------------------------------------------------------------------------------------
// Q3. User Validation with Nested Checks
// Given:
let user7 = {
name: "Rahul",
age: 16,
hasLicense: true
};
// Write a function called validateUser that performs nested checks:
// • If user exists → "User found: ___"
// • If age >= 18 and hasLicense → "Can drive"
// • If age >= 18 but no license → "Needs a license"
// • If age < 18 → "Too young to drive"
// • If user is null/undefi ned → "No user found"

function validateUser(user7){
    if(user7 != null && user7 != undefined){
        console.log(`User found: ${user7.name}`)
    }   if(user7.age >= 18 && user7.hasLicense) {
            console.log("Can drive");
        }else if(user7.age >= 18){
            console.log("Needs a license");
        }else if(user7.age < 18){
            console.log("Too young to drive")
        }
    else{
        console.log("No user found");
    }

}
console.log(validateUser(user7.name));
// -----------------------------------------------------------------------------------------------------------------------
// Q4. Status Handler
// Given:
let apiStatuses = ["success", "pending", "failure", "success", "unknown", "pending"];
// Write a function called handleStatus that takes a single status string and prints:
// • "success" → "✅ Request completed"
// • "failure" → "❌ Request failed"
// • "pending" → "⏳ Request in progress"
// • anything else → "Unknown status"
// 👉 Then loop through apiStatuses and call handleStatus for each one

function handleStatus(status){
    if(status === "success"){
        console.log("✅ Request completed")
    }
    else if(status === "failure"){
        console.log("❌ Request failed")
    }
    else if(status === "pending"){
        console.log("⏳ Request in progress")
    }
    else{
         console.log("Unknown status")
    }
}

for (let i = 0; i < apiStatuses.length; i++) {
  handleStatus(apiStatuses[i]);
}
// -------------------------------------------------------------------------------------------------------------------------------------
// Q5. Full Calculator
// Write a function called calculator that takes an array of two numbers and an operation string.
// Test it with:
// calculator([2, 3], "+")
// calculator([22, 34], "-")
// calculator([23, 13], "*")
// calculator([100, 4], "/")
// 👉 The function should print the result of each operation

function calculator(numbers, operation) {
  let num1 = numbers[0];
  let num2 = numbers[1];
  let result;

  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  } else {
    result = "Invalid operation";
  }

  console.log(result);
}
calculator([2, 3], "+")
calculator([22, 34], "-")
calculator([23, 13], "*")
calculator([100, 4], "/")

// ---------------------------------------------------------------------------------------------------------------------------
// let day = "Saturday"

// if (day == "Monday" || day == "Tues" || day == "wed"  

// ){
//     console.log("Sad")
// }
// else if(day == "Friday" || day == "Thus"){
//     console.log("Happy")
// }
// else if(day == "Sunday" || day == "Saturday"){
//     console.log("Supper Happy")
// }
// else{
//     console.log("I don't know")
// }


// //---------------------LOOPS------------------

for(let num = 1 ; num <= 10 ; num++){
    console.log(num)
}
// ----------------------------------------------
// let fruits = ["Manogo", "Banana", "Pineapple", "Chiku", "kiwi"]

// for(let idx = 0 ; idx <= 4 ; idx++){
//     console.log(fruits[idx])
// }
//--------------------------------------------
//range --> 10 - 20

// for(let range = 1 ; range <= 20 ; range++){
//     if (range % 2 == 0 ){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }

// // task
// -----------------------------------------------
// let names = ["Bhavesh", "Sonali", "Komal", "Alisha"]

// for(let idx = 0 ; idx <= 3 ; idx++){
//     console.log("welcome", names[idx]) 
// }
// -------------------------------------------------
//task

// let nums =[1,10,3,20,4,32,23]

// for(let i = 0 ; i < nums.length ; i++){
//     if (nums[i] % 2 == 0 ){
//         console.log(nums[i]," is even")
//     }else{
//         console.log(nums[i]," is odd")
//     }
// }
// ----------------------------------------------------
// task
// let nums =[1,10,3,20,4,32,23]
// let odd = 0
// let even = 0
// let sum = 0

// for(let i = 0 ; i < nums.length ; i++){
//     sum = sum + nums[i]
//     if (nums[i] % 2 == 0 ){
//         even = even + nums[i]
//         console.log(nums[i]," is even")
//     }else{
//         odd = odd + nums[i]
//         console.log(nums[i]," is odd")
//     }
// }
// console.log(odd)
// console.log(even)
// console.log(sum)
// --------------------------------------------

let nums1 =[1,10,3,20,4,6,32,24,19,17,18,26,90,100,105,204,65,64]
let odd1 = 0
let even1 = 0
let sum1 = 0

for (i = 0 ; i < nums1.length ; i++){
    sum1 = sum1 + nums1[i]
    if(nums1[i] % 2 == 0){
        even1 = even1 + nums1[i]
        console.log(nums1[i], " is even")
    }else{
        odd1 = odd1 + nums1[i]
        console.log(nums1[i], "is odd")
    }
}
console.log(sum1)
console.log(even1)
console.log(odd1)
//npm init -y
// npm install typescript --save-dev
// npx tsc --init

let isActive: Boolean = true;
//isActive = "sadaw" // throws error

let decimal: Number = 213.45
let num1: Number = 23
// num1 = "after" //throws error

let color: String = "Blue"
let fullName: String = 'Komal Baseshankar'
let state: String = `Maharashtra`
// color = 123// throws error

console.log(fullName)

let fruits : string[] = ["apple", "pineapple", "custurapple"]
let marks : number[] = [34,27,289]

let response: any = true
let apiResponse : unknown = "something"

function throwError() : never{
    throw Error("This is Error")
}

function add (num1:number , num2:number){
    return num1+num2
}

console.log(add(3,4))

let User : { name : string, state : string, age :number, isHungry : boolean } = {
     name: "Komal",
    state:"Maharashtra",
    age:34,
    isHungry : true
}

let NewUser : { name : string, state : string, age :number, isHungry? : boolean } = {
     name: "Komal",
    state:"Maharashtra",
    age:34
}

// ---------------------------------
function getRectanleArea(length? : number , width? :number) : number {
     if(length === undefined || length === null) length = 10
     if(width === undefined || width === null) width = 10

     return length * width
}
console.log(getRectanleArea(3,4))

type APIResponse = undefined | {status : number , message : string}

function getAPIResponse() : APIResponse {
    return {status : 200 , message : "API scuccessfull"}
}

let loginAPIResponse : APIResponse = getAPIResponse()

// --------------------------------------

interface User {
    name:string,
    state:string,
    age:number,
    isHungry: boolean
}

interface AdminUser extends User{
    doesHaveAccess : boolean
}

let user : User ={
    name:"Komal",
    state:"Maharashtra",
    age:34,
    isHungry: true
}

let newUser : AdminUser ={
    name:"Komal",
    state:"Maharashtra",
    age:34,
    isHungry: true,
    doesHaveAccess : true
}

// let statusCodes = [ 100, 104, 200, 201, 301, 405, 304, 602, 302 ]

// for(let idx = 0 ; idx < statusCodes.length ; idx++)
// {
//     let arrValue = statusCodes[idx];

//     if (arrValue >=100 && arrValue <200){
//          console.log("Information")
//     }
//     else if (arrValue >=200 && arrValue<300){
//         console.log("Successful")
//     }
//     else if (arrValue >=300 && arrValue<400){
//         console.log("Redirection")
//     }
//     else if (arrValue >=400 && arrValue<500){
//         console.log("Client error")
//     }
//     else if (arrValue >=500 && arrValue<600){
//         console.log("server error")
//     }
//     else{
//         console.log("I don't know")
//     }
// }
// -------------------------------------------------------
let statusCodes = [ 100, 104, 200, 201, 301, 405, 304, 602, 302 ]

for(let idx = 0 ; idx < statusCodes.length ; idx++)
{
    let arrValue = statusCodes[idx];
    if (arrValue / 100 == 1){
        console.log("Information")
    }
    else if (arrValue / 100 == 2){
        console.log("Successful")
    }
    else if (arrValue / 100 == 3){
        console.log("Redirection")
    }
    else if (arrValue / 100 == 4){
        console.log("Client error")
    }
    else if (arrValue / 100 == 5){
        console.log("server error")
    }
    else{
        console.log("I don't know")
    }
}
// ----------------------------Functions-------------------------------

let fruits = ["Mango", "Banana", "Pineapple", "Grapes", "Kiwi"]

function arrayPop(array){

    array.pop()
    return array;
}

let newArr = arrayPop(fruits)
console.log(newArr)

//console.log(arrayPop(fruits))

// ------------------------------------------------------


let SimpleInterest = (principal ,time , rate) => {
    principal * time * rate /100
    return principal * time * rate /100
}

console.log(SimpleInterest(10000,2,10))
// ---------------------------------------------------------------------------------------------------------------------
// class Rectangle{

//     length = 0;
//     width = 0;

//     constructor(length,width){
//         this.length = length;
//         this.width = width;
//     }

//     getArea(){
//         return this.length*this.width
//     }

//     getPerimeter(){
//         return 2 * (this.length + this.width)
//     }
// }

// let rectangle = new Rectangle(2,3)
// console.log(rectangle.getArea())
// console.log(rectangle.getPerimeter())
//-------------------------------------------------------------------------------------------------------------------------------------------
class Rectangle{

    static getArea(lenght,width){
        return lenght*width
    }

    static getPerimeter(lenght,width){
        return  2* (lenght+width)
       }
}

console.log(Rectangle.getArea(4,5))
console.log(Rectangle.getPerimeter(7,9))
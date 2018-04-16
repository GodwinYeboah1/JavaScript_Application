  // var myString: string;
class bike{
    constructor(
        public price: number,
        public max_speed: string,
        public miles: 0,
    ) {}
    
 displayInfo = function () {

     console.log( this.price,
                this.max_speed,
         this.miles);
 }  

     ride = function () {
         console.log("riding on the screen");
         this.miles +=10;
    }  
    reverse = function () {
        console.log("reversing ");
        this.miles -= 5;

    }
}
var user1 = new bike(23, "25 mpg", 12);
user1.ride()

user1.displayInfo()

console.log(user1)

user1.reverse()
console.log(user1)

    
 
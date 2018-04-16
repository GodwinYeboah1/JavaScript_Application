// module.exports = {
//     greet: function(){
//         console.log("we are now using a module!");
//     }
// }



module.exports = {
    greet: function(){
        console.log("we are now using a module!");
    },
    add: function(num1, num2){
        console.log("the sum is:", num1 + num2);
    },
    multiplication: (num1, num2)=>{
        console.log("the mutilpycation Numb is:", num1 * num2)
    },
    sayHello: function(name) {
        console.log("this is how you learn " , name); 

    }
}
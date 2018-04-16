function sayName(name){
    console.log("hello my name is " + name);

};
// this function that i created only takes on paramters
// which is name ()
 sayName("godwin");

// A return will end the function. 
// If we write any more instructions after a return statement, 
// they will not run. The key takeaway is that a function call is equal to whatever that function returns. 
// Let's get one last example of that in practice:
 function sayName(name){
    return "Hello my name is " + name;
};
let message = sayName("Cinderella");
console.log(message);

// Another type of function in JavaScript is an immediately invoked function.
//  This is a function where the declaration immediately calls itself.
//  While their purpose might not be clear at first, we will return to immediately invoked functions when we talk about scope. 

(function(){
    console.log("Hello world!");
})();


// arrows function
// 
let goblin = (name) => {console.log("hello my name is "+ name)};

goblin("godwinIs his Name");

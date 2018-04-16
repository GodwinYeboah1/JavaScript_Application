let u = [1,2,3];
let y = ['blue', 'yellow', 'magical unicorns'];
let z = [1, [], null, 'hello world!'];

let g = [1,2,4];
//  added a new value in javacript
g.push(6);
console.log(g)

// pops out the last value 

g.pop();
console.log(g)


t= [1,2,34,5];
// only pop out the last value
t.pop();
console.log(t)


// get the length value 
// with length you dont have to use () because we are not involking a function
let zo = [1, [], null, 'hello world!'];
console.log(zo.length);


//this mean we created a empyt a array 
let love = [];

// this mean at index 334 we are going to enter " hello  world"
// this is also mean that javascript is filling the  array blank index with undefined
love[334]= "hellow world";

// display in our console
console.log(love)

// constructor check to see if the data type is a array
let x = [1, 2, 3];
if(x.constructor === Array){
    console.log('Yes x is an array!');
}else{
    console.log('No x is not an array!');
};

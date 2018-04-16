// for loops in js
for(let i = 0; i < 5; i++){
    console.log("hello, Godwin")
}

let total = 0;
for(let i = 10; i > 0; i--){
    total = total + i;
}
console.log(total);

// while loops in js 
let num = 1;
while (num < 6){
    console.log("I'm counting! The number is " + num);
    num = num + 1;
}
console.log("We are done. Goodbye world!");

// do while loop
let num1 = 6;
do {
    console.log("I'm counting! The number is " + num1);
    num1 = num1 + 1;
}
while (num1 < 6);
console.log("We are done. Goodbye world!");




// iterating though the loops 
let colors = ['blue', 'green', 'red', 'chartreuse'];
// a simple array of strings
for(let i = 0; i < colors.length; i++){
// by using the length of our colors array, we can make the condition 
// of our for loop match the number of elements in the array!
    console.log(colors[i]);
    // now we can use i to log the elements of the color array individually
};



// when we need to get out of our loops when it satifiy our  
// using a break key word

let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
for(let i = 0; i < names.length; i++){
    if(names[i] === 'Kadie'){
        console.log('Kadie is in our array!');
        break;
    }

    // the reason why this condition does not show is because it has already gotten out of our 
    // for loop
    if(names[i] === 'Elle'){
        console.log('Kadie is in our array!');
        break;
    }



}
console.log('We finished looping!');

// contines even though it satisfied
let names1 = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
for(let i = 0; i < names1.length; i++){
    if(names1[i] === 'Steve'){ continue };
    console.log(names1[i]);
};


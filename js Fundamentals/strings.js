let first_name = "godwin";
let last_name = "yeboah";
let message = " hello, my name is," + first_name + " " + last_name;
console.log(message);

let g = "godwin";
let y = "yeboah";


//  string interpolation you can not used the "" 
// you have to use ` it s a right before the 1

// not going to work
let m = "hello, my name is ${g} ${y}";


// its is working 
let mg = `hello, my name is ${g} ${y}`;
console.log(mg);

let tom = "this is tom";
let yoo = 'this is brady'
let coolg = `hello, my name is ${tom} ${yoo}`;

console.log(coolg)

let text = 'hello \n i am godwin';
console.log(text);

// \t" - This creates a horizontal tab
// "\v" - This creates a vertical tab
// "\u" - Pass in unicode
// console.log('\t263A        \t2603        \t272f')

console.log('\u263A        \u2603        \u272f')
// console.log('\u263A        \u2603        \u272f')


// console.log('\v263A        \v2603        \v272f')



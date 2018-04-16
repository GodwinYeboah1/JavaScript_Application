let diet = false;
if(diet){
    dont_eat_cake();
}else{
    eat_cake();
}

//  if and else if in js 
let score = 4;
if(score === 5){
    console.log('You got 5 out of 5');
}else if(score === 4){
    console.log('You got 4 out of 5');
}else if(score === 3){
    console.log('You got 3 out of 5');
}else if(score === 2){
    console.log('You got 2 out of 5');
}else if(score === 1){
    console.log('You got 1 out of 5');
};

// switch cases
var text;
var fruits = document.getElementById("myInput").value;

switch(fruits) {
    case "Banana":
        text = "Banana is good!";
        break;
    case "Orange":
        text = "I am not a fan of orange.";
        break;
    case "Apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
}
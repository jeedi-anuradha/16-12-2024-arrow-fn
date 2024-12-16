/** 1.Write an arrow function that takes two parameters, a and b, and returns their sum.
let sum= (a,b)=> a + b;
console.log(sum(20,40));

2.Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
let greeting=name=>`Hello,${name}`;
console.log(greeting('Anu'));

3.Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.
let isEven=num=>(num%2==0)?true:false;
console.log(isEven(6));
console.log(isEven(9));
Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.
let isGreatTen=num=>num>10?true:false;
console.log(isGreatTen(11));
console.log(isGreatTen(6));

5.Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”*/
let stringLength=(str1,str2)=>{
if(str1.length>str2.length){
    return str1;
}
else if(str2.length>str1.length){
    return str2;
}
else{
    return 'Equal length';
}
} 
console.log(stringLength('Cherry','Apple'));
console.log(stringLength('Banana','Mango'));


var ajs="JavaScript - Scripting Programming Language";
console.log(ajs);
var num="27";
var NUM="72";
var num1="one";
var NUM1="ONE";
var _char="Raja";
var $char="Rani";
console.log(num);
console.log(NUM);
console.log(num1);
console.log(NUM1);
console.log(_char);
console.log($char);

var number="1"; //global variable
console.log(number);
var number="2"; //global variable
console.log(number);
// let number="3";
// console.log(number); - This outputs syntax error as the identifier number is already been declared
{
    //let number="4"; //local variable
    console.log(number);
    let number1="5"; //same identifier number cannot be used 
    console.log(number1);
    var number="6";
}
console.log(number); //global variable

const name="Rakshith"; //constant variable
//name="Rakshu"; //cannot change the content of the constant variable after declaration
console.log(name);
const age="22";
console.log(age);
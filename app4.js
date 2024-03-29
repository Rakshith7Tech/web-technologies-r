let num1=50;
let num2=4;
//Arithmetic Operators
console.log("Addition of two numbers:",num1+num2);
console.log("Subtraction of two numbers:",num1-num2);
console.log("Multiplication of two numbers:",num1*num2);
console.log("Division of two numbers:",num1/num2);
console.log("Modulus of two numbers:",num1%num2);

//Increment operator
let num3=15;
console.log(num3);
num3++;
console.log(num3);
num3++;
console.log(num3);

//decrement operator
let num4=13;
console.log(num4);
num4--;
console.log(num4);
num4--;
console.log(num4);

let num5=1;
console.log(num5);
//Assignment Operators
num5+=3; //num5=num5+3; - expanded form of the operation
console.log(num5); //outputs the value 4
num5-=2;
console.log(num5); //outputs the value 2
num5*=5;
console.log(num5); //outputs the value 10
num5/=2;
console.log(num5); //outputs the value 5
num5%=3;
console.log(num5); //outputs the value 2

let num6=17;
let num7=18; //if num7=17 then output is true
//Comparison Operators
console.log(num6==num7); //outputs false
//if values are same and datatypes are different then also output is true
//== checks only value not datatype
console.log(num6===num7); //outputs false because datatypes are same but values are different
console.log(num6!=num7); //outputs true because values are different
console.log(num6!==num7); //outputs true because values are different and datatypes are same
console.log(num6<num7);
console.log(num6>num7);
let num8=5;
let num9=5;
console.log(num8>=num9); //outputs true because values are equal but not greater
console.log(num8<=num9); //outputs true because values are equal but not lesser

let num10=7;
let num11=7;
let num12=10;
//Logical Operators
console.log(num10==num11 && num10==num12); //outputs false because && operator requires all the conditions to be satisfied
console.log(num10==num11 || num11==num12); //outputs true because || operator require any one condition to be satisfied
console.log(!(num10==num11 || num11==num12)); //outputs false because ! operator reverses the final output

let num13=35;
//Type Operators
console.log(typeof num13);
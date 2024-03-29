// Primitive Datatypes
// numbers
// strings
// boolean
// null
// undefined
// symbol 
var num=27;
console.log(num);
console.log((typeof num)); //typeof operator provides info about datatype of a variable
//i.e datatype of variable num is number

var char="Rakshith";
console.log(char);
console.log((typeof char));
//datatype of variable char is string
//'' single quote & `` back tick are also used in string
//`` inside back tick we can use single & double quotes which will be printed in the console

var bool=true; // true/false
console.log(bool);
console.log(typeof bool);
//datatype of variable bool is boolean
//true & false should be in lower case

var empty=null;
console.log(empty);
console.log((typeof empty));
//datatype of variable empty is object as there will be a garbage value stored inside null

var ud=undefined;
console.log((typeof ud));
//datatype of ud is undefined because the variable ud is not assigned/ it is undefined
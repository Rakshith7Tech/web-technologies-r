let choice=1;

let a=7;
let b=5;

switch (choice) { //switch statement
    case 0:
        console.log("Addition of two numbers is:",a+b);
        break; //break is used to stop the case condition after it has been executed
    case 1:
        console.log("Subtraction of two numbers is:",a-b);
        break;
    case 2:
        console.log("Multiplication of two numbers is:",a*b);
        break;
    case 3:
        console.log("Division of two numbers is:",a/b);
        break;
    default:
        console.log("Invalid Choice!")
        break;
}
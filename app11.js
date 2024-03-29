let sum=function(){
    return 10+17;
}
console.log(sum());

//arrow function

let sum1=() => 20+16;  //This is an single line function
console.log(sum1());

let stmt=(name,job) => `${name} is a ${job}`;
console.log(stmt("Rakshith","Developer"));  

let stmt1= name => { //multi-line function
    console.log("Hi");
    console.log("I'm");
    console.log("Fresher");
    return`${name} is an Intermediate Developer`;
}
console.log(stmt1("Rakshith"));

let stmt2=() => ({name: "Rakshith"}); //returning object in a single line
console.log(stmt2());
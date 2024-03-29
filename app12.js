let obj1={
    name: "Rakshith",
    role: "Java Developer",
    location: "Bangalore",
    code: function(){
        console.log(`${name} is coding`);
    }
}
obj1.code();
//the name variable is not yet constructed hence log doesn't prints the name value

let fun1=function(userName,userRole,userLocation){ //creating a constructor
    this.name=userName;
    this.role=userRole;
    this.location=userLocation;
    this.code1=function(){
        console.log(`${this.name} is coding`);
    }
}

let rakshith = new fun1('Rakshith','Java Developer','Bangalore'); //creating an object using constructor
console.log(rakshith.name);
console.log(rakshith.role);
console.log(rakshith.location);
rakshith.code1(); //calling a function
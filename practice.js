let age=18;

if(age<18){ //if-else
    console.log("You are not eligible for voting");
}else if(age==18){ //ladder-if
    let idExists;
    if(idExists=true){ //nested-if
        console.log("You are eligible for voting");
    }else{
        console.log("Sorry, Please apply for voter id & try next year");
    }
}else{
    let idExists;
    if(idExists=false){
        console.log("You are eligible for voting");
    }else{
        console.log("You are not eligible for voting");
    }
}
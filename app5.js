let per=89;
//if-else condition
if(per>90){
    console.log("You will get an android smartphone")
}else{
    console.log("You won't get any gift")
}

let main=85;
let advance=80;
if (main>70) {
    if (advance>75) { //nested-if condition
        console.log("You will get a laptop and bike")
    } else {
        console.log("You will get a laptop")
    }
} else {
    console.log("You won't get anything")
}

let cet=4500;

// <5000 (B.E)
// 5000-7000 (BCA)
// >7000 (B.Com)

if (cet>0 && cet<=5000) {
    console.log("You will get admission in B.E")
}else if(cet>5000 && cet<=7000){ //ladder-if condition
    console.log("You will get admission in BCA")
}else if(cet>7000 && cet<=50000){
    console.log("You will get admission in B.Com")
}
 else {
    console.log("Better luck next year!")
}
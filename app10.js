for(let i=0; i<=10; i++){
    // console.log('Rakshu-',i);
    console.log(`Rakshu-${i}`);
}

// Note: To avoid repeatative code we use functions

function loop(name){     //Type-1
    for(let i=0; i<100; i++){
        console.log(`${name}-${i}`);
    }
}

//calling a function
loop("Rakshith");
loop("Yash");
loop("Mantu");
loop("Ganavi");
loop("Shekhar");

function stmt(name){      //Type-2
    let str=`${name} is a Java Developer & Music Addict`;
    return str;
}

let r=stmt("Rakshith");
console.log(r);
let p=stmt("Prajwal");
console.log(p);

let result=function(){    //Type-3 - Function result is defined within the scope
    let num1=10;
    let num2=15;
    return num1+num2;
}

let num=result();
console.log(num);
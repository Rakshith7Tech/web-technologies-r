let arr=[1,2,3,4,5,6];
console.log(arr[0]);
for(i=0; i<arr.length; i++){
    console.log(arr[i]);
    console.log(arr[i]+5);
}
//array functions
arr.push(27); // This function will add the number at the last index value
console.log(arr);
arr.unshift(27); //This function will add the number at the first index value
console.log(arr);
arr.pop(); //This function will delete the last index value number
console.log(arr); 
arr.shift(); //This function will delete the first index value number
console.log(arr); 
arr.splice(1,3); //This function will remove the elements from the array through the range of index values
console.log(arr);
arr.reverse(); //This function will reverse the array elements
console.log(arr);

let obj={
    Name:"Rakshith",
    Qualification:"B.E - CSE",
    Role:"Java Full-Stack Developer"
}
console.log(obj.Name); //prints the value of the key object
console.log(obj.Qualification); //prints the value of the key object
console.log(obj.Role); //prints the value of the key object

for(let p in obj){
    console.log(p); //prints the key of the object
    console.log(obj[p]); //prints the value of the object
}
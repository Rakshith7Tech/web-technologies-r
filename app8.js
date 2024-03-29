let str1="Rakshith is a Java Full-Stack Developer";
console.log(str1);
console.log(str1[0]);
console.log(str1.length);
for(let i=0; i<str1.length; i++){
    console.log(str1[i]); //prints the characters line by line
}
//string functions
console.log(str1.toUpperCase()); //converts all lower case letters to upper case
console.log(str1.toLowerCase()); //converts all upper case letters to lower case
console.log(str1.indexOf('J')); //returns the index value of the character
console.log(str1.indexOf('l')); //returns the index value of the character
console.log(str1.lastIndexOf('l')); //returns the last index value of the character
console.log(str1.charAt(10)); //returns the character of the index value
console.log(str1.endsWith('Developer')); //returns the boolean value true
console.log(str1.endsWith('Java')); //returns the boolean value false
console.log(str1.endsWith('r')); //returns the boolean value true
console.log(str1.endsWith('Developers')); //returns the boolean value false
console.log(str1.includes('is')); //returns the boolean value true
console.log(str1.includes('an')); //returns the boolean value false
console.log(str1.replace('Full-Stack','Spring')); //replaces the character with another character
console.log(str1.substring(24,39)); //returns only the required characters through the range of index values
console.log(str1.slice(0,8)); //returns the same value as substring function value
console.log(str1.split(' ')); //space checks the character(space) and split the other characters
console.log(str1.split('a')); //removes 'a' character and split the other characters
console.log(str1.split('Java')); //removes 'Java' character and split the other characters
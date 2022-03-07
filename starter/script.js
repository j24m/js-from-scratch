////////////////////////////////
// Linking js file

// let js = 'amazing';
// if (js === 'amazing') alert('js is fun');
// console.log(40 + 8 + 23 - 10);

////////////////////////////////

////////////////////////////////
// Values and Vairables

// console.log("Jonas");
// console.log(23);

// let firstName= "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// correct naming conventions for variables
// let first ='jonas';
// let firstNamePerson;  camelcase is the standard
// let first_name_person;

// incorrect naming conventions
// let 3years;
// let jonas&matilda ='JM'; & cannot be used in var names.
// let function = "hello"; reserved keyword
// let new = "27"; reserved keyword

// not recommended to use capital letter at first word.
// let Sum = "hello";
// let sum = "hello";
// console.log(sum);

// let myFirstJob ="programmer";
// let myCurrentJob = "teacher";

////////////////////////////////


////////////////////////////////
// Datatypes

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true); 
// console.log(typeof javascriptIsFun); 
// console.log(typeof 23); 
// console.log(typeof "hello");

// // Dynamic typing.
// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun); 

// undefined.
// let year;
// console.log(year);  
// console.log(typeof year);
// Whenever we declare an empty variable both value and type of that variable are undefined.
// We can also reassign a value to undefined variables.

// year = 1991;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);
// This is a bug in javascript, the output should not be object, but null.

////////////////////////////////

////////////////////////////////
//let, const and var

// let age = 30;
// age = 31;
// here it is called reassigning a value to a variable which is also called mutating.

// const birthYear = 1998;
// console.log(birthYear);
// birthYear = 1999;
// Uncaught TypeError: Assignment to constant variable at script.js:84:11
// const declaration is immutable.

// var job = "prgrammer";
// console.log(job);
// job = "teacher";
// console.log(job);
// var is immutable. 

//not declaring a variable with let const or var.
// lastName = "Schmedtman";
// console.log(lastName);
// we did not use let, const or var in this case but this is actually a pretty terrible idea.
// this doesn't create a variable in scope, instead js will create a property on the global object.

////////////////////////////////

///////////////////////////////
//Basic Operators

// const currentYear = 2022;
// const myAge = currentYear - 1998;
// const sarahAge = currentYear - 2020;
// console.log(myAge, sarahAge);

// console.log( myAge * 2, myAge/10 , 2**3);

// const firstName = "Jyotsna";
// const lastName = "Mehta";
// console.log(firstName + " " + lastName) ;

// let x = 10+5;
// x+=10;
//x=x+10 => 15+10 => 25
// x*= 4;
//x=x*4 => 25*4 => 100
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// x--;
// console.log(x);

//Comparision operators.

// console.log(myAge > sarahAge); // >, <, >=, <=
// console.log(sarahAge>=18);
//true

// console.log(currentYear-1998 > currentYear-2020);
///////////////////////////////

///////////////////////////////
// Operator precedence
// const now = 2022;
// const myAge = now - 1998;
// const sarahAge = now - 2000;
// console.log(now - 1998 > now - 2000);
// console.log(25 - 10 - 5);

// let x,y;
// x=y= 25-10-5;
// console.log(x,y);

// const averageAge = (myAge + sarahAge) / 2;
// console.log(myAge, sarahAge, averageAge);
///////////////////////////////

///////////////////////////////
// Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2022; 
// const jonas = `I'm ${firstName} and I'm a ${year-birthYear} years old  ${job}`;
// console.log(jonas);

// console.log(`Just a regular string...`);

//Multi line string.
// console.log("String with \n\
// multiple \n\
// lines.");
// console.log(`String
// with multiple
// lines.`);
///////////////////////////////

///////////////////////////////
//Taking Decisions: If/else statements
// const age = 17;
// if(age >= 18) console.log("You are eligible to vote.");
// else {
//     const yearsLeft = 18 - age;
//     console.log(`You are not eligible to vote and you will be eligible after ${yearsLeft} year.`);
// } 
///////////////////////////////

///////////////////////////////
// Type Conversion and Coercion

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

///////////////////////////////


///////////////////////////////
//Truthy and falsy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

let money = 100;
if(money) console.log(`Don't spend it all.`)
else console.log(`You should get a job.`);

let height;
if(height) console.log("height is defined.");
else console.log("height is undefined.");

///////////////////////////////

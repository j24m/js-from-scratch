            // ASSIGNMENTS

///////////////////////////////
// Variables and Values

// const country ="India";
// console.log(country);
// console.log(typeof country);

// const continent = "Asia";
// console.log(continent);
// console.log(typeof continent);


// let population = 1.366 + " billion";
// console.log(population);
// console.log(typeof population);

///////////////////////////////


///////////////////////////////
//Datatypes

// const isIsland = 'Asia';
// console.log(isIsland);
// console.log(typeof isIsland);
// let language;
// console.log(language);

///////////////////////////////


///////////////////////////////
//let,const and var

// const language = "hindi";

///////////////////////////////


///////////////////////////////
//Basic Operators
// const country = "India";
// const continent = "Asia";
// let population = 100
// console.log(100/2);
// population++;
// console.log(population);
// console.log(100>6);
// console.log(100<33);
// const description = country + " is in " + continent + " and it's population is " + population + " million " + " out of which " + population/2 + " million pople speak in language " + language; 
// console.log(description);
///////////////////////////////


///////////////////////////////
//#Coding challenge 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall. 

// const markMass = 78;
// const markHeight = 1.69;
// markBmi = markMass/ (markHeight**2);
// console.log("Mark's body mass index is: ", markBmi); 
// const johnMass = 92;
// const johnHeight = 1.95;
// johnBmi = johnMass/ (johnHeight**2);
// console.log("John's body mass index is: ", johnBmi); 
// const markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi);

///////////////////////////////

///////////////////////////////
//Template literals
// const myName = "Jyotsna";
// const myAge = 24;
// const identity = "Web developer";
// const continent = "Asia";
// const country = "India";
// let population = 1.39;
// const language = "Hindi"
// const description = `Hi I am ${myName} , a ${myAge} years old ${identity} from ${country} which has a population of ${population} billion.
// India is in the continent ${continent} and we speak the language ${language}.`
// console.log(description);
///////////////////////////////


///////////////////////////////
//Taking Decisions: If/else statements
 
// const population = 139;
// if (population >33) console.log("Population is above average.")
// else if( population < 22) console.log("Population is below average.");

///////////////////////////////


///////////////////////////////
//Type conversion and type coersion.

// console.log("9" - "5");
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

///////////////////////////////


///////////////////////////////
//Equality operator.

// const numNeighbours = Number(prompt("How many neigbour countries does your country have?"));

// if(numNeighbours === 1) console.log("Only 1 border");

// else if(numNeighbours > 1) console.log("More than 1 border.");

// else console.log("no borders");

////////////////////////////////


////////////////////////////////
// #Code challenge 2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �

// const markMass = 78;
// const markHeight = 1.69;
// markBmi = markMass/ (markHeight**2);
// console.log("Mark's body mass index is: ", markBmi); 
// const johnMass = 92;
// const johnHeight = 1.95;
// johnBmi = johnMass/ (johnHeight**2);
// console.log("John's body mass index is: ", johnBmi); 

// if(markBmi > johnBmi) console.log(`Mark's BMI is higher than John's! ${markBmi}`);
// else console.log(`John's BMI is higher than Mark's ! ${johnBmi}`);

/////////////////////////////////

/////////////////////////////////
// #code challenge 3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below.
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 

// averageScoreOfDolphins = (97+112+101)/3;
// averageScoreOfKoalas = (109+95+123)/3;
// console.log(averageScoreOfDolphins,averageScoreOfKoalas);

// if(averageScoreOfDolphins > averageScoreOfKoalas) console.log("Team Dolphins win the trophy.");

// else if (averageScoreOfKoalas > averageScoreOfDolphins) console.log("Team Koalas win the trophy.");

// else console.log("Draw.");

//Bonus 1 and Bonus 2
// averageScoreOfDolphins = (97+112+81)/3;
// averageScoreOfKoalas = (109+95+86)/3;
// console.log(averageScoreOfDolphins,averageScoreOfKoalas);

// if(averageScoreOfDolphins > averageScoreOfKoalas && averageScoreOfDolphins >= 100) console.log("Team Dolphins win the trophy.");

// else if (averageScoreOfKoalas > averageScoreOfDolphins && averageScoreOfKoalas >= 100) console.log("Team Koalas win the trophy.");

// else if(averageScoreOfDolphins === averageScoreOfKoalas && averageScoreOfDolphins >=100 && averageScoreOfKoalas >= 100) console.log("Draw.");

// else console.log("no one wins the trophy.");

/////////////////////////////////

/////////////////////////////////
// #code challenge 4
// const billValue = 430;
// const tip = billValue <=300 && billValue >=50 ? billValue * 0.15 : billValue * 0.2 ;
// console.log(`the bill was ${billValue}, the tip was ${tip} and the total was ${billValue + tip}`);  

/////////////////////////////////




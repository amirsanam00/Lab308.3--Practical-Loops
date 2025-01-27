//Fizz Buss Assignment
// Step 1: loop through all numbers from 1 to 100.
// Step 2: 
//      If a number is diviisble by 3, log "Fizz."
//      If a number is divisble by 5, log "Buzz."
//      If a number is dvisible by both 3 and 5, log "FizzBuzz."
//      if a number is not divisible by either 3 or 5, log the number.


// For Loop
for (let x = 1; x <= 100; x++) {
    if ( x % 3 ===0 && x % 5 ===0) {
        console.log("Fizz")
    }  else if (x % 5 ===0) {
        console.log ("Buzz")
    } else if ( x % 3 ===0) {
        console.log ("FizzBuzz")
    } else if (x %3 !==0 && x %5 !==0) {
        console.log ("Number")
    }
    else {console.log(x)} 
}

// //While Loop
// let x = 100
// while (x > 0) {
//     if ( x %3 ===0 && x %5 ===0) 
//      console.log("Fizz")
// }

// =================

// Part 2: Prime Time
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!

// Write a script that accomplishes the following:
//     Declare an arbitrary number, n.
//     Create a loop that searches for the next prime number, starting at n and incrementing from there.
//     As soon as you find the prime number, log that number and exit the loop.
//     Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
//     Be careful! If you set n to a number too large, your loop could take a long time to process.

let n = prompt ("Enter Number") // Declare an arbitrary number, n.

let nextPrime = 2 

 while (true) {
 let Prime = true;

    for (let n = 2; n < nextPrime; n++) {
        if (nextPrime % n === 0) {
            Prime = false;
            break;
        }  
    }
        if (Prime) {
            console.log (`It is Prime Number`);
            break;
        }
        nextPrime++;
    }
   
// =======================================
// Part 3

// create a variable to hold given string
// const givenString =  "42, Bruce, Knight, 41/n57, Bob, Fry Cook, 19"

//iterate through givenString character-by-character
// while iterating through, look at each character to see if it is a letter, number, comma, or backslash
// if the character is a letter, number, or comma, add to the row (variable)
// if the character is a slash, then check if the next letter is an "n" or "r"
//     if yes:
//          console.log out the row
//     if no:
//          then continue doing the same thing as before

/*
1. Store the input
const givenInput = "
"
2. I need to create variables to hold information
3. I need to assign the variables initial values

1. Store input
2. create variables
*/

// let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let cell = ""

for (let i = 0; i < csv.length; i++) {
    const char = csv[i]; 
    
    if (char === " ,") { 
        console.log(cell);
        cell ="";
    } else if (char === "\n") { 
        console.log(cell);
    } else {
        cell += char;
        }
    }
    
    
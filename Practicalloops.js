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
    // Declare an arbitrary number, n.
    // Create a loop that searches for the next prime number, starting at n and incrementing from there.
    // As soon as you find the prime number, log that number and exit the loop.
    // Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
    // Be careful! If you set n to a number too large, your loop could take a long time to process.

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
   
    
// If (Number) 
//     console.log ("It is Prime")

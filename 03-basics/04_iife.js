// Immediately Invoked Function Expressions (IIFE)


(function sat(){  // this is named iife function
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // we can write more than one iife function in a file by using semicolon after each iife function.

( (name) => {  // this is unnamed iife function.
    console.log(`DB CONNECTED TWO ${name}`);
} )('satyam')
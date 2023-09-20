function sayHiToGrandma(string) {
    // Check if the string is all lowercase
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } 
    // Check if the string is all uppercase
    else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } 
    // Check if the string is equal to "I love you, Grandma."
    else if (string === "I love you, Grandma.") {
      return "I love you, too.";
    } 
    // Handle other cases (mixed case)
    else {
      return "I don't understand you!";
    }
  }
  
  // Testing the function
  console.log(sayHiToGrandma("hello"));  // Output: "I can't hear you!"
  console.log(sayHiToGrandma("HELLO"));  // Output: "YES INDEED!"
  console.log(sayHiToGrandma("I love you, Grandma."));  // Output: "I love you, too!"
  console.log(sayHiToGrandma("How are you?"));  // Output: "I don't understand you!"
  
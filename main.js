/* Practice Assignment 9:
Complete this javascript file according to the individual instructions
given in the comments. 
*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Fix the syntax error. Use the dev tools console in your 
// browser to help identify the error and line number.

function sum(x, y) {
    return x + y;
  };
  
  sum(2, 2);
  
  // 2) Fix the syntax error. Use the dev tools console in your 
  // browser to help identify the error and line number. 
  // Do not change the name of the function.
  
  function allCaps(string) { return string.toUpperCase() };
  
  allCaps("hello");
  
  // 3) Fix the syntax errors. Use the dev tools console in your 
  // browser to help identify the error and line number. 
  
  function revSentence(string) {
    const newSentence = string.split(' ').reverse().join(' ').toLowerCase();
    return newSentence[0].toUpperCase() + newSentence.slice(1);
  }
  
  revSentence("It is a beautiful day");
  
  // 4) Fix the logic error. The function should return 
  // the sum of the numbers in the array that is passed 
  // to the function as a parameter. 
  const arrayOfNums = [10, 20, 27];
  ///////// Do not change the above array of objects /////////
  
  function getTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  getTotal(arrayOfNums);
  
  // 5) Fix the logic errors. The function should return 
  // an array that has only the even numbers from the 
  // array passed to the function as a parameter.
  const numArray = [2, 5, 7, 8, 14, 19, 22];
  ///////// Do not change the above array of objects /////////
  
  function getEvens(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  
  getEvens(numArray);
  
  
  // 6) Fix the logic errors. The function should return 
  // an array that has only the odd numbers from the 
  // array of objects passed to the function as a parameter. 
  const arrayOfObjs = [
    { 'name': 'Dave', 'number': 27 },
    { 'name': 'Jane', 'number': 24 },
    { 'name': 'Zoe', 'number': 33 }
  ]
  // Result should be: [27,33]
  // Note: Only numbers in the result. Not objects.
  ///////// Do not change the above array of objects /////////
  
  function getObjOdds(array) {
    const newArray = [];
    for (let obj in array) {
      if(array[obj].number % 2 !== 0) {
        newArray.push(array[obj].number);
      };
    }
    return newArray;
  }
  
  getObjOdds(arrayOfObjs);
  
  
  // 7) Create a custom error named notStringError. 
  // Your custom error should accept a message as a 
  // parameter. The error should have message, name, 
  // and stack properties. The stack property should 
  // combine the name and message properties in a 
  // string. (Example: err.name: err.message)
  function notStringError(message) {
    this.message = message;
    this.name = "notStringError";
    this.stack = `${this.name}: ${this.message}`;
  }
  
  // 8) Create a function named joinAlpha that accepts 
  // an array as a parameter. The function should have 
  // a try, catch, finally structure. 

  // Loop through the elements of the array. 
  // In the try block, test the elements to see if 
  // they have a data type of string. 
  
  // If the element is not a string, throw a 
  // notStringError (as created in #7 above). 
  
  // In the finally block, concatenate the element 
  // to the previous string elements - but only if 
  // they are strings. 
  
  // The function should return the concatenated string. 
  const eightArray = ['ABC', 'DEF', 2003, 'GHI'];
  // Should return: ABCDEFGHI and catch the error
  // Caution: Watch out for an undefined value!
  ///////// Do not change the above array /////////
  const joinAlpha = (myArray) => {
    let myValue = "";
    for(let i in myArray) {
      try {
        if (typeof myArray[i] !== 'string') {
          throw new notStringError("not a string");
        }
        console.log("it's a string");
      } catch (err) {
        console.error(err.stack);
      } finally {
        if (typeof myArray[i] === 'string') {
          myValue += myArray[i];
        }
      }
    }
    console.log(myValue);
    return myValue;
  };
  joinAlpha(eightArray);
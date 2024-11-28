/* */
//1. write a function to check if a num is even or odd and log the result to console

function evenOdd(num) {
    if (num%2==0) 
        {
        console.log("even")
        }
    else {
        console.log("odd");
    }
}
// evenOdd(6)
// evenOdd(5)

// 2. Write a function to calculate square of a num and return the result
function calculateSquare(num) {
    return num*num
}
// console.log(calculateSquare(5)); 

//Function Expression: 
// The major Diff b/w function expression and function declaration
  // - 1. Function Expression are Anonymous func
  // - 2. `Not hoisted` (means you cannot call it before defination)
  // -  Function declarations are `hoisted`
// Q. 3. Write a function expression to find max of two nums and log to console

const maxNum= function (num1,num2) {
    return num1> num2 
            ? `${num1} is greater` 
            : `${num2} is greater`
}
// console.log(maxNum(51,112))

// 4. Write a function expression to concatenate two strings and return the result

const concatenate= function(str1, str2){
    return str1 + str2
}
// console.log(concatenate("hey ","hi"));

//Arrow Function: 
//5. Write an arrow function to calculate the sum of two nums and return the result.
sumOfTwo = (num1,num2)=>{
    return num1+num2;
}
// console.log(sumOfTwo(4,5));

//6. Write an arrow function to check if a string contains a specific char and return a boolean value

checkChar = (str)=>{
    if (str.includes("s")){
        return true
    } else return false
}
// console.log(checkChar('s'));

// Method 2: 
containsChar = (str,char) => str.includes(char)
const result1= containsChar("HI", 'I')
const result2= containsChar('asdf', 'b')
// console.log(result1);
// console.log(result2);

// Function Parameters and Default Values:
// 7.Write a function that takes two parameters and returns their product.
//   Provide a default value for the second parameter.
function product(num1, num2=3) {
    return num1 * num2
}
console.log(product(2)); // Output:6

// 8. Write a function that takes a person's name and age and returns a greeting message. 
// Provide a default value for the age.

function greet(name, age=20) {
    return `Your name is ${name} and age is ${age}`
}
console.log(greet('siraj'));
//O:Your name is siraj and age is 20

// Higher Order Functions: 
// A function that either takes one or more functions as arguments or returns a function or value as its result
// 9. Write a Higher order function that takes a function and a number, and calls the function that many times.
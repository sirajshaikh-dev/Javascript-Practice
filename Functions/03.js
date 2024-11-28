
/* What is a Higher Order Function? `freeCodeCamp`
A higher order function is a function that takes one or more 
functions as arguments, or returns a function as its result.*/

function callbackFunc() {
    console.log('I am callback');
}

function higherOrderFunc(func){  //func is just a placeholder variable for "whatever function to pass."
    console.log('I am higer order func');
    func()                       // calling func() is same as calling callbackFunction().
}
higherOrderFunc(callbackFunc)    //callbackFunction (the function itself, not its result) is passed into higherOrderFunction as the value of func.

/* Q.1 write a function that calculates the area and diameter of a circle. */
// Solution Without Higher Order func: 
    
function areaOfCircle(r){
    return Math.PI*r*r
}
// console.log(areaOfCircle(5));

function diaOfCircle(r){
    return 2*r
}
// console.log(diaOfCircle(5));

// Solution with Higher Order Func
// Createdd a common func Calculate, which takes logic and r as params
// in the future if we want to add some logic like calculate circumference of circle. 
// we can write and pass it to calculate 

    const area = function(r){
        return Math.PI*r*r
    }
    const diameter = function (r) {
        return 2*r
    }
    const circumference= function(r){
        return 2*Math.PI*r
    }
    //Higher order Function
    const calculate= function(logic,r){
        return logic(r)
    }

    console.log(calculate(area,5));
    console.log(calculate(diameter,5));
    console.log(calculate(circumference,5));


/*49. Higher Order Function: UDEMY */
/* 4. Write a function named `processTeaOrder` that takes
another function, `makeTea`, as a parameter and calls it 
with argument `"earl grey"`.
Return the result of calling `makeTea` */

// function processTeaOrder(makeTea()) {
//     return makeTea()
// }
// console.log(processTeaOrder());

/*48. Function, arrow function, THIS and context in javascript */
/*UDEMY hitesh */

/*1. Write a function named makeTea that takes one parameter, 
typeOfTea and returns a string like 
"Making green Tea" when called with "green tea".
Store the result in  a variable named teaOrder */

function makeTea(typeOfTea) {
    return (`Making ${typeOfTea}`)
}

let teaOrder= makeTea("greenTea;")
console.log(teaOrder);

/*2. Create a function name orderTea that takes one 
parameter, teaType.  Inside this function, create another 
function named confirmOrder that returns a message like
"Oder confirmed for chai". 
Call confirmOrder from within orderTea and return the result.*/

function orderTea(teaType) {
    function confirmOrder(params) {
        return "order Confirm for chai"
    }
    return confirmOrder()
     
}

console.log(orderTea());
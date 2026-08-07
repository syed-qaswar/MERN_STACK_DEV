// // Programming Fundamentals

// // --variables
// let name = "Umer"; //strings
// let course = "Mern Stack";
// let age = 20; //integer
// let cgpa = 3.9; //float
// let pass = true; //boolean

// // let name = 'Faizan'

// // console.log('Hi, my name is ' + name + ' I am enrolled in ' + course + ' course')

// // --cleaner syntax
// console.log(`Hi, my name is ${name}. I am enrolled in ${course} course`);
// console.log(course);

// // --taking input
// // let num1 = parseInt(prompt("Enter a number"));
// // let num2 = parseInt(prompt("Enter another number"));

// // console.log(num1 + num2);

// // // --taking input and implementing conditional statements
// // if (num1 > num2) {
// //   console.log("Num1 is greater than Num2");
// // } else if (num1 == num2) {
// //   console.log("Num1 is equals to Num2");
// // } else {
// //   console.log("Num2 is greater than Num1");
// // }

// // --take marks from the user and assign the grades
// // let marks = Number(prompt("Enter your marks"));
// // let grade

// // if (marks >= 0 && marks <= 100) {
// //   if (marks >= 90) {
// //     console.log("A+");
// //   } else if (marks > 80) {
// //     console.log("A");
// //   } else if (marks > 70) {
// //     console.log("B");
// //   }
// // }else{
// //   console.log('Invalid value')
// // }

// // -- User-defined functions
// // function greet(){
// // function block
//   // console.log('Hello, User');
// // }
// // function calling
// // greet()

// // --function with params and arguments
// // function greet(name){
// //   // console.log(`Hello, ${name}`)
// //   return `Hello, ${name}`
// // }
// // console.log(greet('Ahmed'))
// // let user = greet('Umer')
// // console.log(user)

// // function addValues(a,b,c){ //a = 5, b = 6, c = 7
// //   return a+b+c; //18
// // }
// // let sum = addValues(5,6,7) //sum = 18

// // function divideValue(val){
// //   return val / 3
// // }
// // console.log(`Value of Division is: ${divideValue(sum)}`) //dividevalue(18)

// // --Assigning a function to a variable

// function addValues(a,b){
//   return a + b
// }

// // --javascript treats functions as first class citizens
// // let sum = addValues
// // console.log(sum(2, 4))
// // console.log(addValues(5, 4))

// function test(func){
//   console.log(`The value is: ${func(2,4)}`)
// }
// test(addValues) //sum = addValues



// // ---- TASK 1 Electricity Bill ----
// // Take the total electricity units consumed.

// // Calculate the bill according to:
// // Units	       Rate
// // First 100	8 per unit
// // Next 100	  12 per unit
// // Above 200	18 per unit

// // -- Example:
// // Input
// // 250

// // Output
// // Total Bill = 2800


// // --Solution
// // let bill;
// // let units=parseInt(prompt('enter units'))
// // if(units >0 && units<=100){
// //   bill= units*8
// // }
// // else if (units <=200 && units >100){
// //   bill= units*12
// // }

// // else if (units >200 ){
// //   bill= units*18
// // }
// // console.log(bill)

















// // ---- TASK 2: Simple Calculator Using Functions ----

// // Create four functions.
// // add(a,b)
// // subtract(a,b)
// // multiply(a,b)
// // divide(a,b)

// // Take:
// // First number
// // Second number
// // Operator (+ - * /)

// // Call the appropriate function and display the answer.

// // --Example:
// // Enter first number: 20
// // Enter second number: 5
// // Enter operator: *

// // Answer 

// // let num1 = Number(prompt(`Enter a Number`))
// // let num2 = Number(prompt(`Enter Second Number`))
// // let operator = prompt(`Enter any operator(+, -, *,/)`)
// // function add (a, b){
// //   return a+b
// // }
// // function subtract (a, b){
// //   return a-b
// // }
// // function multiply (a, b){
// //   return a*b
// // }
// // function divide (a, b){
// //   return a/b
// // }

// // if (operator == "+"){
// //   console.log(`your answere is ${add(num1, num2)}`)
// // }

// // else if(operator== "-"){
// //   console.log(`your answere is ${subtract(num1,num2)}`)}

// // else if(operator== "*"){
// //   console.log(`your answere is ${multiply(num1,num2)}`)
// // }

// // else if(operator == "/" ){
// //   console.log(`your answere is ${divide(num1,num2)}`)
// // }






// // ---- Task 3 – Employee Salary Calculator ----
// // Take:
// // Employee name
// // Basic salary

// // Calculate bonus using the following rules:
// // Salary	      Bonus
// // Above 100000	20%
// // Above 70000	15%
// // Above 50000	10%
// // Otherwise	5%

// // Output:

// // Name
// // Basic Salary
// // Bonus
// // Final Salary


// // ---- Task 4 – Admission Eligibility ----

// // Take input for:

// // Mathematics marks
// // English marks
// // Computer marks

// // Rules:

// // Every subject must be 50 or above.
// // Average must be 70 or above.

// // If both conditions are satisfied:
// // Congratulations!
// // You are eligible for admission.

// // Otherwise:
// // Sorry!
// // You are not eligible.



// // -- function variable scopes
// // let x = 10 //global scoped variable

// // --lexical scoping
// // function outer(){
// //   // local scope
// //   let x = 10
// //   function inner(){
// //     // let x = 20
// //     // local scope
// //     console.log(`Using x inside inner function: ${x}`)
// //   }
// //   inner()
// // }
// // outer()
// // console.log(`The value of x is: ${x}`) //x is not accessible


// // -- Closures
// // function makeFunc() { //outer function
// //   const name = "Mozilla"; //local variable of makefunc()
// //   function displayName() { //inner function with no local variable
// //     console.log(name);
// //   }
// //   return displayName;
// // }

// // const myFunc = makeFunc();
// // myFunc();

// // --arrow functions
// // (params) => {}

// // function addValues(x , y){
// //   return x + y
// // }

// // const add = (x, y) => x + y
// // const subtract = (x, y) => x - y
// // const multiply = (x, y) => x * y

// // console.log(add(2, 5))
// // console.log(subtract(2, 5))

// // --callback functions 
// // const add = (x, y) => x + y
// // const subtract = (x, y) => x - y
// // const multiply = (x, y) => x * y

// // function calculator(x, y, operation){
// //   console.log(operation(x , y))
// // }
// // calculator(5, 10, add)
// // calculator(5, 10, subtract)
// // calculator(5, 10, multiply)

// // --example:
// // let value = 1;

// // function doSomething(callback){
// //   setTimeout(callback, 1000)
// // }

// // doSomething(() => {
// //   value = 2;
// //   console.log(value)
// // });

// // console.log(value); // 1 or 2?
// // console.log('Code runing during 1 sec interval')

// // --arrays
// // let name = 'Ahmed'
// // let names = ['Ahmed', 'Umer', 'Faiq', 'Qaswar', 'Mian Ahmed']
// // console.log(names)
// // console.log(names[0])
// // console.log(names[2])

// // console.log('25' + 5)

// // function outer() { 
// //   let x=5; 
// //   function inner() 
// //   { 
// //     return x; 
// //   } 
// //   return inner; 
// // } 
// // console.log(outer()())

// // --closures
// // function outer(){
// //   let x = 10;

// //   function inner(){
// //     console.log(x)
// //   }
// //   // inner()
// //   return inner
// // }

// // func = outer()
// // func()

// // // --callback 
// // add = (a, b) => a + b

// // function calculator(a, b, callback){
// //   console.log(callback(a, b))
// // }
// // // calculator(5, 6, (a, b) => a + b)
// // calculator(5, 6, add)

// // --counter using closures
// // function counter(){
// //   let count = 0

// //   function increment(){
// //     // let count = 1 
// //     count++
// //     console.log(count)
// //   }
// //   return increment
// // }

// // const c = counter()
// // c()
// // c()
// // c()
  

// // Requirements
// // 1. Create an array containing the marks of 5 students.
// // 2. Create a function named createProcessor(message).
// // 3. createProcessor() should return another function (closure).
// // 4. The returned function should accept:
// // 4.1 An array
// // 4.2 A callback function
// // 4.3 Use forEach() to process every element of the array.
// // 5. The callback function should determine whether each student has Passed or Failed.
// // 6. Display the message from the closure before processing the array.

// // Program:
// // let marks = [70, 82, 95, 20, 35]

// // --callback (arrow function)
// // const checkMarks = (mark, index) => {
// //   if(mark >= 50){
// //     console.log(`Student - ${index + 1} : ${mark} - Pass `)
// //   }else{
// //     console.log(`Student - ${index + 1} : ${mark} - Fail `)
// //   }
// // }

// // --closure
// // function createProcessor(message){
// //   return function(array, callback){
// //     console.log(message)

// //     array.forEach((value, index) => {
// //       callback(value, index)
// //     });
// //   }
// // }

// // const processMarks = createProcessor('===== Student Result =====')
// // processMarks(marks, checkMarks)


// // array methods
let marks = [75, 80, 65, 30, 24, 46]
// // marks.push(97)
// // marks.unshift(97)
// // marks.pop()
// // console.log(marks)


// // --map with array
// // const arrayMap =  () => marks.map(Math.sqrt)
// // let sub = marks.map(arrayMap)
// // console.log(sub)

// // const arrayMap = marks.map( (m) => m * 2 )

// // --map with conditional statement (ternary oper)
// // const arrayMap = marks.map((m) => m >= 50 ? "Pass" : 'Fail' )

// // --with multiple if blocks
// // const arrayMap = marks.map((m) => {

// // })
// // console.log(arrayMap)

// // --filter
// // let filterMarks = marks.filter( (m) => m >= 50  )
// // console.log(marks.filter( (m) => m >= 50  ))
// // console.log(filterMarks)

// // --reduce
// // console.log( marks.reduce((prevValue, currentValue) => prevValue + currentValue, 0) )

// let sum = 0
// for(i = 0; i < marks.length; i++){
//   sum += marks[i] 
//   // sum = sum + marks[i]
//   // marks[0] =>  0 + 75
//   // marks[1] =>  75 + 80
//   console.log(sum)
// }

// marks.forEach((mark) => {
//   sum += mark
//   console.log(sum)
// })

// dry run reduce function
// let sum = 0
// for(i = 0; i < marks.length; i++){
//   sum += marks[i]
//   // sum = sum + marks[i]
//   console.log(sum)
// }


// marks.forEach( (mark) => {
//   sum += mark
// })

// Objects and Object de-structuring
const student = {
  profile:{
    name : 'Ali',
    age : 20,
    cgpa : 3.4,
  },
  location : 'Lahore',
  is_pass : true
}

// --accessing values using dot notation
// console.log(student.name)
// console.log(student.age)

// --accessing values using bracket notation
// console.log(student['name'])
// console.log(student['city'])

// in keyword
// console.log('name' in student)
// console.log('ages' in student)

// for(key in student){
//   console.log(`${key} : ${student.key}`) //student[key]
// }

// function updateStudent(s){
//   s.name = 'Ahmed'
// }
// updateStudent(student)
// console.log(student['name'])
// console.log(student)


// object de-structuring

// const {name, is_pass} = student
// console.log(name)
// console.log(is_pass)

// --rename variables while destructuring
// const {name : username, location: city} = student
// console.log(username)
// console.log(city)


// --extracting properties from the nested object
// const {profile : {name, age, cgpa}} = student
// console.log(name)
// console.log(age)
// console.log(cgpa)


// --animation typed.js library
  var typed = new Typed('#text', {
      // strings: ['<i>First</i> sentence.' , '&amp; a second sentence.'],
      strings: ['This is a JavaScript library', 'This is an ES6 module'],
      typeSpeed: 50,
      // backSpeed: 40,
      loop: true,
      // smartBackspace: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 600,
  });

// --js html dom
// document.getElementById('element').innerText = 'Welcome to JS HTML DOM'
document.querySelector('h1').innerText = 'Welcome to JS HTML DOM'
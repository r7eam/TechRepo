// === ARRAY MAP ===
// Exercise 1: Double each number in an array
// const numbers=[1,2,3,4,5]

// let num=numbers.map(numbers=>numbers*2) 
// console.log(num)

// function numbers(arr){
// let newNum=[]
// for(let i=0;i<arr.length;i++){
//   newNum.push(arr[i]*2)
// }
// return newNum
// }
// console.log(numbers([1,2,3,4]))
//-----------------------


// // Exercise 2: Extract property from objects
// const users = [
//   { name: 'Ahmed', age: 25 },
//   { name: 'Sara', age: 30 },
//   { name: 'Mohammed', age: 22 }
// ];
// const names = users.map(user => user.name);
// console.log("Names:", names); // ['Ahmed', 'Sara', 'Mohammed']

// // === ARRAY FILTER ===
// // Exercise 3: Filter even numbers
// const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
// console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]

// // Exercise 4: Filter adults
// const people = [
//   { name: 'Ali', age: 17 },
//   { name: 'Fatima', age: 25 },
//   { name: 'Hassan', age: 14 },
//   { name: 'Zahra', age: 30 }
// ];
// const adults = people.filter(person => person.age >= 18);
// console.log("Adults:", adults); // [{ name: 'Fatima', age: 25 }, { name: 'Zahra', age: 30 }]

// // === ARRAY REDUCE ===
// // Exercise 5: Sum all numbers
// const prices = [29.99, 10.50, 5.75, 16.30];
// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log("Total:", total.toFixed(2)); // 62.54

// // Exercise 6: Count occurrences in an array
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const fruitCount = fruits.reduce((count, fruit) => {
//   count[fruit] = (count[fruit] || 0) + 1;
//   return count;
// }, {});
// console.log("Fruit count:", fruitCount); // { apple: 3, banana: 2, orange: 1 }

// // === ARRAY FIND & SOME ===
// // Exercise 7: Find first element meeting condition
// const inventory = [
//   { id: 1, item: 'Laptop', inStock: true },
//   { id: 2, item: 'Phone', inStock: false },
//   { id: 3, item: 'Tablet', inStock: true }
// ];
// const firstInStock = inventory.find(item => item.inStock);
// console.log("First in stock:", firstInStock); // { id: 1, item: 'Laptop', inStock: true }

// // Exercise 8: Check if any student passed
// const students = [
//   { name: 'Omar', score: 45 },
//   { name: 'Noor', score: 85 },
//   { name: 'Yusuf', score: 32 }
// ];
// const anyonePassed = students.some(student => student.score >= 60);
// console.log("Did anyone pass?", anyonePassed); // true

// // === ARRAY FOREACH & EVERY ===
// // Exercise 9: Log each item with index
// const colors = ['red', 'green', 'blue'];
// console.log("Colors with index:");
// colors.forEach((color, index) => {
//   console.log(`${index}: ${color}`);
// });

// // Exercise 10: Check if all users are active
// const accounts = [
//   { id: 1, active: true },
//   { id: 2, active: true },
//   { id: 3, active: true }
// ];
// const allActive = accounts.every(account => account.active);
// console.log("All accounts active?", allActive); // true

// // === ARRAY COMBINATION CHALLENGE ===
// // Exercise 11: Chain methods to transform data
// const transactions = [
//   { id: 1, amount: 100, type: 'deposit' },
//   { id: 2, amount: 50, type: 'withdrawal' },
//   { id: 3, amount: 200, type: 'deposit' },
//   { id: 4, amount: 25, type: 'withdrawal' }
// ];

// const totalDeposits = transactions
//   .filter(t => t.type === 'deposit')
//   .map(t => t.amount)
//   .reduce((sum, amount) => sum + amount, 0);

// console.log("Total deposits:", totalDeposits); // 300

// // 
// const Array=[1,22,3]
// consol.log(typeof(Array))


// tr.split(" ")


//remove all

// let array=[1,2,3,4,5,6]
// console.log(array.filter(arr=>arr.null))



// //array to object conversion 
// const key =['id','name','email','role'];
// const values =[101,'rheem','rheem@example.com','developer'] 
// const obj = key.reduce((acc, curr,id) => {
//   acc[curr] = values[id];
//   return acc;
// }, {});
// //task 2
// obj.permstion=['read','write']

// console.log(obj); 
// //task 3 =
// const reobj = Object.keys(obj)
// console.log(reobj); 


// function validations(str){
//   let vowels ='aieoAIEO'
//   let digit = '1234567890';
//   let allchar = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//   for (let i=0;i<str.length;i++){
//       if(str.length <3){
//           return false 
//         }
//         else if(vowels.includes(str[i])){
//           return false 
//         }
//   else if(str.includes(digit) && str.includes(allchar)){
//     return true
//   }
// }}
// console.log(validations("rheem"));
// console.log(validations("ali22"));
// console.log(validations("wdbiaABFAE123"));
// console.log(validations("@$"));

//  //the sumation equals the target 
 
// let num = [1,2, 4, 5, 7], target = 8;
// for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//         if (num[i] + num[j] === target) {
//             console.log(num[i],num[j]);
//         }
//     }
// }


//================================

// //remove duplicate using map
// const name1 =['ahmed','ali','rheem','ahmed','ali','ahmed']
// let d = name1.map((item, index) => {
//   return name1.indexOf(item) === index ? item : null;
// }).filter(item => item !== null);           
// console.log(d)

//--------------------------
// sum content 

// function sumArray(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum
// }

// console.log(sumArray([1,2,3,4]))


//----------------------------

// function find(arr) {
//   let maxnum = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxnum) {
//       maxnum = arr[i]
//     }
//   }
//   return maxnum
// }

// console.log(find([1,2,3,5,0,6]))

//-----------------------------------
//---------------THURSDAY-------------

// //wordFrecuency عدد تكرار الكلمات 
//   function wordFrecurncy(str){
//     let a = {}
//      let splitstr =str.split(" ")
//   // console.log(i)
//     for(let i of splitstr){
//       a[i] = (a[i] || 0) + 1
//     }
//     return a
//   }

//   console.log(wordFrecurncy("the full stack is a7a a7a"))


//Q2- function named a groupByAgeRange 1-17,18-25,26-40
// let a =[
//   {name:"ahmed",age:12},
//     {name:"ali"  ,age:19},
//     {name :"rheem" ,age: 34}
// ]   

// function groupByAgeRange(a) {
//   let ageGroup = {
//     "1-17":[],
//     "18-25":[],
//     "26-40": []
//   };

//   for (let i of a) {
//     if (i.age < 18) {
//       ageGroup["1-17"].push(i.name)
//     }else if(i.age>17 && i.age<26){
//       ageGroup["18-25"].push(i.name)
//     }
//     else if(i.age>26 && i.age<=40){
//       ageGroup["26-40"].push(i.name)
//     }
//     }
//     return ageGroup;
//   }


// console.log(groupByAgeRange(a))

//remove all

// let array=[1,2,3,4,5,6]
// console.log(array.filter(arr=>arr.null))

//sum of element of array using reduse 
// let array=[1,2,3,4,5,6]
// let sum = array.reduce((a,b) => a+b, 2);
// console.log(sum)
//---------------

//reverse without reduse 


// let array=[1,2,3,4,5,6]
// for(let i=array.length-1;i>=0;i--){
//   array.push(array[i])
// }
// array.splice(0,array.length/2)
// console.log(array)

// // ✅ Q5: Create an object "student" with keys: name, grade, subjects (an array).
//         let student = {
//       name: "Ali",
//       grade: 50,
//       grade1:40,
//       subjects: ["Math", "English", "Science"]
//     };

// // ✅ Q6: Add a new key "passed" with value true if grade is above 60.
// if(student.grade>60){
//   student.passed=true}
//   else{
//     student.passed=false
//   }
// //console.log(student)


// // ✅ Q7: Loop through the object and print each key and its value in this format: "key: value"
// for(let i in student){
//   console.log(i,':',student[i])
// };
// // for(let key in student){
// //     console.log(`${key}:${student[key]}`);

// // }

// // ✅ Q8: Add a method inside the object that prints the student's full info.
//       student.printInfo=function(){
//         console.log(`"the name:"${this.name}`,this.grade,this.subjects,this.passed)
//       }
//       student.printInfo()

// //q9:sum two ferade from an object 

// student.sum=function(grade,grade1){
//   console.log(grade+grade1)
// }
// student.sum(student.grade,student.grade1)


//-----------------------------
// array of object i want swap the colors of car use items of array

// let cars = [
//   { name :'bmw',color:'red'},
//   { name :'bently',color:'blue'}
// ];
// cars.map((item) => {
//   if (item.name === 'bmw') {
//     item.color = 'blue';
//   } else if (item.name === 'bently') {
//     item.color = 'red';
//   }
// });
// console.log(cars);
//
//i want create 

//array to object conversion 
// const key =['id','name','email','role'];
// const values =[101,'rheem','rheem@example.com','developer'] 
// const obj = key.reduce((acc, curr,id) => {
//   acc[curr] = values[id];
//   return acc;
// }, {});
// //task 2
// obj.permstion=['read','write']

// console.log(obj); 
// //task 3 =
// const reobj = Object.keys(obj)
// console.log(reobj); 

//=============

// //it contains at least three numbers 
// //it contains only digit 0-9 and all english letter 
// function validations(str) {
//   let digitCount = 0;
//   let onlyDigitsAndLetters = true;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char >= '0' && char <= '9') {
//       digitCount++;
//     } else if (
//       !(char >= 'a' && char <= 'z') &&
//       !(char >= 'A' && char <= 'Z')
//     ) {
//       onlyDigitsAndLetters = false;
//       break;
//     }
//   }

//   if (digitCount >= 3 && onlyDigitsAndLetters) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(validations("hellnah")); 
//

//=====================

// //remove duplicate using map
// const name1 =['ahmed','ali','rheem','ahmed','ali','ahmed']
// let d = name1.map((item, index) => {
//   return name1.indexOf(item) === index ? item : null;
// }).filter(item => item !== null);           
// console.log(d)

//--------------------------
// sum content 

// function sumArray(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum
// }

// console.log(sumArray([1,2,3,4]))


//----------------------------

// function find(arr) {
//   let maxnum = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxnum) {
//       maxnum = arr[i]
//     }
//   }
//   return maxnum
// }

// console.log(find([1,2,3,5,0,6]))

//-----------------------------------
//---------------THURSDAY-------------

// //wordFrecuency عدد تكرار الكلمات 
//   function wordFrecurncy(str){
//     let a = {}
//      let splitstr =str.split(" ")
//   // console.log(i)
//     for(let i of splitstr){
//       a[i] = (a[i] || 0) + 1
//     }
//     return a
//   }

//   console.log(wordFrecurncy("the full stack is a7a a7a"))


//Q2- function named a groupByAgeRange 1-17,18-25,26-40
// let a =[
//   {name:"ahmed",age:12},
//     {name:"ali"  ,age:19},
//     {name :"rheem" ,age: 34}
// ]   

// function groupByAgeRange(a) {
//   let ageGroup = {
//     "1-17":[],
//     "18-25":[],
//     "26-40": []
//   };

//   for (let i of a) {
//     if (i.age < 18) {
//       ageGroup["1-17"].push(i.name)
//     }else if(i.age>17 && i.age<26){
//       ageGroup["18-25"].push(i.name)
//     }
//     else if(i.age>26 && i.age<=40){
//       ageGroup["26-40"].push(i.name)
//     }
//     }
//     return ageGroup;
//   }


// console.log(groupByAgeRange(a))

//remove all

// let array=[1,2,3,4,5,6]
// console.log(array.filter(arr=>arr.null))

//sum of element of array using reduse 
// let array=[1,2,3,4,5,6]
// let sum = array.reduce((a,b) => a+b, 2);
// console.log(sum)
//---------------

//reverse without reduse 


// let array=[1,2,3,4,5,6]
// for(let i=array.length-1;i>=0;i--){
//   array.push(array[i])
// }
// array.splice(0,array.length/2)
// console.log(array)

// // ✅ Q5: Create an object "student" with keys: name, grade, subjects (an array).
//         let student = {
//       name: "Ali",
//       grade: 50,
//       grade1:40,
//       subjects: ["Math", "English", "Science"]
//     };

// // ✅ Q6: Add a new key "passed" with value true if grade is above 60.
// if(student.grade>60){
//   student.passed=true}
//   else{
//     student.passed=false
//   }
// //console.log(student)


// // ✅ Q7: Loop through the object and print each key and its value in this format: "key: value"
// for(let i in student){
//   console.log(i,':',student[i])
// };
// // for(let key in student){
// //     console.log(`${key}:${student[key]}`);

// // }

// // ✅ Q8: Add a method inside the object that prints the student's full info.
//       student.printInfo=function(){
//         console.log(`"the name:"${this.name}`,this.grade,this.subjects,this.passed)
//       }
//       student.printInfo()

// //q9:sum two ferade from an object 

// student.sum=function(grade,grade1){
//   console.log(grade+grade1)
// }
// student.sum(student.grade,student.grade1)


//-----------------------------
// array of object i want swap the colors of car use items of array

// let cars = [
//   { name :'bmw',color:'red'},
//   { name :'bently',color:'blue'}
// ];
// cars.map((item) => {
//   if (item.name === 'bmw') {
//     item.color = 'blue';
//   } else if (item.name === 'bently') {
//     item.color = 'red';
//   }
// });
// console.log(cars);
//
//i want create 

//array to object conversion 
// const key =['id','name','email','role'];
// const values =[101,'rheem','rheem@example.com','developer'] 
// const obj = key.reduce((acc, curr,id) => {
//   acc[curr] = values[id];
//   return acc;
// }, {});
// //task 2
// obj.permstion=['read','write']

// console.log(obj); 
// //task 3 =
// const reobj = Object.keys(obj)
// console.log(reobj); 

//=============

// //it contains at least three numbers 
// //it contains only digit 0-9 and all english letter 
// function validations(str) {
//   let digitCount = 0;
//   let onlyDigitsAndLetters = true;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char >= '0' && char <= '9') {
//       digitCount++;
//     } else if (
//       !(char >= 'a' && char <= 'z') &&
//       !(char >= 'A' && char <= 'Z')
//     ) {
//       onlyDigitsAndLetters = false;
//       break;
//     }
//   }

//   if (digitCount >= 3 && onlyDigitsAndLetters) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(validations("hellnah")); 

//======================

//return the index who is the right side equels left side (sumaation i mean )
// let array = [1, 7, 3, 6, 5, 6];

// for (let i = 0; i < array.length; i++) {
//     let leftSum = 0;
//     let rightSum = 0;

//     for (let j = 0; j < i; j++) {
//         leftSum += array[j];
//     }
//     for (let j = i + 1; j < array.length; j++) {
//         rightSum += array[j];
//     }

//     if (leftSum === rightSum) {
//         console.log(array[i]);
//     }
// }

//=====================================
// //prient integer mount value true else false if a mountain arr reture true
// let arr = [1, 2, 4, 3, 5, 3, 2];
// let peak = Math.max(...arr);
// let peakIndex = arr.indexOf(peak);

// let isMountain = true;
// for (let i = 0; i < peakIndex; i++) {
//   if (arr[i] >= arr[i + 1]) {
//     isMountain = false;
//     break;
//   }
// }
// if (isMountain) {
//   for (let i = peakIndex; i < arr.length - 1; i++) {
//     if (arr[i] <= arr[i + 1]) {
//       isMountain = false;
//       break;
//     }
//   }
// }
// console.log("Peak:", peak);
// console.log("Is Mountain Array?", isMountain);

//=======================

////check if its valley or not 
// let arr = [9, 7, 4, 2, 3, 5, 8];
// let lowest = Math.min(...arr);
// let lowestIndex = arr.indexOf(lowest);

// let isValley = true;
// for (let i = 0; i <= lowestIndex; i++) {
//   if (arr[i] <= arr[i + 1]) {
//     isValley = false;
//     break;
//   }
// }
// if (isValley) {
//   for (let i = lowestIndex ; i < arr.length - 1; i++) {
//     if (arr[i] >= arr[i + 1]) {
//       isValley = false;
//       break;
//     }
//   }
// }
// console.log(lowest);
// console.log("Is Valley :", isValley);

//=======================

// //we have a sorted array return the index of target  

// let num = [1,2, 4, 7], target = 5;
// for (let i = 0; i < num.length; i++) {
//     if (num[i] === target) {
//         console.log(i); 
//         break; 
//     }
//     else if (num[i] > target) {
//         console.log(i);
//         break;
//     }
// }


//every zero put it in the last in same array use push dont use another array

// let arr = [2, 0, 4, 7, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
    
//         arr.push(0);
//     }
// }
// console.log(arr);

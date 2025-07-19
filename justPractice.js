// Given an integer x,
// Example 1:
// Input: x= 121
// Output: true
// return true if x is a palindrome,
// and false otherwise.
// Explanation: 121 reads as 121 from left to right and from right to left.

// function palindrome(input){
//     let str=input
//     if (typeof input ==="number"){
//         str = input.toString()
//     }
// let reverse=[]
// for(let i=str.length-1;i>=0;i--){
//     reverse=reverse+str[i]
// }
//     return str===reverse
// }
// console.log(palindrome("rar"))

//=======================================

/*
📌 Question:
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

🔹 Example 1:
Input:  s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

🔹 Example 2:
Input:  s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

🔹 Example 3:
Input:  s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

// // ✅ Function to solve the problem:
// function lengthOfLastWord(s) {
//     s = s.trim();                     // Remove spaces from start and end
//     let words = s.split(" ")       // Split into words
//     return words[words.length - 1].length; // Return length of last word
// }

// // ✅ Test Cases:
// console.log(lengthOfLastWord("Hello--"));               // Output: 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
// console.log(lengthOfLastWord("luffy is still joyboy"));     // Output: 6


// =================

// You have two arrays 
// Swap arr1 even numbers with arr2 odd and viceversa
// let arr1 = [1,2,3,4,5,6]//2,4,6
// let arr2 = [7,8,9,10,11,12]//7,9,11

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 0) {
//         // Find next odd in arr2
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr2[j] % 2 === 1) {
//                 // Swap
//                 let temp = arr1[i];
//                 arr1[i] = arr2[j];
//                 arr2[j] = temp;
//                 break;
//             }
//         }
//     }
// }
// console.log("arr1 odd:", arr1)
// console.log("arr2 even:", arr2);

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10, 11, 12];

// let Even = [];
// let Odd = [];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 0) {
//         Even.push(arr1[i]);
//     }
// }

// for (let j = 0; j < arr2.length; j++) {
//     if (arr2[j] % 2 === 1) {
//         Odd.push(arr2[j]);
//     }
// }

// console.log("arr1Even:", arr1); 
// console.log("arr2Odd:", arr2);   


//====================
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12]
// ];
// console.log(matrix.flat().filter((el=>!(el%3==0 || el%4==0))));
// let flatten =matrix.flat()
// console.log(flatten)

// let finals =[]
// for (let i = 0; i < flatten.length; i++) {
//     if (flatten[i] % 3 !== 0 && flatten[i] % 4 !== 0) {
//         finals.push(flatten[i]);
//     }
// }
// console.log(finals)


// let sentence = "The quick brown fox jumped over the lazy hacker";
// ✅ Your Task:
// Split the sentence into words.
// let split=sentence.split(" ")
// console.log(split)
// Find the longest word in the sentence.
// let word=''
// for(let i=0;i<split.length;i++){
//     if(split[i].length>word.length){
//         word =split[i]
//     }
// }
//     console.log(word,word.length)


//solve it with filter
// let longestWord = split.filter(word => word.length === Math.max(...split.map(w => w.length)));
// console.log(longestWord);


// let word = "hello";
// // الناتج:
// // { h: 1, e: 1, l: 2, o: 1 }
// console.log(word.split("").reduce((acc,char)=>{
//     acc[char]=(acc[char]||0) +1;
// return acc;
// },{}));


let numbers = [5, 2, 8, 5, 6, 2, 3, 8, 1, 9, 3, 1];
// expected result :
// Unique numbers: [6, 9]
// Count: 2
let uniqe=[]
for(let i=0;i<=numbers.length;i++){//5  2
    let count =0
    for(let j=0;j<numbers.length;j++){
        if(numbers[i]==numbers[j]){
            count++;
        }
    }
    if(count==1){
        uniqe.push(numbers[i])
    }
}
console.log(uniqe)

// console.log(numbers.filter((num)=>{}))
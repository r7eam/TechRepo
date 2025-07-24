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
//         console.log(i);
//     }
// }


//prient integer mount value true else false if a mountain arr reture true

let arr = [1, 2, 3, 5, 3, 2, 1,6];
let peak = [];
for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        peak = true
        break
    }
    else if(arr[i] > arr[i - 1] && arr[i] < arr[i + 1]){
        peak = false 
}}
console.log(peak);
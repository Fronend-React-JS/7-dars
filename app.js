//// 1-misol

// function removeElements(arr, count) {
//   if (count >= arr.length) {
//     return [];
//   }

//   arr.splice(0, count);
//   return arr;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count = 5;
// let result = removeElements(arr, count);
// console.log(result);





//// 2-misol: qaysi bir kattalikka tekshiruv

// let arr = [1, 2, 3, 4, 'salom'];
// let arr1 = [1, 2, 3, 4, 'salom', 'xayr'];

// let a = arr;
// let b = arr1;

// if (a > b) {
//     console.log(arr.concat(arr1));
// } else {
//     console.log(arr1.concat(arr));
// }

//// 3-misol

// const indexgacha = (arr, star, end) => {
//     let sum = 0;

//     for (let i = star; i <= end; i++) {
//       sum += arr[i];
//     }

//     return sum;
//   }

//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let start = 1; // boshlanish indeks
//   let end = 6; // tugataydigan indeks

// let result = indexgacha(arr, start, end);

// console.log(result); // natija = 27

//// 4-misol

// function teskari() {

//     let a = [1, 2, 3, 4 ,'salom', 'xayr'];

//     let sum = (" ");

//     for (let i = a.length - 1; i >= 0; i--) {
//         sum = sum + a[i];
//     }
//     console.log(sum);
// }

// teskari();

//////////////////////////////
// let a = 0;               //
//                          //
// a = a*1;                 //
//                          //
// if (a > 0) {             //
//     console.log(a + 1);  //
// } else if (a < 0) {      //
//     console.log(a + 2);  //
// } else {                 //
//     console.log(a + 10); //
// }                        //
//////////////////////////////
// EXAMPLE 1 - Convert an Array of Objects to an Array of Values in JS

const arrOfObj = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'},
];

const arr = arrOfObj.map(object => object.name);
console.log(arr); // 👉️ ['Alice', 'Bob']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Dealing with missing properties

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 2},
//   {id: 3, name: 'Carl'},
// ];

// const names = arr.map(obj => obj.name);
// console.log(names); // 👉️ ['Alice', undefined, 'Carl']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Removing the undefined values from the array

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 2},
//   {id: 3, name: 'Carl'},
// ];

// const names = arr
//   .map(obj => obj.name)
//   .filter(value => {
//     return value !== undefined;
//   });
// console.log(names); // 👉️ ['Alice', 'Carl']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert an Array of Objects to an Array of Values using `forEach()`

// const arrOfObj = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
// ];

// const arr = [];

// arrOfObj.forEach(object => {
//   arr.push(object.name);
// });

// console.log(arr); // 👉️ ['Alice', 'Bob']

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert an Array of Objects to an Array of Values using `for...of`

// const arrOfObj = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
// ];

// const arr = [];

// for (const object of arrOfObj) {
//   arr.push(object.name);
// }

// console.log(arr); // 👉️ ['Alice', 'Bob']

// ------------------------------------------------------------------

// // EXAMPLE 6 - Convert an Array of Objects to an Array of Values using `for`

// const arrayOfObjects = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
// ];

// const arr = [];

// for (let index = 0; index < arrayOfObjects.length; index++) {
//   arr.push(arrayOfObjects[index].name);
// }

// console.log(arr); // 👉️ ['Alice', 'Bob']

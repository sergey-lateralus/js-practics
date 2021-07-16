let name = "Enter your name";
console.log(name);

// console.log(number) Uncaught ReferenceError: Cannot access 'userName' before initialization
let number = 30;
console.log(number);

// console.log(userName); Uncaught ReferenceError: Cannot access 'userName' before initialization
const userName = "Sergey";
console.log(userName);

let age;
console.log(age); // undefined

age = 18;
console.log(age);
age = 21;
console.log(age);

// const user; // SyntaxError: Missing initializer in const declaration


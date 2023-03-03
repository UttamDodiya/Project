// Assignment operators
// =
let a = 5;
console.log(a);

//Addition assignment
// +=
a += 10;
console.log(a);
let b = a;
b += 12;
console.log("addition ass", b);

//Subtraction assignment
// -=
let c = b - a;
console.log("Subtraction assignment before", c);
c -= 2;
console.log("Subtraction assignment after", c);

// Multiplication assignment
// *=
let d = 5;
console.log("Multiplication assignment before", d);
d *= 2;
console.log("Multiplication assignment after", d);

//Division assignment
// /=
let e = 5;
console.log("Division assignment before", e);
e /= 2;
console.log("Division assignment after", e);

//Remainder assignment
// %=
let f = 10;
console.log("Remainder assignment before", f);
f %= 2;
console.log("Remainder assignment after", f);

//Exponentiation assignment
// **=
let g = 5;
console.log("Exponentiation assignment before", g);
g **= 2;
console.log("Exponentiation assignment after", g);

/////////////////////////////////////////////////////////////////////////////////////////////////
// Comparison operators
//==
let h = 5;
let i = "5";
let j = 6;
console.log("Equal", h == i);
//===
console.log("Stict Equal", h === i);
//!=
console.log("not Equal", h != i);
//!==
console.log("not Stict Equal", h !== i);
// >
console.log("Greater than", 6 > 5);
// <
console.log("Less than", 17 < 100);
// >=
console.log("Greater than or Equal", 12 >= 5);
// <=
console.log("Less than", 17 <= 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Arithmetic operators
// ++
let k = 12;
// let l = ++k;
let m = k++;
// console.log("Increment", l);
console.log("Increment", m);

// --
let n = 12;
// let o = --n;
let o = n--;
// console.log("Decrement", l);
console.log("Decrement", o);

//-
let p = 12;
let q = -p;
console.log("Unary negation ", q);

//+
let r = 5;
let s = r;
console.log("Unary plue", +s);

// **
let t = 12;
let u = 2;
console.log("Exponentiation operator", t ** u);

////////////////////////////////////////////////////////////////////////////////////
// Logical operators

//&& AND
// if (t > 0 && u > 0) {
//   console.log("true");
// }
// if (t > 0 && u > 0) {
//   console.log("false");
// }

// || OR
// if (t == 12 || u == 123) {
//   console.log("True");
// }
// if (t == 1212 || u == 2) {
//   console.log("True OR");
// }

// ! NOT
let v = true;
console.log(!v);

////////////////////////////////////////////////////////////////////////////////////
//Conditional (ternary) operator

let age = 12;
const status = age >= 18 ? "true" : "false";
console.log("status", status);

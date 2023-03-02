
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
let array_sort = array.sort()
// console.log(array_sort);
array.splice(0,1);
// console.log(array);
array.push("kiwi");
let array_reverse = array.reverse();
let remove_element = array.splice(3,1);
console.log(array_reverse);

////////////////////////access oranges////////////////////
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);
// Built-in method pada Javascript
const name = "ikhsan azis pane";

console.log(name.length);         
console.log(name.toLowerCase());  
console.log(name.toUpperCase());  

const input = "    M. Ikhsan Azis Pane   ";
console.log(input.trim());        
console.log(input.trimEnd());     

const value = "1.02345";
const newValue = parseInt(value); 
const newValue2 = Number(value);  
console.log(typeof newValue);     

const newstring = "saya belajar javascript hingga mahir";
console.log(newstring.charAt(5));              
console.log(newstring.includes("javascript"));  
console.log(newstring.indexOf("saya"));
console.log(newstring.search("saya"));

const array = [];
array.push("azis");
array.push("ikhsan");
array.pop();
array.unshift("pen");
array.unshift("M");
array.shift();
console.log(array);

var angka = [1, 2, 4, 7, 5, 6, 9, 8, 10];
var urutan = angka.sort(function (a, b) {
  return a - b;
});
console.log(urutan);

let kopi = "kopikopiko";
console.log(kopi.replace(/o/g, "a"));

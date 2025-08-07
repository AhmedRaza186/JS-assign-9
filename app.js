var multi = []

var matrix = [
  [0, 1, 2],
  [1, 0, 1],
  [2, 1, 0]
]

document.writeln("Counting:<br>")
for (var i = 1; i <= 10; i++) {
  document.writeln(i + "<br>")
}

var num = +prompt("Enter a number for multiplication table:")
var length = +prompt("Enter table length:")
document.writeln(`<br>Multiplication Table of ${num}:<br>`)
for (let i = 1; i <= length; i++) {
  document.writeln(`${num} x ${i} = ${num * i}<br>`)
}


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
document.writeln("<br>Fruits:<br>")
for (var i = 0; i < fruits.length; i++) {
  document.writeln(fruits[i] + "<br>")
}



document.writeln("<br>Counting:<br>")
for (var i = 1; i <= 15; i++) {
  document.writeln(i + ", ")
}
document.writeln("<br><br>")

document.writeln("Reverse Counting:<br>")
for (var i = 10; i >= 1; i--) {
  document.writeln(i + ", ")
}
document.writeln("<br><br>")


document.writeln("Even:<br>")
for (var i = 0; i <= 20; i += 2) {
  document.writeln(i + ", ")
}
document.writeln("<br><br>")

document.writeln("Odd:<br>");
for (var i = 1; i < 20; i += 2) {
  document.writeln(i + ", ")
}
document.writeln("<br><br>")

document.writeln("Series:<br>")
for (var i = 2; i <= 20; i += 2) {
  document.writeln(i + "k, ")
}
document.writeln("<br><br>")

setTimeout(function () {
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Welcome to ABC Bakery! What do you want to order?").toLowerCase()
var found = false
for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    alert(`${userInput} is available at index ${i} in our bakery.`)
    found = true
    break
  }
}
if (!found) {
  alert(`We are sorry. ${userInput} is not available in our bakery.`)
}
}, 1500)



var nums = [24, 53, 78, 91, 12]
document.writeln(`<br><br>Random Numbers:<br>  ${nums} <br>`)
var max = Math.max(...nums)
document.writeln(`Largest number is ${max}`)



var min = Math.min(...nums)
document.writeln(`<br>Smallest number is ${min}<br><br>`)



document.writeln("Multiples of 5:<br>")
for (let i = 5; i <= 100; i += 5) {
  document.writeln(i + "<br>")
}
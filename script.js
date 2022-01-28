const div1 = document.getElementById("array1").innerHTML = "array 1"
const div2 = document.getElementById("array2").innerHTML = "array 2"
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

let resultDiv = document.getElementById("result")
resultDiv.innerHTML = 'result'

const arrayOne = [
    { value: "1", display: "a" },
    { value: "2", display: "b" }
];

const arrayTwo = [
    { value: "12", display: "a" },
    { value: "2", display: "b" }
];

const results = arrayOne.filter(({ value: id1 }) => arrayTwo.some(({ value: id2 }) => id2 === id1));
resultDiv.innerHTML = results[0].value;
console.log(results);
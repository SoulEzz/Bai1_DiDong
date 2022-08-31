const div1 = document.createElement("div");
div1.id = "d1";


const div2 = document.createElement("div");
div2.id = "d2";
// Div 1
const p1 = document.createElement("p");
p1.innerText = "a :";

const inp1 = document.createElement("input");
inp1.id = "nameA";

// Div 2
const p2 = document.createElement("p");
p2.innerText = "b :";

const inp2 = document.createElement("input");
inp2.id = "nameB";

const bg = document.createElement("b");
// Div 3 
const div3 = document.createElement("div");
div3.id = "d3";

// button
const btn = document.createElement("button");
btn.id = "btn1";
btn.innerHTML = "Result";
// Append Div
div1.appendChild(p1);
div1.appendChild(inp1);
div2.appendChild(p2);
div2.appendChild(inp2);
div3.appendChild(bg);
div3.appendChild(btn);
// Append body

document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);

// Button action
const input1 = document.getElementById("nameA");
const input2 = document.getElementById("nameB");
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", myFunction);

function myFunction() {
    var tong = Number(input1.value) + Number(input2.value);
    alert("A + B = " + tong);
}
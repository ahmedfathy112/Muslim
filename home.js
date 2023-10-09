let toogleBTN = document.getElementById("toogle-box");
let boxHIDE = document.getElementById("box-hide");

function toogleBox() {
  boxHIDE.classList.toggle("hide-box");
}

// --------------------------------------------------
let resetALL = document.getElementById("reset-all");

resetALL.onclick = () => {
  counter = 0;
  clickBTN.innerHTML = "0";
  counter2 = 0;
  clickBTN2.innerHTML = "0";
  counter3 = 0;
  clickBTN3.innerHTML = "0";
  counter4 = 0;
  clickBTN4.innerHTML = "0";
  counter5 = 0;
  clickBTN5.innerHTML = "0";
  counter6 = 0;
  clickBTN6.innerHTML = "0";
  counter7 = 0;
  clickBTN7.innerHTML = "0";
  counter8 = 0;
  clickBTN8.innerHTML = "0";
};

let reset = document.getElementById("reset-btn");
let clickBTN = document.getElementById("btn1");
let counter = 0;

function increasing() {
  counter += 1;
  clickBTN.innerHTML = counter;
  reset.onclick = () => {
    counter = 0;
    clickBTN.innerHTML = "0";
  };
}

let clickBTN2 = document.getElementById("btn2");
let reset2 = document.getElementById("reset-btn2");
let counter2 = 0;
function increasing2() {
  counter2 += 1;
  clickBTN2.innerHTML = counter2;
  reset2.onclick = () => {
    counter2 = 0;
    clickBTN2.innerHTML = "0";
  };
}

let clickBTN3 = document.getElementById("btn3");
let reset3 = document.getElementById("reset-btn3");

let counter3 = 0;
function increasing3() {
  counter3 += 1;
  clickBTN3.innerHTML = counter3;
  reset3.onclick = () => {
    counter3 = 0;
    clickBTN3.innerHTML = "0";
  };
}

let clickBTN4 = document.getElementById("btn4");
let reset4 = document.getElementById("reset-btn4");

let counter4 = 0;
function increasing4() {
  counter4 += 1;
  clickBTN4.innerHTML = counter4;
  reset4.onclick = () => {
    counter4 = 0;
    clickBTN4.innerHTML = "0";
  };
}

let clickBTN5 = document.getElementById("btn5");
let reset5 = document.getElementById("reset-btn5");

let counter5 = 0;
function increasing5() {
  counter5 += 1;
  clickBTN5.innerHTML = counter5;
  reset5.onclick = () => {
    counter5 = 0;
    clickBTN5.innerHTML = "0";
  };
}

let clickBTN6 = document.getElementById("btn6");
let reset6 = document.getElementById("reset-btn6");

let counter6 = 0;
function increasing6() {
  counter6 += 1;
  clickBTN6.innerHTML = counter6;
  reset6.onclick = () => {
    counter6 = 0;
    clickBTN6.innerHTML = "0";
  };
}

let clickBTN7 = document.getElementById("btn7");
let reset7 = document.getElementById("reset-btn7");

let counter7 = 0;
function increasing7() {
  counter7 += 1;
  clickBTN7.innerHTML = counter7;
  reset7.onclick = () => {
    counter7 = 0;
    clickBTN7.innerHTML = "0";
  };
}

let clickBTN8 = document.getElementById("btn8");
let reset8 = document.getElementById("reset-btn8");

let counter8 = 0;
function increasing8() {
  counter8 += 1;
  clickBTN8.innerHTML = counter8;
  reset8.onclick = () => {
    counter8 = 0;
    clickBTN8.innerHTML = "0";
  };
}

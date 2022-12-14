"use strict";

let inputBill = document.getElementById("inputBill");
let inputPeople = document.getElementById("inputPeople");
let tipAmount = document.getElementById("tipAmount");
let tipTotal = document.getElementById("tipTotal");
const fivePercentTip = document.getElementById("tip_5");
const tenPercentTip = document.getElementById("tip_10");
const fifteenpPercentTip = document.getElementById("tip_15");
const twentyFivePercentTip = document.getElementById("tip_25");
const fiftyPercentTip = document.getElementById("tip_50");
const seventyFivePercentTip = document.getElementById("tip_75");
const resetBtn = document.getElementById("btn_reset");

// Reset button
resetBtn.addEventListener("click", function () {
  inputBill.value = this.ariaPlaceholder;
  inputPeople.value = this.ariaPlaceholder;
  tipAmount.textContent = `$0.00`;
  tipTotal.textContent = `$0.00`;
});
// 5 percent tip Amount
fivePercentTip.addEventListener("click", function () {
  let result = (inputBill.value * 0.05) / inputPeople.value;
  console.log(result);
  tipAmount.textContent = `$${Math.floor(result)}`;
  tipTotal.textContent = `$${Math.floor(result) + Number(inputBill.value)}`;
});

// 10 percent tip Amount
tenPercentTip.addEventListener("click", function () {
  let result = (inputBill.value * 0.1) / inputPeople.value;
  console.log(result);
  tipAmount.textContent = `$${Math.floor(result)}`;
  tipTotal.textContent = `$${Math.floor(result) + Number(inputBill.value)}`;
});

// 15 percent tip Amout
fifteenpPercentTip.addEventListener("click", function () {
  let result = (inputBill.value * 0.15) / inputPeople.value;
  console.log(result);
  tipAmount.textContent = `$${Math.floor(result)}`;
  tipTotal.textContent = `$${Math.floor(result) + Number(inputBill.value)}`;
});

// 25 percent tip amount

twentyFivePercentTip.addEventListener("click", function () {
  let result = (inputBill.value * 0.25) / inputPeople.value;
  console.log(result);
  tipAmount.textContent = `$${Math.floor(result)}`;
  tipTotal.textContent = `$${Math.floor(result) + Number(inputBill.value)}`;
});

// 50 percent tip amount

fiftyPercentTip.addEventListener("click", function () {
  let result = (inputBill.value * 0.5) / inputPeople.value;
  console.log(result);
  tipAmount.textContent = `$${Math.floor(result)}`;
  tipTotal.textContent = `$${Math.floor(result) + Number(inputBill.value)}`;
});

// 75 percent tip amount

seventyFivePercentTip.addEventListener("click", function () {
  let result = (inputBill.value * 0.75) / inputPeople.value;
  console.log(result);
  tipAmount.textContent = `$${Math.floor(result)}`;
  tipTotal.textContent = `$${Math.floor(result) + Number(inputBill.value)}`;
});

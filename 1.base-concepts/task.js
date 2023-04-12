"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  console.log("D = " + D);
  if (D == 0) {
    arr.push(-b / (2 * a));
  } else if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)){
    return false;
  }
  if (isNaN(contribution)){
    return false;
  }
  if (isNaN(amount)){
    return false;
  }
  if (isNaN(countMonths)){
    return false;
  }
  let monthlyPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
  let totalPayment = Number((monthlyPayment * countMonths).toFixed(2));
  return totalPayment; 
}
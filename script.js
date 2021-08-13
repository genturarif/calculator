const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

// Numbers and Dot(.) Display 2 Function
numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

// Operation Condition Function
operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) {
      return;
    }

    haveDot = false;
    const operationName = e.target.innerText;

    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }

    clearVar(operationName);
    lastOperation = operationName;
  });
});

// Operation Function
function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

// Display 1 and Display Temporary Result Function
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;

  dis2Num = "";
  display2El.innerText = "";

  tempResultEl.innerText = result;
}

// Equal Function
equalEl.addEventListener("click", (e) => {
  if (!dis2Num || !dis1Num) {
    return;
  }

  haveDot = false;
  mathOperation();
  clearVar();

  display2El.innerText = result;
  tempResultEl.innerText = "";

  dis2Num = result;
  dis1Num = "";
});

// Clear All Function
clearAllEl.addEventListener("click", (e) => {
  display1El.innerText = "0";
  display2El.innerText = "0";

  dis1Num = "";
  dis2Num = "";

  tempResultEl.innerText = "0";
  result = "";
});

// Clear Last Function
clearLastEl.addEventListener("click", (e) => {
  display2El.innerText = "";
  dis2Num = "";
});

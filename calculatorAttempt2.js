const inputField = {
  result: 0,
  previousInput: null,
  currentInput: null,
  previousNumber: null,
  previousOperator: null,
  currentOperator: null,
};

let showResult = document.getElementById("result");
showResult.innerText = inputField.result;

const inputArr = document.querySelectorAll(".a-button");

inputArr.forEach((button) =>
  button.addEventListener("click", (e) => {
    let btn = e.target;
    switch (btn.dataset.type) {
      case "numbers":
        console.log(`im a number ${btn.innerText}`);
        handleNumber(parseInt(btn.innerText));
        showResult.innerText = inputField.currentInput;
        break;
      case "operator":
        console.log(`im an operator ${btn.innerText}`);
        handleOperator(inputField, btn.innerText);
        break;
      case "messer":
        console.log(`im a messer ${btn.innerText}`);
        handleMesser(btn.innerText);
        break;
    }
  })
);

//if a number is pressed update result to show the pressed button
function handleNumber(number) {
  if (inputField.currentInput) {
    inputField.previousInput = inputField.currentInput;
    return (inputField.currentInput = inputField.previousInput * 10 + number);
  }
  return (inputField.currentInput = number);
}

//if an operator is pressed, store the operator and check if another was pressed
//then perform the logic
function handleOperator({ currentInput }, operator) {
  if (inputField.currentOperator) {
    inputField.previousOperator = inputField.currentOperator;
  }
  inputField.currentOperator = operator;
  if (inputField.previousOperator) {
    switch (inputField.previousOperator) {
      case "/":
        inputField.result = Math.round(
          inputField.previousNumber / inputField.currentInput
        );
        break;
      case "*":
        inputField.result = Math.round(
          inputField.currentInput * inputField.previousNumber
        );
        break;
      case "+":
        inputField.result = inputField.currentInput + inputField.previousNumber;
        break;
      case "-":
        inputField.result = inputField.previousNumber - inputField.currentInput;
        break;
    }
  } else {
    inputField.currentInput = 0;
  }

  if (!inputField.result) {
    return (inputField.previousNumber = currentInput);
  }
  //update calculator text field
  showResult.innerText = inputField.result;
  inputField.currentInput = 0;
  inputField.previousNumber = inputField.result;

  console.log(inputField);
}

//functions to delete numbers or clear numbers
function handleMesser(messer) {
  switch (messer) {
    case "AC":
      inputField.result = 0;
      inputField.previousInput = null;
      inputField.currentInput = 0;
      inputField.previousOperator = null;
      inputField.currentOperator = null;
      break;
    case "+/-":
      inputField.currentInput = -1 * inputField.currentInput;
      break;
    case "del":
      if (inputField.currentInput) {
        inputField.currentInput = inputField.previousInput;
      }
      break;
  }
  console.log(inputField);
  showResult.innerText = inputField.currentInput;
}

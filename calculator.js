//defining all numbers and operators
console.log("hi");
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["/", "*", "+", "-"];
const messers = ["AC", "=", "⇤"];
let leftSideResult = 0;
let operatorPrevious = "";
let rightSideResult = 0;
let result = 0;
// displayResult();
//turns all the number and operator blocks into const input
const input = document.querySelector(".a-button");
//when input is clicked, anon function is run
input.
  addEventListener("click", function (event) {
    let btn = event.target;
    console.log("yo");
    switch (btn.dataset.type) {
      case "numbers":
        handleNumericInput(parseInt(btn.innerHTML));
        console.log("number was pressed");
        break;
      case "operator":
        handleOperatorInput(btn.innerHTML);
        console.log("operator was pressed");
        break;
      case "messers":
        handleMesserInput(btn.innerHTML);
        console.log("messer was pressed");
      default:
        break;
  }}
);
//multiply by 10 and add number to get the next pressed button i.e press 6 then 9 -> 6*10 + 9 = 69
//then display 69
function handleNumericInput(number){ 
    result = (result * 10) + number 
    displayResult()  
}

function handleOperatorInput(opera){
    rightSideResult = result
    if (leftSideResult != 0) {
        rightSideResult = calculate(leftSideResult, rightSideResult, operatorPrevious);
    }
    //stores previous operator
    operatorPrevious = opera
    displayResult();
    result = 0; 
    leftSideResult = rightSideResult; 
    rightSideResult = 0;   
}

function handleMesserInput(mess){ 
    if (mess === '='){
        rightSideResult = result;
        result = calculate(leftSideResult,rightSideResult, operatorPrevious);
        leftSideResult = result;
        displayResult();
    } else if (mess === 'AC'){
        result = 0; 
        leftSideResult = 0;
        rightSideResult = 0;
        displayResult(); 
        operatorPrevious='';
    } else if (mess === 'del'){
        result = Math.floor(result/10);
        displayResult();
    }
}

// function displayResult(){
//     document.querySelector(".result").innerHTML = result
// }


function calculate(num1,num2,operation){
    switch(operation){
        case '+': 
            return num1 + num2 
        case '-': 
            return num1 - num2 
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key == 'Backspace'){
    handleMesserInput('del') ;
    }
});





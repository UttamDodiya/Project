const defultResult = 0;
let currentResult = defultResult;
let logEntries = [];
// let calculationDescription = "hello";
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function writeToLog(
  operationIdenifier,
  prevResult,
  operationNumber,
  newResult
) {
  if (prevResult === 0) {
    alert("You need Enter second number");
  } else {
    const logEntry = {
      operation: operationIdenifier,
      prevResult: prevResult,
      Number: operationNumber,
      result: newResult,
    };
    logEntries.push(logEntry);
  }
  console.log(logEntries);
}

function getUserNumberInput() {
  console.log(userInput.value);
  return Number(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCala, CalaNumber) {
  const calcDescription = `${resultBeforeCala} ${operator} ${CalaNumber}`;
  outputResult(currentResult, calcDescription);
}

function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}
function multiply(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

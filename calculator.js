// Select all the buttons and operators
const display1E1 = document.querySelector('.display-1');
const finalDisplayE1 = document.querySelector('.final-display');
//const tempDisplayE1 = document.querySelector('.temp-display');
const numbersE1 = document.querySelectorAll('.number');
const operationsE1 = document.querySelectorAll('.operation');
const clearE1 = document.querySelector('.clear');
const allClearE1 = document.querySelector('.all-clear');
const equalE1 = document.querySelector('.equation');

// 
let leftOperand = 0;
let rightOperand = 0;
let operator = '';

numbersE1.forEach(number => {
    number.addEventListener('click', (e) => {
        if(operator) {
            let t = rightOperand + e.target.innerText;
            rightOperand = parseFloat(t);
        } else {
            let t = leftOperand + e.target.innerText;
            leftOperand = parseFloat(t);
        }

        display1E1.innerText = leftOperand;
        if(operator) display1E1.innerText += operator;
        if(rightOperand) display1E1.innerText += rightOperand;
    })
});
operationsE1.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(leftOperand){
            operator = e.target.innerText;
            display1E1.innerText = leftOperand + operator;
        }
    })
});
equalE1.addEventListener("click", (e) => {
    // Check if left operand, right operand and operator are valid
    if(leftOperand && operator && rightOperand){
        mathOperation(leftOperand, operator, rightOperand);
    }
})


clearE1.addEventListener("click", (e) => {
    if(rightOperand, operator, leftOperand) {
        display1E1.innerText = "0";
    }
    //let clearAll = rightOperand + operator + leftOperand;
    //display1E1 = clearAll;

})

/*allClearE1.addEventListener("click", (e) => {
    finalDisplayE1.innerText = "0";
    op = "0"

})*/


function mathOperation(l, o, r) {
    let result = 0;

    switch(o) {
        case "+":
            result = leftOperand + rightOperand;
            break;
        case "X":
            result = leftOperand * rightOperand;
            break;
        case "-":
            result = leftOperand - rightOperand;
            break;
        case "/":
            result = leftOperand / rightOperand;
            break;

    }

    finalDisplayE1.innerText = result
}

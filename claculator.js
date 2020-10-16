//elements
const $buttonContainer = document.getElementById('button-container')
const $equals = document.getElementById('equals')
const $formula = document.getElementById('formula')
const $answer = document.getElementById('answer')

//function
function insertValue(event) {
    $formula.textContent += event.target.textContent
}

function equals() {

    //variables
    let leftOperand = ''
    let rightOperand = ''
    let operation = ''
    let operationSet = false

    for (let character of $formula.textContent) {

        if (operationSet === false) {
            if (character === '+' || character === '-' || character === '*' || character === '/') {
                operation = character
                operationSet = true //this will start working on the right side of formula
                continue//skip the remainer of the loop, this means it will continue to the next line
            }
        }
        

        if (operationSet === false) {
            leftOperand += character
        }
        
        if (operationSet === true) {
            rightOperand += character
        }
    }

    console.log(`leftOperand is: ${leftOperand}`)
    console.log(`operation is: ${operation}`)
    console.log(`rightOperand is: ${rightOperand}`)




    let answer = 0

    if (operation === '+') {
        answer = parseInt(leftOperand) + parseInt(rightOperand)
    }
    else if (operation === '-') {
        answer = parseInt(leftOperand) - parseInt(rightOperand)
    }
    else if (operation === '*') {
        answer = parseInt(leftOperand) * parseInt(rightOperand)
    }
    else if (operation === '/') {
        answer = parseInt(leftOperand) / parseInt(rightOperand)
    }

    $answer.textContent = answer
    $formula.textContent = ''

}


//event listeners
$buttonContainer.addEventListener('click', insertValue)
$equals.addEventListener('click', equals)


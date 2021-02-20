// import createNumberFields from './create-number-fields'
import config from './config'
import generateNumber from './generate-number'
import calculate from './operations'
import isFormInvalid from './is-form-valid'

const operand1 = generateNumber(config.min, config.max)
const operand2 = generateNumber(config.min, config.max)
const operator = '+'

config.operationElem.innerHTML = operand1 + ' ' + operator + ' ' + operand2
const result = calculate[operator](operand1, operand2)
console.log(result)

const theForm = document.getElementById('form')
theForm.addEventListener('submit', function(e){
    // e.preventDefault()
    if(isFormInvalid.call(theForm, result)){
        e.preventDefault()
        return false
    }else{
        return true
    }

})

// const answerDropdownElem = createNumberFields(config.min, result)
// config.resultElem.appendChild(answerDropdownElem)

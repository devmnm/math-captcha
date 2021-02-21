import config from './config'
import generateNumber from './generate-number'
import calculate from './operations'
// import isFormInvalid from './is-form-valid'
import getNumberWord from './get-number-word'

const operand1 = generateNumber(config.min, config.max)
const operand2 = generateNumber(config.min, config.max)
const operator = '+'

if (config.userNumberWords) {
  config.operationElem.innerHTML = getNumberWord(operand1) + ' ' + operator + ' ' + getNumberWord(operand2)
} else {
  config.operationElem.innerHTML = operand1 + ' ' + operator + ' ' + operand2
}

const result = calculate[operator](operand1, operand2)
// console.log(result)

config.answerTextElem.setCustomValidity('Invalid value') // invalid as default
config.answerTextElem.addEventListener('blur', function (e) {
  if (config.answerTextElem.value === result.toString()) {
    config.answerTextElem.setCustomValidity('') // valid
  } else {
    config.answerTextElem.setCustomValidity('Invalid value')
  }
})

// const theForm = document.getElementById('form')
// theForm.addEventListener('submit', function (e) {
//   if (isFormInvalid.call(theForm, result)) {
//     e.preventDefault()
//     alert('Invalid')
//     return false
//   } else {
//     return true
//   }
// })

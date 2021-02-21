
/**
 *
 * @param {*} minNum
 * @param {*} maxNum
 */
export default function createNumberFields (minNum, maxNum) {
  const max = maxNum * 2 // produce more possible 'solutions'
  const selectElem = document.createElement('select')
  let optionElem = document.createElement('option')

  selectElem.id = 'captcha-value'
  selectElem.name = 'captchaValue'

  optionElem.value = -1
  optionElem.text = '--select--'
  selectElem.appendChild(optionElem)

  for (let i = minNum; i <= max; i++) {
    optionElem = document.createElement('option')
    optionElem.value = i
    optionElem.text = i

    selectElem.appendChild(optionElem)
  }

  return selectElem
}

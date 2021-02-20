
export default function isFormInvalid(captchaVal){
    let why = ''
    const theForm = this

    if(theForm.name) why = isEmpty(theForm.elements.name.value)
    if(theForm.tel) why = isEmpty(theForm.elements.tel.value)
    if(theForm.url) why = isEmpty(theForm.elements.url.value)
    if(theForm.captcha) why = isCaptchaInvalid(theForm.elements.captcha.value, captchaVal)
    //else why = true

    console.log(!why)
    return !why // .indexOf('false') >= 0
}

function isEmpty(val){
    if(!val || val === '-1'){
        return true
    }
    else{
        return false
    }
}

function isCaptchaInvalid(input, answer){
    alert(input + ',' + answer)
    return parseFloat(input) === parseFloat(answer)
}
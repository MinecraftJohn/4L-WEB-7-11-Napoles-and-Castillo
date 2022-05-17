var registrationFormInputName = document.getElementById("registrationFormInputName")
var registrationFormInputEmail = document.getElementById("registrationFormInputEmail")
var registrationFormInputMobileNumber = document.getElementById("registrationFormInputMobileNumber")

function inputNameInvalid () {
    if (registrationFormInputName.value.match(/([A-ZÑ][a-z-ñ.]+)$/)) {
        registrationFormInputName.style.outline = "none"
        registrationFormInputName.style.boxShadow = "none"
    } else {
        registrationFormInputName.style.outline = "2px solid rgba(231,45,52,0.33)"
        registrationFormInputName.style.boxShadow = "0px 0px 16px 0px rgba(231,45,52,0.33)"
    }
}
function inputEmailInvalid () {
    if (registrationFormInputEmail.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        registrationFormInputEmail.style.outline = "none"
        registrationFormInputEmail.style.boxShadow = "none"
    } else {
        registrationFormInputEmail.style.outline = "2px solid rgba(231,45,52,0.33)"
        registrationFormInputEmail.style.boxShadow = "0px 0px 16px 0px rgba(231,45,52,0.33)"
    }
}
function inputMobileNumberInvalid () {
    if (registrationFormInputMobileNumber.value.match(/([09][0-9]{9})/) && registrationFormInputMobileNumber.value.length == 11) {
        registrationFormInputMobileNumber.style.outline = "none"
        registrationFormInputMobileNumber.style.boxShadow = "none"
    } else {
        registrationFormInputMobileNumber.style.outline = "2px solid rgba(231,45,52,0.33)"
        registrationFormInputMobileNumber.style.boxShadow = "0px 0px 16px 0px rgba(231,45,52,0.33)"
    }
}
// /([A-Za-z-Ññ])/g
// /([A-ZÑ][a-z-ñ]+)/g
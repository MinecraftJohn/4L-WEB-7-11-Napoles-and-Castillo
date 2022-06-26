var registrationFormInputName = document.getElementById("registrationFormInputName")
var registrationFormInputEmail = document.getElementById("registrationFormInputEmail")
var registrationFormInputMobileNumber = document.getElementById("registrationFormInputMobileNumber")
var headerMobileNavigationBackground = document.getElementsByClassName("headerMobileNavigationBackground")[0]
var headerMobileNavigationContainer = document.getElementsByClassName("headerMobileNavigationContainer")[0]
var navigationMobileSearchInput = document.getElementsByClassName("navigationMobileSearchInput")[0]
var navigationMobileSearchIcon = document.getElementsByClassName("navigationMobileSearchIcon")[0]
var homeSection = document.getElementsByClassName("homeSection")[0]
var searchSection = document.getElementsByClassName("searchSection")[0]
var searchLoading = document.getElementsByClassName("searchLoading")[0]
var searchLoadingTitle = document.getElementsByClassName("searchLoadingTitle")[0]
var searchLoadingTitleMsg = document.getElementsByClassName("searchLoadingTitleMsg")[0]
var searchLoadingText = document.getElementsByClassName("searchLoadingText")[0]
var searchLoadingButton = document.getElementsByClassName("searchLoadingButton")[0]
var registrationFormInputValidatorIcon0 = document.getElementsByClassName("registrationFormInputValidatorIcon")[0]
var registrationFormInputValidatorIcon1 = document.getElementsByClassName("registrationFormInputValidatorIcon")[1]
var registrationFormInputValidatorIcon2 = document.getElementsByClassName("registrationFormInputValidatorIcon")[2]
var registrationFormInputMessage1 = document.getElementsByClassName("registrationFormInputMessage")[0]
var registrationFormInputMessage2 = document.getElementsByClassName("registrationFormInputMessage")[1]
var registrationFormInputMessage3 = document.getElementsByClassName("registrationFormInputMessage")[2]
var registrationFormInputMessage4 = document.getElementsByClassName("registrationFormInputMessage")[3]
var registrationFormInputMessage5 = document.getElementsByClassName("registrationFormInputMessage")[4]
var footerMessage = "This link is working. Thank me later xD"
var registrationFormGenderCheckFemale = document.getElementById("registrationFormGenderCheckFemale")
var registrationFormGenderCheckMale = document.getElementById("registrationFormGenderCheckMale")
var registrationFormSubmit = document.getElementsByClassName("registrationFormSubmit")[0]
var registrationFormSubmit1 = document.getElementsByClassName("registrationFormSubmit")[1]
var registrationFormDateSelect1 = document.getElementsByClassName("registrationFormDateSelect")[0]
var registrationFormDateSelect2 = document.getElementsByClassName("registrationFormDateSelect")[1]
var registrationFormDateSelect3 = document.getElementsByClassName("registrationFormDateSelect")[2]
var registrationFormEULACheck = document.getElementById("registrationFormEULACheck")
var mobileMediaQuery = window.matchMedia("(max-width: 768px)")
var footerTitle1 = document.getElementsByClassName("footerTitle")[0]
var footerTitle2 = document.getElementsByClassName("footerTitle")[1]
var footerTitle3 = document.getElementsByClassName("footerTitle")[2]
var footerTitle4 = document.getElementsByClassName("footerTitle")[3]
var footerLink1 = document.getElementsByClassName("footerLink")[0]
var footerLink2 = document.getElementsByClassName("footerLink")[1]
var footerLink3 = document.getElementsByClassName("footerLink")[2]
var footerLink4 = document.getElementsByClassName("footerLink")[3]
var footerLink5 = document.getElementsByClassName("footerLink")[4]
var footerLink6 = document.getElementsByClassName("footerLink")[5]
var footerLink7 = document.getElementsByClassName("footerLink")[6]
var footerLink8 = document.getElementsByClassName("footerLink")[7]
var footerLink9 = document.getElementsByClassName("footerLink")[8]
var footerLink10 = document.getElementsByClassName("footerLink")[9]
var footerLink11 = document.getElementsByClassName("footerLink")[10]
var footerLink12 = document.getElementsByClassName("footerLink")[11]
var footerLink13 = document.getElementsByClassName("footerLink")[12]
var footerLink14 = document.getElementsByClassName("footerLink")[13]
var footerLink15 = document.getElementsByClassName("footerLink")[14]
var footerLink16 = document.getElementsByClassName("footerLink")[15]

// Search Functions
navigationMobileSearchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      searchTriggered()
    }
})
function searchTriggered () {
    homeSection.style.display = "none"
    searchSection.style.display = "flex"
    searchLoading.style.display = "block"
    searchLoadingTitle.style.display = "none"
    searchLoadingTitleMsg.style.display = "none"
    searchLoadingButton.style.display = "none"
    searchLoadingText.style.display = "block"
    setTimeout(searchTriggeredError, 5000)
    function searchTriggeredError () {
        searchLoading.style.display = "none"
        searchLoadingText.style.display = "none"
        searchLoadingTitle.style.display = "block"
        searchLoadingTitleMsg.style.display = "block"
        searchLoadingButton.style.display = "block"
        navigationMobileSearchInput.value = ""
    }
}

// Navigation Functions
function openNavigationMobileMenuContainer () {
    headerMobileNavigationBackground.style.display = "block"
    headerMobileNavigationContainer.style.left = "0"
}
function closeNavigationMobileMenuContainer () {
    headerMobileNavigationBackground.style.display = "none"
    headerMobileNavigationContainer.style.left = "-100%"
}

// Registration Form Empty Input Functions
function clearNameInput () {
    registrationFormInputName.value = ""
}
function clearEmailInput () {
    registrationFormInputEmail.value = ""
}
function clearMobileNumberInput () {
    registrationFormInputMobileNumber.value = ""
}

// Registration Form Functions
function inputNameInvalid () {
    registrationFormInputName.style.backgroundColor = "#fff"
    if (registrationFormInputName.value.match(/([A-ZÑ][a-z-ñ.]+)$/)) {
        registrationFormInputName.style.border = "#39aa35 2px solid"
        registrationFormInputValidatorIcon0.innerHTML = "✔"
        registrationFormInputValidatorIcon0.style.color = "#39aa35"
        registrationFormInputMessage1.style.display = "none"
    } else {
        registrationFormInputName.style.border = "#ef2b2f 2px solid"
        registrationFormInputValidatorIcon0.innerHTML = "✖"
        registrationFormInputValidatorIcon0.style.color = "#ef2b2f"
        registrationFormInputMessage1.style.display = "block"
        registrationFormInputMessage1.innerHTML = "Use capital letter every first word. Numbers are not allowed."
    }
}
function inputEmailInvalid () {
    registrationFormInputEmail.style.backgroundColor = "#fff"
    if (registrationFormInputEmail.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        registrationFormInputEmail.style.border = "#39aa35 2px solid"
        registrationFormInputValidatorIcon1.innerHTML = "✔"
        registrationFormInputValidatorIcon1.style.color = "#39aa35"
        registrationFormInputMessage2.style.display = "none"
    } else {
        registrationFormInputEmail.style.border = "#ef2b2f 2px solid"
        registrationFormInputValidatorIcon1.innerHTML = "✖"
        registrationFormInputValidatorIcon1.style.color = "#ef2b2f"
        registrationFormInputMessage2.style.display = "block"
        registrationFormInputMessage2.innerHTML = "Invalid email address."
    }
}
function inputMobileNumberInvalid () {
    registrationFormInputMobileNumber.style.backgroundColor = "#fff"
    if (registrationFormInputMobileNumber.value.match(/(09[0-9]{9})/) && registrationFormInputMobileNumber.value.length == 11) {
        registrationFormInputMobileNumber.style.border = "#39aa35 2px solid"
        registrationFormInputValidatorIcon2.innerHTML = "✔"
        registrationFormInputValidatorIcon2.style.color = "#39aa35"
        registrationFormInputMessage3.style.display = "none"
    } else {
        registrationFormInputMobileNumber.style.border = "#ef2b2f 2px solid"
        registrationFormInputValidatorIcon2.innerHTML = "✖"
        registrationFormInputValidatorIcon2.style.color = "#ef2b2f"
        registrationFormInputMessage3.style.display = "block"
    }
}

// Date of Birth Funcitons
function registrationFormDateSelected () {
    if (registrationFormDateSelect1.value == "MONTH" || registrationFormDateSelect2.value == "DAY" || registrationFormDateSelect3.value == "YEAR") {
        registrationFormInputMessage4.style.display = "block"
        registrationFormInputMessage4.style.margin = "-12px 0 0 0"
    } else {
        registrationFormInputMessage4.style.display = "none"
    }
}

// Gender Functions
function registrationFormGenderFemaleCheck () {
    registrationFormGenderCheckFemale.checked = true
    registrationFormGenderCheckMale.checked = false
}
function registrationFormGenderMaleCheck () {
    registrationFormGenderCheckMale.checked = true
    registrationFormGenderCheckFemale.checked = false
}

// Terms and Condition Funcitons
function registrationFormEULA () {
    if (registrationFormEULACheck.checked == true) {
        registrationFormInputMessage5.style.display = "none"
    }
}

// Submit button Function
function registrationFormSubmitValidator () {
    if (registrationFormInputName.value == "") {
        registrationFormInputName.style.backgroundColor = "#fff"
        registrationFormInputName.style.border = "#ef2b2f 2px solid"
        registrationFormInputValidatorIcon0.innerHTML = "✖"
        registrationFormInputValidatorIcon0.style.color = "#ef2b2f"
        registrationFormInputMessage1.style.display = "block"
        registrationFormInputMessage1.innerHTML = "This field is required."
    } else if (registrationFormInputEmail.value == "") {
        registrationFormInputEmail.style.backgroundColor = "#fff"
        registrationFormInputEmail.style.border = "#ef2b2f 2px solid"
        registrationFormInputValidatorIcon1.innerHTML = "✖"
        registrationFormInputValidatorIcon1.style.color = "#ef2b2f"
        registrationFormInputMessage2.style.display = "block"
        registrationFormInputMessage2.innerHTML = "This field is required."
    } else if (registrationFormDateSelect1.value == "MONTH") {
        registrationFormInputMessage4.style.display = "block"
        registrationFormInputMessage4.style.margin = "-12px 0 0 0"
    } else if (registrationFormDateSelect2.value == "DAY") {
        registrationFormInputMessage4.style.display = "block"
        registrationFormInputMessage4.style.margin = "-12px 0 0 0"
    } else if (registrationFormDateSelect3.value == "YEAR") {
        registrationFormInputMessage4.style.display = "block"
        registrationFormInputMessage4.style.margin = "-12px 0 0 0"
    } else if (registrationFormEULACheck.checked == false) {
        registrationFormInputMessage5.style.display = "block"
    } else if (registrationFormInputName.value.match(/([A-ZÑ][a-z-ñ.]+)$/) === true) {
        registrationFormInputMessage5.style.display = "block"
    } else {
        registrationFormSubmit1.click()
    }
}

// Footer Functions
function mobileMediaQueryFunction(mobileMediaQuery) {
    if (mobileMediaQuery.matches) {
        footerTitle1.setAttribute("onclick","footerLinkShow1()")
        footerTitle2.setAttribute("onclick","footerLinkShow2()")
        footerTitle3.setAttribute("onclick","footerLinkShow3()")
        footerTitle4.setAttribute("onclick","footerLinkShow4()")
    } else {
        footerTitle1.removeAttribute("onclick")
        footerTitle2.removeAttribute("onclick")
        footerTitle3.removeAttribute("onclick")
        footerTitle4.removeAttribute("onclick")
    }
}
mobileMediaQueryFunction(mobileMediaQuery)
mobileMediaQuery.addListener(mobileMediaQueryFunction)
function footerLinkShow1 () {
    footerTitle1.setAttribute("onclick","footerLinkHide1()")
    footerLink1.style.display = "block"
    footerLink2.style.display = "block"
    footerLink3.style.display = "block"
    footerLink4.style.display = "block"
    footerLinkHide2 ()
    footerLinkHide3 ()
    footerLinkHide4 ()
}
function footerLinkShow2 () {
    footerTitle2.setAttribute("onclick","footerLinkHide2()")
    footerLink5.style.display = "block"
    footerLink6.style.display = "block"
    footerLink7.style.display = "block"
    footerLink8.style.display = "block"
    footerLinkHide1 ()
    footerLinkHide3 ()
    footerLinkHide4 ()
}
function footerLinkShow3 () {
    footerTitle3.setAttribute("onclick","footerLinkHide3()")
    footerLink9.style.display = "block"
    footerLink10.style.display = "block"
    footerLink11.style.display = "block"
    footerLink12.style.display = "block"
    footerLinkHide1 ()
    footerLinkHide2 ()
    footerLinkHide4 ()
}
function footerLinkShow4 () {
    footerTitle4.setAttribute("onclick","footerLinkHide4()")
    footerLink13.style.display = "block"
    footerLink14.style.display = "block"
    footerLink15.style.display = "block"
    footerLink16.style.display = "block"
    footerLinkHide1 ()
    footerLinkHide2 ()
    footerLinkHide3 ()
}
function footerLinkHide1 () {
    footerTitle1.setAttribute("onclick","footerLinkShow1()")
    footerLink1.style.display = "none"
    footerLink2.style.display = "none"
    footerLink3.style.display = "none"
    footerLink4.style.display = "none"
}
function footerLinkHide2 () {
    footerTitle2.setAttribute("onclick","footerLinkShow2()")
    footerLink5.style.display = "none"
    footerLink6.style.display = "none"
    footerLink7.style.display = "none"
    footerLink8.style.display = "none"
}
function footerLinkHide3 () {
    footerTitle3.setAttribute("onclick","footerLinkShow3()")
    footerLink9.style.display = "none"
    footerLink10.style.display = "none"
    footerLink11.style.display = "none"
    footerLink12.style.display = "none"
}
function footerLinkHide4 () {
    footerTitle4.setAttribute("onclick","footerLinkShow4()")
    footerLink13.style.display = "none"
    footerLink14.style.display = "none"
    footerLink15.style.display = "none"
    footerLink16.style.display = "none"
}
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
var searchLoadingTitle0 = document.getElementsByClassName("searchLoadingTitle")[0]
var searchLoadingTitle1 = document.getElementsByClassName("searchLoadingTitle")[1]
var searchLoadingImage = document.getElementsByClassName("searchLoadingImage")[0]
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
var registrationSubmittedBackground = document.getElementsByClassName("registrationSubmittedBackground")[0]
var registrationFormDateSelect1 = document.getElementsByClassName("registrationFormDateSelect")[0]
var registrationFormDateSelect2 = document.getElementsByClassName("registrationFormDateSelect")[1]
var registrationFormDateSelect3 = document.getElementsByClassName("registrationFormDateSelect")[2]
var registrationFormEULACheck = document.getElementById("registrationFormEULACheck")

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
    setTimeout(searchTriggeredPrank, 5000)
    function searchTriggeredPrank () {
        searchLoading.style.display = "none"
        searchLoadingText.style.display = "none"
        searchLoadingTitle0.style.display = "block"
        searchLoadingTitle1.style.display = "block"
        searchLoadingImage.style.display = "block"
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
        registrationFormInputMessage2.innerHTML = "This is an invalid email address."
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
        registrationSubmittedBackground.style.display = "flex"
    }
}
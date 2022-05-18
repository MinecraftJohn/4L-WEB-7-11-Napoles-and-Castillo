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
var footerMessage = "This link is working. Thank me later xD"

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
    if (registrationFormInputName.value.match(/([A-ZÑ][a-z-ñ.]+)$/)) {
        registrationFormInputName.style.border = "#39aa35 2px solid"
        registrationFormInputValidatorIcon0.innerHTML = "✔"
        registrationFormInputValidatorIcon0.style.color = "#39aa35"
    } else {
        registrationFormInputName.style.border = "#ef2b2f 2px solid"
        registrationFormInputValidatorIcon0.innerHTML = "✖"
        registrationFormInputValidatorIcon0.style.color = "#ef2b2f"
    }
}
function inputEmailInvalid () {
    if (registrationFormInputEmail.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        registrationFormInputEmail.style.border = "#39aa35 2px solid"
        registrationFormInputValidatorIcon1.innerHTML = "✔"
        registrationFormInputValidatorIcon1.style.color = "#39aa35"
    } else {
        registrationFormInputEmail.style.border = "#ef2b2f 2px solid"
        registrationFormInputValidatorIcon1.innerHTML = "✖"
        registrationFormInputValidatorIcon1.style.color = "#ef2b2f"
    }
}
function inputMobileNumberInvalid () {
    if (registrationFormInputMobileNumber.value.match(/(09[0-9]{9})/) && registrationFormInputMobileNumber.value.length == 11) {
        registrationFormInputMobileNumber.style.border = "#39aa35 2px solid"
        registrationFormInputValidatorIcon2.innerHTML = "✔"
        registrationFormInputValidatorIcon2.style.color = "#39aa35"
    } else {
        registrationFormInputMobileNumber.style.border = "#ef2b2f 2px solid"
        registrationFormInputValidatorIcon2.innerHTML = "✖"
        registrationFormInputValidatorIcon2.style.color = "#ef2b2f"
    }
}
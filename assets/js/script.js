var registrationFormInputName = document.getElementById("registrationFormInputName");
var registrationFormInputEmail = document.getElementById("registrationFormInputEmail");
var registrationFormInputMobileNumber = document.getElementById("registrationFormInputMobileNumber");
var headerMobileNavigationBackground = document.getElementsByClassName("headerMobileNavigationBackground")[0];
var headerMobileNavigationContainer = document.getElementsByClassName("headerMobileNavigationContainer")[0];
var navigationMobileSearchInput = document.getElementsByClassName("navigationMobileSearchInput")[0];
var navigationMobileSearchIcon = document.getElementsByClassName("navigationMobileSearchIcon")[0];
var homeSection = document.getElementsByClassName("homeSection")[0];
var searchSection = document.getElementsByClassName("searchSection")[0];
var searchLoading = document.getElementsByClassName("searchLoading")[0];
var searchLoadingTitle = document.getElementsByClassName("searchLoadingTitle")[0];
var searchLoadingTitleMsg = document.getElementsByClassName("searchLoadingTitleMsg")[0];
var searchLoadingText = document.getElementsByClassName("searchLoadingText")[0];
var searchLoadingButton = document.getElementsByClassName("searchLoadingButton")[0];
var registrationFormInputValidatorIcon = document.getElementsByClassName("registrationFormInputValidatorIcon");
var registrationFormInputMessage = document.getElementsByClassName("registrationFormInputMessage");
var footerMessage = "This link is working. Thank me later xD";
var registrationFormGenderCheckFemale = document.getElementById("registrationFormGenderCheckFemale");
var registrationFormGenderCheckMale = document.getElementById("registrationFormGenderCheckMale");
var registrationFormSubmit = document.getElementsByClassName("registrationFormSubmit");
var registrationFormDateSelect = document.getElementsByClassName("registrationFormDateSelect");
var registrationFormEULACheck = document.getElementById("registrationFormEULACheck");

// Search Functions
navigationMobileSearchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchTriggered();
    }
})
function searchTriggered () {
    homeSection.style.display = "none";
    searchSection.style.display = "flex";
    searchLoading.style.display = "block";
    searchLoadingTitle.style.display = "none";
    searchLoadingTitleMsg.style.display = "none";
    searchLoadingButton.style.display = "none";
    searchLoadingText.style.display = "block";
    setTimeout(searchTriggeredError, 5000);
    function searchTriggeredError () {
        searchLoading.style.display = "none";
        searchLoadingText.style.display = "none";
        searchLoadingTitle.style.display = "block";
        searchLoadingTitleMsg.style.display = "block";
        searchLoadingButton.style.display = "block";
        navigationMobileSearchInput.value = "";
    }
}

// Navigation Functions
function openNavigationMobileMenuContainer () {
    headerMobileNavigationBackground.style.display = "block";
    headerMobileNavigationContainer.style.left = "0";
}
function closeNavigationMobileMenuContainer () {
    headerMobileNavigationBackground.style.display = "none";
    headerMobileNavigationContainer.style.left = "-100%";
}

// Registration Form Empty Input Functions
function clearNameInput () {
    registrationFormInputName.value = "";
}
function clearEmailInput () {
    registrationFormInputEmail.value = "";
}
function clearMobileNumberInput () {
    registrationFormInputMobileNumber.value = "";
}

// Registration Form Functions
function inputNameInvalid () {
    registrationFormInputName.style.backgroundColor = "#fff";
    if (registrationFormInputName.value.match(/([A-ZÑ][a-z-ñ.]+)$/)) {
        registrationFormInputName.style.border = "#39aa35 2px solid";
        registrationFormInputValidatorIcon[0].innerHTML = "✔";
        registrationFormInputValidatorIcon[0].style.color = "#39aa35";
        registrationFormInputMessage[0].style.display = "none";
    } else {
        registrationFormInputName.style.border = "#ef2b2f 2px solid";
        registrationFormInputValidatorIcon[0].innerHTML = "✖";
        registrationFormInputValidatorIcon[0].style.color = "#ef2b2f";
        registrationFormInputMessage[0].style.display = "block";
        registrationFormInputMessage[0].innerHTML = "Use capital letter every first word. Numbers are not allowed.";
    }
}
function inputEmailInvalid () {
    registrationFormInputEmail.style.backgroundColor = "#fff";
    if (registrationFormInputEmail.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        registrationFormInputEmail.style.border = "#39aa35 2px solid";
        registrationFormInputValidatorIcon[1].innerHTML = "✔";
        registrationFormInputValidatorIcon[1].style.color = "#39aa35";
        registrationFormInputMessage[1].style.display = "none";
    } else {
        registrationFormInputEmail.style.border = "#ef2b2f 2px solid";
        registrationFormInputValidatorIcon[1].innerHTML = "✖";
        registrationFormInputValidatorIcon[1].style.color = "#ef2b2f";
        registrationFormInputMessage[1].style.display = "block";
        registrationFormInputMessage[1].innerHTML = "Invalid email address.";
    }
}
function inputMobileNumberInvalid () {
    registrationFormInputMobileNumber.style.backgroundColor = "#fff";
    if (registrationFormInputMobileNumber.value.match(/(09[0-9]{9})/) && registrationFormInputMobileNumber.value.length == 11) {
        registrationFormInputMobileNumber.style.border = "#39aa35 2px solid";
        registrationFormInputValidatorIcon[2].innerHTML = "✔";
        registrationFormInputValidatorIcon[2].style.color = "#39aa35";
        registrationFormInputMessage[2].style.display = "none";
    } else {
        registrationFormInputMobileNumber.style.border = "#ef2b2f 2px solid";
        registrationFormInputValidatorIcon[2].innerHTML = "✖";
        registrationFormInputValidatorIcon[2].style.color = "#ef2b2f";
        registrationFormInputMessage[2].style.display = "block";
    }
}

// Date of Birth Funcitons
function registrationFormDateSelected () {
    if (registrationFormDateSelect[0].value == "MONTH" || registrationFormDateSelect[1].value == "DAY" || registrationFormDateSelect[2].value == "YEAR") {
        registrationFormInputMessage[3].style.display = "block";
        registrationFormInputMessage[3].style.margin = "-12px 0 0 0";
    } else {
        registrationFormInputMessage[3].style.display = "none";
    }
}

// Gender Functions
function registrationFormGenderFemaleCheck () {
    registrationFormGenderCheckFemale.checked = true;
    registrationFormGenderCheckMale.checked = false;
}
function registrationFormGenderMaleCheck () {
    registrationFormGenderCheckMale.checked = true;
    registrationFormGenderCheckFemale.checked = false;
}

// Terms and Condition Funcitons
function registrationFormEULA () {
    if (registrationFormEULACheck.checked == true) {
        registrationFormInputMessage[4].style.display = "none";
    }
}

// Submit button Function
function registrationFormSubmitValidator () {
    if (registrationFormInputName.value == "") {
        registrationFormInputName.style.backgroundColor = "#fff";
        registrationFormInputName.style.border = "#ef2b2f 2px solid";
        registrationFormInputValidatorIcon[0].innerHTML = "✖";
        registrationFormInputValidatorIcon[0].style.color = "#ef2b2f";
        registrationFormInputMessage[0].style.display = "block";
        registrationFormInputMessage[0].innerHTML = "This field is required.";
    } else if (registrationFormInputEmail.value == "") {
        registrationFormInputEmail.style.backgroundColor = "#fff";
        registrationFormInputEmail.style.border = "#ef2b2f 2px solid";
        registrationFormInputValidatorIcon[1].innerHTML = "✖";
        registrationFormInputValidatorIcon[1].style.color = "#ef2b2f";
        registrationFormInputMessage[1].style.display = "block";
        registrationFormInputMessage[1].innerHTML = "This field is required.";
    } else if (registrationFormDateSelect[0].value == "MONTH") {
        registrationFormInputMessage[3].style.display = "block";
        registrationFormInputMessage[3].style.margin = "-12px 0 0 0";
    } else if (registrationFormDateSelect[1].value == "DAY") {
        registrationFormInputMessage[3].style.display = "block";
        registrationFormInputMessage[3].style.margin = "-12px 0 0 0";
    } else if (registrationFormDateSelect[2].value == "YEAR") {
        registrationFormInputMessage[3].style.display = "block";
        registrationFormInputMessage[3].style.margin = "-12px 0 0 0";
    } else if (registrationFormEULACheck.checked == false) {
        registrationFormInputMessage[4].style.display = "block";
    } else if (registrationFormInputName.value.match(/([A-ZÑ][a-z-ñ.]+)$/) === true) {
        registrationFormInputMessage[4].style.display = "block";
    } else {
        registrationFormSubmit[1].click();
    }
}
<?php include "pagephpvariables/variables.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width" initial-scale=1.0>
    <title>WEB - 7 Eleven (Napoles, John M. 4L)</title>
    <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/script.js" defer></script>
</head>
<body>
    <?php include "pagesection/mobilenavigationsection.php"; ?>
    <?php include "pagesection/headersection.php"; ?>
    <div class="homeSection">
        <div class="titleSection">
            <h1 class="titleTitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem sit amet tempor</h1>
            <h2 class="titleSubtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h2>
        </div>
        <div class="registrationFormSection">
            <h1 class="registrationFormTitle">Registration Form</h1>
            <form class="registrationFormContainer" method="POST">
                <div class="registrationFormInputContainer">
                    <p class="registrationFormInputLabel">Name</p>
                    <input type="text" name="signupName" oninput="inputNameInvalid()" 
                    class="registrationFormInputInput" id="registrationFormInputName">
                    <span class="registrationFormInputValidatorIcon" onclick="clearNameInput()"></span>
                    <p class="registrationFormInputMessage"></p>
                </div>
                <div class="registrationFormInputContainer">
                    <p class="registrationFormInputLabel">Email</p>
                    <input type="email" name="signupEmail" oninput="inputEmailInvalid()" 
                    class="registrationFormInputInput" id="registrationFormInputEmail">
                    <span class="registrationFormInputValidatorIcon" onclick="clearEmailInput()"></span>
                    <p class="registrationFormInputMessage"></p>
                </div>
                <div class="registrationFormInputContainer registrationFormMobileContainer">
                    <p class="registrationFormInputLabel">Mobile Number</p>
                    <input type="text" name="signupMobileNumber" oninput="inputMobileNumberInvalid()" 
                    class="registrationFormInputInput" id="registrationFormInputMobileNumber">
                    <span class="registrationFormInputValidatorIcon" onclick="clearMobileNumberInput()"></span>
                    <p class="registrationFormInputMessage">Use 09 at the start. Letters are not allowed. Maximum of 11 character only.</p>
                </div>
                <div class="registrationFormDateContainer">
                    <p class="registrationFormInputLabel">Date of Birth</p>
                    <div class="registrationFormDateDatesContainer">
                        <div class="registrationFormDateDates">
                            <select aria-label="registrationDateMonth" name="signupDateMonth" 
                            class="registrationFormDateSelect" oninput="registrationFormDateSelected()">
                                <option>MONTH</option>
                                <option>January</option>
                                <option>Februay</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            <div class="registrationFormDateSelectArrow"></div>
                        </div>
                        <div class="registrationFormDateDates">
                            <select aria-label="registrationDateDay" name="signupDateDay" 
                            class="registrationFormDateSelect" oninput="registrationFormDateSelected()">
                                <option>DAY</option>
                                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                                <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
                                <option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>
                                <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
                                <option>21</option><option>22</option><option>23</option><option>24</option><option>25</option>
                                <option>26</option><option>27</option><option>28</option><option>29</option><option>29</option>
                                <option>30</option><option>31</option>
                            </select>
                            <div class="registrationFormDateSelectArrow"></div>
                        </div>
                        <div class="registrationFormDateDates">
                            <select aria-label="registrationDateYear" name="signupDateYear" 
                            class="registrationFormDateSelect" oninput="registrationFormDateSelected()">
                                <option>YEAR</option>
                                <option>1995</option><option>1996</option><option>1997</option><option>1998</option><option>1999</option>
                                <option>2000</option><option>2001</option><option>2002</option><option>2003</option><option>2004</option>
                                <option>2005</option><option>2006</option><option>2007</option><option>2008</option><option>2009</option>
                                <option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option>
                                <option>2015</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option>
                                <option>2020</option><option>2021</option><option>2022</option>
                            </select>
                            <div class="registrationFormDateSelectArrow"></div>
                        </div>
                    </div>
                </div>
                <p class="registrationFormInputMessage">This is an invalid date of birth.</p>
                <div class="registrationFormInputContainer registrationFormGenderContainer">
                    <p class="registrationFormInputLabel">Gender</p>
                    <div class="registrationFormGenderCheckContainer">
                        <label for="registrationFormGenderCheckFemale" class="registrationFormGenderFemaleContainer"
                        onchange="registrationFormGenderFemaleCheck()">
                            Female
                            <input type="checkbox" id="registrationFormGenderCheckFemale" 
                            name="signupSex" value="2">
                            <span class="registrationFormGenderCheckFemale"></span>
                        </label>
                        <label for="registrationFormGenderCheckMale" class="registrationFormGenderMaleContainer"
                        onchange="registrationFormGenderMaleCheck()">
                            Male
                            <input type="checkbox" id="registrationFormGenderCheckMale" 
                            name="signupSex" value="1">
                            <span class="registrationFormGenderCheckMale"></span>
                        </label>
                    </div>
                </div>
                <div class="registrationFormEULAContainer">
                    <label for="registrationFormEULACheck">
                        Proin sit amet lectus venenatis, consectetur magna vitae, convallis diam. Nullam iaculis.
                        <input type="checkbox" id="registrationFormEULACheck" onclick="registrationFormEULA()">
                        <span class="registrationFormEULACheck"></span>
                    </label>
                </div>
                <p class="registrationFormInputMessage">Please accept the Terms and Conditions.</p>
                <div class="registrationFormSubmitContainer">
                    <span class="registrationFormSubmit" onclick="registrationFormSubmitValidator()">Submit</span>
                    <button class="registrationFormSubmit" type="submit" name="signupSubmit"style="display: none;">Real Submit</button>
                </div>
            </form>
            <img src="assets/images/cards.png" alt="7 11 cards" class="registrationCards">
            <div class="registrationSubmittedBackground">
                <div class="registrationSubmittedContainer">
                    <svg class="registrationSubmittedIcon" x="0px" y="0px" viewBox="0 0 408.576 408.576" xml:space="preserve">
                        <g>
                            <path d="M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288
                                S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6
                                c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344
                                c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z"/>
                        </g>
                    </svg>
                    <p class="registrationSubmittedTitle">Successfuly registered</p>
                </div>
            </div>
            <?php include "pagephpvariables/signup.php" ?>
        </div>
    </div>
    <?php include "pagesection/searchsection.php"; ?>
    <?php include "pagesection/footersection.php"; ?>
</body>
</html>
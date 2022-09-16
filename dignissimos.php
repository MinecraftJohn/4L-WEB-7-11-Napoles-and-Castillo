<?php 
    include "variables.php";
    session_start();
    error_reporting(0);
    if ($_SESSION['userLoggedIn'] != "") {
        header("Location: praesentium.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width" initial-scale=1.0>
    <title>Login - 7 Eleven (Napoles, John M. 4L)</title>
    <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/script.js" defer></script>
</head>
<body>
    <?php include "mobilenav.php"; ?>
    <?php include "header.php"; ?>
    <div class="homeSection">
        <div class="titleSection">
            <h1 class="titleTitle">Welcome to 7 Eleven project for WEB</h1>
            <h2 class="titleSubtitle">You can login your registered account here on this page. Try it!</h2>
        </div>
        <div class="registrationFormSection">
            <h1 class="registrationFormTitle">Login Account</h1>
            <form class="registrationFormContainer" method="POST">
                <div class="registrationFormInputContainer">
                    <p class="registrationFormInputLabel" style="z-index: 2;">Email</p>
                    <input type="email" name="loginEmail" oninput="inputNameInvalid()" style="z-index: 2;" class="registrationFormInputInput" id="loginFormInputEmail">
                    <p class="registrationFormInputMessage"></p>
                </div>
                <div class="registrationFormSubmitContainer">
                    <button class="registrationFormSubmit" type="submit" name="loginSubmit">Login</button>
                </div>
            </form>
            <img src="assets/images/cards.png" alt="7 11 cards" class="registrationCards">
            <?php include "login.php"; ?>
        </div>
    </div>
    <?php include "search.php"; ?>
    <?php include "footer.php"; ?>
    <script>
        var headerLinkHover = document.getElementsByClassName("headerLinkHover")
        function headerLinkActive () {
            headerLinkHover[0].setAttribute("class","headerLinkHover")
            headerLinkHover[1].setAttribute("class","headerLinkHover")
            headerLinkHover[2].setAttribute("class","headerLinkHover headerLinkActive")
            headerLinkHover[3].setAttribute("class","headerLinkHover")
        }
        headerLinkActive ()
    </script>
</body>
</html>
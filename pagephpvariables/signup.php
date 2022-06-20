<?php
    $mysqlConnect = mysqli_connect("localhost", "root", "", "7eleven");

    $signupName = $_POST['signupName'];
    $signupEmail = $_POST['signupEmail'];
    $signupMobileNumber = $_POST['signupMobileNumber'];
    $signupDateMonth = $_POST['signupDateMonth'];
    $signupDateDay = $_POST['signupDateDay'];
    $signupDateYear = $_POST['signupDateYear'];
    $signupSex = $_POST['signupSex'];

    $signupInsetData = "INSERT INTO users (name, email, mobile_number, date_month, date_day, date_year, sex)
    VALUES ('$signupName', '$signupEmail', '$signupMobileNumber', '$signupDateMonth', '$signupDateDay', '$signupDateYear', '$signupSex');";
    mysqli_query($mysqlConnect, $signupInsetData);

    header("Location: ../dignissimos.php");
?>
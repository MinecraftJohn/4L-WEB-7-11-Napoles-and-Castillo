<?php

    // My Production DataBase Account Online
    // $dbHostName = "sql213.epizy.com";
    // $dbUsername = "epiz_31951098";
    // $dbPassword = "F9CZUvHTtp";
    // $dbName = "epiz_31951098_7eleven";
    // $dbPort = "3306";

    // My Test Database Localhost
    $tdbHostName = "localhost";
    $tdbUsername = "root";
    $tdbName = "7eleven";

    // Connecting Test DataBase
    $mysqlConnect = mysqli_connect("$tdbHostName", "$tdbUsername", "", "$tdbName");
    
    // Connecting Production DataBase
    // $mysqlConnect = mysqli_connect("$dbHostName", "$dbUsername", "$dbPassword", "$dbName", "$dbPort");

    error_reporting(0);
    if (isset($_POST['signupSubmit'])) {
        $signupName = $_POST['signupName'];
        $signupEmail = $_POST['signupEmail'];
        $signupMobileNumber = $_POST['signupMobileNumber'];
        $signupDateMonth = $_POST['signupDateMonth'];
        $signupDateDay = $_POST['signupDateDay'];
        $signupDateYear = $_POST['signupDateYear'];
        $signupSex = $_POST['signupSex'];

        $signupCheckEmail = "SELECT * FROM users WHERE email='$signupEmail'";
        $signupCheckEmailResult = mysqli_query($mysqlConnect, $signupCheckEmail);

        if (!$signupCheckEmailResult->num_rows > 0) {
            $signupInsertData = "INSERT INTO users (name, email, mobile_number, date_month, date_day, date_year, sex)
            VALUES ('$signupName', '$signupEmail', '$signupMobileNumber', '$signupDateMonth', '$signupDateDay', '$signupDateYear', '$signupSex');";
            mysqli_query($mysqlConnect, $signupInsertData);
            echo "<script>document.getElementsByClassName('registrationSubmittedBackground')[0].style.display = 'flex'</script>";
            echo "<script>setTimeout(function(){window.location.href = 'dignissimos.php'}, 3000)</script>";
        } else {
            echo "<script>document.getElementById('registrationFormInputName').value = '$signupName'</script>";
            echo "<script>document.getElementById('registrationFormInputEmail').value = '$signupEmail'</script>";
            echo "<script>document.getElementById('registrationFormInputMobileNumber').value = '$signupMobileNumber'</script>";
            echo "<script>document.getElementsByClassName('registrationFormDateSelect')[0].value = '$signupDateMonth'</script>";
            echo "<script>document.getElementsByClassName('registrationFormDateSelect')[1].value = '$signupDateDay'</script>";
            echo "<script>document.getElementsByClassName('registrationFormDateSelect')[2].value = '$signupDateYear'</script>";
            echo "<script>document.getElementById('registrationFormInputEmail').style.backgroundColor = '#fff'</script>";
            echo "<script>registrationFormInputEmail.style.border = '#ef2b2f 2px solid'</script>";
            echo "<script>document.getElementsByClassName('registrationFormInputValidatorIcon')[1].innerHTML = '✖'</script>";
            echo "<script>document.getElementsByClassName('registrationFormInputValidatorIcon')[1].style.color = '#ef2b2f'</script>";
            echo "<script>document.getElementsByClassName('registrationFormInputMessage')[1].style.display = 'block'</script>";
            echo "<script>document.getElementsByClassName('registrationFormInputMessage')[1].innerHTML = 'This email already exist.'</script>";
        }
    }

    
    
    
    
    
    
?>
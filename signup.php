<?php
    $tdbHostName = "localhost";
    $tdbUsername = "root";
    $tdbName = "7eleven";

    $mysqlConnect = mysqli_connect("$tdbHostName", "$tdbUsername", "", "$tdbName");

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
            echo "<script>
                    document.getElementsByClassName('registrationSubmittedBackground')[0].style.display = 'flex';
                    setTimeout(function(){window.location.href = 'dignissimos.php'}, 3000);
                </script>";
        } else {
            echo "<script>
                    document.getElementById('registrationFormInputName').value = '$signupName';
                    document.getElementById('registrationFormInputEmail').value = '$signupEmail';
                    document.getElementById('registrationFormInputMobileNumber').value = '$signupMobileNumber';
                    document.getElementsByClassName('registrationFormDateSelect')[0].value = '$signupDateMonth';
                    document.getElementsByClassName('registrationFormDateSelect')[1].value = '$signupDateDay';
                    document.getElementsByClassName('registrationFormDateSelect')[2].value = '$signupDateYear';
                    document.getElementById('registrationFormInputEmail').style.backgroundColor = '#fff';
                    document.getElementById('registrationFormInputEmail').style.border = '#ef2b2f 2px solid';
                    document.getElementsByClassName('registrationFormInputValidatorIcon')[1].innerHTML = '✖';
                    document.getElementsByClassName('registrationFormInputValidatorIcon')[1].style.color = '#ef2b2f';
                    document.getElementsByClassName('registrationFormInputMessage')[1].style.display = 'block';
                    document.getElementsByClassName('registrationFormInputMessage')[1].innerHTML = 'This email already exist.';
                </script>";
        }
    }
?>
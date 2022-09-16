<?php
    $tdbHostName = "localhost";
    $tdbUsername = "root";
    $tdbName = "7eleven";

    $mysqlConnect = mysqli_connect("$tdbHostName", "$tdbUsername", "", "$tdbName");

    if (isset($_POST['loginSubmit'])) {
        $loginEmail = $_POST['loginEmail'];

        $loginCheckEmail = "SELECT * FROM users WHERE email='$loginEmail'";
        $loginCheckEmailResult = mysqli_query($mysqlConnect, $loginCheckEmail);

        if ($loginCheckEmailResult->num_rows == 1) {
            $_SESSION['userLoggedIn'] = $loginEmail;
            echo "<script>window.location.href = 'praesentium.php'</script>";
            exit;
        } else {
            echo "<script>
                    document.getElementById('loginFormInputEmail').style.backgroundColor = '#fff';
                    document.getElementById('loginFormInputEmail').style.border = '#ef2b2f 2px solid';
                    document.getElementById('loginFormInputEmail').value = '$loginEmail';
                    document.getElementsByClassName('registrationFormInputMessage')[0].style.display = 'block';
                    document.getElementsByClassName('registrationFormInputMessage')[0].innerHTML = 'Incorrect email address';
                </script>";
        }
    }
?>
<?php
    include "variables.php";
    session_start();
    error_reporting(0);
    if ($_SESSION['userLoggedIn'] == "") {
        header("Location: dignissimos.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width" initial-scale=1.0>
    <title>Home - 7 Eleven (Napoles, John M. 4L)</title>
    <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/script.js" defer></script>
</head>
<body>
    <?php include "mobilenav.php"; ?>
    <?php include "header.php"; ?>
    <div class="homeSection">
        <div class="titleSection">
            <h1 class="titleTitle" style="margin-bottom: 128px;">Welcome to 7 Eleven your inconvenient store!</h1>

            <?php
                $mysqlConnect = mysqli_connect("localhost", "root", "", "7eleven");
                $sessionUserLoggedIn = $_SESSION['userLoggedIn'];
                $getUseData = mysqli_fetch_assoc(mysqli_query($mysqlConnect, "SELECT * FROM users WHERE email='$sessionUserLoggedIn'"));
            ?>

            <h2 class="titleSubtitle" style="text-align: center"><?php echo $getUseData['name'] ?></h2>
            <p class="getDataLabel">Full Name</p>
            <h2 class="titleSubtitle" style="text-align: center"><?php echo $getUseData['email'] ?></h2>
            <p class="getDataLabel">Email Address</p>
            <h2 class="titleSubtitle" style="text-align: center">
                <?php
                    if ($getUseData['mobile_number'] == "") {
                        echo "N/A";
                    } else {
                        echo $getUseData['mobile_number'];
                    }
                ?>
            </h2>
            <p class="getDataLabel">Mobile Number</p>
            <h2 class="titleSubtitle" style="text-align: center"><?php echo $getUseData['date_month']." ".$getUseData['date_day'].", ".$getUseData['date_year'] ?></h2>
            <p class="getDataLabel">Date of Birth</p>
            <h2 class="titleSubtitle" style="text-align: center">
                <?php
                    switch ($getUseData['sex']) {
                        case 1:
                            echo "Male";
                            break;
                        case 2:
                            echo "Female";
                            break;
                        
                        default:
                            echo "N/A";
                            break;
                    }
                ?>
            </h2>
            <p class="getDataLabel">Gender</p>
            <form method="post" style="background: rgb(231 45 52 / 20%); border: 2px solid #e72d34; padding: 16px 48px; text-align: center; margin: 64px 0;">
                N/A means no answer. You may have registered on desktop or you did not fill the field on registration form. To switch account or log the user out, please click 
                <input type="submit" name="logOut" value="Log out" style="font-size:16px; color: blue; background: none; border: none; cursor: pointer;">
                to sign out.
            </form>
        </div>
    </div>
    <?php include "logout.php"; ?>
    <?php include "search.php"; ?>
    <?php include "footer.php"; ?>
    <script>
        var headerLinkHover = document.getElementsByClassName("headerLinkHover")
        function headerLinkActive () {
            headerLinkHover[0].setAttribute("class","headerLinkHover headerLinkActive")
            headerLinkHover[1].setAttribute("class","headerLinkHover")
            headerLinkHover[2].setAttribute("class","headerLinkHover")
            headerLinkHover[3].setAttribute("class","headerLinkHover")
        }
        headerLinkActive ()
    </script>
</body>
</html>
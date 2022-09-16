<?php
    $tdbHostName = "localhost";
    $tdbUsername = "root";
    $tdbName = "7eleven";

    $mysqlConnect = mysqli_connect("$tdbHostName", "$tdbUsername", "", "$tdbName");

    if (isset($_POST['logOut'])) {
        session_unset();
        echo "<script>window.location.href = 'index.php'</script>";
    }
?>
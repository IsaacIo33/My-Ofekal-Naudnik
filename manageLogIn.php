<?php
session_start();


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading...</title>
    <style>
        body {
            font-family: sans-serif;
            cursor: default;
            user-select: none;
            text-align: center;
            background-color: lime;
            color: green;
        }

        input,
        textarea,
        button {
            padding: 10px;
            background-image: linear-gradient(white, gray);
            outline: none;
        }

        .bar {
            height: 10px;
            width: 100%;
            background-color: lightgray;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .step {
            height:10px;
            width: 50%;
        }

        .active {
            background-color: cyan;
        }


    </style>
</head>

<body>

<h2>Ofekal Cloud Account Setup</h2>

    <div class="bar">
        <div class="step"></div>
        <div class="step active"></div>
    </div>

    <h1>Loading...</h1>

    <?php

    // password%%%bio

    include "assets/access.php";


    $username = htmlspecialchars($_POST["name"]);
    $password = htmlspecialchars($_POST["password"]);
    $startingFiles = file_get_contents("dirBackup.txt");

    if (!file_exists("codeWithTletku/accounts/$username.txt")){
        echo "Vikenait Productions will Confirm your Account Creation...";
        $id = rand(0, 90000000);
        mail("someone@example.com", "New Ofekal Account #$id", "The users Username is $username and their Password is $password. To confirm their Account Creation click the following link: https://joseph2.farleyengineeredsolutions.org/naudnik/processLogIn.php?username=$username&password=$password&vikenaitVerified=true or if your on XAMMP http://localhost/ofekal/processLogIn.php?username=$username&password=$password&vikenaitVerified=true", "From: someone@example.com");
    } else if (getPassword($username) === $password) {
        $_SESSION["username"] = $username;
        echo "Success!";
        echo "<script>window.location.href='index.php';</script>";
    } else {
        echo "Log In error.";
    }

    ?>

    <p>Accounts System created by IO Studio.</p>
</body>

</html>
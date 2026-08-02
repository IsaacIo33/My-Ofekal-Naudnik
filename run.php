<?php
session_start();

$action = htmlspecialchars($_GET["action"]);

include "assets/access.php";

if ($action === "logout"){
    $_SESSION["username"] = null;
    echo "<script>window.location.href='index.php';</script>";
} else if ($action === "sync"){
    setTheme($_SESSION["username"], $_GET["theme"]);
    setThemeColor($_SESSION["username"], $_GET["themeColor"]);
    setLightThemeColor($_SESSION["username"], $_GET["lightThemeColor"]);
    setDarkThemeColor($_SESSION["username"], $_GET["darkThemeColor"]);
    setWindowBarPosition($_SESSION["username"], $_GET["windowBarPosition"]);
    setFont($_SESSION["username"], $_GET["font"]);
    setNotification($_SESSION["username"], $_GET["notification"]);
    setNavFloatE($_SESSION["username"], $_GET["navFloatE"]);
    setNavInvisibleE($_SESSION["username"], $_GET["navInvisibleE"]);
    setNavBlurE($_SESSION["username"], $_GET["navBlurE"]);
    setAppUsage($_SESSION["username"], $_GET["appUsage"]);
    setFileUsage($_SESSION["username"], $_GET["fileUsage"]);
    setJunkUsage($_SESSION["username"], $_GET["junkUsage"]);
    echo "<script>window.location.href='index.php';</script>";
} else if ($action === "cloudFile"){
    setDir($_SESSION["username"], $_POST["dir"]);
    setProfilePicture($_SESSION["username"], $_POST["profile"]);
    setFolderGraphic($_SESSION["username"], $_POST["folderGraphic"]);
    setWallpaper($_SESSION["username"], $_POST["wallpaper"]);
    setApps($_SESSION["username"], $_POST["insApps"]);
    file_put_contents("codeWithTletku/applications.txt", $_POST["apps"]);
}

?>
<?php

$username = $_GET["username"];
$password = $_GET["password"];
$vikenaitVerified = $_GET["vikenaitVerified"];

if ($vikenaitVerified){
    $startingFiles = file_get_contents("dirBackup.txt");

        file_put_contents("codeWithTletku/accounts/$username.txt", "$password%%%Ofekal User%%%images/wallpaper.png%%%
   $startingFiles%%%images/icon.png%%%light%%%green%%%lime%%%darkgreen%%%top%%%ubuntu%%%images/folder.png%%%sounds/tletuTalk.mp3%%%false%%%false%%%false%%%10%%%10%%%0%%%Auka Web Browser^^^IO Posts^^^Calculator^^^Clock^^^Settings^^^Notepad^^^Paint^^^Media Viewer^^^Toolbox^^^Terminal");
        $_SESSION["username"] = $username;
        echo "Success!";
        // mkdir("codeWithTletku/cloudStorage/$username");
        // mkdir("codeWithTletku/cloudStorage/$username/My Computer");
        echo "<script>window.location.href='index.php';</script>";
        
}


?>
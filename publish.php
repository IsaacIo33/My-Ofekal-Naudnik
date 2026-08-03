<?php
session_start();

$khae = $_SESSION["username"];

if ($_POST["name"] && $_POST["content"] && isset($_SESSION["username"])){
    file_put_contents("codeWithTletku/projects/".$_POST["name"].".txt", $_POST["content"]);
    file_put_contents("codeWithTletku/projects2accounts/".basename($_POST["name"]).".txt", $khae); // Add basename so People can't move folders to put their Project in.
}

?>
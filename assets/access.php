<?php

function getPassword($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[0];
}

function getBio($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[1];
}


function getWallpaper($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[2];
}

function setWallpaper($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[2] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getDir($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[3];
}

function setDir($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[3] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getProfilePicture($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[4];
}

function setProfilePicture($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[4] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getTheme($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[5];
}

function setTheme($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[5] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getThemeColor($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[6];
}

function setThemeColor($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[6] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getLightThemeColor($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[7];
}

function setLightThemeColor($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[7] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getDarkThemeColor($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[8];
}

function setDarkThemeColor($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[8] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getWindowBarPosition($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[9];
}

function setWindowBarPosition($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[9] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getFont($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[10];
}

function setFont($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[10] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getFolderGraphic($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[11];
}

function setFolderGraphic($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[11] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getNotification($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[12];
}

function setNotification($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[12] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getNavFloatE($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[13];
}

function setNavFloatE($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[13] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getNavInvisibleE($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[14];
}

function setNavInvisibleE($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[14] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getNavBlurE($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[15];
}

function setNavBlurE($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[15] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getAppUsage($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[16];
}

function setAppUsage($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[16] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getFileUsage($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[17];
}

function setFileUsage($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[17] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getJunkUsage($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[18];
}

function setJunkUsage($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[18] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

function getApps($username){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    return $allContents[19];
}

function setApps($username, $value){
    $allContents = explode("%%%", file_get_contents("codeWithTletku/accounts/$username.txt"));
    $allContents[19] = $value;
    $allContents = implode("%%%", $allContents);
    file_put_contents("codeWithTletku/accounts/$username.txt", $allContents);
}

?>
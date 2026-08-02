<?php


$name = htmlspecialchars($_POST["name"]);

$email = htmlspecialchars($_POST["email"]);

$message = htmlspecialchars($_POST["message"]);

$yourEmail = "someone@example.com";



echo "

<form id='form' method='post' action='https://ioposts.farleyengineeredsolutions.com/sendInboxMessage.php?from=ofekal' style='opacity:0%;'>
<br>
<input style='opacity:0%;' value='". $yourEmail ."' name='userEmail'
readonly>
<br>
<input name='email' placeholder='Enter the users Username to send a
Message to.' style='width:80%;' value='Vikenait Productions' readonly>

<textarea name='message' placeholder='Enter Message content'
style='width:80%;' readonly>!_OFS: Name:$name; Email:$email; Message: $message</textarea>
<br>
<br><br>
</form>


<script>
document.getElementById('form').submit();
</script>


";



?>

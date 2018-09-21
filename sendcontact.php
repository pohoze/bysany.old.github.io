<?php

// Define some constants
define( "RECIPIENT_NAME", "Alexandr Gorelenkov" ); //UPDATE THIS TO YOUR NAME
define( "RECIPIENT_EMAIL", "bysany.design@gmail.com" ); //UPDATE THIS TO YOUR EMAIL ID
define( "EMAIL_SUBJECT", "Hello bro" ); //UPDATE THIS TO YOUR SUBJECT

// Read the form values
$success = false;
$senderName = isset( $_POST['name'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$original_message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";
$message = 'Name: '.$senderName.'<br/>Email: '.$senderEmail.'<br/>Message: '.$original_message;

// If all values exist, send the email
if ( $senderName && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderName . " <" . $senderEmail . ">\n";
  $headers .= "MIME-Version: 1.0\n"; 
  $headers .= "Content-Type: text/HTML; charset=ISO-8859-1\n";
  $success = mail( $recipient, EMAIL_SUBJECT, $message, $headers );
}

if ( $success )
{
?>
	<script>
		window.location='thanks.html';
	</script>
<?php
}
else
{
	echo "<h1>There was a problem sending your message. Please try again.</h1>";
}
?>



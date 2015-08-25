
<?php
	//Positive message to be printed when form was successfully sent.
	$positive = "<center style='color: green;'>Your form has been submitted; I will respond within 24 hours.</center>";
	//Negative message to be printed when form is left empty.
	$negative = "<center style='color: red;'>Whoops! Looks like some fields were left empty; please try again.</center>";
	//Error message to be printed when the email could not be sent.
	$error = "<center style='color: red;'>Sorry, the email could not be sent; try again.</center>";

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = "trey.a.hope@gmail.com";
	$from = $email;
	$subject = "Contact - ".$name;

	//If form is empty...
	@mail("trey.a.hope@gmail.com", "Test", "Test Message");
	if($name == "" || $email == "" || $message == ""){
			echo "$negative";
	}
	else if(filter_var($email, FILTER_VALIDATE_EMAIL)){  
		if(@mail($to, $subject, $message)){
			echo $positive; 
		}else{
			echo "<center>Failure</center>";
		}
	}
	//header("Location: index.html");

?>
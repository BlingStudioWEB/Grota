<?php
    $to = "brikogaming@gmail.com";

    if (isset($_POST["name"], $_POST["phone"], $_POST["email"], $_POST["message"])){
        $name = $_POST["name"];
        $phone = $_POST["phone"];
	    $email = $_POST["email"];
	    $message = $_POST["message"];

        $subject = "Message from " . $name . " ( " . $email . " )";
        $headers = "From: " . $email . " Phone: " . $phone . "\r\n";

        mail($to, $subject, $message, $headers);


   };

?>

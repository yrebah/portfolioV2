<?php

require './common.php';

$requestValue = "";

$requestValue = $_POST['request'];

if($requestValue != null){

  switch ($requestValue) {

    // Get availables languages
    case "getLanguages":
      getLanguages();
    break;

    // Get availables themes
    case "getThemes":
      getThemes();
    break;

    // Set message from contact form
    case "setMessage":
      setNewMessageToDB(
        getDatetimeNow(),
        $_POST['mail'],
        $_POST['subject'],
        $_POST['message']
      );
    break;

  }
}

?>

<?php

function getDatetimeNow() {
  $tz_object = new DateTimeZone('Europe/Paris');
  $datetime = new DateTime();
  $datetime->setTimezone($tz_object);
  return $datetime->format('Y\-m\-d\ h:i:s');
}

function getConnection() {

  $servername = "*******";
  $username = "*******";
  $password = "*******";
  $dbname = "*******";
  
  $conn = new mysqli($servername, $username, $password, $dbname);
  
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } else{
    return $conn;
  }

}

function getLanguages(){

  $return_arr = array();

  $query = "SELECT * FROM languages_x79";

  $result = mysqli_query(getConnection(),$query);

  while($row = mysqli_fetch_array($result)){
    $lang = $row['lang'];
    $initial = $row['initial'];

    $return_arr[] = array(
      "lang" => $lang,
      "initial" => $initial
    );
}

// Encoding array in JSON format
echo json_encode($return_arr);

}

function getThemes(){

  $return_arr = array();

  $query = "SELECT * FROM themes_x79";

  $result = mysqli_query(getConnection(),$query);

  while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $tr = $row['tr'];

    $return_arr[] = array(
      "id" => $id,
      "tr" => $tr
    );
}

// Encoding array in JSON format
echo json_encode($return_arr);

}

function setNewMessageToDB($creation, $mail, $subject, $message){

  getConnection();

  if($creation && $mail && $subject && $message){
    $sql = "INSERT INTO message_x79 (creation, mail, subject, message) VALUES ('$creation', '$mail', '$subject', '$message')";
  }
  
  if (getConnection()->query($sql) === TRUE) {
    echo "success";
  } else {
    echo "Error: " . $sql . "<br>" . getConnection()->error;
  }

}

?>

<?php

    $name= $_GET['newName'];
    $surname=$_GET['newSurname'];
    $email=$_GET['newEmail'];
    $pass= md5($_GET['newPassword']);
    $type=1;
    if (empty($name)) {

      echo "error";
      exit;

    }
    $con=new mysqli("localhost","root","","databaseforb03");
    if(!$con){
      die($con->error);
    }
    $query = "INSERT INTO users VALUES(null,'$name','$surname','$email','$pass',$type)";
    if($con->query($query)){
      // header("Location:account.php");
      // console.log("Success with php");
      echo "You succesfully registered!";
    }else{
      echo $con->error;

    }

exit;

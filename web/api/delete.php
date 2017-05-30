<?php

  $con=new mysqli("localhost","root","","databaseforb03");
  if(!$con){
    die($con->error);
  }
  $query = "DELETE FROM crt WHERE pid='".$_GET['pid']."'";


  if($con->query($query)){
    echo "succesfully deleted!";
  }else{
    echo $con->error;
  }


?>

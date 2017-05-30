<?php

    $name= $_GET['newPName'];
    $code=$_GET['newPCode'];
    $price=$_GET['newPPrice'];
    $image= $_GET['newPImg'];
    $type=1;
    if (empty($name)) {

      echo "error";
      exit;

    }
    $con=new mysqli("localhost","root","","databaseforb03");
    if(!$con){
      die($con->error);
    }
    $query = "INSERT INTO products VALUES(null,'$code','$name','$image',$price)";
    if($con->query($query)){

      echo "You succesfully added product!";
    }else{
      echo $con->error;

    }

exit;

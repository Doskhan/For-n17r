<?php

  $con=new mysqli("localhost","root","","databaseforb03");
  if(!$con){
    die($con->error);
  }

  $a=1;
  $query2 = "SELECT crt.quantity FROM crt WHERE uid='".$_GET['uid']."' AND pid='".$_GET['pid']."'";
  if($con->query($query2)){
    $result1=$con->query($query2);

    $row_cnt1 = mysqli_num_rows($result1);
    if($row_cnt1>0){

      $row=$result1->fetch_array();

      $row['quantity']=$row['quantity']+1;
      $query = "UPDATE crt SET quantity='".$row['quantity']."' WHERE pid='".$_GET['pid']."' ";
      if($con->query($query)){
        echo "updated quantity";
      }
      else{
      echo  $con->error;}
    }else{
      $query1 = "INSERT INTO crt VALUES( '".$_GET['uid']."','".$_GET['pid']."','".$a."')";
      if($con->query($query1)){
        echo "Added product";
      }

      }
  }else{
  echo $con->error;
}

?>

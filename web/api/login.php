<?php
  $login= $_GET["username"];
  $pass= md5($_GET["password"]);
  if (empty($login)) {

    echo "error";
    exit;

  }
  $people=array();
  $con = new mysqli("localhost","root","","databaseforb03");
  if(!$con){
    die($con->error);
  }
  $query = "SELECT * FROM users WHERE email= '".$login."' AND password = '".$pass."'";
  $result=$con->query($query);
  if ($result) {
    # code...
  $count = mysqli_num_rows($result);
  if ($count>0) {

    for ($cr=0; $cr <$count ; $cr++) {
      $row=$result->fetch_array();
      $people[$cr]['id'] = $row['id'];
      $people[$cr]['name']  = $row['name'];
      $people[$cr]['surname'] = $row['surname'];
      $people[$cr]['email'] = $row['email'];
    }
}else {
  echo "count error";
}
}else {
  echo "reuslt error";
}




  $json = json_encode($people);
  echo $json;
  exit;

?>

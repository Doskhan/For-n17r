<?php
$con = new mysqli("localhost","root","","databaseforb03");
if(!$con){
  die($con->error);
}
// Get the data
$uid=$_GET["uid"];
$people = array();
// $query = "SELECT * FROM users";
$query = "SELECT products.product_id, products.product_name, products.product_code, products.product_image, products.product_price, crt.quantity
FROM crt,products
WHERE products.product_id=crt.pid AND crt.uid='".$uid."'";
$result=$con->query($query);


if($result)
{
  $count = mysqli_num_rows($result);
  for ($cr=0; $cr <$count ; $cr++) {
    $row=$result->fetch_array();
    $people[$cr]['id'] = $row['product_id'];
    $people[$cr]['name'] = $row['product_name'];
    $people[$cr]['code'] = $row['product_code'];
    $people[$cr]['price'] = $row['product_price'];
    $people[$cr]['quantity'] = $row['quantity'];
  }

}

$json = json_encode($people);
echo $json;
exit;

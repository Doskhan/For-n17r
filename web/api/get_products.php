<?php
$con = new mysqli("localhost","root","secret","databaseforb03");
if(!$con){
  die($con->error);
}
// Get the
$people = array();
$query = "SELECT * FROM products";

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
    $people[$cr]['image'] = $row['product_image'];
  }

}

$json = json_encode($people);
echo $json;
exit;

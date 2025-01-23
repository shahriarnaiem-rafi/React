<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
$path = explode('/', $_SERVER['REQUEST_URI']);
$id = $_GET['id'];

$conn = mysqli_connect("localhost", "root", "", "first_backend");
$result= mysqli_query($conn, 'DELETE FROM user where id=' . $id);
if($result)
{
  echo json_encode(["success"=>"User Record Deleted Successfully"]);
  return;
} else {
  echo json_encode(["Please Check the User Data!"]);
  return;
}
?>
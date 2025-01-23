<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
$conn = mysqli_connect("localhost", "root", "", "first_backend");
$userpostdata = json_decode(file_get_contents("php://input"));
//echo "sucess data";
//print_r($userpostdata); die;
$name = $userpostdata->name;
$email = $userpostdata->email;
$phone = $userpostdata->phone;
$result = mysqli_query($conn, "INSERT INTO user (name, email, phone) 
VALUES('$name', '$email', '$phone')");

if ($result) {
    echo json_encode(["success" => "User Added Successfully"]);
    return;
} else {
    echo json_encode(["success" => "Please Check the User Data!"]);
    return;
}

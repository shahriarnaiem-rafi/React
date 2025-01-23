<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');

    $conn=mysqli_connect("localhost","root","","first_backend");
    $query="SELECT * FROM user ORDER BY id DESC";
    $mysqli=mysqli_query($conn,$query);

    $json_data=array();
    while($row = mysqli_fetch_assoc($mysqli)){
        $json_data[]=$row;
    }
    echo json_encode(['phpresult'=>$json_data]);
?>
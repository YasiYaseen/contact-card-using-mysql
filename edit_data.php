<?php
require_once __DIR__ ."/connect.php";

$id=$_POST["id"];
$name=$_POST["name"];
$number=$_POST["number"];

 
$edit="UPDATE contact_card SET name = '$name', number = '$number' WHERE id = '$id'";
if($conn->query($edit)===TRUE){
    echo json_encode(["success" => "Database edited"]);
}else{
    echo json_encode(["error" => "Database query failed"]);
}

?>
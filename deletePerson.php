<?php
require_once __DIR__ ."/connect.php";

$id=$_POST["id"];

$delete="DELETE FROM contact_card WHERE id='$id'";
if($conn->query($delete)===TRUE){
    echo json_encode(["success" => "Deletion Succesful"]);
}
else{
    echo json_encode(["error" => "An error occured"]);
}
?>
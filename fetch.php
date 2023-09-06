<?php
require_once __DIR__ . "/connect.php";

$query="SELECT name,number,id FROM contact_card";
$result=$conn->query($query);
if($result){
    $data=$result->fetch_all(MYSQLI_NUM);
    echo json_encode($data);
}
else{
    echo json_encode(["error" => "Database query failed"]); 
}

?>
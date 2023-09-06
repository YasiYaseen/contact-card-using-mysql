<?php
require_once __DIR__ ."/connect.php";

$name=$_POST["name"];
$number=$_POST["number"];

$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    
    die("connection failed".$conn->connect_error);

}
$query="INSERT INTO contact_card (name,number) VALUES ('$name','$number')";
if($conn->query($query) === TRUE){
    $ar = array(1,);
}
else{
    $ar = array(0);
}
echo json_encode($ar);

?>
<?php
require_once __DIR__ . "/connect.php";

// Assuming you are receiving the input via POST
$word = $_POST["word"];

// Prepare the SQL query with a placeholder
$query = "SELECT id,name FROM contact_card WHERE name LIKE ?";

// Create a prepared statement
$stmt = $conn->prepare($query);

if ($stmt) {
    // Bind the parameter and execute the query
    $searchPattern = $word . '%';
    $stmt->bind_param("s", $searchPattern);
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    if ($result) {
        // Fetch data and encode as JSON
        $data = $result->fetch_all(MYSQLI_NUM);
        echo json_encode($data);
    } else {
        echo json_encode(["error" => "Database query failed"]);
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(["error" => "Failed to prepare statement"]);
}

// Close the database connection
$conn->close();
?>

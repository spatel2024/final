<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["description"];
    $comments = $_POST["comments"];
    
    // Process Likert scale questions
    $q1 = $_POST["q1"];
    $q2 = $_POST["q2"];
    // Add more questions as needed

    // Store the survey data in a file (you can use a database instead)
    $surveyData = "Name: $name\nDescription: $description\nComments: $comments\n";
    $surveyData .= "Statement 1: $q1\nStatement 2: $q2\n";
    // Add more questions as needed

    $file = "survey_responses.txt";
    file_put_contents($file, $surveyData, FILE_APPEND);

    // Redirect the user to a thank you page
    header("Location: thank_you.html");
} else {
    // If the request method is not POST, redirect to the form page
    header("Location: survey.html");
}
?>

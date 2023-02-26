<?php
$mysqli_connection = new mysqli(
    getenv('DATABASE_HOSTNAME'),
    getenv('DATABASE_USERNAME'),
    getenv('DATABASE_PASSWORD'),
    getenv('DATABASE_NAME')
);

if($mysqli_connection->connect_error)
{
    die("The database connection failed.");
}
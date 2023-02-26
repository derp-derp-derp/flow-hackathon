<?php
function general_query($sql_statement, $return_type = MYSQLI_ASSOC){
    global $mysqli_connection;
    $result = $mysqli_connection->query($sql_statement);
    $query_result = $result->fetch_all($return_type);
    $result->close();
    return $query_result;
}
<?php

header('Content-Type: application/json');

include 'data.php';
include 'control.php';

echo json_encode($graphs);

 ?>

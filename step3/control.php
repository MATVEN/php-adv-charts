<?php

header('Content-Type: application/json');

include 'data.php';

$access = $_GET["level"];

$resGraphs = [];

foreach ($graphs as $name => $graph) {

  $gAccess = $graph['access'];

  if ($gAccess == 'guest') {

    $resGraphs[$name] = $graph;
  }
  if ($gAccess == 'clevel' && $level == 'clevel') {

    $resGraphs[$name] = $graph;
  }
  if ($gAccess == 'employee'
      && ($access == 'employee' || $level == 'clevel')) {

      $resGraphs[$name] = $graph;
  }
}

echo json_encode($resGraphs);

 ?>

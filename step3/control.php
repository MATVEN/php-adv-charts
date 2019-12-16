<?php

include 'data.php';

// lettura parametro Get

foreach ($graphs as $key => $value) {

  unset($graphs[$key]);
}

 ?>


<?php
  include "data.php";
  $access = $_GET["level"];

  foreach ($graphs as $key => $value) {

    if($access == "guest"{
      echo $graphs['fatturato']);

    }if($access == "employee"){
      echo $graphs['fatturato'])
      .$graphs['fatturato_by_agent']);

    }elseif ($access == "clevel") {
      echo $graphs;
    }
  }
 ?>

 if( $value["access"]=="clevel"){
   unset($graphs[$key]);
 } elseif ($value["access"]=="employee") {
   unset($graphs[$key]);
 }

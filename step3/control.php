<?php

include 'data.php';

// lettura parametro Get

foreach ($graphs as $key => $value) {
  
  unset($graphs[$key]);
}

 ?>


<?php /* <?php
  include "data.php";
  $access = $_GET["level"];

  foreach ($graphs as $key => $value) {

    if($access=="employee" && $value["access"]=="clevel"){
      unset($graphs[$key]);
    } else if($access=="guest"){
      if( $value["access"]=="clevel"){
        unset($graphs[$key]);
      } elseif ($value["access"]=="employee") {
        unset($graphs[$key]);
      }
    }
  }
 ?>

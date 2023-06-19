<?php
function koneksi()
{
  $server = "localhost";
  $username = "root";
  $password = "";
  $database = "web_lanjut_c1";
  return mysqli_connect($server, $username, $password, $database);
}

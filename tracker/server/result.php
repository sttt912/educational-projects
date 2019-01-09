<?php
/*Author: sttt912(https://github.com/sttt912)*/

require_once('inc/head.php');

if (isset($_POST['valut'])) {$valut1 = $_POST['valut']; if ($valut1 == '') {unset($valut1);}}

$json_string= file_get_contents("https://currate.ru/api/?get=rates&pairs=$valut1&key=key");
$obj=json_decode($json_string);

echo '<b>Ваша валютная пара:</b> '.$valut1.'<br/>';

foreach($obj->data as $val){
  echo '<b>Текущая цена:</b> '.$val.'<br/>';
}
  
require_once('inc/foot.php');
?>
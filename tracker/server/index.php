<?php
/*Author: sttt912(https://github.com/sttt912)*/
/*http://www.codeisart.ru/blog/creating-parsing-json-data-php/*/


require_once('inc/head.php');

$json_string= file_get_contents("https://currate.ru/api/?get=currency_list&key=key");
$obj=json_decode($json_string);


 echo '<form action="result.php" method="post">';
 echo '<select name="valut"><option disabled value="">Выберите один из вариантов:</option>';
	foreach($obj->data as $val){
		echo '<option>'.$val.'</option>';
    
	}
  echo '</select><ul><input id="submit" value="Отправить" type="submit" /></ul></form>';
  
  
require_once('inc/foot.php');
?>
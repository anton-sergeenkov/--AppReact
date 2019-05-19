<?php
    header('Access-Control-Allow-Origin: *');
    $json = file_get_contents('guitar-catalog.json');
    
	if(isset($_GET['id'])){
		$id = $_GET['id'];
		
		$arr = json_decode($json);
	    
		foreach ($arr as $item) {
			if ($item->id == $id) {
				echo json_encode($item);
			}
		}
		
	} else {
		echo $json;
	}

?>

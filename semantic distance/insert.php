<?php

//$ngrams = file("w2c2.txt");

$db = new PDO('sqlite:semantic_distance.db3');

$do = $db->prepare("INSERT OR REPLACE INTO two_grams (count, token1, token2, pos1, pos2) VALUES (?,?,?,?,?)");

$db->beginTransaction();

foreach ($ngrams as $line_num=>$line) {
    
    $line = trim($line);
    $values = preg_split('/\s+/', $line);
    
    $do->execute($values);
    //print_r($do->errorInfo());
    //print_r($values);
    //echo $result;
}
    
$db->commit();

//$do->execute($test);

//$query = $dbhandle->queryExec("UPDATE users SET email='jDoe@example.com' WHERE username='jDoe'", $error);
//if (!$query) {
//    exit("Error in query: '$error'");
//} else {
//    echo 'Number of rows modified: ', $dbhandle->changes();
//}
?>
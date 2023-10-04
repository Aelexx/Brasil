<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
/*
    echo 'I do it for the first time php write - Yeah right';
   // $name = 'Alex';
   // echo $name; 
   // $nameArr = [1, 2];
   // echo $nameArr;
    $str = ' ';
    echo $str;
  // echo $_SERVER["DOCUMENT_ROOT"];
    //echo "<br>";
    //echo $_SERVER["PHP_SELF"];
   // echo $_SERVER["SERVER_NAME"];
   // echo $_SERVER["REQUEST_METHOD"];
    //echo '<br>';
    $_SESSION["username"] = "Madison";
    echo $_SESSION["username"];
   // echo '<br>';
    //echo $_GET["eyecolor"];
    */
    $a = 'Hey';
    $b = 'my love!';
    echo $c = $a .' '. $b;
    echo '<br>';
    echo 43.67 + 23.1;
    echo '<br>';
    echo 10 % 2;
    echo '<br>';
    $c = 3;
    $d = 3;
    $e = 7;
    $f = 9;
    if($c == $d && $e == $f){
        echo 'This is true';
    }
    else {echo 'None';};
    echo '<br>';

    $aa = 1;
    echo ++$aa;
    echo '<br>';

    switch($e){
        case 5:
            echo 'First check';
            break;
        
        case 3:
            echo 'Second check';
            break;
        default:
            echo 'No';
        
    }
    echo '<br>';
    $result = match($f){
        1,2,3,4,5 => 'Checking 1 condition',
        6,7,8,9 => 'Checking 2 condition',
        default => 'Nones'
    };
    echo $result;

?>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
            <input type="number" name="num01" placeholder="Number 1">
                <select name="operator">
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="divide">/</option>
                </select>  
            <input type="number" name="num02" placeholder="Number 2">
            <button>Computing</button>      
        </form>
        <?php 
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $num01 = filter_input(INPUT_POST, 'num01', FILTER_SANITIZE_NUMBER_FLOAT);
            $num02 = filter_input(INPUT_POST, 'num02', FILTER_SANITIZE_NUMBER_FLOAT);
            $operator = htmlspecialchars($_POST['operator']);
        
            $error = false;
            if(empty($num01) || empty($num02) || empty($operator)){
                echo '<p class="calc-error">Fill every field</p>';
                $error = true;
            }
            if(!is_numeric($num01) || !is_numeric($num02)){
                echo '<p class="calc-error">Only numbers!</p>';
                $error = true;
            }
            if(!$error){
                $value = 0;
                switch ($operator) {
                    case 'add':
                        $value = $num01 + $num02;
                        break;
                    case 'subtract':
                        $value = $num01 - $num02;
                        break;
                    case 'multiply':
                        $value = $num01 * $num02;
                        break;
                    case 'divide':
                        $value = $num01 / $num02;
                        break;

                    default:
                        echo '<p class="calc-error"> Wrong happend!</p>';
                        break;
                    }
                echo "<p class='calc-result'>Result = " .  $value . "</p>";
                }
            }
            $cities = [
                'Rio de Janeiro',
                'Sao Paulo',
                'Brasilia',
                'Belo Horizonte',
            ];
            $cities[] = 'Fortaleza';
            echo $cities[4];
            echo '<br>';
            array_splice($cities, 0, 1);
            echo $cities[1];
            /*
            $roams = [
                'north' => 'Belem',
                'south' => 'Gramado',
                'west' => 'Manaus',
                'east' => 'Natal'
            ];
            $brwords = [
                'pronomes' => 'Eu',
                'verbo' => 'chegar'
            ];
            echo '<br>';
            echo $roams['north'];
            echo '<br>'; 
            print_r($roams);
            echo '<br>';
            echo count($roams);
            echo '<br>';
            //sort($roams);
           // print_r($roams);
            echo '<br>';
            array_splice ($roams, 1, 0, 'Curitiba');
            print_r($roams);
            echo '<br>';
            array_splice ($roams, 5, 0, $brwords);
            print_r($roams);
            */
            echo '<br>';
            $roams1 = [
                'Belem',
                $brwords1 = ['Eu','chegar'],
                'Gramado',
                'Manaus',
                'Natal'
            ];
            echo $roams1 [1][1];
            echo '<br>';
            $hellostr = 'Hell o W orl d!';
            echo strpos($hellostr, 'W');
            echo '<br>';
            echo strtoupper($hellostr);
            echo '<br>';
            print_r(explode(' ',$hellostr));
            echo '<br>';
            $nums = -10;
            echo abs($nums);
            echo '<br>';
            echo pow(2, 20);
            echo '<br>';
            echo rand(1, 200);
        ?>

</body>
</html>


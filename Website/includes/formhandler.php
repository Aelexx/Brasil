<?php

echo "Hello";
echo '<br>';

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $firstname = htmlspecialchars($_POST["firstname"]);
    $lastname = htmlspecialchars($_POST["lastname"]);
    $favorfood = htmlspecialchars($_POST["favorfood"]);

    /*if(empty("firstname")){
        exit();
        header("Location: ../ListBrasil.html");
    }*/
    echo "Users data is: ";
    echo "<br>";
    echo $firstname;
    echo "<br>";
    echo $lastname;
    echo "<br>";
    echo $favorfood;

    //header("Location: ../ListBrasil.html");
}
else{
    header("Location: ../ListBrasil.html");
}
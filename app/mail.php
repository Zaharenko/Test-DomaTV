<?php

$recepient = "anton.zaharenko@gmail.com";
$sitename = "Обретите фигуру своеЙ мечты";

$name = trim($_POST["name"]);
$phone = trim($_POST["email"]);
$message = "Имя: $name \nEmail: $email";

$pagetitle = "Новая заявка с сайта на покупку книги \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
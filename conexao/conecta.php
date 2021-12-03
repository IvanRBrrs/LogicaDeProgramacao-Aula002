<!-- dbname pode ser qualquer nome porem tem que ser o mesmo do banco de dados -->
<!-- 'root' é o nome de usuario   -->


<?php
    try{
        $conexao = new PDO('mysql:host=localhost;dbname=aula-teste','root',''); 
        $conexao ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $erro){
        echo  'Erro: ' . $erro->getMessage();
    }
?>
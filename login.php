<?php 
    include('conexao/conecta.php');
    $usuario = $_POST['usuario'];
    $senha = md5($_POST['senha']);

    $select = $conexao->prepare('SELECT * from login WHERE BINARY usuario=:usuario AND BINARY senha=:senha');
    $select->bindParam(':usuario', $usuario, PDO::PARAM_STR);
    $select->bindParam(':senha', $senha, PDO::PARAM_STR);
    $select->execute();
    $login = $select->rowCount();

    // echo '$login';
    // echo $_POST['senha'];

    if($login > 0){
        $usuario = $_POST['usuario'];
        $senha = $_POST['senha'];
        $_SESSION['aulaUser']= $usuario;
        $_SESSION['aulaPass']= $senha;

        echo 'Ola, (' .$usuario. ') Voce logou com sucesso!';
    } else{
        echo 'dados invalidos';
    }
    
    // echo 'testando';
    
?>

<?php
if($_POST){
    $firstname=$_POST['firstname'];
    $firstname=$_POST['email'];
    $firstname=$_POST['name'];
    $firstname=$_POST['message'];
    $headers ="MINE-Version: 1.0\r\n";
    $headers .="content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "From:$name <$email>\r\nreplay-to: $name <$email>\nX-Mailer:PHP";
    $subject="$object";
    $destinataire="josselin.araujo@edu.ece.fr";
    $body="$message";
    if(mail($destinataire,$subejct,$body,$headers)){
        $response['status']='succes';
        $response['msg']='mail envoyé';
    }else{
        $response['status']='error';
        $response['msg']='mauvaise connexion';
    }
    echo json_encode($response);
}?>

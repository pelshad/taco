<?php

	header('Content-Type: text/html; charset=utf-8');

	require 'Exception.php';
	require 'PHPMailer.php';
	require 'SMTP.php';

	$subject = "[타코잉닭 문의메일]"."";
	$message = 	"이름 : ".$_POST['name'].
				"       연락처 : ".$_POST['tel'].
				"       이메일 : ".$_POST['email']."@".$_POST['emailDomain'].
				"       이메일2 : ".$_POST['email2'].
				"       입점희망점포 : ".$_POST['shop'];




	$mail = new \PHPMailer\PHPMailer\PHPMailer(true);



try {
    //    $mail->SMTPDebug = 2;
        $mail->isSMTP(); 
        $mail->Host = 'smtp.naver.com';
        $mail->SMTPAuth = true; 
        $mail->SMTPSecure = 'ssl'; 
        $mail->Username = '';// SMTP username
        $mail->Password = '';// SMTP password
        $mail->Port = 465; 
        $mail->CharSet = 'utf-8';
    
        //Recipients
        $mail->setFrom('', '타코잉닭');
        $mail->addAddress('', '타코잉닭');
    
    
        //Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $message;
        $mail->send();
    ?>
        
    <script>
        alert("문의메일이 전송되었습니다.");
        window.location.href = '/';
    </script>
    
    <?php
    } catch (Exception $e) {
    ?>
    <script>
        alert("문의메일이 전송실패하였습니다.");
        window.location.href = '/';
    </script>
    <?php
    }
    ?>
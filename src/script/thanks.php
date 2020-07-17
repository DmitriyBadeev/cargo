<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Грузоперевозки по Москве и области</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="../css/main.min.css">
</head>
<body>
	<div class="container">
		<div class="title-wrapper mt-5">
			<span class="title">Спасибо, что выбрали нас.</span> 
		</div>
		<div style="background: #E7E7E7; padding: 40px; margin: 40px 0; font-size: 18px">
			<p>Скоро мы с вами свяжемся.</p>
			<p>Наши контакты:</p>
			<ul>
				<li>Тел: +7 (985) 337-25-22</li>
				<li>Email: gruzperevozki77@gmail.com</li>
			</ul>
			<br>
			<p>Ниже приведена информация по вашему заказу.</p>
		</div>
	<div>
		
	</div>
<?php
    $items = unserialize($_COOKIE['items']);
    $paymant_id = $_COOKIE['payment_id'];

    require __DIR__ . '/lib/autoload.php';
        use YandexCheckout\Client;

	    $client = new Client();
	    $client->setAuth('624300', 'test_9P4PR6EbaKFOa6b7ki4TACb-sqnqt3bdVF7A5ALTVF8');
	    $payment = $client->getPaymentInfo($_COOKIE['payment_id']);

	    if ($payment['status'] == "succeeded") {

	    	$project_name = "Грузоперевозки";
	    	$admin_email  = "gruzperevozki77@gmail.com";
	    	$form_subject = "Новый заказ";

	    	$message = '<tr>
	    					<td style="padding: 10px; border: #e9e9e9 1px solid;"><b>ID_платежа</b></td>
							<td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_COOKIE['payment_id'] . '</td>
						</tr>';

	    	$c = true;
	    	foreach ( $items as $key => $value ) {

	    		if ( $key == "Телефон" ) {
	    			$message .= "
					" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
						<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
						<td style='padding: 10px; border: #e9e9e9 1px solid;'>+7$value</td>
					</tr>
					";
	    		} else if ( $value != "on" ) {
					$message .= "
					" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
						<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
						<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
					</tr>
					";
				}
			}

			$message = "<table style='width: 100%; margin: 10px 0 60px'>$message</table>";

			echo "$message";

			$headers = "MIME-Version: 1.0" . PHP_EOL .
			"Content-Type: text/html; charset=utf-8" . PHP_EOL .
			'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
			'Reply-To: '.$admin_email.'' . PHP_EOL;

			mail($admin_email, adopt($form_subject), $message, $headers );
	    }

    function adopt($text) {
		return '=?UTF-8?B?'.Base64_encode($text).'?=';
	}
?>
		<div class="order-btn mb-5"><a href="http://www.perevozka-gruzov77.ru">назад на сайт</a></div>
	</div>
</body>
</html>
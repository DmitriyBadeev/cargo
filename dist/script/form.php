<?php
    error_reporting(0);
    require __DIR__ . '/lib/autoload.php';
        use YandexCheckout\Client;

        $client = new Client();
        $client->setAuth('624300', 'test_9P4PR6EbaKFOa6b7ki4TACb-sqnqt3bdVF7A5ALTVF8');
        $items = generate_items();

        $payment = $client->createPayment(
                array(
                    'amount' => array(
                        'value' => $_POST['Итого'],
                        'currency' => 'RUB',
                    ),
                    'confirmation' => array(
                        'type' => 'redirect',
                        'return_url' => 'http://perevozka-gruzov77.ru/script/thanks.php',
                    ),
                    'capture' => true,
                    'description' => 'Заказ на доставку',
                    'receipt' => array(
                        'customer' => array(
                            'email' => $_POST['Email'],
                            'phone' => '7' . $_POST['Телефон']
                        ),
                        'items' => $items
                    )
                ),
                uniqid('', true)
            );
        
        $redirect_url =  $payment['confirmation']['confirmation_url'];
        $payment_id = $payment['id'];

        setcookie("items", serialize($_POST));
        setcookie("payment_id", $payment_id);

        header('Location: ' . $redirect_url);
        
        function generate_items() {
            $result_array = array();

            foreach ($_POST as $key => $value) {
                if ($key != 'Груз' && $value != 'on' && $key != 'Дата' && $key != 'Телефон' && $key != 'Email' && $key != 'Имя' &&
                $key != 'Пункт_отправки' && $key != 'Пункт_доставки' && $key != 'Итого') {
                    $result_array[] = array(
                        "description" => $key,
                        "quantity" => 1.00,
                        "amount" => $value,
                        "vat_code" => 4,
                    );
                }
            }

            return $result_array;
        }
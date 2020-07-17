new WOW().init();

$(function(){
    $('#date').daterangepicker({
        singleDatePicker: true,
        locale: {
            format: "DD/MM/YYYY",
        }
    });
});

var prevScroll = 0;
$(window).scroll(function () {
    var menu = document.getElementById('menu');
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var classList = menu.classList;
    if (scroll > 300) {
        if (scroll > prevScroll)
            addAndRemoveClassInClassList(classList, "active-menu", "hidden-menu");
        else
            addAndRemoveClassInClassList(classList, "hidden-menu", "active-menu");
    } else
        addAndRemoveClassInClassList(classList, "hidden-menu", "active-menu");
    prevScroll = scroll;
});

var selected_car = 3;
var count_car = 4;
function select_car(number) {
    var recommendField = document.getElementById('recommend-car');
    selected_car = number;
    change_card(number);
    recommendField.innerText = getCar(number);
}

function change_card(number_car) {

    for(var i = 1; i <= count_car; i++) {
        var class_list = document.getElementById('car_' + i).classList;
        class_list.remove("border-active");

        if (number_car === i) {
            class_list.add("border-active")
        }
    }
}

function changeCar() {
    var isLoose = document.getElementById('isLoose').checked;
    var weight = document.getElementById('weight').value;

    var width = document.getElementById('width').value;
    var length = document.getElementById('length').value;
    var height = document.getElementById('height').value;

    var vol = document.getElementById('vol').value;

    weight = weight ? weight : 0;
    width = width ? width : 0;
    length = length ? length : 0;
    height = height ? height : 0;
    vol = vol ? vol : 0;

    if (isLoose && weight < 10000 && vol <= 10) {
        select_car(1);
        DELIVERY_TARIFF = 120;
        MINIMUM_COST = 800;
    }
    else if (weight < 2500 && width <= 2 && height <= 1.8 && length <= 4 && vol <= 14.4) {

        if (weight < 2500 && length <= 4 && width <= 2 && height <= 1.8 && vol <= 14.4) {
            select_car(3);
            DELIVERY_TARIFF = 80;
            MINIMUM_COST = 500;
        }

        if (weight < 1000 && width <= 1.5 && length <= 2 && height <= 1.4 && vol <= 4.2) {
            select_car(4);
            DELIVERY_TARIFF = 65;
            MINIMUM_COST = 400;
        }

        if (weight < 500 && width <= 1 && height <= 0.9 && length <= 1.5 && vol <= 1.35) {
            select_car(2);
            DELIVERY_TARIFF = 50;
            MINIMUM_COST = 300;
        }

    } else select_car(0);
}

function getCar(number) {
    if (number === 0)
        return "Подходящих машин нет";
    if (number === 1)
        return "САМОСВАЛ “КАМАЗ”";
    if (number === 2)
        return "ЛАДА ЛАРГУС";
    if (number === 3)
        return "ГАЗЕЛЬ НЕКСТ";
    if (number === 4)
        return "УАЗ";
}

var DELIVERY_TARIFF = 80,
    MINIMUM_COST = 500;

var zoneJson = {"type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "id": 0,
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[56.38387938310024,38.4625471015605],[56.45846820985682,38.374656476560716],[56.57235056038137,38.38564280468606],[56.71912938505725,38.33895091015481],[56.78175144329638,38.26341990429513],[56.74781273414519,38.06703928906056],[56.86082203173386,37.9818952460922],[56.89014844592345,37.884391583982705],[56.94197707938676,37.77040842968594],[56.93522091985351,37.641319074217044],[56.90780834051469,37.5657880683578],[56.86232651232176,37.57814768749817],[56.76290040787669,37.36940745312313],[56.77044196281168,37.26229075390435],[56.76516303408082,37.1592939277327],[56.74177596058738,37.10024241406051],[56.613264138578685,37.13869456249825],[56.52987467190622,37.03981760937308],[56.5662855064352,36.96291331249805],[56.592055242536915,36.833823957029544],[56.466831259433235,36.5193403144515],[56.449723044353675,36.37033823925607],[56.40520546424716,36.17464426952942],[56.36711476112638,36.027702130857655],[56.39302060084674,35.87252024609221],[56.41205772904259,35.73793772656095],[56.470632034319785,35.62532786327981],[56.438693649909695,35.468772687498536],[56.373211844289244,35.4440534492174],[56.28699971478669,35.478385724608145],[56.225081259158756,35.32595042187382],[55.95791519470586,35.17488841015473],[55.75089601457218,35.3039777656237],[55.264577690876884,35.28200510937318],[55.224563449898504,35.423454083982904],[55.242614095768225,35.58962229687377],[55.272418877724895,35.73793772656095],[55.21435727092873,35.87526682812317],[55.14834625260398,36.31471995312373],[55.29593311124565,36.600364484373166],[55.164073124216,36.7871320624987],[55.18922316610691,36.95192698437353],[54.854689658850525,37.20461253124853],[54.689552167509106,37.72096995312289],[54.80395022343973,37.91872385937338],[54.61948236181232,38.33620432812341],[54.418155846166265,38.44057444531094],[54.305876617287396,38.50099924999844],[54.24479586485467,38.693259992185936],[54.35242970452436,38.767417707029665],[54.40213482886885,38.92946604687341],[54.600351346260446,38.8855207343734],[54.62585735992924,39.248069562498294],[54.99389307900113,39.77541331249853],[55.28966401678001,40.247825421873365],[55.49601942926251,40.15993479687318],[55.81280877077026,39.896262921872975],[55.81280877077026,39.72048167187324],[55.757091736462066,39.36891917187333],[55.85299910170953,39.35243967968616],[55.91166381531486,39.09426096874801],[55.94250422914143,39.06679514843584],[55.94096279378436,38.871787824216796],[55.98717906220166,38.72896555859251],[56.07714145201777,38.58751658398278],[56.19446713317333,38.51198557812317],[56.38387938310024,38.4625471015605]]]
        },
    }]
};

ymaps.ready(initMap);
function initMap() {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 7,
            controls: []
        }),

        routePanelControl = new ymaps.control.RoutePanel({
            options: {
                showHeader: true,
                title: 'Расчёт доставки',
                autofocus: false
            }
        }),

        zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 145,
                    right: 10
                }
            }
        });

    routePanelControl.routePanel.options.set({
        types: {auto: true}
    });

    myMap.controls.add(routePanelControl).add(zoomControl);

    var deliveryZones = ymaps.geoQuery(zoneJson).addToMap(myMap);

    deliveryZones.each(function (obj) {
        obj.options.set({fillColor: '#FFE562', fillOpacity: 0.2, strokeColor: '#1F1F1F'});
    });

    routePanelControl.routePanel.getRouteAsync().then(function (route) {

        route.model.setParams({results: 1}, true);

        route.model.events.add('requestsuccess', function () {

            var activeRoute = route.getActiveRoute();
            if (activeRoute) {

                var actRoute = route.getActiveRoute(),
                    length = actRoute.properties.get("distance"),
                    coordsFrom = route.properties.get("waypoints")[0].coordinates.reverse(),
                    coordsTo = route.properties.get("waypoints")[1].coordinates.reverse(),
                    addressFrom = route.properties.get("waypoints")[0].address,
                    addressTo = route.properties.get("waypoints")[1].address,
                    polygon = new ymaps.geometry.Polygon(zoneJson.features[0].geometry.coordinates);

                polygon.options.setParent(myMap.options);
                polygon.setMap(myMap);

                if (polygon.contains(coordsFrom) && polygon.contains(coordsTo) && selected_car !== 0) {
                    var price = calculate(Math.round(length.value / 1000)),
                        balloonContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<span>Расстояние: ' + length.text + '.</span><br/>' +
                            '<span>Машина: ' + getCar(selected_car) + '.</span><br/>' +
                            '<span>Тариф: ' + DELIVERY_TARIFF + ' руб. за километр.</span><br/>' +
                            '<span style="font-weight: bold; font-style: italic">Стоимость доставки: ' + price + ' р.</span>');

                    route.options.set('routeBalloonContentLayout', balloonContentLayout);
                    activeRoute.balloon.open();


                    setAddress(addressFrom, addressTo);

                    var existDelivery = document.getElementById('delivery');
                    pasteInTable(paymentTable, existDelivery, 'delivery', "Доставка машиной " + getCar(selected_car), price);
                    updatePrice();
                } else {
                    if (!polygon.contains(coordsFrom))
                        myMap.balloon.open(coordsFrom, "Точка находится за пределами зоны доставки. Мы доставляем грузы только в пределах Московской области.");
                    if (!polygon.contains(coordsTo))
                        myMap.balloon.open(coordsTo, "Точка находится за пределами зоны доставки. Мы доставляем грузы только в пределах Московской области.");
                    if (selected_car === 0)
                        myMap.balloon.open(coordsFrom, "Для груза с заданными параметрами подходящих машин нет.");
                }
            }
        });

    });
    
    function calculate(routeLength) {
        return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
    }
}

function setAddress(from, to) {
    document.getElementById('hidden-price-addressFrom').remove();
    document.getElementById('hidden-price-addressTo').remove();

    var hiddenBlock = document.getElementById('hidden');

    hiddenBlock.innerHTML += '<input type="text" id="hidden-price-addressFrom" name="Пункт отправки" value=" ' + from + ' " hidden>';
    hiddenBlock.innerHTML += '<input type="text" id="hidden-price-addressTo" name="Пункт доставки" value=" ' + to + ' " hidden>';
}

$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 1000);
        document.getElementById('menu').style.display = '';
    });
});


$(".burger").click(fadeBurgerMenu);
function fadeBurgerMenu () {
    var menu = $(".burger-menu");
    if (menu.css("display") === "none") {
        addAndRemoveClassJQ(menu, "bounceInRight", "bounceOutRight");
        menu.fadeIn()
    } else {
        addAndRemoveClassJQ(menu, "bounceOutRight", "bounceInRight");
        menu.fadeOut();
    }
}

function addAndRemoveClassInClassList(classList, add, remove) {
    classList.remove(remove);
    classList.add(add);
}

function addAndRemoveClassJQ(element, add, remove) {
    element.addClass(add);
    element.removeClass(remove);
}

// function submitForm() {
//     var errorField = document.getElementById('error');
//     var hasExistFromDelivery = document.getElementById('addressFrom').value;
//     var hasExistToDelivery = document.getElementById('addressTo').value;

//     if (!hasExistFromDelivery || !hasExistToDelivery) {
//         errorField.innerText = "Вы не указали откуда и куда доставлять";
//     }
// }

function changeVolume() {
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var length = document.getElementById('length').value;

    var volumeInput = document.getElementById('vol');

    if (width && height && length) {
        var volume = width * height * length;
        volumeInput.value = Math.round(volume * 100) / 100;
        volumeInput.disabled = true;
    } else {
        volumeInput.disabled = false;
    }
}

var paymentTable = document.getElementById('payment-table');
function changeLoaders() {
    var isOneLoader = document.getElementById('one-с').checked;
    var isTwoLoaders = document.getElementById('two-с').checked;
    var isNoneLoader = document.getElementById('none-с').checked;

    var existLoaders = document.getElementById('loaders');

    if(isOneLoader) {
        pasteInTable(paymentTable, existLoaders, "loaders", "услуга грузчика", 1000);
    }

    if(isTwoLoaders) {
        pasteInTable(paymentTable, existLoaders, "loaders", "услуга грузчиков", 2000);
    }

    if(isNoneLoader) {
        existLoaders.remove();
        deleteHiddenInputs('loaders')
    }

    updatePrice();
}

function changePack() {
    var isFilm = document.getElementById('one-p').checked;
    var isBubbleWrap = document.getElementById('two-p').checked;
    var isNone = document.getElementById('none-p').checked;

    var existPack = document.getElementById('pack');

    if (isFilm) {
        pasteInTable(paymentTable, existPack, "pack", "упаковка", 350);
    }

    if (isBubbleWrap) {
        pasteInTable(paymentTable, existPack, "pack", "упаковка", 450 );
    }

    if (isNone) {
        existPack.remove();
        deleteHiddenInputs('pack')
    }

    updatePrice();
}

function changeServices() {
    var isSMS = document.getElementById('more1').checked;
    var isQuickDelivery = document.getElementById('more2').checked;
    var countFloorsUp = document.getElementById('more3').value;
    var countFloorsDown = document.getElementById('more4').value;

    var existSMS = document.getElementById('sms');
    var existQuickDelivery = document.getElementById('quick');
    var existCountUp = document.getElementById('up');
    var existCountDown = document.getElementById('down');

    if (isSMS) {
        pasteInTable(paymentTable, existSMS, "sms", "SMS-уведомление", 200);
    } else if (existSMS) {
        existSMS.remove();
        deleteHiddenInputs('sms');
    }

    if (isQuickDelivery) {
        pasteInTable(paymentTable, existQuickDelivery, "quick", "Быстрая доставка" , 2000);
    } else if (existQuickDelivery) {
        existQuickDelivery.remove();
        deleteHiddenInputs('quick');
    }

    if (countFloorsUp && countFloorsUp > 0) {
        if (countFloorsUp <= 3)
            pasteInTable(paymentTable, existCountUp, "up", "Поднятие на " + countFloorsUp + " этаж", 0);
        else
            pasteInTable(paymentTable, existCountUp, "up", "Поднятие на " + countFloorsUp + " этаж", (countFloorsUp - 3) * 500);
    } else if (existCountUp) {
        existCountUp.remove();
        deleteHiddenInputs('up');
    }

    if (countFloorsDown && countFloorsDown > 0) {
        if (countFloorsDown <= 3)
            pasteInTable(paymentTable, existCountDown, "down", "Спускание с " + countFloorsDown + " этажа", 0);
        else
            pasteInTable(paymentTable, existCountDown, "down", "Спускание с " + countFloorsDown + " этажа", (countFloorsDown - 3) * 500);
    } else if (existCountDown) {
        existCountDown.remove();
        deleteHiddenInputs('down');
    }

    updatePrice();
}

function updatePrice() {
    var pricesList = document.getElementsByClassName('table-price');

    var resultPrice = 0;

    for(var i = 0; i < pricesList.length; i++) {
        var strPrice = pricesList[i].innerHTML;
        var price = 0;

        if (strPrice !== "бесплатно")
            price = Number(strPrice.slice(0, strPrice.length - 1));

        resultPrice += price;
    }

    deleteHiddenInputs('allPrice');
    document.getElementById('hidden').innerHTML += generateHiddenInputs('allPrice', 'Итого', resultPrice);
    document.getElementById('result-price').innerText = "итого: " + resultPrice + " руб";
}

function pasteInTable(paymentTable, existElement, className, nameItem, priceInNumber) {
    if (existElement) {
        existElement.innerHTML = generateSmallHtml(className, nameItem, priceInNumber);
        deleteHiddenInputs(className);
        document.getElementById('hidden').innerHTML += generateHiddenInputs(className, nameItem, priceInNumber);
    } else {
        paymentTable.innerHTML += generateHtml(className, nameItem, priceInNumber);
        document.getElementById('hidden').innerHTML += generateHiddenInputs(className, nameItem, priceInNumber);
    }
}

function generateHiddenInputs(className, nameItem, priceInNumber) {
    return '<input type="text" id="hidden-' + className + '" value="' + priceInNumber + '" name="' + nameItem +'" hidden />';
}

function deleteHiddenInputs(className) {
    document.getElementById('hidden-' + className).remove();
}

function generateHtml(className, nameItem, priceInNumber) {
    if (priceInNumber === 0)
        return '<tr id="' + className + '"><td>' + nameItem + '</td><td class=\"table-price\">бесплатно</td></tr>';
    return '<tr id="' + className + '"><td>' + nameItem + '</td><td class=\"table-price\">' + priceInNumber + ' &#8381;</td></tr>'
}

function generateSmallHtml(className, nameItem, priceInNumber) {
    if (priceInNumber === 0)
        return '<td>' + nameItem + '</td><td class=\"table-price\">бесплатно</td>';
    return '<td>' + nameItem + '</td><td class=\"table-price\">' + priceInNumber + ' &#8381;</td>';
}
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
};

/* Phone Mask */

mask('[data-tel-input]');

// Удалякм "+" если больше ничего не введено, чтобы показать placeHolder

const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    });
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    });
});

/* Yandex Map */

// initMap();

// async function initMap() {
//     // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
//     await ymaps3.ready;

//     const { YMap, YMapDefaultSchemeLayer } = ymaps3;

//     // Иницилиазируем карту
//     const map = new YMap(
//         // Передаём ссылку на HTMLElement контейнера
//         document.getElementById('map'),

//         // Передаём параметры инициализации карты
//         {
//             location: {
//                 // Координаты центра карты
//                 center: [30.338928, 59.943543],

//                 // Уровень масштабирования
//                 zoom: 16,
//             },
//         }
//     );
//     map.addChild(new YMapDefaultSchemeLayer());

//     const markerElement = document.createElement('div');
//     markerElement.className = 'marker-class';
//     markerElement.innerText = "I'm marker!";

//     const marker = new YMapMarker(
//         {
//             source: 'markerSource',
//             coordinates: [30.338928, 59.943543],
//             draggable: true,
//             mapFollowsOnDrag: true,
//         },
//         markerElement
//     );

//     map.addChild(marker);
// }

ymaps.ready(init);
function init() {
    const myMap = new ymaps.Map('map', {
        center: [59.943543, 30.338928],
        zoom: 16,
        // Карта будет создана без
        // элементов управления.
    });

    // Создание метки с собственным значком.
    var placemark2 = new ymaps.Placemark(
        [59.943543, 30.338928],
        {
            balloonContent: `
         <div class="balloon'>
             <div class="balloon__address">Наб. Фонтанки 10-15</div>
             <div class="balloon__contacts">
                <a href="tel:+78121234567">+8 (812) 123-45-67</a>
             </div>
         </div>
     `,
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map/location-pin.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
        }
    );
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(placemark2);
}

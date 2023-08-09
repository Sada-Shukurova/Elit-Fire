
// swiper
const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    loop: true,
    autoplay: {

    },
    speed: 1000,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
// ----------------------


// front panel updating


// range slider
const slider = document.getElementById("myRange");
const output = document.querySelector(".fireplace-length-value");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

// places for fireplaces data
const frontPanel = document.querySelector('.fireplace-panel-value')
const fireplacePrice = document.querySelector('.fireplace-price-value')
const imageSlider = document.getElementById('imageSlider')
// data for fireplaces

let fireplaces = [
    {
        id: 0,
        name: 'Qara mat',
        price: 5000,
        image: './assets/images/panel-1.webp',
    },
    {
        id: 1,
        name: 'Paslanmayan polad',
        price: 9000,
        image: './assets/images/panel-2.webp',
    },
    {
        id: 2,
        name: 'Qara güzgü',
        price: 15600,
        image: './assets/images/panel-3.webp',
    },
    {
        id: 3,
        name: 'Qızıl çiləmə',
        price: 95000,
        image: './assets/images/panel-4.webp',
    },
]

function updateFrontPanel() {
    setTimeout(() => {
        const activeSlideIndex = frontPlaceSwiper.realIndex;
        const activeSlide = frontPlaceSwiper.slides[activeSlideIndex];
        const activeSlideId = parseInt(activeSlide.querySelector('img').getAttribute('data-id'));
        const activeFireplace = fireplaces[activeSlideId];

        frontPanel.innerHTML = activeFireplace.name;
        fireplacePrice.innerHTML = activeFireplace.price;
    }, 100);
}
const frontPlaceSwiper = new Swiper("#imageSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 1200,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    on: {
        slideChange: function () {
            updateFrontPanel();
        },
    },
});


fireplaces.forEach((fireplace, index) => {
    const slide = `
        <div class="swiper-slide">
            <img class="swiper-slide-images blackMatte" src="${fireplace.image}"
                alt="front panel gray" data-id="${index}">
        </div>`;
    imageSlider.innerHTML += slide;
});


updateFrontPanel();
// --------------------
const type = document.querySelector('.type-text');

let listTexts = ['Bioetanolun xüsusi yanma texnologiyası sayəsində inanılmaz gözəllikdə atəşə nail olduq'];

let index = -1;
let current = 0;

function typeTextFunc() {
    if (current === listTexts.length) {
        current = 0;
    }
    let typeText = setInterval(() => {
        if (index == listTexts[current].length - 1) {
            clearInterval(typeText);
            clearTextFunc();
        } else {
            index++;
            type.textContent += listTexts[current][index];
        }
    }, 100);
};



typeTextFunc();
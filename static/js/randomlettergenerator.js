
const imageArrayTop = [
    'static/img/logos/Gentse Feesten Logos/GF-logo-2023-1-G.svg',
    'static/img/logos/Gentse Feesten Logos/GF-logo-2023-2-E.svg',
    'static/img/logos/Gentse Feesten Logos/GF-logo-2023-3-N.svg',
    'static/img/logos/Gentse Feesten Logos/GF-logo-2023-4-T.svg',
    'static/img/logos/Gentse Feesten Logos/GF-logo-2023-5-S.svg',
    'static/img/logos/Gentse Feesten Logos/GF-logo-2023-6-E.svg',
];
const imagArrayBackground = [
    'static/img/logos/Gentse Feesten Logos/campagne-1-G.png',
    'static/img/logos/Gentse Feesten Logos/campagne-2-E.png',
    'static/img/logos/Gentse Feesten Logos/campagne-3-N.png',
    'static/img/logos/Gentse Feesten Logos/campagne-4-T.png',
    'static/img/logos/Gentse Feesten Logos/campagne-5-S.png',
    'static/img/logos/Gentse Feesten Logos/campagne-6-E.png',
];

function generateRandomNumber(min, max) {
    const randomNumber = Math.random();
    const scaledNumber = min + randomNumber * (5 - 0 + 1);
    return Math.floor(scaledNumber);
}
const randomResult = generateRandomNumber(0, 5);

const numberChosen = randomResult
let chosenImgTop = imageArrayTop[numberChosen];


//Select all that has the id gentsefeestenlogo
let chosenImgTopElement = document.querySelectorAll("#gentsefeestenlogo")



//Alles dat de ID heeft Gentsefeesten in html zal er geplaatst worden <img src="$...."
chosenImgTopElement.forEach(element => {
    element.innerHTML = `<img src="${chosenImgTop}">`
});

let chosenImgBkg = imagArrayBackground[numberChosen];
let chosenImgBkgElement = document.getElementById("mainbackgroundimg");

//Naast de dagen letterimg
chosenImgBkgElement.innerHTML = `<img src="${chosenImgBkg}">`;



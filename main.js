import './style/style.scss';
import { gsap } from 'gsap';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/**********************************************************************************
 ***********************************DECLARE VAIABLES ******************************
 **********************************************************************************/

// HEADER

const btnHam = document.querySelector('#btnHam');
const spanHamOne = document.querySelector('#hamSpanOne');
const spanHamTwo = document.querySelector('#hamSpanTwo');
const spanHamThree = document.querySelector('#hamSpanThree');
const menu = document.querySelector('#hamMenu');

let checkState = true;

// SECOND SECTION

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    breakpoints: {
        599: {
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const mediaQuery = window.matchMedia("(max-width: 599px)");

// FLAMINGO

const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Submit = document.getElementById("submit");
Email.addEventListener("change", checkEmail);

let checkNameInput = false;
let checkEmailInput = false;

// COOKIESTEXT

const acceptBtn = document.querySelector('#accept-btn');
const disclamerContainer = document.querySelector('#cookie-disclamer');

/**********************************************************************************
**************************************FUNCTIONS************************************
**********************************************************************************/

// HEADER

// Function to open-close hemburger btn
function hamburgerMenu() {
    if (checkState) {
        gsap.to(spanHamTwo, { backgroundColor: 'transparent', border: 'none', duration: 2 });
        gsap.to(spanHamOne, { y: 10, rotate: 50, duration: 1 });
        gsap.to(spanHamThree, { y: -20, rotate: -50, duration: 1 });
        checkState = false;
        menu.classList.add('menu-open');
        gsap.fromTo(menu, { y: -1500, duration: 2 }, { y: 0, duration: 2 });

    } else if (checkState === false) {
        gsap.to(spanHamTwo, { backgroundColor: '#F59C30', border: '1px solid black', duration: 2 });
        gsap.to(spanHamOne, { y: 0, rotate: 0, duration: 1 });
        gsap.to(spanHamThree, { y: 0, rotate: 0, duration: 1 });
        menu.classList.remove('menu-open');
        checkState = true;
    }
}

// SECOND-SECTION

// Function to disbale swiper in tablet/desktop
function swiperEnableDisable(mediaQuery) {
    if (mediaQuery.matches) {
        swiper.enable();
    } else {
        swiper.disable();
    }
}

// FLAMINGO

// Validate name input
function checkName() {
    const errorMessage = document.getElementById("errorName");
    const exp = new RegExp("^[A-Za-zÅÄÖåäö-]{1,}");
    if (exp.test(Name.value)) {
        checkNameInput = true;
        errorMessage.innerHTML = "";
        document.getElementById("name").style.backgroundColor = "#FBFAFA";
        document.getElementById("name").style.border = "none";
    }
    else {
        errorMessage.innerHTML = "Fill in this field!";
        document.getElementById("name").style.backgroundColor = "#FCB89F";
        document.getElementById("name").style.border = "solid #F24100";
        checkNameInput = false;
    }
    activateSubmitButton();
}

// Validate email input
function checkEmail() {
    const exp = new RegExp("^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$");
    const errorMessage = document.getElementById("errorEmail");
    if (exp.test(Email.value)) {
        checkEmailInput = true;
        errorMessage.innerHTML = "";
        document.getElementById("email").style.backgroundColor = "#FBFAFA";
        document.getElementById("email").style.border = "none";
    } else {
        errorMessage.innerHTML = "Fill in this field!";
        document.getElementById("email").style.backgroundColor = "#FCB89F";
        document.getElementById("email").style.border = "solid #F24100";

        checkEmailInput = false;
    }
    activateSubmitButton();
}

// Activate submit button when validated
function activateSubmitButton() {
    if (checkNameInput && checkEmailInput) {
        Submit.removeAttribute("disabled");
    } else {
        Submit.setAttribute("disabled", "");
    }

}

// COOKIESTEXT

// Function to close cookie disclamer when accepted
function cookieDisclamer() {
    disclamerContainer.classList.add('accepted-cookies');

}

/**********************************************************************************
**************************************LOGIC****************************************
**********************************************************************************/

//HEADER
btnHam.addEventListener('click', hamburgerMenu);

// SECOND-SECTION
swiperEnableDisable(mediaQuery);
mediaQuery.addListener(swiperEnableDisable);

// FLAMINGO
Submit.setAttribute("disabled", "");
Name.addEventListener("change", checkName);

// COOKIESTEXT
acceptBtn.addEventListener('click', cookieDisclamer);

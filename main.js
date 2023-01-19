import './style/style.scss';
import { gsap } from 'gsap';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



/**********************************************************************************
 ***********************************DECLARE VAIABLES ******************************
 **********************************************************************************/

/************************************HEADER*****************************************/

const btnHam = document.querySelector('#btnHam');
const spanHamOne = document.querySelector('#hamSpanOne');
const spanHamTwo = document.querySelector('#hamSpanTwo');
const spanHamThree = document.querySelector('#hamSpanThree');
const menu = document.querySelector('#hamMenu');

let checkState = true;


/******************************COOKIE DISCLAMER***********************************/
const acceptBtn = document.querySelector('#accept-btn');
const disclamerContainer = document.querySelector('#cookie-disclamer');

/**********************************************************************************
**************************************FUNCTIONS************************************
**********************************************************************************/

/**
 * Function to open-close hemburger btn
 * animation on hamburger to X.
 * animation to slide the open-menu in.
 * And reverse
 */
function hamburgerMenu() {
    if (checkState) {
        gsap.to(spanHamTwo, { backgroundColor: 'transparent', border: 'none', duration: 2 });
        gsap.to(spanHamOne, { y: 10, rotate: 50, duration: 1 });
        gsap.to(spanHamThree, { y: -20, rotate: -50, duration: 1 });
        checkState = false;
        menu.classList.add('menu-open');
        gsap.fromTo(menu, { y: -500, duration: 2 }, { y: 0, duration: 2 });

    } else if (checkState === false) {
        gsap.to(spanHamTwo, { backgroundColor: '#F59C30', border: '1px solid black', duration: 2 });
        gsap.to(spanHamOne, { y: 0, rotate: 0, duration: 1 });
        gsap.to(spanHamThree, { y: 0, rotate: 0, duration: 1 });
        menu.classList.remove('menu-open');
        checkState = true;
    }
}

/**
 * Function to close cookie disclamer when accepted
 */
function cookieDisclamer(){
    disclamerContainer.classList.add('accepted-cookies');

}



/**********************************************************************************
**************************************LOGIC****************************************
**********************************************************************************/

btnHam.addEventListener('click', hamburgerMenu);

acceptBtn.addEventListener('click', cookieDisclamer);




/**********************************************************************************
**************************************FLAMINGO****************************************
**********************************************************************************/
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Submit = document.getElementById("submit");
Submit.setAttribute("disabled", "");
/**
 * Function to enable submit-button
 * Regex to vertify name and email
 * When both functions variable are 'true', submit function will be enable  
 */

Name.addEventListener("change", checkName);
let checkNameInput = false;
function checkName() {
    const exp = new RegExp("^[A-Za-zÅÄÖåäö-]{1,}");
    if (exp.test(Name.value)) {
        checkNameInput = true;
    }
    else {
        checkNameInput = false;
    }
    activateSubmitButton();
}

Email.addEventListener("change", checkEmail);
let checkEmailInput = false;

function checkEmail() {
    const exp = new RegExp("^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$");
    if (exp.test(Email.value)) {
        checkEmailInput = true;
    } else {
        checkEmailInput = false;
    }
    activateSubmitButton();
}

function activateSubmitButton() {
    if (checkNameInput && checkEmailInput) {
        Submit.removeAttribute("disabled");
    } else {
        Submit.setAttribute("disabled", "");
    }

}
/*************************************************/ 
/**********************************************************************************
**************************************SWIPER-CAROUSEL****************************************
**********************************************************************************/

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
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

function swiperEnableDisable(mediaQuery) {
    if (mediaQuery.matches) {
      swiper.enable();
    } else {
        swiper.disable();
    }
  }

  var mediaQuery = window.matchMedia("(max-width: 599px)");
  swiperEnableDisable(mediaQuery);
  mediaQuery.addListener(swiperEnableDisable);
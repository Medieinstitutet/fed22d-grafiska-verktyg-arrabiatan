import './style/normalize.scss';
import './style/style.scss';
import './style/tablet.scss';
import './style/desktop.scss';
import { gsap } from 'gsap';

/**********************************************************************************
 ***********************************DECLARE VAIABLES ******************************
 **********************************************************************************/

/************************************HEADER*****************************************/

const btnHam = document.querySelector('#btnHam');
const spanHamOne = document.querySelector('#hamSpanOne');
const spanHamTwo = document.querySelector('#hamSpanTwo');
const spanHamThree = document.querySelector('#hamSpanThree');
const menu = document.querySelector('#hamMenu');
const openMenuOption = document.querySelector('#open-menu-options');

let checkState = true;

 /**********************************************************************************
 **************************************FUNCTIONS************************************
 **********************************************************************************/

function hamburgerMenu(){
    if(checkState){
        gsap.to(spanHamTwo, { backgroundColor: 'transparent',border: 'none', duration: 2 });
        gsap.to(spanHamOne, { y: 10, rotate: 50, duration: 1});
        gsap.to(spanHamThree, {y: -20, rotate: -50, duration: 1});
        checkState = false;
        menu.classList.add('menu-open');
        gsap.fromTo(openMenuOption, {y: -500, duration: 2}, {y: 0, duration: 2})
           
    }else if (checkState === false){
        gsap.to(spanHamTwo, { backgroundColor: '#F59C30',border: '1px solid black', duration: 2 });
        gsap.to(spanHamOne, { y: 0, rotate: 0, duration: 1});
        gsap.to(spanHamThree, {y: 0, rotate: 0, duration: 1});
        menu.classList.remove('menu-open');
        checkState = true;

    }
}

 

 /**********************************************************************************
 **************************************LOGIC****************************************
 **********************************************************************************/

 btnHam.addEventListener('click', hamburgerMenu);
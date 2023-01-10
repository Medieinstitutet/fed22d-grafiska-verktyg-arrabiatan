import './style/style.scss'
import { gsap } from 'gsap'

/**********************************************************************************
 ***********************************DECLARE VAIABLES ******************************
 **********************************************************************************/

/************************************HEADER*****************************************/

const btnHam = document.querySelector('#btnHam');
const spanHamOne = document.querySelector('#hamSpanOne');
const spanHamTwo = document.querySelector('#hamSpanTwo');
const spanHamThree = document.querySelector('#hamSpanThree');
let checkState = true;

 /**********************************************************************************
 **************************************FUNCTIONS************************************
 **********************************************************************************/

function hamburgerMenu(){
    if(checkState){// animation on the hamburgerbtn in progress. only functioning on one click so far
        console.log(checkState, 'första')
        gsap.to(spanHamTwo, { backgroundColor: 'transparent',border: 'none', duration: 2 });
        gsap.to(spanHamOne, { y: 10, rotate: 50, duration: 1});
        gsap.to(spanHamThree, {y: -20, rotate: -50, duration: 1});
        checkState = false;
        console.log(checkState, 'första')
    }else if (checkState === false){
    console.log('hamburagre');
    checkState = true;
    console.log(checkState, 'andra')
    }
}

 

 /**********************************************************************************
 **************************************LOGIC****************************************
 **********************************************************************************/

 btnHam.addEventListener('click', hamburgerMenu);
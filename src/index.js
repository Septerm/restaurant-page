import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";


const main = document.querySelector('main')
const homeBtn = document.querySelector("#home button");
const menuBtn = document.querySelector("#menu button");
const aboutBtn = document.querySelector("#about button");




homeBtn.addEventListener('click' , () => {

    main.classList.remove('main-menu', 'main-about')
    main.classList.add('main-home')
    


    homeBtn.classList.add('active-btn');
    menuBtn.classList.remove('active-btn');
    aboutBtn.classList.remove('active-btn');

    home();
})


menuBtn.addEventListener('click' , () => {

    main.classList.remove('main-home', 'main-about')
    main.classList.add('main-menu')

    menuBtn.classList.add('active-btn');
    homeBtn.classList.remove('active-btn');
    aboutBtn.classList.remove('active-btn');

    menu();
})

aboutBtn.addEventListener('click' , () => {

    main.classList.remove('main-menu', 'main-home')
    main.classList.add('main-about')

    aboutBtn.classList.add('active-btn');
    homeBtn.classList.remove('active-btn');
    menuBtn.classList.remove('active-btn');

    about();
})




home();

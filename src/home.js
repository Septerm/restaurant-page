import { menu } from "./menu";


export const home = function () {

    const main  = document.querySelector('main');
    const homeBtn = document.querySelector("#home button");
    const menuBtn = document.querySelector("#menu button");
    const aboutBtn = document.querySelector("#about button");
    main.classList.add("main-home")

    main.innerHTML = '';

    const hero =  document.createElement('div');
    hero.classList.add('hero-section');

    
    const heroTitle = document.createElement('h2');
    heroTitle.textContent = "Simple Pleasures";
    hero.appendChild(heroTitle);

    const heroParagrah = document.createElement('p');
    heroParagrah.textContent = "In the heart of the city, we celebrate the art of honest cooking. Our kitchen honors the rhythm of the seasons, turning heritage ingredients into thoughtful plates designed for sharing and savoring.";
    hero.appendChild(heroParagrah);

    const heroButton = document.createElement('button');
    heroButton.textContent = "VIEW MENU"
    heroButton.classList.add("hero-btn")

    heroButton.addEventListener('click', () => {

        main.classList.remove('main-home', 'main-about')
            main.classList.add('main-menu')
        
            menuBtn.classList.add('active-btn');
            homeBtn.classList.remove('active-btn');
            aboutBtn.classList.remove('active-btn');
        
            menu();
    })
    hero.appendChild(heroButton);

    main.appendChild(hero);


}
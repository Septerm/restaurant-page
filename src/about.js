export const about = function () {


    const main =   document.querySelector('main');
    main.classList.add("main-about")
    main.innerHTML = "";


    //Left Box

    const imageBox = document.createElement('div');
    imageBox.classList.add('about-image');

    const bannerTitle = document.createElement('h2');
    bannerTitle.innerText = "ABOUT";

    imageBox.appendChild(bannerTitle);
    main.appendChild(imageBox);


    //Right Box

    const section = document.createElement('section');

    const title = document.createElement('h2');
    title.innerText = 'A family recipe for the perfect evening';

    const paraOne = document.createElement('p');
    paraOne.innerText = 'Founded in 2005, Little Lemon began with a simple dream: to bring authentic, time-honored family recipes to the heart of our community. What started as a cozy, ten-table dining room has grown into a beloved neighborhood staple, built on a foundation of warm hospitality, vibrant Mediterranean flavors, and a deep respect for fresh ingredients. Every dish that leaves our kitchen tells a story—crafted with hand-picked herbs, locally sourced produce, and traditional cooking techniques passed down through generations.';

    const paraTwo = document.createElement('p');
    paraTwo.innerText = 'At Little Lemon, we believe that dining out should feel like coming home. Whether you are gathering with close friends for a celebration or unwinding after a long week, our inviting atmosphere and thoughtfully curated menu are designed to make every meal memorable. Nearly two decades later, our family remains just as passionate about serving you as we were on day one, ensuring that every visit is seasoned with care, laughter, and unforgettable flavor.';
    const paraThree = document.createElement('p');

    const qoute = document.createElement('q');
    qoute.innerText = 'Food is more than sustenance—its how we share our heritage, express our love, and bring people together around one table.';
    
    const citation = document.createElement('cite');
    citation.innerText = ' - Mario & Adrian Rossi, Founders';

    paraThree.appendChild(qoute);
    paraThree.appendChild(citation);

    section.appendChild(title);
    section.appendChild(paraOne);
    section.appendChild(paraTwo);
    section.appendChild(paraThree);

    main.appendChild(section);
    

}
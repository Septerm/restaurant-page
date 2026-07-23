
import dishOne from "./images/dish_1.webp"
import dishTwo from "./images/dish_2.webp"
import dishThree from "./images/dish_3.webp"
import dishFour from "./images/dish_4.webp"
import dishFive from "./images/dish_5.webp"
import dishSix from "./images/dish_6.webp"

export const menu = function () {

    
    

    const items = [

        {
            image: dishOne ,
            imageAlt: "Chicken Dish",
            title: "Pepper Chicken",
            description: "Tender chicken breast seared with cracked black pepper and tossed in a rich, savory herb reduction.",
            price: "$50",
        },

        {
            image: dishTwo,
            imageAlt: "Roast Beef Dish",
            title: "Roast Beef",
            description: "Slow-roasted, succulent beef sliced thin and served with a rich, house-made pan gravy",
            price: "$75",
        },

        {
            image: dishThree,
            imageAlt: "Spaghetti And Meatballs Dish",
            title: "Spaghetti And Meatballs",
            description: "Al dente pasta tossed in rich marinara sauce and topped with handcrafted, seasoned beef meatballs.",
            price: "$35",
        },

        {
            image: dishFour,
            imageAlt: "Seasoned Fish Dish",
            title: "Seasoned Fish",
            description: "Flaky fillet pan-seared to perfection with a blend of Mediterranean herbs and warm spices.",
            price: "$75",
        },

        {
            image: dishFive,
            imageAlt: "Shrimp Meal Dish",
            title: "Shrimp Meal",
            description: "Juicy, wild-caught shrimp sautéed in garlic butter and served over a bed of seasoned rice.",
            price: "$100",
        },

        {
            image: dishSix,
            imageAlt: "Oyster Dish",
            title: "Lemon Squeezed Oysters",
            description: "Freshly shucked coastal oysters served chilled on the half shell with a bright, zesty squeeze of lemon.",
            price: "$120",
        },
    ]

    const main = document.querySelector('main');
    main.classList.add('main-menu')
    main.innerHTML = '';


    //Menu Banner

    const banner = document.createElement('div');
    banner.classList.add('menu-banner');
    const bannerTitle = document.createElement('h2');
    bannerTitle.textContent = "MENU";
    banner.appendChild(bannerTitle);

    main.appendChild(banner);


    // Items

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-items');
    main.appendChild(itemContainer);

    for (let item of items) {

        const card =  document.createElement('div');
        card.classList.add("menu-card");
        const image = document.createElement('img')
        image.src = item.image;
        image.alt = item.imageAlt;

        const cardText = document.createElement('div');
        cardText.classList.add('menu-text-section');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p')
        description.textContent = item.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        cardText.appendChild(title);
        cardText.appendChild(description);
        cardText.appendChild(price);

        card.appendChild(image);
        card.appendChild(cardText);

        itemContainer.appendChild(card);


    }


}





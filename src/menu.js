
export const menu = function () {

    const items = [

        {
            image: "https://images.unsplash.com/photo-1668665771867-7b3b53d7597a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Chicken",
            title: "Pepper Chicken",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde reiciendis eos. Sequi dolorum nulla repellat rem, perspiciatis harum accusantium",
            price: "$50",
        },

        {
            image: "https://images.unsplash.com/photo-1668665771867-7b3b53d7597a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Chicken",
            title: "Pepper Chicken",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde reiciendis eos. Sequi dolorum nulla repellat rem, perspiciatis harum accusantium",
            price: "$50",
        },

        {
            image: "https://images.unsplash.com/photo-1668665771867-7b3b53d7597a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Chicken",
            title: "Pepper Chicken",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde reiciendis eos. Sequi dolorum nulla repellat rem, perspiciatis harum accusantium",
            price: "$50",
        },

        {
            image: "https://images.unsplash.com/photo-1668665771867-7b3b53d7597a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Chicken",
            title: "Pepper Chicken",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde reiciendis eos. Sequi dolorum nulla repellat rem, perspiciatis harum accusantium",
            price: "$50",
        }
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

        const discription = document.createElement('p')
        discription.textContent = item.discription;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        cardText.appendChild(title);
        cardText.appendChild(discription);
        cardText.appendChild(price);

        card.appendChild(image);
        card.appendChild(cardText);

        itemContainer.appendChild(card);


    }


}





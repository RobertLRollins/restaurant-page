function loadMenu() {

    const content = document.getElementById('content');

    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('menuHeading');
    menuHeading.textContent = 'Menu';
    menu.appendChild(menuHeading);

    // Menu items
    //menuItem1
    const menuItem1 = document.createElement('h3');
    menuItem1.classList.add('menuItem');
    menuItem1.textContent = 'Synth-Protein Tacos:';
    menu.appendChild(menuItem1);

    const paragraph1 = document.createElement('p');
    paragraph1.classList.add('paragraph1');
    paragraph1.textContent = 'A delightful fusion of lab-grown protein, seasoned with a blend of futuristic spices, served in algae-based biodegradable taco shells.';
    menuItem1.appendChild(paragraph1);

    const image1 = document.createElement('img');
    image1.classList.add('menuImage');
    image1.src = require('./gastro-bot.png');
    image1.alt = 'GastRo-bot';
    menuItem1.appendChild(image1);

    //menuItem2
    const menuItem2 = document.createElement('h3');
    menuItem2.classList.add('menuItem');
    menuItem2.textContent = 'Neo-Pho Bowls:';
    menu.appendChild(menuItem2);

    const paragraph2 = document.createElement('p');
    paragraph2.classList.add('paragraph1');
    paragraph2.textContent = 'A twist on the classic Pho, featuring cultured beef broth and noodles made from insect protein, garnished with hydroponic herbs and edible flowers.';
    menuItem2.appendChild(paragraph2);

    const image2 = document.createElement('img');
    image2.classList.add('menuImage');
    image2.src = require('./gastro-bot.png');
    image2.alt = 'GastRo-bot';
    menuItem2.appendChild(image2);

    content.appendChild(menu);
}

export default loadMenu;
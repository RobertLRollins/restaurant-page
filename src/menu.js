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
    menuItem1.textContent = 'Pizza - Delicious cheese pizza';
    menu.appendChild(menuItem1);

    //Add in a discription paragraph

    const image1 = document.createElement('img');
    image1.classList.add('menuImage');
    image1.src = require('./gastro-bot.png');
    image1.alt = 'GastRo-bot';
    menuItem1.appendChild(image1);

    //menuItem2
    const menuItem2 = document.createElement('h3');
    menuItem2.classList.add('menuItem');
    menuItem2.textContent = 'Pizza - Delicious cheese pizza';
    menu.appendChild(menuItem2);

    //Add in a discription paragraph

    const image2 = document.createElement('img');
    image2.classList.add('menuImage');
    image2.src = require('./gastro-bot.png');
    image2.alt = 'GastRo-bot';
    menuItem2.appendChild(image2);

    content.appendChild(menu);
}

export default loadMenu;
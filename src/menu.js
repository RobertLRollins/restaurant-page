function loadMenu() {

    const content = document.getElementById('content');

    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('menuHeading');
    menuHeading.textContent = 'Menu';
    menu.appendChild(menuHeading);

    // Menu Items
    //menuItem1
    const menuDiv1 = document.createElement('div');
    menuDiv1.classList.add('menuItem');
    menu.appendChild(menuDiv1);

    const menuItemName1 = document.createElement('h3');
    menuItemName1.textContent = 'Synth-Protein Tacos:';
    menuDiv1.appendChild(menuItemName1);

    const paragraph1 = document.createElement('p');
    paragraph1.classList.add('paragraph1');
    paragraph1.textContent = 'A delightful fusion of lab-grown protein, seasoned with a blend of sustainable spices, served in algae-based biodegradable taco shells.';
    menuDiv1.appendChild(paragraph1);

    const menuImageDiv1 = document.createElement('div');
    menuImageDiv1.classList.add('menuImageDiv');
    menuDiv1.appendChild(menuImageDiv1);

    const image1 = document.createElement('img');
    image1.classList.add('menuImage');
    image1.src = require('./tacos.png');
    image1.alt = 'GastRo-bot';
    menuImageDiv1.appendChild(image1);

    //menuItem2
    const menuDiv2 = document.createElement('div');
    menuDiv2.classList.add('menuItem');
    menu.appendChild(menuDiv2);

    const menuItemName2 = document.createElement('h3');
    menuItemName2.textContent = 'Neo-Pho Bowls:';
    menuDiv2.appendChild(menuItemName2);

    const paragraph2 = document.createElement('p');
    paragraph2.classList.add('paragraph2');
    paragraph2.textContent = 'A twist on the classic Pho, featuring cultured beef broth and noodles made from insect protein, garnished with hydroponic herbs and edible flowers.';
    menuDiv2.appendChild(paragraph2);

    const menuImageDiv2 = document.createElement('div');
    menuImageDiv2.classList.add('menuImageDiv');
    menuDiv2.appendChild(menuImageDiv2);

    const image2 = document.createElement('img');
    image2.classList.add('menuImage');
    image2.src = require('./pho.png');
    image2.alt = 'GastRo-bot';
    menuImageDiv2.appendChild(image2);

    //menuItem3
    const menuDiv3 = document.createElement('div');
    menuDiv3.classList.add('menuItem');
    menu.appendChild(menuDiv3);

    const menuItemName3 = document.createElement('h3');
    menuItemName3.textContent = 'Vertical Farm Greens Salad:';
    menuDiv3.appendChild(menuItemName3);

    const paragraph3 = document.createElement('p');
    paragraph3.classList.add('paragraph3');
    paragraph3.textContent = 'A refreshing mix of greens and vegetables harvested from vertical farms, topped with a nutrient-rich, spirulina-based dressing.';
    menuDiv3.appendChild(paragraph3);

    const menuImageDiv3 = document.createElement('div');
    menuImageDiv3.classList.add('menuImageDiv');
    menuDiv3.appendChild(menuImageDiv3);

    const image3 = document.createElement('img');
    image3.classList.add('menuImage');
    image3.src = require('./salad.png');
    image3.alt = 'GastRo-bot';
    menuImageDiv3.appendChild(image3);

    //menuItem4
    const menuDiv4 = document.createElement('div');
    menuDiv4.classList.add('menuItem');
    menu.appendChild(menuDiv4);

    const menuItemName4 = document.createElement('h3');
    menuItemName4.textContent = '3D-Printed Nigiri:';
    menuDiv4.appendChild(menuItemName4);

    const paragraph4 = document.createElement('p');
    paragraph4.classList.add('paragraph3');
    paragraph4.textContent = 'Customizable nigiri featuring 3D-printed fish alternatives, wrapped in lab-cultivated seaweed, served with synthetic wasabi and soy sauce.';
    menuDiv4.appendChild(paragraph4);

    const menuImageDiv4 = document.createElement('div');
    menuImageDiv4.classList.add('menuImageDiv');
    menuDiv4.appendChild(menuImageDiv4);

    const image4 = document.createElement('img');
    image4.classList.add('menuImage');
    image4.src = require('./nigiri.png');
    image4.alt = 'GastRo-bot';
    menuImageDiv4.appendChild(image4);

    content.appendChild(menu);
}

export default loadMenu;
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

    //menuItem5
    const menuDiv5 = document.createElement('div');
    menuDiv5.classList.add('menuItem');
    menu.appendChild(menuDiv5);

    const menuItemName5 = document.createElement('h3');
    menuItemName5.textContent = 'Energy Bites:';
    menuDiv5.appendChild(menuItemName5);

    const paragraph5 = document.createElement('p');
    paragraph5.classList.add('paragraph1');
    paragraph5.textContent = 'Compact, energy-dense snack balls made from a blend of powdered insects, nuts, and fruits, coated in a layer of edible packaging for minimal waste.';
    menuDiv5.appendChild(paragraph5);

    const menuImageDiv5 = document.createElement('div');
    menuImageDiv5.classList.add('menuImageDiv');
    menuDiv5.appendChild(menuImageDiv5);

    const image5 = document.createElement('img');
    image5.classList.add('menuImage');
    image5.src = require('./bites.png');
    image5.alt = 'GastRo-bot';
    menuImageDiv5.appendChild(image5);

    //menuItem6
    const menuDiv6 = document.createElement('div');
    menuDiv6.classList.add('menuItem');
    menu.appendChild(menuDiv6);

    const menuItemName6 = document.createElement('h3');
    menuItemName6.textContent = 'Crispy Cultured Chicken Sliders:';
    menuDiv6.appendChild(menuItemName6);

    const paragraph6 = document.createElement('p');
    paragraph6.classList.add('paragraph6');
    paragraph6.textContent = 'Mini sliders made from cultured chicken meat, seasoned with cajun-inspired spices, served on mini charcoal-activated buns for detox benefits';
    menuDiv6.appendChild(paragraph6);

    const menuImageDiv6 = document.createElement('div');
    menuImageDiv6.classList.add('menuImageDiv');
    menuDiv6.appendChild(menuImageDiv6);

    const image6 = document.createElement('img');
    image6.classList.add('menuImage');
    image6.src = require('./sliders.png');
    image6.alt = 'GastRo-bot';
    menuImageDiv6.appendChild(image6);

    //menuItem7
    const menuDiv7 = document.createElement('div');
    menuDiv7.classList.add('menuItem');
    menu.appendChild(menuDiv7);

    const menuItemName7 = document.createElement('h3');
    menuItemName7.textContent = 'Post-Consumer Pie:';
    menuDiv7.appendChild(menuItemName7);

    const paragraph7 = document.createElement('p');
    paragraph7.classList.add('paragraph3');
    paragraph7.textContent = 'A 3D-printed zero-waste dessert made from upcycled food scraps like fruit peels and bread ends, transformed into a delicious pie, symbolizing the full utilization of resources.';
    menuDiv7.appendChild(paragraph7);

    const menuImageDiv7 = document.createElement('div');
    menuImageDiv7.classList.add('menuImageDiv');
    menuDiv7.appendChild(menuImageDiv7);

    const image7 = document.createElement('img');
    image7.classList.add('menuImage');
    image7.src = require('./pie.png');
    image7.alt = 'GastRo-bot';
    menuImageDiv7.appendChild(image7);

    //menuItem8
    const menuDiv8 = document.createElement('div');
    menuDiv8.classList.add('menuItem');
    menu.appendChild(menuDiv8);

    const menuItemName8 = document.createElement('h3');
    menuItemName8.textContent = 'Solar-Brewed Beverages:';
    menuDiv8.appendChild(menuItemName8);

    const paragraph8 = document.createElement('p');
    paragraph8.classList.add('paragraph8');
    paragraph8.textContent = 'A range of drinks brewed using solar energy, including synthetically flavored kombucha, algae-infused water, and caffeine shots with adaptogenic herbs.';
    menuDiv8.appendChild(paragraph8);

    const menuImageDiv8 = document.createElement('div');
    menuImageDiv8.classList.add('menuImageDiv');
    menuDiv8.appendChild(menuImageDiv8);

    const image8 = document.createElement('img');
    image8.classList.add('menuImage');
    image8.src = require('./beverages.png');
    image8.alt = 'GastRo-bot';
    menuImageDiv8.appendChild(image8);

    content.appendChild(menu);
}

export default loadMenu;
function loadHome() {

    const content = document.getElementById('content');

    // Clear previous content
    content.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = 'GastRo-bot Food Truck';

    const image = document.createElement('img');
    image.src = require('./gastro-bot.png');
    image.alt = 'GastRo-bot';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Discover GastRo-bot, the pioneering, fully autonomous food truck that’s not just transforming street food but setting new standards in sustainability. Every element of our service, from navigating city streets to crafting exceptional dishes and devising an inspired menu, is meticulously managed by our state-of-the-art onboard AI. But GastRo-bot goes beyond culinary excellence; it champions eco-friendly practices, utilizing sustainable ingredients, and innovative food sources like lab-grown proteins and vertical farm vegetables to ensure every meal is a step towards a more sustainable future. Embrace a dining experience that surprises, delights, and contributes positively to our planet. Welcome to GastRo-bot, where groundbreaking technology meets environmental responsibility in the culinary adventure of tomorrow.';

    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(paragraph);
}

export default loadHome;
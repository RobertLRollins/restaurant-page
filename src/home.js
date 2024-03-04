function loadHome() {
    // Get the 'content' div
    const content = document.getElementById('content');

    // Clear previous content
    content.innerHTML = '';

    // Create a <h1> element and set its text
    const heading = document.createElement('h1');
    heading.textContent = 'GastRo-bot Food Truck';

    // Create an <img> element and set its src and alt attributes
    const image = document.createElement('img');
    // Assuming 'gastro-bot.png' will be handled by Webpack and placed in 'dist' during the build
    // Use require to ensure webpack processes the file path correctly
    image.src = require('./gastro-bot.png');
    image.alt = 'GastRo-bot';

    // Create a <p> element and set its text
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the future of dining with GastRo-bot, the fully autonomous food truck that redefines convenience and quality. Every aspect of our service, from navigating the streets to crafting delectable dishes and curating an innovative menu, is managed by our advanced onboard AI. Prepare to be pleasantly surprised and fall in love with a culinary journey unlike any other. Welcome to the unexpected pinnacle of food innovation.';

    // Append the newly created elements to the 'content' div
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(paragraph);
}

export default loadHome;
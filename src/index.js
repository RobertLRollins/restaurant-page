import loadHome from './home.js';
import loadMenu from './menu.js';
import loadApp from './app.js';
import loadAbout from './about.js';

function setupTabs() {
    document.getElementById('homeBtn').addEventListener('click', loadHome);
    document.getElementById('menuBtn').addEventListener('click', loadMenu);
    document.getElementById('appBtn').addEventListener('click', loadApp);
    document.getElementById('aboutBtn').addEventListener('click', loadAbout);
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    setupTabs();
});
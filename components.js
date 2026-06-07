async function loadComponent(id, path) {
    // Load common HTML elements
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    if (id === 'navbar') initThemeToggle();
    if (id === 'footer') injectEmail();
}

function initThemeToggle() {
    const theme_toggle = document.getElementById('theme-toggle');

    if (!theme_toggle) return;
    theme_toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');

        // Add theme to local storage
        const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

        // Change display text
        if (theme_toggle.textContent === 'Dark') {
            theme_toggle.textContent = 'Light';
        } else {
            theme_toggle.textContent = 'Dark';
        }
    });
}

function injectEmail() {
    const user = 'ti37p';
    const domain = 'protonmail.com';
    const link = document.getElementById('email-link');
    link.href = `mailto:${user}@${domain}`;
    link.textContent = `${user}@${domain}`;
}

loadComponent('navbar', '/components/navbar.html');
loadComponent('footer', '/components/footer.html');
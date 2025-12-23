// Theme Logic
(function () {
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');

    // 1. Initial Load (No transition to avoid flash)
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    // 2. Setup Toggle
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Enable transition class just for the toggle action
            htmlElement.classList.add('theme-transition');

            // Toggle Dark Mode
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }

            // Cleanup transition class after animation finishes to avoid side effects on other interactions
            setTimeout(() => {
                htmlElement.classList.remove('theme-transition');
            }, 550); // Slightly longer than CSS duration (500ms)
        });
    }

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
})();

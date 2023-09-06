// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function themeColor() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('buttonTheme').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('buttonTheme').checked = true;
    }
})();

function changeIcon() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        document.getElementById('iconTheme').src = "icon-night.svg";
    }
    else {
        document.getElementById('iconTheme').src = "icon-day.svg";
    }
}
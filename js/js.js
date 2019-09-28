let changeAppearanceOfMainMenu = document.querySelector('.logoOfMainMenu');
let mainNavigationMenu = document.querySelector('.mainNavigationMenu');
changeAppearanceOfMainMenu.addEventListener('click', function(event) {
    /* if (mainNavigationMenu.classList.contains('regularMenu')) {
        mainNavigationMenu.classList.remove('regularMenu');
        mainNavigationMenu.classList.add('dropdownMenu');
    } else if (mainNavigationMenu.classList.contains('dropdownMenu')) {
        mainNavigationMenu.classList.remove('dropdownMenu');
        mainNavigationMenu.classList.add('regularMenu');
    } */
    if (!mainNavigationMenu.classList.contains('dropdownMenu')) {
        mainNavigationMenu.classList.add('dropdownMenu');
    } else {
        mainNavigationMenu.classList.remove('dropdownMenu');
    }
});
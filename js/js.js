let mainMenu = {
    mainNavigationMenu: document.querySelector('.mainNavigationMenu').querySelector('ul'),
    logoOfMainMenu: document.querySelector('.logoOfMainMenu'),

    changeAppearanceOfMenu() {
        if (screen.width <= 609) {
            this.mainNavigationMenu.classList.remove("regularMenu");
            this.mainNavigationMenu.classList.add("dropdownMenu");
        }
        
        if (screen.width > 609) {
            this.mainNavigationMenu.classList.add("regularMenu");
            this.mainNavigationMenu.classList.remove("dropdownMenu");
        }
    },
    
    clickOnLogoOfMainMenu() {
        this.logoOfMainMenu.addEventListener('click', function(event) {
            mainMenu.mainNavigationMenu.classList.toggle("active");
            if (mainMenu.mainNavigationMenu.classList.contains("active")) {
                
            }
        });
      
    },
};

mainMenu.changeAppearanceOfMenu();

frames.onresize = function() {
    mainMenu.changeAppearanceOfMenu();
};

document.addEventListener('DOMContentLoaded', function(event) {
    mainMenu.clickOnLogoOfMainMenu();
});
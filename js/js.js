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

let upArrowForLifting = {
    upArrow: document.querySelector('.upArrowForLifting'),

    clickOn() {
        this.upArrow.addEventListener('click', function(event) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    upArrowStateChange() {
        if (window.pageYOffset >= 400) {
            upArrowForLifting.upArrow.classList.remove("notActive");
        } else {
            upArrowForLifting.upArrow.classList.add("notActive");
        }
    }
};

mainMenu.changeAppearanceOfMenu();

frames.onresize = function() {
    mainMenu.changeAppearanceOfMenu();
};

document.addEventListener('DOMContentLoaded', function(event) {
    mainMenu.clickOnLogoOfMainMenu();
});

document.addEventListener('scroll', function(event) {
    upArrowForLifting.upArrowStateChange();
});

upArrowForLifting.clickOn();
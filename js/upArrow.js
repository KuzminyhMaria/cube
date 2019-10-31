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

document.addEventListener('scroll', function(event) {
    upArrowForLifting.upArrowStateChange();
});

upArrowForLifting.clickOn();
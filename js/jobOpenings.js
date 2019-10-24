let jobOpenings = {
    arrayOfJobListing: [...document.querySelector('.jobListing').querySelector('ul').querySelectorAll('li')],
    arrayOfAboutVacancies: [...document.querySelectorAll('.aboutVacanciesInDetail__')],

    choseIt() {
        this.arrayOfJobListing.forEach(function(item, i) {
            item.addEventListener('click', function(event) {
                jobOpenings.scrollToElement(i);
            });
        });
    },
    
    scrollToElement(i) {
        this.arrayOfAboutVacancies[i].scrollIntoView();
    }
};

document.addEventListener('DOMContentLoaded', function(event) {
    jobOpenings.choseIt();
});
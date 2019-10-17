//Вычисление высоты для блока .portfolioObjects, равной высоте блока .portfolioObject
function alignmentOfHeightsOfTwoBlocks() {
    let portfolioObjectsHeight = document.querySelector(".portfolioObject__.active");
    portfolioObjectsHeight = portfolioObjectsHeight.getBoundingClientRect().height;
    document.querySelector(".portfolioObjects").style.height = portfolioObjectsHeight + 'px';
};

let portfolio = {
    idOfportfolioObject: [ ...document.querySelectorAll('.portfolioObject__')],
    idOfportfolioObjects: [ ...document.querySelector(".portfolioObjects").querySelectorAll('img')],
    
    lastActiveObject: 0,

    choseIt() {
        this.idOfportfolioObjects.forEach(function(item, i) {
            item.addEventListener('click', function(event) {
                portfolio.changeActiveObject(i);
            });
        });
    },

    changeActiveObject(newActiveObject) {
        this.idOfportfolioObject[this.lastActiveObject].classList.remove("active");
        this.idOfportfolioObject[newActiveObject].classList.add("active");
        this.lastActiveObject = newActiveObject;
    }

    
};
 
alignmentOfHeightsOfTwoBlocks();
portfolio.choseIt();
//Вычисление высоты для блока .portfolioObjects, равной высоте блока .portfolioObject
function alignmentOfHeightsOfTwoBlocks() {
    let portfolioObjectsHeight = document.querySelector(".portfolioObject__.active");
    portfolioObjectsHeight = portfolioObjectsHeight.getBoundingClientRect().height;
    document.querySelector(".portfolioObjects").style.height = portfolioObjectsHeight + 'px';
};

let portfolio = {
    arrayOfportfolioObject: [...document.querySelectorAll('.portfolioObject__')],
    arrayOfportfolioObjects: [...document.querySelector(".portfolioObjects").querySelectorAll('img')],
    
    

    lastActiveObject: 0,

    choseIt() {
        this.arrayOfportfolioObjects.forEach(function(item, i) {
            item.addEventListener('click', function(event) {
                portfolio.changeActiveObject(i);
                alignmentOfHeightsOfTwoBlocks();
            });
        });
    },

    changeActiveObject(newActiveObject) {
        this.removeActivationClass(newActiveObject);
        this.addActivationClass(newActiveObject);
        this.lastActiveObject = newActiveObject;     
    },

    removeActivationClass(newActiveObject) {
        this.arrayOfportfolioObject[this.lastActiveObject].classList.remove("active");
        this.removeFrame();
    },

    addActivationClass(newActiveObject) {
        this.arrayOfportfolioObject[newActiveObject].classList.add("active");
        this.addFrame(newActiveObject);
    },

    addFrame(newActiveObject) {
        this.arrayOfportfolioObjects[newActiveObject].style.outline = "3px solid #cced1a";
        this.arrayOfportfolioObjects[newActiveObject].style.outlineOffset = "-5px";
    },

    removeFrame() {
        this.arrayOfportfolioObjects[this.lastActiveObject].style.outline = "0px";
    }

};
 
alignmentOfHeightsOfTwoBlocks();
portfolio.choseIt();
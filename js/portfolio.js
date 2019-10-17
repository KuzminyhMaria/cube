//Вычисление высоты для блока .portfolioObjects, равной высоте блока .portfolioObject
function alignmentOfHeightsOfTwoBlocks() {
    let portfolioObjectsHeight = document.querySelector(".portfolioObject__.active");
    portfolioObjectsHeight = portfolioObjectsHeight.getBoundingClientRect().height;
    document.querySelector(".portfolioObjects").style.height = portfolioObjectsHeight + 'px';
};

//
let portfolio = {
    idOfportfolioObject: [ ...document.querySelectorAll('.portfolioObject__')],
    idOfportfolioObjects: [ ...document.querySelector(".portfolioObjects").querySelectorAll('img')],
    
    lastActiveObject: 0,

    choseIt() {
        this.idOfportfolioObjects.forEach(function(item, i) {
            item.addEventListener('click', function(event) {
                portfolio.changeActiveObject(i);
                //alert(i);
            });
        });
    },

    changeActiveObject(newActiveObject) {
        this.idOfportfolioObject[this.lastActiveObject].classList.remove("active");
        this.idOfportfolioObject[newActiveObject].classList.add("active");
        this.lastActiveObject = newActiveObject;
    }

    
};

    /*choseIt() {
        //let portfolioObjects = document.querySelector(".portfolioObjects");
        this.portfolioObjects.querySelectorAll('img');
        for (let i = 0; i < this.portfolioObjects.length; i++) {
            this.portfolioObjects.addEventListener('click', function(event) {
                alert(this.idOfportfolioObjects.event.target.id);
            });
        }

    },

    openDesiredPortfolioObject() {

        
        
    } */

/* portfolioObjects.querySelector('img').addEventListener('click', function(event) {
    alert(idOfportfolioObjects.indexOf("event.target.id"));
    //let thisObject = document.querySelector('#' + idOfportfolioObject[idOfportfolioObjects.indexOf("event.target.id")]);
    
}); */

/* .addEventListener('click', function(event) {
    event.stopPropagation();
    product.name = buttonOfAddToBasket[i].parentNode.querySelector('h3').textContent;
    basket.putProduct(product);
}); */
 
alignmentOfHeightsOfTwoBlocks();
portfolio.choseIt();
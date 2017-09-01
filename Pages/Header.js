
let Header = function() {

    let searchText = element.all(by.model('search.keywords')).first();
    let btnSearch = element(by.css('button[class~="search-button"]'));
  
    this.inputText = (nameRecipe) => {
        searchText.clear().sendKeys(nameRecipe);
    };

    this.searchRecipe = () => {        
        btnSearch.click();
    };    
};

module.exports = Header;

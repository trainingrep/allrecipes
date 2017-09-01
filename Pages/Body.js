
let Body = function() {
  
    let searchResultsText = element.all(by.xpath('//*[@id="searchResultsApp"]//p')).first();

    this.getSearchResultsText = function() {
        return searchResultsText.getText();
    }; 
};

module.exports = Body;

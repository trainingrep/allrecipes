
let Header = require('./Pages/Header');
let Helper = require('./Pages/Helper');
let Body = require('./Pages/Body');

describe('Autotest for http://allrecipes.com', function(){
    
  let url = 'http://allrecipes.com';
      nameRecipe = 'fish';
  
  let helper,
      header,      
      body;
    
  beforeAll(() => {   

    helper = new Helper();
    header = new Header();    
    body = new Body();

    helper.setSettings(false, false);
    helper.goToSite(url);

  });

  it('Search for a dish', () => {    
    header.inputText(nameRecipe);    
    header.searchRecipe();    
    expect(body.getSearchResultsText()).toContain(nameRecipe);  
  });

});
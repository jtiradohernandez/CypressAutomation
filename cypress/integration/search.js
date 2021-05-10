import 'cypress-iframe';


describe("LogIn", () => {


  	beforeEach(() => {
  		cy.visit('/');
  		cy.viewport(1920, 1080);
  		cy.wait(3000);
      	cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
  	});

	it("User perform a search", () => {
		cy.get('div.styles_search__1afWo:nth-child(5) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
		  .type("Table")
		  .type('{enter}');
		cy.get('.NbProducts_root__26kmO',{timeout: 5000}).should('have.text',"More than 500 products");
	});

	it("User can see suggestions", () => {
		cy.get('div.styles_search__1afWo:nth-child(5) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
		  .type("Table");
		cy.get('div.SuggestionBlock_root__35xOL:nth-child(1) > a:nth-child(2)').should('have.text',"table");
	});

	it("User can interact with search suggestions", () => {
		cy.get('div.styles_search__1afWo:nth-child(5) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
		  .type("Table");
		cy.get('div.SuggestionBlock_root__35xOL:nth-child(1) > a:nth-child(3)').click();
		cy.get('.ListingHeader_title__1WACj',{timeout: 5000}).should('have.text',"« Table and chairs »");
	});

	it("User can erase current search term", () => {
		cy.get('div.styles_search__1afWo:nth-child(5) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
		  .type("Table")
		  .type('{enter}');
		cy.get('div.styles_search__1afWo:nth-child(5) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3) > div:nth-child(1) > svg:nth-child(1)')
		  .click();
		cy.get('div.styles_search__1afWo:nth-child(5) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)')
		  .should('have.text',"")
	});
});
// it('loads page', () => {
//   cy.visit('/')
//   cy.contains('Hi there')
// })

// https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
const getIframeDocument = () =>
  cy.get("#storybook-preview-iframe").its("0.contentDocument").should("exist");

const getIframeBody = () =>
  getIframeDocument().its("body").should("not.be.undefined").then(cy.wrap);

describe("Storybook", () => {
  it("visits storybook button story", () => {
    cy.visit("/iframe.html?id=example-button--primary");
    cy.get('[data-sb="component"]').should('contain.text', 'Button');
  });
  it("visits storybook header story", () => {
    cy.visit("/iframe.html?id=example-header--logged-in");
    cy.get('[data-sb="component"]').should('contain.text', 'Acme');
  });

});

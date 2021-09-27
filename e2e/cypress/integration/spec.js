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

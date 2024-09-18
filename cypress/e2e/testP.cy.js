describe('MI_PRUEBA', () => {
  it('log in successfully with valid credentials', () => {
    cy.visit('https://www.demoblaze.com/index.html');

    cy.get('#login2').click();

    cy.get('#loginusername').type('fili@gmail.com');

    cy.get('#loginpassword').type('123');

    cy.get('[onclick="logIn()"]').click();

    cy.get('#nameofuser').should('contain', 'Welcome fili@gmail.com');
  })
})
describe('MI_PRUEBA', () => {
    it('adding products to the cart', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      cy.get('[href="prod.html?idp_=1"].hrefch').click();

      cy.get('[onclick="addToCart(1)"]').click();

      cy.get('#cartur').click();

      cy.get('[data-target="#orderModal"]').click();

      // Filling all with the information

      cy.get('#name').type('Filiberto');
      cy.get('#country').type('Mexico');
      cy.get('#city').type('Guadalajara');
      cy.get('#card').type('12345678');
      cy.get('#month').type('June');
      cy.get('#year').type('2025');

      cy.get('[onclick="purchaseOrder()"]').click();

      // ASSERT
      cy.get('.sweet-alert').should('contain', 'Thank you for your purchase!');
  
    })
  })
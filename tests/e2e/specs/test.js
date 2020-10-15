// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should update running total', () => {
    cy.get('#number3').click();
    cy.get('#number4').click()
    cy.get('.display').should('contain', '34')
  })
  it('should update display with the result of the operation', () => {
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '100')
  })
  it('should chain multiple operations together', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8')
  })
  it('should show negative numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  })
  it ('should show decimal numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5');
  })
  it('should display large numbers', () => {
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number7').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3888500');
  })
  it('should display instruction when divided by 0', () =>{
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Cannot divide by 0');
  })
})

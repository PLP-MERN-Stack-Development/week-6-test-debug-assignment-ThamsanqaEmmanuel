describe('User Authentication Flow', () => {
  it('should allow user to register and login', () => {
    // Registration
    cy.visit('/register');
    cy.get('#username').type('testuser');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    
    // Login
    cy.visit('/login');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    
    // Assert successful login
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome testuser').should('be.visible');
  });
});
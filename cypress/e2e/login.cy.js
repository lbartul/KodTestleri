describe('Login Form - Successful Submission', () => {
  it('should submit successfully and navigate to /main', () => {
    cy.visit('http://localhost:5179/');

    // Email ve Password alanlarını doldur
    cy.get('input[name="email"]').type('erdem.guntay@wit.com.tr');
    cy.get('input[name="password"]').type('9fXiH0GXesEwH_I');

    // Terms checkbox'ına seç
    cy.get('input[name="terms"]').check();

    // Butonun aktif olduğunu kontrol et ve tıkla
    cy.get('button').should('not.be.disabled').click();

    // Başarılı giriş sonrası yönlendirildiğini doğrula
    cy.url().should('include', '/main');
  });
});

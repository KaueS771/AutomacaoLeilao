describe('Teste de Lances em Leilão', () => {

  beforeEach(() => {
      cy.visit('http://localhost:5500');
  });

  it('Deve exibir mensagem de erro se o lance for menor que o lance mínimo', () => {
      cy.get('#lanceInput').type('50');
      cy.get('#submitLance').click();
      cy.get('#message').should('contain', 'Erro: O lance deve ser maior ou igual a R$ 100.00');
      cy.get('#valorAtual').should('contain', '100.00');
  });

  it('Deve aceitar lance se o valor for igual ou maior que o lance mínimo', () => {
      cy.get('#lanceInput').type('150');
      cy.get('#submitLance').click();
      cy.get('#message').should('contain', 'Sucesso! Seu lance de R$ 150.00 foi aceito.');
      cy.get('#valorAtual').should('contain', '150.00');
  });

});

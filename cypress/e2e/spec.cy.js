describe('Navegação e Elementos Básicos do InovaIF', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/index.html');
  });

  it('Deve verificar a presença do cabeçalho flutuante', () => {
    cy.get('.cabecalho-flutuante').should('be.visible');
  });

  it('Deve verificar a presença do elemento de vídeo', () => {
    cy.get('#videoContainer').should('be.visible');
    cy.get('#video source').should('have.attr', 'src', 'video/videoTeste.mp4');
  });

  it('Deve verificar a seção de Certificações e Reconhecimentos', () => {
    cy.get('.certificacoes h2').should('contain', 'Certificações e Reconhecimentos');
  });

  it('Deve verificar a seção de Passos para o Objetivo', () => {
    cy.get('.passos-objetivo h2').should('contain', 'Passos para o Objetivo');
  });

  it('Deve verificar a seção de Cards', () => {
    cy.get('#card-container').should('be.visible');
    cy.get('.card').should('have.length.at.least', 1);
  });

  it('Deve verificar a seção de Utilidade', () => {
    cy.get('.utilidade h2').should('contain', 'Utilidade');
  });

  it('Deve verificar a seção de Feedbacks e Avaliações', () => {
    cy.get('.feedbacks h2').should('contain', 'Feedbacks e Avaliações');
  });

  it('Deve verificar a seção de Autores e Responsáveis', () => {
    cy.get('.autores h2').should('contain', 'Autores e Responsáveis');
  });

  it('Deve verificar a seção de Dúvidas Frequentes e Garantia', () => {
    cy.get('.faq-garantia h2').should('contain', 'Dúvidas Frequentes e Garantia');
  });
});
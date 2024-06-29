describe('Example Test', () => {
  it('should visit the homepage', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Learn about Next.js')
  })
})

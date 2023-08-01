import { cy, it } from "cypress";
it('titles are correct', () => {
    const page = cy.visit('http://localhost:3000');
    page.get('title').should('have.text', "Home - Jacob's Website"
    )
});

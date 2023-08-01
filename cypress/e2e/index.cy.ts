/// <reference types="cypress">
import "@cypress-audit/lighthouse/commands";

describe("Blog Tests", () => {
  it("Accessibility is >70%", () => {
    cy.visit("/");
    cy.lighthouse({
      performance: 85,
      accessibility: 70,
      "best-practices": 85,
      seo: 85,
      pwa: 0,
    });
  });
});

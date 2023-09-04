/// <reference type="Cypress">
import { defineConfig } from "cypress";
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:4321/",
    setupNodeEvents(on, config) { // eslint-disable-line


      on("before:browser:launch", (browser = {}, launchOptions) => { // eslint-disable-line
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
    },
  },
});



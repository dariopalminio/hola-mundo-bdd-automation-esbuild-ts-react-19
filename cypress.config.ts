import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "qa"}` });

export default defineConfig({
  e2e: {
    baseUrl: process.env.VITE_APP_TO_TEST_URI || "http://localhost:5173/",
    specPattern: "**/*.feature",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: true,
    testIsolation: true,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      version: process.env.VITE_ENV || "qa",
      //TAGS: process.env.TAGS || "@regression", //Si no se define TAGS en el comando de ejecución, se usará el valor predeterminado "@Regression".
    },
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      return config;
    },
  },
});

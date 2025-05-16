
//cypress.config.ts
//Configuración basada en: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples/esbuild-ts
//Configuración de E2E testing usando Esbuild como empaquetador (bundler) de JavaScript y TypeScript.
//Para otras configuraciones consultar en: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples

import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

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
      TAGS: process.env.TAGS || "@regression", //Si no se define TAGS en el comando de ejecución, se usará el valor predeterminado "@Regression".
    },
    setupNodeEvents,
  },
});

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
  // Registra el preprocesador de Cucumber
  await addCucumberPreprocessorPlugin(on, config);

  // Usa esbuild para preprocesar los archivos .feature
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  return config;
}

export default defineConfig({
  e2e: {
    // Configuracion de baseUrl
    baseUrl: process.env.VITE_APP_TO_TEST_URI || "http://localhost:5173/",
    specPattern: "**/*.feature",
    // Viewport por defecto
    viewportWidth: 1280,
    viewportHeight: 720,
    // Opciones para el manejo de videos y capturas de pantalla
    video: true,
    screenshotOnRunFailure: true,
    // Deshabilita la seguridad web de Chrome (necesario en algunos casos)
    chromeWebSecurity: false,
    // Limpiar assets antes de cada ejecución
    trashAssetsBeforeRuns: true,
    // Aislamiento de pruebas
    testIsolation: true,
    // Reintentos en caso de fallos
    retries: {
      runMode: 0,
      openMode: 0,
    },
    // Variables de entorno
    env: {
      version: process.env.VITE_ENV || "qa",
      TAGS: process.env.TAGS || "@regression", //Si no se define TAGS en el comando de ejecución, se usará el valor predeterminado "@Regression".
    },
    setupNodeEvents,
  },
});


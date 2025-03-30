const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      configureEnvironment(config);
      return config;
    },
    env: {
      omitFiltered: true,
      filterSpecs: true,
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});

function configureEnvironment(config) {
  const environmentName = config.env.environment || "qa";
  const environmentFilename = `./cypress/settings/${environmentName}.settings.json`;
  const settings = require(environmentFilename);

  if (settings.baseUrl) {
    config.baseUrl = settings.baseUrl;
  }

  if (settings.env) {
    config.env = {
      ...config.env,
      ...settings.env,
    };
  }
  console.log("Loaded settings for environment %s", environmentName);
}

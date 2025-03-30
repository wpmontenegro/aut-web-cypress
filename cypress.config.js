const { defineConfig } = require("cypress");
const cypressOnFix = require("cypress-on-fix");
const cypressMochawesomeReport = require("cypress-mochawesome-reporter/plugin");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Execution Report",
    reportFilename: "cypress_report",
    embeddedScreenshots: true,
    inlineAssets: true,
    timestamp: "mmddyyyy_HHMMss",
  },
  e2e: {
    async setupNodeEvents(cypressOn, config) {
      return await setupPlugins(cypressOn, config);
    },
    env: {
      omitFiltered: true,
      filterSpecs: true,
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});

async function setupPlugins(cypressOn, config) {
  const on = cypressOnFix(cypressOn);
  cypressMochawesomeReport(on);
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  setupEnvironment(config);
  return config;
}

function setupEnvironment(config) {
  const environmentName = config.env.environment || "qa";
  const environmentFilename = `./cypress/settings/${environmentName}.settings.json`;

  let settings = {};
  try {
    settings = require(environmentFilename);
  } catch (error) {
    console.warn(`No settings file found for environment ${environmentName}`);
  }

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

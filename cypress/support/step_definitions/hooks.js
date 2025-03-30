import {
  Before,
  After,
  BeforeAll,
} from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
  console.log("This hook will be executed once at the beginnig of a feature.");
});

Before({ tags: "@Login" }, () => {
  console.log(
    "This hook will be executed before scenarios tagged with @Login."
  );
});

After(() => {
  console.log("This hook will be executed after all scenarios.");
});

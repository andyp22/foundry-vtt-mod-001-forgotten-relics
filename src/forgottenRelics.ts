import { TemplatePreloader } from "./module/helper/TemplatePreloader";

console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.once("init", async () => {
  console.log("=============================HMR============================");
  console.log(
    "This code runs once the Foundry VTT software begins its initialization workflow.",
  );
});

Hooks.once("ready", async () => {
  console.log(
    "This code runs once core initialization is ready and game data is available.",
  );
});

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept();

    if (module.hot.status() === "apply") {
      for (const template in _templateCache) {
        if (Object.prototype.hasOwnProperty.call(_templateCache, template)) {
          delete _templateCache[template];
        }
      }

      TemplatePreloader.preloadHandlebarsTemplates().then(() => {
        for (const application in ui.windows) {
          if (Object.prototype.hasOwnProperty.call(ui.windows, application)) {
            ui.windows[application].render(true);
          }
        }
      });
    }
  }
}

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

  (game as any).customMacros = {
    myCustomFunction: myCustomFunction,
  };

  // Automatically create the macro if it doesn't exist
  const macroName = "Trigger Custom Function";
  let macro = (game as any).macros.find((m) => m.name === macroName);

  if (!macro) {
    macro = await Macro.create({
      name: macroName,
      type: "script",
      img: "icons/svg/dice-target.svg",
      command: "game.customMacros.myCustomFunction();",
      flags: { "custom-macro-module": true },
    });

    if (ui.notifications) {
      ui.notifications.info("Custom macro created: " + macroName);
    }
  }
});

function myCustomFunction() {
  if (ui.notifications) {
    ui.notifications.info("Custom function triggered by macro!");
    // Add custom logic here
  }
}

Hooks.on("canvasReady", async (canvas) => {
  console.log("Canvas Ready", canvas.scene);

  switch (canvas.scene?.name) {
    case "Scene 1":
      console.log("Init the Scene 1 behaviors");

      break;
    case "Scene 2":
      console.log("Init the Scene 2 behaviors");
      break;
    default:
      console.log("Unknown Scene loaded");
  }
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

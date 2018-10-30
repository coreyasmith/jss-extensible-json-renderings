var express = require("express");
var path = require("path");
var {
  ManifestManager,
  createDisconnectedLayoutService,
  createDisconnectedDictionaryService
} = require("@sitecore-jss/sitecore-jss-dev-tools");

const createCustomDisconnectedServer = options => {
  var app = options.server;
  if (!app) {
    app = express();
  }

  // the manifest manager maintains the state of the disconnected manifest data during the course of the dev run
  // it provides file watching services, and language switching capabilities
  var manifestManager = new ManifestManager({
    appName: options.appName,
    rootPath: options.appRoot,
    watchOnlySourceFiles: options.watchPaths,
    requireArg: options.requireArg
  });
  return manifestManager
    .getManifest(options.language)
    .then(function(manifest) {
      // creates a fake version of the Sitecore Layout Service that is powered by your disconnected manifest file
      var layoutService = createDisconnectedLayoutService({
        manifest: manifest,
        manifestLanguageChangeCallback: manifestManager.getManifest,
        customizeRoute: options.customizeRoute
      });

      // creates a fake version of the Sitecore Dictionary Service that is powered by your disconnected manifest file
      var dictionaryService = createDisconnectedDictionaryService({
        manifest: manifest,
        manifestLanguageChangeCallback: manifestManager.getManifest
      });

      // set up live reloading of the manifest when any manifest source file is changed
      manifestManager.setManifestUpdatedCallback(function(newManifest) {
        layoutService.updateManifest(newManifest);
        dictionaryService.updateManifest(newManifest);
        if (options.onManifestUpdated) {
          options.onManifestUpdated(newManifest);
        }
      });

      // attach our disconnected service mocking middleware to webpack dev server
      app.use(
        "/assets",
        express.static(path.join(options.appRoot, "../assets"))
      );
      app.use(
        "/data/media",
        express.static(path.join(options.appRoot, "../data/media"))
      );
      app.use("/sitecore/api/layout/render", layoutService.middleware);
      app.use(
        "/sitecore/api/jss/dictionary/:appName/:language",
        dictionaryService.middleware
      );

      if (options.afterMiddlewareRegistered) {
        options.afterMiddlewareRegistered(app);
      }

      if (options.port) {
        app.listen(options.port, function() {
          if (options.onListening) {
            options.onListening();
          } else {
            console.log(
              "JSS Disconnected-mode Proxy is listening on port " +
                options.port +
                "."
            );
          }
        });
      }
    })
    .catch(function(error) {
      if (options.onError) {
        options.onError(error);
      } else {
        console.error(error);
        process.exit(1);
      }
    });
};

exports.createCustomDisconnectedServer = createCustomDisconnectedServer;

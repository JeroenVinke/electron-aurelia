SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "local:": "jspm_packages/local/"
  },
  browserConfig: {
    "paths": {
      "electron/": "src/"
    }
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.6",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha"
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.35"
  },
  packages: {
    "electron": {
      "main": "main.js",
      "defaultExtension": "js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json",
    "local:*.json"
  ],
  map: {
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.2.0.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.3.0.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.2.0.3",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.2.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.2.0.1",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.2.0.1",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.2.0.2",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.2.0.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.3.0.1",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.2.0.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.2.0.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6",
    "monterey-jspm": "local:monterey-jspm@1.0.0"
  },
  packages: {}
});

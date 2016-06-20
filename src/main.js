export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('monterey-jspm');

  aurelia.start().then(() => aurelia.setRoot());
}

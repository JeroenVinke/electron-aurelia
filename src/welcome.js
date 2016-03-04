export class Welcome {
  constructor() {
    this.fs = require('fs');
    this.process = process;
  }

  activate() {
    let config = this.fs.readFileSync('./config.js', { encoding: 'UTF8' });
    alert(config);
  }

  loadProjectFolder() {
    let dialog = require('remote').require('dialog');
    alert(dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]}));
  }
}

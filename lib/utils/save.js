const fs = require('fs');
const inquirer = require('inquirer');

function save(event) {
  let ctrl = 17;
  let C = 67;
  if(event.keyCode === ctrl && event.keyCode === C) {
    const Save = inquirer.prompt ({
      type: 'confirm',
      name: 'Save',
      message: 'Do you want to save?'
    });

    if (Save === true) {
      fs.writeFile('/Users/blanchardau/Documents/code/Game/saveFiles', 'saveFile');
    }
  }
}

module.exports = save;
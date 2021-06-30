const chalk = require('chalk');

class Movement {
  constructor() {
    this.north = 0;
    this.south = 0;
    this.west = 0;
    this.east = 0;
  }

  setNorth(north) {
    north = parseInt(north);
    Math.round(north);

    if (isNaN(north)) {
      console.log(chalk.bold.red('Only accepts numerical values'));
    }

    if (north > 10000) {
      console.log(chalk.bold.red('You fell off the map!'));
      north = 10000;
    }
    this.north = north;
  }

  setSouth(south) {
    south = parseInt(south);
    Math.round(south);

    if (isNaN(south)) {
      throw Error('Only accepts numerical values');
    }

    if (south > 10000) {
      console.log(chalk.bold.red('You fell off the map!'));
      south = 0;
    }
    return this.south = south; 
  }

  setWest(west) {
    west = parseInt(west);
    Math.round(west);

    if (isNaN(west)) {
      console.log('Only accepts numerical values');
    }

    if (west > 10000) {
      console.log(chalk.bold.red('You fell off the map!'));
      west = 0;
    }
    return this.west = west;
  }

  setEast(east) {
    east = parseInt(east);
    Math.round(east);

    if (isNaN(east)) {
      throw Error('Only accepts numerical values');
    }

    if (east > 10000) {
      console.log(chalk.bold.red('You fell off the map!'));
      east = 0;
    }
    return this.east = east; 
  }
}

module.exports = Movement;
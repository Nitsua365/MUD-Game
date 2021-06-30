const SystemCharacter = require('../systemCharacter');
// const {
//   dragonAttacks
// } = require('./classObj/dragAttacks');

class Dragon extends SystemCharacter { 
  constructor() {
    super();
    this.username = Dragon;
    this.characterType = Dragon;
    this.health = 700; 
    this.attacks = null;
  }

  setUsername(username) {
    this.username = username;
  }

  setCharacterType(characterType) {
    this.characterType = characterType;
  }

  setHealth(health) {
    this.health = health;
  }

  setAttacks(attacks) {
    this.attacks = attacks;
  }
}

module.exports = Dragon;
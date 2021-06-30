const BaseCharacter = require('./baseCharacter');
const Weapon = require('./weaponClass');
const Movement = require('./Movement');

class User extends BaseCharacter {
  constructor() {
    super();
    this.equipment = [];
    this.position = [];
  }

  wearItem(item) {
    this.equipment.push(item);
  }

  
  get weapon() {
    return this.equipment.find(w => w instanceof Weapon);
  }

  get locate() {
    this.position.find(pos => pos instanceof Movement);
    this.position.push(Movement); 
  }
  
  // locate(pos) {

  // }

  // get position() {
  //   return this.position.find(pos => pos instanceof Movement);
  // }


}


module.exports = User;
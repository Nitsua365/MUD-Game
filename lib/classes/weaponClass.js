const weapons = require('./classObj/weapon');


class Weapon {
  constructor(weapon, attacks) {
    this.weapon = weapon;
    this.attacks = attacks;
  }


  setWeapon(weapon) {

    switch (weapon) {

    case 'Wand':
      this.weapon = weapons.wand;
      break;

    case 'Sword':
      this.weapon = weapons.sword;
      break;

    case 'No Weapon':
      this.weapon = weapons.noWeapon;
    }
  }


  setAttacks(attacks) {
    this.attacks = attacks;
  }
}


module.exports = {
  Weapon, 
};
const inquirer = require('inquirer');
const chalk = require('chalk');
const {
  dragonAttacks
} = require('./classes/classObj/dragAttacks');
const {
  dialogue, 
  dragonRetreat
} = require('./utils/prompt');
const {
  Weapon
} = require('./classes/weaponClass');
const {
  charAttacks,
  badAttacks
} = require('./classes/classObj/damageAttacks');
const Dragon = require('./classes/mobs/dragon');
const {
  askMove
} = require('./move');


const weapon = new Weapon();
async function introDialogue(user) {
  const diaAnswer = await inquirer.prompt(dialogue);
  weapon.setWeapon(diaAnswer.weaponSelect);
  user.wearItem(weapon); 
}

//attack selection
async function selectAttack(user) {

  switch (user.characterType) {

  case 'Wizard': {
    let userHealth = 300;
    health.push(userHealth);
    const wizAnswers = await inquirer.prompt({
      type: 'list',
      name: 'wizAttack',
      message: 'ATTACK!!!',
      choices: ['Basic Spell', 'Super Spell']
    });
    if (weapon.weapon === 'Wand') {
      if (wizAnswers.wizAttack === 'Basic Spell') {
        damageArray.push(charAttacks.wizAttack);
        weapon.setAttacks(charAttacks.wizAttack);
      }
      // super spell
      else {
        specialDamageArray.push(charAttacks.wizAttackSuper);
        weapon.setAttacks(charAttacks.wizAttackSuper);
      }
    } 
    // bad weapon choice path
    else {
      if (wizAnswers.wizAttack === 'Basic Spell') {
        damageArray.push(badAttacks.attack);
        weapon.setAttacks(badAttacks.attack);
      }
      else {
        specialDamageArray.push(badAttacks.attack);
        weapon.setAttacks(badAttacks.attack);
      }
    }
    break;
  }
  
  case 'Rodkey': {
    let userHealth = 500;
    health.push(userHealth);
    const rodAnswers = await inquirer.prompt({
      type: 'list',
      name: 'rodAttack',
      message: 'ATTACK!!!',
      choices: ['Attack', 'Super Attack']
    });
    if (weapon.weapon === 'Sword') {
      if (rodAnswers.rodAttack === 'Attack') {
        damageArray.push(charAttacks.rodAttack);
        weapon.setAttacks(charAttacks.rodAttack);
      }
      //super attack
      else {
        specialDamageArray.push(charAttacks.rodAttackSuper);
        weapon.setAttacks(charAttacks.rodAttackSuper); 
      }
    } 
    //bad path 
    else {
      if (rodAnswers.rodAttack === 'Attack') {
        damageArray.push(badAttacks.attack);
        weapon.setAttacks(badAttacks.attack);
      }
      else {
        specialDamageArray.push(badAttacks.attack);
        weapon.setAttacks(badAttacks.attack);
      } 
    }
    break;
  }

  case 'Superman': {
    let userHealth = 1000;
    health.push(userHealth);
    const supAnswers = await inquirer.prompt({
      type: 'list',
      name: 'supAttack',
      message: 'ATTACK!!!',
      choices: ['Laser Eyes', 'Super Punch']
    });
    if (weapon.weapon === 'No Weapon') {
      if (supAnswers.supAttack === 'Laser Eyes') {
        damageArray.push(charAttacks.supAttackLaser);
        weapon.setAttacks(charAttacks.supAttackLaser);
      }
      //Super Punch
      else {
        specialDamageArray.push(charAttacks.supAttackPunch);
        weapon.setAttacks(charAttacks.supAttackPunch);
      }
    } 
    //bad path
    else {
      if (supAnswers.supAttack === 'Attack') {
        damageArray.push(badAttacks.attack);
        weapon.setAttacks(badAttacks.attack);
      }
      else {
        specialDamageArray.push(badAttacks.attack);
        weapon.setAttacks(badAttacks.attack);
      }
    }
    break;
  }
  }
}

const health = [];
const damageArray = [];
const specialDamageArray = [];


// will call function based on attack that was selected
function introBattle(user) {
  const dragon = new Dragon();
  dragon.setAttacks(dragonAttacks.introAttacks);
  let intArr = [];

  //basic attack
  if (damageArray.length >= 1) {
    let interval = setInterval(function() {
      attackCycle(dragon, intArr[0], intArr[1], user);
    }, 500); 
    intArr.push(interval);
  } 
  //super attack
  else if (specialDamageArray.length >= 1) {
    let interval = setInterval(function() {
      attackCycleSuper(dragon, intArr[0], intArr[1]);
    }, 500);
    intArr.push(interval);
  }

  // dragon attacking
  if (damageArray.length >= 1 || specialDamageArray.length >= 1) {
    let interval = setInterval(function() {    
      dragonAttack(dragon, user, intArr[0], intArr[1]);
    }, 500);
    intArr.push(interval);
  }
}

//bad and basic attacks pushed here
async function attackCycle(dragon, interval, intervalTwo, user) {
  let minHealth = 1;
  if (minHealth <= dragon.health) {
    let i = (dragon.health - damageArray[0]);
    dragon.health = i;
    if (i <= 0 || i <= 1) {
      i = 0;
      dragon.health = 0;
    }

    if (dragon.health <= 100) {
      (console.log(chalk.bold.red('Dragon Health:', dragon.health + '/700')));
    } else {
      console.log('Dragon Health:', dragon.health + '/700');
    }

    if (dragon.health <= 1) {
      clearInterval(interval);
      clearInterval(intervalTwo);
      await inquirer.prompt(dragonRetreat);
      askMove(user);
    }
  } 
}

//super attacks pushed here
function attackCycleSuper(dragon, interval, intervalTwo) {
  let minHealthSpecial = 1;
  if (minHealthSpecial <= dragon.health) {
    let o = (dragon.health - specialDamageArray[0]);
    dragon.health = o;
    if (o <= 0 || o <= 1) {
      o = 0;
      dragon.health = 0;
    }

    if (dragon.health <= 100) {
      console.log(chalk.bold.red('Dragon Health:', dragon.health + '/700'));
    } else {
      console.log('Dragon Health:', dragon.health + '/700');
    }

    if (dragon.health <= 1) {
      clearInterval(interval);
      clearInterval(intervalTwo);
      inquirer.prompt(dragonRetreat);
    }
  }
}

//dragon attacks user back here
async function dragonAttack(dragon, user, interval, intervalTwo) {
  let minHealth = 1;
  if (minHealth <= user.health) {
    let o = (user.health - dragon.attacks);
    user.health = o;
    if (o <= 0 || o <= 1) {
      o = 0;
      user.health = 0; 
    }

    //color
    if (user.health <= 100) {
      console.log(
        chalk.bold.red(
          user.characterType + ' Health: ' + user.health + '/' + health[0])
      );
    } else {
      console.log(
        chalk.bold.green(
          user.characterType + ' Health: ' + user.health + '/' + health[0])
      );
    }

    if (user.health <= 1) {
      clearInterval(interval);
      clearInterval(intervalTwo);
      introRespawn(user);
    }
  }
}

async function introRespawn(user) {
  const death = await inquirer.prompt([
  {
    name: 'dead',
    message: 'YOU DIED!!!'
  },
  {
    name: 'respawn',
    type: 'confirm',
    message: 'Respawn?'
  }
]);

  if (!death.respawn) {
    process.exit();
  } else {
    selectAttack(user);
  }
}

module.exports = {
  introDialogue, 
  selectAttack, 
  introBattle,
};
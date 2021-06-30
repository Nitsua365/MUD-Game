const moment = require('moment');
const colors = require('chalk');
// const {characters} = require('/Users/blanchardau/Documents/code/Game/main.js');

//user questions
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your Username?'
  },
  {
    type: 'list',
    name: 'characterSelect',
    message: 'Select your character',
    choices: ['Wizard', 'Rodkey', 'Superman']
  },
  {
    type: 'input',
    name: 'age',
    message: 'What is your age?'
  }
];

/**
 * Send info to user's screen
 * @param {string} message 
 */

function output(message) {
  console.log(colors`{gray ${moment().format('L')}:} 
  {white ${message}}`);
}

// starting dialogue
const dialogue = [
  {
    name: 'dialogueOne',
    message: 'My name is olaf'
  },
  {
    name: 'dialogueTwo',
    message: 'Our village is under attack! We need your help!'
  },
  {
    name: ' ',
    message: '...'
  },
  {
    type: 'list',
    name: 'weaponSelect',
    message: 'Choose your Weapon:',
    choices: ['Wand', 'Sword', 'No Weapon']
  },
  {
    name: 'dragon',
    message: 'Oh No! The ' + 'Dragon' + ' is here!' //change dragon to class Dragon
  }
];

//post battle 
const dragonRetreat = [
  {
    name: 'deafeat',
    message: 'Dragon Defeated!!'
  },
  {
    name: 'cheer',
    message: 'HOO RAH!'
  },
  {
    name: 'retreat',
    message: 'That coward is running away!'
  },
  {
    name: 'willReturn',
    message: 'He will be back soon though'
  },
  {
    name: 'introduce',
    message: 'You seem low on health',
  },
  {
    name: 'move',
    message: 'Move 200 paces West to visit the Item-shop'
  }
];

//intro to item-shop
const itemShop = [
  {
    name: 'itemShop',
    message: 'Welcome to the Item-Shop'
  },
  {
    name: 'location',
    message: 'These are placed throughout the map'
  },
  {
    name: 'item',
    message: 'You can buy health potions, shield potions,\n weapon unlocks, and various other items as you progress through the game'
  }
]

module.exports = {
  output,
  questions,
  dialogue, 
  dragonRetreat,
  itemShop
};
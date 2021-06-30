const inquirer = require('inquirer');
const CharacterHealth = require('../classes/classObj/health');
const User = require('/Users/blanchardau/Documents/code/Game/lib/classes/userCharacter.js');
const {
  questions
} = require('./prompt');


async function createUser(user) {
  if (!user) {
    user = new User();
  }

  const answers = await inquirer.prompt(questions);
  const {
    userConfirm
  } = await inquirer.prompt({
    type: 'confirm',
    name: 'userConfirm',
    message: 'Are you sure?',
    default: null
  });

  if (!userConfirm) {
    return createUser(user);
  } else {

    user.setUsername(answers.username);
    user.setCharacterType(answers.characterSelect);
    user.setAge(answers.age);

    switch (answers.characterSelect) {
    case 'Wizard':
      user.setHealth(CharacterHealth.wizHealth);
      break;

    case 'Rodkey':
      user.setHealth(CharacterHealth.rodHealth);
      break;

    case 'Superman': 
      user.setHealth(CharacterHealth.supHealth);
      break;
    }


    await inquirer.prompt({
      name: 'Greeting Dialogue',
      message: 'Hello, ' + user.username + ' we\'ve been expecting you...',
    });
    return user;
  }
}


module.exports = {
  createUser,
};
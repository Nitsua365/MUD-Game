const {
  createUser
} = require('./lib/utils/createUser');

const {
  introDialogue, 
  selectAttack, 
  introBattle
} = require('./lib/introBattle');

const {
  output
} = require('./lib/utils/prompt');


const server = {
  refreshRate: 100, // unit is miliseconds
  state: 'offline', // offline, online, pending, error
};
const characters = [];


async function main() {

  switch (server.state) {
    
  case 'offline': {
    server.state = 'pending';
    break;
  }

  case 'pending': {
    const user = await createUser();
    await characters.push(user);
    await output(user);
    await introDialogue(user);
    await selectAttack(user);
    await introBattle(user);
    server.state = 'online';
    break;
  }

  case 'online': {
    
    break;
  }

  case 'error': {
    console.log('Something Went Wrong :/');
    setTimeout(console.log('Please Try Again Later...')), 1000;
    break;
  }

  default:
    server.state = 'error';
  }
  setTimeout(main, server.refreshRate);
}


// startup
main();

module.exports = {
  characters
};
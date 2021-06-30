const inquirer = require('inquirer');
const chalk = require('chalk');
const prompt = require('./utils/prompt');
const Movement = require('./classes/Movement');
const ask = inquirer.prompt;
const toNum = parseInt;


//FUNCTION THAT WILL ASK USER IN TERMINAL WHAT DIRECTION THEY WANT TO GO IN
async function askMove(user) {
  const Move = new Movement();
  const direction = await ask({
    type: 'list',
    name: 'move',
    message: 'MOVE',
    choices: ['North', 'South', 'West', 'East']
  });
  move(Move, direction, user);
}

//A TEMPORARY VARIABLE FOR ADDING TWO DIFFERENT VECTORS GOING IN THE SAME DIRECTION
const Temp = {
  northTemp: [],
  southTemp: [],
  westTemp: [],
  eastTemp: [],
}


//FUNCTION THAT HANDLES MOVEMENT AND POSITION
async function move(Move, direction, user) {
// BASED ON WHAT USER PICKS 
// ALL STATEMENTS WILL PUSH UP TO TEMP VARIABLE IF THE SAME DIRECTION IS MOVED TWICE
// WILL ASSIGN TO MOVEMENT CLASS WHEN FINISHED 

  switch (direction.move) {

  case 'North': 
    const North = await ask({
      type: 'input',
      name: 'northVal',
      message: 'How many paces?'
    })
    if (toNum(North.northVal) !== 0 && !Temp.northTemp.length) {
      Temp.northTemp.push(toNum(North.northVal));
    }
    else if (Temp.northTemp.length >= 1) {
      Temp.northTemp.push(toNum(North.northVal));
      let x = Temp.northTemp[0] + Temp.northTemp[1];
      Temp.northTemp.pop();
      Temp.northTemp.pop();
      Temp.northTemp.push(x);
      Move.setNorth(toNum(x));
    }
    break;

    
  case 'South': 
  const South = await ask({
    type: 'input',
    name: 'southVal',
    message: 'How many paces?'
  })
  if (toNum(South.southVal) !== 0 && !Temp.southTemp.length) {
    Temp.southTemp.push(toNum(South.southVal));
  }
  else if (Temp.southTemp.length >= 1) {
    Temp.southTemp.push(toNum(South.southVal));
    let x = Temp.southTemp[0] + Temp.southTemp[1];
    Temp.southTemp.pop();
    Temp.southTemp.pop();
    Temp.southTemp.push(x);
    Move.setSouth(toNum(x));
  }
  break;
  

  case 'West': 
    const West = await ask({
    type: 'input',
    name: 'westVal',
    message: 'How many paces?'
  });
    if (toNum(West.westVal) !== 0 && !Temp.westTemp.length) {
      Temp.westTemp.push(toNum(West.westVal));
    }
    else if (Temp.westTemp.length >= 1) {
      Temp.westTemp.push(toNum(West.westVal));
      let x = Temp.westTemp[0] + Temp.westTemp[1];
      Temp.westTemp.pop();
      Temp.westTemp.pop();
      Temp.westTemp.push(x);
    }
    break;
  
  
  case 'East': 
  const East = await ask({
    type: 'input',
    name: 'eastVal',
    message: 'How many paces?'
  })
  if (toNum(East.eastVal) !== 0 && !Temp.eastTemp.length) {
    Temp.eastTemp.push(toNum(East.eastVal));
  }
  else if (Temp.eastTemp.length >= 1) {
    Temp.eastTemp.push(toNum(East.eastVal));
    let x = Temp.eastTemp[0] + Temp.eastTemp[1];
    Temp.eastTemp.pop();
    Temp.eastTemp.pop();
    Temp.eastTemp.push(x);
  }
  break;
}

/*
SETS CLASS BEFORE THE VECTORS ARE SUBTRACTED THAT IS IF TWO OPPOSITE 
DIRECTIONS ARE CHOSEN
*/

  if (Temp.northTemp.length === 1) {
    Move.setNorth(Temp.northTemp[0]); 
  }

  if (Temp.southTemp.length === 1) {
    Move.setSouth(Temp.southTemp[0]); 
  }

  if (Temp.eastTemp.length === 1) {
    Move.setEast(Temp.eastTemp[0]); 
  }

  if (Temp.westTemp.length === 1) {
    Move.setWest(Temp.westTemp[0]); 
  }


//algorithm to move around the map if two opposite directions are chosen
if (Move.west > 0 && Move.east > 0 && 
  Move.west > Move.east) {
      let x = Move.west - Move.east;
      Move.setWest(x);
      Move.setEast(0);
  } else if (Move.west > 0 && Move.east > 0 && 
    Move.east > Move.west) {
      let x = Move.east - Move.west;
      Move.setEast(x);
      Move.setWest(0);
} 

if (Move.south > 0 && Move.north > 0 && 
  Move.north > Move.south) {
    let x = Move.north - Move.south;
    Move.setNorth(x);
    Move.setSouth(0);
} else if (Move.south > 0 && Move.north > 0 && 
  Move.south > Move.north) {
    let x = Move.south - Move.north;
    Move.setSouth(x);
    Move.setNorth(0);
} 
/*
if the user follows prompt correctly and moves 200 paces 
west he/she will be greeted with this series of prompts 
*/
  if (Move.west === 200 && Move.south === 0 && 
    Move.east === 0 && Move.north === 0) {
    await ask(prompt.itemShop);
    await posStatus(Move);
    return askMove(user);
  } else {
    //if false it will ask the user to move again
    posStatus(Move)
    return askMove(user);
  }
}

function posStatus(Move) {
  let blue = chalk.hex("#006eff").bold;
  let moving = ['North: ' + blue(Move.north), 
  'South: ' + blue(Move.south), 
  'West: ' + blue(Move.west), 
  'East: ' + blue(Move.east)];
  console.log(chalk.bold('Position:'));
  for(var i = 0; i < 4; i++) {
    console.log(moving[i]);
  }
}

//EXPORTS TO MAIN CALL STACK
module.exports = {
  askMove,
};
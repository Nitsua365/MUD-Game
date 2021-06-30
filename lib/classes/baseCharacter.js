class BaseCharacter {
  
  constructor() {
    this.username = 'Unknown';
    this.characterType = 'Unknown';
    this.age = null;
    this.health = null;
  }

  //Output of user information
  toString() {
    let output = 'User(Age: Unknown, Type: Unknown)';

    output = `${this.username || 'User'}(`;
    output += `Age: ${this.age || 'Unknown'}`;
    output += `, Type: ${this.characterType || 'Unknown'}`;
    output += `, Health: ${this.health + 'HP' || 'Unknown'}`;
    output += ')';

    return output;
  }

  setUsername(username) {
    this.username = username;
  }

  setCharacterType(characterType) {

    switch (characterType) {
      
    case 'Wizard':
      this.characterType = characterType;
      break;

    case 'Rodkey':
      this.characterType = characterType;
      break;

    case 'Superman':
      this.characterType = characterType;
    }
  }

  setHealth(health) {
    this.health = health;
  }
  
  setAge(age) {
    age = parseFloat(age);

    if (isNaN(age)) {
      throw new Error('Age is not a Number');
    }


    if (age <= 13) {
      // do let them set age
      throw new Error('We do not allow peeps 12 and under');
    }
    this.age = age;
  }
}

module.exports = BaseCharacter;
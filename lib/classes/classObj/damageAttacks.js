const charAttacks = {
  wizAttack: Math.round(Math.random() * (250 - 200) + 200),
  wizAttackSuper: Math.round(Math.random() * (350 - 300) + 300),
  supAttackLaser: Math.round(Math.random() * (90 - 60) + 60),
  supAttackPunch: Math.round(Math.random() * (130 - 105) + 105),
  rodAttack: Math.round(Math.random() * (150 - 130) + 130),
  rodAttackSuper: Math.round(Math.random() * (200 - 160) + 160)
};

const badAttacks = {
  attack: Math.round(Math.random() * (30 - 15) + 15)
};

module.exports = {
  charAttacks, 
  badAttacks
};
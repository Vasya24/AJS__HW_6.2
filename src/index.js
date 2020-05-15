function Character(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
  this.damage = (points) => {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 1) {
      delete this.Character
    }
  }  
}

export { Character }
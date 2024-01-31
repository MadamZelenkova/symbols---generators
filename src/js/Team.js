import Character from "./Character";

export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    if (this.characters.includes(character)) {
      throw new Error("Персонаж уже в команде");
    } else {
      this.characters.push(character);
    }
  }

  *[Symbol.iterator]() {
    for (let character of this.characters) {
      yield character;
    }
  }
}

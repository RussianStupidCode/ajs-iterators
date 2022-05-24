export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  [Symbol.iterator]() {
    return this.persons[Symbol.iterator]();
  }
}

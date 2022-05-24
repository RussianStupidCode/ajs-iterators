export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  * [Symbol.iterator]() {
    yield* this.persons;
  }
}

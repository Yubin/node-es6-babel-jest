export default class User {
  constructor(name) {
    this.name = name;
  }
  print() {
    return `name: ${this.name}`;
  }
}

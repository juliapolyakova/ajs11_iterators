export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    for (const player of characters) {
      this.members.add(player);
    }
  }

  [Symbol.iterator]() {
    const players = this.toArray();
    let current = 0;
    const last = players.length;

    return {
      next() {
        if (current <= last) {
          const valueCurrent = players[current];
          current += 1;
          return {
            done: false,
            value: valueCurrent,
          };
        }
        return {
          done: true,
        };
      },
    };
  }

  toArray() {
    return Array.from(this.members);
  }
}

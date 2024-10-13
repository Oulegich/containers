export class Team {
  constructor() {
    this.members = new Set();
  }

  add(bro) {
    if (this.members.has(bro)) {
      throw new Error('Ошибка')
    } else {
      this.members.add(bro);
    }
  }

  addAll(...guys) {
    for (const bro of guys) {
      const result = Array.from(this.members).find(member => member.name === bro.name);
      if (!result) {
        this.members.add(bro);
      }
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
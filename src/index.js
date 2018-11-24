class OpenSourceTest {
  constructor() {
    this.test = {};
  }

  set(key, value) {
    this.test[key] = value;
  }

  get(key) {
    return this.test[key];
  }

  example() {
    this.test = {
      'arr': [0, 1, 2, 3, 4, 5, 6]
    };
  }

  clear() {
    this.test = {};
  }
}

window.OpenSourceTest = OpenSourceTest;
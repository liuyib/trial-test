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
}

window.OpenSourceTest = OpenSourceTest;
'use strict';

var stimulus = require('stimulus');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class _class extends stimulus.Controller {
  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }

}

_defineProperty(_class, "targets", ["name", "output"]);

module.exports = _class;
//# sourceMappingURL=index.js.map

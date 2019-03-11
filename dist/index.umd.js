(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('stimulus')) :
  typeof define === 'function' && define.amd ? define(['stimulus'], factory) :
  (global = global || self, global['stimulus-library-boilerplate'] = factory(global.Stimulus));
}(this, function (stimulus) { 'use strict';

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

  return _class;

}));
//# sourceMappingURL=index.umd.js.map

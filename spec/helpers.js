import { Application } from "stimulus";

async function registerController(element, controllerType) {
  const stimulusApp = Application.start();
  stimulusApp.register(element, controllerType);
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(stimulusApp.controllers[0]);
    })
  );
}

function beforeEachSuite(title, fn) {
  before(title, function() {
    const suites = this.test.parent.suites || [];
    suites.forEach(s => {
      s.beforeAll(fn);
      const hook = s._beforeAll.pop();
      s._beforeAll.unshift(hook);
    });
  });
}

export { registerController, beforeEachSuite };

import MyController from "../src/index";

import { registerController, beforeEachSuite } from "./helpers";
import chai, { expect } from "chai";
import chaiDom from "chai-dom";
import sinonChai from "sinon-chai";

let controller;

chai.use(chaiDom);
chai.use(sinonChai);

describe("My controller tests", function() {
  beforeEachSuite("initialize controller", async function() {
    fixture.load("index.html");
    controller = await registerController("hello", MyController);
  });

  describe("Initial state", function() {
    it("Stimulus controller is initialized", function() {
      expect(controller.connect).to.exist;
    });

    it(`the controller greeted me`, function() {
      fixture.el.querySelector("input").value = "Adrien";
      fixture.el.querySelector("button").click();

      expect(fixture.el).to.contain.text("Hello, Adrien!");
    });
  });
});

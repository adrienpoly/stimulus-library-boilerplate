import { Application } from "stimulus";
import HelloController from "../src/index";

const application = Application.start();
application.register("hello", HelloController);

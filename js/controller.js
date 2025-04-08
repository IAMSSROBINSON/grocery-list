import model from "./model.js"
import view from "./view.js"

const controller = {
    init () {
        console.log("Hello from controller init");
        model.init();
        view.init();
    }
}
controller.init();

export default controller;
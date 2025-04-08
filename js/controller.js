import model from "./model.js"
import view from "./view.js"
import data from "./data.js";



const controller = {
    init () {
        console.log("Hello from controller init");
        model.init();
        view.init();

        this.initializeData();
    },
    initializeData() {
        console.log("Initializing data from controller");
        const isLocalStorage = localStorage.getItem("groceryListAppData");

        if (isLocalStorage) {
            console.log("Local storage found:", isLocalStorage);
            model.parseAndSetLocalDataToApp(isLocalStorage);
        } else {
            console.log("Local storage not found:", isLocalStorage);
            localStorage.setItem("groceryListAppData", JSON.stringify(data));
            model.setNewAppData(data);
        }
    }

}
controller.init();

export default controller;
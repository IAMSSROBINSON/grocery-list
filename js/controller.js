import data from "./data.js";
import model from "./model.js"
import view from "./view.js"

const controller = {
    init () {
        console.log("Hello from controller init");
        model.init();
        view.init();

        this.initializeData();

        const list = model.getList();
        list.length > 0 ? view.renderList(list) : null;
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
    },
    handleDelete (e) {
        console.log("controller.handleDelete", e);
        if([...e.target.classList].includes("list-item-delete-button")) {
            console.log("delete button clicked");
            const target = e.target;
            console.log("target", e.target);

            const parent = target.parentElement;
            console.log("target parent", e.target.parentElement);

            const parentId = parent.id;
            console.log("target parent id", e.target.parentElement.id);

            model.removeItem(parentId);
            view.removeItem(parentId);
            this.setLocalStorageFromModelData();
        }
    },
    setLocalStorageFromModelData () {
            const data = model.getData();
            localStorage.setItem("groceryListAppData", JSON.stringify(data));
            console.log("newLocalStorageData:", localStorage.getItem("groceryListAppData"));
    }

}
controller.init();

export default controller;
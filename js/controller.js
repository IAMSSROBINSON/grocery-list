import data from "./data.js";
import Item from "./Item.js";
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
            console.log("delete button clicked");

            const parentId = this.getParentIdFromTarget(e)
            if (parentId) {
                model.removeItem(parentId);
                view.removeItem(parentId);
                this.setLocalStorageFromModelData();
            }
    },
    handleCheckbox (e) {
        console.log("controller.handleCheckbox", e);
            console.log("controller checkbox clicked");

            const parentId = this.getParentIdFromTarget(e)
            if (parentId) {
                console.log("controller checkbox parent id:", parentId);
                let itemObjIndex = model.getItemIndexById(parentId);
                console.log("itemObjIndex:", itemObjIndex);

                let item = model.getItemObjByIdx(itemObjIndex);
                console.log("checkboxed item:", item.isChecked);
                console.log("checkboxed item:", item);
                
                item.isChecked = !item.isChecked;
                console.log("checkboxed item:", item.isChecked);
                console.log("checkboxed item:", item);
                this.setLocalStorageFromModelData();
            }


    },
    getParentIdFromTarget(e) {
        const target = e?.target;
            console.log("target", e?.target);

            const parent = target?.parentElement;
            console.log("target parent", e?.target?.parentElement);

            const parentId = parent?.id;
            console.log("target parent id", e?.target?.parentElement?.id);
            
            return parentId ?? null;
    },
    setLocalStorageFromModelData () {
            const data = model.getData();
            localStorage.setItem("groceryListAppData", JSON.stringify(data));
            console.log("newLocalStorageData:", localStorage.getItem("groceryListAppData"));
    },
    handleFormValidation (e) {
        console.log("controller handle form validation");
    },
    createNewItemClassAndAddToDataItemsListThenRenderUI (name, quantity, unit) {
        const item = new Item(name, quantity, unit);
        console.log("controller createNewItemClass:", item);
        model.addItemObjToDataListOfItems(item);
        this.setLocalStorageFromModelData();
        view.renderList([item]);
        view.clearFormInputs();
    }

}
controller.init();

export default controller;
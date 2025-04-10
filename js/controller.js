import data from "./data.js";
import Item from "./Item.js";
import model from "./model.js";
import view from "./view.js";

const controller = {
  init() {
    ("Hello from controller init");
    model.init();
    view.init();

    this.initializeData();

    const list = model.getList();
    list.length > 0 ? view.renderList(list) : null;
  },
  initializeData() {
    ("Initializing data from controller");
    const isLocalStorage = localStorage.getItem("groceryListAppData");

    if (isLocalStorage) {
      "Local storage found:", isLocalStorage;
      model.parseAndSetLocalDataToApp(isLocalStorage);
    } else {
      "Local storage not found:", isLocalStorage;
      localStorage.setItem("groceryListAppData", JSON.stringify(data));
      model.setNewAppData(data);
    }
  },
  handleDelete(e) {
    "controller.handleDelete", e;
    ("delete button clicked");

    const parentId = this.getParentIdFromTarget(e);
    if (parentId) {
      model.removeItem(parentId);
      view.removeItem(parentId);
      this.setLocalStorageFromModelData();
    }
  },
  handleCheckbox(e) {
    "controller.handleCheckbox", e;
    ("controller checkbox clicked");

    const parentId = this.getParentIdFromTarget(e);
    if (parentId) {
      "controller checkbox parent id:", parentId;
      let itemObjIndex = model.getItemIndexById(parentId);
      "itemObjIndex:", itemObjIndex;

      let item = model.getItemObjByIdx(itemObjIndex);
      "checkboxed item:", item.isChecked;
      "checkboxed item:", item;

      item.isChecked = !item.isChecked;
      "checkboxed item:", item.isChecked;
      "checkboxed item:", item;
      this.setLocalStorageFromModelData();
    }
  },
  getParentIdFromTarget(e) {
    let id = null;
    const target = e?.target;
    "target", e?.target;

    let parent = target?.parentElement;
    "target parent", e?.target?.parentElement;

    let parentId = parent?.id;
    "target parent id", e?.target?.parentElement?.id;

    while (!id) {
      parent = parent.parentElement;
      id = parent.id;
      "while parent id:", parent, id;
    }

    return id ?? null;
  },
  setLocalStorageFromModelData() {
    const data = model.getData();
    localStorage.setItem("groceryListAppData", JSON.stringify(data));
    "newLocalStorageData:", localStorage.getItem("groceryListAppData");
  },
  handleFormValidation(e) {
    ("controller handle form validation");
  },
  createNewItemClassAndAddToDataItemsListThenRenderUI(name, quantity, unit) {
    const item = new Item(name, quantity, unit);
    "controller createNewItemClass:", item;
    model.addItemObjToDataListOfItems(item);
    this.setLocalStorageFromModelData();
    view.renderList([item]);
    view.clearFormInputs();
  },
};
controller.init();

export default controller;

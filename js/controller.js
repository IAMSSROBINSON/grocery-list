import data from "./data.js";
import Item from "./Item.js";
import model from "./model.js";
import view from "./view.js";

const controller = {
  init() {
    model.init();
    view.init();

    this.initializeData();

    const list = model.getList();
    list.length > 0 ? view.renderList(list) : null;
  },
  initializeData() {
    const isLocalStorage = localStorage.getItem("groceryListAppData");

    if (isLocalStorage) {
      model.parseAndSetLocalDataToApp(isLocalStorage);
    } else {
      localStorage.setItem("groceryListAppData", JSON.stringify(data));
      model.setNewAppData(data);
    }
  },
  handleDelete(e) {
    const parentId = this.getParentIdFromTarget(e);
    if (parentId) {
      model.removeItem(parentId);
      view.removeItem(parentId);
      this.setLocalStorageFromModelData();
    }
  },
  handleCheckbox(e) {
    const parentId = this.getParentIdFromTarget(e);
    if (parentId) {
      let itemObjIndex = model.getItemIndexById(parentId);
      let item = model.getItemObjByIdx(itemObjIndex);
      item.isChecked = !item.isChecked;
      this.setLocalStorageFromModelData();
    }
  },
  getParentIdFromTarget(e) {
    const target = e?.target;
    let parent = target?.parentElement;
    let parentId = parent?.id;

    while (!parentId) {
      parent = parent.parentElement;
      parentId = parent?.id;
    }

    return parentId ?? null;
  },
  setLocalStorageFromModelData() {
    const data = model.getData();
    localStorage.setItem("groceryListAppData", JSON.stringify(data));
  },
  createNewItemClassAndAddToDataItemsListThenRenderUI(name, quantity, unit) {
    const item = new Item(name, quantity, unit);
    model.addItemObjToDataListOfItems(item);
    this.setLocalStorageFromModelData();
    view.renderList([item]);
    view.clearFormInputs();
  },
};
controller.init();

export default controller;

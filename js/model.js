const model = {
  defaultDataObj: {
    itemsList: [],
  },
  data: null,
  init() {
    ("Hello from model init");
  },
  parseAndSetLocalDataToApp(jsonObj) {
    this.data = JSON.parse(jsonObj) || this.defaultDataObj;
    "App data set:", this.data;
  },
  setNewAppData(data) {
    this.data = data || this.defaultDataObj;
    ("New local storage set");
    "New app data set:", this.data;
  },
  getList() {
    return this.data.itemsList;
  },
  getData() {
    return this.data;
  },
  removeItem(id) {
    if (id) {
      const itemIndex = this.getItemIndexById(id);

      if (itemIndex !== -1) {
        const item = this.getItemObjByIdx(itemIndex);
        this.data.itemsList.splice(itemIndex, 1);
        "Item removed from data:", item;
        "Data remaining:", this.data.itemsList;
      }
    }
  },
  getItemIndexById(id) {
    const itemIndex = this.data.itemsList.findIndex((listItemObj) => {
      "findIndex listitem:", listItemObj;
      return listItemObj.id === id;
    });
    return itemIndex;
  },
  getItemObjByIdx(index) {
    return this.data.itemsList[index];
  },
  addItemObjToDataListOfItems(itemObj) {
    this.data.itemsList.push(itemObj);
    "model itemObj add to itemsList", this.data.itemsList;
  },
};

export default model;

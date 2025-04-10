const model = {
  defaultDataObj: {
    itemsList: [],
  },
  data: null,
  init() {
  },
  parseAndSetLocalDataToApp(jsonObj) {
    this.data = JSON.parse(jsonObj) || this.defaultDataObj;
  },
  setNewAppData(data) {
    this.data = data || this.defaultDataObj;
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
        this.data.itemsList.splice(itemIndex, 1);
      }
    }
  },
  getItemIndexById(id) {
    const itemIndex = this.data.itemsList.findIndex((listItemObj) => {
      return listItemObj.id === id;
    });
    return itemIndex;
  },
  getItemObjByIdx(index) {
    return this.data.itemsList[index];
  },
  addItemObjToDataListOfItems(itemObj) {
    this.data.itemsList.push(itemObj);
  },
};

export default model;

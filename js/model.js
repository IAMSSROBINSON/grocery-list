const model = {
    defaultDataObj : {
        itemsList: [],
    },
    data : null,
    init () {
        console.log("Hello from model init");
    },
    parseAndSetLocalDataToApp(jsonObj) {
        this.data = JSON.parse(jsonObj) || this.defaultDataObj;
        console.log("App data set:", this.data);
    },
    setNewAppData (data) {
        this.data = data || this.defaultDataObj;
        console.log("New local storage set");
        console.log("New app data set:", this.data);
    },
    getList () {
        return this.data.itemsList;
    },
    getData () {
        return this.data;
    },
    removeItem (id) {
        if (id) {
            const itemIndex = this.data.itemsList.findIndex((listItemObj) => {
                console.log("findIndex listitem:", listItemObj);
                return listItemObj.id === id;
            })
            
            if (itemIndex !== -1) {
                const item = this.data.itemsList[itemIndex];
                this.data.itemsList.splice(itemIndex, 1);
                console.log("Item removed from data:", item);
                console.log("Data remaining:", this.data.itemsList);
            }
        }
    }
}

export default model;
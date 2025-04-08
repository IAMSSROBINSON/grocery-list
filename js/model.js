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
    }
}

export default model;
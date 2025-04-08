const view = {
    init () {
        console.log("Hello from view init");
        this.cacheMainContentDOM();
    },
    renderList (listArr) {
        console.log("render view listArr:", listArr);
    },
    cacheMainContentDOM () {
        this.mainContentContainer = document.querySelector(".main-content-container");

        this.mainContentNumOfItems = document.querySelector(".main-content-numOfItems");

        this.mainContentListContainer = document.querySelector(".main-content-list-container");
    }
}

export default view;
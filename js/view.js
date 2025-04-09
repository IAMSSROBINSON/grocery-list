import ListItem from "../components/ListItem/index.js";

const view = {
    init () {
        console.log("Hello from view init");
        this.cacheMainContentDOM();
    },
    cacheMainContentDOM () {
        this.mainContentContainer = document.querySelector(".main-content-container");

        this.mainContentNumOfItems = document.querySelector(".main-content-numOfItems");

        this.mainContentListContainer = document.querySelector(".main-content-list-container");
    },
    renderList (listArr) {
        console.log("render view listArr:", listArr);
        console.log("render List Item:", ListItem());
        this.mainContentListContainer.appendChild(ListItem());
    },
}

export default view;
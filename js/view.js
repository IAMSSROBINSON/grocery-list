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
        listArr.forEach((listItemObj) => {
            this.mainContentListContainer.appendChild(ListItem(listItemObj.id, listItemObj.name, listItemObj.quantity, listItemObj.unit, listItemObj.isChecked));
        })
    },
}

export default view;
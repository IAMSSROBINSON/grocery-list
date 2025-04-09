import controller from "./controller.js";

// Components
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

        this.mainContentListContainer.addEventListener("click", (e) => {
            if ([...e.target.classList].includes("list-item-delete-button")) {
                controller.handleDelete(e);
            } else if ([...e.target.classList].includes("list-item-checkbox")) {
                console.log("list-item-checkbox clicked");
                controller.handleCheckbox(e);
            }
            
        })
    },
    renderList (listArr) {
        console.log("render view listArr:", listArr);
        listArr.forEach((listItemObj) => {
            this.mainContentListContainer.appendChild(ListItem(listItemObj.id, listItemObj.name, listItemObj.quantity, listItemObj.unit, listItemObj.isChecked));
        })
    },
    removeItem (id) {
        document.getElementById(id).remove();
    },
}

export default view;
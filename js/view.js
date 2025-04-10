import controller from "./controller.js";

// Components
import ListItem from "../components/ListItem/index.js";

const view = {
  init() {
    this.cacheMainContentDOM();
  },
  cacheMainContentDOM() {
    this.nameInput = document.querySelector(".name-input");
    this.quantityInput = document.querySelector(".quantity-input");
    this.unitListInput = document.querySelector(".unit-list-input");

    this.addToListForm = document.querySelector(".addToListForm");
    this.addToListForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validateFormData(e);
    });

    this.mainContentContainer = document.querySelector(
      ".main-content-container"
    );

    this.mainContentNumOfItems = document.querySelector(
      ".main-content-numOfItems"
    );

    this.mainContentListContainer = document.querySelector(
      ".main-content-list-container"
    );

    this.mainContentListContainer.addEventListener("click", (e) => {
      if ([...e.target.classList].includes("list-item-delete-button")) {
        controller.handleDelete(e);
      } else if ([...e.target.classList].includes("list-item-checkbox")) {
        controller.handleCheckbox(e);
      }
    });
  },
  renderList(listArr) {
    const docFrag = document.createDocumentFragment();
    listArr.forEach((listItemObj) => {
      docFrag.appendChild(
        ListItem(
          listItemObj.id,
          listItemObj.name,
          listItemObj.quantity,
          listItemObj.unit,
          listItemObj.isChecked
        )
      );
    });
    this.mainContentListContainer.appendChild(docFrag);
  },
  removeItem(id) {
    document.getElementById(id).remove();
  },
  validateFormData(e) {
    const nameInput = this.nameInput;
    const quantityInput = this.quantityInput;
    const unitListInput = this.unitListInput;

    // validate name input
    if (nameInput.value.trim() === "") {
      this.validateInput(nameInput, "! Must have an item name");
    } else if (nameInput.validity.tooLong) {
      this.validateInput(nameInput, "! Must be less than 20 characters");
    } else {
      nameInput.classList.remove("invalidInput");
      nameInput.nextElementSibling.textContent = "";
      nameInput.classList.add("validInput");
    }

    // validate quantity input
    if (
      quantityInput.value.trim() === "" ||
      quantityInput.validity.rangeUnderflow
    ) {
      this.validateInput(quantityInput, "! Value must be > than 0");
    } else if (quantityInput.validity.rangeOverflow) {
      this.validateInput(quantityInput, "! Value must be < than 9999");
    } else {
      quantityInput.classList.remove("invalidInput");
      quantityInput.nextElementSibling.textContent = "";
      quantityInput.classList.add("validInput");
    }

    if (unitListInput.value.trim() === "") {
      unitListInput.value = "-";
      unitListInput.classList.add("validInput");
    } else {
      unitListInput.classList.remove("validInput");
    }

    // Final validity check
    let allInputs = [nameInput, quantityInput];
    if (allInputs.every((input) => input.validity.valid)) {
      controller.createNewItemClassAndAddToDataItemsListThenRenderUI(
        nameInput.value,
        quantityInput.value,
        unitListInput.value
      );
    }
  },
  validateInput(input, message) {
    input.nextElementSibling.textContent = message;
    input.classList.remove("validInput");
    input.classList.add("invalidInput");
  },
  clearFormInputs() {
    this.nameInput.value = "";
    this.quantityInput.value = "";
    this.unitListInput.value = "";
  },
};

export default view;

function ListItem (id, name, quantity, unit = "-", isChecked = "false") {
    const listItemLi = document.createElement("li");
    listItemLi.setAttribute("id", id);
    listItemLi.classList.add("list-item");

    const listItemCheckbox = document.createElement("input");
    listItemCheckbox.setAttribute("type", "checkbox");
    listItemCheckbox.setAttribute("name", "list-item-checkbox");
    listItemCheckbox.classList.add("list-item-checkbox");
    isChecked ? listItemCheckbox.setAttribute("checked", "") : null;

    const listItemName = document.createElement("p");
    listItemName.classList.add("list-item-itemName");
    listItemName.textContent = name;

    const listItemQuantity = document.createElement("p");
    listItemQuantity.classList.add("list-item-quantity");
    listItemQuantity.textContent = quantity;
 
    const listItemUnit = document.createElement("p");
    listItemUnit.classList.add("list-item-unit");
    listItemUnit.textContent = unit;

    const listItemDeleteButton = document.createElement("button");
    listItemDeleteButton.classList.add("list-item-delete-button");
    listItemDeleteButton.textContent = "X";

    listItemLi.appendChild(listItemCheckbox);
    listItemLi.appendChild(listItemName);
    listItemLi.appendChild(listItemQuantity);
    listItemLi.appendChild(listItemUnit);
    listItemLi.appendChild(listItemDeleteButton);

    return listItemLi;
}

export default ListItem;
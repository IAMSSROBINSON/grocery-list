function ListItem () {
    let p = document.createElement("p");
    p.classList.add("list-item-component");
    p.textContent = "ListItemComponent"
;   return p;   
}

export default ListItem;
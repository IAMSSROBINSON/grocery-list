class Item {
    constructor (name, quantity, unit) {
        this.id = getRandomId();
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.isChecked = false;
    }
}

function getRandomId () {
    return Math.random().toString(32).substring(2);
}

export default Item;

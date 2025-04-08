const data = {
    itemsList: [
        {
            id: getRandomId(),
            name: "Lemon",
            quantity: 5,
            unit: "-",
            isChecked: false,
        },
         {
            id: getRandomId(),
            name: "Root Beer",
            quantity: 10,
            unit: "Cans",
            isChecked: false,
        }
    ],
}

function getRandomId () {
    return Math.random().toString(32).substring(2);
}

export default data;
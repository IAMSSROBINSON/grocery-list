const data = {
  itemsList: [
    {
      id: getRandomId(),
      name: "Tomatoes 🍅",
      quantity: 1,
      unit: "kg",
      isChecked: true,
    },
    {
      id: getRandomId(),
      name: "Tuna 🐟",
      quantity: 2,
      unit: "cans",
      isChecked: false,
    },
    {
      id: getRandomId(),
      name: "Ramen 🍜",
      quantity: 2,
      unit: "cups",
      isChecked: false,
    },
    {
      id: getRandomId(),
      name: "Toothpaste 〰️",
      quantity: 100,
      unit: "ml",
      isChecked: false,
    },
    {
      id: getRandomId(),
      name: "Carrots 🥕",
      quantity: 1,
      unit: "kg",
      isChecked: false,
    },
    {
      id: getRandomId(),
      name: "Chocolate 🍫",
      quantity: 1,
      unit: "tablet",
      isChecked: false,
    },
  ],
};

function getRandomId() {
  return Math.random().toString(32).substring(2);
}

export default data;

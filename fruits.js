// Initialize the fruit basket as an empty array
let fruitBasket = [];

// 1. Add fruits to the basket
function addFruit(fruit) {
  fruitBasket.push(fruit);
  console.log(`${fruit} added to the basket.`);
}

// 2. Remove fruits from the basket
function removeFruit(fruit) {
  const index = fruitBasket.indexOf(fruit);
  if (index !== -1) {
    fruitBasket.splice(index, 1);
    console.log(`${fruit} removed from the basket.`);
  } else {
    console.log(`${fruit} is not in the basket.`);
  }
}

// 3. Display total number of fruits
function displayTotalFruits() {
  console.log(`Total fruits in the basket: ${fruitBasket.length}`);
  console.log("Current basket:", fruitBasket);
}


// Example usage:
addFruit("Apple");
addFruit("Banana");
addFruit("Orange");

displayTotalFruits(); // Should show 3 fruits

removeFruit("Banana");
displayTotalFruits(); // Should show 2 fruits
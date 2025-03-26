let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry', 'kiwi', 'grape', 'watermelon', 'pineapple', 'blueberry'];
let vegetables = ['carrot', 'tomato', 'pepper', 'lettuce', 'cucumber', 'brocol', 'onion', 'garlic', 'potato', 'ginger'
];
let fastfood = ['hamburger', 'fries', 'hotdog', 'pizza'];

console.log("=== Inventory Management System ===");
console.log("--- Fruits ---");

for (let i= 0; i < fruits.length; i++){
    let j = i + 1;
    console.log(' ' + j + ' ' + fruits[i]);
}
console.log("----------------");
console.log(`Total number of fruits: ${fruits.length}`);

console.log("---Vegetables---");
let n = 0;
while(n < vegetables.length){
    let m = n + 1;
    console.log(' ' + m + ' ' + vegetables[n]);
    n++;
}
console.log("----------------");
console.log(`Total number of fruits: ${vegetables.length}`);
console.log("---Fast Food---");
fastfood.forEach((food,index)=> {
    console.log(' ' +(index +1)+ ' ' +food);
});
console.log(`Total number of Fast food: ${fastfood.length}`);
console.log("----------------");
console.log("=================================");



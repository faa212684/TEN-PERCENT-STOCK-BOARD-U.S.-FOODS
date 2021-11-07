let jsonData = JSON.stringify([
  { product: "mellon", price: 10 },
  { product: "pinapple", price: 5 },
  { product: "apple", price: 5 },
  { product: "potato", price: 4 },
  { product: "orange", price: 4 },
]);

function sortJson(jsonData) {
  let foods = JSON.parse(jsonData); // parse from JSON format
  /* for (let index = 0; index < foods.length; index++) {
    if (foods[index].price === foods[index + 1].price) {
    }
  } */
  foods.sort((a, b) => {
    return a.product > b.product ? 1 : b.product > a.product ? -1 : 0; //Sorting product by first letter
  });
  foods.sort((a, b) => a.price - b.price); //Sorting by price
  let res = JSON.stringify(foods); //return to JSON format
  console.log(res);
}

sortJson(jsonData);

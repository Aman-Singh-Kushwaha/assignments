/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656105600000,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
    },
    {
      id: 3,
      timestamp: 1656134400000,
      price: 30,
      category: 'Food',
      itemName: 'Sushi',
    }
  ]

  [
    { category: 'Food', totalSpent: 30 },
    { category: 'Clothing', totalSpent: 40 },
    { category: 'Electronics', totalSpent: 30 },
  ]
*/


function calculateTotalSpentByCategory(transactions) {
  let outputList = []
  let categoryObject = {};

  for (let i = 0; i < transactions.length; i++) {
    if (categoryObject[transactions[i].category]) {
      categoryObject[transactions[i].category] += transactions[i].price;
    } else {
      categoryObject[transactions[i].category] = transactions[i].price;
    }
  }

  outputList = Object.keys(categoryObject).map((key) => ({
    category: key,
    totalSpent: categoryObject[key],
  }));

  return outputList;
}

module.exports = calculateTotalSpentByCategory;

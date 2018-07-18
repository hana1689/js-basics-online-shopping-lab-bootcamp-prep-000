var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getPrice()
{
  return Math.floor(Math.random() * 100)
}

function addToCart(item) {
  var object = {};
  object.itemName = item
  object.itemPrice = getPrice()
  cart.push(object)
  return `${object.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

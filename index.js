var cart = [];
var object = {};

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
  object.itemName = item
  object.itemPrice = getPrice()
  cart.push(object)
  return `${object.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0)
  {
    return "Your shopping cart is empty."
  }
  else
  {
    for (let i = 0; i < cart.length; i++)
      {
        return `In your cart, you have ${cart[i].itemName}, `
      }
  }
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

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
  if (cart.length === 0)
  {
    return "Your shopping cart is empty."
  }
  else
  {
    if (cart.length == 1)
    {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else if (cart.length == 2)
    {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
    else
    {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
    }
  }
}

function total() {
  var totalCost = 0
  for (let i = 0; i < cart.length; i++)
  {
    totalCost += parseInt(cart[i].itemPrice)
  }
  return totalCost
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++)
  {
    if (cart[i].itemName == item)
    {
      let index = cart.indexOf(cart[i].itemName)
      cart.splice(index, 1)
      return cart
    }
    else
    {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}

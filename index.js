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

function findIndex(cart, item)
{
  var i = 0
  while(i < cart.length)
  {
    if(cart[i].itemName === item)
    {
      cart.splice(i, 1)
      return true
    }
    else
      i++
  }
  return false
}

function removeFromCart(item) {
  if (findIndex(cart, item) === false)
    {
      return "That item is not in your cart."
    }
  else
    return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
  {
    return "Sorry, we don't have a credit card on file for you."
  }
  else
  {
    var totalCost = total()
    cart.length = 0
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}

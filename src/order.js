function takeOrder(order, orders) {
  if (orders.length < 3) {
    return orders.push(order);
  }
}

function refundOrder(orderNum, orders) {
  for (i = 0; i < orders.length; i++) {
    if (orders[i].orderNumber === orderNum) {
      orders.splice(i, 1);
    }
  }
}

function listItems(orders) {
  var orderNames = [];
  for (i = 0; i < orders.length; i++) {
    orderNames.push(orders[i].item);
  }
  return orderNames.join(", ");
}

function searchOrder(orders, meal) {
  var included = false;

  for (i = 0; i < orders.length; i++) {
    if (orders[i].item === meal) {
      included = true;
    }
  }
  return included;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
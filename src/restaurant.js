function createRestaurant(name, menus) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
    return restaurant.menus[item.type].push(item)
  }
}

function removeMenuItem(restaurant, item, type) {
 for (i = 0; i < restaurant.menus[type].length; i++) {
  if (restaurant.menus[type][i].name === item) {
    restaurant.menus[type].splice(i, 1)
    return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
}

function checkForFood(restaurant, item) {
  for (i = 0; restaurant.menus[item.type].length; i++) {
    if (restaurant.menus[item.type][i].type === item.type) {
      return `Yes, we're serving ${item.name} today!`
    }
  }
  return `Sorry, we aren't serving ${item.name} today.`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}
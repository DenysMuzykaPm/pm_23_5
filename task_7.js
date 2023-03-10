const Shop = require('./task_7/shop')
const Item = require('./task_7/item')
const Store = require('./task_7/store')
const ItemInStore = require('./task_7/itemInStore')

const shop = new Shop()

shop.addShop('uc', '1234')
shop.addShop('uc123', '123412498127')

// console.log(shop.getArray)
// console.log(shop.find_Shop('uc', '1234'))
// console.log(shop.editShop('uc', '1234', "uc", "1235435456"))

///////////////////////////////////////////////////////////////
const item = new Item()

item.addItem('uc', '1234')
item.addItem('uc123', '123412498127')

// console.log(item.getArray)
// console.log(item.find_Item('uc', '1234'))
// console.log(item.editItem('uc', '1234', 'uc', '1235435456'))

const store = new Store()

store.addStore(shop.find_Shop('uc', '1234'), '1234')
store.addStore(shop.find_Shop('uc123', '123412498127'), '1234000000000000000')

// store.remove_Store(shop.find_Shop('uc', '1234'))

// console.log(store.getArray)

const itemInStore = new ItemInStore(store.getArray[0])

itemInStore.addItemToStore(item.getArray[0])
itemInStore.addItemToStore(item.getArray[1])

// const itemInStore_2 = new ItemInStore(store.getArray[0])

// itemInStore_2.addItemToStore(item.getArray[1])

// console.log(itemInStore.getArray)

// itemInStore_2.transferItems(itemInStore, item.getArray[1])

// itemInStore.fillStore()
itemInStore.fillStore()


// console.log(itemInStore.fillStore().getItemsArray)
console.log(store.getReportLessAmount())
// console.log(
//   '\n================\n',
//   itemInStore.getArray,
//   '\n\n',
//   itemInStore_2.getArray,
//   '\n================\n',
// )

// console.log(itemInStore_2.getArray)

// itemInStore.removeItemFromStore()

// console.log(itemInStore.getArray)

// console.log(store.find_Store('uc', '1234'))
// console.log(store.editStore('uc', '1234', 'uc', '1235435456'))

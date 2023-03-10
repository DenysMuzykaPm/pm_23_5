class ItemInStore {
  #array = new Array()

  constructor(store) {
    this.store = store

    if (typeof store === 'undefined') {
      this.store = 'Unknown store'
    }
  }

  get getArray() {
    return this.#array
  }

  addItemToStore(item) {
    // console.log(store.uniId, store, "\n------------------------")
    if (this.#array.length == 0) this.#array = [item]
    else this.#array = [...this.#array, item]
  }

  removeItemFromStore(store, item) {
    for (let i = 0; i < this.#array.length; i++) {
      let elem = this.#array[i]

      if (elem === item) {
        this.#array.splice(i, 1)
        return 1
      }
    }

    return -1
  }

  transferItems(itemInStore_from, item) {
    if (itemInStore_from.store.name == this.store.name) {
      itemInStore_from.removeItemFromStore(itemInStore_from.store, item)

      this.addItemToStore(item)
      return 1
    }
    return -1
  }

  fillStore(){
    this.store.shop.addItemToShop(this.store.shop, this.#array)
    
    return this.store.shop
  }
}

module.exports = ItemInStore

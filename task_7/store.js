class Store {
  #array = new Array()

  constructor(shop, amount) {
    this.uniId = Math.random().toString(16).slice(2)
    this.shop = shop
    this.amount = amount

    if (typeof shop === 'undefined') {
      this.shop = 'Unknown Store'
    }
    if (typeof amount === 'undefined') {
      this.amount = 'Unknown amount'
    }
  }

  get getArray() {
    return this.#array
  }

  addStore(shop, amount) {
    const class_el = new Store(shop, amount)
    this.#array.push(class_el)
  }

  editStore(shop, amount, new_shop, new_amount) {
    for (let i = 0; i < this.#array.length; i++) {
      if (this.#array[i].shop === shop && this.#array[i].amount === amount) {
        this.#array[i].shop = new_shop
        this.#array[i].amount = new_amount

        return 1
      }
    }
    return -1
  }

  remove_Store(shop) {
    for (let i = 0; i < this.#array.length; i++) {
      let elem = this.#array[i]

      if (elem.shop === shop) {
        this.#array.splice(i, 1)
        return 1
      }
    }

    return -1
  }

  find_Store(shop, amount) {
    for (let el of this.#array) {
      if (shop === el.shop && amount === el.amount) {
        return el
      }
    }

    return -1
  }

  getReportLessAmount() {
    let res = []

    const checkAmounts = (elem) => {
      if(elem.shop.getItemsArray[elem.shop.name] != undefined){
        let amountItemsInShop = elem.shop.getItemsArray[elem.shop.name].length
        console.log('-', amountItemsInShop)

        
      }
    }

    for (let i = 0; i < this.#array.length; i++) {
      let elem = this.#array[i]

      checkAmounts(elem)
      // res.push(checkAmounts())
    }

    return res
  }
}

module.exports = Store

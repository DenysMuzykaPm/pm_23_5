class Shop {
  #array = new Array()
  #items_arr = {}

  constructor(name, address) {
    this.name = name
    this.address = address

    if (typeof name === 'undefined') {
      this.name = 'Unknown shop'
    }
    if (typeof address === 'undefined') {
      this.address = 'Unknown address'
    }
  }

  get getArray() {
    return this.#array
  }
  get getItemsArray() {
    return this.#items_arr
  }

  addShop(name, address) {
    const class_el = new Shop(name, address)
    this.#array.push(class_el)
  }

  editShop(name, address, new_name, new_address) {
    for (let i = 0; i < this.#array.length; i++) {
      if (this.#array[i].name === name && this.#array[i].address === address) {
        this.#array[i].name = new_name
        this.#array[i].address = new_address

        return 1
      }
    }
    return -1
  }

  remove_Shop(name, address) {
    for (let i = 0; i < this.#array.length; i++) {
      let elem = this.#array[i]

      if (elem.name === name && elem.address === address) {
        this.#array.splice(i, 1)
        return 1
      }
    }

    return -1
  }

  find_Shop(name, address) {
    for (let el of this.#array) {
      if (name === el.name && address === el.address) {
        return el
      }
    }

    return -1
  }

  addItemToShop(shop, items_arr) {
    // console.log([...this.#items_arr[shop.name], ...items_arr])
    if (Object.keys(this.#items_arr).includes(shop.name))
      this.#items_arr[shop.name] = [...this.#items_arr[shop.name], ...items_arr]
    else this.#items_arr[shop.name] = [...items_arr]
    // console.log(this.#items_arr)
  }
}

module.exports = Shop

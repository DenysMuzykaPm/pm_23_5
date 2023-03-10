class Item {
  #array = new Array()

  constructor(name, country) {
    this.uniId = Math.random().toString(16).slice(2)
    this.name = name
    this.country = country

    if (typeof name === 'undefined') {
      this.name = 'Unknown name'
    }
    if (typeof country === 'undefined') {
      this.country = 'Unknown country'
    }
  }

  get getArray() {
    return this.#array
  }

  addItem(name, country) {
    const class_el = new Item(name, country)
    this.#array.push(class_el)
  }

  editItem(name, country, new_name, new_country) {
    for (let i = 0; i < this.#array.length; i++) {
      if (this.#array[i].name === name && this.#array[i].country === country) {
        this.#array[i].name = new_name
        this.#array[i].country = new_country

        return 1
      }
    }
    return -1
  }

  remove_Item(name, country) {
    for (let i = 0; i < this.#array.length; i++) {
      let elem = this.#array[i]

      if (elem.name === name && elem.country === country) {
        this.#array.splice(i, 1)
        return 1
      }
    }

    return -1
  }

  find_Item(name, address) {
    for (let el of this.#array) {
      if (name === el.name && address === el.address) {
        return el
      }
    }

    return -1
  }
}

module.exports = Item

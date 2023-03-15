'use strict'

const storeModel = new Store() // eslint-disable-line no-undef

function initAddForm() {
  const form = window.document.querySelector('#store-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const storeData = {}
    formData.forEach((value, key) => {
      storeData[key] = value
    })

    // storeModel.Create(storeData)

    // console.log(formData.shop)

    storeModel.SelectByKey('shops').forEach((el) => {
      //   console.log(storeData.shopId, el.id)
      if (el.id == storeData.shopId && storeData.quantity != '') {
        storeModel.Create(storeData)
      }
    })

    e.target.reset()
  })
}

function initDelete(row) {
  const formData = JSON.parse(row)

  storeModel.Delete(formData)
}

function initUpdateForm() {
  const form = window.document.querySelector('#store-update-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const coll_shops = storeModel.SelectByKey('shops')
    const coll_stores = storeModel.SelectByKey('stores')

    const storeData = []

    // console.log(coll_shops, coll_stores)

    coll_stores.forEach((el_store) => {
      coll_shops.forEach((el_shop) => {
        // console.log(el_store.shopId, el_shop.id)
        if (el_store.shopId == el_shop.id) storeData.push(el_store)
      })
      // console.log('-------------')
    })

    storeModel.Update(storeData)

    e.target.reset()
  })
}

function addEventToDeleteButtons() {
  const elems = document.querySelectorAll('#btn_delete')

  elems.forEach((item) => {
    // console.log('assign: ', item)
    item.addEventListener('click', function () {
      // console.log('addEventListener here')
      initDelete(item.dataset.item)
    })
  })
}

function initList() {
  window.jQuery('#store-list').DataTable({
    data: storeModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'ShopId', data: 'shopId' },
      { title: 'Quantity', data: 'quantity' },
      {
        data: null,
        title: 'Action',
        wrap: true,
        render: function (item) {
          const def = JSON.stringify(item)
          return `<div class="btn-group"> <button type="button"  id="btn_delete" class="btn_delete btn-warning " data-item='${def}'>Delete</button></div>`
        },
      },
    ],
  })

  addEventToDeleteButtons()
}
function initButtonsEvent() {
  document.addEventListener(
    'storesListDataChanged',
    function () {
      addEventToDeleteButtons()
    },
    false,
  )
}
function initListEvents() {
  document.addEventListener(
    'storesListDataChanged',
    function (e) {
      const dataTable = window.jQuery('#store-list').DataTable()

      dataTable.clear()
      dataTable.rows.add(e.detail)
      dataTable.draw()
    },
    false,
  )
}

window.addEventListener('DOMContentLoaded', (e) => {
  initAddForm()
  initUpdateForm()
  initList()
  initListEvents()
  initButtonsEvent()
})

'use strict'

const shopModel = new Shop() // eslint-disable-line no-undef

function initAddForm() {
  const form = window.document.querySelector('#shop-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const shopData = {}
    formData.forEach((value, key) => {
      shopData[key] = value
    })

    if (shopData.name != '' && shopData.address != '')
      shopModel.Create(shopData)

    e.target.reset()
  })
}
function initDelete(row) {
  const formData = JSON.parse(row)

  shopModel.Delete(formData)
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
  window.jQuery('#shop-list').DataTable({
    data: shopModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Address', data: 'address' },
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
    'shopsListDataChanged',
    function () {
      addEventToDeleteButtons()
    },
    false,
  )
}

function initListEvents() {
  document.addEventListener(
    'shopsListDataChanged',
    function (e) {
      const dataTable = window.jQuery('#shop-list').DataTable()

      dataTable.clear()
      dataTable.rows.add(e.detail)
      dataTable.draw()
    },
    false,
  )
}

window.addEventListener('DOMContentLoaded', (e) => {
  initAddForm()
  initList()
  initListEvents()
  initButtonsEvent()
})

'use strict'

const itemModel = new Item() // eslint-disable-line no-undef

function initAddForm() {
  const form = window.document.querySelector('#item-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const itemData = {}
    formData.forEach((value, key) => {
      itemData[key] = value
    })
    if (itemData.name != '' && itemData.country != '')
      itemModel.Create(itemData)

    e.target.reset()
  })
}

function initDelete(row) {
  const formData = JSON.parse(row)

  itemModel.Delete(formData)
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
  window.jQuery('#item-list').DataTable({
    data: itemModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Country', data: 'country' },
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
    'itemsListDataChanged',
    function () {
      addEventToDeleteButtons()
    },
    false,
  )
}

function initListEvents() {
  document.addEventListener(
    'itemsListDataChanged',
    function (e) {
      const dataTable = window.jQuery('#item-list').DataTable()

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

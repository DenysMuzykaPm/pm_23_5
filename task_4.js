const arr = ['some', 'array', 'of', 'of', 'some', 'hello', '!']

const deleteDublicete = (prop) => {
  const res_arr = []

  prop.forEach((el) => {
    if (!res_arr.includes(el)) {
      res_arr.push(el)
    }
  })

  return res_arr
}

console.log(deleteDublicete(arr))

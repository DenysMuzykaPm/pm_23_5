const line = 'some array of string !'

console.log(line.split(' '))

const funcToUpperCase = (prop) => {
  let res = ''

  prop.split(' ').forEach((el) => {
    res += el[0].toUpperCase() + el.slice(1, el.length) + ' '
  })

  return res
}

console.log(funcToUpperCase(line))

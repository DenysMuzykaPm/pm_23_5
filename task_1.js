const arr = ['some', 'array', 'of', 'string', '!']

const concatArray = (prop) =>{
    return prop.reduce((el,res)=>res = el + ' ' + res)
}

console.log(concatArray(arr))
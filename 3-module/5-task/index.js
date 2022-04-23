function getMinMax(str) {
 const symbols= str.split(' ')
 const result = {
  min: null,
  max: null
}
 for (let symbol of symbols){
  if (!isNaN(parseFloat(symbol)) && isFinite(symbol)) {
    x=+symbol
    if(x<result.min||result.min===null) result.min = x
    if(x>result.max ||result.max===null ) result.max = x
  }
 }
 return result
}

const test = '25 : -1 / -234 - 4 = 1000'
console.log(getMinMax(test))

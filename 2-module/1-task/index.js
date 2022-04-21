function sumSalary(salaries) {
  const arrValues =  Object.values(salaries)
  const filterArrValues =  arrValues.filter(a=>typeof(a)==='number' && !Number.isNaN(a) && a!==Infinity&&a!==-Infinity)
  if (filterArrValues.length===0) {
    return 0
  } 
  return filterArrValues.reduce((a,b)=>a+b)
}

const a = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  Bob: NaN,
  Peter: Infinity,
  Ivan: -Infinity,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

console.log(sumSalary(a))


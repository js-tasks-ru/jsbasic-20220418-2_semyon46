function sumSalary(salaries) {
  const arrValues =  Object.values(salaries)
  const filterArrValues =  arrValues.filter(a=>typeof(a)==='number' && !Number.isNaN(a) && a!==Infinity&&a!==-Infinity)
  return filterArrValues.reduce((a,b)=>a+b, 0)
}


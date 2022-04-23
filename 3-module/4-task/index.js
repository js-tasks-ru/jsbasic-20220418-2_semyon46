function showSalary(users, age) {
  const usersFilteredByAge = users.filter(u=>u.age<=age)
  const res = usersFilteredByAge.map((u,i)=> usersFilteredByAge.length-1===i? u.name+', '+u.balance: u.name+', '+u.balance + '\n')
   return res.join('')
}

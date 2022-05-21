function makeFriendsList(friends) { 
  const ulEl = document.createElement('ul') 
  friends.forEach(obj=>{ 
    ulEl.innerHTML += `<li>${obj.firstName} ${obj.lastName}</li>` 
  }) 
  return ulEl 
 } 
  
 //second variant.What is better? 
  
//  function makeFriendsList(friends) { 
//   const ulEl = document.createElement('ul') 
//   friends.forEach(obj=>{ 
//   const liEl = document.createElement('li') 
//   liEl.textContent = `${obj.firstName} ${obj.lastName}` 
//   ulEl.appendChild(liEl) 
//   }) 
//   return ulEl 
//  }
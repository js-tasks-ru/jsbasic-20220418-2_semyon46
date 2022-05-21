/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    const table  = document.createElement("table")
    table.innerHTML= `<thead> <tr> <th>Имя</th> <th>Возраст</th>  <th>Зарплата</th> <th>Город</th>  <th></th></tr> <thead>`
    const tbody = document.createElement("tbody")
    rows.forEach(obj=>{ 
      tbody.innerHTML += `<tr> <td>${obj.name}</td> <td>${obj.age}</td> <td>${obj.salary}</td> <td>${obj.city}</td> <td><button>X</button></td> </tr>` 
    }) 
    table.appendChild(tbody)
    table.addEventListener('click', (e)=>{
      if (e.target.tagName==='BUTTON'){
        e.target.closest('tr').remove()
      }
    })
    this.elem = table
  }
}

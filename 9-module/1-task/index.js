export default function promiseClick(button) {
    return new Promise((res, rej)=>{
      button.addEventListener('click', (e)=>{res(e)}, {once:true})
    })
 
}

function toggleText() {
  const div = document.querySelector('#text')
  const btn = document.querySelector('.toggle-text-button')
  btn.addEventListener('click', ()=>{
    div.toggleAttribute('hidden')
  })
}

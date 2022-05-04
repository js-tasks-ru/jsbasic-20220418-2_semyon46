function initCarousel() {

  const nextBtn = document.querySelector('.carousel__arrow_right')
  const prevBtn = document.querySelector('.carousel__arrow_left')
  prevBtn.style.display = 'none'
  const slider = document.querySelector('.carousel__inner')
  let numberSlider = 1

  if (slider.children.length===1){
    nextBtn.style.display = 'none'
    return
  }

  nextBtn.addEventListener('click', ()=>{
    slider.style.transform = `translateX(-${numberSlider*slider.offsetWidth}px)`
    numberSlider++
    prevBtn.style.display = ''
    if (numberSlider===slider.children.length){
      nextBtn.style.display = 'none'
    }
  })

  prevBtn.addEventListener('click', ()=>{
    slider.style.transform = `translateX(-${(numberSlider-2)*slider.offsetWidth}px)`
    numberSlider--
    nextBtn.style.display = ''
    if (numberSlider===1){
      prevBtn.style.display = 'none'
    }
  })
}

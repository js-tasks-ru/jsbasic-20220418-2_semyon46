function initCarousel() {

  const nextBtn = document.querySelector('.carousel__arrow_right')
  const prevBtn = document.querySelector('.carousel__arrow_left')
  prevBtn.style.display = 'none'
  const slider = document.querySelector('.carousel__inner')

  let numberSlider = 1

  nextBtn.addEventListener('click', ()=>{
    switch(numberSlider){
      case 1:
        slider.style.transform = `translateX(-${slider.offsetWidth}px)`
        numberSlider++
        prevBtn.style.display = ''
        break
      case 2:
        slider.style.transform = `translateX(-${2*slider.offsetWidth}px)`
        numberSlider++
        break
      case 3:
        slider.style.transform = `translateX(-${3*slider.offsetWidth}px)`
        numberSlider++
        nextBtn.style.display = 'none'
        break
    }
  })

  prevBtn.addEventListener('click', ()=>{
    switch(numberSlider){
      case 2:
        slider.style.transform = `translateX(0px)`
        numberSlider--
        prevBtn.style.display = 'none'
        break
      case 3:
        slider.style.transform = `translateX(-${1*slider.offsetWidth}px)`
        numberSlider--
        break
      case 4:
        slider.style.transform = `translateX(-${2*slider.offsetWidth}px)`
        numberSlider--
        nextBtn.style.display = ''
        break
    }
  })
}

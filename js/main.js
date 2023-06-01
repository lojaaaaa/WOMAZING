const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    speed: 500,        
  },

});



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener('click', e =>{
        e.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })

}



const popupOpen = document.querySelectorAll('.popup-open')
const popupClose = document.querySelectorAll('.popup__close')
const popupClose_2 = document.querySelectorAll('.popup__close2')
const popup = document.querySelectorAll('.popup')
const form = document.querySelectorAll('.popup__form')

const contactsForm = document.querySelector('.writeus__form')
console.log(popup)

popupOpen.forEach(function(openItem, openIndex){
  openItem.addEventListener('click', () =>{
    popup.forEach(function(popupItem, popupIndex){
      popupItem.classList.add('popup--active')
    })
  })
})

popupClose.forEach(function(closeItem, closeIndex){
  closeItem.addEventListener('click', () =>{
    popup.forEach(function(popupItem, popupIndex){
      popupItem.classList.remove('popup--active')
    })
    
  })
})

popupClose_2.forEach(function(closeItem, closeIndex){
    closeItem.addEventListener('click', () =>{
        popup.forEach(function(popupItem, popupIndex){
        popupItem.classList.remove('popup--active')
        })
        const popupContent = document.querySelectorAll('.popup__content')
        const popupSuccess = document.querySelectorAll('.popup__success')
        popupContent.forEach(function(value, index){
            value.classList.remove('disabled')
        })
        popupSuccess.forEach(function(value, index){
            value.classList.add('disabled')
        })
        // popupContent.map((value, index, array) => {value.classList.remove('disabled')})
        // popupSuccess.map((value, index, array) => {value.classList.add('disabled')})
    })
})

console.log(form)
form.forEach((formItem, index, array) => {
    formItem.addEventListener('submit', (e) =>{
    e.preventDefault()
    const popupContent = document.querySelectorAll('.popup__content')
    const popupSuccess = document.querySelectorAll('.popup__success')
    popupContent.forEach(function(value, index){
        value.classList.add('disabled')
    })
    popupSuccess.forEach(function(value, index){
        value.classList.remove('disabled')
    })
    // popupContent.map((value, index, array) => {value.classList.add('disabled')})
    // popupSuccess.map((value, index, array) => {value.classList.remove('disabled')})

    })
})


contactsForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    document.querySelector('.writeus__success').classList.add('writeus__success--active')
})



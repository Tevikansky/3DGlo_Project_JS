const modal = () => {
  const modal = document.querySelector('.popup')
  const modalWindow = modal.querySelector('.popup-content')
  const buttons = document.querySelectorAll(".popup-btn")
  let count = 0;
  let idInterval;


  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (window.screen.width > 768) {
        modalWindow.style.left = 0
        modal.style.display = `block`;
        animate()
      } else {
        modalWindow.style.left = 30 + "%"
        modal.style.display = `block`;
      }
    })
  })

  const animate = () => {

    count++
    idInterval = requestAnimationFrame(animate)

    if (count < 40) {
      modalWindow.style.left = count + "%"
    } else {
      cancelAnimationFrame(idInterval)
      count = 0
    }

  }



  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = `none`;
    }
  })




}

export default modal
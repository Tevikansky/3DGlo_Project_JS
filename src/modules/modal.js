const modal = () => {
  const modal = document.querySelector('.popup')
  const modalWindow = modal.querySelector('.popup-content')
  const buttons = document.querySelectorAll(".popup-btn")
  const closeBtn = modal.querySelector('.popup-close')
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

  closeBtn.addEventListener('click', () => {
    modal.style.display = `none`;

  })






}

export default modal
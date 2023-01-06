import { animate } from "./helpers";
const modal = () => {
  const modal = document.querySelector('.popup')
  const modalWindow = modal.querySelector('.popup-content')
  const buttons = document.querySelectorAll(".popup-btn")



  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (window.screen.width > 768) {
        modalWindow.style.left = 0
        modalWindow.style.transform = `translateX(-50%)`
        modal.style.display = `block`;
        animate({
          duration: 700,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalWindow.style.left = progress * 50 + '%';
          }
        });
      } else {
        modalWindow.style.transform = `translateX(-50%)`
        modalWindow.style.left = 50 + "%"
        modal.style.display = `block`;
      }
    })
  })




  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = `none`;
    }
  })




}

export default modal
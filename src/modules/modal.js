import {
  animate
} from "./helpers";
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
        document.body.style = `overflow: hidden; left: -${window.innerWidth-document.documentElement.clientWidth}px; position: relative;`;
      } else {
        modalWindow.style.transform = `translateX(-50%)`
        modalWindow.style.left = 50 + "%"
        modal.style.display = `block`;
        // document.body.style= 'overflow: hidden; width: 1903px;  position: relative;';
      }
    })
  })




  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = `none`;
      document.body.style = 'overflow: none; left: 0; position: relative;';

    }
  })




}

export default modal
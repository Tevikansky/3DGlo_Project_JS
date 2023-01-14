import {
  animate
} from "./helpers";
const modal = () => {
  const modal = document.querySelector('.popup')
  const modalWindow = modal.querySelector('.popup-content')
  const buttons = document.querySelectorAll(".popup-btn")


  const blockBody = () => {
    const body = document.body;
    body.style.overflow = 'hidden';
    const bodyScroll = calcScroll();
    body.style.marginRight = `${bodyScroll}px`;
  }
  const unBlockBody = () => {
    const body = document.body;
    body.style.overflow = 'auto';
    body.style.marginRight = `0`;
  }
  const calcScroll = () => {
    let div = document.createElement('div');
    div.style.width = '500px';
    div.style.height = '500px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }




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
        blockBody();
      } else {
        modalWindow.style.transform = `translateX(-50%)`
        modalWindow.style.left = 50 + "%"
        modal.style.display = `block`;
      }
    })
  })




  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      unBlockBody();
      modal.style.display = `none`;
      

    }
  })




}

export default modal
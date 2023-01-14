import {
  animate
} from "./helpers";

const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const main = document.querySelector('main')

  const scroll = (id) => {
    let movement = document.getElementById(id).offsetTop;
    animate({
      duration: 600,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        document.documentElement.scrollTop = progress * movement
      }
    });
  }


  const handleMenu = (e) => {
    menu.classList.toggle('active-menu')

  }


  menu.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.closest('.close-btn')) {
      handleMenu()
    } else if (e.target.closest('a')) {
      scroll(e.target.href.substring(e.target.href.indexOf('#') + 1))
      handleMenu()
    }

  })
  menuBtn.addEventListener('click', handleMenu)


  main.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.closest('a')) {
      scroll(e.target.closest('a').href.substring(e.target.closest('a').href.indexOf('#') + 1))
    }
  })
}




export default menu
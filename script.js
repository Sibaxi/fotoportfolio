let rellax = new Rellax('.rellax');

const info = document.querySelector('.info')
const sections = document.querySelectorAll('.section')
const menuContainer = document.querySelector('.menu')
const menu = document.querySelectorAll('.menu__button')
const mouseIcon = document.querySelector('.mouse')

document.addEventListener('scroll', () => {

  sections.forEach( (element,index) => {

    let visible = isAnyPartOfElementInViewport(element)

    if(visible){
      menu[index].classList.add('active')
    }
    else{
      menu[index].classList.remove('active')
    }
    
  })

  if(window.scrollY >= 400 && window.scrollY <= 800){
    mouseIcon.classList.add('opacity-0')
  }

  let home = isAnyPartOfElementInViewport(info)

  if(home){
    menuContainer.classList.add('opacity-0','pointer-events-none')
  }
  else{
    menuContainer.classList.remove('opacity-0','pointer-events-none')
  }




},{passive:true})



function isAnyPartOfElementInViewport(el) {

  const rect = el.getBoundingClientRect();
  // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
}




 
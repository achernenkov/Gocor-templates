const burger = document.querySelector('.burger_menu')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const fourth = document.querySelector('.fourth')
const topMenu = document.querySelector('.top_menu')
const topMenuWrapper = document.querySelector('.top_menu_wrapper')
const topMenuList = document.querySelector('.top_menu_list')
const topMenuItem = document.querySelectorAll('.top_menu_item')
const subMenu = document.querySelectorAll('.sub_menu')
console.log(subMenu)

burger.addEventListener('click', (ev) => {
    ev.preventDefault()
    first.classList.toggle('active')
    second.classList.toggle('active')
    third.classList.toggle('active')
    fourth.classList.toggle('active')
    topMenu.classList.toggle('active')
    topMenuWrapper.classList.toggle('active')
    topMenuList.classList.toggle('active')

    for(let i = 0; i < topMenuItem.length; i++){
        topMenuItem[i].classList.toggle('active')
    }

})


for (let i = 0; i < subMenu.length; i++){
    subMenu[i].addEventListener('click', (ev) => {
        ev.preventDefault()
        ev.currentTarget.classList.toggle('opened')
    })
}
const bar = document.getElementById('bar')
const nav = document.getElementById('nav')
const menu = document.getElementById('menu')
const close = document.getElementById('close')
const project = document.getElementById('potfolio')
let afterScroll = window.scrollY

// Events
bar.addEventListener('click', () => {
  menu.classList.add('active')
  nav.classList.add('enable')
})

close.addEventListener('click', () => {
  menu.classList.remove('active')
  nav.classList.remove('enable')
})

project.addEventListener('click', e => {
  const pjct = e.target.parentElement

  switch (pjct.classList.length) {
    case 1:
      pjct.classList.add('rotate')
      break
    case 2:
      pjct.classList.remove('rotate')
      break
  }

})

window.addEventListener('scroll', () => {
  const scroll = window.scrollY

  if (scroll > afterScroll)
    nav.classList.add('enable')

  if (scroll < afterScroll)
    nav.classList.remove('enable')

  afterScroll = scroll
})

// Variable
const drownUp = document.getElementById("drown-up")
const btnMenu = document.getElementById("btn-menu")
const navbar = document.getElementById("navbar")
const nav = document.querySelector("nav")

// Eventos
drownUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0
  })
})

btnMenu.addEventListener("click", () => {
  navbar.classList.add("show")
})

navbar.addEventListener("click", (e) => {
  if ((e.target.tagName == "A") || (e.target.tagName == "I"))
    navbar.classList.remove("show")
})

window.addEventListener("scroll", () => {

  if (window.scrollY >= 108) {

    nav.classList.add("enable")

  } else {

    nav.classList.remove("enable")

  }
})

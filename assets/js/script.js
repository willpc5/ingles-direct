let btn = document.querySelector('#back-to-top')

btn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    btn.style.display = 'block'
  } else {
    btn.style.display = 'none'
  }
})

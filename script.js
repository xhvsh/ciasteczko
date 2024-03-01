document.querySelector('.info button').addEventListener('click', () => {
  document.querySelector('.info').classList.add('hidden')
})

document.querySelector('.cookie').addEventListener('click', () => {
  document.querySelector('.cookie').classList.add('cookie-animation')
  setTimeout(() => {
    document.querySelector('.cookie').classList.remove('cookie-animation')
    document.querySelector('.cookie img').src = `./broken cookie.png`
  }, 2500)
  setTimeout(() => {
    document.querySelector('.cookie').classList.add('hidden')
    document.querySelector('.message').classList.remove('hidden')
  }, 3500)
})

let randomNum = Math.floor(Math.random() * 51) + 1

for (let i = 0; i < 5; i++) {
  document.querySelector('.numerki').innerHTML += `${Math.floor(Math.random() * 51) + 1} `
}

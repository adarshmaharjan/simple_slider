// Images
const images = [
  {
    name: 'bridge',
    src: './images/bridge.jpg',
  },
  {
    name: 'island',
    src: './images/iland.jpg',
  },
  {
    name: 'lake',
    src: './images/lake.jpg',
  },
  {
    name: 'mountain',
    src: './images/mountain.jpg',
  },
]

// DOM Elements
const imgContainer = document.querySelector('.image-container')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

// global variables
let count = 0

// functions

// decrement function
function decrement() {
  count -= 1
  if (count < 0) count = images.length
  //   console.log(count)
}
// increment
function increment() {
  count += 1
  if (count >= images.length) count = 0
  //   console.log(count)
}
// create image
function createImage(src, alt, dataId) {
  // remove image
  imgContainer.innerHTML = ''
  // creation of image
  const image = document.createElement('img')
  image.classList.add('responsive-img')
  image.setAttribute('src', src)
  image.setAttribute('alt', alt)
  image.setAttribute('data-id', dataId)
  imgContainer.appendChild(image)
}
// previous button
prevBtn.addEventListener('click', () => {
  decrement()
  const { name, src } = images[count]
  createImage(src, name, count)
  //   console.log(count)
})
// next button
nextBtn.addEventListener('click', () => {
  increment()
  const { name, src } = images[count]
  createImage(src, name, count)
})

// Execution
function startApp() {
  createImage(images[count].src, images[count].name, count)
}

startApp()

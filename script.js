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
// let imgElement = ni

// functions

// decrement function
function decrement() {
  count -= 1
  if (count < 0) count = images.length - 1
  //   console.log(count)
}
// increment
function increment() {
  count += 1
  if (count === images.length) count = 0
  //   console.log(count)
}
function changeImage(src, alt, dataId) {
  const imgElement = document.querySelector('.responsive-img')
  imgElement.setAttribute('src', src)
  imgElement.setAttribute('alt', alt)
  imgElement.setAttribute('dataId', dataId)
}
// create image
function createImage(src, alt, dataId) {
  // creation of image
  const image = document.createElement('img')
  // added class that makes image responsive
  image.classList.add('responsive-img')
  // added class that helps in animation
  image.classList.add('fade')

  image.setAttribute('src', src)
  image.setAttribute('alt', alt)
  image.setAttribute('data-id', dataId)
  imgContainer.appendChild(image)
}
// previous button
prevBtn.addEventListener('click', () => {
  decrement()
  const { name, src } = images[count]
  changeImage(src, name, count)
  //   console.log(count)
})
// next button
nextBtn.addEventListener('click', () => {
  increment()
  const { name, src } = images[count]
  changeImage(src, name, count)
})

// Execution
function startApp() {
  createImage(images[count].src, images[count].name, count)
}

startApp()

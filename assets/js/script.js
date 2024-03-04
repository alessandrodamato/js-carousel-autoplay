const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp'
]

let counter = 0;

const slider = document.querySelector('.slider');

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  slider.innerHTML += `<img src="${img}" class="img hide">`
  
  const thumbnails = document.querySelector('.thumbnails');
  thumbnails.innerHTML += `
  <div class="thumbnail">
    <img src="${img}" class="small-img">
    <div class="cover dark"></div>
  </div>`
}

const imgCollection = document.getElementsByClassName('img');
const coverCollection = document.getElementsByClassName('cover');
const imgThumbnail = document.getElementsByClassName('small-img');

imgCollection[counter].classList.remove('hide');
coverCollection[counter].classList.remove('dark')
imgThumbnail[counter].classList.add('border')

// bottone UP
const topButton = document.querySelector('.btn-top');

topButton.addEventListener('click', function(){

  if (counter === 0) {
    imgCollection[counter].classList.add('hide');
    coverCollection[counter].classList.add('dark')
    imgThumbnail[counter].classList.remove('border')
    counter = images.length - 1;
    imgCollection[counter].classList.remove('hide');
    coverCollection[counter].classList.remove('dark')
    imgThumbnail[counter].classList.add('border')
  } else {
    imgCollection[counter].classList.add('hide');
    coverCollection[counter].classList.add('dark')
    imgThumbnail[counter].classList.remove('border')
    counter--;
    imgCollection[counter].classList.remove('hide');
    coverCollection[counter].classList.remove('dark')
    imgThumbnail[counter].classList.add('border')
  }

})

// bottone DOWN
const bottomButton = document.querySelector('.btn-bottom');

bottomButton.addEventListener('click', function(){
  
  if (counter === (images.length - 1)) {
    imgCollection[counter].classList.add('hide');
    coverCollection[counter].classList.add('dark')
    imgThumbnail[counter].classList.remove('border')
    counter = 0;
    imgCollection[counter].classList.remove('hide');
    coverCollection[counter].classList.remove('dark')
    imgThumbnail[counter].classList.add('border')
  } else {
    imgCollection[counter].classList.add('hide');
    coverCollection[counter].classList.add('dark')
    imgThumbnail[counter].classList.remove('border')
    counter++;
    imgCollection[counter].classList.remove('hide');
    coverCollection[counter].classList.remove('dark')
    imgThumbnail[counter].classList.add('border')
  }

})
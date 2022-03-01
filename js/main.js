var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://digimon-api.vercel.app/api/digimon' + name);
xhr.responseType = 'json';
var imageSrcArray = [];
xhr.addEventListener('load', function () {
  for (var i = 0; i < xhr.response.length; i++) {
    imageSrcArray.push(xhr.response[i].img);
  }
});
xhr.send();

var $intervalImgDiv = document.querySelector('.interval-images');
var $intervalImg = document.createElement('img');
$intervalImgDiv.appendChild($intervalImg);

var intervalID = setInterval(nextImage, 3000);
var randomInt = Math.floor(Math.random() * 209) + 1;
function nextImage() {
  $intervalImg.setAttribute('src', imageSrcArray[randomInt]);
  randomInt++;
  if ($intervalImgDiv.className === 'hidden') {
    clearInterval(intervalID);
  }
}

var $searchNavbar = document.querySelector('#search-nav');
var $searchBox = document.querySelector('.search-box');
$searchNavbar.addEventListener('click', searchNav);
function searchNav(event) {
  $intervalImgDiv.className = 'hidden';
  $searchBox.className = 'search-box';
}

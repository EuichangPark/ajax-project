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

var changeImage = setInterval(nextImage, 4000);
var i = 0;
function nextImage() {
  $intervalImg.setAttribute('src', imageSrcArray[i]);
  i++;
  if (i === 0) {
    clearInterval(changeImage);
  }
}

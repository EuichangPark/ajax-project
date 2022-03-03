var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://digimon-api.vercel.app/api/digimon');
xhr.responseType = 'json';
var imageSrcArray = [];
var nameArray = [];
var levelArray = [];
xhr.addEventListener('load', function () {
  for (var i = 0; i < xhr.response.length; i++) {
    imageSrcArray.push(xhr.response[i].img);
    nameArray.push(xhr.response[i].name);
    levelArray.push(xhr.response[i].level);
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
var $noMessage = document.querySelector('.not-in-library');
var $valueOfSearch = '';

$searchNavbar.addEventListener('click', searchNav);
function searchNav(event) {
  $intervalImgDiv.className = 'hidden';
  $searchBox.className = 'search-box';
}

function nextSearch() {
  var $domInLibrary = document.querySelector('.in-library');
  if ($inLibraryDiv.length !== 0) {
    $domInLibrary.innerHTML = '';
  }
}

var $inLibraryDiv = document.querySelector('.in-library');
var $iconBtn = document.querySelector('#search-icon');
$iconBtn.addEventListener('click', initiateSearch);
function initiateSearch(event) {
  nextSearch();
  var matchFound = false;
  $valueOfSearch = document.querySelector('#search-area').value;
  for (var i = 0; i < nameArray.length; i++) {
    if ($valueOfSearch.toLowerCase() === nameArray[i].toLowerCase()) {
      matchFound = true;
      var searchResult = document.querySelector('.search-img-result');
      if (!searchResult && (matchFound === true)) {
        var $digimonName = document.createElement('h3');
        $digimonName.textContent = nameArray[i];
        $inLibraryDiv.appendChild($digimonName);
        var $inLibraryImg = document.createElement('img');
        $inLibraryImg.classList.add('search-img-result');
        $inLibraryImg.setAttribute('src', imageSrcArray[i]);
        $inLibraryDiv.appendChild($inLibraryImg);
        var $digimonLevel = document.createElement('h3');
        $digimonLevel.textContent = levelArray[i];
        $inLibraryDiv.appendChild($digimonLevel);
      }
    }
  }
  if (matchFound === false) {
    $intervalImgDiv.className = 'hidden';
    $noMessage.className = 'not-in-library';
    $inLibraryDiv.className = 'hidden';
  }
}
/* after serach is done search result stays but search box shows placeholder again. */

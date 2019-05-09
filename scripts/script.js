const header = document.getElementsByTagName('header')[0];
const navigation = document.getElementById('navigation');
const anchorInHeader = document.getElementsByClassName('header-links');
const headerImage = document.getElementById('hero-icon');

function changeLinkTextColorinHeader(color) {
  
  for(var i = 0; i< anchorInHeader.length; i++) {
    anchorInHeader[i].style.color = color;
  } 

}

function changeHeaderIconSize(height, width, top, padding) {
  headerImage.style.height = `${height}px`;
  headerImage.style.width = `${width}px`;
  headerImage.style.top = `${top}px`;
  headerImage.style.padding = `${padding}px`;  
}

function fixNav() {

  if (window.scrollY >= header.scrollHeight - 200) {
    navigation.classList.add('fixed-nav');
    changeLinkTextColorinHeader('#fff');
    changeHeaderIconSize(80, 80, 0, 5);
    
  } else {
    navigation.classList.remove('fixed-nav');
    changeLinkTextColorinHeader('white');
    changeHeaderIconSize(100, 100, 10, 0);
  }

}

function moveTop() {
  header.scrollIntoView({behavior: "smooth"});
}


window.addEventListener('scroll', fixNav)

headerImage.addEventListener('click', moveTop);

//  Register Service Worker

if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./service-worker.js', { scope: './' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    })

}
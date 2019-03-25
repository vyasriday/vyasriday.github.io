const header = document.getElementsByTagName('header')[0];
const navigation = document.getElementById('navigation');
const anchorInHeader = document.getElementsByClassName('header-links');


function changeLinkTextColorinHeader(links, color, fontWeight) {
  
  for(var i = 0; i< links.length; i++) {
    links[i].style.color = color;
    links[i].style.fontWeight = fontWeight;
  }
  

}

function fixNav() {

  if (window.scrollY >= header.scrollHeight) {
    navigation.classList.add('fixed-nav');
    changeLinkTextColorinHeader(anchorInHeader, 'black', 600);
  } else {
    navigation.classList.remove('fixed-nav');
    changeLinkTextColorinHeader(anchorInHeader, 'white', 'unset');
  }

}
window.addEventListener('scroll', fixNav)
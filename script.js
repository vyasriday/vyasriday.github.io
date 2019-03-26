const header = document.getElementsByTagName('header')[0];
const navigation = document.getElementById('navigation');
const anchorInHeader = document.getElementsByClassName('header-links');
const headerImage = document.getElementById('hero-icon');
const projectsItems = document.getElementsByClassName('work-item');

function changeLinkTextColorinHeader(links, color, fontWeight) {
  
  for(var i = 0; i< links.length; i++) {
    links[i].style.color = color;
    links[i].style.fontWeight = fontWeight;
  } 

}

function chnageHeaderIconSize(height, width, top, padding) {
  headerImage.style.height = `${height}px`;
  headerImage.style.width = `${width}px`;
  headerImage.style.top = `${top}px`;
  headerImage.style.padding = `${padding}px`;  
}

function fixNav() {

  if (window.scrollY >= header.scrollHeight - 150) {
    navigation.classList.add('fixed-nav');
    changeLinkTextColorinHeader(anchorInHeader, '#fff', 600);
    chnageHeaderIconSize(80, 80, 0, 5);
    
  } else {
    navigation.classList.remove('fixed-nav');
    changeLinkTextColorinHeader(anchorInHeader, 'white', 'unset');
    chnageHeaderIconSize(100, 100, 10, 0);
  }

}

function moveTop() {
  header.scrollIntoView({behavior: "smooth"});
}
window.addEventListener('scroll', fixNav)

headerImage.addEventListener('click', moveTop);

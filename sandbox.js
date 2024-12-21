var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
const hidden = document.getElementById('hidden-menu');
const hiddenButton = document.getElementById('hidden-img');
const stay = document.getElementById('hidden-stay');
hiddenButton.addEventListener('mouseover', () => hidden.style.display = "flex");
stay.addEventListener('mouseover', () => hidden.style.display = "flex");
hidden.addEventListener('mouseleave', () => hidden.style.display = "none");
go.addEventListener('scroll', () => hidden.style.display = "none");

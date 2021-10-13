const bioLink = document.getElementById('bio-link');
const bioSection = document.getElementById('bio-section');
const projectLink = document.getElementById('project-link');
const projectSection = document.getElementById('project-section');
const contactMeLink = document.getElementById('contact-me-link');
const contactMeSection = document.getElementById('contact-me-section');

bioLink.onclick = function () {
  bioSection.classList.remove('hide');
  bioSection.classList.add('show');
  projectSection.classList.add('hide');
  projectSection.classList.remove('show');
  contactMeSection.classList.add('hide');
  contactMeSection.classList.remove('show');
};

projectLink.onclick = function () {
  bioSection.classList.add('hide');
  bioSection.classList.remove('show');
  projectSection.classList.remove('hide');
  projectSection.classList.add('show');
  contactMeSection.classList.add('hide');
  contactMeSection.classList.remove('show');
};

contactMeLink.onclick = function () {
  bioSection.classList.add('hide');
  bioSection.classList.remove('show');
  projectSection.classList.add('hide');
  projectSection.classList.remove('show');
  contactMeSection.classList.remove('hide');
  contactMeSection.classList.add('show');
};

var modal = document.querySelector('.project-modal');
var btn = document.querySelector('.details-btn');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
  modal.style.display = 'block';
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

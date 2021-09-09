const bioLink = document.getElementById('bio-link');
const bioSection = document.getElementById('bio-section');
const projectLink = document.getElementById('project-link');
const projectSection = document.getElementById('project-section');
const contactMeLink = document.getElementById('contact-me-link');
const contactMeSection = document.getElementById('contact-me-section');

bioLink.onclick = function () {
  bioSection.classList.remove('hide');
  projectSection.classList.add('hide');
  contactMeSection.classList.add('hide');
};

projectLink.onclick = function () {
  bioSection.classList.add('hide');
  projectSection.classList.remove('hide');
  contactMeSection.classList.add('hide');
};

contactMeLink.onclick = function () {
  bioSection.classList.add('hide');
  projectSection.classList.add('hide');
  contactMeSection.classList.remove('hide');
};

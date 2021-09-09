const bioLink = document.getElementById('bio-link');
const bioSection = document.getElementById('bio-section');
const projectLink = document.getElementById('project-link');
const projectSection = document.getElementById('project-section');
const contactMeLink = document.getElementById('contact-me-link');
const contactMeSection = document.getElementById('contact-me-section');

bioLink.onclick = function () {
  bioSection.removeClass('hide');
  projectSection.addClass('hide');
  contactMeSection.addClass('hide');
};

projectLink.onclick = function () {
  bioSection.addClass('hide');
  projectSection.removeClass('hide');
  contactMeSection.addClass('hide');
};

contactMeLink.onclick = function () {
  bioSection.addClass('hide');
  projectSection.addClass('hide');
  contactMeSection.removeClass('hide');
};

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

const triggers = document.getElementsByClassName('trigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('modal');
const closeButtons = document.getElementsByClassName('close-button');

for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    modals[index].classList.toggle('show-modal');
  };
  trigger.addEventListener('click', toggleModal);
  closeButtons[index].addEventListener('click', toggleModal);
}

const toggleBtn = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
  toggleBtn.classList.toggle('toggleClose');
  console.log('click');
});

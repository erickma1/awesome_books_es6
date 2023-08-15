const links = document.querySelectorAll('.links li');

function resetLinks() {
  links.forEach((li) => {
    li.classList.remove('active');
  });
}

function initVisitedMenu() {
  links.forEach((li) => {
    li.addEventListener('click', () => {
      resetLinks();
      li.classList.add('active');
    });
  });
}

export { initVisitedMenu };

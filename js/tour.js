document.addEventListener('DOMContentLoaded', () => {
  const showButtons = document.querySelectorAll('.show-map-button');
  const closeButtons = document.querySelectorAll('.close-map-button');

  showButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const map = button.nextElementSibling;
      map.classList.remove('hidden');
      button.style.display = 'none';
    });
  });

  document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const triggerPoint = 150; // Adjust to the scroll point where the background should appear
  
    if (window.scrollY > triggerPoint) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const map = button.parentElement;
      const showButton = map.previousElementSibling;
      map.classList.add('hidden');
      showButton.style.display = 'block';
    });
  });
});

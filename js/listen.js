document.querySelector('.message-box-toggle').addEventListener('click', function () {
    const content = document.querySelector('.message-box-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle the 'active' class on the nav-links when the hamburger menu is clicked
  hamburgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const triggerPoint = 250; // Adjust to the scroll point where the background should appear
  
    if (window.scrollY > triggerPoint) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
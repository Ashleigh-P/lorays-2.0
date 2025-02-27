
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerLinks = document.querySelector('.hamburger-links');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    hamburgerLinks.classList.toggle('active');
});
document.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const triggerPoint = 100; // Adjust to the scroll point where the background should appear

  if (window.scrollY > triggerPoint) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelector('.message-box-toggle').addEventListener('click', function () {
  const content = document.querySelector('.message-box-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents default form submission behavior

  // Assuming subscription is successful, display thank-you message
  document.getElementById("subscribe-form").style.display = "none";
  document.getElementById("thank-you-message").style.display = "block";
});

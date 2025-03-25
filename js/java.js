
      const hamburgerMenu = document.querySelector('.hamburger-menu');
      const hamburgerLinks = document.querySelector('.hamburger-links');
      
      hamburgerMenu.addEventListener('click', () => {
          hamburgerMenu.classList.toggle('active');
          hamburgerLinks.classList.toggle('active');
      });
      document.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        const triggerPoint = 250; 
      
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

(function() {
  emailjs.init('6OwlV7DvXGi7q4dqm');  
})();

document.getElementById('message-form').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent the form from reloading the page

  var formData = new FormData(event.target);

  // Send the form data using EmailJS
  emailjs.sendForm('service_nfb3g98', 'template_dlepj8s', event.target, '6OwlV7DvXGi7q4dqm')
    .then(function(response) {
      alert('Message sent! We will be in touch soon!');
    }, function(error) {
      alert('Failed to send message: ' + error.text);
    });

  // Optionally, close the message box after sending
  document.querySelector('.message-box-content').style.display = 'none';
});

/*----*/





      const hamburgerMenu = document.querySelector('.hamburger-menu');
      const hamburgerLinks = document.querySelector('.hamburger-links');
      
      hamburgerMenu.addEventListener('click', () => {
          hamburgerMenu.classList.toggle('active');
          hamburgerLinks.classList.toggle('active');
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

// Toggle the visibility of the message box
document.querySelector('.message-box-toggle').addEventListener('click', function () {
  const content = document.querySelector('.message-box-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// Initialize EmailJS
(function() {
  emailjs.init('6OwlV7DvXGi7q4dqm');  // Replace with your actual Public Key
})();

// Handle form submission for sending the email
document.getElementById('message-form').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent the form from reloading the page

  var formData = new FormData(event.target);

  // Send the form data using EmailJS
  emailjs.sendForm('service_nfb3g98', 'template_dlepj8s', event.target, '6OwlV7DvXGi7q4dqm')
    .then(function(response) {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message: ' + error.text);
    });

  // Optionally, close the message box after sending
  document.querySelector('.message-box-content').style.display = 'none';
});
      document.getElementById('transitionButton').addEventListener('click', function () {
        var overlay = document.getElementById('videoOverlay');
        var video = document.getElementById('transitionVideo');
    
        // Ensure controls are disabled
        video.removeAttribute('controls');
        video.controls = false;
    
        // Activate the overlay and play the video
        overlay.classList.add('active');
        video.play();
    
        // Request full-screen for the video element
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari, Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    
        // Redirect to another page after the video ends
        video.onended = function () {
            window.location.href = 'your-new-url.html'; // add Lo Rays link here 
        };
    });
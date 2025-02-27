
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

      document.querySelector('.message-box-toggle').addEventListener('click', function () {
        const content = document.querySelector('.message-box-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
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
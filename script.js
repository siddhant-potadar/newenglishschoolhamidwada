// Main slideshow variables
let mainSlideIndex = 0;
let mainSlides = document.querySelectorAll(".main-slideshow .mySlides");

// Achievements slideshow variables
let achievementSlideIndex = 0;
let achievementSlides = document.querySelectorAll(".achievements-slideshow .mySlides");

// Functions for main slideshow
function plusMainSlides(n) {
  mainSlideIndex += n;
  if (mainSlideIndex >= mainSlides.length) mainSlideIndex = 0;
  if (mainSlideIndex < 0) mainSlideIndex = mainSlides.length - 1;
  showMainSlidesManual();
}

function showMainSlidesManual() {
  for (let i = 0; i < mainSlides.length; i++) {
    mainSlides[i].style.display = "none";  
  }
  mainSlides[mainSlideIndex].style.display = "block";
}

function showMainSlides() {
  for (let i = 0; i < mainSlides.length; i++) {
    mainSlides[i].style.display = "none";  
  }
  mainSlideIndex++;
  if (mainSlideIndex >= mainSlides.length) mainSlideIndex = 0;
  mainSlides[mainSlideIndex].style.display = "block";  
  setTimeout(showMainSlides, 3000); // Change image every 3 seconds
}

// Functions for achievements slideshow
function plusAchievementSlides(n) {
  achievementSlideIndex += n;
  if (achievementSlideIndex >= achievementSlides.length) achievementSlideIndex = 0;
  if (achievementSlideIndex < 0) achievementSlideIndex = achievementSlides.length - 1;
  showAchievementSlidesManual();
}

function showAchievementSlidesManual() {
  for (let i = 0; i < achievementSlides.length; i++) {
    achievementSlides[i].style.display = "none";  
  }
  achievementSlides[achievementSlideIndex].style.display = "block";
}

function showAchievementSlides() {
  for (let i = 0; i < achievementSlides.length; i++) {
    achievementSlides[i].style.display = "none";  
  }
  achievementSlideIndex++;
  if (achievementSlideIndex >= achievementSlides.length) achievementSlideIndex = 0;
  achievementSlides[achievementSlideIndex].style.display = "block";  
  setTimeout(showAchievementSlides, 4000); // Change image every 4 seconds (slight difference from main slideshow)
}

// Initialize both slideshows when the page loads
document.addEventListener("DOMContentLoaded", function() {
  // Only proceed if slides exist
  if (mainSlides.length > 0) {
    showMainSlides();
  }
  
  if (achievementSlides.length > 0) {
    showAchievementSlides();
  }
});

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  // Add mobile menu button to the navbar
  const navbar = document.querySelector('.navbar');
  const navMenu = document.querySelector('.nav-menu');
  const mobileButton = document.createElement('button');
  mobileButton.className = 'mobile-menu-button';
  mobileButton.innerHTML = '☰';
  navbar.insertBefore(mobileButton, navMenu);
  
  // Toggle menu when button is clicked
  mobileButton.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
  
  // Handle dropdown menus on mobile - FIXED CODE
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    // Get the direct child <a> element of this dropdown
    const dropdownLink = dropdown.querySelector(':scope > a');
    
    // Add click event to the dropdown link
    dropdownLink.addEventListener('click', function(e) {
      // Only handle dropdown behavior on mobile
      if (window.innerWidth <= 768) {
        // Get the href attribute from the link
        const href = this.getAttribute('href');
        
        // Only prevent default if link is "#" or empty
        if (!href || href === "#") {
          e.preventDefault();
          // Toggle active class on the parent dropdown
          dropdown.classList.toggle('active');
          
          // Close all other dropdowns
          dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove('active');
            }
          });
        }
      }
    });
  });
  
  // Handle resize event to reset mobile menu state when switching to desktop view
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
});


// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }
  
  // Fake form submission
  function sendMessage(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    e.target.reset();
  }
  // Slideshow functionality
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let index = 0;
function changeImage() {
  const slideshow = document.getElementById("slideshow");
  index = (index + 1) % images.length;
  slideshow.src = images[index];
}
setInterval(changeImage, 2000); // every 2 seconds

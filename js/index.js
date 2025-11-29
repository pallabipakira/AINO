// Helper function to display messages instead of alert()
const showMessage = (message, type) => {
  const messageBox = document.getElementById("messageBox");
  messageBox.textContent = message;
  messageBox.className = `message-box show ${type}`;

  // Hide the message after 3 seconds
  // setTimeout(() => {
  //   messageBox.classList.remove("show");
  // }, 3000);
};

// Smooth scroll to top functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show after scrolling 300px
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top on click
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Newsletter subscription (basic console log for demonstration)
document.getElementById("subscribeButton").addEventListener("click", () => {
  const emailInput = document.getElementById("emailInput");
  const privacyCheckbox = document.getElementById("privacyCheck");

  if (emailInput.value && privacyCheckbox.checked) {
    console.log("Subscribing with email:", emailInput.value);
    showMessage("Thank you for subscribing!", "success");
    emailInput.value = ""; // Clear input
    privacyCheckbox.checked = false; // Uncheck checkbox
  } else if (!emailInput.value) {
    showMessage("Please enter your email address.", "error");
  } else {
    showMessage("Please agree to the Privacy Policy.", "error");
  }
});

// slider
// const track = document.getElementById("#logoTrack");
// const logos = track.innerHTML;
// track.innerHTML += logos;
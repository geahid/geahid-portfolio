// ==============================
// GEAHID SUNGKA AGAO
// Personal Portfolio — script.js
// ==============================

// --- DISPLAY CURRENT DATE AND TIME ---
function updateDateTime() {
  var el = document.getElementById('datetime');
  if (!el) return;
  var now = new Date();
  el.textContent = now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
updateDateTime();
setInterval(updateDateTime, 1000);

// --- SHOW WELCOME MESSAGE BUTTON ---
function showWelcome() {
  alert('Welcome to Geahid Sungka Agao\'s Portfolio!\nThank you for visiting. Feel free to look around!');
}

// --- FORM VALIDATION ---
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var name    = document.getElementById('name').value.trim();
  var email   = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields: Name, Email, and Message.');
    return;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Message sent successfully! Thank you, ' + name + '. I\'ll get back to you soon!');
  this.reset();
});
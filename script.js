document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple frontend feedback, does not send email
    document.getElementById('formStatus').textContent = "Thank you for contacting me!";
    setTimeout(() => {
        document.getElementById('formStatus').textContent = "";
        document.getElementById('contactForm').reset();
    }, 3000);
});

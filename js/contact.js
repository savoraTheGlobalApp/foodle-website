// ======================================
// FOODLE CONTACT FORM JAVASCRIPT
// ======================================

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const formObject = {};
      
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      
      console.log('Contact form submission:', formObject);
      
      // In a real implementation, you would send this data to your server
      // For demo purposes, we'll just show a success message
      
      // Create success message
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success';
      successMessage.innerHTML = `
        <h3>Thank you for your message!</h3>
        <p>We've received your inquiry and will get back to you shortly.</p>
      `;
      
      // Replace form with success message
      contactForm.innerHTML = '';
      contactForm.appendChild(successMessage);
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}); 
// ======================================
// FOODLE WAITLIST FORM JAVASCRIPT
// ======================================

document.addEventListener('DOMContentLoaded', function() {
  const waitlistForm = document.getElementById('waitlist-form');
  const formSuccess = document.getElementById('form-success');
  const copyButton = document.querySelector('.btn-copy');
  
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const formData = new FormData(waitlistForm);
      const formObject = {};
      
      formData.forEach((value, key) => {
        // Handle checkboxes (multiple values)
        if (key === 'interest') {
          if (!formObject[key]) {
            formObject[key] = [];
          }
          formObject[key].push(value);
        } else {
          formObject[key] = value;
        }
      });
      
      console.log('Form data:', formObject);
      
      // In a real implementation, you would send this data to your server
      // For demo purposes, we'll just show the success message
      
      // Show success message
      waitlistForm.classList.add('hidden');
      formSuccess.classList.remove('hidden');
      
      // Scroll to success message
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  
  // Copy referral link functionality
  if (copyButton) {
    copyButton.addEventListener('click', function() {
      const linkInput = document.querySelector('.copy-link input');
      linkInput.select();
      document.execCommand('copy');
      
      // Change button text temporarily
      const originalText = this.textContent;
      this.textContent = 'Copied!';
      
      setTimeout(() => {
        this.textContent = originalText;
      }, 2000);
    });
  }
}); 
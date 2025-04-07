// ======================================
// FOODLE BLOG JAVASCRIPT
// ======================================

document.addEventListener('DOMContentLoaded', function() {
  // Blog category filtering
  const categoryTabs = document.querySelectorAll('.category-tab');
  const postCards = document.querySelectorAll('.post-card');
  
  if (categoryTabs.length > 0) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Update active tab
        categoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // Filter posts
        postCards.forEach(post => {
          if (category === 'all' || post.getAttribute('data-category') === category) {
            post.style.display = 'block';
          } else {
            post.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Load more posts functionality
  const loadMoreButton = document.querySelector('.load-more button');
  
  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function() {
      // In a real implementation, this would load more posts from the server
      // For demo purposes, we'll just show a message
      this.textContent = 'Loading...';
      
      setTimeout(() => {
        this.textContent = 'No more posts to load';
        this.disabled = true;
      }, 1500);
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      // In a real implementation, you would send this to your server
      console.log('Newsletter signup:', email);
      
      // Show success message
      const button = this.querySelector('button');
      const originalText = button.textContent;
      
      button.textContent = 'Subscribed!';
      emailInput.value = '';
      
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    });
  }
}); 
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceItem = this.closest('.service-item');
            const shortDescription = serviceItem.querySelector('.short-description');
            const fullDescription = serviceItem.querySelector('.full-description');
            const isHidden = fullDescription.style.display === 'none';
            
            if (isHidden) {
                shortDescription.style.display = 'none';
                fullDescription.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                shortDescription.style.display = 'block';
                fullDescription.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});
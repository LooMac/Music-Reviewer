var items =  document.querySelectorAll('.menu-item');

for (var i = 0; i < items.length; i++) {
    // Add hover effect to menu items iteratively
    items[i].addEventListener('mouseover', function() {
        //If hover, scale up the item
        this.style.transform = 'scale(1.15)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    items[i].addEventListener('mouseout', function() {
        //On mouse out, scale back to original size
        this.style.transform = 'scale(1)';
    });
}
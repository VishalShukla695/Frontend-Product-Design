document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.frame-19-RTB button');
    const sizeButtons = document.querySelectorAll('.size-select');
    const decreaseButton = document.querySelector('.item-decrease');
    const increaseButton = document.querySelector('.item-increase');
    const itemCountElement = document.querySelector('.item-count');
    const addToCartButton = document.querySelector('.add-to-cart-kys');
    const cartMessage = document.querySelector('.frame-26-sob');

// Get all image input elements
const imageInputs = document.querySelectorAll('.frame-19-RTB input[type="image"]');

// Event listeners for image selection
imageInputs.forEach(input => {
    input.addEventListener('click', function() {
        // Remove the "selected" class from all image inputs
        imageInputs.forEach(imgInput => imgInput.style.border = 'none');
        // Add a border to the clicked image input
        input.style.border = '2px solid black'; // You can customize the border style
        // Call the showSelectedItem function with the selected image source
        showSelectedItem(input.src);
    });
});





    // Event listeners for size selection
sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove the active class from all size buttons
        sizeButtons.forEach(btn => btn.classList.remove('frame-21-f8Z'));
        // Add the active class to the clicked size button
        button.classList.add('frame-21-f8Z');
        // Uncheck all other radio buttons
        sizeButtons.forEach(btn => {
            if (btn !== button) {
                btn.checked = false;
            }
        });
    });
});
 // Initialize item count
 let itemCount = 1;

    // Event listener for decreasing item count
    decreaseButton.addEventListener('click', function() {
        if (itemCount > 1) {
            itemCount--;
            itemCountElement.textContent = itemCount;
        }
    });

    // Event listener for increasing item count
    increaseButton.addEventListener('click', function() {
        itemCount++;
        itemCountElement.textContent = itemCount;
    });

    // Event listener for adding to cart
    addToCartButton.addEventListener('click', function() {
        const selectedColor = document.querySelector('.frame-19-RTB button.selected').querySelector('img').alt;
        const selectedSize = document.querySelector('.size-select.selected').textContent;
        cartMessage.textContent = `Embrace Sideboard with Color ${selectedColor} and Size ${selectedSize} added to cart`;
    });
});

// Get the button and the cart message div
const cartButton = document.getElementById('cart-button');
const cartMessage = document.querySelector('.frame-26-sob');

// Add click event listener to the button
cartButton.addEventListener('click', function() {
    // Toggle visibility of the cart message div
    cartMessage.style.display = cartMessage.style.display === 'none' ? 'block' : 'none';
    
    // Add a class to the button for a brief period to indicate it was clicked
    cartButton.classList.add('clicked');
    setTimeout(() => {
        cartButton.classList.remove('clicked');
    }, 500); // Adjust the duration as needed (in milliseconds)
});


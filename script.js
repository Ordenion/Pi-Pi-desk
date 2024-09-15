const resizer = document.querySelector('.resizer');
const leftSide = document.querySelector('.resizable-column');
const rightSide = document.querySelector('.main-content');

let isResizing = false;

resizer.addEventListener('mousedown', function(e) {
    isResizing = true;
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', function(e) {
    if (!isResizing) return;
    const offsetRight = document.body.offsetWidth - (e.clientX);
    const minWidth = 150; // minimum width for the left side
    const maxWidth = document.body.offsetWidth - minWidth; // maximum width for the left side
    if (offsetRight >= minWidth && offsetRight <= maxWidth) {
        leftSide.style.width = `${document.body.offsetWidth - offsetRight}px`;
    }
});

document.addEventListener('mouseup', function() {
    isResizing = false;
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
});





const checkInButton = document.querySelector('.console-card button:nth-child(1)'); // Adjust if needed
const overlay = document.getElementById('overlay');
const floatingWindow = document.getElementById('floating-window');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBtn = document.getElementById('confirm-btn');

// Function to open the floating window
checkInButton.addEventListener('click', function() {
    overlay.style.display = 'block';
    floatingWindow.style.display = 'block';
});

// Function to close the floating window
function closeFloatingWindow() {
    overlay.style.display = 'none';
    floatingWindow.style.display = 'none';
}

// Cancel button functionality
cancelBtn.addEventListener('click', closeFloatingWindow);

// Confirm button functionality (for now it just closes the window, you can add more logic)
confirmBtn.addEventListener('click', function() {
    // Add functionality for confirmation (e.g., form validation, etc.)
    closeFloatingWindow();
});



const checkOutButton = document.querySelector('.console-card button:nth-child(2)'); // Adjust if needed
const checkoutOverlay = document.getElementById('checkout-overlay');
const checkoutWindow = document.getElementById('checkout-window');
const cancelCheckoutBtn = document.getElementById('cancel-checkout-btn');
const confirmCheckoutBtn = document.getElementById('confirm-checkout-btn');

// Function to open the checkout floating window
checkOutButton.addEventListener('click', function() {
    checkoutOverlay.style.display = 'block';
    checkoutWindow.style.display = 'block';
});

// Function to close the checkout floating window
function closeCheckoutWindow() {
    checkoutOverlay.style.display = 'none';
    checkoutWindow.style.display = 'none';
}

// Cancel button functionality for check-out
cancelCheckoutBtn.addEventListener('click', closeCheckoutWindow);

// Confirm button functionality for check-out (add your logic here)
confirmCheckoutBtn.addEventListener('click', function() {
    // Add confirmation logic if needed
    closeCheckoutWindow();
});
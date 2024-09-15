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

const viewRoomsButton = document.querySelector('.console-card button:nth-child(3)'); // Adjust if needed
const roomsOverlay = document.getElementById('active-rooms-overlay');
const roomsWindow = document.getElementById('active-rooms-window');
const closeRoomsBtn = document.getElementById('close-rooms-btn');

// Function to open the active rooms floating window
viewRoomsButton.addEventListener('click', function() {
    roomsOverlay.style.display = 'block';
    roomsWindow.style.display = 'block';
});

// Function to close the active rooms floating window
function closeRoomsWindow() {
    roomsOverlay.style.display = 'none';
    roomsWindow.style.display = 'none';
}

// Close button functionality
closeRoomsBtn.addEventListener('click', closeRoomsWindow);




const createOrderButton = document.querySelector('.create-order-btn');
const createOrderOverlay = document.getElementById('create-order-overlay');
const createOrderWindow = document.getElementById('create-order-window');
const cancelOrderBtn = document.getElementById('cancel-order-btn');
const confirmOrderBtn = document.getElementById('confirm-order-btn');

// Function to open the create order floating window
createOrderButton.addEventListener('click', function() {
    createOrderOverlay.style.display = 'block';
    createOrderWindow.style.display = 'block';
});

// Function to close the create order floating window
function closeCreateOrderWindow() {
    createOrderOverlay.style.display = 'none';
    createOrderWindow.style.display = 'none';
}

// Cancel button functionality for create order
cancelOrderBtn.addEventListener('click', closeCreateOrderWindow);

// Confirm button functionality for create order
confirmOrderBtn.addEventListener('click', function() {
    // Add your logic for confirming the order here (e.g., form submission)
    closeCreateOrderWindow();
});





const activeOrdersButton = document.querySelector('.view-orders-btn'); // Adjust if needed
const activeOrdersOverlay = document.getElementById('active-orders-overlay');
const activeOrdersWindow = document.getElementById('active-orders-window');
const closeOrdersBtn = document.getElementById('close-orders-btn');

// Function to open the active orders floating window
activeOrdersButton.addEventListener('click', function() {
    activeOrdersOverlay.style.display = 'block';  // Show the dark overlay
    activeOrdersWindow.style.display = 'block';   // Show the active orders window
});

// Function to close the active orders floating window
function closeActiveOrdersWindow() {
    activeOrdersOverlay.style.display = 'none';  // Hide the dark overlay
    activeOrdersWindow.style.display = 'none';   // Hide the active orders window
}

// Close button functionality for active orders
closeOrdersBtn.addEventListener('click', closeActiveOrdersWindow);




const createCleaningOrderButton = document.querySelector('.cleaning-create-order-btn'); // Adjust if needed
const createCleaningOrderOverlay = document.getElementById('create-cleaning-order-overlay');
const createCleaningOrderWindow = document.getElementById('create-cleaning-order-window');
const cancelCleaningOrderBtn = document.getElementById('cancel-cleaning-order-btn');
const confirmCleaningOrderBtn = document.getElementById('confirm-cleaning-order-btn');

// Function to open the create cleaning order floating window
createCleaningOrderButton.addEventListener('click', function() {
    createCleaningOrderOverlay.style.display = 'block';  // Show the dark overlay
    createCleaningOrderWindow.style.display = 'block';   // Show the create cleaning order window
});

// Function to close the create cleaning order floating window
function closeCreateCleaningOrderWindow() {
    createCleaningOrderOverlay.style.display = 'none';  // Hide the dark overlay
    createCleaningOrderWindow.style.display = 'none';   // Hide the create cleaning order window
}

// Cancel button functionality for create cleaning order
cancelCleaningOrderBtn.addEventListener('click', closeCreateCleaningOrderWindow);

// Confirm button functionality for create cleaning order
confirmCleaningOrderBtn.addEventListener('click', function() {
    // Add your logic for confirming the order here (e.g., form submission)
    closeCreateCleaningOrderWindow();
});

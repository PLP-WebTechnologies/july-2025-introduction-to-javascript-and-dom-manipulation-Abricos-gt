// =========================
// Part 1: JavaScript Basics
// =========================

// Check user's age and display a message
document.getElementById('checkAgeBtn').addEventListener('click', function() {
    let age = parseInt(document.getElementById('ageInput').value);
    let message = '';

    if (isNaN(age)) {
        message = 'Please enter a valid number!';
    } else if (age >= 18) {
        message = 'You are an adult.';
    } else {
        message = 'You are a minor.';
    }

    document.getElementById('ageResult').textContent = message;
});

// =========================
// Part 2: Functions
// =========================

// Function to calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function to format price
function formatPrice(amount) {
    return '$' + amount.toFixed(2);
}

// Event listener for total calculation
document.getElementById('calcTotalBtn').addEventListener('click', function() {
    let price = parseFloat(document.getElementById('priceInput').value);
    let quantity = parseInt(document.getElementById('quantityInput').value);

    if (isNaN(price) || isNaN(quantity)) {
        document.getElementById('totalResult').textContent = 'Please enter valid numbers.';
        return;
    }

    let total = calculateTotal(price, quantity);
    document.getElementById('totalResult').textContent = 'Total: ' + formatPrice(total);
});

// =========================
// Part 3: Loops
// =========================

// Using a for loop to display numbers 1-10
document.getElementById('showNumbersBtn').addEventListener('click', function() {
    let ul = document.getElementById('numberList');
    ul.innerHTML = ''; // Clear previous list
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
    }
});

// Example using forEach loop
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach(function(fruit) {
    console.log('Fruit:', fruit);
});

// =========================
// Part 4: DOM Manipulation
// =========================

// Toggle dark/light theme
document.getElementById('toggleThemeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Add dynamic items to list
document.getElementById('addItemBtn').addEventListener('click', function() {
    let ul = document.getElementById('dynamicList');
    let li = document.createElement('li');
    li.textContent = 'New item added at ' + new Date().toLocaleTimeString();
    ul.appendChild(li);
});

// Change text color dynamically
let themeText = document.getElementById('themeText');
themeText.addEventListener('click', function() {
    themeText.style.color = themeText.style.color === 'red' ? 'black' : 'red';
});

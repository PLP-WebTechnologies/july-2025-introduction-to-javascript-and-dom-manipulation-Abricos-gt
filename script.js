 // ====================================
// Part 1: Basics (Variables & Conditionals)
// ====================================
document.getElementById('checkAgeBtn').addEventListener('click', () => {
  let age = parseInt(document.getElementById('ageInput').value);
  let result = '';

  if (isNaN(age)) {
    result = 'Please enter a valid number.';
  } else if (age >= 18) {
    result = 'You are an adult.';
  } else {
    result = 'You are a minor.';
  }

  document.getElementById('ageResult').textContent = result;
});

// ====================================
// Part 2: Functions
// ====================================

// Function to calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format currency
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

document.getElementById('calcBtn').addEventListener('click', () => {
  let price = parseFloat(document.getElementById('priceInput').value);
  let qty = parseInt(document.getElementById('quantityInput').value);
  let output = '';

  if (isNaN(price) || isNaN(qty)) {
    output = 'Please enter valid values for price and quantity.';
  } else {
    let total = calculateTotal(price, qty);
    output = 'Total: ' + formatCurrency(total);
  }

  document.getElementById('calcResult').textContent = output;
});

// ====================================
// Part 3: Loops
// ====================================
document.getElementById('listNumbersBtn').addEventListener('click', () => {
  let ul = document.getElementById('numberList');
  ul.innerHTML = '';

  // For loop example
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);
  }
});

// ====================================
// Part 4: DOM Manipulation
// ====================================

// Toggle theme
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Change text color on click
let themeText = document.getElementById('themeText');
themeText.addEventListener('click', () => {
  themeText.style.color = themeText.style.color === 'red' ? 'black' : 'red';
});

// Add item dynamically
document.getElementById('addItemBtn').addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = 'Item added at ' + new Date().toLocaleTimeString();
  document.getElementById('dynamicList').appendChild(li);
});

// ====================================
// Bonus Feature: Guess the Number Game
// ====================================
let secret = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById('guessInput').value);
  attempts++;
  let msg = '';

  if (isNaN(guess)) {
    msg = 'Please enter a valid number.';
  } else if (guess === secret) {
    msg = `Correct! The number was ${secret}. You guessed it in ${attempts} attempts.`;
  } else if (guess > secret) {
    msg = 'Too high. Try again.';
  } else {
    msg = 'Too low. Try again.';
  }

  document.getElementById('guessResult').textContent = msg;
}

function resetGame() {
  secret = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('guessResult').textContent = 'Game has been reset.';
}

document.getElementById('guessBtn').addEventListener('click', checkGuess);
document.getElementById('resetBtn').addEventListener('click', resetGame);

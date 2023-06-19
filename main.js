// Get references to HTML elements
const expenseForm = document.getElementById('expense-form')
const expenseNameInput = document.getElementById('expense-name')
const expenseAmountInput = document.getElementById('expense-amount')
const expenseList = document.getElementById('expense-list')

// Initialize expense data array
let expenses = [];

// Function to render expenses
function renderExpenses() {
  expenseList.innerHTML = '';

  expenses.forEach((expense, index) => {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>$${expense.amount}</td>
      <td>
        <button onclick="deleteExpense(${index})">Delete</button>
      </td>
    `;
    expenseList.appendChild(row)
  });
}

// Function to add an expense
function addExpense(event) {
  event.preventDefault();

  // Get input values
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value.trim())

  // Validate inputs
  if (name === '' || isNaN(amount)) {
    alert('Please enter a valid name and amount.')
    return;
  }

  // Create new expense object
  const expense = {
    name,
    amount
  };

  // Add expense to the array
  expenses.push(expense);

  // Clear input fields
  expenseNameInput.value = '';
  expenseAmountInput.value = '';

  // Render expenses
  renderExpenses();
}

// Function to delete an expense
function deleteExpense(index) {
  // Remove expense from the array
  expenses.splice(index, 1);

  // Render expenses
  renderExpenses();
}

// Event listener for form submission
expenseForm.addEventListener('submit', addExpense);

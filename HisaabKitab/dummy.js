// ================================
// ১. তোমার আগের Auth Code (অপরিবর্তিত + সামান্য addition)
// ================================
const registerForm = document.querySelector("#registerForm");
const loginForm = document.querySelector("#loginForm");
// ... বাকি সব variable আগের মতোই

let userData = JSON.parse(localStorage.getItem("user")) || [];
let isLoggedIn = JSON.parse(localStorage.getItem("logInStatus"));

const chekLogin = () => {
  if (isLoggedIn) {
    if (main) {
      main.style.display = "flex";
      const currentUser = localStorage.getItem("currentUser");
      if (userCurrent && currentUser) {
        userCurrent.textContent = `Username: ${currentUser}`;
      }
    }
    loginContainer.style.display = "none";

    // ✅ নতুন addition
    loadTransactions();
    renderTransactions();
    updateDashboard();
  }
  else {
    if (main) main.style.display = "none";
    if (loginContainer) loginContainer.style.display = "flex";
  }
}
chekLogin();

// ... registerForm, loginForm, logoutBtn এর বাকি সব logic আগের মতোই
// শুধু logoutBtn এ transactions = []; যোগ করবে


// ================================
// ২. Transaction Logic (নতুন যোগ করবে একই script.js তে)
// ================================
let transactions = [];

function getTransactionKey() {
    const currentUser = localStorage.getItem("currentUser");
    return `transactions_${currentUser}`;
}

function loadTransactions() {
    const key = getTransactionKey();
    const stored = localStorage.getItem(key);
    transactions = stored ? JSON.parse(stored) : [];
}

function saveTransactions() {
    const key = getTransactionKey();
    localStorage.setItem(key, JSON.stringify(transactions));
}

// Form submit handler (আগের answer থেকে হুবহু)
const transactionForm = document.getElementById('transactionForm');
if (transactionForm) {
  transactionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    if (!description || !amount || amount <= 0 || !date) {
        alert('সব field ঠিকমতো fill up করো!');
        return;
    }

    const newTransaction = {
        id: Date.now(),
        type, description, amount, date, category
    };

    transactions.push(newTransaction);
    saveTransactions();
    renderTransactions();
    updateDashboard();
    transactionForm.reset();
  });
}

function updateDashboard() {
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const currentBalance = totalIncome - totalExpense;

    document.getElementById('currentBalance').textContent = `₹${currentBalance.toFixed(2)}`;
    document.getElementById('totalIncome').textContent = `₹${totalIncome.toFixed(2)}`;
    document.getElementById('totalExpense').textContent = `₹${totalExpense.toFixed(2)}`;
    document.getElementById('totalTransactions').textContent = transactions.length;
}

function renderTransactions() {
    const listContainer = document.getElementById('transactionList');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    if (transactions.length === 0) {
        listContainer.innerHTML = '<p>কোনো transaction নেই।</p>';
        return;
    }

    [...transactions].reverse().forEach(t => {
        const item = document.createElement('div');
        item.classList.add('transaction-item', t.type);
        item.innerHTML = `
            <div>
                <strong>${t.description}</strong>
                <span>${t.category} | ${t.date}</span>
            </div>
            <div class="amount ${t.type}">
                ${t.type === 'income' ? '+' : '-'} ₹${t.amount.toFixed(2)}
            </div>
            <button onclick="deleteTransaction(${t.id})">🗑️</button>
        `;
        listContainer.appendChild(item);
    });
}

function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveTransactions();
    renderTransactions();
    updateDashboard();
}
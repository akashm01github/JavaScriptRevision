const registerForm = document.querySelector("#registerForm");
const loginForm = document.querySelector("#loginForm");
const main = document.querySelector("main");
const loginContainer = document.querySelector(".loginContainer");
const registerContainer = document.querySelector(".registerContainer");
const logoutBtn = document.querySelector("#logoutBtn");
const userCurrent = document.querySelector(".userCurrent");

const addTransation = document.querySelector("#addTransation");
const transaction_form = document.querySelector(".transaction_form");
const cashFrom = document.querySelector("#cashFrom");
const closeBtn = document.querySelector(".closeBtn");

// ! MAINCONTETN
const currentBalance = document.querySelector("#currentBalance");
const totalIncome = document.querySelector("#totalIncome");
const totalExpence = document.querySelector("#totalExpence");
const totalTransactions = document.querySelector("#totalTransactions");

const resetAllTranstion = document.querySelector("#resetAllTranstion");



let userData = JSON.parse(localStorage.getItem("user")) || [];

let isLoggedIn = JSON.parse(localStorage.getItem("logInStatus"));

let transactions = [];


const chekLogin = () => {
  if (isLoggedIn) {
    if (main) {
      main.style.display = "flex";
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (userCurrent && currentUser) {
        userCurrent.textContent = `Username: ${currentUser}`
      }
    }
    if (loginContainer) {
      loginContainer.style.display = "none";
    }
    loadTransactions();
  }
  else {
    if (main) {
      main.style.display = "none";
    }
    if (loginContainer) {
      loginContainer.style.display = "flex";
    }
  }
}


chekLogin()


if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const userName = event.target[0].value;
    const password = event.target[1].value;

    const isUserAlreadyExist = userData.find((user) => userName === user.userName);

    if (userName.trim() === "" && password.trim() === "") {
      alert("Blank Field");
      window.location.href = "register.html"
    }
    else {
      if (isUserAlreadyExist) {
        alert("User Already Exists")
      }
      else {
        const obj = { userName, password };
        userData.push(obj);

        localStorage.setItem("user", JSON.stringify(userData));

        window.location.href = "index.html";
      }
    }



  })
}



if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = event.target[0].value;
    const password = event.target[1].value;

    const savedUser = userData.find((user) => user.userName === userName);
    console.log(savedUser)

    if (savedUser && userName === savedUser.userName && password === savedUser.password) {
      alert("Loggedin Successfully");

      isLoggedIn = true;
      localStorage.setItem("logInStatus", JSON.stringify(isLoggedIn));
      localStorage.setItem("currentUser", JSON.stringify(userName));
      chekLogin();
    }
    else {
      alert("Invalid Username or Password");
      isLoggedIn = false;
      localStorage.setItem("logInStatus", JSON.stringify(isLoggedIn));
    }
  })
}


if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    isLoggedIn = false;
    localStorage.setItem("logInStatus", JSON.stringify(isLoggedIn));
    localStorage.removeItem("currentUser");
    window.location.href = "index.html"
    alert("Logged Out")
  })
}


//! TRANSATION

//todo: FORM COME  
addTransation.addEventListener("click", () => {
  transaction_form.style.display = "flex"
})

//todo: CLOSE 
closeBtn.addEventListener("click", () => {
  transaction_form.style.display = "none"
})




function getTransationKey() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return `transactions_${currentUser}`
}


function loadTransactions() {
  const key = getTransationKey();
  const stored = localStorage.getItem(key);
  transactions = stored ? JSON.parse(stored) : [];
  updateTransaction();
}

function saveTransactions() {
  const key = getTransationKey();
  localStorage.setItem(key, JSON.stringify(transactions));
}



function updateTransaction() {
  let totalIncomeAmount = 0;
  let totalExpenceAmount = 0;

  transactions.forEach((t) => {
    const amt = Number(t.amount);
    if (t.type == "income") {
      totalIncomeAmount += amt;
    }
    else {
      totalExpenceAmount += amt;
    }
  })

  const balance = totalIncomeAmount - totalExpenceAmount;

  if (currentBalance) currentBalance.textContent = `₹ ${balance}`;
  if (totalIncome) totalIncome.textContent = `₹ ${totalIncomeAmount}`;
  if (totalExpence) totalExpence.textContent = `₹ ${totalExpenceAmount}`;
  if (totalTransactions) totalTransactions.textContent = `${transactions.length}`;
}

cashFrom.addEventListener("submit", (event) => {
  event.preventDefault();

  const type = event.target[0].value;
  const description = event.target[1].value;;
  const amount = event.target[2].value;;
  const date = event.target[3].value;;
  const category = event.target[4].value;


  if (!description || !amount || amount <= 0 || !date || !category) {
    alert('Fill the Form Properly');
    return;
  }

  const newTransaction = {
    id: Date.now(),
    type,
    description,
    amount,
    date,
    category
  }

  transactions.push(newTransaction);


  saveTransactions();

  updateTransaction();

  transaction_form.style.display = "none";

  cashFrom.reset();
})


resetAllTranstion.addEventListener("click", () => {
  const key = getTransationKey();
  localStorage.removeItem(key);
  updateTransaction();
  transactions = [];
  alert("All transactions deleted");
  window.location.reload()
})
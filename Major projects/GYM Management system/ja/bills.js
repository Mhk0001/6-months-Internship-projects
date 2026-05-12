// Load and show bills when page opens
document.addEventListener("DOMContentLoaded", function () {
  displayBills();
});

// Handle bill form submit
document.getElementById("bill-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const member = document.getElementById("bill-member").value.trim();
  const amount = document.getElementById("bill-amount").value.trim();

  if (!member || !amount || isNaN(amount)) {
    alert("Please enter valid name and amount.");
    return;
  }

  const bill = {
    member,
    amount,
    date: new Date().toLocaleDateString()
  };

  let bills = JSON.parse(localStorage.getItem("bills")) || [];
  bills.push(bill);
  localStorage.setItem("bills", JSON.stringify(bills));

  document.getElementById("bill-form").reset();
  displayBills(); // refresh the list
});

// Show all bills in the list
function displayBills() {
  const bills = JSON.parse(localStorage.getItem("bills")) || [];
  const list = document.getElementById("bill-list");
  list.innerHTML = "";

  if (bills.length === 0) {
    list.innerHTML = "<li>No bills found.</li>";
    return;
  }

  bills.forEach((bill, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${bill.member} - ₹${bill.amount} on ${bill.date}`;
    list.appendChild(li);
  });
}

// Optional clear all
function clearBills() {
  if (confirm("Are you sure you want to delete all bills?")) {
    localStorage.removeItem("bills");
    displayBills();
  }
}

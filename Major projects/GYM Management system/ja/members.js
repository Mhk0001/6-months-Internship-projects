document.addEventListener("DOMContentLoaded", function () {
  displayMembers();
});

document.getElementById("member-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("member-name").value.trim();
  const email = document.getElementById("member-email").value.trim();

  if (!name || !email) {
    alert("Please fill in all fields");
    return;
  }

  const newMember = { name, email };
  let members = JSON.parse(localStorage.getItem("members")) || [];
  members.push(newMember);
  localStorage.setItem("members", JSON.stringify(members));

  document.getElementById("member-form").reset();
  displayMembers();
});

function displayMembers() {
  const members = JSON.parse(localStorage.getItem("members")) || [];
  const list = document.getElementById("member-list");
  list.innerHTML = "";

  if (members.length === 0) {
    list.innerHTML = "<li>No members added yet.</li>";
    return;
  }

  members.forEach((member, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${member.name} - ${member.email}`;
    list.appendChild(li);
  });
}

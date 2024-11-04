let userData = [];
let studentUsers = [];
function renderUsers() {
  let usertabledata = document.getElementById("usertabledata");
  usertabledata.innerHTML = "";

  studentUsers.forEach((user, i) => {
    const newbodyrow = document.createElement("tr");

    newbodyrow.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.profile.firstName} ${user.profile.lastName}</td>
        <td>${user.profile.email}</td>
        <td>${user.profile.phoneNumber}</td>
        <td>${user.username}</td>
        <td>${user.membership.plan || "Not Subscribed"}</td>
        <td>${user.membership.endDate || "-"}</td>
        `;
    usertabledata.appendChild(newbodyrow);
  });
}

let loggedinUser = null;
let usersLists = null;
document.addEventListener("DOMContentLoaded", () => {
  userData = localStorage.getItem("usersLists");
  userData = JSON.parse(userData);
  studentUsers = userData.users.filter((users) => users.role === "student");
  console.log(studentUsers);
  renderUsers();
  loggedinUser = localStorage.getItem("LoggedinUser");

  let parseLoggedinUser = JSON.parse(loggedinUser);

  console.log(loggedinUser);
  if (!loggedinUser) {
    window.location.href = "../../user/html/login.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getLoggedinUser();
  getSelectedMembership();
  setTransaction();
});

let LoggedinUser = null;
function getLoggedinUser() {
  loggedinUser = localStorage.getItem("LoggedinUser");
  loggedinUser = JSON.parse(loggedinUser);
  console.log(loggedinUser);
  let userDetails = document.getElementById("userDetails");
  userDetails.innerHTML = `
   <p><strong>Name:</strong> ${loggedinUser.profile.firstName} ${loggedinUser.profile.lastName}</p>
          <p><strong>Email:</strong> ${loggedinUser.profile.email}</p>
          <p><strong>Phone:</strong> ${loggedinUser.profile.phoneNumber}</p>
          <p><strong>Role:</strong> ${loggedinUser.role}</p>
          <p><strong>Username:</strong> ${loggedinUser.username}</p>
  `;
}

let membershipSelected = null;
function getSelectedMembership() {
  membershipSelected = localStorage.getItem("membershipSelected");
  membershipSelected = JSON.parse(membershipSelected);

  let membershipDetails = document.getElementById("membershipDetails");
  membershipDetails.innerHTML = `
     <p><strong>Membership Type:</strong> ${membershipSelected.name}</p>
          <p><strong>Amount Paid:</strong> ${membershipSelected.price}</p>
          <p class="membership-info">
            <strong>Benefits:</strong> Access to ${membershipSelected.accessibleGenres.join(
              " , "
            )}
          </p>
    `;
}

function setTransaction() {
  let transactionDetails = document.getElementById("transactionDetails");

  transactionDetails.innerHTML = `
    <p><strong>Transaction ID:</strong> ${generateTransactionId()}</p>
          <p><strong>Date of Payment:</strong> ${getCurrentDate()}</p>
          <p><strong>Status:</strong> Successful</p>
    `;
}

function generateTransactionId() {
  // Generate a random 10-digit transaction number
  return Math.floor(1000000000 + Math.random() * 9000000000);
}

function getCurrentDate() {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function printInvoice() {
  window.print();
}

function closePage() {
  window.location.href = "../../user/html/landingPage.html";
}

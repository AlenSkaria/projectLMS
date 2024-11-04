const membershipPlans = {
  memberships: [
    {
      membershipId: "gold",
      name: "Gold",
      price: 159.0,
      duration: "1 month",
      accessibleGenres: ["Fiction"],
    },
    {
      membershipId: "plat",
      name: "Platinum",
      price: 259.0,
      duration: "1 month",
      accessibleGenres: ["Fiction", "Romance", "Mystery"],
    },
    {
      membershipId: "diam",
      name: "Diamond",
      price: 359.0,
      duration: "1 month",
      accessibleGenres: ["All Genres"],
    },
  ],
};

const membership_cards = document.getElementById("membership_cards");

membershipPlans.memberships.forEach((plan) => {
  const mem_card = document.createElement("div");
  mem_card.classList.add("membership_card");

  mem_card.innerHTML = `
       <h4>${plan.name}</h4>
          <p>(${plan.price}/month)</p>
          <p>${plan.duration}</p>
          <p>Access to ${plan.accessibleGenres.join(", ")}</p>
  
  `;
  mem_card.addEventListener("click", () => {
    openPaymentPage(plan);
  });

  membership_cards.appendChild(mem_card);
});

function openPaymentPage(plan) {
  window.location.href = "../../user/html/payment.html";
  localStorage.setItem("membershipSelected", JSON.stringify(plan));
}

// seperated
let userLoggedIn = null;
function getLocalData() {
  userLoggedIn = localStorage.getItem("LoggedinUser");
  userLoggedIn = JSON.parse(userLoggedIn);
  console.log(userLoggedIn);
}
function checkMembershipValid() {
  if (userLoggedIn.membership.isActive) {
    // calculating remainingDays
    const startDate = new Date(userLoggedIn.membership.startDate);
    const endDate = new Date(userLoggedIn.membership.endDate);
    const today = new Date();
    const timeDifference = endDate - today; // in milliseconds
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // convert to days

    console.log(true);
    document.querySelector(".membership_cards").classList.add("hide");
    document.querySelector(".membership_purchased").classList.remove("hide");

    let purchased_membership = document.getElementById("purchased_membership");
    purchased_membership.innerHTML = `Your ${userLoggedIn.membership.plan} membership is active till ${userLoggedIn.membership.endDate}. (${remainingDays} days remaining)`;
  } else {
    document.querySelector(".membership_cards").classList.remove("hide");
    purchased_membership.innerHTML = `Your ${userLoggedIn.membership.plan} membership has expired on ${userLoggedIn.membership.endDate}.`;
  }
}


document.addEventListener("DOMContentLoaded", () => {
  // userLoggedIn = localStorage.getItem("LoggedinUser");
  // userLoggedIn = JSON.parse(userLoggedIn);
  // console.log(userLoggedIn);
  getLocalData();
  if (userLoggedIn) {
    document.querySelector(".membership_not_login").classList.add("hide");
    document.querySelector(".membership_cards").classList.remove("hide");
    checkMembershipValid();
  } else {
    document.querySelector(".membership_cards").classList.add("hide");
    document.querySelector(".membership_not_login").classList.remove("hide");
  }
});

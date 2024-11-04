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

let userLoggedIn = null;
document.addEventListener("DOMContentLoaded", () => {
  userLoggedIn = localStorage.getItem("LoggedinUser");
  userLoggedIn = JSON.parse(userLoggedIn);
  console.log(userLoggedIn);
  if (userLoggedIn) {
    document.querySelector(".membership_not_login").classList.add("hide");
    document.querySelector(".membership_cards").classList.remove("hide");
  } else {
    document.querySelector(".membership_cards").classList.add("hide");
    document.querySelector(".membership_not_login").classList.remove("hide");
  }
});

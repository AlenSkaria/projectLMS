let usersAuthData = {
  users: [
    {
      userId: 1,
      username: "johnDoe",
      password: "123",
      role: "student",
      profile: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "+1234567890",
        preferredCategories: ["Fiction", "Mystery"],
      },
      membership: {
        plan: "Gold",
        isActive: true,
        startDate: "2024-11-01",
        endDate: "2025-11-01",
      },
    },
    {
      userId: 2,
      username: "janeSmith",
      password: "11",
      role: "student",
      profile: {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "+1234567891",
        preferredCategories: ["Romance", "Science Fiction"],
      },
      membership: {
        plan: "Platinum",
        isActive: true,
        startDate: "2024-11-15",
        endDate: "2025-11-15",
      },
    },
    {
      userId: 3,
      username: "admins",
      password: "13",
      role: "admin",
      adminDetails: {
        adminCode: "ADMIN2024",
      },
    },
    {
      userId: 4,
      username: "superAdmin",
      password: "superSecure789",
      role: "admin",
      adminDetails: {
        adminCode: "SUPERADMIN2024",
      },
    },
  ],
};

// NavJs maybe common
let loggedinUser = null;
let usersLists = null;
document.addEventListener("DOMContentLoaded", () => {
  loggedinUser = localStorage.getItem("LoggedinUser");

  let parseLoggedinUser = JSON.parse(loggedinUser);
  console.log(parseLoggedinUser);
  document.getElementById(
    "hiadmin"
  ).innerHTML = `<span class="span">Hello,</span> ${parseLoggedinUser.username}!`;

  console.log(loggedinUser);
  if (!loggedinUser) {
    window.location.href = "../../user/html/login.html";
  }

  // update users list if available in json localstorage
  let usersLists = localStorage.getItem("usersLists");
  usersLists = JSON.parse(usersLists);
  console.log(usersLists);
  if (usersLists) {
    usersAuthData = usersLists;
    console.log(usersAuthData);
  }
});

function goToLogin() {
  window.location.href = "../../user/html/login.html";
}

function logOutAdmin() {
  localStorage.removeItem("LoggedinUser");
  window.location.href = "../../user/html/login.html";
}

// NavJs



document.addEventListener("DOMContentLoaded", () => {
  let studentUsers = usersAuthData.users.filter(
    (users) => users.role === "student"
  );
  let adminUsers = usersAuthData.users.filter((users) => users.role === "admin");
  
  let userCounts = document.getElementById("userCounts");
  userCounts.innerHTML = studentUsers.length;
  let adminCounts = document.getElementById("adminCounts");
  adminCounts.innerHTML = adminUsers.length;
});

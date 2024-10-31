let users = [
  {
    userId: 1,
    username: "alonn",
    password: "password123",
    role: "student",
    membership: {
      isActive: true,
      expiryDate: "2024-12-31",
    },
  },
  {
    userId: 2,
    username: "adminUser",
    password: "adminpassword",
    role: "admin",
    adminCode: "ADMIN2024",
  },
  {
    userId: 3,
    username: "adsss",
    password: "adminpassword",
    role: "admin",
    adminCode: "ADMIN2025",
  },
];

// same page signup and login toggle

let isLoginMode = true;
function toggleLoginSignup() {
  event.preventDefault();
  console.log(isLoginMode);
  const login = document.querySelector(".login");
  const signup = document.querySelector(".signup");
  if (isLoginMode) {
    login.classList.add("hide");
    signup.classList.remove("hide");
  } else {
    login.classList.remove("hide");
    signup.classList.add("hide");
  }
  isLoginMode = !isLoginMode;
}

function loginUser() {}
function createUser() {}

localStorage.setItem("userlist", JSON.stringify(users));
let s = localStorage.getItem("userlist");
let s1 = localStorage.getItem("userlist.");
console.log(JSON.parse(s), s1);


function goBackToHomePage() {
  history.back();
  // or
  // history.go(-1);
}
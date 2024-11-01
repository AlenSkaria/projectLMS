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
      username: "adminUser",
      password: "adminpassword",
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

// back button

function goBackToHomePage() {
  history.back();
}

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

// user login function
function loginUser() {
  event.preventDefault();
  const loginusername = document.getElementById("loginusername").value;
  const loginpassword = document.getElementById("loginpassword").value;

  const userFound = usersAuthData.users.find(
    (user) => user.username === loginusername && user.password === loginpassword
  );
  console.log(userFound);
  if (userFound) {
    localStorage.setItem("LoggedinUser", JSON.stringify(userFound));
    if (userFound.role === "student") {
      window.location.href = "../../user/html/landingPage.html";
    } else if (userFound.role === "admin") {
      window.location.href = "../../admin/html/dashboard.html";
    }
  } else {
    let warn = document.querySelector(".warning");

    warn.style.display = "block";
    warn.innerHTML = "Wrong username or password!";

    setTimeout(() => {
      warn.style.display = "none";
    }, 2000);
  }
}

// user signup function
function createUser() {
  event.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const signinusername = document.getElementById("signinusername").value;
  const signinpassword = document.getElementById("signinpassword").value;

  // creating the new user object
  const newUserObj = {
    userId: Date.now(),
    username: signinusername,
    password: signinpassword,
    role: "student",
    profile: {
      firstName: fname,
      lastName: lname,
      email: email,
      phoneNumber: phone,
      preferredCategories: [],
    },
    membership: {
      plan: "",
      isActive: false,
      startDate: null,
      endDate: null,
    },
  };

  // pushing the created object to users
  localStorage.setItem("LoggedinUser", JSON.stringify(newUserObj));
  usersAuthData.users.push(newUserObj);
  localStorage.setItem("usersLists", JSON.stringify(usersAuthData));
  console.log(usersAuthData);
  window.location.href = "../../user/html/landingPage.html";
}

// retrieving data from backend on load of login page | *if available else will assign our local one itself. anyway we signup a student user the data will be pushed with updated data to the localstorage
document.addEventListener("DOMContentLoaded", () => {
  let dataAvail = localStorage.getItem("usersLists");
  if (dataAvail) {
    usersAuthData = JSON.parse(dataAvail);
  }
  console.log(usersAuthData);
});

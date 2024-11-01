// NavJs

function goToLogin() {
  window.location.href = "login.html";
}

let loggedinUser = null;
document.addEventListener("DOMContentLoaded", () => {
  loggedinUser = localStorage.getItem("LoggedinUser");
  console.log(loggedinUser);
  if (loggedinUser) {
    document.getElementById("btnlogin").classList.add("hide");
    document.getElementById("btnlogout").classList.remove("hide");
  } else {
    document.getElementById("btnlogout").classList.add("hide");
    document.getElementById("btnlogin").classList.remove("hide");
  }
});

// NavJs

let selectedBook = localStorage.getItem("selectedBook");
selectedBook = JSON.parse(selectedBook);
// title book name
document.title = selectedBook
  ? `${selectedBook.title} - Reading`
  : "Reading Interface";

let LoggedinUser = localStorage.getItem("LoggedinUser");
LoggedinUser = JSON.parse(LoggedinUser);
console.log(LoggedinUser);

if (LoggedinUser) {
  //   document.querySelector(
  //     "p"
  //   ).innerHTML = `hi ${LoggedinUser.username} ${selectedBook.title}`;
} else {
  document.querySelector(
    "p"
  ).innerHTML = `you have to login but i will show u ${selectedBook.title}`;
}

const bookImage = document.getElementById("selectedBookImg");
bookImage.src = selectedBook.coverImage;
const bookTitle = document.getElementById("selectedBookTitle");
bookTitle.innerHTML = selectedBook.title;
const bookDescription = document.getElementById("selectedBookDescription");
bookDescription.innerHTML = selectedBook.description;
const bookAuthor = document.getElementById("selectedBookAuthor");
bookAuthor.innerHTML = selectedBook.author;

function logOutUser() {
  localStorage.removeItem("LoggedinUser");
  // force reload
  location.reload();
}

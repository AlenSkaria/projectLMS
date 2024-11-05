var booksData = [];

// NavJs
function goToLogin() {
  window.location.href = "login.html";
}

let loggedinUser = null;
document.addEventListener("DOMContentLoaded", () => {
  displayBooksoftheDay();
  loggedinUser = localStorage.getItem("LoggedinUser");
  console.log(loggedinUser);
  showHide();

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
document.title = selectedBook ? `${selectedBook.title}` : "Reading Interface";

let LoggedinUser = localStorage.getItem("LoggedinUser");
LoggedinUser = JSON.parse(LoggedinUser);
console.log(LoggedinUser);

// show/ hide buttons for buying renting or reading books
function showHide() {
  let selectedBookOptions = document.querySelector(".selectedBookOptions");
  let loggedOutUserMsg = document.querySelector(".loggedOutUserMsg");
  let membershipUserMsg = document.querySelector(".membershipUserMsg");
  if (LoggedinUser) {
    checkMembershipValid();
    console.log(loggedinUser);
    // selectedBookOptions.classList.remove("hide");
    loggedOutUserMsg.classList.add("hide");
  } else {
    selectedBookOptions.classList.add("hide");
    loggedOutUserMsg.classList.remove("hide");
    membershipUserMsg.classList.add("hide");
  }
}

// displaying book details dynamically from localstorage
const bookImage = document.getElementById("selectedBookImg");
bookImage.src = selectedBook.coverImage;
const bookTitle = document.getElementById("selectedBookTitle");
bookTitle.innerHTML = selectedBook.title;
const bookDescription = document.getElementById("selectedBookDescription");
bookDescription.innerHTML = `"${selectedBook.description}"`;
const bookAuthor = document.getElementById("selectedBookAuthor");
bookAuthor.innerHTML = `Author | ${selectedBook.author}`;
const bookCategory = document.getElementById("selectedBookCategory");
bookCategory.innerHTML = selectedBook.category;

function logOutUser() {
  localStorage.removeItem("LoggedinUser");
  // force reload
  location.reload();
}

// common for pages

const books = JSON.parse(localStorage.getItem("Bookslists")) || booksData;

function displayBooksoftheDay() {
  const container = document.querySelector(".cards.container");
  books.slice(5, 11).forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card", "individual_card");

    bookCard.innerHTML = `
     <img src="${book.coverImage}" alt="${book.title}" />
      <div class="book_texts">
        <p class="book_title">${book.title}</p>
        <p class="category">${book.category}</p>
        <p class="available_for">${book.availableFor.join(" | ")}</p>
      </div>
    `;
    bookCard.addEventListener("click", () => {
      openBookDetails(book);
    });

    container.appendChild(bookCard);
  });
}

function openBookDetails(book) {
  window.location.href = "../../user/html/selectedBook.html";
  localStorage.setItem("selectedBook", JSON.stringify(book));
}
function goToRead() {
  window.location.href = "../../user/html/readingInterface.html";
}

// common for pages

// test
let userLoggedIn = null;
function getLocalData() {
  userLoggedIn = localStorage.getItem("LoggedinUser");
  userLoggedIn = JSON.parse(userLoggedIn);
  console.log(userLoggedIn);
}
function checkMembershipValid() {
  getLocalData();
  let selectedBookOptions = document.querySelector(".selectedBookOptions");
  let membershipUserMsg = document.querySelector(".membershipUserMsg");
  if (userLoggedIn.membership.isActive) {
    // calculating remainingDays
    const startDate = new Date(userLoggedIn.membership.startDate);
    const endDate = new Date(userLoggedIn.membership.endDate);
    const today = new Date();
    const timeDifference = endDate - today; // in milliseconds
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // convert to days

    selectedBookOptions.classList.remove("hide");
    let membershipUserMsg = document.querySelector(".membershipUserMsg");
    membershipUserMsg.classList.add("hide");
  } else {
    selectedBookOptions.classList.add("hide");
    membershipUserMsg.classList.remove("hide");
  }
}

// test

function goToPayment() {
  window.location.href = "../../user/html/payment.html";
  localStorage.setItem("BuyBook", JSON.stringify(selectedBook));
}

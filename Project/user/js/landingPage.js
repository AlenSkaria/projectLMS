var booksData = [];

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  const landingContainer = document.querySelector(".landing_container");

  const scrollTriggerPoint = window.innerHeight * 0.1;

  if (window.scrollY > scrollTriggerPoint) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

function goToLogin() {
  window.location.href = "login.html";
}

let loggedinUser = null;
document.addEventListener("DOMContentLoaded", () => {
  booksData = localStorage.getItem("Bookslists");
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

const books = JSON.parse(localStorage.getItem("Bookslists")) || booksData;

function displayBooksoftheDay() {
  const container = document.querySelector(".cards.container");
  books.slice(0, 12).forEach((book) => {
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
displayBooksoftheDay();

///navigate to book details page with book data so we can display it there in reading interface
function openBookDetails(book) {
  window.location.href = "../../user/html/selectedBook.html";
  localStorage.setItem("selectedBook", JSON.stringify(book));
}

function goToMembership() {
  window.location.href = "../../user/html/membership.html";
}

function logOutUser() {
  localStorage.removeItem("LoggedinUser");
  // force reload
  location.reload();
}

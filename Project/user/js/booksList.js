var books = JSON.parse(localStorage.getItem("Bookslists")) || booksData;
function displayBooksoftheDay() {
  const container = document.querySelector(".cards.container");
  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card", "individual_card");

    bookCard.innerHTML = `
       <img src="${book.coverImage}" alt="${book.title}" />
        <div class="book_texts">
          <p class="book_title">${book.title}</p>
          <p class="category">${book.category}</p>
          
        </div>
      `;
    bookCard.addEventListener("click", () => {
      openBookDetails(book);
    });

    container.appendChild(bookCard);
  });
}
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
function openBookDetails(book) {
  window.location.href = "../../user/html/selectedBook.html";
  localStorage.setItem("selectedBook", JSON.stringify(book));
}
let loggedinUser = null;
document.addEventListener("DOMContentLoaded", () => {
  displayBooksoftheDay();
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

function logOutUser() {
  localStorage.removeItem("LoggedinUser");
  // force reload
  location.reload();
}
function goToMembership() {
  window.location.href = "../../user/html/membership.html";
}
function goToLogin() {
  window.location.href = "../../user/html/login.html";
}

// test
function searchBooks() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const container = document.querySelector(".cards.container");
  container.innerHTML = ""; // Clear current book cards

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm)
    );
  });

  if (filteredBooks.length > 0) {
    filteredBooks.forEach((book) => {
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
  } else {
    container.innerHTML = "<p>No books found.</p>"; // Message if no books match
  }
}

// test

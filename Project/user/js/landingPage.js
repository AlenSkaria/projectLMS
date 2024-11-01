const booksData = [
  {
    bookId: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    availableFor: ["buy", "rent"],
    price: 15.0,
    rentPrice: 5.0,
    coverImage:
      "https://images.unsplash.com/photo-1546098072-0bf8532c662c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    description:
      "A portrait of the Jazz Age in all of its decadence and excess, The Great Gatsby is one of the great American novels.",
    pages: [
      "Page 1 content...",
      "Page 2 content...",
      "Page 3 content...",
      "Page 4 content...",
      "Page 5 content...",
    ],
  },
  {
    bookId: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Classic",
    availableFor: ["buy", "rent"],
    price: 12.0,
    rentPrice: 4.0,
    coverImage:
      "https://images.unsplash.com/photo-1553484771-62772929b8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHx8ZW58MHx8fHx8",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
    pages: [
      "Page 1 content...",
      "Page 2 content...",
      "Page 3 content...",
      "Page 4 content...",
      "Page 5 content...",
    ],
  },
  {
    bookId: 3,
    title: "1984",
    author: "George Orwell",
    category: "Dystopian",
    availableFor: ["buy", "rent"],
    price: 14.0,
    rentPrice: 5.0,
    coverImage:
      "https://images.unsplash.com/photo-1511639110077-0b17bb5b276d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    description:
      "A chilling prophecy about the future, 1984 is a dystopian novel set in a totalitarian society ruled by Big Brother.",
    pages: [
      "Page 1 content...",
      "Page 2 content...",
      "Page 3 content...",
      "Page 4 content...",
      "Page 5 content...",
    ],
  },
  {
    bookId: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    availableFor: ["buy", "rent"],
    price: 10.0,
    rentPrice: 3.0,
    coverImage:
      "https://images.unsplash.com/photo-1546724345-3c15044b04f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    description:
      "A romantic novel of manners that depicts the British landed gentry at the end of the 18th century.",
    pages: [
      "Page 1 content...",
      "Page 2 content...",
      "Page 3 content...",
      "Page 4 content...",
      "Page 5 content...",
    ],
  },
  {
    bookId: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    availableFor: ["buy", "rent"],
    price: 11.0,
    rentPrice: 4.0,
    coverImage:
      "https://images.unsplash.com/photo-1584701884674-091d6ee449d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHx8ZW58MHx8fHx8",
    description:
      "A novel about teenage angst and alienation, it explores complex themes of identity, belonging, and loss.",
    pages: [
      "Page 1 content...",
      "Page 2 content...",
      "Page 3 content...",
      "Page 4 content...",
      "Page 5 content...",
    ],
  },
  {
    bookId: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    availableFor: ["buy", "rent"],
    price: 13.0,
    rentPrice: 4.5,
    coverImage:
      "https://images.unsplash.com/photo-1595541137631-441cfcb1a322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHx8ZW58MHx8fHx8",
    description:
      "A fantasy novel about the journey of a hobbit named Bilbo Baggins who embarks on an adventure to help a group of dwarves.",
    pages: [
      "Page 1 content...",
      "Page 2 content...",
      "Page 3 content...",
      "Page 4 content...",
      "Page 5 content...",
    ],
  },
];

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

const books = JSON.parse(localStorage.getItem("booksData")) || booksData;

function displayBooksoftheDay() {
  const container = document.querySelector(".cards.container");
  books.slice(0, 6).forEach((book) => {
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

function logOutUser() {
  localStorage.removeItem("LoggedinUser");
  // force reload
  location.reload();
}

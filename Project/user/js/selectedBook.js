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
      "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1726711340790-ccaa3ae7e0c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1729974354513-758c8a5d196d?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A romantic novel of manners that depicts the British landed gentry at the end of the 18th century.",
    pages: [
      "Ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam assumenda iste eaque mollitia! Provident suscipit animi quaerat, voluptatum iusto enim eveniet odio excepturi dolores rem nostrum quos expedita voluptas. Provident corrupti illum, nam minus consequatur eveniet ipsa repellendus consectetur dignissimos vero aspernatur ullam ipsam aliquam rem culpa, sint accusantium unde veritatis doloremque. Molestiae voluptatibus quisquam molestias. Rem, perferendis obcaecati. Consequuntur natus iste illo maiores autem enim neque fugit quasi, repudiandae laborum sequi quos corrupti ex eligendi nihil odio quibusdam voluptatem deserunt rem sunt alias. Dignissimos debitis dolore qui ab! Neque ipsam autem reiciendis aliquam placeat velit mollitia voluptates? Totam, accusantium nulla ab dolorem voluptates facilis dolores ratione atque incidunt, possimus, eveniet aliquid harum eius. Quas debitis quasi aliquam perferendis? Officiis nesciunt nulla illum doloribus quae architecto corporis necessitatibus, deserunt ut, modi officia dolorum eveniet veniam eos aliquid facere exercitationem, eligendi impedit tempora saepe. Reprehenderit beatae ab placeat qui eum? Repellat aliquid placeat vel dolorum repellendus sed iste omnis iure maiores, natus adipisci aperiam cupiditate esse. Nostrum culpa, neque dolor quibusdam esse molestias qui, rem voluptas illum modi hic magnam. Illum deserunt architecto temporibus odio est, quasi sunt culpa nam accusamus sit animi sint perspiciatis vitae corporis quia quod doloribus quam similique ipsa quas, minima inventore. Totam excepturi sequi soluta? Dolorum neque accusamus, repudiandae veniam provident suscipit perspiciatis minima repellendus harum iusto expedita eos itaque voluptas commodi quisquam esse eaque obcaecati, odio ipsum, sunt mollitia quasi. Repellat quibusdam sed atque!Perspiciatis aperiam sapiente cumque laborum a necessitatibus incidunt et obcaecati sequi, tempore rem deleniti quibusdam nisi eligendi, architecto animi ipsum explicabo corporis. Autem perspiciatis iste rem, accusamus molestiae sequi mollitia.Magni facilis deleniti a rerum fugiat adipisci dolores distinctio illum commodi velit? Eaque illum exercitationem fuga, ipsam asperiores assumenda cumque iusto esse ratione ut qui numquam, debitis libero nihil maxime.",
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
      "https://images.unsplash.com/photo-1679940852180-09a0a4e775c0?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1636307777503-31a94556968c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
document.title = selectedBook ? `${selectedBook.title}` : "Reading Interface";

let LoggedinUser = localStorage.getItem("LoggedinUser");
LoggedinUser = JSON.parse(LoggedinUser);
console.log(LoggedinUser);


// show/ hide buttons for buying renting or reading books
let selectedBookOptions = document.querySelector(".selectedBookOptions");
let loggedOutUserMsg = document.querySelector(".loggedOutUserMsg");
if (LoggedinUser) {
  selectedBookOptions.classList.remove("hide");
  loggedOutUserMsg.classList.add("hide");
} else {
  selectedBookOptions.classList.add("hide");
  loggedOutUserMsg.classList.remove("hide");
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

function openBookDetails(book) {
  window.location.href = "../../user/html/selectedBook.html";
  localStorage.setItem("selectedBook", JSON.stringify(book));
}
function goToRead() {
  window.location.href = "../../user/html/readingInterface.html";
}

// common for pages

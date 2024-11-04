let booksData = [];

function renderBooks() {
  let booktabledata = document.getElementById("booktabledata");
  booktabledata.innerHTML = "";

  booksData.forEach((book, i) => {
    const newbodyrow = document.createElement("tr");

    newbodyrow.innerHTML = `
            <td>${book.bookId}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.price}</td>
            <td class='table_action'>
            <button class='small' onclick="editBook(${i})">✂</button>
            <button class='small' onclick="deleteBook(${i})">🗑️</button>
            </td> 
    `;
    booktabledata.appendChild(newbodyrow);
  });
}

let isToggle = false;
function toggle() {
  const tog = document.querySelector(".book_form");
  if (isToggle) {
    tog.style.display = "none";
    document.querySelector(".add_book_button").innerHTML = "Add Books";
  } else {
    tog.style.display = "block";
    document.querySelector(".add_book_button").innerHTML = "Close";
  }
  isToggle = !isToggle;
}

// addbook function
function addBookData() {
  event.preventDefault();
  const id = document.getElementById("bookid").value;
  const title = document.getElementById("title").value;
  const authorname = document.getElementById("authorname").value;
  const category = document.getElementById("category").value;
  let availableFor = [];
  const checkboxes = document.querySelectorAll("input[name='availableFor']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      // Update the availableFor array with selected values
      availableFor = Array.from(checkboxes)
        .filter((box) => box.checked)
        .map((box) => box.value);
    });
  });
  const bookPrice = document.getElementById("bookPrice").value;
  const rentPrice = document.getElementById("rentPrice").value;

  let data = {
    bookId: id,
    title: title,
    author: authorname,
    category: category,
    availableFor: availableFor,
    price: bookPrice,
    rentPrice: rentPrice,
    coverImage: "../../assets/book/15.jpg",
    description:
      "A tale of intense, destructive love between Heathcliff and Catherine Earnshaw, set on the Yorkshire moors.",
    pages: [
      "Decisions of my life. I earned a spot on the baseball team and, although I was at the bottom of the roster as a freshman, I was thrilled. Despite the chaos of my high school years, I had managed to become a college athlete.I wasn’t going to be starting on the baseball team anytime soon, so I focused on getting my life in order. While my peers stayed up late and played video games, I built good sleep habits and went to bed early each night. In the messy world of a college dorm, I made a point to keep my room neat and tidy. These improvements were minor, but they gave me a sense of control over my life. I started to feel confident again. And this growing belief in myself rippled into the classroom as I improved my study habits and managed to earn straight A’s during my first year.A habit is a routine or behavior that is performed regularly—and, in many cases, automatically. As each semester passed, I accumulated small but consistent habits that ultimately led to results that were unimaginable to me when I started. For example, for the first time in my life, I made it a habit to lift weights multiple times per week, and in the years that followed, my six-footfour-inch frame bulked up from a featherweight 170 to a lean 200 pounds.When my sophomore season arrived, I earned a starting role on the pitching staff. By my junior year, I was voted team captain and at the end of the season, I was selected for the all-conference team. But it was not until my senior season that my sleep habits, study habits, and strength-training habits really began to pay off.Six years after I had been hit in the face with a baseball bat, flown to the hospital, and placed into a coma, I was selected as the top male athlete at Denison University and named to the ESPN Academic All-America Team—an honor given to just thirty-three players across the country. By the time I graduated, I was listed in the school record books in eight different categories. That same year, I was awarded the university’s highest academic honor, the President’s Medal.",
      "Months were hard. It felt like everything in my life was on pause. I earned a spot on the baseball team and, although I was at the bottom of the roster as a freshman, I was thrilled. Despite the chaos of my high school years, I had managed to become a college athlete.I wasn’t going to be starting on the baseball team anytime soon, so I focused on getting my life in order. While my peers stayed up late and played video games, I built good sleep habits and went to bed early each night. In the messy world of a college dorm, I made a point to keep my room neat and tidy. These improvements were minor, but they gave me a sense of control over my life. I started to feel confident again. And this growing belief in myself rippled into the classroom as I improved my study habits and managed to earn straight A’s during my first year.A habit is a routine or behavior that is performed regularly—and, in many cases, automatically. As each semester passed, I accumulated small but consistent habits that ultimately led to results that were unimaginable to me when I started. For example, for the first time in my life, I made it a habit to lift weights multiple times per week, and in the years that followed, my six-footfour-inch frame bulked up from a featherweight 170 to a lean 200 pounds.When my sophomore season arrived, I earned a starting role on the pitching staff. By my junior year, I was voted team captain and at the end of the season, I was selected for the all-conference team. But it was not until my senior season that my sleep habits, study habits, and strength-training habits really began to pay off.Six years after I had been hit in the face with a baseball bat, flown to the hospital, and placed into a coma, I was selected as the top male athlete at Denison University and named to the ESPN Academic All-America Team—an honor given to just thirty-three players across the country. By the time I graduated, I was listed in the school record books in eight different categories. That same year, I was awarded the university’s highest academic honor, the President’s Medal.",
      "I became painfully aware of how far I had to go when I returned to the baseball field one year later. I earned a spot on the baseball team and, although I was at the bottom of the roster as a freshman, I was thrilled. Despite the chaos of my high school years, I had managed to become a college athlete.I wasn’t going to be starting on the baseball team anytime soon, so I focused on getting my life in order. While my peers stayed up late and played video games, I built good sleep habits and went to bed early each night. In the messy world of a college dorm, I made a point to keep my room neat and tidy. These improvements were minor, but they gave me a sense of control over my life. I started to feel confident again. And this growing belief in myself rippled into the classroom as I improved my study habits and managed to earn straight A’s during my first year.A habit is a routine or behavior that is performed regularly—and, in many cases, automatically. As each semester passed, I accumulated small but consistent habits that ultimately led to results that were unimaginable to me when I started. For example, for the first time in my life, I made it a habit to lift weights multiple times per week, and in the years that followed, my six-footfour-inch frame bulked up from a featherweight 170 to a lean 200 pounds.When my sophomore season arrived, I earned a starting role on the pitching staff. By my junior year, I was voted team captain and at the end of the season, I was selected for the all-conference team. But it was not until my senior season that my sleep habits, study habits, and strength-training habits really began to pay off.Six years after I had been hit in the face with a baseball bat, flown to the hospital, and placed into a coma, I was selected as the top male athlete at Denison University and named to the ESPN Academic All-America Team—an honor given to just thirty-three players across the country. By the time I graduated, I was listed in the school record books in eight different categories. That same year, I was awarded the university’s highest academic honor, the President’s Medal.",
      "But my return to baseball was not smooth. When the season rolled around, I was the only junior to be cut from the varsity baseball team. I earned a spot on the baseball team and, although I was at the bottom of the roster as a freshman, I was thrilled. Despite the chaos of my high school years, I had managed to become a college athlete.I wasn’t going to be starting on the baseball team anytime soon, so I focused on getting my life in order. While my peers stayed up late and played video games, I built good sleep habits and went to bed early each night. In the messy world of a college dorm, I made a point to keep my room neat and tidy. These improvements were minor, but they gave me a sense of control over my life. I started to feel confident again. And this growing belief in myself rippled into the classroom as I improved my study habits and managed to earn straight A’s during my first year.A habit is a routine or behavior that is performed regularly—and, in many cases, automatically. As each semester passed, I accumulated small but consistent habits that ultimately led to results that were unimaginable to me when I started. For example, for the first time in my life, I made it a habit to lift weights multiple times per week, and in the years that followed, my six-footfour-inch frame bulked up from a featherweight 170 to a lean 200 pounds.When my sophomore season arrived, I earned a starting role on the pitching staff. By my junior year, I was voted team captain and at the end of the season, I was selected for the all-conference team. But it was not until my senior season that my sleep habits, study habits, and strength-training habits really began to pay off.Six years after I had been hit in the face with a baseball bat, flown to the hospital, and placed into a coma, I was selected as the top male athlete at Denison University and named to the ESPN Academic All-America Team—an honor given to just thirty-three players across the country. By the time I graduated, I was listed in the school record books in eight different categories. That same year, I was awarded the university’s highest academic honor, the President’s Medal.",
      "Despite my lackluster high school career, I still believed I could become a great player.. I earned a spot on the baseball team and, although I was at the bottom of the roster as a freshman, I was thrilled. Despite the chaos of my high school years, I had managed to become a college athlete.I wasn’t going to be starting on the baseball team anytime soon, so I focused on getting my life in order. While my peers stayed up late and played video games, I built good sleep habits and went to bed early each night. In the messy world of a college dorm, I made a point to keep my room neat and tidy. These improvements were minor, but they gave me a sense of control over my life. I started to feel confident again. And this growing belief in myself rippled into the classroom as I improved my study habits and managed to earn straight A’s during my first year.A habit is a routine or behavior that is performed regularly—and, in many cases, automatically. As each semester passed, I accumulated small but consistent habits that ultimately led to results that were unimaginable to me when I started. For example, for the first time in my life, I made it a habit to lift weights multiple times per week, and in the years that followed, my six-footfour-inch frame bulked up from a featherweight 170 to a lean 200 pounds.When my sophomore season arrived, I earned a starting role on the pitching staff. By my junior year, I was voted team captain and at the end of the season, I was selected for the all-conference team. But it was not until my senior season that my sleep habits, study habits, and strength-training habits really began to pay off.Six years after I had been hit in the face with a baseball bat, flown to the hospital, and placed into a coma, I was selected as the top male athlete at Denison University and named to the ESPN Academic All-America Team—an honor given to just thirty-three players across the country. By the time I graduated, I was listed in the school record books in eight different categories. That same year, I was awarded the university’s highest academic honor, the President’s Medal.",
    ],
  };

  console.log(data);
  booksData.push(data);
  console.log(booksData);
  localStorage.setItem("Bookslists", JSON.stringify(booksData));

  renderBooks();
  isToggle = false;
  document.querySelector("form").reset();
  document.querySelector(".book_form").style.display = "none";
  document.querySelector(".add_book_button").innerHTML = "Add Books";
}
// addbook function

//edit book function
function editBook(index) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const book = booksData[index];
  document.getElementById("bookid").value = book.bookId;
  document.getElementById("title").value = book.title;
  document.getElementById("authorname").value = book.author;
  document.getElementById("category").value = book.category;
  const checkboxes = document.querySelectorAll("input[name='availableFor']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = book.availableFor.includes(checkbox.value);
  });
  document.getElementById("bookPrice").value = book.price;
  document.getElementById("rentPrice").value = book.rentPrice;
  toggle();
  document.querySelector(".bookonlyform").onsubmit = function (event) {
    event.preventDefault();
    updateBookData(index);
  };
}

// updating values
function updateBookData(index) {
  const id = document.getElementById("bookid").value;
  const title = document.getElementById("title").value;
  const authorname = document.getElementById("authorname").value;
  const category = document.getElementById("category").value;

  let availableFor = [];
  const checkboxes = document.querySelectorAll("input[name='availableFor']");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      availableFor.push(checkbox.value);
    }
  });

  const bookPrice = document.getElementById("bookPrice").value;
  const rentPrice = document.getElementById("rentPrice").value;

  const currentBook = booksData[index];

  // Update the book data, using current values if the new input is empty
  booksData[index] = {
    bookId: id !== "" ? id : currentBook.bookId,
    title: title !== "" ? title : currentBook.title,
    author: authorname !== "" ? authorname : currentBook.author,
    category: category !== "" ? category : currentBook.category,
    availableFor:
      availableFor.length > 0 ? availableFor : currentBook.availableFor,
    price: bookPrice !== "" ? bookPrice : currentBook.price,
    rentPrice: rentPrice !== "" ? rentPrice : currentBook.rentPrice,
    coverImage: currentBook.coverImage,
    description: currentBook.description,
    pages: currentBook.pages,
  };

  console.log(booksData);
  localStorage.setItem("Bookslists", JSON.stringify(booksData));

  renderBooks();
  toggle();
}

// updating values

//edit book function

// delete book
function deleteBook(index) {
  booksData.splice(index, 1);
  renderBooks();
  console.log(booksData);
  localStorage.setItem("Bookslists", JSON.stringify(booksData));
}
// delete book

function logOutAdmin() {
  localStorage.removeItem("LoggedinUser");
  window.location.href = "../../user/html/login.html";
}

let loggedinUser = null;
let usersLists = null;
document.addEventListener("DOMContentLoaded", () => {
  booksData = localStorage.getItem("Bookslists");
  booksData = JSON.parse(booksData);
  renderBooks();
  loggedinUser = localStorage.getItem("LoggedinUser");

  let parseLoggedinUser = JSON.parse(loggedinUser);

  console.log(loggedinUser);
  if (!loggedinUser) {
    window.location.href = "../../user/html/login.html";
  }
});

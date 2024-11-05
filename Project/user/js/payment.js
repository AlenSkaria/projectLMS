function showPaymentDetails() {
  const paymentType = document.getElementById("paymentType").value;
  const cardDetails = document.getElementById("cardDetails");
  const upiDetails = document.getElementById("upiDetails");

  // Hide both sections initially
  cardDetails.style.display = "none";
  upiDetails.style.display = "none";

  // Show the appropriate section based on the selected payment type
  if (paymentType === "card") {
    cardDetails.style.display = "block";
  } else if (paymentType === "upi") {
    upiDetails.style.display = "block";
  }
}

// fill data of membership when page loads and data available on local storage

let membershipSelected = null;
function updateMemPaypage() {
  membershipSelected = localStorage.getItem("membershipSelected");
  membershipSelected = JSON.parse(membershipSelected);
  console.log(membershipSelected);
  const membershipType = document.getElementById("membershipType");
  const membershipAmount = document.getElementById("membershipAmount");
  if (membershipSelected) {
    membershipType.innerHTML = `Membership: ${membershipSelected.name}`;
    membershipAmount.innerHTML = `Amount: ${membershipSelected.price}`;
  }
}

function validateCardDetails() {
  const cardNumber = document.getElementById("cardNumber").value;
  const expiryDate = document.getElementById("expiryDate").value;
  const cvv = document.getElementById("cvv").value;
  const cardNumberRegex = /^\d{16}$/; // 16 digits for card number
  const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
  const cvvRegex = /^\d{3}$/; // 3 digits for CVV

  if (!cardNumberRegex.test(cardNumber)) {
    return "Invalid card number. Must be 16 digits.";
  }
  if (!expiryDateRegex.test(expiryDate)) {
    return "Invalid expiry date. Use MM/YY format.";
  }
  if (!cvvRegex.test(cvv)) {
    return "Invalid CVV. Must be 3 digits.";
  }
  return "";
}

function validateUpiDetails() {
  const upiId = document.getElementById("upiId").value;
  const upiIdRegex = /^[\w.-]+@[\w]+$/; // Basic UPI ID format (e.g., username@bank)

  if (!upiIdRegex.test(upiId)) {
    return "Invalid UPI ID format.";
  }
  return "";
}

function submitPayment() {
  const paymentType = document.getElementById("paymentType").value;
  let errorMessage = "";

  if (paymentType === "card") {
    errorMessage = validateCardDetails();
  } else if (paymentType === "upi") {
    errorMessage = validateUpiDetails();
  } else {
    errorMessage = "Please select a payment method.";
  }

  const messageElement = document.getElementById("message");
  if (errorMessage) {
    messageElement.textContent = errorMessage;
  } else {
    messageElement.textContent = "";

    console.log("success");
    window.location.href = "../../user/html/invoicePage.html";
  }
}

let BuyBook = null;
function getPayData() {
  BuyBook = localStorage.getItem("BuyBook");
  BuyBook = JSON.parse(BuyBook);
  console.log(BuyBook);
  const BookType = document.getElementById("BookType");
  const BookAmount = document.getElementById("BookAmount");
  console.log(buyBook);
  BookType.innerHTML = `Book: ${buyBook.title}`;
  BookAmount.innerHTML = `Amount: ${buyBook.price}`;
}
// test
function closePage() {
  history.back();
}
document.addEventListener("DOMContentLoaded", () => {
  updateMemPaypage();
  buyBook = localStorage.getItem("BuyBook");
  buyBook = JSON.parse(buyBook);
  if (buyBook) {
    getPayData();
    document.querySelector(".membershipBooksDet").classList.add("hide");
    document.querySelector(".buyBook").classList.remove("hide");
  } else {
    document.querySelector(".membershipBooksDet").classList.remove("hide");
    document.querySelector(".buyBook").classList.add("hide");
  }
});

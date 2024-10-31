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
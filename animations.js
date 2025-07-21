window.addEventListener("DOMContentLoaded", () => {
  // არსებული js-fade-in ანიმაცია
  document.querySelectorAll(".js-fade-in").forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 200 + i * 120);
  });
  // ლოგოს ანიმაცია
  const logo = document.querySelector(".js-logo-in");
  if (logo) {
    setTimeout(() => {
      logo.classList.add("visible");
    }, 100);
  }
});

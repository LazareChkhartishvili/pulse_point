// მთავარი entrance ანიმაციები გვერდის ჩატვირთვისას
window.addEventListener("DOMContentLoaded", () => {
  // Fade-in: მთავარი სათაურები
  document.querySelectorAll(".js-animate-fade").forEach((el) => {
    el.classList.add("fade-in");
  });
  // Slide-up: სექციების კონტენტი
  document.querySelectorAll(".js-animate-slide").forEach((el) => {
    el.classList.add("slide-up");
  });
  // Scale-in: სურათები ან ლოგოები
  document.querySelectorAll(".js-animate-scale").forEach((el) => {
    el.classList.add("scale-in");
  });
});

// Why choose us სურათები
const whyImgs = document.querySelectorAll(".why-choose-us-content > div img");
whyImgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "rotate(-8deg) scale(1.10)";
    img.style.transition = "transform 0.4s cubic-bezier(.4,0,.2,1)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "";
  });
});

// ღილაკები
const buttons = document.querySelectorAll(".cta-btn, .game-btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.08) rotate(-2deg)";
    btn.style.transition = "transform 0.22s cubic-bezier(.4,0,.2,1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.96)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1.08) rotate(-2deg)";
  });
});

// ლოგო (header)
const logo = document.querySelector(".logo");
if (logo) {
  logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.08) rotate(-4deg)";
    logo.style.transition = "transform 0.32s cubic-bezier(.4,0,.2,1)";
  });
  logo.addEventListener("mouseleave", () => {
    logo.style.transform = "";
  });
}

// პარტნიორების ლოგოები
const partnerImgs = document.querySelectorAll(".partner-items img");
partnerImgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.10) rotate(6deg)";
    img.style.transition = "transform 0.32s cubic-bezier(.4,0,.2,1)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "";
  });
});

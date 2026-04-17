const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

reveals.forEach((element) => observer.observe(element));

const scrollButton = document.querySelector(".scroll-top");

if (scrollButton) {
  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("mousemove", (event) => {
  const x = `${(event.clientX / window.innerWidth) * 100}%`;
  const y = `${(event.clientY / window.innerHeight) * 100}%`;

  document.body.style.setProperty("--mouse-x", x);
  document.body.style.setProperty("--mouse-y", y);
});

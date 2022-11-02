let panels = document.querySelectorAll(".panel");
let sections = document.querySelectorAll("section");

panels.forEach((panel) => {
  addEventListener("click", expand);
});

function expand(e) {
  removeClasses();
  e.target.classList.add("active");
}

function removeClasses() {
  sections.forEach((section) => section.classList.remove("active"));
}

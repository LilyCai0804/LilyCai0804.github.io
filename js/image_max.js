(function imageMax() {
  const projects = document.querySelectorAll(".js-project");

  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      project.classList.toggle("big-image");
    });
  });
})();

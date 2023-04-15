async function app() {
  function getProjectData() {
    return fetch("js/projects.json").then(response => response.json());
  }

  function setUpProjects(projectJson) {
    const projects = document.querySelectorAll(".js-project");
    const infoArea = document.querySelector(".js-info-area");

    projects.forEach((project) => {
      project.addEventListener("mouseenter", (e) => {
        const projectName = e.target.dataset.project;
        const projectData = projectJson[projectName];

        if (projectData) {
          infoArea.innerHTML = `${projectData.title}<br>${projectData.info}<br>${projectData.date}`;
          infoArea.classList.remove("hidden");
        }
        else {
          console.warn("No project data found :-(")
        }
      });

      project.addEventListener("mouseleave", (e) => {
        infoArea.innerHTML = "";
      });
    });
  }

  (function run() {
    getProjectData()
    .then((projectJson) => setUpProjects(projectJson));
  })();
}

app();

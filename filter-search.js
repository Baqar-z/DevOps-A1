const filterInput = document.getElementById("filter-input");
const semProj = document.getElementById("semester-projects");
const finalProj = document.getElementById("final-projects");

// Filter projects based on technology
function filterProj() {
  const filterVal = filterInput.value.toLowerCase();

  // Filter semester projects
  Array.from(semProj.children).forEach(function(project) {
    const technology = project.getAttribute("data-tech");
    if (technology.toLowerCase().indexOf(filterVal) > -1) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });

  // Filter final year projects
  Array.from(finalProj.children).forEach(function(project) {
    const technology = project.getAttribute("data-tech");
    if (technology.toLowerCase().indexOf(filterVal) > -1) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
}

// Listen for input events on the filter input
filterInput.addEventListener("input", filterProj);
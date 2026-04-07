
const container = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchInput");

let projects = []; 
fetch('https://divya-219.github.io/ui-components-website/data/projects.json')
  .then(response => response.json())
  .then(jsonData => {
    projects = jsonData;
console.table(projects); 
renderProjects(projects);
  })
  .catch(error => {
    console.error("Error fetching projects:", error);
    projectContainer.innerHTML = "<p>Failed to load projects.</p>";
  });

function renderProjects(projectList) {

  container.innerHTML = ""; 
if (projectList.length === 0) {
    container.innerHTML = "<p>No projects found</p>";
    return;
  }
  
  projectList.forEach(project => {
  const card = document.createElement("div");
    card.classList.add("project-card");
  card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        <span class="badge">${project.category}</span>
      </div>

      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <button>View Project</button>
      </div>
    `;
    container.appendChild(card);
  });
}
renderProjects(projects);


searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = projects.filter(project => 
    project.title.toLowerCase().includes(query) ||
    project.description.toLowerCase().includes(query) ||
    project.category.toLowerCase().includes(query)
  );
console.log("Search query:", query);
console.log("Filtered projects:", filtered);
  renderProjects(filtered);
   console.log(filtered);
});
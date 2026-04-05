const projects = [
  {
    title: "Project 1",
    description: "Modern responsive website design.",
    category: "Web Design",
    image: "images/webdesign1.jpg"
  },
  {
    title: "Project 2",
    description: "User-friendly mobile application.",
    category: "App Design",
    image: "images/App design.jpg"
  },
  {
    title: "Project 3",
    description: "Backend logic and database.",
    category: "Backend",
    image: "images/Backend Developer.jpg"
  },
  {
    title: "Project 4",
    description: "Testing and QA.",
    category: "Testing",
    image: "images/Testing1.jpg"
  }
];
const container = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchInput");


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
});
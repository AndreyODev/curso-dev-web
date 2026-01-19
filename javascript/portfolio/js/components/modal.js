const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

const projects = document.querySelectorAll(".projects__card");
const modalProjects = document.getElementById("modalProjects");

openModal.addEventListener("click", () => {
	modal.classList.add("active");
	modalProjects.innerHTML = "";

	projects.forEach((project) => {
		modalProjects.appendChild(project.cloneNode(true));
	});
});

closeModal.addEventListener("click", () => {
	modal.classList.remove("active");
});

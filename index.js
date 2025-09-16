import { renderProjects, fetchJSON } from "./global.js";

const projects = await fetchJSON('./lib/projects.json');
const containerElement = document.querySelector('.projects');

renderProjects(projects, containerElement);
console.log("Page is live");

export async function fetchJSON(url) {
    try {
      // Fetch the JSON file from the given URL
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching or parsing JSON data:', error);
    }
}

export function renderProjects(project, containerElement, headingLevel = 'h3') {
    containerElement.innerHTML = '';
    for (let i=0; i<project.length; i++) {
      const article = document.createElement('article');
      article.innerHTML = `
      <${headingLevel}>${project[i].title}</${headingLevel}>
      <a href="${project[i].url}" target="_blank""><img src="${project[i].image}"
       alt="${project[i].title} Cover"></a>
      <p>${project[i].description}</p>
      <div class="year"><p>C. ${project[i].year}</p></div>
      `;
      containerElement.appendChild(article);
    }
}
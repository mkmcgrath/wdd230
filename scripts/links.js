const baseURL = "https://mkmcgrath.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

function displayLinks(lessons) { #displaylinks functoin 
  const linksContainer = document.querySelector("#links");

  lessons.forEach((lesson) => {
    const lessonDiv = document.createElement("div");
    const lessonTitle = document.createElement("h3");
    lessonTitle.textContent = `Lesson ${lesson.lesson}`;
    lessonDiv.appendChild(lessonTitle);

    const ul = document.createElement("ul");
    lesson.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `${baseURL}${link.url}`;
      a.textContent = link.title;
      li.appendChild(a);
      ul.appendChild(li);
    });

    lessonDiv.appendChild(ul);
    linksContainer.appendChild(lessonDiv);
  });
}

getLinks();


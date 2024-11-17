const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

async function fetchMembers() {
  try {
    const response = await fetch('./data/members.json');
    const members = await response.json();
    renderGrid(members);
  } catch (error) {
    console.error('Error fetching members:', error);
  }
}

function renderGrid(members) {
  display.innerHTML = members
    .map(
      (member) => `
    <section>
      <img src="./images/${member.image}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    </section>`
    )
    .join('');
}

function renderList(members) {
  display.innerHTML = members
    .map(
      (member) => `
    <section>
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    </section>`
    )
    .join('');
}

gridButton.addEventListener("click", () => fetchMembers().then(renderGrid));
listButton.addEventListener("click", () => fetchMembers().then(renderList));

// Initial render as grid
fetchMembers();

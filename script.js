// load JSON
let haniwaList = [];

// fetch JSON
fetch('./data./haniwa.json')
  .then(response => response.json())
  .then(data => {
    haniwaList = data;
    displayHaniwa(haniwaList);
  })
  .catch(error => console.error(error));

// function to display haniwa list
function displayHaniwa(list) {
  const container = document.getElementById('haniwa-container');
  container.innerHTML = '';

  if (list.length === 0) {
    container.textContent = 'No results found.';
    return;
  }

  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
      <div class="img-wrapper">
        <img src="${item.Image}" alt="${item.Name || 'Haniwa'}" class="haniwa-img" onclick="toggleInfo(this)">
        <div class="info-content">
          <strong>${item.Name || '—'}</strong><br>
          ${item.Kanji || ''}<br>
          <small>${item.Type || ''}</small><br>
          <small>${item.Period || ''}</small><br>
          <small>${item.Tomb_name || ''}</small><br>
          <small>${item.Attribute_1 || ''}</small>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}

// toggle info inside the card
function toggleInfo(img) {
  const card = img.closest('.card');
  card.classList.toggle('expanded');
}

// search functionality
const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');

function runSearch() {
  const query = searchBox.value.toLowerCase();

  const filtered = haniwaList.filter(item => {
    return (
      (item.Type && item.Type.toLowerCase().includes(query)) ||
      (item.Period && item.Period.toLowerCase().includes(query)) ||
      (item.Name && item.Name.toLowerCase().includes(query)) ||
      (item.Kanji && item.Kanji.toLowerCase().includes(query)) ||
      (item.Tomb_name && item.Tomb_name.toLowerCase().includes(query)) ||
      (item.Attribute_1 && item.Attribute_1.toLowerCase().includes(query))
    );
  });

  displayHaniwa(filtered);
}

searchButton.addEventListener('click', runSearch);
searchBox.addEventListener('input', runSearch);

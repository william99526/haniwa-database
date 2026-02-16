console.log("✅ script.js is connected");

const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');

function runSearch() {
  const query = searchBox.value.toLowerCase();

  const filtered = haniwaList.filter(item =>
    item.type.toLowerCase().includes(query) ||
    item.period.toLowerCase().includes(query) ||
    item.prefecture.toLowerCase().includes(query)
  );

  console.log("Search results:", filtered);
  displayHaniwa(filtered);
}

// live typing
searchBox.addEventListener('input', runSearch);

// button click
searchButton.addEventListener('click', runSearch);
// Fetch racers from the API and populate racer cards
function fetchRacersAndPopulateCards() {
  const searchInput = document.getElementById('searchInput');
  const racersContainer = document.getElementById('racersContainer');
  
  // Clear racersContainer
  racersContainer.innerHTML = '';

  // Fetch racers from the API
  fetch('http://localhost:3000/racer')
    .then(response => response.json())
    .then(data => {
      const racers = data;
      const searchTerm = searchInput.value.toLowerCase();
      
      // Filter racers based on search term
      const filteredRacers = racers.filter(racer =>
        racer.name.toLowerCase().includes(searchTerm)
      );

      // Generate racer cards
      filteredRacers.forEach(racer => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${racer.image}" alt="${racer.name}">
          <h2>${racer.name}</h2>
          <p><strong>Team:</strong> ${racer.team}</p>
          <p><strong>Country:</strong> ${racer.country}</p>
          <p><strong>Points:</strong> ${racer.points}</p>
          <p>${racer.information}</p>
          <p>${racer.career}</p>
        `;
        racersContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Event listener for search button click
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', fetchRacersAndPopulateCards);

// Event listener for search input enter key press
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    fetchRacersAndPopulateCards();
  }
});

// Event listener and callback for hovering over the search button
document.getElementById('search-button').addEventListener('mouseover', event => {
  event.target.style.backgroundColor = 'whitesmoke';
  event.target.style.border = '#e04b52 solid 1px';
  event.target.style.color = '#e04b52';
});

// Event listener and callback for moving the mouse out of the search button
document.getElementById('search-button').addEventListener('mouseout', event => {
  event.target.style.backgroundColor = '#e04b52';
  event.target.style.border = 'none';
  event.target.style.color = 'white';
});

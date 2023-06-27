// Fetch racers from the API and populate racer cards
function fetchRacersAndPopulateCards() {
  const searchInput = document.getElementById('searchInput');
  const racersContainer = document.getElementById('racersContainer');
  racersContainer.innerHTML = '';
  
  fetch('http://localhost:3000/racer') // fetching my arrays in my local file or host 
    .then(response => response.json()) // returning a promise
    .then(data => {
      const racers = data;
      const searchTerm = searchInput.value.toLowerCase();
      const filteredRacers = filterRacers(racers, searchTerm);

      if (filteredRacers.length === 0) {
        displayRacerNotFound();
      } else {
        generateRacerCards(filteredRacers, racersContainer);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Search racer on lowercase or uppercase by their name 
function filterRacers(racers, searchTerm) { // create a function that fillters the racers that takes two arguments( racer, searchTern)
  return racers.filter(racer =>  // we want to return and filter the racers name
    racer.name.toLowerCase().includes(searchTerm) // which in this case we are taking the racer name and put it as a lowercase sensity 
  );
}
// I have created a different function to generate or create card for the racer with all of their info. 
function generateRacerCards(racers, racersContainer) { 
  racers.forEach(racer => { // here saying thay for each one of the racers I want to return this 
    const card = document.createElement('div');// using the div from my HTML code 
    card.classList.add('card'); // create a card with a style of list and this is going to take plase in my racercontainer 
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
}

// Function to display "Racer not found" message
function displayRacerNotFound() {
  const racersContainer = document.getElementById('racersContainer');
  racersContainer.innerHTML = `
    <div class="message">
      <p>Sorry, racer not found but here's the URL if you would like to know more about other racers:</p>
      <p><a href="https://www.formula1.com/en/results.html/2023/drivers.html">https://www.formula1.com/en/results.html/2023/drivers.html</a></p>
    </div>
  `;
}

// Event listener for search button click
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', fetchRacersAndPopulateCards); // I'm using a 'click' and a callback function to genetare the racers (call the racers from my local server)

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



/*
"api": "https://rickandmortyapi.com/api",
"characters": "https://rickandmortyapi.com/api/character",
"locations": "https://rickandmortyapi.com/api/location",
"episodes": "https://rickandmortyapi.com/api/episode"
*/

fetch('https://rickandmortyapi.com/api/character')
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('HTTP error ' + response.status);
    }
  })
  .then(function(data) {
    console.log(data);
    listCharacters(data);
  })
  .catch(function(error) {
    console.log(error)
  });

  function listCharacters(data){
    const mainUL = document.createElement('ol');
    for (let i = 0; i < data.results.length; i++) {
        const monthLI = document.createElement('li');
        monthLI.innerHTML = data.results.name + ':';

        const eventsUL = document.createElement('ul');
        monthLI.appendChild(eventsUL);
    }
    document.body.appendChild(mainUL);
  }


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
    for (let i = 0; i < data.results.length; i++) {
        d = data.results[i];
        console.log(d);
        let div = document.createElement('div');
            div.innerHTML = `<p>${d.name}</p>`;
            document.body.appendChild(div);
        
    }
  }


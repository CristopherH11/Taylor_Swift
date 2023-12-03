document.addEventListener('DOMContentLoaded', function () {
  const songForm = document.getElementById('songForm');
  const songText = document.getElementById('songText');
  const songList = document.getElementById('songList');
  const resultDiv = document.getElementById('result');
  const temperatureSlider = document.getElementById('temperatureSlider');

  // Cargar canciones guardadas al iniciar
  loadSavedSongs();

  songForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const newSongText = songText.value.trim();

      if (newSongText !== '') {
          // Generar y mostrar la canción
          const generatedSong = generateSong(newSongText, temperatureSlider.value);
          displayGeneratedSong(generatedSong);

          // Guardar la canción en la lista y en el local storage
          saveSong(newSongText);
          songText.value = '';
      }
  });

  function loadSavedSongs() {
      const storedSongs = JSON.parse(localStorage.getItem('userSongs')) || [];
      storedSongs.forEach(song => {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.textContent = song;
          songList.appendChild(listItem);
      });
  }

const generateSong = async (inputData, temperature) => {
  const response = await fetch('/generate', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: [inputData] }),
  });
  return await 'Cancion generada: ' + response.json().prediction;
}


  function displayGeneratedSong(song) {
      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = song;
      resultDiv.innerHTML = ''; // Limpiar resultados anteriores
      resultDiv.appendChild(resultParagraph);
  }

  function saveSong(song) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = song;
      songList.appendChild(listItem);

      // TODO: Conectar con auth
      const storedSongs = JSON.parse(localStorage.getItem('userSongs')) || [];
      storedSongs.push(song);
      localStorage.setItem('userSongs', JSON.stringify(storedSongs));
  }
});

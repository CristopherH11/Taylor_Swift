document.addEventListener('DOMContentLoaded', function () {
  const songForm = document.getElementById('songForm');
  const songText = document.getElementById('songText');
  const songList = document.getElementById('songList');
  const resultDiv = document.getElementById('result');
  const temperatureSlider = document.getElementById('temperatureSlider');
  const user = localStorage.getItem('userinfo_id');

  // Cargar canciones guardadas al iniciar
  loadSavedSongs();

  songForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const newSongText = songText.value.trim();

      if (newSongText !== '') {
          // Generar y mostrar la canción
          generateSong(newSongText, temperatureSlider.value);
          // Guardar la canción en la lista y en el local storage
          saveSong(newSongText);
          songText.value = '';
      }
  });

  function loadSavedSongs() {
      const storedSongs = JSON.parse(localStorage.getItem(user + 'Songs')) || [];
      storedSongs.forEach(song => {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.textContent = song;
          songList.appendChild(listItem);
      });
  }

const generateSong = async (inputData, temperature) => {
  await fetch('/generate', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: [inputData, temperature] }),
  }).then(response => response.json())
  .then(data => displayGeneratedSong(data));
}


function displayGeneratedSong(song) {
  console.log(song);

  resultDiv.innerHTML = '';

  const paragraphs = song.split('\n');

  paragraphs.forEach((paragraph) => {
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = paragraph;
    resultDiv.appendChild(resultParagraph);
  });
}


  function saveSong(song) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = song;
      songList.appendChild(listItem);

      const storedSongs = JSON.parse(localStorage.getItem(user + 'Songs')) || [];
      storedSongs.push(song);
      localStorage.setItem(user + 'Songs', JSON.stringify(storedSongs));
  }
});

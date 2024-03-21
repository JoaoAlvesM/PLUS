const radios = [
  {
    url: 'https://webradio.amsolution.com.br/radio/8020/plus',
    title: 'Fortaleza',
    isPlaying: false,
    width: '7vw',
    svgClass: 'fortaleza',
  },
  {
    url: 'https://webradio.amsolution.com.br/radio/8030/sobral',
    title: 'Sobral',
    isPlaying: false,
    frequency: '105.1',
    width: '5vw',
    svgClass: 'sobral',
  },
  {
    url: 'https://webradio.amsolution.com.br/radio/8140/cariri',
    title: 'Cariri',
    isPlaying: false,
    frequency: '97.1',
    width: '5vw',
    svgClass: 'cariri',
  },

  {
    url: 'https://webradio.amsolution.com.br/radio/8180/aracati',
    title: 'Aracati',
    isPlaying: false,
    frequency: '98.1',
    width: '9vw',
    svgClass: 'aracati',
  },

  {
    url: 'https://webradio.amsolution.com.br/radio/8160/cascavel',
    title: 'Cascavel',
    isPlaying: false,
    frequency: '106.1',
    width: '10vw',
    svgClass: 'cascavel',
  },
  {
    url: 'https://webradio.amsolution.com.br/radio/8120/crateus',
    title: 'Crateús',
    isPlaying: false,
    frequency: '93.3',
    width: '9vw',
    svgClass: 'crateus',
  },

  {
    url: 'https://webradio.amsolution.com.br/radio/8070/iguatu',
    title: 'Iguatu',
    isPlaying: false,
    width: '8.5vw',
    svgClass: 'iguatu',
  },
  {
    url: 'https://webradio.amsolution.com.br/radio/8130/pacajus',
    title: 'Pacajus',
    isPlaying: false,
    frequency: '99.5',
    width: '9vw',
    svgClass: 'pacajus',
  },
  {
    url: 'https://webradio.amsolution.com.br/radio/8150/paraipaba',
    title: 'Paraipaba',
    isPlaying: false,
    frequency: '88.7',
    width: '11vw',
    svgClass: 'paraipaba',
  },
  {
    url: 'https://webradio.amsolution.com.br/radio/8170/santaquiteria',
    title: 'Santa Quitéria',
    isPlaying: false,
    frequency: '106.5',
    width: '14vw',
    svgClass: 'santaquiteira',
  },

  {
    url: 'https://webradio.amsolution.com.br/radio/8090/redencao',
    title: 'Redenção',
    isPlaying: false,
    frequency: '98.7',
    width: '11vw',
    svgClass: 'redencao',
  },
  {
    url: 'https://webradio.amsolution.com.br/radio/8110/catarina',
    title: 'Catarina',
    isPlaying: false,
    frequency: '88.7',
    width: '10vw',
    svgClass: 'catarina',
  },
];
const getPrograma = () => {
  const currentDay = new Date().getDay();
  const currentHour = new Date().getHours();
  let progTitle = '';

  if (
    currentDay >= 0 &&
    currentDay <= 6 &&
    currentHour >= 0 &&
    currentHour < 5
  ) {
    progTitle = 'Corujão da Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 5 &&
    currentHour < 6
  ) {
    progTitle = 'Clube Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 6 &&
    currentHour < 7
  ) {
    progTitle = 'Deu B.O.';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 7 &&
    currentHour < 8
  ) {
    progTitle = 'Ceará News';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 8 &&
    currentHour < 9
  ) {
    progTitle = 'Ao Colo de Jesus e Maria';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 9 &&
    currentHour < 11
  ) {
    progTitle = 'Manhã da Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 12 &&
    currentHour < 14
  ) {
    progTitle = 'Redação da Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 14 &&
    currentHour < 17
  ) {
    progTitle = 'Tarde Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 17 &&
    currentHour < 18
  ) {
    progTitle = 'Tá Todo Mundo Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 18 &&
    currentHour < 19
  ) {
    progTitle = 'As Mais Pedidas';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 19 &&
    currentHour < 20
  ) {
    progTitle = 'A Voz do Brasil';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 20 &&
    currentHour < 22
  ) {
    progTitle = 'Plus Mania';
  } else if (currentDay === 6 && currentHour >= 12 && currentHour < 14) {
    progTitle = 'Festa Plus';
  } else if (currentDay === 6 && currentHour >= 21 && currentHour < 22) {
    progTitle = 'Time Machine';
  } else if (currentDay === 6 && currentHour >= 22 && currentHour < 24) {
    progTitle = 'Upgrade';
  } else if (
    currentDay === 0 &&
    ((currentHour >= 5 && currentHour < 8) ||
      (currentHour >= 20 && currentHour < 22))
  ) {
    progTitle = 'Playlist da Plus';
  } else if (currentDay === 0 && currentHour >= 8 && currentHour < 9) {
    progTitle = 'Terço da Misericórdia';
  } else if (currentDay === 0 && currentHour >= 10 && currentHour < 15) {
    progTitle = 'Domingão da Plus';
  } else if (currentDay === 0 && currentHour >= 15 && currentHour < 19) {
    progTitle = 'Mega Plus';
  } else if (currentDay === 0 && currentHour >= 19 && currentHour < 20) {
    progTitle = 'A Grande Hora';
  } else if (currentDay === 0 && currentHour >= 22 && currentHour < 24) {
    progTitle = 'Sem Limites Para Amar';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 11 &&
    currentHour < 12
  ) {
    progTitle = 'As Melhores da Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 22 &&
    currentHour < 24
  ) {
    progTitle = 'Slow Motion';
  }

  return progTitle;
};
function createElement(type, props, ...children) {
  const element = document.createElement(type);
  Object.assign(element, props);
  children.forEach((child) => {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    element.appendChild(child);
  });
  return element;
}

function renderPlayer() {
  const PlayerContext = {
    isPlaying: false,
    setIsPlaying: function (value) {
      console.log('setIsPlaying called with:', value);
      this.isPlaying = value;
      updatePlayPauseButton();
      const audioElement = document.getElementById('audioElement');
      if (this.isPlaying) {
        console.log('Attempting to play audio');
        audioElement
          .play()
          .catch((error) => console.error('Error playing audio:', error));
      } else {
        console.log('Attempting to pause audio');
        audioElement.pause();
      }
    },
  };

  function updatePlayPauseButton() {
    const playPauseButton = document.getElementById('playPauseButton');
    playPauseButton.textContent = PlayerContext.isPlaying ? 'Pause' : 'Play';
  }

  const playPauseButton = createElement(
    'button',
    {
      id: 'playPauseButton',
      onclick: () => {
        PlayerContext.setIsPlaying(!PlayerContext.isPlaying);
      },
    },
    PlayerContext.isPlaying ? 'Pause' : 'Play'
  );

  const volumeControl = createElement('input', {
    type: 'range',
    min: '0',
    max: '100',
    value: '50',
    onChange: (event) => {},
  });

  const radioSelect = createElement(
    'select',
    {
      id: 'radioSelect',
      oninput: (event) => {
        console.log('Radio select changed:', event.target.value);
        const selectedRadio = radios.find(
          (radio) => radio.title === event.target.value
        );
        if (selectedRadio) {
          console.log('Selected radio:', selectedRadio);
          const audioElement = document.getElementById('audioElement');
          audioElement.src = selectedRadio.url;
          audioElement.load();
          PlayerContext.setIsPlaying(true);
        } else {
          console.log('No radio found for selection');
        }
      },
    },
    ...radios.map((radio) =>
      createElement(
        'option',
        { selected: radio.title === 'Fortaleza' },
        radio.title
      )
    )
  );

  const playerContainer = createElement('div', {
    className: 'containerPlayer',
  });
  playerContainer.appendChild(playPauseButton);
  playerContainer.appendChild(volumeControl);
  playerContainer.appendChild(radioSelect);

  document.body.appendChild(playerContainer);
}

const programDisplay = createElement(
  'div',
  { id: 'programDisplay' },
  'Nenhum programa no momento'
);
document.body.appendChild(programDisplay);
// Função para atualizar a exibição do programa
function updateProgramDisplay() {
  const programDisplay = document.getElementById('programDisplay');
  if (programDisplay) {
    const currentProgram = getPrograma();
    programDisplay.textContent = currentProgram
      ? `Programa atual: ${currentProgram}`
      : 'Nenhum programa no momento';
  }
}

setInterval(updateProgramDisplay, 1000 * 60);

updateProgramDisplay();
const audioElement = createElement('audio', {
  id: 'audioElement',
  src: radios.find((radio) => radio.title === 'Fortaleza').url,
});
document.body.appendChild(audioElement);
// Função para buscar a música atual
function fetchSong() {
  fetch('https://webradio.amsolution.com.br/api/nowplaying/plus', {
    headers: {
      Authorization: 'ec1e12625c87f3fd:3522595694202dccc04b294711eb85cd',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.now_playing.song);
      currentSong =
        data.now_playing.song.title + ' - ' + data.now_playing.song.artist; // Alterado aqui
      updateCurrentSongDisplay();
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
}
function updateCurrentSongDisplay() {
  const songDisplay = document.getElementById('songDisplay');
  if (songDisplay) {
    songDisplay.textContent = currentSong
      ? `Tocando agora: ${currentSong}`
      : 'Nenhuma música tocando';
  }
}

fetchSong();

setInterval(fetchSong, 10000);

const songDisplay = createElement(
  'div',
  { id: 'songDisplay' },
  'Nenhuma música tocando'
);
document.body.appendChild(songDisplay);

renderPlayer();

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
const programas = [
  { dia: [0, 1, 2, 3, 4, 5, 6], inicio: 0, fim: 5, titulo: 'Corujão da Plus' },
  { dia: [1, 2, 3, 4, 5], inicio: 5, fim: 6, titulo: 'Clube Plus' },
  { dia: [1, 2, 3, 4, 5], inicio: 6, fim: 7, titulo: 'Deu B.O.' },
  { dia: [1, 2, 3, 4, 5], inicio: 7, fim: 8, titulo: 'Ceará News' },
  {
    dia: [1, 2, 3, 4, 5, 6],
    inicio: 8,
    fim: 9,
    titulo: 'Ao Colo de Jesus e Maria',
  },
  { dia: [1, 2, 3, 4, 5, 6], inicio: 9, fim: 11, titulo: 'Manhã da Plus' },
  { dia: [1, 2, 3, 4, 5], inicio: 12, fim: 14, titulo: 'Redação da Plus' },
  { dia: [1, 2, 3, 4, 5], inicio: 14, fim: 17, titulo: 'Tarde Plus' },
  { dia: [1, 2, 3, 4, 5], inicio: 17, fim: 18, titulo: 'Tá Todo Mundo Plus' },
  { dia: [1, 2, 3, 4, 5], inicio: 18, fim: 19, titulo: 'As Mais Pedidas' },
  { dia: [1, 2, 3, 4, 5], inicio: 19, fim: 20, titulo: 'A Voz do Brasil' },
  { dia: [1, 2, 3, 4, 5], inicio: 20, fim: 22, titulo: 'Plus Mania' },
  { dia: [6], inicio: 12, fim: 14, titulo: 'Festa Plus' },
  { dia: [6], inicio: 21, fim: 22, titulo: 'Time Machine' },
  { dia: [6], inicio: 22, fim: 24, titulo: 'Upgrade' },
  { dia: [0], inicio: 5, fim: 8, titulo: 'Playlist da Plus' },
  { dia: [0], inicio: 20, fim: 22, titulo: 'Playlist da Plus' },
  { dia: [0], inicio: 8, fim: 9, titulo: 'Terço da Misericórdia' },
  { dia: [0], inicio: 10, fim: 15, titulo: 'Domingão da Plus' },
  { dia: [0], inicio: 15, fim: 19, titulo: 'Mega Plus' },
  { dia: [0], inicio: 19, fim: 20, titulo: 'A Grande Hora' },
  { dia: [0], inicio: 22, fim: 24, titulo: 'Sem Limites Para Amar' },
  {
    dia: [1, 2, 3, 4, 5, 6],
    inicio: 11,
    fim: 12,
    titulo: 'As Melhores da Plus',
  },
  { dia: [1, 2, 3, 4, 5], inicio: 22, fim: 24, titulo: 'Slow Motion' },
];
const getPrograma = () => {
  const currentDay = new Date().getDay();
  const currentHour = new Date().getHours();
  let programaAtual = null;
  let programaAnterior = null;
  let proximoPrograma = null;

  for (let i = 0; i < programas.length; i++) {
    const programa = programas[i];
    if (
      programa.dia.includes(currentDay) &&
      programa.inicio <= currentHour &&
      programa.fim > currentHour
    ) {
      programaAtual = programa;
      programaAnterior = i > 0 ? programas[i - 1] : null;
      proximoPrograma = i < programas.length - 1 ? programas[i + 1] : null;
      break;
    }
  }

  return {
    atual: programaAtual,
    anterior: programaAnterior,
    proximo: proximoPrograma,
  };
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

  function handleRadioChange(event, useSvgClass = false) {
    console.log('Radio select changed:', event.target.value);
    const selectedRadio = radios.find(
      (radio) =>
        (useSvgClass ? radio.svgClass : radio.title) === event.target.value
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
  }

  const radioSelect = createElement(
    'select',
    {
      id: 'radioSelect',
      oninput: (event) => handleRadioChange(event),
    },
    ...radios.map((radio) =>
      createElement(
        'option',
        { selected: radio.title === 'Fortaleza' },
        radio.title
      )
    )
  );

  document.addEventListener('DOMContentLoaded', function () {
    var classes = [
      'paraipaba',
      'crateus',
      'catarina',
      'iguatu',
      'cariri',
      'sobral',
      'santaquiteria',
      'cascavel',
      'redencao',
      'pacajus',
      'fortaleza',
      'aracati',
      'playing',
    ];

    classes.forEach(function (cls) {
      var elements = document.querySelectorAll('.' + cls);
      elements.forEach(function (element) {
        element.addEventListener('click', function () {
          var className;
          if (this.className && this.className.baseVal) {
            className = this.className.baseVal.split(' ')[0];
          }
          console.log(className);
          // Remove a classe 'playing' de todos os elementos
          classes.forEach(function (cls) {
            var elements = document.querySelectorAll('.' + cls);
            elements.forEach(function (element) {
              element.className.baseVal = element.className.baseVal.replace(
                ' playing',
                ''
              );
            });
          });
          // Adiciona a classe 'playing' a todos os elementos com a mesma classe do elemento clicado
          var sameClassElements = document.querySelectorAll('.' + className);
          sameClassElements.forEach(function (el) {
            el.className.baseVal = className + ' playing';
          });
          // Adiciona a classe 'transparent' à classe 'cls-1' quando um elemento SVG é clicado
          var cls1Elements = document.querySelectorAll('.cls-1');
          cls1Elements.forEach(function (el) {
            el.className.baseVal += ' transparent';
          });
          // Chama a função handleRadioChange com o nome da classe como o valor do seletor de rádio
          handleRadioChange({ target: { value: className } }, true);
          this.ownerSVGElement.appendChild(this);
        });
      });
    });
  });

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
    programDisplay.textContent = currentProgram.atual
      ? `Programa atual: ${currentProgram.atual.titulo}`
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

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
    svgClass: 'santaquiteria',
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

  let style = document.createElement('style');
  style.innerHTML = `
  .slide-in {
    animation: slideIn ease 0.5s;
    animation-fill-mode: forwards;
  }
  .slide-out {
    animation: slideOut ease 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes slideIn {
    0% {transform: translateY(-100%); opacity: 0;}
    100% {transform: translateY(0); opacity: 1;}
  }
  @keyframes slideOut {
    0% {transform: translateY(0); opacity: 1;}
    100% {transform: translateY(-100%); opacity: 0;}
  }
`;
  document.head.appendChild(style);
  function applyAnimations(radioTitle) {
    console.log('Applying animations for radio:', radioTitle);

    // Check if radioTitle is not undefined
    if (radioTitle) {
      // Remove classes from previously selected radio
      document
        .querySelectorAll('.pulsando, .visivel')
        .forEach(function (element) {
          element.classList.remove('pulsando');
          element.classList.remove('visivel');
        });

      // Add classes to selected radio
      let formattedTitle = formatRadioTitle(radioTitle);
      if (radioTitle === 'Fortaleza') {
        formattedTitle = 'Rede';
      }
      const selectedImage = document.getElementById(`imagem-${formattedTitle}`);
      const selectedCircle = document.getElementById(
        `circulo-${formattedTitle}`
      );
      if (selectedImage && selectedCircle) {
        selectedImage.classList.add('pulsando');
        selectedCircle.classList.add('visivel');
      }

      console.log('Animations applied for radio:', radioTitle);
    } else {
      console.log('Cannot apply animations: radioTitle is undefined');
    }
  }
  function updatePlayPauseButton() {
    const playPauseButton = document.getElementById('playPauseButton');
    const playButton = document.getElementById('playButton');
    const playSVG =
      '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="#541084" viewBox="0 0 256 256"><path d="M176,128a12,12,0,0,1-5.17,9.87l-52,36A12,12,0,0,1,100,164V92a12,12,0,0,1,18.83-9.87l52,36A12,12,0,0,1,176,128Zm60,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path></svg>';
    const pauseSVG =
      '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="#541084" viewBox="0 0 256 256"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM116,96v64a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Z"></path></svg>';

    if (PlayerContext.isPlaying) {
      playPauseButton.innerHTML = pauseSVG;
      playerContainer.style.display = 'flex';
      playerContainer.classList.remove('slide-out');
      playerContainer.classList.add('slide-in');
      playButton.style.display = 'none';
      playButton.classList.remove('slide-in');
      playButton.classList.add('slide-out');

      // Add 'pulsando' and 'visivel' classes to selected radio
      const selectedRadio = radios.find(
        (radio) => radio.title === PlayerContext.currentRadio
      );
      if (selectedRadio) {
        let formattedTitle = formatRadioTitle(selectedRadio.title);
        if (selectedRadio.title === 'Fortaleza') {
          formattedTitle = 'Rede';
        }
        const selectedImage = document.getElementById(
          `imagem-${formattedTitle}`
        );
        const selectedCircle = document.getElementById(
          `circulo-${formattedTitle}`
        );
        if (selectedImage && selectedCircle) {
          // Remove and add classes to restart animation
          selectedImage.classList.remove('pulsando');
          selectedCircle.classList.remove('visivel');
          setTimeout(function () {
            selectedImage.classList.add('pulsando');
            selectedCircle.classList.add('visivel');
          }, 10); // Add a small delay
        }
      }
    } else {
      playPauseButton.innerHTML = playSVG;
      playerContainer.style.display = 'none';
      playerContainer.classList.remove('slide-in');
      playerContainer.classList.add('slide-out');
      playButton.style.display = 'flex';
      playButton.classList.remove('slide-out');
      playButton.classList.add('slide-in');

      // Remove 'pulsando' and 'visivel' classes from all radios
      document
        .querySelectorAll('.pulsando, .visivel')
        .forEach(function (element) {
          element.classList.remove('pulsando');
          element.classList.remove('visivel');
        });
    }
  }

  const playSVG = 'play';
  const pauseSVG = 'pause';

  const playPauseButton = createElement(
    'button',
    {
      id: 'playPauseButton',
      onclick: () => {
        PlayerContext.setIsPlaying(!PlayerContext.isPlaying);
        applyAnimations(PlayerContext.currentRadio);
        updatePlayPauseButton();
        console.log('Botão play/pause clicado');
        console.log('PlayerContext.isPlaying:', PlayerContext.isPlaying);
      },
      style: `
        background-color: transparent; /* Verde */
        border: none;
        color: #541084;
        padding: 0;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        
        margin: 4px 2px;
        cursor: pointer;
      `,
    },
    PlayerContext.isPlaying ? pauseSVG : playSVG
  );

  const volumeControl = createElement('input', {
    type: 'range',
    min: '0',
    max: '100',
    value: '50',
    onChange: (event) => {},
  });

  function formatRadioTitle(title) {
    return title
      .replace(/\s+/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

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
      PlayerContext.currentRadio = selectedRadio; // Set currentRadio to the selected radio
      applyAnimations(selectedRadio.title);
    } else {
      console.log('No radio found for selection');
    }
  }

  const radioSelect = createElement(
    'select',
    {
      id: 'radioSelect',
      oninput: (event) => handleRadioChange(event),
      onchange: function () {
        var length = 0;
        if (this.value === 'Santa Quitéria') {
          var test = document.createElement('span');
          test.textContent = this.options[this.selectedIndex].textContent;
          document.body.appendChild(test);
          length = test.offsetWidth;
          document.body.removeChild(test);
          this.style.width = Math.max(length, 200) + 'px';
        } else {
          this.style.width = 'auto';
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

  // Dispara o evento 'change' para ajustar a largura inicial do select
  radioSelect.dispatchEvent(new Event('change'));

  document.head.appendChild(style);
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
    var classToTitle = {
      paraipaba: 'Paraipaba',
      crateus: 'Crateús',
      catarina: 'Catarina',
      iguatu: 'Iguatu',
      cariri: 'Cariri',
      sobral: 'Sobral',
      santaquiteria: 'Santa Quitéria',
      cascavel: 'Cascavel',
      redencao: 'Redenção',
      pacajus: 'Pacajus',
      fortaleza: 'Fortaleza',
      aracati: 'Aracati',
      playing: 'Playing',
    };
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

          // Atualiza o valor do select para a classe do elemento clicado
          document.getElementById('radioSelect').value =
            classToTitle[className];
          radioSelect.onchange();
          console.log('Valor selecionado: ', className);
        });
      });
    });
  });
  const programDisplay = createElement(
    'div',
    { id: 'programDisplay' },
    'Nenhum programa no momento'
  );
  document.body.appendChild(programDisplay);
  const playButton = createElement(
    'div',
    {
      id: 'playButton',
      onclick: () => {
        if (PlayerContext.currentRadio) {
          PlayerContext.setIsPlaying(true);
          updatePlayPauseButton();
          applyAnimations(PlayerContext.currentRadio.title);
        } else {
          console.log('Cannot play: PlayerContext.currentRadio is undefined');
        }
      },
      style: `
        display: flex;
        font-size: 20px;
        cursor: pointer;
        padding: 5px 15px;
        background-color: white; 
        color: #541084;
        height: 1rem;
        width: auto; 
        text-align: center;
        justify-content: center;
        align-items: center;
        position: relative;
        top:0.7rem;
        z-index: 99;
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      `,
    },
    'OUÇA AQUI'
  );
  // Função para atualizar a exibição do programa
  function updateProgramDisplay() {
    const programDisplay = document.getElementById('programDisplay');
    if (programDisplay) {
      const currentProgram = getPrograma();
      programDisplay.textContent = currentProgram.atual
        ? // ? `Tocando agora: ${currentProgram.atual.titulo}`
          `Tocando agora `
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
        if (
          data.now_playing.song.artist.toUpperCase() === 'PLUS FM' &&
          data.now_playing.song.title.toUpperCase() === 'AQUI É LEGAL DEMAIS!'
        ) {
          const currentProgram = getPrograma();
          currentSong = currentProgram.atual
            ? `PLUS FM - ${currentProgram.atual.titulo}`
            : 'Nenhum programa no momento';
        } else {
          currentSong =
            data.now_playing.song.artist + ' - ' + data.now_playing.song.title;
        }
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
        ? `${currentSong}`
        : 'PLUS FM - AQUI  É LEGAL DEMAIS!';
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
  const playerContainer = createElement('div', {
    className: 'containerPlayer',
  });
  const columnContainer = createElement('div', {
    className: 'columnContainer',
  });
  const separator = createElement('div', {
    className: 'separator',
  });
  playerContainer.appendChild(playPauseButton);

  const divDropdown = createElement('div', { id: 'divDropdown' });

  const svgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  svgElement.setAttribute('width', '20');
  svgElement.setAttribute('height', '20');
  svgElement.setAttribute('fill', '#541084');
  svgElement.setAttribute('viewBox', '0 0 256 256');

  // Cria o elemento path e anexa ao SVG
  const pathElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  pathElement.setAttribute(
    'd',
    'M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z'
  );
  svgElement.appendChild(pathElement);

  // Anexa o SVG ao botão de play
  playButton.appendChild(svgElement);
  columnContainer.appendChild(programDisplay);
  columnContainer.appendChild(separator);
  columnContainer.appendChild(songDisplay);
  playerContainer.appendChild(columnContainer);
  playerContainer.appendChild(radioSelect);
  document.body.appendChild(playerContainer);
  divDropdown.appendChild(playButton);
  document.body.appendChild(divDropdown);
}

renderPlayer();

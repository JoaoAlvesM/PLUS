
function createElement(type, props, ...children) {
  const element = document.createElement(type);
  Object.assign(element, props);
  children.forEach(child => {
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
     setIsPlaying: function(value) {
       this.isPlaying = value;
       updatePlayPauseButton();
     },

  };
 

  function updatePlayPauseButton() {
     const playPauseButton = document.getElementById('playPauseButton');
     playPauseButton.textContent = PlayerContext.isPlaying ? 'Pause' : 'Play';
  }
 

  const playPauseButton = createElement('button', {
     id: 'playPauseButton',
     onClick: () => {
       PlayerContext.setIsPlaying(!PlayerContext.isPlaying);
     }
  }, PlayerContext.isPlaying ? 'Pause' : 'Play');
 

  const volumeControl = createElement('input', {
     type: 'range',
     min: '0',
     max: '100',
     value: '50',
     onChange: (event) => {

     }
  });
 

  const playerContainer = createElement('div', { className: 'containerPlayer' });
  playerContainer.appendChild(playPauseButton);
  playerContainer.appendChild(volumeControl);
 

  document.body.appendChild(playerContainer);
 }
 

 renderPlayer();
 
document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLowerCase());
});

// document.body.addEventListener('keydown', (event) => {
//   if (event.code == "F12") {
//     window.location.href = "https://google.com.br";
//   }
// });

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value;

  if (song !== "") {

    let songArray = song.split('');
    playComposition(songArray);
  }

});


function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  } 

  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 250);
  }
   
};

function playComposition(songArrays) {

  let wait = 0;
  
  for (let songItem of songArrays) {

    setTimeout(() => {
     
       playSound(`key${songItem}`);
   }, wait);
    wait += 270;
  
  }

};
